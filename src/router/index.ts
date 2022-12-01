import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";
import { useIntroStore } from "../store/intro";
import { storeToRefs } from "pinia";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        alias: ['/home', '/main', '/index'],
        component: () => import("@/views/Home.vue"),
    },
    {
        path: "/about",
        component: () => import("@/views/About.vue"),
    },
    {
        path: "/intro",
        component: () => import("@/views/Intro.vue"),
        meta: { hideHeader: true }
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

const router: Router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const introStore = useIntroStore();
    const { isShowHeader } = storeToRefs(introStore);

    if (to.meta.hideHeader) {
        introStore.hideHeader();
    } else {
        introStore.showHeader();
    }

    if (to.path == '/intro') {
        next();
    }

    if (introStore.isWatchedIntro()) {
        next();
    } else {
        next({ path: '/intro' })
    }
});

export default router;
