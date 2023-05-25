<template>
    <div>
        <to-panel id="panel.elements_background">
            <to-panel-group :label-title="$t('panel.elements_background_default')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_styled_elements_background') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Help-Styled_Element_Background-1-1.png'},
                                {name: 'Help-Styled_Element_Background-1-2.png'},
                                {name: 'Help-Styled_Element_Background-1-3.png'},
                                {name: 'Help-Styled_Element_Background-1-4.png'},
                                {name: 'Help-Styled_Element_Background-1-5.png'},
                                {name: 'Help-Styled_Element_Background-1-6.png'},
                                {name: 'Help-Styled_Element_Background-2-1.png'},
                                {name: 'Help-Styled_Element_Background-2-2.png'},
                                {name: 'Help-Styled_Element_Background-2-3.png'},
                                {name: 'Help-Styled_Element_Background-2-4.png'},
                                {name: 'Help-Styled_Element_Background-2-5.png'},
                                {name: 'Help-Styled_Element_Background-2-6.png'},
                                {name: 'Help-Styled_Element_Background-2-7.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker
                                :value="getOption('styled_elements_background_color')"
                                @input="setOption('styled_elements_background_color',$event)"
                                :label-title="$t('colors.styled_element_background')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.icons_color_elements')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_icons_elements') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Sharing_Icons_Defaults.png'},
                                {name: 'Box_Border_Color-1-1.png'},
                                {name: 'Box_Border_Color-1-2.png'},
                                {name: 'Box_Border_Color-1-3.png'},
                                {name: 'Box_Border_Color-1-4.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker
                                :value="getOption('box_border_color')"
                                @input="setOption('box_border_color',$event)"
                                :label-title="$t('colors.elements_border_colors')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.links">
            <to-panel-group :label-title="$t('panel.links_defaults')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_links') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Links_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('link_color')" @input="setOption('link_color',$event)" :label-title="$t('colors.link_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('hover_link_color')" @input="setOption('hover_link_color',$event)" :label-title="$t('colors.link_color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('active_link_color')" @input="setOption('active_link_color',$event)" :label-title="$t('colors.link_color_active')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.divider">
            <to-panel-group :label-title="$t('panel.divider_defaults')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_divider') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Divider_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker :value="getOption('divider_default_color')" @input="setOption('divider_default_color',$event)" :label-title="$t('colors.divider_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.buttons">
            <to-panel-group :label-title="$t('panel.buttons_flat')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_flat_button') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Flat_Button_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('button_text_basic_color')"
                                @input="setOption('button_text_basic_color',$event)"
                                :label-title="$t('colors.normal_text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('button_text_hover_color')"
                                @input="setOption('button_text_hover_color',$event)"
                                :label-title="$t('colors.normal_text_color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('button_background_basic_color')"
                                @input="setOption('button_background_basic_color',$event)"
                                :label-title="$t('colors.normal_background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('button_background_hover_color')"
                                @input="setOption('button_background_hover_color',$event)"
                                :label-title="$t('colors.normal_background_color_hover')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.buttons_outline')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_outline_button') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Outline_Button_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('button_outline_text_basic_color')"
                                @input="setOption('button_outline_text_basic_color',$event)"
                                :label-title="$t('colors.normal_text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('button_outline_text_hover_color')"
                                @input="setOption('button_outline_text_hover_color',$event)"
                                :label-title="$t('colors.normal_text_color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('button_outline_border_basic_color')"
                                @input="setOption('button_outline_border_basic_color',$event)"
                                :label-title="$t('colors.normal_border_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.widgets_sidebar">
            <to-panel-group :label-title="$t('panel.widgets_link')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_sidebar_widgets_links') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Widget_Links_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('widget_link_color')"
                                @input="setOption('widget_link_color',$event)"
                                :label-title="$t('colors.widget_link_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('widget_hover_link_color')"
                                @input="setOption('widget_hover_link_color',$event)"
                                :label-title="$t('colors.widget_hover_link_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('widget_active_link_color')"
                                @input="setOption('widget_active_link_color',$event)"
                                :label-title="$t('colors.widget_active_link_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.bullets">
            <to-panel-group :label-title="$t('panel.bullets_icon')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_bullets_icon') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker
                                :value="getOption('bullets_symbol_color')"
                                @input="setOption('bullets_symbol_color',$event)"
                                :label-title="$t('colors.bullets_icon_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.date_filter">
            <to-panel-group :label-title="$t('panel.date_filter_team')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_date_filter_team_subtitle') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Date_Filter_&_Team_Subtitle_Defaults_1-1.png'},
                                {name: 'Date_Filter_&_Team_Subtitle_Defaults_1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker
                                :value="getOption('date_filter_subtitle_color')"
                                @input="setOption('date_filter_subtitle_color',$event)"
                                :label-title="$t('colors.date_filter_team_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.tags_colors">
            <to-panel-group :label-title="$t('panel.tags_colors_default')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_tags') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Tags_Default_Colors_1-1.png'},
                                {name: 'Tags_Default_Colors_1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('tag_background_color')" @input="setOption('tag_background_color',$event)" :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('tag_font_color')" @input="setOption('tag_font_color',$event)" :label-title="$t('colors.font_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('tag_background_color_hover')" @input="setOption('tag_background_color_hover',$event)" :label-title="$t('colors.normal_background_color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('tag_font_color_hover')" @input="setOption('tag_font_color_hover',$event)" :label-title="$t('colors.normal_text_color_hover')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.additional">
            <to-panel-group :label-title="$t('panel.additional_colors_default')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.colors_elements_additional_colors_1')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Additional_Element_Color-1-1.png'},
                                {name: 'Additional_Element_Color-1-2.png'},
                                {name: 'Additional_Element_Color-1-3.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                        <div class="info">
                            <div v-html="$t('info.colors_elements_additional_colors_2')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Additional_Element_Color-2-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                        <div class="info">
                            <div v-html="$t('info.colors_elements_additional_colors_3')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Additional_Element_Color-3-1.png'},
                                {name: 'Additional_Element_Color-3-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                        <div class="info">
                            <div v-html="$t('info.colors_elements_additional_colors_4')"/>
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Additional_Element_Color-4-1.png'},
                                {name: 'Additional_Element_Color-4-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('styled_elements_color_1')"
                                @input="setOption('styled_elements_color_1',$event)"
                                :label-title="$t('colors.additional_color') + ' 1'"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('styled_elements_color_2')"
                                @input="setOption('styled_elements_color_2',$event)"
                                :label-title="$t('colors.additional_color') + ' 2'"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('styled_elements_color_3')"
                                @input="setOption('styled_elements_color_3',$event)"
                                :label-title="$t('colors.additional_color') + ' 3'"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('styled_elements_color_4')"
                                @input="setOption('styled_elements_color_4',$event)"
                                :label-title="$t('colors.additional_color') + ' 4'"/>
                        </div>
                    </div>
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
