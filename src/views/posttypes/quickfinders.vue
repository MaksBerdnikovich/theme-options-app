<template>
    <div>
        <to-panel id="panel.typography">
            <to-panel-group :label-title="$t('panel.default_font_bold_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_quickfinders_title_font_bold') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Quickfinders_Title_Font_Bold_Style_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="quickfinder_title"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_font_thin_title')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_quickfinders_title_font_thin') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Quickfinders_Title_Font_Thin_Style_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="quickfinder_title_thin"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_title_text_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_quickfinders_title_text_сolor') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker
                                :value="getOption('quickfinder_title_color')"
                                @input="setOption('quickfinder_title_color',$event)"
                            />
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_description_font')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_quickfinders_description_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Quickfinders_Description_Font_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="quickfinder_description"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_description_text_color')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.thegem_posttypes_quickfinders_description_text_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-auto">
                            <to-color-picker
                                :value="getOption('quickfinder_description_color')"
                                @input="setOption('quickfinder_description_color',$event)"
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
            }
        }
    })
</script>
