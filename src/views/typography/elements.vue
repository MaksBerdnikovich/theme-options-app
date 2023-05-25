<template>
    <div>
        <to-panel id="panel.buttons">
            <to-panel-group :label-title="$t('panel.default_font_regular')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_elements_buttons_regular_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Button_Regular_Style.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font :show-sizes="false" :showLetterSpacing="true" option-prefix="button"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_font_thin')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_elements_buttons_thin_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Button_Thin_Style.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font :show-sizes="false" :showLetterSpacing="true" option-prefix="button_thin"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <to-alert
                        :title="$t('alert.button_color')"
                        :titleLink="$t('alert.button_color_settings')"
                        route="/colors/elements/panel.buttons">
                    </to-alert>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.tabs_accordions">
            <to-panel-group :label-title="$t('panel.default_font_bold_title')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_elements_tabs_accordions_title_bold') }}
                        </div>
                         <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Tabs_&_Accordions-1-1.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="tabs_title"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_font_thin_title')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_elements_tabs_accordions_title_thin') }}
                        </div>
                         <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Tabs_&_Accordions-1-2.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="tabs_title_thin"></to-block-font>
                </div>

            </to-panel-group>
        </to-panel>

        <to-panel id="panel.counters">
            <to-panel-group :label-title="$t('panel.default_font_counter')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_elements_counters_numbers_font') }}
                        </div>
                         <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Counter_Numbers_Font_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="counter" :responsive-type="responsiveType"></to-block-font>
                    </div>
                </template>

            </to-panel-group>
        </to-panel>

        <to-panel id="panel.sidebar_widgets">
            <to-panel-group :label-title="$t('panel.default_font_widget')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_elements_sidebar_widgets_font') }}
                        </div>
                         <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Widget_Title_Font_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="widget_title"></to-block-font>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.widgets_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_elements_sidebar_widgets_title') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Help-Sidebar-Widget-Titles.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('widget_title_color')" @input="setOption('widget_title_color',$event)" :label-title="$t('colors.font_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('widget_triangle_color')" @input="setOption('widget_triangle_color',$event)" :label-title="$t('colors.triangle_color')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group>
                <div class="to-changed-settings">
                    <to-alert :title="$t('alert.widget_color')" :titleLink="$t('alert.widgets_color_settings')" route="/colors/elements/panel.widgets_sidebar"></to-alert>
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
                responsive: 'desktop',
            }
        }
    })
</script>
