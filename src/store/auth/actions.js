import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.BASE_URL;

export function login(context, details) {
    context.commit('loginError', '');
    if (process.env.MODE === "spa") {
        context.dispatch('loginSpa', details)
    } else {
        context.dispatch('loginToken', details)
    }
}

export function loginSpa(context, details) {
    axios.get("/airlock/csrf-cookie").then(response => {
        console.log(response);
        axios
            .post("/login", {
                email: details.email,
                password: details.password
            })
            .then(response => {
                context.dispatch('getUserDetails');
                this.$router.push("/");
            })
            .catch(error => {
                const key = Object.keys(error.response.data.errors)[0];
                context.commit('loginError', error.response.data.errors[key][0]);
            });
    });
}

export function loginToken(context, details) {
    axios
        .post("/api/login", {
            email: details.email,
            password: details.password,
            device_name: 'upp_app'
        })
        .then(response => {
            context.commit('loginToken', response.data);
            context.dispatch('getUserDetails');
            this.$router.push("/");
        })
        .catch(error => {
            const key = Object.keys(error.response.data.errors)[0];
            context.commit('loginError', error.response.data.errors[key][0]);
        });
}

export function logout(context) {
    if (process.env.MODE === "spa") {
        context.dispatch('logoutSpa')
    } else {
        context.dispatch('logoutToken')
    }
}

export function logoutSpa(context) {
    axios.post('logout').then(response => {
        this.$router.push('/login')
        context.dispatch('logout')
    })
}

export function logoutToken(context) {
    axios.get('/api/logout', { headers: context.getters.headers }).then(response => {
        this.$router.push('/login')
        context.commit('logout')
    })
}

export function getUserDetails(context) {
    axios.get("/api/user", { headers: context.getters.headers })
        .then(response => {
            context.commit('getUserDetails', response.data);
        });
}