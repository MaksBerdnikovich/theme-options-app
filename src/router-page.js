import Vue from 'vue';
import VueRouter from 'vue-router';
import config from '@/services/config';

Vue.use(VueRouter);

const localStorageKey = 'thegem_page_options_last_route';

const routes = [
    {
        path: '/',
        redirect: '/title-area'
    },
    {
        path: '/menu-and-header/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/menu-and-header.vue'),
    },
    {
        path: '/title-area/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/title-area.vue'),
    },
    {
        path: '/content-and-sidebar/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/content-and-sidebar.vue'),
    },
    {
        path: '/footer/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/footer.vue'),
    },
    {
        path: '/onepager-and-scrollers/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/onepager-and-scrollers.vue'),
    },
    {
        path: '/extras/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/extras.vue'),
    },
    {
        path: '/custom-fields/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/custom-fields.vue'),
    },
    {
        path: '/layout/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/layout.vue'),
    },
    {
        path: '/post-settings/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/post-settings.vue'),
    },
    {
        path: '/post-format/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/post-format.vue'),
    },
    {
        path: '/post-layout-custom/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/post-layout-custom.vue'),
    },
    {
        path: '/post-format-custom/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/post-format-custom.vue'),
    },
    {
        path: '/page-layout/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/page-layout.vue'),
    },
    {
        path: '/portfolio-item-settings/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/portfolio-item-settings.vue'),
    },
    {
        path: '/portfolio-page-layout/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/portfolio-page-layout.vue'),
    },
    {
        path: '/product-page-settings/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/product-page-settings.vue'),
    },
    {
        path: '/product-layout/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/product-layout.vue'),
    },
    {
        path: '/product-additional-tabs/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/product-additional-tabs.vue'),
    },
    {
        path: '/product-layout-archive/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/product-layout-archive.vue'),
    },
    {
        path: '/blog-archive-layout/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/blog-archive-layout.vue'),
    },
    {
        path: '/blog-archive-layout-custom/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/blog-archive-layout-custom.vue'),
    },
    {
        path: '/popups/:navigationParams?',
        component: () => import(/* webpackMode: "eager" */'./views/page-options/popups.vue'),
    }
];

var router;

if (config.isPage || config.isTaxonomy) {
    router = new VueRouter({
        mode: 'abstract',
        routes
    });

    router.afterEach((to) => {
        localStorage[localStorageKey] = to.path;

        setTimeout( () => {
            let els = document.getElementsByClassName('to-panel');

            if (els.length > 0) {
                var contEls = document.getElementsByClassName('interface-interface-skeleton__content');
                var options = {container: contEls.length>0 ? '.interface-interface-skeleton__content':'body'};

                router.app.$scrollTo(els[0], 1, options);
            }
        }, 0);
    });

    let path = localStorage[localStorageKey];

    // If add new post then return to layout
    const pathArray = window.location.pathname.split('/');
    const pathName = pathArray[pathArray.length - 1];

    if ((config.postType == 'post' && path != '/post-settings') || (config.postType == 'post' && pathName == 'post-new.php')){
        path = '/post-settings';
    }
    if ((config.postType == 'product' && path != '/product-layout') || (config.postType == 'product' && pathName == 'post-new.php')) {
        path = '/product-layout';
    }
    if ((config.postType == 'thegem_pf_item' && path != '/portfolio-page-layout') || (config.postType == 'thegem_pf_item' && pathName == 'post-new.php')) {
        path = '/portfolio-page-layout';
    }
    if ((config.postType == 'page' && path != '/page-layout') || (config.postType == 'page' && pathName == 'post-new.php')) {
        path = '/page-layout';
    }
    if (config.postType != 'post' && config.postType != 'product' && config.postType != 'thegem_pf_item' && config.postType != 'page' && pathName == 'post-new.php') {
        path = '/post-layout-custom';
    }

    // If add new taxonomy then return to layout
    let isTaxonomyShow = false
    const taxonomyCustomPO = document.getElementById('thegem_taxonomy_custom_page_options')
    if (taxonomyCustomPO !== null && taxonomyCustomPO.checked) {
        isTaxonomyShow = !isTaxonomyShow
    }

    if (config.isTaxonomy && config.taxonomy == 'product_cat' && !isTaxonomyShow) {
        path = '/product-layout-archive';
    }

    if (config.isTaxonomy && (config.taxonomy == 'category' || config.taxonomy == 'post_tag') && !isTaxonomyShow) {
        path = '/blog-archive-layout';
    }

    if (config.isTaxonomy && config.taxonomy != 'product_cat' && config.taxonomy != 'category' && config.taxonomy != 'post_tag' && !isTaxonomyShow){
        path = '/blog-archive-layout-custom';
    }

    // Return to core at other pages
    if (
        !path ||
        (config.postType != 'post' && path == '/post-settings') ||
        (config.postType != 'post' && path == '/post-format') ||
        (config.postType != 'thegem_pf_item' && path == '/portfolio-item-settings') ||
        (config.postType != 'thegem_pf_item' && path == '/portfolio-page-layout') ||
        (config.postType != 'page' && path == '/onepager-and-scrollers') ||
        (config.postType != 'product' && path == '/product-page-settings') ||
        (config.postType != 'product' && path == '/product-layout') ||
        (config.postType == 'post' && path == '/post-format-custom') ||
        (config.postType == 'thegem_pf_item' && path == '/post-format-custom') ||
        (config.postType == 'page' && path == '/post-format-custom') ||
        (config.postType == 'product' && path == '/post-format-custom') ||
        (!config.isTaxonomy && path == '/product-layout-archive') ||
        (!config.isTaxonomy && path == '/blog-archive-layout') ||
        (!config.isTaxonomy && path == '/blog-archive-layout-custom')
    ) {
        path = '/';
    }

    router.replace(path);
}

export default router;

