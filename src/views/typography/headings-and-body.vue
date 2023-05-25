<template>
    <div>
        <to-panel id="panel.font_h1">
            <to-panel-group :label-title="$t('panel.default_h1_font')" :responsive="true" :tablet="true">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h1_font') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="h1" :responsive-type="responsiveType" :exCollapsed="true"></to-block-font>
                    </div>
                    <to-separator v-if="responsiveType == 'desktop'"></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_h1_color')" v-if="responsiveType == 'desktop'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h1_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('h1_color')" @input="setOption('h1_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_h2">
            <to-panel-group :label-title="$t('panel.default_h2_font')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h2_font') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="h2" :responsive-type="responsiveType"></to-block-font>
                    </div>
                    <to-separator v-if="responsiveType == 'desktop'"></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_h2_color')" v-if="responsiveType == 'desktop'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h2_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('h2_color')" @input="setOption('h2_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_h3">
            <to-panel-group :label-title="$t('panel.default_h3_font')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h3_font') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="h3" :responsive-type="responsiveType"></to-block-font>
                    </div>
                    <to-separator v-if="responsiveType == 'desktop'"></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_h3_color')" v-if="responsiveType == 'desktop'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h3_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('h3_color')" @input="setOption('h3_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_h4">
            <to-panel-group :label-title="$t('panel.default_h4_font')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h4_font') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="h4" :responsive-type="responsiveType"></to-block-font>
                    </div>
                    <to-separator v-if="responsiveType == 'desktop'"></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_h4_color')" v-if="responsiveType == 'desktop'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h4_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('h4_color')" @input="setOption('h4_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_h5">
            <to-panel-group :label-title="$t('panel.default_h5_font')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h5_font') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="h5" :responsive-type="responsiveType"></to-block-font>
                    </div>
                    <to-separator v-if="responsiveType == 'desktop'"></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_h5_color')" v-if="responsiveType == 'desktop'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h5_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('h5_color')" @input="setOption('h5_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_h6">
            <to-panel-group :label-title="$t('panel.default_h6_font')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h6_font') }}
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="h6" :responsive-type="responsiveType"></to-block-font>
                    </div>
                    <to-separator v-if="responsiveType == 'desktop'"></to-separator>
                </template>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_h6_color')" v-if="responsiveType == 'desktop'">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_h6_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('h6_color')" @input="setOption('h6_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_body">
            <to-panel-group :label-title="$t('panel.default_font_body')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_body_font') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font option-prefix="body"></to-block-font>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_color_body')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_body_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('body_color')"
                                @input="setOption('body_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_excerpt">
            <to-panel-group :label-title="$t('panel.default_font_excerpt')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_excerpt_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                            {name: 'Excerpt_Font_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="title_excerpt" :responsive-type="responsiveType"></to-block-font>
                    </div>
                </template>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group v-if="isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.default_color_excerpt')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_excerpt_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('title_excerpt_color')"
                                @input="setOption('title_excerpt_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_styled_subtitle">
            <to-panel-group :label-title="$t('panel.default_font_styled_subtitle')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_styled_subtitle_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                            {name: 'Styled_Subtitle_Font_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="styled_subtitle" :responsive-type="responsiveType"></to-block-font>
                    </div>
                </template>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group v-if="isFutureMode" v-bind:class="{'development': isFutureMode}" :label-title="$t('panel.default_color_styled_subtitle')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_styled_subtitle_color') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('styled_subtitle_color')"
                                @input="setOption('styled_subtitle_color',$event)"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_xlarge">
            <to-panel-group :label-title="$t('panel.default_font_xlarge')" :responsive="true" :tablet="true">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.typography_headings_body_xlarge_font') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                            {name: 'XLarge_Title_Font-Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <template v-slot:default="{ responsiveType }">
                    <div class="to-changed-settings">
                        <to-block-font option-prefix="xlarge_title" :responsive-type="responsiveType"></to-block-font>
                    </div>
                </template>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.font_light">
            <to-panel-group :label-title="$t('panel.default_font_light')">
                 <template v-slot:tooltip>
                     <div class="help-tooltip-text">
                         <div class="info">
                             {{ $t('info.typography_headings_body_light_font') }}
                         </div>
                         <div class="gallery">
                             <to-button-gallery :images="[
                                {name: 'Stylish_Bold_Thin_Title_Combinations.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                         </div>
                     </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-font :show-sizes="false" :show-transform="false" option-prefix="light_title"></to-block-font>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>


<script>
    import {addHelpers} from '@/services/helper';
    import {bus} from '@/services/bus';

    export default addHelpers({
        data() {
            return {
                responsiveType: 'desktop'
            }
        },

        created() {
            bus.$on('setResponsiveType', value => {
                this.responsiveType = value;
            });
        }

    })
</script>
