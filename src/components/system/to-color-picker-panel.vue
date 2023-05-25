<template>
    <div role="application" aria-label="Sketch color picker"
         :class="['vc-sketch', disableAlpha ? 'vc-sketch__disable-alpha' : '']">
        <slot name="top-panel" v-bind:isTransparent="isTransparent" v-bind:handlePreset="handlePreset"
              v-bind:presetColors="presetColors"></slot>
        <div class="vc-sketch-saturation-wrap">
            <saturation v-model="colors" @change="childChange"></saturation>
        </div>
        <div class="vc-sketch-controls">
            <div class="vc-sketch-sliders">
                <div class="vc-sketch-hue-wrap">
                    <hue v-model="colors" @change="childChange"></hue>
                </div>
                <div class="vc-sketch-alpha-wrap" v-if="!disableAlpha">
                    <alpha v-model="colors" @change="childChange"></alpha>
                </div>
            </div>
        </div>
        <div class="vc-sketch-field" v-if="!disableFields">
            <!-- rgba -->
            <div class="vc-sketch-field--double">
                <ed-in label="hex" :value="hex" @change="inputChange"></ed-in>
            </div>
            <!--
            <div class="vc-sketch-field--single">
                <ed-in label="r" :value="colors.rgba.r" @change="inputChange"></ed-in>
            </div>
            <div class="vc-sketch-field--single">
                <ed-in label="g" :value="colors.rgba.g" @change="inputChange"></ed-in>
            </div>
            <div class="vc-sketch-field--single">
                <ed-in label="b" :value="colors.rgba.b" @change="inputChange"></ed-in>
            </div>
            <div class="vc-sketch-field--single" v-if="!disableAlpha">
                <ed-in label="a" :value="colors.a" :arrow-offset="0.01" :max="1" @change="inputChange"></ed-in>
            </div>
            -->
            <slot name="bottom-panel"></slot>
        </div>
    </div>
</template>

<script>
    import colorMixin from 'vue-color/src/mixin/color'
    import editableInput from 'vue-color/src/components/common/EditableInput.vue'
    import saturation from 'vue-color/src/components/common/Saturation.vue'
    import hue from 'vue-color/src/components/common/Hue.vue'
    import alpha from 'vue-color/src/components/common/Alpha.vue'
 //   import checkboard from 'vue-color/src/components/common/Checkboard.vue'

    const presetColors = [
        '#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321',
        '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2',
        '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF',
        'rgba(0,0,0,0)'
    ]

    export default {
        name: 'Sketch',
        mixins: [colorMixin],
        components: {
            saturation,
            hue,
            alpha,
            'ed-in': editableInput//,
            //checkboard
        },
        props: {
            presetColors: {
                type: Array,
                default() {
                    return presetColors
                }
            },
            disableAlpha: {
                type: Boolean,
                default: false
            },
            disableFields: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            hex() {
                let hex
                if (this.colors.a < 1) {
                    hex = this.colors.hex8
                } else {
                    hex = this.colors.hex
                }
                return hex.replace('#', '')
            },
            activeColor() {
                var rgba = this.colors.rgba
                return 'rgba(' + [rgba.r, rgba.g, rgba.b, rgba.a].join(',') + ')'
            }
        },
        methods: {
            handlePreset(c) {
                this.colorChange({
                    hex: c,
                    source: 'hex'
                })
            },
            childChange(data) {
                this.colorChange(data)
            },
            inputChange(data) {
                if (!data) {
                    return
                }
                if (data.hex) {
                    this.isValidHex(data.hex) && this.colorChange({
                        hex: data.hex,
                        source: 'hex'
                    })
                } else if (data.r || data.g || data.b || data.a) {
                    this.colorChange({
                        r: data.r || this.colors.rgba.r,
                        g: data.g || this.colors.rgba.g,
                        b: data.b || this.colors.rgba.b,
                        a: data.a || this.colors.rgba.a,
                        source: 'rgba'
                    })
                }
            }
        }
    }
</script>

<style lang="scss">

#thegem-options {
    .vc-sketch {
        position: relative;
        width: 200px;
        padding: 10px;
        box-sizing: initial;

        background: #ffffff;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, .15), 0 8px 16px rgba(0, 0, 0, .15);
        border-radius: 3px;
    }

    .vc-sketch-saturation-wrap {
        width: 100%;
        padding-bottom: 75%;
        position: relative;
        overflow: hidden;
    }

    .vc-sketch-controls {
        display: flex;
        margin-top: 10px;
    }

    .vc-sketch-sliders {
        padding: 4px 0;
        flex: 1;
    }

    .vc-sketch-sliders .vc-hue,
    .vc-sketch-sliders .vc-alpha-gradient {
        border-radius: 2px;
    }

    .vc-sketch-hue-wrap {
        position: relative;
        height: 10px;
    }

    .vc-sketch-alpha-wrap {
        position: relative;
        height: 10px;
        margin-top: 4px;
        overflow: hidden;
    }

    .vc-sketch-color-wrap {
        width: 24px;
        height: 24px;
        position: relative;
        margin-top: 4px;
        margin-left: 4px;
        border-radius: 3px;
    }

    .vc-sketch-active-color {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 2px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15), inset 0 0 4px rgba(0, 0, 0, .25);
        z-index: 2;
    }

    .vc-sketch-color-wrap .vc-checkerboard {
        background-size: auto;
    }

    .vc-sketch-field {
        display: flex;
        margin-top: 10px;
    }

    .vc-sketch-field .to-btn{
        min-height: 25px;
        margin-left: auto;
        background-color: #cdd1d7;
        color: #65707e;
        cursor: pointer;
    }
    .vc-sketch-field .to-btn .btn-icon{
        min-width: 30px;
    }

    .vc-sketch-field--single {
        flex: 1;
    }

    .vc-sketch-field--double {
        width: calc(100% - 40px);
        margin-right: auto;
    }

    .vc-sketch-field--double .vc-editable-input{
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
        justify-content: flex-end;
        min-height: 25px;
        padding: 0 10px;
        overflow: hidden;

        font-size: 10px;

        border-radius: 3px;
        border: 1px solid #8e97a3;
    }

    .vc-sketch-field--double .vc-editable-input .vc-input__input{
        width: 100%;
        padding: 0;
        border: none;
        box-shadow: none;
    }

    .vc-sketch-field--double .vc-editable-input .vc-input__label{
        padding-right: 5px;
        text-transform: uppercase;
        line-height: 1.5;
    }
    .vc-sketch-field--double .vc-editable-input .vc-input__desc{}

    .vc-sketch-presets {
        display: flex;
        flex-wrap: wrap;

        padding: 0;
        margin: -5px;
        border: 0;
    }

    .vc-sketch-presets-color {
        border-radius: 3px;
        overflow: hidden;
        position: relative;
        display: inline-block;
        margin: 0 10px 10px 0;
        vertical-align: top;
        cursor: pointer;
        width: 16px;
        height: 16px;
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
    }

    .vc-sketch-presets-color .vc-checkerboard {
        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .15);
        border-radius: 3px;
    }

    .vc-sketch__disable-alpha .vc-sketch-color-wrap {
        height: 10px;
    }
}
</style>
