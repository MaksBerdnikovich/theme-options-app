import Vue from 'vue';
import VueRouter from 'vue-router';
import config from '@/services/config';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: '/general'
    },
    {
        path: '/general',
        redirect: '/general/theme-layout/panel.layout_style',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'theme-layout/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/general/theme-layout.vue'),
            },
            {
                path: 'logo-and-identity/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/general/logo-and-identity.vue'),
            },
            {
                path: 'popups/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/general/popups.vue'),
            }
        ]
    },
    {
        path: '/menu-and-header',
        redirect: '/menu-and-header/layout',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'layout/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/menu-and-header/layout.vue'),
            },
            {
                path: 'typography/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/menu-and-header/typography.vue'),
            },
            {
                path: 'colors/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/menu-and-header/colors.vue'),
            },
        ]
    },
    {
        path: '/title-area/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/title-area.vue'),
    },
    {
        path: '/footer',
        redirect: '/footer/layout',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'layout/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/footer/layout.vue'),
            },
            {
                path: 'colors/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/footer/colors.vue'),
            }
        ]
    },
    {
        path: '/single-pages',
        redirect: '/single-pages/post',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'post/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/single-pages/post.vue'),
            },
            {
                path: 'page/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/single-pages/page.vue'),
            },
            {
                path: 'portfolio/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/single-pages/portfolio.vue'),
            },
            {
                path: 'product-page/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/single-pages/product-page.vue'),
            },
            {
                path: 'custom-posts/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/single-pages/custom-posts.vue'),
            },
            {
                path: 'coming-soon-and-404/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/single-pages/coming-soon-and-404.vue'),
            }
        ]
    },
    {
        path: '/archive-pages',
        redirect: '/archive-pages/blog',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'blog/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/archive-pages/blog.vue'),
            },
            {
                path: 'search/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/archive-pages/search.vue'),
            },
            {
                path: 'product-categories/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/archive-pages/product-categories.vue'),
            },
            {
                path: 'custom-taxonomies/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/archive-pages/custom-taxonomies.vue'),
            },
        ]
    },
    {
        path: '/posttypes',
        redirect: '/posttypes/quickfinders',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'quickfinders/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/posttypes/quickfinders.vue'),
            },
            {
                path: 'galleries/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/posttypes/galleries.vue'),
            },
            {
                path: 'portfolio-grids/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/posttypes/portfolio-grids.vue'),
            },
            {
                path: 'testimonials/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/posttypes/testimonials.vue'),
            }
        ]
    },
    {
        path: '/colors',
        redirect: '/colors/elements',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'elements/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/colors/elements.vue'),
            },
            {
                path: 'icons/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/colors/icons.vue'),
            },
            {
                path: 'pagination/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/colors/pagination.vue'),
            },
            {
                path: 'forms/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/colors/forms.vue'),
            },
            {
                path: 'hovers/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/colors/hovers.vue'),
            }
        ]
    },
    {
        path: '/typography',
        redirect: '/typography/headings-and-body',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'headings-and-body/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/typography/headings-and-body.vue'),
            },
            {
                path: 'elements/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/typography/elements.vue'),
            },
            {
                path: 'self-hosted-fonts/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/typography/self-hosted-fonts.vue'),
            }
        ]
    },
    {
        path: '/woocommerce',
        redirect: '/woocommerce/general',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'product-layout/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/woocommerce/product-layout.vue'),
            },
            {
                path: 'product-layout-archive/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/woocommerce/product-layout-archive.vue'),
            },
            {
                path: 'product-styles/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/woocommerce/product-styles.vue'),
            },
            {
                path: 'cart-and-checkout/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/woocommerce/cart-and-checkout.vue'),
            },
            {
                path: 'extra-options/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/woocommerce/extra-options.vue'),
            },
        ]
    },
    {
        path: '/seo/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/seo.vue'),
    },
    {
        path: '/performance',
        redirect: '/performance/page-speed',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'page-speed/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/performance/page-speed.vue'),
            },
            {
                path: 'animations/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/performance/animations.vue'),
            }
        ]
    },
    {
        path: '/contacts-and-socials',
        redirect: '/contacts-and-socials/contacts',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'contacts/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/contacts-and-socials/contacts.vue'),
            },
            {
                path: 'socials/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/contacts-and-socials/socials.vue'),
            }
        ]
    },
    {
        path: '/custom-css-js',
        redirect: '/custom-css-js/custom-css',
        component: {
            render(c) {
                return c('router-view')
            }
        },
        children: [
            {
                path: 'custom-css/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/custom-css-js/custom-css.vue'),
            },
            {
                path: 'custom-js/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/custom-css-js/custom-js.vue'),
            },
            {
                path: 'tracking-code/:navigationParams?',
                component: () => import(/* webpackMode: "eager" */'./views/custom-css-js/tracking-code.vue'),
            },
        ]
    },
    {
        path: '/extras/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/extras.vue'),
    },
    {
        path: '/backup/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/backup.vue'),
    },
    {
        path: '/reset/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/reset.vue'),
    },
    {
        path: '/system-status/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/system-status.vue'),
    },
    {
        path: '/all/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/all.vue'),
    },
];

var router;
import {bus} from '@/services/bus';

if (config.isTheme) {
    router = new VueRouter({
        mode: 'hash',
        routes
    });

    router.afterEach((to) => {
        var nav = to.params.navigationParams;

        setTimeout( () => {
            if (nav) {
                let action;

                if (nav.indexOf(':')>=0) {
                    var res = nav.match(/^([^:]*):(.*)$/);
                    if (res) {
                        nav = res[1];
                        action = res[2];
                    }
                }
                router.app.$scrollTo(document.getElementById(nav),0);
                if (action) {
                    bus.$emit('navigationParamsAction', action);
                }
            } else {
                let els = document.getElementsByClassName('to-panel');

                if (els.length > 0) {
                    router.app.$scrollTo(els[0],0);
                }
            }
        }, 0);
    });
}


export default router;

