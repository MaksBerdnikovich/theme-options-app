<template>
    <div>
        <to-panel id="panel.title_area_general">
            <to-panel-group :label-title="$t('panel.title_area')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                             {{ $t('info.title_area_general_title_area') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Title_Area-1-1.png'},
                                {name: 'Title_Area-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-switch :value="getOption('global.title_show')" @input="setOption('global.title_show', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="isWooCommerce" :label-title="$t('panel.title_area_woo')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div class="info">
                                {{ $t('info.title_area_general_title_area_woo') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Product_Title_Area-1-1.png'},
                                {name: 'Menu_&_Header_Separator.png'}
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_title_show')" @input="setOption('product_title_show', $event)"/>
                        </div>
                        <div class="col-auto" v-if="getOption('product_title_show') == '0'">
                            <to-label class="top-gap">{{ $t('productPage.header_separator') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('product_header_separator')" @input="setOption('product_header_separator', $event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('global.title_show') == 1" :label-title="$t('panel.title_area_type')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             <div v-html="$t('info.title_area_type_of_title_area')"/>
                        </div>
                    </div>
                </template>

                <div class="to-changed-settings">
                    <to-radio-toggle :value="getOption('global.title_style')" @input="setOption('global.title_style', $event)" :options="titleStyleList"></to-radio-toggle>
                </div>

                <div class="to-panel-separator" v-if="getOption('global.title_style') == 2">
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{ $t('settings.custom_title') }}</to-label>
                                <to-select
                                    :value="getOption('global.title_template')"
                                    @input="setOption('global.title_template',$event)"
                                    :options="customTitleList"
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
                                <to-link :href="titleTemplateCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                <to-link :href="titleTemplateImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                            </div>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('global.title_show') == 1" :label-title="$t('panel.breadcrumbs')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.title_area_general_breadcrumbs') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="0" falseValue="1" :value="getOption('global.title_breadcrumbs')" @input="setOption('global.title_breadcrumbs', $event)"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('global.title_show') == 1 && getOption('global.title_breadcrumbs') == 0" :label-title="$t('panel.breadcrumbs_settings')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.title_area_general_breadcrumbs_settings') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('breadcrumbs_default_color')" @input="setOption('breadcrumbs_default_color',$event)" :label-title="$t('colors.color_normal')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('breadcrumbs_active_color')" @input="setOption('breadcrumbs_active_color',$event)" :label-title="$t('colors.color_active')"/>
                        </div>
                        <div class="col-auto">
                            <to-color-picker :value="getOption('breadcrumbs_hover_color')" @input="setOption('breadcrumbs_hover_color',$event)" :label-title="$t('colors.color_hover')"/>
                        </div>
                        <div class="col-auto">
                            <to-label>{{ $t('settings.breadcrumbs_alignment') }}</to-label>
                            <to-radio-toggle :value="getOption('global.title_breadcrumbs_alignment')" @input="setOption('global.title_breadcrumbs_alignment', $event)" :options="breadcrumbsAlignment"/>
                        </div>
                        <div class="col-auto" v-if="getOption('product_title_show') == '1'">
                            <to-label>{{ $t('settings.breadcrumbs_shop_category') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('global.title_breadcrumbs_shop_category')" @input="setOption('global.title_breadcrumbs_shop_category', $event)"/>
                        </div>
                        <div class="col-auto" v-if="isFutureMode">
                            <to-label>{{ $t('settings.breadcrumbs_delimiter') }}</to-label>
                            <to-radio-toggle :value="getOption('')" @input="setOption('',$event)" :options="breadcrumbsDelimiter"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('global.title_style') == 2" :label-title="$t('panel.use_page_settings')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.title_area_general_settings') }}
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('global.title_use_page_settings')" @input="setOption('global.title_use_page_settings', $event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.style_alignment" v-if="getOption('global.title_show') == 1 && getOption('global.title_style') == 1">
            <div v-if="isFutureMode" class="to-panel-separator">
                <to-panel-group v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_fullheight')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_fullheight') }}
                            </div>
                        </div>
                    </template>
                    <to-switch v-model="styleAlignmentFullheight"/>
                </to-panel-group>

                <to-panel-group v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_fullwidth')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_fullwidth') }}
                            </div>
                        </div>
                    </template>
                    <to-switch v-model="styleAlignmentFullwidth"/>
                </to-panel-group>
            </div>

            <div v-if="getOption('global.title_style') !== 2" class="to-panel-separator">
                <to-panel-group v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.style_alignment_content_alignment')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_content_alignment') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-label>{{ $t('settings.horizontal') }}</to-label>
                            <to-radio-toggle :value="getOption('global.title_alignment')" @input="setOption('global.title_alignment', $event)" :options="horizontalAlignList"/>
                        </div>
                        <div  v-if="isFutureMode" class="col-auto">
                            <to-label>{{ $t('settings.vertical') }}</to-label>
                            <to-radio-toggle :value="getOption('')" @input="setOption('', $event)" :options="verticalAlignList"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.style_alignment_padding')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_paddings') }}
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="to-changed-settings" v-if="isDesktop">
                            <to-block-padding option-prefix="global.title_padding"/>
                        </div>
                        <div class="to-changed-settings" v-if="isTablet">
                            <to-block-padding option-prefix="global.title_padding_tablet"/>
                        </div>
                        <div class="to-changed-settings" v-if="isMobile">
                            <to-block-padding option-prefix="global.title_padding_mobile"/>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.title_top_margin')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_title_top_margin') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Title_Top_Margin.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('global.title_top_margin')" @input="setOption('global.title_top_margin', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('global.title_top_margin_tablet')" @input="setOption('global.title_top_margin_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('global.title_top_margin_mobile')" @input="setOption('global.title_top_margin_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.title_max_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_title_max_width') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1200" unit="px" :value="getOption('global.title_title_width')" @input="setOption('global.title_title_width', $event)"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.title_font_presets')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.title_area_style_alignment_title_font_preset')"/>
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{$t('font.html_tag')}}</to-label>
                                <to-select :value="getOption('global.title_font_preset_html')" @input="setOption('global.title_font_preset_html',$event)" :options="presetFontHtml"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.style')}}</to-label>
                                <to-select :value="getOption('global.title_font_preset_style')" @input="setOption('global.title_font_preset_style',$event)" :options="presetFontStyle"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.weight')}}</to-label>
                                <to-select :value="getOption('global.title_font_preset_weight')" @input="setOption('global.title_font_preset_weight',$event)" :options="presetFontWeight"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.transform')}}</to-label>
                                <to-select :value="getOption('global.title_font_preset_transform')" @input="setOption('global.title_font_preset_transform',$event)" :options="presetFontTransform"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.excerpt_top_margin')" :responsive="true" :tablet="true">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_excerpt_top_margin') }}
                            </div>
                            <div class="gallery">
                                <to-button-gallery :images="[
                                {name: 'Excerpt_Top_Margin.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                            </div>
                        </div>
                    </template>
                    <template v-slot:default="{isDesktop,isTablet,isMobile}">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-block-label-slider-input v-if="isDesktop" :min="0" :max="1000" unit="px" :value="getOption('global.title_excerpt_top_margin')" @input="setOption('global.title_excerpt_top_margin', $event)"/>
                                <to-block-label-slider-input v-if="isTablet" :min="0" :max="1000" unit="px" :value="getOption('global.title_excerpt_top_margin_tablet')" @input="setOption('global.title_excerpt_top_margin_tablet', $event)"/>
                                <to-block-label-slider-input v-if="isMobile" :min="0" :max="1000" unit="px" :value="getOption('global.title_excerpt_top_margin_mobile')" @input="setOption('global.title_excerpt_top_margin_mobile', $event)"/>
                            </div>
                        </div>
                    </template>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.excerpt_max_width')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_excerpt_max_width') }}
                            </div>
                        </div>
                    </template>
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-label-slider-input :min="0" :max="1200" unit="px" :value="getOption('global.title_excerpt_width')" @input="setOption('global.title_excerpt_width', $event)"/>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.excerpt_font_presets')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.title_area_style_alignment_excerpt_font_preset')"/>
                            </div>
                        </div>
                    </template>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{$t('font.html_tag')}}</to-label>
                                <to-select :value="getOption('global.title_excerpt_font_preset_html')" @input="setOption('global.title_excerpt_font_preset_html',$event)" :options="presetFontHtml"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.style')}}</to-label>
                                <to-select :value="getOption('global.title_excerpt_font_preset_style')" @input="setOption('global.title_excerpt_font_preset_style',$event)" :options="presetFontStyle"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.weight')}}</to-label>
                                <to-select :value="getOption('global.title_excerpt_font_preset_weight')" @input="setOption('global.title_excerpt_font_preset_weight',$event)" :options="presetFontWeight"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{$t('font.transform')}}</to-label>
                                <to-select :value="getOption('global.title_excerpt_font_preset_transform')" @input="setOption('global.title_excerpt_font_preset_transform',$event)" :options="presetFontTransform"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>

            <div class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.style_alignment_title_color')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_title_color') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('global.title_text_color')" @input="setOption('global.title_text_color',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.style_alignment_excerpt_color')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.title_area_style_alignment_excerpt_color') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('global.title_excerpt_text_color')" @input="setOption('global.title_excerpt_text_color',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>
            </div>
        </to-panel>

        <to-panel id="panel.style" v-if="getOption('global.title_show') == 1 && getOption('global.title_style') == 2 && getOption('global.title_use_page_settings') == 1">
            <to-panel-group :label-title="$t('panel.style_alignment_title_color')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.title_area_style_alignment_title_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('global.title_text_color')" @input="setOption('global.title_text_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.style_alignment_excerpt_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.title_area_style_alignment_excerpt_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('global.title_excerpt_text_color')" @input="setOption('global.title_excerpt_text_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.background" v-if="(getOption('global.title_show') == 1 && getOption('global.title_style') == 1) || (getOption('global.title_show') == 1 && getOption('global.title_style') == 2 && getOption('global.title_use_page_settings') == 1)">
            <to-panel-group :label-title="$t('panel.background_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.title_area_background_type') }}
                        </div>
                    </div>
                </template>
                <to-block-background optionPrefix="global.title_background" :tab-pattern="false" :showOverlay="true"/>
            </to-panel-group>

            <to-panel-group v-if="getOption('global.title_background_type') === 'image'" :label-title="$t('panel.background_effect')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.title_area_background_parallax') }}
                        </div>
                    </div>
                </template>

                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('global.title_background_effect')" @input="setOption('global.title_background_effect',$event)" :options="titleBackgroundEffect"></to-select>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings" v-if="getOption('global.title_background_effect') === 'ken_burns'">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('settings.kenburns_direction') }}</to-label>
                            <to-select :value="getOption('global.title_background_ken_burns_direction')" @input="setOption('global.title_background_ken_burns_direction',$event)" :options="titleBackgroundKenBurnsDirection"></to-select>
                        </div>
                        <div class="col-2">
                            <to-label>{{ $t('settings.kenburns_speed') }}</to-label>
                            <to-input :value="getOption('global.title_background_ken_burns_transition_speed')" @input="setOption('global.title_background_ken_burns_transition_speed',$event)"></to-input>
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
    import config from '@/services/config';

    export default addHelpers({
        data() {
            let customTitleList = JSON.parse(JSON.stringify(config.customTitles));
            for(let item of customTitleList) {
                if (item.preview) {
                    item.rightButton = {icon: 'eye'};
                }

                if (item.edit) {
                    item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
                }
            }

            return {
                titleStyleList: [
                    {icon:'services', title:i18n.t('general.default_title'), value:'1'},
                    {icon:'add-row', title:i18n.t('general.custom_title'), value:'2'},
                ],
                customTitleList: customTitleList,
                breadcrumbsAlignment: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                breadcrumbsDelimiter: [
                    {icon:'arrow-bullet-right',tooltip:i18n.t('general.left'),value:'1'},
                    {icon:'line',tooltip:i18n.t('general.center'),value:'2'},
                    {icon:'right-arrow',tooltip:i18n.t('general.right'),value:'3'},
                    {icon:'more',tooltip:i18n.t('general.right'),value:'4'},
                    {icon:'circle-small',tooltip:i18n.t('general.right'),value:'5'},
                ],
                horizontalAlignList: [
                    {icon:'align-objects-left', value:'left', tooltip:i18n.t('general.left')},
                    {icon:'align-objects-center', value:'center', tooltip:i18n.t('general.center')},
                    {icon:'align-objects-right', value:'right', tooltip:i18n.t('general.right')},
                ],
                verticalAlignList: [
                    {icon:'align-objects-top',value:'1',tooltip:i18n.t('general.left')},
                    {icon:'align-objects-centerY',value:'2',tooltip:i18n.t('general.center')},
                    {icon:'align-objects-bottom',value:'3',tooltip:i18n.t('general.right')},
                ],
                titleBackgroundEffect: [
                    {label:i18n.t('general.normal'), value:'normal'},
                    {label:i18n.t('general.parallax'), value:'parallax'},
                    {label:i18n.t('general.kenburns'), value:'ken_burns'}
                ],
                titleBackgroundKenBurnsDirection: [
                    {label:i18n.t('general.zoom_in'), value:'zoom_in'},
                    {label:i18n.t('general.zoom_out'), value:'zoom_out'}
                ],
                presetFontHtml: [
                    {label: i18n.t('general.default'), value: ''},
                    {label: i18n.t('font.h1'), value: 'h1'},
                    {label: i18n.t('font.h2'), value: 'h2'},
                    {label: i18n.t('font.h3'), value: 'h3'},
                    {label: i18n.t('font.h4'), value: 'h4'},
                    {label: i18n.t('font.h5'), value: 'h5'},
                    {label: i18n.t('font.h6'), value: 'h6'},
                    {label: i18n.t('font.paragraph'), value: 'p'},
                    {label: i18n.t('font.div'), value: 'div'},
                ],
                presetFontStyle: [
                    {label: i18n.t('general.default'), value: ''},
                    {label: i18n.t('font.title_h1'), value: 'title-h1'},
                    {label: i18n.t('font.title_h2'), value: 'title-h2'},
                    {label: i18n.t('font.title_h3'), value: 'title-h3'},
                    {label: i18n.t('font.title_h4'), value: 'title-h4'},
                    {label: i18n.t('font.title_h5'), value: 'title-h5'},
                    {label: i18n.t('font.title_h6'), value: 'title-h6'},
                    {label: i18n.t('font.title_xlarge'), value: 'title-xlarge'},
                    {label: i18n.t('font.styled_subtitle'), value: 'styled-subtitle'},
                    {label: i18n.t('font.main_menu'), value: 'title-main-menu'},
                    {label: i18n.t('font.body'), value: 'title-body'},
                    {label: i18n.t('font.tiny_body'), value: 'title-tiny-body'},
                ],
                presetFontWeight: [
                    {label: i18n.t('general.default'), value: ''},
                    {label: i18n.t('font.thin'), value: 'light'},
                ],
                presetFontTransform: [
                    {label: i18n.t('general.default'), value: ''},
                    {label: i18n.t('font.transform_none'), value: 'none'},
                    {label: i18n.t('font.transform_capitalize'), value: 'capitalize'},
                    {label: i18n.t('font.transform_lowercase'), value: 'lowercase'},
                    {label: i18n.t('font.transform_uppercase'), value: 'uppercase'},
                ],
            }
        },

        computed: {
            isWooCommerce() {
                return config.isWooCommerce;
            },

            titleTemplateCreateUrl(){
                return config.titleTemplateCreateUrl
            },

            titleTemplateImportUrl(){
                return config.titleTemplateImportUrl
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
