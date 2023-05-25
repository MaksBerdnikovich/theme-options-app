import Vue from 'vue';
import VueRouter from 'vue-router';
import config from '@/services/config';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/'+config.embeddedPage
    },
    {
        path: '/thegem-dashboard-welcome',
        component: () => import(/* webpackMode: "eager" */'./views/embedded/dummy.vue'),
    },
];

var router;

if (config.isEmbedded) {
    router = new VueRouter({
        mode: 'abstract',
        routes
    });

    router.replace('/');
}

export default router;

