<template>
    <div id="thegem-options" v-bind:class="classObject">

        <div class="options-top-panel">
            <div class="container">
                <div class="left-area">
                    <div class="logo">
                        <router-link to="#"><img src="@/assets/img/logo.png"> <span>THEGEM <i>v{{ version }}</i></span></router-link>
                    </div>
                    <div class="title">{{ $t('topPanel.title') }}</div>
                    <!--
                    <div class="search">
                        <form>
                            <to-input type="text" :placeholder="$t('topPanel.search')" icon="search"/>
                        </form>
                    </div>
                    -->
                </div>
                <div class="right-area">
                   <!--
                    <div class="select">
                        <form>
                            <div class="form-line">
                                <i class="select-icon">
                                    <to-svg-icon name="health-data"/>
                                </i>
                                <to-select :placeholder="$t('topPanel.preset')" :options="[
                                        {value:'1',label:'1. Lorem Ipsum',rightButton:{icon:'eye',event:''}},
                                        {value:'2',label:'2. Dolor Sit',rightButton:{icon:'trash-can',event:''}},
                                        {value:'3',label:'3. Amet',rightButton:{icon:'trash-can',event:''}}
                                    ]">
                                </to-select>
                            </div>
                        </form>
                    </div>
                    <div class="list">
                        <ul>
                            <li>
                                <router-link to="#">
                                    <to-svg-icon v-tooltip.bottom="$t('button.save_layout')" name="save-as"/>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                     -->
                    <div class="switch">
                        <to-switch
                            :value="getSetting('theme')" @input="setSetting('theme',$event)"
                            :showValueTitle="false" falseValueIcon="moon-and-stars" trueValueIcon="sun"
                            falseValue="light" trueValue="dark" class-name="theme-switcher"
                        />
                    </div>
                </div>

            </div>
        </div>

        <div class="options-content">
            <div class="left-sidebar" v-bind:class="{'': collapsed, 'open': !collapsed}">
                <div class="main-menu" v-sticky sticky-offset="{top: 30}">
                    <to-menu-item :title="$t('menu.general')" icon="settings" route="/general" routeLink="/general/theme-layout">
                        <router-link to="/general/theme-layout"><span>{{ $t('menu.general_theme-layout') }}</span></router-link>
                        <router-link to="/general/logo-and-identity"><span>{{ $t('menu.general_logo-and-identity') }}</span></router-link>
                        <router-link to="/general/popups"><span>{{ $t('menu.general_popups') }}</span></router-link>
                    </to-menu-item>
                    <to-menu-item :title="$t('menu.menu-and-header')" icon="navigation-toolbar-top" route="/menu-and-header" routeLink="/menu-and-header/layout">
                        <router-link to="/menu-and-header/layout"><span>{{ $t('menu.menu-and-header_layout') }}</span></router-link>
                        <router-link to="/menu-and-header/typography"><span>{{ $t('menu.menu-and-header_typography') }}</span></router-link>
                        <router-link to="/menu-and-header/colors"><span>{{ $t('menu.menu-and-header_colors') }}</span></router-link>
                    </to-menu-item>
                    <to-menu-item :has-children="false" :title="$t('menu.title-area')" icon="align-text-top" route="/title-area"></to-menu-item>
                    <to-menu-item :title="$t('menu.footer')" icon="navigation-toolbar-bottom" route="/footer" routeLink="/footer/layout">
                        <router-link to="/footer/layout"><span>{{ $t('menu.footer_layout') }}</span></router-link>
                        <router-link to="/footer/colors"><span>{{ $t('menu.footer_colors') }}</span></router-link>
                    </to-menu-item>
                    <!--<to-menu-item :title="$t('menu.builder-elements')" icon="diversity" route="#"></to-menu-item>-->
                    <to-menu-item :title="$t('menu.typography')" icon="font-size" route="/typography" routeLink="/typography/headings-and-body">
                        <router-link to="/typography/headings-and-body"><span>{{ $t('menu.typography_headings-and-body') }}</span></router-link>
                        <router-link to="/typography/elements"><span>{{ $t('menu.typography_elements') }}</span></router-link>
                        <!--<router-link to="/typography/self-hosted-fonts/"><span>{{ $t('menu.typography_self-hosted-fonts') }}</span></router-link>-->
                    </to-menu-item>
                    <to-menu-item :title="$t('menu.colors')" icon="paint-palette" route="/colors" routeLink="/colors/elements">
                        <router-link to="/colors/elements"><span>{{ $t('menu.colors_elements') }}</span></router-link>
                        <router-link to="/colors/icons"><span>{{ $t('menu.colors_icons') }}</span></router-link>
                        <router-link to="/colors/pagination"><span>{{ $t('menu.colors_pagination') }}</span></router-link>
                        <router-link to="/colors/forms"><span>{{ $t('menu.colors_forms') }}</span></router-link>
                        <router-link to="/colors/hovers"><span>{{ $t('menu.colors_hovers') }}</span></router-link>
                    </to-menu-item>
                    <to-menu-item :title="$t('menu.posttypes')" icon="index" route="/posttypes" routeLink="/posttypes/quickfinders">
                        <router-link to="/posttypes/quickfinders"><span>{{ $t('menu.posttypes_quickfinders') }}</span></router-link>
                        <router-link to="/posttypes/galleries"><span>{{ $t('menu.posttypes_galleries') }}</span></router-link>
                        <router-link to="/posttypes/portfolio-grids"><span>{{ $t('menu.posttypes_portfolio-grids') }}</span></router-link>
                        <router-link to="/posttypes/testimonials"><span>{{ $t('menu.posttypes_testimonials') }}</span></router-link>
                    </to-menu-item>
                    <to-menu-item :title="$t('menu.single-pages')" icon="screensharing" route="/single-pages" routeLink="/single-pages/post">
                        <router-link to="/single-pages/post"><span>{{ $t('menu.single-pages_post') }}</span></router-link>
                        <router-link to="/single-pages/page"><span>{{ $t('menu.single-pages_page') }}</span></router-link>
                        <router-link to="/single-pages/portfolio"><span>{{ $t('menu.single-pages_portfolio') }}</span> </router-link>
                        <router-link v-if="isWooCommerce" to="/single-pages/product-page"><span>{{ $t('menu.woocommerce_product-page') }}</span></router-link>
                        <router-link :to="'/single-pages/custom-posts/' + customPost.value + '?label=' + customPost.label" v-for="customPost in customPostTypes" :key="customPost.value">
                            <span>{{ customPost.label }}</span>
                        </router-link>
                        <router-link to="/single-pages/coming-soon-and-404"><span>{{ $t('menu.single-pages_coming-soon-and-404') }}</span></router-link>
                    </to-menu-item>
                    <to-menu-item :title="$t('menu.archive-pages')" icon="browse-folder" route="/archive-pages" routeLink="/archive-pages/blog">
                        <router-link to="/archive-pages/blog"><span>{{ $t('menu.archive-pages_blog') }}</span></router-link>
                        <router-link to="/archive-pages/search"><span>{{ $t('menu.archive-pages_search') }}</span></router-link>
                        <router-link v-if="isWooCommerce" to="/archive-pages/product-categories"><span>{{ $t('menu.archive-pages_product-categories') }}</span></router-link>
                        <router-link :to="'/archive-pages/custom-taxonomies/' + taxonomy.value + '?label=' + taxonomy.label" v-for="taxonomy in customTaxonomies" :key="taxonomy.value">
                            <span>{{ taxonomy.label }}</span>
                        </router-link>
                    </to-menu-item>
                    <to-menu-item v-if="isWooCommerce" :title="$t('menu.woocommerce')" icon="shopping-bag" route="/woocommerce" routeLink="/woocommerce/product-layout">
                        <router-link to="/woocommerce/product-layout"><span>{{ $t('menu.woocommerce_product-layout') }}</span></router-link>
                        <router-link to="/woocommerce/product-layout-archive"><span>{{ $t('menu.woocommerce_product-layout-archive') }}</span></router-link>
                        <router-link to="/woocommerce/product-styles"><span>{{ $t('menu.woocommerce_product-styles') }}</span></router-link>
                        <router-link to="/woocommerce/cart-and-checkout"><span>{{ $t('menu.woocommerce_cart-and-checkout') }}</span></router-link>
                        <router-link to="/woocommerce/extra-options"><span>{{ $t('menu.woocommerce_extra-options') }}</span></router-link>
                    </to-menu-item>
                    <!--<to-menu-item :has-children="false" :title="$t('menu.seo')" icon="combo-chart" route="/seo"></to-menu-item>-->
                    <to-menu-item :title="$t('menu.performance')" icon="speed" route="/performance" routeLink="/performance/page-speed">
                        <router-link to="/performance/page-speed"><span>{{ $t('menu.performance_page-speed') }}</span></router-link>
                        <router-link to="/performance/animations"><span>{{ $t('menu.performance_animations') }}</span></router-link>
                    </to-menu-item>
                    <to-menu-item :title="$t('menu.contacts-and-socials')" icon="secured-letter" route="/contacts-and-socials" routeLink="/contacts-and-socials/socials">
                        <router-link to="/contacts-and-socials/socials"><span>{{ $t('menu.contacts-and-socials_socials') }}</span></router-link>
                        <router-link to="/contacts-and-socials/contacts"><span>{{ $t('menu.contacts-and-socials_contacts') }}</span></router-link>
                    </to-menu-item>
                    <to-menu-item :title="$t('menu.custom-css-js')" icon="source-code" route="/custom-css-js" routeLink="/custom-css-js/custom-css">
                        <router-link to="/custom-css-js/custom-css"><span>{{ $t('menu.custom-css-js_custom-css') }}</span></router-link>
                        <router-link to="/custom-css-js/custom-js"><span>{{ $t('menu.custom-css-js_custom-js') }}</span></router-link>
                        <router-link to="/custom-css-js/tracking-code"><span>{{ $t('menu.custom-css-js_tracking-code') }}</span></router-link>
                    </to-menu-item>
                    <to-menu-item :has-children="false" :title="$t('menu.extras')" icon="idea" route="/extras"></to-menu-item>
                    <to-menu-item :has-children="false" :title="$t('menu.backup')" icon="database-backup" route="/backup"></to-menu-item>
                    <to-menu-item :has-children="false" :title="$t('menu.reset')" icon="rotate" route="/reset"></to-menu-item>
                    <!--<to-menu-item :has-children="false" :title="$t('menu.system-status')" icon="post-settings" route="/system-status"></to-menu-item>-->

                    <div v-bind:class="{'menu-open':true, '': collapsed, 'open': !collapsed}" v-on:click="toggleCollapsing()">
                        <button type="button"><i><to-svg-icon name="arrow-bullet-right"/></i></button>
                    </div>
                </div>
            </div>

            <div class="layout-wrapper">
                <div class="control-panel">
                    <div class="breadcrumb">
                        <ul>
                            <li v-for="item in breadcrumbs" v-bind:key="item.path">
                                <i class="sep"><to-svg-icon name="arrow-bullet-right"/></i>
                                <router-link :to="item.path">{{item.title}}</router-link>
                            </li>
                        </ul>
                    </div>
                    <div class="controls">
                        <ul class="btn-group">
                            <li>
                                <to-button
                                    icon="eye"
                                    :disabled="!getExtra('invite_preview')"
                                    v-tooltip.bottom="$t('button.preview_changes')"
                                    :type="getExtra('invite_preview') ? 'primary' : 'secondary'"
                                    v-on:click="preview()">
                                </to-button>
                            </li>
                            <li>
                                <to-button
                                    :icon="getExtra('options_saving') ? 'preloader' : 'save'"
                                    :disabled="!getExtra('options_modified')"
                                    v-tooltip.bottom="$t('button.save_changes')"
                                    :type="getExtra('options_modified') ? 'primary animation-spin' : 'secondary'"
                                    v-on:click="save()">
                                </to-button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="view-content">
                    <router-view/>
                </div>

                <div v-bind:class="{'sticky-saved':true, 'show': getExtra('show_saved_notification')}" v-sticky sticky-side="bottom">
                    <div class="alert">
                        <i><to-svg-icon name="ok"/></i><span>{{getExtra('saved_notification_text')}}</span>
                    </div>
                </div>

                <div class="sticky-sidebar" v-sticky sticky-side="bottom">
                    <div class="navigate">
                        <div class="caption"><i><to-svg-icon name="up-down-arrow"/></i></div>
                        <to-panel-navigation class="horizontal"/>
                    </div>
                    <div class="controls">
                        <ul class="btn-group">
                            <li>
                                <to-button
                                    icon="eye"
                                    :disabled="!getExtra('invite_preview')"
                                    v-tooltip.bottom="$t('button.preview_changes')"
                                    :type="getExtra('invite_preview') ? 'primary' : 'secondary'"
                                    v-on:click="preview()">
                                </to-button>
                            </li>
                            <li>
                                <to-button
                                    :icon="getExtra('options_saving') ? 'preloader' : 'save'"
                                    :disabled="!getExtra('options_modified')"
                                    v-tooltip.bottom="$t('button.save_changes')"
                                    :type="getExtra('options_modified') ? 'primary animation-spin': 'secondary'"
                                    v-on:click="save()">
                                </to-button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="right-sidebar">
                <div class="sticky" v-sticky sticky-offset="{top: 60}">
                    <div class="controls">
                        <ul class="btn-group">
                            <li>
                                <to-button
                                    icon="eye"
                                    :disabled="!getExtra('invite_preview')"
                                    v-tooltip.bottom="$t('button.preview_changes')"
                                    :type="getExtra('invite_preview') ? 'primary' : 'secondary'"
                                    v-on:click="preview()">
                                </to-button>
                            </li>
                            <li>
                                <to-button
                                    :icon="getExtra('options_saving') ? 'preloader' : 'save'"
                                    :disabled="!getExtra('options_modified')"
                                    v-tooltip.bottom="$t('button.save_changes')"
                                    :type="getExtra('options_modified') ? 'primary animation-spin': 'secondary'"
                                    v-on:click="save()">
                                </to-button>
                            </li>
                        </ul>
                    </div>
                    <div class="navigate">
                        <div class="caption"><i><to-svg-icon name="up-down-arrow"/></i><span>Scroll To:</span></div>
                        <to-panel-navigation/>
                    </div>
                </div>
            </div>
        </div>

        <modals-container/>
    </div>
</template>

<style lang="scss" src="@/assets/scss/main.scss"></style>

<script>
import {addHelpers} from '@/services/helper';
import config from '@/services/config';

export default addHelpers({
    data: () => {
        return {
            breadcrumbs: [],
            collapsed: true,
            showSavedNotification: false,
            showSavedNotificationTimeoutHandler: null,
            customPostTypes: JSON.parse(JSON.stringify(config.customPostTypes)),
            customTaxonomies: JSON.parse(JSON.stringify(config.customTaxonomies)),
        }
    },

    computed: {
        classObject() {
            const classObj = {};
            classObj['theme-' + this.getSetting('theme')] = true;

            return classObj;
        },

        version() {
            return config.version;
        },

        isWooCommerce() {
            return config.isWooCommerce;
        }
    },

    methods: {
        toggleCollapsing() {
            this.collapsed = !this.collapsed;
        },

        save() {
            this.$store.dispatch('save');
        },

        preview() {
            this.$store.dispatch('preview');
        }
    },

    watch: {
        '$route'(to) {
            this.breadcrumbs = [];
            for (const route of to.matched) {
                this.breadcrumbs.push({
                    title: this.$i18n.t('menu' + route.path.replace(/\/:.*/, '').replace('/', '.').replace('/', '_')),
                    path: route.path
                });
            }
        }
    }
});
</script>
