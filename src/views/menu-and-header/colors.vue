<template>
    <div>
        <to-panel id="panel.backgrounds">
            <to-panel-group v-if="getOption('header_source') === 'default' && (getOption('header_layout') == 'default' || getOption('header_layout') == 'overlay')" :label-title="$t('panel.menu_header_background')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.backgrounds_main_menu_header_area_background') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="top_background" :tab-video="false" :tab-pattern="false"/>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group v-if="getOption('header_source') === 'default' && (getOption('header_layout') == 'fullwidth_hamburger' || getOption('header_layout') == 'perspective')" :label-title="$t('panel.menu_header_area_background')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.backgrounds_header_area_background') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                             {name:'Header_Area_Background_Type.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="top_background" :tab-video="false" :tab-pattern="false"/>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group v-if="getOption('header_source') === 'default' && (getOption('header_layout') == 'fullwidth_hamburger' || getOption('header_layout') == 'perspective')" :label-title="$t('panel.menu_header_navigation_background')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backgrounds_navigation_area_background') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                             {name:'Navigation_Area_Background_Type.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="navigation_background" :tab-video="false" :tab-pattern="false"/>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group v-if="getOption('header_source') === 'default' && getOption('header_layout') == 'vertical'" :label-title="$t('panel.menu_header_vertical_navigation_background')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backgrounds_navigation_vertical_background') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                             {name:'Main_Menu_Area_Background_Type.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="navigation_background" :tab-video="false" :tab-pattern="false"/>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group v-if="getOption('header_source') === 'default' && getOption('header_layout') == 'vertical'" :label-title="$t('panel.menu_header_vertical_mobile_background')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backgrounds_navigation_vertical_mobile_background') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                             {name:'Header_Area_Background_Type_Responsive.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="top_background" :tab-video="false" :tab-pattern="false"/>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group v-if="getOption('header_source') === 'builder'" :label-title="$t('panel.menu_header_background_container')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backgrounds_main_menu_header_container_background') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="top_background" :tab-video="false" :tab-pattern="false"/>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.menu_header_level1_colors')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.backgrounds_level_1_colors') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level1_background_color')" @input="setOption('main_menu_level1_background_color',$event)" :label-title="$t('colors.background')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level1_hover_background_color')" @input="setOption('main_menu_level1_hover_background_color',$event)" :label-title="$t('colors.background_hover')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level1_active_background_color')" @input="setOption('main_menu_level1_active_background_color',$event)" :label-title="$t('colors.background_active')"/>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_level1_background_color')" @input="setOption('mobile_menu_level1_background_color',$event)" :label-title="$t('colors.background')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_level1_active_background_color')" @input="setOption('mobile_menu_level1_active_background_color',$event)" :label-title="$t('colors.background_active')"/>
                            </div>
                        </div>
                    </div>
                    <to-separator></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.menu_header_level2_colors')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.backgrounds_level_2_colors') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level2_background_color')" @input="setOption('main_menu_level2_background_color',$event)" :label-title="$t('colors.background')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level2_hover_background_color')" @input="setOption('main_menu_level2_hover_background_color',$event)" :label-title="$t('colors.background_hover')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level2_active_background_color')" @input="setOption('main_menu_level2_active_background_color',$event)" :label-title="$t('colors.background_active')"/>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_level2_background_color')" @input="setOption('mobile_menu_level2_background_color',$event)" :label-title="$t('colors.background')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_level2_active_background_color')" @input="setOption('mobile_menu_level2_active_background_color',$event)" :label-title="$t('colors.background_active')"/>
                            </div>
                        </div>
                    </div>
                    <to-separator></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.menu_header_level3_colors')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.backgrounds_level_3_colors') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level3_background_color')" @input="setOption('main_menu_level3_background_color',$event)" :label-title="$t('colors.background')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level3_hover_background_color')" @input="setOption('main_menu_level3_hover_background_color',$event)" :label-title="$t('colors.background_hover')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level3_active_background_color')" @input="setOption('main_menu_level3_active_background_color',$event)" :label-title="$t('colors.background_active')"/>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_level3_background_color')" @input="setOption('mobile_menu_level3_background_color',$event)" :label-title="$t('colors.background')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_level3_active_background_color')" @input="setOption('mobile_menu_level3_active_background_color',$event)" :label-title="$t('colors.background_active')"/>
                            </div>
                        </div>
                    </div>

                    <to-separator></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.menu_header_border_color')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backgrounds_menu_border_color') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                             {name:'Menu_Border_Color.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('main_menu_level2_border_color')" @input="setOption('main_menu_level2_border_color',$event)" :label-title="$t('general.color')"/>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_border_color')" @input="setOption('mobile_menu_border_color',$event)" :label-title="$t('general.color')"/>
                            </div>
                        </div>
                    </div>
                    <to-separator></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.submenu_highlighter_color')" v-if="getOption('header_style') == '2' || getOption('header_style') == '3'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backgrounds_menu_border_color') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                             {name:'Specify_Color_for_Submenu.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('submenu_highlighter_color')" @input="setOption('submenu_highlighter_color',$event)" :label-title="$t('general.color')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <to-alert :title="$t('alert.font_colors')" :titleLink="$t('alert.menu_typography_settings')" route="/menu-and-header/typography/panel.main_menu"></to-alert>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.hamburger" v-if="getOption('header_source') === 'default'">
            <to-panel-group :label-title="$t('panel.hamburger_icon_color')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.hamburger_hamburger_color') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('hamburger_menu_icon_color')" @input="setOption('hamburger_menu_icon_color',$event)" :label-title="$t('colors.dark_icon')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('hamburger_menu_icon_light_color')" @input="setOption('hamburger_menu_icon_light_color',$event)" :label-title="$t('colors.light_icon')"/>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_button_color')" @input="setOption('mobile_menu_button_color',$event)" :label-title="$t('colors.dark_icon')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_button_light_color')" @input="setOption('mobile_menu_button_light_color',$event)" :label-title="$t('colors.light_icon')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_hide_color')" @input="setOption('mobile_menu_hide_color',$event)" :label-title="$t('colors.hide_icon')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_social_icon_color')" @input="setOption('mobile_menu_social_icon_color',$event)" :label-title="$t('colors.social_icons')"/>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.hamburger_menu" v-if="getOption('header_source') === 'builder'">
            <to-panel-group :label-title="$t('panel.hamburger_icon_color')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.hamburger_hamburger_color') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings" v-if="isDesktop">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('hamburger_menu_icon_color')" @input="setOption('hamburger_menu_icon_color',$event)" :label-title="$t('colors.dark_icon')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('hamburger_menu_icon_light_color')" @input="setOption('hamburger_menu_icon_light_color',$event)" :label-title="$t('colors.light_icon')"/>
                            </div>
                        </div>
                    </div>
                    <div class="to-changed-settings" v-if="isMobile">
                        <div class="form-grid">
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_button_color')" @input="setOption('mobile_menu_button_color',$event)" :label-title="$t('colors.dark_icon')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_button_light_color')" @input="setOption('mobile_menu_button_light_color',$event)" :label-title="$t('colors.light_icon')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_hide_color')" @input="setOption('mobile_menu_hide_color',$event)" :label-title="$t('colors.hide_icon')"/>
                            </div>
                            <div class="col-4">
                                <to-color-picker :value="getOption('mobile_menu_social_icon_color')" @input="setOption('mobile_menu_social_icon_color',$event)" :label-title="$t('colors.social_icons')"/>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>

            <to-panel-group  :label-title="$t('panel.menu_header_navigation_background')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backgrounds_navigation_area_background') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                             {name:'Navigation_Area_Background_Type.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="navigation_background" :tab-video="false" :tab-pattern="false"/>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.overlay_menu">
            <to-panel-group :label-title="$t('panel.overlay_menu_colors')" :responsive="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.overlay_menu_overlay_menu_colors') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ isDesktop, isMobile }">
                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-4" v-if="isDesktop">
                                <to-color-picker :value="getOption('overlay_menu_background_color')" @input="setOption('overlay_menu_background_color',$event)" :label-title="$t('colors.overlay_menu_background')"/>
                            </div>
                            <div class="col-4" v-if="isMobile">
                                <to-color-picker :value="getOption('mobile_menu_background_color')" @input="setOption('mobile_menu_background_color',$event)" :label-title="$t('colors.overlay_menu_background')"/>
                            </div>
                        </div>
                    </div>
                </template>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.mega_menu">
            <to-panel-group :label-title="$t('panel.mega_menu_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.mega_menu_mega_menu_colors') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('main_menu_mega_column_title_color')"
                                @input="setOption('main_menu_mega_column_title_color',$event)"
                                :label-title="$t('colors.column_title_text')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('main_menu_mega_column_title_hover_color')"
                                @input="setOption('main_menu_mega_column_title_hover_color',$event)"
                                :label-title="$t('colors.column_title_text_hover')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('main_menu_mega_column_title_active_color')"
                                @input="setOption('main_menu_mega_column_title_active_color',$event)"
                                :label-title="$t('colors.column_title_text_active')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mega_menu_icons_color')"
                                @input="setOption('mega_menu_icons_color',$event)"
                                :label-title="$t('colors.mega_menu_icons_color')"
                            />
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.top_area" v-if="getOption('header_source') === 'default'">
            <to-panel-group :label-title="$t('panel.top_area_background_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.top_area_top_area_background_type') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="top_area_background" :tab-video="false" :tab-pattern="false"/>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.top_area_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.top_area_top_area_colors') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                             {name:'Top_Area_Colors.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('top_area_border_color')" @input="setOption('top_area_border_color',$event)" :label-title="$t('colors.top_area_border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('top_area_separator_color')" @input="setOption('top_area_separator_color',$event)" :label-title="$t('colors.top_area_separator_color')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <to-alert :title="$t('alert.top_area_text_color')" :titleLink="$t('alert.menu_typography_settings')" route="/menu-and-header/typography/panel.top_area"></to-alert>

                    <to-alert :title="$t('alert.top_area_button_color')" :titleLink="$t('alert.menu_layout_settings')" route="/menu-and-header/layout/panel.top_area"></to-alert>

                    <to-alert :title="$t('alert.top_area_social_contact_color')" :titleLink="$t('alert.contacts_socials_settings')" route="/contacts-and-socials/socials/panel.colors"></to-alert>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>


<script>
    import {addHelpers} from '@/services/helper';

    export default addHelpers({
        data() {
            return {

            }
        }
    })
</script>
