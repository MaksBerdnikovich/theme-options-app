<template>
    <div>
        <to-panel id="panel.preloader">
            <to-panel-group :label-title="$t('panel.preloader_enabled')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_extras_page_preloader') }}
                        </div>
                    </div>
                </template>
                <to-select :value="getOption('enable_page_preloader')" @input="setOption('enable_page_preloader', $event)" :options="enablePagePreloader"/>
            </to-panel-group>

            <to-panel-group>
                <to-alert :title="$t('alert.to_setup_preloader_go_to')" :titleLink="$t('alert.theme_options')" :href="adminUrl('admin.php?page=thegem-theme-options#/general/theme-layout/panel.preloader')" target="_blank"></to-alert>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="isPage" id="panel.lazy_load">
            <to-panel-group :label-title="$t('panel.lazy_loading')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_extras_lazy_loading') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="0" falseValue="1" :value="getOption('effects_disabled')" @input="setOption('effects_disabled', $event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="postType === 'page'" id="panel.redirect">
            <to-panel-group :label-title="$t('panel.redirect_to_subpage')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_extras_redirect_to_subpage') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('redirect_to_subpage')" @input="setOption('redirect_to_subpage', $event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.one_click_optimization" v-if="optimizer.wpsupercache_active">
            <to-panel-group :label-title="$t('panel.delay_js_execution_desktop')" v-if="optimizer.delay_js_execution == '1'">
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
                            <to-switch trueValue="0" falseValue="1" :value="getOption('delay_js_execution_desktop')" @input="setOption('delay_js_execution_desktop',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.delay_js_execution_mobile')" v-if="optimizer.delay_js_execution == '1'">
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
                            <to-switch trueValue="0" falseValue="1" :value="getOption('delay_js_execution_mobile')" @input="setOption('delay_js_execution_mobile',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.disable_cache')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.performance_page_speed_excluded_js_files')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="0" falseValue="1" :value="getOption('disable_cache')" @input="setOption('disable_cache',$event)"/>
                        </div>
                    </div>
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
            optimizer: config.optimizer,
            enablePagePreloader: [
                {label:i18n.t('general.default_settings_po'),value:'default'},
                {label:i18n.t('general.enabled'),value:'enabled'},
                {label:i18n.t('general.disabled'),value:'disabled'}
            ],
        }
    },

    computed: {
        isPage() {
            return config.isPage;
        },

        postType() {
            return config.postType;
        },
    }
})
</script>
