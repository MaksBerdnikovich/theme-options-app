<template>
    <div>
        <to-panel id="panel.pagination_color">

            <to-panel-group :label-title="$t('panel.pagination_color_numeric')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_pagination_numeric') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Numbers_Pagination_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('pagination_basic_color')" @input="setOption('pagination_basic_color',$event)" :label-title="$t('colors.page_number_text')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('pagination_basic_background_color')" @input="setOption('pagination_basic_background_color',$event)" :label-title="$t('colors.page_number_background')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('pagination_hover_color')" @input="setOption('pagination_hover_color',$event)" :label-title="$t('colors.page_number_text_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('pagination_active_color')" @input="setOption('pagination_active_color',$event)" :label-title="$t('colors.page_number_text_active')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.pagination_color_dots')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_pagination_dots') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Dots_Pagination_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('mini_pagination_color')" @input="setOption('mini_pagination_color',$event)" :label-title="$t('colors.dot_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('mini_pagination_active_color')" @input="setOption('mini_pagination_active_color',$event)" :label-title="$t('colors.dot_color_active')"/>
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
