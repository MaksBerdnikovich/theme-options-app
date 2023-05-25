import Vue from 'vue';
import VueRouter from 'vue-router';
import config from '@/services/config';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/'+config.dashboardPage
    },
    {
        path: '/thegem-dashboard-welcome',
        component: () => import(/* webpackMode: "eager" */'./views/dashboard/welcome.vue'),
    },
    {
        path: '/install-required-plugins',
        component: () => import(/* webpackMode: "eager" */'./views/dashboard/plugins.vue'),
    },
    {
        path: '/thegem-importer',
        component: () => import(/* webpackMode: "eager" */'./views/dashboard/demo-import.vue'),
    },
    {
        path: '/thegem-dashboard-importer',
        component: () => import(/* webpackMode: "eager" */'./views/dashboard/demo-import-install-plugin.vue'),
    },
    {
        path: '/thegem-dashboard-manual-and-support',
        component: () => import(/* webpackMode: "eager" */'./views/dashboard/manual-and-support'),
    },
    {
        path: '/thegem-dashboard-system-status',
        component: () => import(/* webpackMode: "eager" */'./views/dashboard/system-status.vue'),
    },
    {
        path: '/thegem-dashboard-changelog',
        component: () => import(/* webpackMode: "eager" */'./views/dashboard/changelog.vue'),
    },
];

var router;

if (config.isDashboard) {
    router = new VueRouter({
        mode: 'abstract',
        routes
    });

    router.replace('/');
}

export default router;

