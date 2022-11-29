import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/about",
        component: () => import("@/views/About.vue"),
    },
    {
        path: "/intro",
        component: () => import("@/views/Intro.vue"),
    },
    {
        path: "/portfolio",
        component: () => import("@/views/Portfolio.vue"),
    },
    {
        path: "/contack",
        component: () => import("@/views/Contack.vue"),
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
