<template>
    <div>
        <to-panel id="panel.onepager">
            <to-panel-group :label-title="$t('panel.page_as_onepager')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_page_as_onepager_1') }}
                            <router-link to="#">{{ $t('info.p_options_page_as_onepager_2') }}</router-link>
                            {{ $t('info.p_options_page_as_onepager_3') }}
                            <router-link to="#">{{ $t('info.p_options_page_as_onepager_4') }}</router-link>
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('effects_one_pager')" @input="setOption('effects_one_pager', $event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.fullpage_scroller">
            <to-panel-group :label-title="$t('panel.page_as_fullpage')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_page_as_fullpage_scroller_1') }}
                            <router-link to="#">{{ $t('info.p_options_page_as_fullpage_scroller_2') }}</router-link>
                            {{ $t('info.p_options_page_as_fullpage_scroller_3') }}
                            <router-link to="#">{{ $t('info.p_options_page_as_fullpage_scroller_4') }}</router-link>
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('effects_page_scroller')" @input="setOption('effects_page_scroller', $event)"/>

                <div v-if="getOption('effects_page_scroller') == 1" class="to-fullpage-scroller-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-label>{{ $t('panel.type') }}</to-label>
                            <to-select :value="getOption('effects_page_scroller_type')" @input="setOption('effects_page_scroller_type',$event)" :options="scrollerTypeList"></to-select>
                        </div>
                    </div>

                    <div v-if="getOption('effects_page_scroller_type') === 'basic'" class="to-fullpage-scroller-settings-items">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label>{{ $t('panel.enable_scroll_mobile') }}</to-label>
                                <to-switch trueValue="1" falseValue="0" :value="getOption('effects_page_scroller_mobile')" @input="setOption('effects_page_scroller_mobile', $event)"/>
                            </div>
                        </div>
                    </div>

                    <div v-if="getOption('effects_page_scroller_type') === 'advanced'" class="to-fullpage-scroller-settings-items">
                        <div class="form-grid">
                            <div class="col-auto min-col-4">
                                <to-label>{{ $t('panel.fullpage_disabled_dots') }}</to-label>
                                <to-switch trueValue="0" falseValue="1" :value="getOption('fullpage_disabled_dots')" @input="setOption('fullpage_disabled_dots', $event)"/>
                            </div>
                            <div class="col-auto min-col-4" v-if="getOption('fullpage_disabled_dots') == 0">
                                <to-label>{{ $t('panel.fullpage_disabled_tooltips_dots') }}</to-label>
                                <to-switch trueValue="0" falseValue="1" :value="getOption('fullpage_disabled_tooltips_dots')" @input="setOption('fullpage_disabled_tooltips_dots', $event)"/>
                            </div>
                        </div>
                        <div class="form-grid" v-if="getOption('fullpage_disabled_dots') == 0">
                            <div class="col-1">
                                <to-label>{{ $t('panel.fullpage_style_dots') }}</to-label>
                                <to-select :value="getOption('fullpage_style_dots')" @input="setOption('fullpage_style_dots',$event)" :options="fullpageStyleDotsList"></to-select>
                            </div>
                        </div>
                        <div class="form-grid">
                            <div class="col-auto min-col-4">
                                <to-label>{{ $t('panel.fullpage_enable_continuous') }}</to-label>
                                <to-switch trueValue="1" falseValue="0" :value="getOption('fullpage_enable_continuous')" @input="setOption('fullpage_enable_continuous', $event)"/>
                            </div>
                            <div class="col-auto min-col-4">
                                <to-label>{{ $t('panel.fullpage_disabled_mobile') }}</to-label>
                                <to-switch trueValue="1" falseValue="0" :value="getOption('fullpage_disabled_mobile')" @input="setOption('fullpage_disabled_mobile', $event)"/>
                            </div>
                        </div>
                        <div class="form-grid">
                            <div class="col-1">
                                <to-label>{{ $t('panel.fullpage_scroll_effect') }}</to-label>
                                <to-select :value="getOption('fullpage_scroll_effect')" @input="setOption('fullpage_scroll_effect',$event)" :options="fullpageScrollEffect"></to-select>
                            </div>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>

<script>
    import {addHelpers} from '@/services/helper';
    import i18n from '@/services/i18n';

    export default addHelpers({
        data() {
            return {
                scrollerTypeList: [
                    {value:'basic',label:i18n.t('general.basic')},
                    {value:'advanced',label:i18n.t('general.advanced')}
                ],
                fullpageStyleDotsList: [
                    {value:'outline',label:i18n.t('general.outline_dt')},
                    {value:'solid',label:i18n.t('general.solid_dt')},
                    {value:'solid-small',label:i18n.t('general.solid_small_dt')},
                    {value:'lines',label:i18n.t('general.lines_dt')},
                    {value:'outlined-active',label:i18n.t('general.outlined_active_dt')},
                ],
                fullpageScrollEffect: [
                    {value:'normal',label:i18n.t('general.normal')},
                    {value:'parallax',label:i18n.t('general.parallax')},
                    {value:'fixed_background',label:i18n.t('general.fixed_background')},
                ],
            }
        }
    })
</script>
