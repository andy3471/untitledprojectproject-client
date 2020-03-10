import store from 'src/store'

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
            console.log(store.getters)
            next()
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