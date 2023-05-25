<template>
    <div>
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.footer')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_footer_general_footer') }}
                        </div>
                    </div>
                </template>
                <to-select :value="getOption('effects_hide_footer')" @input="setOption('effects_hide_footer', $event)" :options="effectsHideFooter"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('effects_hide_footer') == 'enabled'" :label-title="$t('panel.parallax')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_footer_general_parallax') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('effects_parallax_footer')" @input="setOption('effects_parallax_footer', $event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.footer_widget_woocommerce" v-if="(postType === 'product' || isTaxonomy) && isFutureMode">
            <to-panel-group :label-title="$t('panel.footer_widget_woocommerce')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.footer_widget_woocommerce') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Footer_Widget_Area_Woocommerce.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-switch :value="getOption('footer_widget_woocommerce')" @input="setOption('footer_widget_woocommerce', $event)"/>
                        </div>
                        <div class="col-1" v-if="getOption('footer_widget_woocommerce') == '1'">
                            <to-alert :title="$t('alert.add_widgets_footer_woo')" :titleLink="$t('alert.add_widgets_footer_woo_link')" target="_blank" :href="adminUrl('widgets.php')"></to-alert>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.footer_widget_area" v-if="getOption('effects_hide_footer') != 'disabled'">
            <to-panel-group :label-title="$t('panel.footer_widget')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_footer_widget_area') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Footer_Widget_Area.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('footer_hide_widget_area')" @input="setOption('footer_hide_widget_area', $event)" :options="footerHideWidgetArea"/>
                        </div>
                        <div class="col-1">
                            <to-alert :title="$t('alert.footer_widgets')" />
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-bind:class="{'development': isFutureMode}" v-if="getOption('footer_hide_widget_area') == 'enabled' && isFutureMode" :label-title="$t('panel.footer_width')">
                <to-switch trueValue="1" falseValue="0" :value="getOption('')" @input="setOption('', $event)"/>
            </to-panel-group>

            <to-panel-group v-bind:class="{'development': isFutureMode}" v-if="getOption('footer_hide_widget_area') == 'enabled' && isFutureMode" :label-title="$t('panel.grid_type')">
                <to-radio-icon :value="getOption('')" @input="setOption('', $event)" :options="gridTypeList"></to-radio-icon>
            </to-panel-group>

            <to-panel-group v-bind:class="{'development': isFutureMode}" v-if="getOption('footer_hide_widget_area') == 'enabled' && isFutureMode" :label-title="$t('panel.style_alignment_padding')" :responsive="true">
                <template v-slot:default="{ isDesktop }">
                    <to-block-padding v-if="isDesktop" option-prefix=""/>
                    <to-block-padding v-if="!isDesktop" option-prefix=""/>
                </template>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.bottom_area" v-if="getOption('effects_hide_footer') != 'disabled'">
            <to-panel-group :label-title="$t('panel.bottom_area')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_footer_bottom_area') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Footer_Bottom_Area.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-select :value="getOption('footer_hide_default')" @input="setOption('footer_hide_default', $event)" :options="footerHideDefault"/>
            </to-panel-group>

            <to-panel-group v-bind:class="{'development': isFutureMode}" v-if="getOption('footer_hide_default') == 'enabled' && isFutureMode" :label-title="$t('panel.footer_width')">
                <to-switch trueValue="1" falseValue="0" :value="getOption('')" @input="setOption('', $event)"/>
            </to-panel-group>

            <to-panel-group v-bind:class="{'development': isFutureMode}" v-if="getOption('footer_hide_default') == 'enabled' && isFutureMode" :label-title="$t('panel.style_alignment_padding')" :responsive="true">
                <template v-slot:default="{ isDesktop }">
                    <to-block-padding v-if="isDesktop"  option-prefix="styleAlignmentPadding2"/>
                    <to-block-padding v-if="!isDesktop" option-prefix="styleAlignmentPadding2Mobile"/>
                </template>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.custom_footer" v-if="getOption('effects_hide_footer') != 'disabled'">
            <to-panel-group :label-title="$t('panel.custom_footer')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_footer_custom_footer') }}
                        </div>
                    </div>
                </template>
                <to-select :value="getOption('footer_custom_show')" @input="setOption('footer_custom_show', $event)" :options="footerCustomShow"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('footer_custom_show') == 'enabled'" :label-title="$t('panel.custom_footer_select')" :class="{'taxonomy-te-edit-link': isTaxonomy}">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_footer_select_custom_footer') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select
                                :value="getOption('footer_custom')"
                                @input="setOption('footer_custom', $event)"
                                :options="customFooterList"
                                v-on:right-button-clicked="showPreview($event)"
                                v-on:edit-button-clicked="showEditPage($event)"
                            />
                        </div>
                        <div class="col-1">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="footerTemplateCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                        </div>
                        <div class="col-1">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="footerTemplateImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
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
            let customFooterList = JSON.parse(JSON.stringify(config.customFooters));
            for(let item of customFooterList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            return {
                effectsHideFooter: [
                    {label:i18n.t('general.default_settings_po'),value:'default'},
                    {label:i18n.t('general.enabled'),value:'enabled'},
                    {label:i18n.t('general.disabled'),value:'disabled'}
                ],
                footerHideWidgetArea: [
                    {label:i18n.t('general.default_settings_po'),value:'default'},
                    {label:i18n.t('general.enabled'),value:'enabled'},
                    {label:i18n.t('general.disabled'),value:'disabled'}
                ],
                footerHideDefault: [
                    {label:i18n.t('general.default_settings_po'),value:'default'},
                    {label:i18n.t('general.enabled'),value:'enabled'},
                    {label:i18n.t('general.disabled'),value:'disabled'}
                ],
                footerCustomShow: [
                    {label:i18n.t('general.default_settings_po'),value:'default'},
                    {label:i18n.t('general.enabled'),value:'enabled'},
                    {label:i18n.t('general.disabled'),value:'disabled'}
                ],
                gridTypeList: [
                    {icon:'Schemes-05',title:'3x',value:'3x'},
                    {icon:'Schemes-06',title:'4x',value:'4x'},
                    {icon:'Schemes-07',title:'5x',value:'5x'}
                ],
                customFooterList: customFooterList
            }
        },

        computed: {
            postType() {
                return config.postType;
            },

            isTaxonomy() {
                return config.isTaxonomy;
            },

            footerTemplateCreateUrl(){
                return config.footerTemplateCreateUrl
            },

            footerTemplateImportUrl(){
                return config.footerTemplateImportUrl
            },
        },

        methods: {
            showPreview(item) {
                window.open(item.preview,'_blank');
            },

            showEditPage(item) {
                window.open(item.edit,'_blank');
            }
        }
    })
</script>
