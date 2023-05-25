<template>
    <div>
        <to-panel id="panel.general">
            <to-panel-group :label-title="$t('panel.header')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_header_general_header') }}
                        </div>
                    </div>
                </template>
                <to-select :value="getOption('effects_hide_header')" @input="setOption('effects_hide_header', $event)" :options="effectsHideHeader"/>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('effects_hide_header') === 'enabled'">
                <to-panel-group :label-title="$t('panel.header_source')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.p_options_header_source')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-1">
                                <to-select :value="getOption('header_source')" @input="setOption('header_source', $event)" :options="headerSource" v-on:right-button-clicked="showPreview($event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <div class="to-panel-separator" v-if="getOption('header_source') === 'builder'">
                    <to-panel-group :label-title="$t('panel.header_builder_template')" :class="{'taxonomy-te-edit-link': isTaxonomy}">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div v-html="$t('info.layout_header_builder_template')"/>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-label>{{$t('headerBuilder.default_template')}}</to-label>
                                    <to-select
                                        :value="getOption('header_builder')"
                                        @input="setOption('header_builder', $event)"
                                        :options="headerBuilderTemplatesList"
                                        v-on:right-button-clicked="showPreview($event)"
                                        v-on:edit-button-clicked="showEditPage($event)"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                    <to-link :href="headerBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                </div>
                            </div>
                        </div>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                    <to-link :href="headerBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.header_builder_sticky')" :responsive="true" :class="{'taxonomy-te-edit-link': isTaxonomy}">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div v-html="$t('info.layout_header_sticky')"/>
                                </div>
                            </div>
                        </template>
                        <template v-slot:default="{ isDesktop, isMobile }">
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption('header_builder_sticky_desktop')" @input="setOption('header_builder_sticky_desktop',$event)"/>
                                        <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption('header_builder_sticky_mobile')" @input="setOption('header_builder_sticky_mobile',$event)"/>
                                    </div>
                                    <div class="col-auto" v-if="isDesktop && getOption('header_builder_sticky_desktop') == '1'">
                                        <to-switch trueValue="1" falseValue="0" :trueValueTitle="$t('headerBuilder.hide_on_scroll')" :falseValueTitle="$t('headerBuilder.hide_on_scroll')" :value="getOption('header_builder_sticky_hide_desktop')" @input="setOption('header_builder_sticky_hide_desktop',$event)"/>
                                    </div>
                                    <div class="col-auto" v-if="isMobile && getOption('header_builder_sticky_mobile') == '1'">
                                        <to-switch trueValue="1" falseValue="0" :trueValueTitle="$t('headerBuilder.hide_on_scroll')" :falseValueTitle="$t('headerBuilder.hide_on_scroll')" :value="getOption('header_builder_sticky_hide_mobile')" @input="setOption('header_builder_sticky_hide_mobile',$event)"/>
                                    </div>
                                </div>
                                <to-separator v-if="(isDesktop && getOption('header_builder_sticky_desktop') == '1') || (isMobile && getOption('header_builder_sticky_mobile') == '1')"></to-separator>
                            </div>
                            <div class="to-panel-separator" v-if="getOption('header_builder_sticky_desktop') == '1' || getOption('header_builder_sticky_mobile') == '1'">
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-1">
                                            <to-label>{{$t('headerBuilder.sticky_template')}}</to-label>
                                            <to-select
                                                :value="getOption('header_builder_sticky')"
                                                @input="setOption('header_builder_sticky', $event)"
                                                :options="headerBuilderTemplatesList"
                                                v-on:right-button-clicked="showPreview($event)"
                                                v-on:edit-button-clicked="showEditPage($event)"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-1">
                                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                            <to-link :href="headerBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-1">
                                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                            <to-link :href="headerBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-1">
                                            <to-block-label-slider-input :label-title="$t('headerBuilder.sticky_template_opacity')" :min="0" :max="100" unit="%" :value="getOption('header_builder_sticky_opacity')" @input="setOption('header_builder_sticky_opacity',$event)"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.header_builder_overlap')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div v-html="$t('info.layout_header_overlap')"/>
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[{name:'Header_Builder_Overlap.png'}]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-switch :value="getOption('header_transparent')" @input="setOption('header_transparent',$event)"/>
                                </div>
                                <div class="col-1" v-if="getOption('header_transparent') == '1'">
                                    <to-block-label-slider-input :label-title="$t('headerBuilder.header_opacity')" :min="0" :max="100" unit="%" :value="getOption('header_opacity')" @input="setOption('header_opacity',$event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="to-changed-settings" v-if="getOption('header_transparent') == '1'">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-label>{{ $t('headerBuilder.light_scheme') }}</to-label>
                                    <to-switch :value="getOption('header_menu_logo_light')" @input="setOption('header_menu_logo_light',$event)"/>
                                </div>
                                <div class="col-auto" v-if="getOption('header_menu_logo_light') == '1'">
                                    <to-color-picker :value="getOption('header_builder_light_color')" @input="setOption('header_builder_light_color',$event)" :label-title="$t('headerBuilder.light_scheme_color')"/>
                                </div>
                                <div class="col-auto" v-if="getOption('header_menu_logo_light') == '1'">
                                    <to-color-picker :value="getOption('header_builder_light_color_hover')" @input="setOption('header_builder_light_color_hover',$event)" :label-title="$t('headerBuilder.light_scheme_color_hover')"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>
        </to-panel>

        <to-panel v-if="getOption('effects_hide_header') === 'enabled' && getOption('header_source') === 'default'" id="panel.menu">
            <to-panel-group :label-title="$t('panel.menu')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_header_menu') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('menu_show')" @input="setOption('menu_show', $event)" :options="menuShow"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('menu_show') != 'disabled'" :label-title="$t('panel.menu_options')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_header_menu_options')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('menu_options')" @input="setOption('menu_options', $event)" :options="menuOptions"/>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings" v-if="getOption('menu_options') == 'custom'">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-label>{{ $t('settings.menu_transparency') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('header_transparent')" @input="setOption('header_transparent',$event)"/>
                        </div>
                        <div class="col-1" v-if="getOption('header_transparent') == 1">
                            <div class="to-alert">
                                <div class="icon"><to-svg-icon name="info"/></div>
                                <div class="text">
                                    <span>{{ $t('alert.menu_transparency_part3') }}</span>
                                    <router-link :to="'/title-area'">{{ $t('panel.title_area') }}</router-link>
                                    <span>{{ $t('general.or') }}</span>
                                    <router-link :to="'/content-and-sidebar'">{{ $t('panel.content_area') }}</router-link>
                                    <span>{{ $t('alert.menu_transparency_part4') }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-1" v-if="getOption('header_transparent') == 1">
                            <to-block-label-slider-input :label-title="$t('settings.menu_opacity')" :min="0" :max="100" unit="%" :value="getOption('header_opacity')" @input="setOption('header_opacity',$event)"/>
                        </div>
                        <div class="col-1">
                            <to-label>{{ $t('settings.use_light_menu_logo') }}</to-label>
                            <to-switch :value="getOption('header_menu_logo_light')" @input="setOption('header_menu_logo_light',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('menu_show') != 'disabled'" :label-title="$t('panel.menu_select')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_header_menu_select_menu') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-select :value="getOption('header_custom_menu')" @input="setOption('header_custom_menu', $event)" :options="menuList"/>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('menu_show') == 'disabled'" :label-title="$t('panel.use_light_logo')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_page_use_ligth_logo') }}
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('header_menu_logo_light')" @input="setOption('header_menu_logo_light',$event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel v-if="getOption('effects_hide_header') === 'enabled' && getOption('header_source') === 'default'" id="panel.top_area">
            <to-panel-group :label-title="$t('panel.top_area')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.p_options_header_top_area_top_area') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{isDesktop,isTablet,isMobile}">
                    <to-select v-if="isDesktop" :value="getOption('header_hide_top_area')" @input="setOption('header_hide_top_area', $event)" :options="topArea"/>
                    <to-select v-if="isTablet" :value="getOption('header_hide_top_area_tablet')" @input="setOption('header_hide_top_area_tablet', $event)" :options="topArea"/>
                    <to-select v-if="isMobile" :value="getOption('header_hide_top_area_mobile')" @input="setOption('header_hide_top_area_mobile', $event)" :options="topArea"/>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.top_area_options')" v-if="getOption('header_hide_top_area') != 'disabled'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.p_options_header_top_area_top_area_options')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-select :value="getOption('top_area_options')" @input="setOption('top_area_options', $event)" :options="topAreaOptions"/>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings" v-if="getOption('top_area_options') == 'custom'">
                    <div class="form-grid">
                        <div class="col-1">
                            <to-label>{{ $t('settings.top_area_transparency') }}</to-label>
                            <to-switch trueValue="1" falseValue="0" :value="getOption('header_top_area_transparent')" @input="setOption('header_top_area_transparent', $event)"/>
                        </div>
                        <div class="col-1" v-if="getOption('header_top_area_transparent') == 1">
                            <to-label>{{ $t('settings.top_area_opacity') }}</to-label>
                            <to-block-label-slider-input :min="0" :max="100" unit="%" :value="getOption('header_top_area_opacity')" @input="setOption('header_top_area_opacity', $event)"/>
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
        let headerBuilderTemplatesList = JSON.parse(JSON.stringify(config.headerBuilderTemplates));
        for(let item of headerBuilderTemplatesList) {
            if (item.preview) {
                item.rightButton = {icon: 'eye'};
            }

            if (item.edit) {
                item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
            }
        }

        return {
            effectsHideHeader: [
                {label:i18n.t('general.default_settings_po'),value:'default'},
                {label:i18n.t('general.enabled'),value:'enabled'},
                {label:i18n.t('general.disabled'),value:'disabled'}
            ],
            headerSource: [
                {label: i18n.t('headerBuilder.header_default'), value: 'default'},
                {label: i18n.t('headerBuilder.header_builder'), value: 'builder'},
            ],
            headerBuilderTemplatesList: headerBuilderTemplatesList,
            menuShow: [
                {label:i18n.t('general.default_settings_po'),value:'default'},
                {label:i18n.t('general.enabled'),value:'enabled'},
                {label:i18n.t('general.disabled'),value:'disabled'}
            ],
            menuOptions: [
                {label:i18n.t('general.default_settings_po'),value:'default'},
                {label:i18n.t('general.custom_settings'),value:'custom'},
            ],
            topArea: [
                {label:i18n.t('general.default_settings_po'),value:'default'},
                {label:i18n.t('general.enabled'),value:'enabled'},
                {label:i18n.t('general.disabled'),value:'disabled'}
            ],
            topAreaOptions: [
                {label:i18n.t('general.default_settings_po'),value:'default'},
                {label:i18n.t('general.custom_settings'),value:'custom'},
            ],
            menuList: config.menus
        }
    },

    computed: {
        headerBuilderCreateUrl(){
            return config.headerBuilderCreateUrl
        },

        headerBuilderImportUrl(){
            return config.headerBuilderImportUrl
        },

        isTaxonomy() {
            return config.isTaxonomy;
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
