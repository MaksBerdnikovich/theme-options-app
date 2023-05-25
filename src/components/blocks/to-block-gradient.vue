<template>
    <div class="to-block-gradient">
        <div class="gradient-item">
            <to-color-picker
                v-bind:label-title="$t('gradient.color')+' 1'"
                :value="getPrefixedOption('point1_color')"
                @input="setPrefixedOption('point1_color',$event)"
            />
            <to-block-label-slider-input
                v-bind:label-title="$t('gradient.location')+' 1'"
                :value="getPrefixedOption('point1_position')"
                @input="setPrefixedOption('point1_position',$event)"
                :min="0"
                :max="100"
                unit="%"
            />
        </div>
        <div class="gradient-item">
            <div class="block">
                <to-label>{{ $t('gradient.type') }}</to-label>
                <to-select
                    :options="gradientTypeOptions"
                    :value="getPrefixedOption('type')"
                    @input="setPrefixedOption('type',$event)"
                />
            </div>
        </div>
        <div class="gradient-item">
            <to-color-picker
                v-bind:label-title="$t('gradient.color')+' 2'"
                :value="getPrefixedOption('point2_color')"
                @input="setPrefixedOption('point2_color',$event)"
            />
            <to-block-label-slider-input
                v-bind:label-title="$t('gradient.location')+' 2'"
                :value="getPrefixedOption('point2_position')"
                @input="setPrefixedOption('point2_position',$event)"
                :min="0"
                :max="100"
                unit="%"
            />
        </div>
        <div class="gradient-item">
            <div class="block" v-if="getPrefixedOption('type')=='linear'">
                <to-block-label-slider-input
                    v-bind:label-title="$t('gradient.angle')"
                    :value="getPrefixedOption('angle')"
                    @input="setPrefixedOption('angle',$event)"
                    :min="0"
                    :max="360"
                    unit="°"
                />
            </div>
            <div class="block" v-if="getPrefixedOption('type')=='radial'">
                <to-label>{{ $t('gradient.position') }}</to-label>
                <to-select
                    :options="gradientPositionOptions"
                    :value="getPrefixedOption('position')"
                    @input="setPrefixedOption('position',$event)"
                />
            </div>
        </div>
        <div class="gradient-item full">
            <div class="to-block-gradient-preview">
                <div v-bind:style="gradientStyles"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import {addHelpers} from '@/services/helper';
    import i18n from '@/services/i18n';

    export default addHelpers({
        data: () => {
            return {
                gradientTypeOptions: [
                    {value: 'linear', label: i18n.t('gradient.type_linear')},
                    {value: 'radial', label: i18n.t('gradient.type_radial')},
                ],
                gradientPositionOptions: [
                    {value: 'center center', label: i18n.t('gradient.center_center')},
                    {value: 'center left', label: i18n.t('gradient.center_left')},
                    {value: 'center right', label: i18n.t('gradient.center_right')},
                    {value: 'top center', label: i18n.t('gradient.top_center')},
                    {value: 'top left', label: i18n.t('gradient.top_left')},
                    {value: 'top right', label: i18n.t('gradient.top_right')},
                    {value: 'bottom center', label: i18n.t('gradient.bottom_center')},
                    {value: 'bottom left', label: i18n.t('gradient.bottom_left')},
                    {value: 'bottom right', label: i18n.t('gradient.bottom_right')},
                ],
            };
        },

        computed: {
            gradientStyles() {
                var type = this.getPrefixedOption('type');
                var css = type + '-gradient(';
                css += type == 'linear' ? this.getPrefixedOption('angle') + 'deg, ' : ('circle at ' + this.getPrefixedOption('position') + ', ');
                css += this.getPrefixedOption('point1_color') + ' ' +
                    this.getPrefixedOption('point1_position') + '%, ';
                css += this.getPrefixedOption('point2_color') + ' ' +
                    this.getPrefixedOption('point2_position') + '%)';

                return {
                    background: css
                }
            }
        },

        props: {
            optionPrefix: {
                type: String,
                required: true
            },
        },
    });
</script>

<style lang="scss">
#thegem-options {
    .to-block-gradient {
        display: flex;
        flex-wrap: wrap;
        margin: -20px -10px 0 -10px;

        .gradient-item {
            display: flex;
            width: 50%;
            padding: 0 10px;
            margin-top: 20px;

            .block {
                width: 100%;
            }

            .to-block-label-slider {
                width: 100%;
            }

            &.full {
                width: 100%;
            }
        }

        .to-block-gradient-preview {
            display: flex;
            align-items: center;
            padding: 2px;
            width: 100%;

            border: 1px solid $light-border-color;
            border-radius: $element-border-radius;

            & > div {
                width: 100%;
                height: 20px;
            }
        }
    }
}

#thegem-options.theme-dark {
    .to-block-gradient {
        .to-block-gradient-preview {
            border: 1px solid $dark-border-color;
        }
    }
}
</style>
