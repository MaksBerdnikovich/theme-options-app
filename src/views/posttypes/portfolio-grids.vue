<template>
    <div>
        <to-panel id="panel.typography">

            <to-panel-group :label-title="$t('panel.portfolio_title_font')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_portfolio_grids_title_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Portfolio_Grids_Portfolio_Title_Font_in_Grids.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="portfolio_title"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.portfolio_title_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_portfolio_grids_title_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker
                                :value="getOption('portfolio_title_color')"
                                @input="setOption('portfolio_title_color',$event)"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.portfolio_description_font')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_portfolio_grids_description_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Portfolio_Grids_Portfolio_Description_Font_in_Grids.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="portfolio_description"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.portfolio_description_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_portfolio_grids_description_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker
                                :value="getOption('portfolio_description_color')"
                                @input="setOption('portfolio_description_color',$event)"
                            />
                        </div>
                    </div>
                </div>

            </to-panel-group>

        </to-panel>

        <to-panel id="panel.colors">

            <to-panel-group :label-title="$t('panel.filter_buttons')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_portfolio_grids_filter_buttons') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Portfolio_Grids_Filter_Buttons_in_Grids.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_filter_button_color')"
                                @input="setOption('portfolio_filter_button_color',$event)"
                                :label-title="$t('colors.button_font')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_filter_button_hover_color')"
                                @input="setOption('portfolio_filter_button_hover_color',$event)"
                                :label-title="$t('colors.button_font_hover')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_filter_button_background_color')"
                                @input="setOption('portfolio_filter_button_background_color',$event)"
                                :label-title="$t('colors.button_background')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_filter_button_hover_background_color')"
                                @input="setOption('portfolio_filter_button_hover_background_color',$event)"
                                :label-title="$t('colors.button_hover_background')"
                            />
                        </div>
                    </div>
                </div>

                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_filter_button_active_color')"
                                @input="setOption('portfolio_filter_button_active_color',$event)"
                                :label-title="$t('colors.button_font_active')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_filter_button_active_background_color')"
                                @input="setOption('portfolio_filter_button_active_background_color',$event)"
                                :label-title="$t('colors.button_background_active')"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.sorting_controls')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_portfolio_grids_sorting_controls') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Portfolio_Grids_Sorting_Controls_in_Grids.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_sorting_controls_color')"
                                @input="setOption('portfolio_sorting_controls_color',$event)"
                                :label-title="$t('colors.sorting_controls_font')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_sorting_background_color')"
                                @input="setOption('portfolio_sorting_background_color',$event)"
                                :label-title="$t('colors.sorting_controls_background')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_sorting_switch_color')"
                                @input="setOption('portfolio_sorting_switch_color',$event)"
                                :label-title="$t('colors.sorting_controls_switch')"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.date_and_sets')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_portfolio_grids_date_sets') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Date_in_Portfolio_Grids.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_date_color')"
                                @input="setOption('portfolio_date_color',$event)"
                                :label-title="$t('colors.date_color')"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.separator')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_portfolio_grids_separator') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Portfolio_Grids_Separator_in_Grids.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_sorting_separator_color')"
                                @input="setOption('portfolio_sorting_separator_color',$event)"
                                :label-title="$t('colors.separator')"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.portfolio_slider_arrows')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_portfolio_grids_portfolio_slider_arrows') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Portfolio_Grids_Portfolio_Slider_Arrows.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_arrow_color')"
                                @input="setOption('portfolio_arrow_color',$event)"
                                :label-title="$t('colors.arrow_font')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_arrow_hover_color')"
                                @input="setOption('portfolio_arrow_hover_color',$event)"
                                :label-title="$t('colors.arrow_font_hover')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_arrow_background_color')"
                                @input="setOption('portfolio_arrow_background_color',$event)"
                                :label-title="$t('colors.arrow_background')"
                            />
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('portfolio_arrow_background_hover_color')"
                                @input="setOption('portfolio_arrow_background_hover_color',$event)"
                                :label-title="$t('colors.arrow_background_hover')"
                            />
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
                responsive: 'desktop',
            }
        }
    })
</script>
