import store from "../store";

const routes = [{
        path: "/",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/Index.vue")
        }],
        beforeEnter(to, from, next) {
            if (store.state.auth.loggedIn) {
                next();
            } else {
                next("/login");
            }
        }
    },
    {
        path: "/project/create",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/CreateProject.vue")
        }],
        beforeEnter(to, from, next) {
            if (store.state.auth.loggedIn) {
                next();
            } else {
                next("/login");
            }
        }
    },
    {
        path: "/team/create",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/CreateTeam.vue")
        }],
        beforeEnter(to, from, next) {
            if (store.state.auth.loggedIn) {
                next();
            } else {
                next("/login");
            }
        }
    },
    {
        path: "/channel",
        component: () =>
            import ("layouts/MainLayout.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/Channel.vue")
        }],
        beforeEnter(to, from, next) {
            if (store.state.auth.loggedIn) {
                next();
            } else {
                next("/login");
            }
        }
    },
    {
        path: "/login",
        component: () =>
            import ("layouts/LoggedOut.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/Login.vue")
        }]
    },
    {
        path: "/register",
        component: () =>
            import ("layouts/LoggedOut.vue"),
        children: [{
            path: "",
            component: () =>
                import ("pages/Register.vue")
        }]
    }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
    routes.push({
        path: "*",
        component: () =>
            import ("pages/Error404.vue")
    });
}

export default routes;