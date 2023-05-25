<template>
    <div>
        <to-panel id="panel.layout_style_layout">
            <to-panel-group :label-title="$t('panel.layout_header')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.layout_header') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="0" falseValue="1" :value="getOption('global.effects_hide_header')" @input="setOption('global.effects_hide_header',$event)"/>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('global.effects_hide_header') === '0'">
                <to-panel-group :label-title="$t('panel.header_source')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                <div v-html="$t('info.layout_header_source')"/>
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('header_source')" @input="setOption('header_source', $event)" :options="headerSource" v-on:right-button-clicked="showPreview($event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <div class="to-panel-separator" v-if="getOption('header_source') === 'default'">
                    <to-panel-group :label-title="$t('panel.layout_menu_header')" :responsive="true" :tablet="true">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.layout_menu_header_layout') }}
                                </div>
                            </div>
                        </template>
                        <template v-slot:default="{ isDesktop, isTablet, isMobile }">
                            <to-block-menu-header-constructor :isDesktop="isDesktop" :isTablet="isTablet" :isMobile="isMobile"/>
                        </template>
                    </to-panel-group>
                </div>

                <div class="to-panel-separator" v-if="getOption('header_source') === 'builder'">
                    <to-panel-group :label-title="$t('panel.header_builder_template')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div v-html="$t('info.layout_header_builder_template')"/>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
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
                                <div class="col-2">
                                    <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                    <to-link :href="headerBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                </div>
                            </div>
                        </div>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                    <to-link :href="headerBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group :label-title="$t('panel.header_builder_sticky')" :responsive="true">
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
                                    <div class="col-4">
                                        <to-switch v-if="isDesktop" trueValue="1" falseValue="0" :value="getOption('header_builder_sticky_desktop')" @input="setOption('header_builder_sticky_desktop',$event)"/>
                                        <to-switch v-if="isMobile" trueValue="1" falseValue="0" :value="getOption('header_builder_sticky_mobile')" @input="setOption('header_builder_sticky_mobile',$event)"/>
                                    </div>
                                    <div class="col-4" v-if="isDesktop && getOption('header_builder_sticky_desktop') === '1'">
                                        <to-switch trueValue="1" falseValue="0" :trueValueTitle="$t('headerBuilder.hide_on_scroll')" :falseValueTitle="$t('headerBuilder.hide_on_scroll')" :value="getOption('header_builder_sticky_hide_desktop')" @input="setOption('header_builder_sticky_hide_desktop',$event)"/>
                                    </div>
                                    <div class="col-4" v-if="isMobile && getOption('header_builder_sticky_mobile') === '1'">
                                        <to-switch trueValue="1" falseValue="0" :trueValueTitle="$t('headerBuilder.hide_on_scroll')" :falseValueTitle="$t('headerBuilder.hide_on_scroll')" :value="getOption('header_builder_sticky_hide_mobile')" @input="setOption('header_builder_sticky_hide_mobile',$event)"/>
                                    </div>
                                </div>
                                <to-separator v-if="(isDesktop && getOption('header_builder_sticky_desktop') === '1') || (isMobile && getOption('header_builder_sticky_mobile') === '1')"></to-separator>
                            </div>

                            <div class="to-panel-separator" v-if="getOption('header_builder_sticky_desktop') === '1' || getOption('header_builder_sticky_mobile') === '1'">
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-2">
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
                                        <div class="col-2">
                                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                            <to-link :href="headerBuilderCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-2">
                                            <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                            <to-link :href="headerBuilderImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                                        </div>
                                    </div>
                                </div>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-2">
                                            <to-block-label-slider-input :label-title="$t('headerBuilder.sticky_template_opacity')" :min="0" :max="100" unit="%" :value="getOption('header_builder_sticky_opacity')" @input="setOption('header_builder_sticky_opacity',$event)"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </to-panel-group>

                    <!--
                    <to-panel-group :label-title="$t('panel.header_builder_menu_res')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    <div v-html="$t('info.layout_header_responsive_menu')"/>
                                </div>
                                <div class="gallery">
                                    <to-button-gallery :images="[{name:'Header_Builder_Responsive_Menu.png'}]">{{ $t('general.screenshot') }}</to-button-gallery>
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-1">
                                    <to-radio-icon class="width-70" :value="getOption('mobile_menu_layout')" @input="setOption('mobile_menu_layout',$event)" :options="headerBuilderMenuMobileLayout"></to-radio-icon>
                                </div>
                                <div class="col-2">
                                    <to-label>{{ $t('headerBuilder.mobile_menu_presets') }}</to-label>
                                    <to-select :value="getOption('mobile_menu_layout_style')" @input="setOption('mobile_menu_layout_style',$event)" :options="headerBuilderMenuMobilePreset"></to-select>
                                </div>
                                <div class="col-auto">
                                    <to-label>{{ $t('headerBuilder.mobile_menu_search') }}</to-label>
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('header_builder_mobile_menu_search')" @input="setOption('header_builder_mobile_menu_search',$event)"/>
                                </div>
                                <div class="col-auto" v-if="getOption('mobile_menu_layout') === 'slide-horizontal' || getOption('mobile_menu_layout') === 'slide-vertical'">
                                    <to-label>{{ $t('headerBuilder.mobile_menu_socials') }}</to-label>
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('header_builder_mobile_menu_socials')" @input="setOption('header_builder_mobile_menu_socials',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                    -->

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
                                <div class="col-3">
                                    <to-switch :value="getOption('global.header_transparent')" @input="setOption('global.header_transparent',$event)"/>
                                </div>
                                <div class="col-2" v-if="getOption('global.header_transparent') === '1'">
                                    <to-block-label-slider-input :label-title="$t('headerBuilder.header_opacity')" :min="0" :max="100" unit="%" :value="getOption('global.header_opacity')" @input="setOption('global.header_opacity',$event)"/>
                                </div>
                            </div>
                        </div>
                        <div class="to-changed-settings" v-if="getOption('global.header_transparent') === '1'">
                            <div class="form-grid">
                                <div class="col-3">
                                    <to-label>{{ $t('headerBuilder.light_scheme') }}</to-label>
                                    <to-switch :value="getOption('global.header_menu_logo_light')" @input="setOption('global.header_menu_logo_light',$event)"/>
                                </div>
                                <div class="col-auto" v-if="getOption('global.header_menu_logo_light') === '1'">
                                    <to-color-picker :value="getOption('header_builder_light_color')" @input="setOption('header_builder_light_color',$event)" :label-title="$t('headerBuilder.light_scheme_color')"/>
                                </div>
                                <div class="col-auto" v-if="getOption('global.header_menu_logo_light') === '1'">
                                    <to-color-picker :value="getOption('header_builder_light_color_hover')" @input="setOption('header_builder_light_color_hover',$event)" :label-title="$t('headerBuilder.light_scheme_color_hover')"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>
        </to-panel>

        <to-panel id="panel.menu" v-if="getOption('global.effects_hide_header') == 0 && getOption('header_source') === 'default'">
            <to-panel-group :label-title="$t('panel.menu')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.layout_menu_menu') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch :value="getOption('global.menu_show')" @input="setOption('global.menu_show',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('global.menu_show')" :label-title="$t('panel.menu_options')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             <div v-html="$t('info.menu_menu_options')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('settings.menu_transparency') }}</to-label>
                            <to-switch
                                :value="getOption('global.header_transparent')"
                                @input="setOption('global.header_transparent',$event)"
                            />
                        </div>
                        <div class="col-2" v-if="getOption('global.header_transparent') == 1">
                            <to-block-label-slider-input
                                :label-title="$t('settings.menu_opacity')"
                                :min="0" :max="100" unit="%"
                                :value="getOption('global.header_opacity')"
                                @input="setOption('global.header_opacity',$event)"
                            />
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings" v-if="getOption('global.header_transparent') == 1">
                    <div class="form-grid">
                        <div class="col-1">
                            <div class="to-alert">
                                <div class="icon"><to-svg-icon name="info"/></div>
                                <div class="text">
                                    <span>{{ $t('alert.menu_transparency_part1') }}</span>
                                    <router-link :to="'/title-area/panel.style_alignment'">{{ $t('panel.title_area') }}</router-link>
                                    <span>{{ $t('general.or') }}</span>
                                    <router-link :to="'/general/theme-layout/panel.main_content_area'">{{ $t('panel.content_area') }}</router-link>
                                    <span>{{ $t('alert.menu_transparency_part2') }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('settings.use_light_menu_logo') }}</to-label>
                            <to-switch :value="getOption('global.header_menu_logo_light')" @input="setOption('global.header_menu_logo_light',$event)"/>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings" v-if="getOption('header_layout') == 'fullwidth_hamburger' || getOption('header_layout') == 'perspective' || getOption('header_layout') == 'vertical'">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('settings.show_socials') }}</to-label>
                            <to-switch :value="getOption('show_menu_socials')" @input="setOption('show_menu_socials',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('global.menu_show')" :label-title="$t('panel.options_sticky_menu')" :responsive="getOption('disable_fixed_header') == '0' ? true : false">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                               {{ $t('info.menu_sticky_header') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <to-switch trueValue="0" falseValue="1" :value="getOption('disable_fixed_header')" @input="setOption('disable_fixed_header',$event)"/>
                    </div>
                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('sticky_header_on_mobile')" @input="setOption('sticky_header_on_mobile',$event)" :options="stickyHeaderMobile"/>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group v-if="!getOption('global.menu_show')" :label-title="$t('panel.use_light_logo')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.single_pages_page_use_ligth_logo') }}
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('global.header_menu_logo_light')" @input="setOption('global.header_menu_logo_light',$event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.top_area" v-if="getOption('global.effects_hide_header') == 0 && getOption('header_source') === 'default' && getOption('top_area_show')">
            <to-panel-group :label-title="$t('panel.top_area_layout')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.top_area_top_area_layout') }}
                        </div>
                    </div>
                    </template>
                <div class="to-changed-settings">
                    <to-label>{{ $t('settings.top_area_alignment') }}</to-label>
                    <to-radio-toggle :value="getOption('top_area_alignment')" @input="setOption('top_area_alignment',$event)" :options="topAreaAlignment"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.top_area_options')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             <div v-html="$t('info.top_area_top_area_options')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('settings.top_area_transparency') }}</to-label>
                            <to-switch :value="getOption('global.header_top_area_transparent')" @input="setOption('global.header_top_area_transparent',$event)"/>
                        </div>
                        <div class="col-2" v-if="getOption('global.header_top_area_transparent') == 1">
                            <to-block-label-slider-input :label-title="$t('settings.top_area_opacity')" :min="0" :max="100" unit="%" :value="getOption('global.header_top_area_opacity')" @input="setOption('global.header_top_area_opacity',$event)"/>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('settings.show_contact') }}</to-label>
                            <to-switch :value="getOption('top_area_contacts')" @input="setOption('top_area_contacts',$event)"/>
                        </div>
                        <div class="col-2">
                            <to-label>{{ $t('settings.show_socials') }}</to-label>
                            <to-switch :value="getOption('top_area_socials')" @input="setOption('top_area_socials',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <to-alert
                        :title="$t('alert.setup_contact')"
                        :titleLink="$t('alert.contacts_and_socials')"
                        route="/contacts-and-socials/socials/panel.social_networks">
                    </to-alert>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.top_area_sticky')">
                  <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.top_area_sticky_top_area') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch trueValue="0" falseValue="1" :value="getOption('top_area_disable_fixed')" @input="setOption('top_area_disable_fixed',$event)"/>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.top_area_button')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.top_area_top_area_button') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-switch
                        :value="getOption('top_area_button')"
                        @input="setOption('top_area_button',$event)"
                    />
                </div>

                <div class="to-changed-settings" v-if="getOption('top_area_button')">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-label>{{ $t('settings.top_area_button_text') }}</to-label>
                            <to-input :value="getOption('top_area_button_text')" @input="setOption('top_area_button_text',$event)"/>
                        </div>
                        <div class="col-2">
                            <to-label>{{ $t('settings.top_area_button_id') }}</to-label>
                            <to-input :value="getOption('top_area_button_id')" @input="setOption('top_area_button_id',$event)"/>
                        </div>
                        <div class="col-2">
                            <to-label>{{ $t('settings.top_area_button_link') }}</to-label>
                            <to-input :value="getOption('top_area_button_link')" @input="setOption('top_area_button_link',$event)"/>
                        </div>
                        <div class="col-2">
                            <to-label>{{ $t('settings.top_area_button_link_target') }}</to-label>
                            <to-select :value="getOption('top_area_button_link_target')" @input="setOption('top_area_button_link_target',$event)" :options="topAreaButtonLinkTarget"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('top_area_button') && isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.top_area_button_style')">
                <div class="to-changed-settings">
                    <to-radio-icon class="width-80" :value="getOption('')" @input="setOption('',$event)" :options="topAreaButtonStyle"></to-radio-icon>
                </div>
            </to-panel-group>

            <to-panel-group v-if="getOption('top_area_button')" :label-title="$t('panel.top_area_button_colors')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.top_area_button_colors') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('top_area_button_text_color')"
                                @input="setOption('top_area_button_text_color',$event)"
                                :label-title="$t('colors.button_text')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('top_area_button_background_color')"
                                @input="setOption('top_area_button_background_color',$event)"
                                :label-title="$t('colors.button_background')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('top_area_button_border_color')"
                                @input="setOption('top_area_button_border_color',$event)"
                                :label-title="$t('colors.button_border')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('top_area_button_hover_text_color')"
                                @input="setOption('top_area_button_hover_text_color',$event)"
                                :label-title="$t('colors.button_hover_text')"/>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('top_area_button_hover_background_color')"
                                @input="setOption('top_area_button_hover_background_color',$event)"
                                :label-title="$t('colors.button_hover_background')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('top_area_button_hover_border_color')"
                                @input="setOption('top_area_button_hover_border_color',$event)"
                                :label-title="$t('colors.button_hover_border')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.website_search" v-if="getOption('global.effects_hide_header') == 0 && getOption('header_source') === 'default'">
            <to-panel-group :label-title="$t('panel.website_search_search')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.website_search') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-switch trueValue="0" falseValue="1" :value="getOption('hide_search_icon')" @input="setOption('hide_search_icon',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div v-if="getOption('hide_search_icon') === '0' && (getOption('header_layout') === 'default' || getOption('header_layout') === 'overlay')" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.website_search_layout')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.website_search_layout') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-select :value="getOption('website_search_layout')" @input="setOption('website_search_layout',$event)" :options="websiteSearchLayout"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('website_search_layout') === 'dropdown'" :label-title="$t('panel.website_search_placeholder_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.website_search_placeholder_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('website_search_layout_dropdown_placeholder_text')" @input="setOption('website_search_layout_dropdown_placeholder_text',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group v-if="getOption('website_search_layout') === 'fullscreen'" :label-title="$t('panel.website_search_placeholder_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.website_search_placeholder_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('website_search_layout_fullscreen_placeholder_text')" @input="setOption('website_search_layout_fullscreen_placeholder_text',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <div v-if="getOption('website_search_layout') === 'fullscreen'" class="to-panel-separator">
                    <to-panel-group :label-title="$t('panel.website_search_ajax')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.website_search_ajax') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('website_search_ajax')" @input="setOption('website_search_ajax',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <div v-if="getOption('website_search_ajax') === '1'" class="to-panel-separator next-of-type">
                        <to-panel-group v-if="getOption('website_search_post_type_products') === '1'" :label-title="$t('panel.website_search_products_auto_suggestions')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.website_search_products_auto_suggestions') }}
                                    </div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-block-label-slider-input :min="1" :max="24" unit="" :value="getOption('website_search_products_auto_suggestions')" @input="setOption('website_search_products_auto_suggestions',$event)"/>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <div v-if="getOption('website_search_post_type_posts') === '1'" class="to-panel-separator">
                            <to-panel-group :label-title="$t('panel.website_search_posts_auto_suggestions')">
                                <template v-slot:tooltip>
                                    <div class="help-tooltip-text">
                                        <div class="info">
                                            {{ $t('info.website_search_posts_auto_suggestions') }}
                                        </div>
                                    </div>
                                </template>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-2">
                                            <to-block-label-slider-input :min="1" :max="16" unit="" :value="getOption('website_search_posts_auto_suggestions')" @input="setOption('website_search_posts_auto_suggestions',$event)"/>
                                        </div>
                                    </div>
                                </div>
                            </to-panel-group>

                            <to-panel-group :label-title="$t('panel.website_search_posts_result_title')">
                                <template v-slot:tooltip>
                                    <div class="help-tooltip-text">
                                        <div class="info">
                                            {{ $t('info.website_search_posts_result_title') }}
                                        </div>
                                    </div>
                                </template>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-2">
                                            <to-input :value="getOption('website_search_posts_result_title')" @input="setOption('website_search_posts_result_title',$event)"/>
                                        </div>
                                    </div>
                                </div>
                            </to-panel-group>
                        </div>

                        <div v-if="getOption('website_search_post_type_pages') === '1'" class="to-panel-separator">
                            <to-panel-group :label-title="$t('panel.website_search_pages_auto_suggestions')">
                                <template v-slot:tooltip>
                                    <div class="help-tooltip-text">
                                        <div class="info">
                                            {{ $t('info.website_search_pages_auto_suggestions') }}
                                        </div>
                                    </div>
                                </template>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-2">
                                            <to-block-label-slider-input :min="1" :max="16" unit="" :value="getOption('website_search_pages_auto_suggestions')" @input="setOption('website_search_pages_auto_suggestions',$event)"/>
                                        </div>
                                    </div>
                                </div>
                            </to-panel-group>

                            <to-panel-group :label-title="$t('panel.website_search_pages_result_title')">
                                <template v-slot:tooltip>
                                    <div class="help-tooltip-text">
                                        <div class="info">
                                            {{ $t('info.website_search_pages_result_title') }}
                                        </div>
                                    </div>
                                </template>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-2">
                                            <to-input :value="getOption('website_search_pages_result_title')" @input="setOption('website_search_pages_result_title',$event)"/>
                                        </div>
                                    </div>
                                </div>
                            </to-panel-group>
                        </div>

                        <div v-if="getOption('website_search_post_type_portfolio') === '1'" class="to-panel-separator">
                            <to-panel-group :label-title="$t('panel.website_search_portfolio_auto_suggestions')">
                                <template v-slot:tooltip>
                                    <div class="help-tooltip-text">
                                        <div class="info">
                                            {{ $t('info.website_search_portfolio_auto_suggestions') }}
                                        </div>
                                    </div>
                                </template>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-2">
                                            <to-block-label-slider-input :min="1" :max="16" unit="" :value="getOption('website_search_portfolio_auto_suggestions')" @input="setOption('website_search_portfolio_auto_suggestions',$event)"/>
                                        </div>
                                    </div>
                                </div>
                            </to-panel-group>

                            <to-panel-group :label-title="$t('panel.website_search_portfolio_result_title')">
                                <template v-slot:tooltip>
                                    <div class="help-tooltip-text">
                                        <div class="info">
                                            {{ $t('info.website_search_portfolio_result_title') }}
                                        </div>
                                    </div>
                                </template>
                                <div class="to-changed-settings">
                                    <div class="form-grid">
                                        <div class="col-2">
                                            <to-input :value="getOption('website_search_portfolio_result_title')" @input="setOption('website_search_portfolio_result_title',$event)"/>
                                        </div>
                                    </div>
                                </div>
                            </to-panel-group>
                        </div>
                    </div>

                    <to-panel-group :label-title="$t('panel.website_search_popular')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.website_search_popular') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-auto">
                                    <to-switch trueValue="1" falseValue="0" :value="getOption('website_search_popular')" @input="setOption('website_search_popular',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <div v-if="getOption('website_search_popular') === '1'" class="to-panel-separator next-of-type">
                        <to-panel-group :label-title="$t('panel.website_search_popular_title')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.website_search_popular_title') }}
                                    </div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-input :value="getOption('website_search_popular_title')" @input="setOption('website_search_popular_title',$event)"/>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('panel.website_search_select_terms')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">
                                        {{ $t('info.website_search_select_terms') }}
                                    </div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-1">
                                        <to-block-terms-search :value="getOption('website_search_select_terms_data')" @input="setOption('website_search_select_terms_data', $event)"/>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>
                    </div>

                    <to-panel-group :label-title="$t('panel.website_search_view_results_button_text')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.website_search_view_results_button_text') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-input :value="getOption('website_search_view_results_button_text')" @input="setOption('website_search_view_results_button_text',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>

            <div v-if="getOption('hide_search_icon') === '0' && (getOption('header_layout') === 'fullwidth_hamburger' || getOption('header_layout') === 'perspective' || getOption('header_layout') === 'vertical')" class="to-panel-separator">
                <to-panel-group :label-title="$t('panel.website_search_placeholder_text')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.website_search_placeholder_text') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-input :value="getOption('website_search_layout_dropdown_placeholder_text')" @input="setOption('website_search_layout_dropdown_placeholder_text',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.website_search_ajax')">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.website_search_ajax') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-auto">
                                <to-switch trueValue="1" falseValue="0" :value="getOption('website_search_ajax')" @input="setOption('website_search_ajax',$event)"/>
                            </div>
                        </div>
                    </div>
                </to-panel-group>

                <div v-if="getOption('website_search_ajax') === '1'" class="to-panel-separator next-of-type">
                    <to-panel-group v-if="getOption('website_search_post_type_products') === '1'" :label-title="$t('panel.website_search_products_auto_suggestions')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.website_search_products_auto_suggestions') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-block-label-slider-input :min="1" :max="24" unit="" :value="getOption('website_search_products_auto_suggestions')" @input="setOption('website_search_products_auto_suggestions',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('website_search_post_type_posts') === '1'" :label-title="$t('panel.website_search_posts_auto_suggestions')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.website_search_posts_auto_suggestions') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-block-label-slider-input :min="1" :max="16" unit="" :value="getOption('website_search_posts_auto_suggestions')" @input="setOption('website_search_posts_auto_suggestions',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('website_search_post_type_pages') === '1'" :label-title="$t('panel.website_search_pages_auto_suggestions')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.website_search_pages_auto_suggestions') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-block-label-slider-input :min="1" :max="16" unit="" :value="getOption('website_search_pages_auto_suggestions')" @input="setOption('website_search_pages_auto_suggestions',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="getOption('website_search_post_type_portfolio') === '1'" :label-title="$t('panel.website_search_portfolio_auto_suggestions')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">
                                    {{ $t('info.website_search_portfolio_auto_suggestions') }}
                                </div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-block-label-slider-input :min="1" :max="16" unit="" :value="getOption('website_search_portfolio_auto_suggestions')" @input="setOption('website_search_portfolio_auto_suggestions',$event)"/>
                                </div>
                            </div>
                        </div>
                    </to-panel-group>
                </div>
            </div>
        </to-panel>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';
import config from '@/services/config';
import i18n from '@/services/i18n';
import {bus} from '@/services/bus';

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
            headerSource: [
                {label: i18n.t('headerBuilder.header_default'), value: 'default'},
                {label: i18n.t('headerBuilder.header_builder'), value: 'builder'},
            ],
            headerBuilderTemplatesList: headerBuilderTemplatesList,
            headerBuilderMenuDesktopPreset: [
                {label: i18n.t('headerBuilder.light_submenu'), value: '3'},
                {label: i18n.t('headerBuilder.dark_submenu'), value: '1'},
                {label: i18n.t('headerBuilder.white_main_menu'), value: '4'},
            ],
            headerBuilderMenuMobileLayout:  [
                {icon: 'Schemes-28', title: i18n.t('headerLayout.default'), value: 'default'},
                {icon: 'Schemes-31', title: i18n.t('headerLayout.overlay'), value: 'overlay'},
                {icon: 'Schemes-29', title: i18n.t('headerLayout.slide_left'), value: 'slide-horizontal'},
                {icon: 'Schemes-30', title: i18n.t('headerLayout.slide_top'), value: 'slide-vertical'},
            ],
            headerBuilderMenuMobilePreset: [
                {label: i18n.t('headerLayout.light_menu'), value: 'light'},
                {label: i18n.t('headerLayout.dark_menu'), value: 'dark'},
            ],
            topAreaAlignment: [
                {icon: 'align-left', value: 'left', tooltip: i18n.t('general.left')},
                {icon: 'align-right', value: 'right', tooltip: i18n.t('general.right')},
                {icon: 'align-center', value: 'center', tooltip: i18n.t('general.center')},
                {icon: 'align-justify', value: 'justified', tooltip: i18n.t('general.justify')},
            ],
            topAreaButtonStyle: [
                {icon: 'Button-01', title: i18n.t('general.style') + ' 1', value: '1'},
                {icon: 'Button-02', title: i18n.t('general.style') + ' 2', value: '2'},
                {icon: 'Button-03', title: i18n.t('general.style') + ' 3', value: '3'},
                {icon: 'Button-04', title: i18n.t('general.style') + ' 4', value: '4'},
                {icon: 'Button-05', title: i18n.t('general.style') + ' 5', value: '5'},
                {icon: 'Button-06', title: i18n.t('general.style') + ' 6', value: '6'}
            ],
            topAreaButtonLinkTarget: [
                {label: i18n.t('general.target_self'), value: 'self'},
                {label: i18n.t('general.target_blank'), value: 'blank'},
            ],
            websiteSearchLayout: [
                {label: i18n.t('search.layout_dropdown'), value: 'dropdown'},
                {label: i18n.t('search.layout_fullscreen'), value: 'fullscreen'},
            ],
			stickyHeaderMobile: [
                {label: i18n.t('panel.sticky_header_mobile_enabled'), value: '1'},
				{label: i18n.t('panel.sticky_header_mobile_hide_on_scroll'), value: ''},
                {label: i18n.t('panel.sticky_header_mobile_disabled'), value: 'disabled'},
            ],
        }
    },

    methods: {
        showPreview(item) {
            window.open(item.preview,'_blank');
        },

        showEditPage(item) {
            window.open(item.edit,'_blank');
        }
    },

    computed: {
        headerBuilderCreateUrl(){
            return config.headerBuilderCreateUrl
        },

        headerBuilderImportUrl(){
            return config.headerBuilderImportUrl
        },
    },

    created() {
        bus.$on('setResponsiveType', value => {
            this.responsiveType = value;
        });
    }
})
</script>

<style lang="scss">

.iframe-preview {
    position: relative;

    .iframe-preview-loading {
        position: absolute;
        top: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 100%;

        background-color: $popup-overlay-background;
        color: $white-color;
    }

    border: 1px solid #cdd1d7;
    height: 200px;
    overflow:hidden;

    iframe {
        width: 200%;
        height: 400px;

        transform: scale(0.5);
        transform-origin: 0 0;
    }

    &.tablet{

    }

    &.mobile{
        width: 230px;
        height: 360px;

        iframe {
            height: 720px;
        }

    }
}

</style>
