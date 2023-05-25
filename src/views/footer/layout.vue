<template>
    <div>
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.footer')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_general_footer') }}
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('footer')" @input="setOption('footer', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('footer') && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.parallax')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_general_parallax') }}
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('footer_parallax')"  @input="setOption('footer_parallax', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('footer') && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.top_margin')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_general_top_margin') }}
                        </div>
                    </div>
                </template>
                <to-block-label-slider-input :min="0" :max="100" unit="px" :value="getOption('')" @input="setOption('', $event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.footer_widget_woocommerce" v-if="isWooCommerce && isFutureMode">
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

        <to-panel id="panel.footer_widget" v-if="getOption('footer')">
            <to-panel-group :label-title="$t('panel.footer_widget')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.footer_widget_area_widget') }}
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
                            <to-switch trueValue="0" falseValue="1" :value="getOption('footer_widget_area_hide')" @input="setOption('footer_widget_area_hide', $event)"/>
                        </div>
                        <div class="col-1" v-if="getOption('footer_widget_area_hide') == '0'">
                            <to-alert :title="$t('alert.add_widgets_footer')" :titleLink="$t('alert.add_widgets_footer_link')" target="_blank" :href="adminUrl('widgets.php')"></to-alert>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('footer_widget_area_hide') && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.footer_width')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_widget_area_fullwidth') }}
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('footer_widget_area_fullwidth')" @input="setOption('footer_widget_area_fullwidth', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('footer_widget_area_hide') && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.grid_type')">
               <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_widget_area_grid_type') }}
                        </div>
                    </div>
                </template>
                <to-radio-icon
                    :value="getOption('')"
                    @input="setOption('', $event)"
                    :options="footerGridType">
                </to-radio-icon>
            </to-panel-group>

            <to-panel-group v-if="getOption('footer_widget_area_hide') && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.padding')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_widget_area_padding') }}
                        </div>
                    </div>
                </template>
                <to-block-padding option-prefix=""/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.bottom_area" v-if="getOption('footer')">
            <to-panel-group :label-title="$t('panel.bottom_area')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.footer_bottom_area_bottom_area') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                            {name: 'Footer_Bottom_Area.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <to-switch trueValue="1" falseValue="0" :value="getOption('footer_active')" @input="setOption('footer_active', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('footer_active') == 1 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.footer_width')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_bottom_area_fullwidth') }}
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('footer_bottom_area_fullwidth')" @input="setOption('footer_bottom_area_fullwidth', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('footer_active') == 1 && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.padding')">
               <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_bottom_area_padding') }}
                        </div>
                    </div>
                </template>
                <to-block-padding option-prefix=""/>
            </to-panel-group>

            <to-panel-group v-if="getOption('footer_active') == 1" :label-title="$t('panel.bottom_area_text')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_bottom_area_text_for') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-input :value="getOption('footer_html')" @input="setOption('footer_html',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.custom_footer" v-if="getOption('footer')">
            <to-panel-group :label-title="$t('panel.custom_footer')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_custom_footer') }}
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('custom_footer_enable')" @input="setOption('custom_footer_enable', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('custom_footer_enable')" :label-title="$t('panel.custom_footer_select')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_select_custom_footer') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-select
                                :value="getOption('custom_footer')"
                                @input="setOption('custom_footer', $event)"
                                :options="customFooterList"
                                v-on:right-button-clicked="showPreview($event)"
                                v-on:edit-button-clicked="showEditPage($event)"
                            />
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                            <to-link :href="footerTemplateCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
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
            footerGridType: [
                {icon:'Schemes-05',title:'3x',value:'3x'},
                {icon:'Schemes-06',title:'4x',value:'4x'},
                {icon:'Schemes-07',title:'5x',value:'5x'}
            ],
            customFooterList: customFooterList
        }
    },

    computed: {
        isWooCommerce() {
            return config.isWooCommerce;
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
