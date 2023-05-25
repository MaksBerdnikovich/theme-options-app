<template>
    <div>
        <to-panel id="panel.footer_widget">
            <to-panel-group :label-title="$t('panel.background_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                         <div class="info">
                            {{ $t('info.footer_colors_widget_area_background') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="footer_widget_area_background" :tab-video="false" :tab-pattern="false"/>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.font_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.footer_colors_widget_area_font_colors') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                            {name: 'Footer_Widget_Area_Font_Colors.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_widget_title_color')"
                                @input="setOption('footer_widget_title_color',$event)"
                                :label-title="$t('colors.widget_title_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_widget_text_color')"
                                @input="setOption('footer_widget_text_color',$event)"
                                :label-title="$t('colors.widget_text_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_widget_link_color')"
                                @input="setOption('footer_widget_link_color',$event)"
                                :label-title="$t('colors.widget_link_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_widget_hover_link_color')"
                                @input="setOption('footer_widget_hover_link_color',$event)"
                                :label-title="$t('colors.widget_hover_link_color')"
                            />
                        </div>
                    </div>
                </div>

                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_widget_active_link_color')"
                                @input="setOption('footer_widget_active_link_color',$event)"
                                :label-title="$t('colors.widget_active_link_color')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.additional_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.footer_colors_widget_area_additional_colors') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Footer_Widget_Area_Additional_Colors.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_widget_triangle_color')"
                                @input="setOption('footer_widget_triangle_color',$event)"
                                :label-title="$t('colors.widget_triangle_color')"
                            />
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.bottom_area">
            <to-panel-group :label-title="$t('panel.background_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.footer_colors_bottom_area_background') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="footer_background" :tab-video="false" :tab-pattern="false"/>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.font_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.footer_colors_bottom_area_font_colors') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('copyright_text_color')"
                                @input="setOption('copyright_text_color',$event)"
                                :label-title="$t('colors.copyright_text_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('copyright_link_color')"
                                @input="setOption('copyright_link_color',$event)"
                                :label-title="$t('colors.copyright_link_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_menu_color')"
                                @input="setOption('footer_menu_color',$event)"
                                :label-title="$t('colors.menu_font_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_menu_hover_color')"
                                @input="setOption('footer_menu_hover_color',$event)"
                                :label-title="$t('colors.menu_hover_font_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_text_color')"
                                @input="setOption('footer_text_color',$event)"
                                :label-title="$t('colors.text_font_color')"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.additional_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.footer_colors_bottom_area_additional_colors') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_menu_separator_color')"
                                @input="setOption('footer_menu_separator_color',$event)"
                                :label-title="$t('colors.menu_separator_color')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('footer_top_border_color')"
                                @input="setOption('footer_top_border_color',$event)"
                                :label-title="$t('colors.top_border_color')"
                            />
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.custom_footer" >
            <to-panel-group :label-title="$t('panel.background_type')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.footer_colors_custom_footer_background') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-background optionPrefix="custom_footer_background" :tab-video="false" :tab-pattern="false"/>
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
