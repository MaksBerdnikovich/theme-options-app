<template>
    <div>
        <to-panel id="panel.page_speed_image_load">
            <to-panel-group :label-title="$t('panel.image_optimizations')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_image_loading_optimizations')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('page_speed_image_load')" @input="setOption('page_speed_image_load', $event)" :options="pageSpeedImageLoad"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('page_speed_image_load') === 'native'">
                <to-panel-group :label-title="$t('panel.page_speed_lazy_load_exclusions')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.performance_page_speed_lazy_load_exclusions') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('pagespeed_lazy_load_exclusions')" @input="setOption('pagespeed_lazy_load_exclusions',$event)" />
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.page_speed_lazy_load_nth_images')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.performance_page_speed_lazy_load_nth_images') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-block-label-slider-input :value="getOption('pagespeed_lazy_load_nth_images')" @input="setOption('pagespeed_lazy_load_nth_images',$event)" :min="0" :max="1000" unit=""/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div class="to-panel-separator" v-if="getOption('page_speed_image_load') === 'js'">
                <to-panel-group :label-title="$t('panel.image_optimizations_desktop')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.performance_page_speed_image_optimizations_desktop') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch :value="getOption('pagespeed_lazy_images_desktop_enable')" @input="setOption('pagespeed_lazy_images_desktop_enable',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.image_optimizations_mobile')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.performance_page_speed_image_optimizations_mobile') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch :value="getOption('pagespeed_lazy_images_mobile_enable')" @input="setOption('pagespeed_lazy_images_mobile_enable',$event)"/>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.distance_to_viewport')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.performance_page_speed_distance_to_viewport') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-block-label-slider-input :value="getOption('pagespeed_lazy_images_visibility_offset')" @input="setOption('pagespeed_lazy_images_visibility_offset',$event)" :min="0" :max="1000" unit="px"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.any_caching_plugins')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.performance_page_speed_any_caching_plugins_in_use') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch :value="getOption('pagespeed_lazy_images_page_cache_enabled')" @input="setOption('pagespeed_lazy_images_page_cache_enabled',$event)"/>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.caching_minifying">
            <to-panel-group :label-title="$t('panel.caching_plugin')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_caching_plugin')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select :value="getOption('caching_plugin')" @input="setOption('caching_plugin', $event)" :options="cachingPlugins"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('caching_plugin') === 'wp_super_cache'" :label-title="$t('panel.one_click_optimization')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_one_click_optimization')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings" v-if="!optimizer.wpsupercache_active">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-button
                                icon="sync" type="systems"
                                :processing="optimizerActivatingWpSuperCache"
                                v-on:click="optimizerActivateWpSuperCacheInternal()">
                                {{$t('button.start')}}
                            </to-button>
                        </div>
                        <div v-if="optimizer.wpsupercache_error" class="col-1">
                            <to-alert class="danger" :icon="'error'" :title="optimizer.wpsupercache_error"></to-alert>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings" v-if="optimizer.wpsupercache_active">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-button
                                icon="delete-bin" type="systems"
                                v-on:click="optimizerUninstalWpSuperCacheInternal()">
                                {{$t('button.deactivate_caching')}}
                            </to-button>
                        </div>
                        <div class="col-2">
                            <to-button
                                v-if="optimizer.autoptimize_active"
                                :processing="optimizerAutoptimize"
                                icon="delete-bin" type="systems"
                                v-on:click="optimizerCall('optimizerAutoptimizeDeactivate', 'optimizerAutoptimize')">
                                {{$t('button.deactivate_minifying')}}
                            </to-button>
                            <to-button
                                v-if="!optimizer.autoptimize_active"
                                :processing="optimizerAutoptimize"
                                icon="ok" type="systems"
                                v-on:click="optimizerCall('optimizerAutoptimizeActivate', 'optimizerAutoptimize')">
                                {{$t('button.activate_minifying')}}
                            </to-button>
                        </div>
                        <div class="col-2">
                            <to-button
                                icon="sync" type="systems"
                                :processing="optimizerActivatingWpSuperCache"
                                v-on:click="optimizerActivateWpSuperCache()">
                                {{$t('button.redo_optimization')}}
                            </to-button>
                        </div>
                        <div class="col-2">
                            <!--
                            <to-button
                                icon="sync" type="systems"
                                :processing="optimizerRestoring"
                                v-on:click="optimizerCall('optimizerRestore', 'optimizerRestoring')">
                                {{$t('button.optimizer_restore')}}
                            </to-button>
                            -->
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('caching_plugin') === 'wp_super_cache' && optimizer.wpsupercache_active" :label-title="$t('panel.delay_js_execution')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_delay_js_execution')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('delay_js_execution')" @input="setOption('delay_js_execution',$event)"/>
                        </div>
                    </div>
                </div>
                <!--
                <div class="to-changed-settings" v-if="getOption('delay_js_execution') === '1'">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-textarea />
                        </div>
                    </div>
                </div>
                -->
            </to-panel-group>

            <to-panel-group v-if="getOption('caching_plugin') === 'wp_super_cache' && optimizer.wpsupercache_active && getOption('delay_js_execution') === '1'" :label-title="$t('panel.excluded_js_files')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_excluded_js_files_area')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-textarea :value="getOption('excluded_js_files_area')" @input="setOption('excluded_js_files_area',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('caching_plugin') === 'wp_rocket'" :label-title="$t('panel.one_click_optimization')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_one_click_optimization')"/>
                        </div>
                    </div>
                </template>
                <div v-if="!optimizer.activated && optimizer.wprocket_active" class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-button
                                icon="sync" type="systems"
                                :processing="optimizerActivatingWpRocket"
                                v-on:click="optimizerActivateWpRocket()">
                                {{$t('button.start_optimization')}}
                            </to-button>
                        </div>
                    </div>
                </div>
                <div v-if="!optimizer.activated && !optimizer.wprocket_active" class="to-changed-settings">
                    <to-label icon="info" type="alert"><div v-html="$t('optimizer.alert')"/></to-label>
                </div>
                <div v-if="optimizer.activated && optimizer.wprocket_active" class="to-changed-settings">
                    <div class="form-grid">
                        <!--
                        <div v-if="optimizer.error" class="col-1">
                            <to-alert class="danger" :icon="'error'" :title="optimizer.error"></to-alert>
                        </div>
                        -->
                        <div class="col-2">
                            <to-button v-if="optimizer.wprocket_active"
                                :processing="optimizerWPRocketProcessing"
                                icon="delete-bin" type="systems"
                                v-on:click="optimizerCall('optimizerWPRocketDeactivate', 'optimizerWPRocketProcessing')">
                                {{$t('button.deactivate_caching')}}
                            </to-button>
                            <to-button v-if="!optimizer.wprocket_active"
                                :processing="optimizerWPRocketProcessing"
                                icon="ok" type="systems"
                                v-on:click="optimizerCall('optimizerWPRocketActivate', 'optimizerWPRocketProcessing')">
                                {{$t('button.activate_caching')}}
                            </to-button>
                        </div>
                        <div class="col-2">
                            <to-button v-if="optimizer.autoptimize_active"
                                :processing="optimizerAutoptimize"
                                icon="delete-bin" type="systems"
                                v-on:click="optimizerCall('optimizerAutoptimizeDeactivate', 'optimizerAutoptimize')">
                                {{$t('button.deactivate_minifying')}}
                            </to-button>
                            <to-button v-if="!optimizer.autoptimize_active"
                                :processing="optimizerAutoptimize"
                                icon="ok" type="systems"
                                v-on:click="optimizerCall('optimizerAutoptimizeActivate', 'optimizerAutoptimize')">
                                {{$t('button.activate_minifying')}}
                            </to-button>
                        </div>
                        <div class="col-2">
                            <to-button
                                icon="sync" type="systems"
                                :processing="optimizerActivatingWpRocket"
                                v-on:click="optimizerActivateWpRocket()">
                                {{$t('button.redo_optimization')}}
                            </to-button>
                        </div>
                        <div class="col-2">
                            <to-button
                                icon="sync" type="systems"
                                :processing="optimizerRestoring"
                                v-on:click="optimizerCall('optimizerRestore', 'optimizerRestoring')">
                                {{$t('button.optimizer_restore')}}
                            </to-button>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="isWooCommerce && (optimizer.activated || optimizer.wpsupercache_active)" :label-title="$t('panel.force_delay_product_page')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_product_page_force_delay')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('product_page_force_delay')" @input="setOption('product_page_force_delay',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="isWooCommerce && (optimizer.activated || optimizer.wpsupercache_active)" :label-title="$t('panel.force_delay_shop_page')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_shop_page_force_delay')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('shop_page_force_delay')" @input="setOption('shop_page_force_delay',$event)"/>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_preload">
            <to-panel-group :label-title="$t('panel.font_preload')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.performance_page_speed_font_preload') }}
                            <a href="https://web.dev/uses-rel-preload/" target="_blank">{{ $t('general.learn_more') }}</a>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Performance_Font_Preload.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch :value="getOption('font_preload_enabled')" @input="setOption('font_preload_enabled',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.font_preload_icons')" v-if="getOption('font_preload_enabled') == '1'">
                    <div class="form-grid">
                        <div v-for="font of sysFonts" :key="font" class="col-auto">
                            <to-label>{{ font }}</to-label>
                            <to-switch :trueValue="true" :falseValue="false" :value="getFontPreloadValue(font)" @input="setFontPreloadValue(font,$event)"/>
                        </div>
                    </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.font_preload_fonts')" v-if="getOption('font_preload_enabled') == '1'">
                    <div class="form-grid">
                        <div v-for="font of preloadableFonts" :key="font" class="col-auto">
                            <to-label>{{ font }}</to-label>
                            <to-switch :trueValue="true" :falseValue="false" :value="getFontPreloadValue(font)" @input="setFontPreloadValue(font,$event)"/>
                        </div>
                    </div>
            </to-panel-group>

        </to-panel>

        <to-panel id="panel.extras">
            <to-panel-group :label-title="$t('panel.disable_gutenberg_css')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_disable_gutenberg_css')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="1" falseValue="0" :value="getOption('disable_gutenberg_css')" @input="setOption('disable_gutenberg_css',$event)"/>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';
import config from '@/services/config';
import i18n from '@/services/i18n';

export default addHelpers({
    data() {
        return {
            'sysFonts': [
                'Thegem Icons',
                'Elegant Icons',
                'Materialdesign Icons',
                'Fontawesome Icons',
                'Thegem Socials'
            ],
            'optimizerActivatingWpRocket': false,
            'optimizerActivatingWpSuperCache': false,
            'optimizerRestoring': false,
            'optimizerDeactivating': false,
            'optimizerWPRocketProcessing': false,
            'optimizerAutoptimize': false,
            'optimizer': config.optimizer,
            pageSpeedImageLoad: [
                {label: i18n.t('optimizer.lazy_load_native'), value: 'native'},
                {label: i18n.t('optimizer.lazy_load_js'), value: 'js'},
                {label: i18n.t('optimizer.lazy_load_disabled'), value: 'disabled'},
            ],
            cachingPlugins: [
                {label: i18n.t('optimizer.wp_super_cache'), value: 'wp_super_cache'},
                {label: i18n.t('optimizer.wp_rocket'), value: 'wp_rocket'},
            ],
        }
    },

    computed: {
        preloadableFonts() {
            return this.getFontsArray(this.getOption('font_preload_preloadable_fonts'));
        },

        isWooCommerce() {
            return config.isWooCommerce;
        },
    },

    methods: {
        getFontsArray(fontsStr) {
            let fonts = fontsStr.split(',').filter((el) => el!='');

            return fonts;
        },

        getFontPreloadValue(font) {
            let fonts = this.getFontsArray(this.getOption('font_preload_preloaded_fonts'));
            return fonts.indexOf(font)>=0;
        },

        setFontPreloadValue(font, value) {
            let fonts = this.getFontsArray(this.getOption('font_preload_preloaded_fonts'));
            let idx = fonts.indexOf(font);

            if (idx >=0 ) {
                fonts.splice(idx, 1);
            }

            if (value) {
                fonts.push(font);
            }

            this.setOption('font_preload_preloaded_fonts', fonts.join(','));
        },

        optimizerActivateWpRocketInternal() {
            this.optimizerActivatingWpRocket = true;
            window.location.href = 'admin.php?page=thegem-install-optimizers&optimizer=wp-rocket';
        },

        optimizerActivateWpSuperCacheInternal() {
            this.optimizerActivatingWpSuperCache = true;
            window.location.href = 'admin.php?page=thegem-install-optimizers&optimizer=wp-super-cache';
        },

        optimizerUninstalWpSuperCacheInternal() {
            window.location.href = 'admin.php?page=thegem-uninstall-optimizers';
        },

        optimizerActivateWpRocket() {
            this.optimizerActivateWpRocketInternal();
        },

        optimizerActivateWpSuperCache() {
            this.optimizerActivateWpSuperCacheInternal();
        },

        wpsupercacheActivatedConfirm() {
            if (this.optimizer.wpsupercache_activated) {
                this.$modal.confirm({
                    title: this.$t('panel.one_click_optimization'),
                    htmlMessage: this.$t('optimizer.wpsupercache_activated_confirm')
                });
            }
        },

        optimizerCall(method, processingVar) {
            this[processingVar] = true;
            this.api(method).then(
                response => {
                    if (response.data && response.data.optimizer) {
                        window.location.reload();
                    } else {
                        this[processingVar] = false;
                        this.$modal.alert({message: response.data.message});
                    }
                },
                () => {
                    this[processingVar] = false;
                    this.$modal.alert({message: this.$t('optimizer.action_failed')});
                }
            );
        }
    },

    mounted() {
        this.wpsupercacheActivatedConfirm();
    },

})
</script>
