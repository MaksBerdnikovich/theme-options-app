<template>
    <div id="thegem-options" class="page-options" v-bind:style="style">
        <div class="options-content" v-if="reinitSticky">
            <div class="left-sidebar" v-bind:class="{'': collapsed, 'open': !collapsed}">
                <div class="main-menu" v-sticky sticky-offset="stickyOffset">
                    <to-menu-item v-if="postType === 'post'" :has-children="false" :title="$t('menu.post-layout')" icon="brick-wall" route="/post-settings" />
                    <to-menu-item v-if="postType === 'post'" :has-children="false" :title="$t('menu.post-format')" icon="post-settings" route="/post-format"/>
                    <to-menu-item v-if="isCustomPostType" :has-children="false" :title="$t('menu.post-layout-custom')" icon="brick-wall" route="/post-layout-custom"/>
                    <to-menu-item v-if="isCustomPostType && isHasCustomPostTypeFormats" :has-children="false" :title="$t('menu.post-format-custom')" icon="post-settings" route="/post-format-custom"/>
                    <to-menu-item v-if="postType === 'page'" :has-children="false" :title="$t('menu.page-layout')" icon="brick-wall" route="/page-layout" />
                    <to-menu-item v-if="postType === 'product'" :has-children="false" :title="$t('menu.product-layout')" icon="brick-wall" route="/product-layout"/>
                    <to-menu-item v-if="postType === 'product'" :has-children="false" :title="$t('menu.additional-settings')" icon="product-page-settings" route="/product-page-settings"/>
                    <to-menu-item v-if="postType === 'product'" :has-children="false" :title="$t('menu.product-additional-tabs')" icon="tab" route="/product-additional-tabs"/>
                    <to-menu-item v-if="isBlogTaxonomy" :has-children="false" :title="$t('menu.blog-archive-layout')" icon="brick-wall" route="/blog-archive-layout"/>
                    <to-menu-item v-if="isCustomTaxonomy" :has-children="false" :title="$t('menu.blog-archive-layout-custom')" icon="brick-wall" route="/blog-archive-layout-custom"/>
                    <to-menu-item v-if="isProductTaxonomy" :has-children="false" :title="$t('menu.product-layout-archive')" icon="brick-wall" route="/product-layout-archive"/>
                    <to-menu-item v-if="postType === 'thegem_pf_item'" :has-children="false" :title="$t('menu.portfolio-page-layout')" icon="brick-wall" route="/portfolio-page-layout"/>
                    <to-menu-item v-if="postType === 'thegem_pf_item'" :has-children="false" :title="$t('menu.portfolio-item-settings')" icon="briefcase" route="/portfolio-item-settings"/>
                    <to-menu-item :has-children="false" :title="$t('menu.menu-and-header')" icon="navigation-toolbar-top" route="/menu-and-header" routeLink="/menu-and-header"/>
                    <to-menu-item v-if="getOption('effects_page_scroller') == '0' && !isCartPageBuilder && !isCheckoutPageBuilder" :has-children="false" :title="$t('menu.title-area')" icon="align-text-top" route="/title-area"/>
                    <to-menu-item v-if="!isCartPageBuilder && !isCheckoutPageBuilder && !isBlogArchiveBuilder && !isProductArchiveBuilder && !isSinglePostBuilder && !isPageBuilder && !isPortfolioBuilder && !isCustomPostBuilder && !isCustomTaxonomyBuilder" :has-children="false" :title="$t(`menu.${contentSidebarMenuTitle}`)" icon="ereader" route="/content-and-sidebar"/>
                    <to-menu-item :has-children="false" :title="$t('menu.footer')" icon="navigation-toolbar-bottom" route="/footer"/>
                    <to-menu-item v-if="postType === 'page'" :has-children="false" :title="$t('menu.onepager-and-scrollers')" icon="up-down-arrow" route="/onepager-and-scrollers"/>
                    <to-menu-item :has-children="false" :title="$t('menu.extras')" icon="idea" route="/extras"/>
                    <to-menu-item v-if="!isBlogTaxonomy && !isCustomTaxonomy && !isProductTaxonomy" :has-children="false" :title="$t('menu.custom-fields')" icon="news-feed" route="/custom-fields"/>
                    <to-menu-item :has-children="false" :title="$t('menu.popups')" icon="aspect-ratio" route="/popups"/>
                </div>
            </div>

            <div class="layout-wrapper">
                <div class="view-content">
                    <router-view/>
                </div>
                <div class="sticky-sidebar" v-sticky sticky-side="bottom" sticky-offset="stickyOffsetBottom">
                    <div class="navigate">
                        <div class="caption"><i><to-svg-icon name="up-down-arrow"/></i></div>
                        <to-panel-navigation :scrollContainer="scrollContainer" class="horizontal"/>
                    </div>
                    <div class="controls">
                        <ul class="btn-group">
                            <li>
                                <to-button
                                    v-if="!isTaxonomy"
                                    icon="eye"
                                    v-tooltip.bottom="$t('button.preview_changes')"
                                    :type="'secondary'"
                                    v-on:click="preview()">
                                </to-button>
                            </li>
                            <li>
                                <to-button
                                    icon="save"
                                    v-tooltip.bottom="$t('button.save_changes')"
                                    :disabled="!getOption('options_modified')"
                                    :type="'secondary'"
                                    v-on:click="save()">
                                </to-button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="right-sidebar">
                <div id="sticky-op-control" class="top-sticky" v-sticky sticky-offset="stickyOffset" sticky-z-index="15">
                    <div class="controls">
                        <ul class="btn-group">
                            <li>
                                <to-button
                                    v-if="!isTaxonomy"
                                    icon="eye"
                                    v-tooltip.bottom="$t('button.preview_changes')"
                                    :type="'secondary'"
                                    v-on:click="preview()">
                                </to-button>
                            </li>
                            <li>
                                <to-button
                                    icon="save"
                                    v-tooltip.bottom="$t('button.save_changes')"
                                    :disabled="!getOption('options_modified')"
                                    :type="'secondary'"
                                    v-on:click="save()">
                                </to-button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="sticky-scroll-control" class="sticky" v-sticky sticky-offset="stickyOffset">
                    <div class="navigate">
                        <div class="caption"><i><to-svg-icon name="up-down-arrow"/></i><span>Scroll To:</span></div>
                        <to-panel-navigation :scrollContainer="scrollContainer" />
                    </div>
                </div>
            </div>
        </div>

        <modals-container/>
    </div>
</template>

<style lang="scss" src="@/assets/scss/main.scss"></style>

<script>
import { addHelpers } from '@/services/helper';
import config from '@/services/config';
import ToModalIcon from '@/components/system/to-modal-icon';

export default addHelpers({
    data() {
        return {
            reinitSticky: true,
            stickyOffset: {},
            stickyOffsetBottom: {},
            breadcrumbs: [],
            collapsed: true,
            showSavedNotification: false,
            showSavedNotificationTimeoutHandler: null,
            scrollContainer: 'body',
            style: {}
        }
    },

    created() {
        this.updateStickyOffset(true);
        window.addEventListener('scroll', () => {
            this.updateStickyOffset();
            this.fixStickyScrollControl();
        });

        let el = document.getElementById('thegem_taxonomy_custom_page_options');

        let self = this;

        function updateVisibility() {
            let appEl= document.getElementById('thegem_taxonomy_custom_page_options_boxes2');
            appEl.style.display = el.checked ? 'block' : 'none';

            self.reinitSticky = false;
            setTimeout(()=>{self.reinitSticky=true;});
        }

        if (el) {
            updateVisibility();
            el.addEventListener('change',updateVisibility);
        }

        window.thegemThemeOptions = (window.thegemThemeOptions !== undefined) ? window.thegemThemeOptions : {}
        window.thegemThemeOptions = Object.assign(window.thegemThemeOptions, {
            iconPicker(config) {
                self.setOption('iconSelectorPack', config.pack);
                self.setOption('iconSelectorIcon', config.icon);

                self.$modal.show(ToModalIcon, {
                    iconOption: 'iconSelectorIcon',
                    packOption: 'iconSelectorPack',
                    packs: config.packs
                }, {
                    height: '80%',
                    width: 1082,
                    //height: 'auto'
                }, {
                    closed: function() {
                        config.set(self.getOption('iconSelectorPack'),self.getOption('iconSelectorIcon'));
                    }
                });
            }
        });

    },

    computed: {
        classObject() {
            const classObj = {};

            if (config.isTheme) {
                classObj['theme-' + this.getExtra('options_theme')] = true;
            } else {
                classObj['theme-light'] = true;
            }

            return classObj;
        },

        version() {
            return config.version;
        },

        postType() {
            return config.postType;
        },

        isTaxonomy() {
            return config.isTaxonomy;
        },

        isProductTaxonomy() {
            return config.isTaxonomy && (config.taxonomy === 'product_cat' || config.taxonomy === 'product_tag');
        },

        isBlogTaxonomy() {
            return config.isTaxonomy && (config.taxonomy === 'category' || config.taxonomy === 'post_tag');
        },

        isCustomTaxonomy() {
            return this.isTaxonomy && !this.isProductTaxonomy && !this.isBlogTaxonomy;
        },

        isCustomPostType() {
            return !this.isTaxonomy && config.postType !== 'post' && config.postType !== 'page' && config.postType !== 'product' && config.postType !== 'thegem_pf_item';
        },

        isCartPageBuilder() {
            return config.isCartPageBuilder;
        },

        isCheckoutPageBuilder() {
            return config.isCheckoutPageBuilder;
        },

        // https://app.asana.com/0/1199540649412175/1202822063316849/f - last note
        isBlogArchiveBuilder() {
            return (config.isTaxonomy && this.getOption('blog_archive_item_data.blog_archive_layout_source') === 'builder')
        },

        isProductArchiveBuilder() {
            return (config.isTaxonomy && this.getOption('product_archive_item_data.product_archive_layout_source') === 'builder')
        },

        isCustomTaxonomyBuilder() {
            return (config.isTaxonomy && this.getOption('custom_archive_item_data.layout_source') === 'builder')
        },

        // https://app.asana.com/0/0/1202958595252949/f
        isSinglePostBuilder() {
            return (config.postType === 'post' && (this.getOption('post_item_data.post_layout_settings') === 'custom' && this.getOption('post_item_data.post_layout_source') === 'builder'));
        },

        isPageBuilder() {
            return (config.postType === 'page' && (this.getOption('page_item_data.page_layout_settings') === 'custom' && this.getOption('page_item_data.page_layout_source') === 'builder'));
        },

        isPortfolioBuilder() {
            return (config.postType === 'thegem_pf_item' && (this.getOption('portfolio_item_data.portfolio_layout_settings') === 'custom' && this.getOption('portfolio_item_data.portfolio_layout_source') === 'builder'));
        },

        isCustomPostBuilder() {
            const customPostTypes = JSON.parse(JSON.stringify(config.customPostTypes));
            for(let post of customPostTypes) {
                if (config.postType === post.value && this.getOption('custom_post_item_data.layout_source') === 'builder') {
                    return true;
                }
            }

            return false;
        },

        isHasCustomPostTypeFormats() {
            const customPostTypes = JSON.parse(JSON.stringify(config.customPostTypes));
            for(let post of customPostTypes) {
                if (config.postType === post.value && post.formats) return true;
            }

            return false;
        },

        // https://app.asana.com/0/1199540649412175/1202658420717029/f - last note
        // https://app.asana.com/0/1199540649412175/1202719939015052/f - last note
        contentSidebarMenuTitle() {
            let title = 'content-and-sidebar'

            if (
                (config.postType === 'product' && this.getOption('product_item_data.product_layout_source') === 'builder') ||
                (config.isTaxonomy && this.getOption('product_archive_item_data.product_archive_layout_source') === 'builder') ||
                (config.isTaxonomy && this.getOption('blog_archive_item_data.blog_archive_layout_source') === 'builder')
            ) {
                title = 'content'
            }

            return title
        }
    },

    methods: {
        updateStickyOffset(first) {
            let topOffset = document.getElementById('wpadminbar').offsetHeight;
            const composerMenu = document.getElementById('vc_navbar');

            if (composerMenu && composerMenu.classList.contains("vc_subnav-fixed")) {
                topOffset += composerMenu.offsetHeight;
            }

            var elsGutenbergHeader = document.getElementsByClassName('interface-interface-skeleton__header');
            if (elsGutenbergHeader.length>0) {
                topOffset += elsGutenbergHeader[0].offsetHeight;
            }

            if (this.stickyOffset.top != topOffset) {
                this.stickyOffset = { top: topOffset };

                if (!first) {
                    this.reinitSticky = false;

                    var el = document.getElementsByClassName('options-content');
                    if (el.length>0) {
                        this.style = {height: el[0].offsetHeight + 'px'};
                    }

                    setTimeout(()=>{
                        this.style = {};
                        this.reinitSticky=true;
                    });
                }
            }

            // fix for bottom panel for gutenberg
            var bottomOffset = 0;
            var bottomFooter = document.getElementsByClassName('edit-post-layout__footer');
            if (bottomFooter.length>0) {
                bottomOffset = bottomFooter[0].offsetHeight + 2;
            }

            this.scrollContainer = document.getElementsByClassName('interface-interface-skeleton__content').length>0 ? '.interface-interface-skeleton__content' : 'body';

            if (this.stickyOffsetBottom.bottom != bottomOffset) {
                this.stickyOffsetBottom = { bottom: bottomOffset };
                if (!first) {
                    this.reinitSticky = false;
                    setTimeout(()=>{this.reinitSticky=true;});
                }
            }
        },

        toggleCollapsing() {
            this.collapsed = !this.collapsed;
        },

        markAsSaved() {
            this.setOption('options_outside_parameter_modified', false);
            this.setOption('options_saved_contents', this.getOption('options_current_contents'))
        },

        save() {
            // visual composer

            // second saving
            els = document.getElementsByClassName('editor-post-publish-button');
            if (els.length > 0) {
                els[0].click();
                this.markAsSaved();
                return;
            }

            // first saving
            let els = document.getElementsByClassName('editor-post-publish-panel__toggle');
            if (els.length > 0) {
                els[0].click();
                setTimeout( ()=>{
                    els = document.getElementsByClassName('editor-post-publish-button');
                    if (els.length > 0) {
                        els[els.length-1].click();
                        return;
                    }
                }, 100);
                this.markAsSaved();
                return;
            }

            // page builder
            let el = document.getElementById('publish');
            if (el) {
                el.click();
                this.markAsSaved();
                return;
            }

            // category
            els = document.getElementsByClassName('edit-tag-actions');
            if (els.length>0) {
                let buttons = els[0].getElementsByClassName('button-primary');
                if (buttons.length>0) {
                    buttons[0].click();
                    this.markAsSaved();
                    return;
                }
            }
        },

        preview() {
            // visual composer
            let els = document.getElementsByClassName('editor-post-preview');
            if (els.length > 0) {
                els[0].click();
            }

            // page builder
            let el = document.getElementById('post-preview');
            if (el) {
                el.click();
            }
        },

        fixStickyScrollControl() {
            let stickyScrollControl = document.getElementById('sticky-scroll-control');
            let stickyOpControl = document.getElementById('sticky-op-control');

            if (stickyScrollControl && stickyOpControl) {
                let hidden = false;

                if (stickyScrollControl.style.position == 'fixed' &&
                    stickyOpControl.style.position == 'fixed' &&
                    parseInt(stickyScrollControl.style.top) < parseInt(stickyOpControl.style.top)) {
                    hidden = true;
                }

                stickyScrollControl.style.opacity = hidden ? 0:1;
            }

            /*
            if (document.getElementById('thegem_page_options')) {
                let wrap = document.getElementById('thegem_page_options');
                let vcNavBar = document.getElementById('vc_navbar');

                if (!vcNavBar) {
                    return;
                }

                let stickyScrollControl = wrap.querySelector('#sticky-scroll-control');

                if (stickyScrollControl && stickyScrollControl.classList.contains('top-sticky')) {
                    let inside = wrap.querySelector('.inside');
                    let offset = wrap.offsetTop + inside.offsetHeight + inside.offsetTop;

                    if (vcNavBar.classList.contains('vc_subnav-fixed') && vcNavBar.closest('#wpb_visual_composer').style.display==='block') {
                        offset = offset - vcNavBar.offsetHeight;
                    }

                    if (window.scrollY > offset - stickyScrollControl.offsetHeight - 10) {
                        stickyScrollControl.style.opacity = 0;
                    } else {
                        stickyScrollControl.style.opacity = 1;
                    }
                }
            }
            */
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
