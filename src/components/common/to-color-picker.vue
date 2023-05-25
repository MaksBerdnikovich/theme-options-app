<template>
    <div class="to-color-picker">
        <to-label v-if="labelTitle" :icon="labelIcon">{{ labelTitle }}</to-label>
        <div class="to-color-picker-button" v-on:click="toggle($event)" v-click-outside="hide">
            <div class="to-color-picker-current-value">
                <span v-bind:style="value!='' ? {'background-color':value} : {}"></span>
            </div>
        </div>
        <div v-if="isShowing" v-on:click.stop="" v-bind:class="{'to-color-picker-popup':true, 'pop-to-top':popToTop}">
            <to-color-picker-panel :presetColors="favoriteColors" :value="value" @input="updateInput">
                <template v-slot:top-panel={presetColors,handlePreset}>
                    <div class="vc-sketch-presets" role="group">
                        <template v-for="c in presetColors">
                            <div
                                :class="{'vc-sketch-presets-color':true, active: c === value}"
                                :key="c"
                                :style="{background: 'linear-gradient('+c+','+c+'), url(' + patternUrl + ')' }"
                                @click="handlePreset(c)">
                            </div>
                        </template>

                        <to-button class="button-add" v-on:click="addColorToFavorites()" icon="plus"></to-button>
                        <to-button class="button-del" v-if="favoriteColorSelected" icon="trash-can"
                                   v-on:click="deleteColorFromFavorites()"></to-button>
                    </div>
                </template>

                <template v-slot:bottom-panel>
                    <to-button icon="rotate" v-on:click="undo()"></to-button>
                </template>
            </to-color-picker-panel>
        </div>
    </div>
</template>

<script>
    import checkboard from 'vue-color/src/components/common/Checkboard.vue'
    import {addHelpers} from '@/services/helper';


    export default addHelpers({
        components: {
            checkboard
        },

        model: {
            prop: "value",
            event: "input"
        },

        props: {
            value: [String, Number],
            labelIcon: {
                type: String,
                required: false
            },
            labelTitle: {
                type: String,
                required: false
            },
        },

        data: function () {
            return {
                isShowing: false,
                popToTop: false,
                originalValue: '',
                patternUrl: require("../../assets/img/pattern.jpg"),
                presetName: 'default'
            }
        },

        created() {
            this.originalValue = this.value;
        },

        computed: {
            isModified() {
                return this.originalValue !== this.value;
            },

            favoriteColors() {
                let colors = this.getSetting('colorpicker_favorites')[this.presetName];

                return colors;
            },

            favoriteColorSelected() {
                return this.favoriteColors.indexOf(this.value) >= 0;
            }
        },

        methods: {
            addColorToFavorites() {
                let colors = this.getSetting('colorpicker_favorites');

                if (colors[this.presetName].indexOf(this.value) < 0) {
                    colors = Object.assign({},colors);
                    colors[this.presetName].push(this.value);

                    this.setSetting('colorpicker_favorites', colors);
                }
            },

            deleteColorFromFavorites() {
                let colors = this.getSetting('colorpicker_favorites');

                let idx = colors[this.presetName].indexOf(this.value);

                if (idx >= 0) {
                    colors = Object.assign({},colors);
                    colors[this.presetName].splice(idx, 1);

                    this.setSetting('colorpicker_favorites', colors);
                }
            },

            undo() {
                if (this.isModified) {
                    this.$emit("input", this.originalValue);
                } else {
                    this.$emit("input", '');
                }
            },

            toggle($event) {
                this.isShowing = !this.isShowing;
                if (this.isShowing) {
                    this.popToTop = $event.clientY + 300 > window.innerHeight;
                }
            },

            hide() {
                this.isShowing = false;
            },

            updateInput(value) {
                this.$emit("input", value.hex8);
            }
        }
    })
</script>

<style lang="scss">
#thegem-options {
    .to-color-picker {
        position: relative;
        height: 100%;
        display: flex;
        flex-wrap: wrap;

        .vc-sketch-presets-color.active {
            border: 1px solid black;
        }

        .to-color-picker-button {
            display: flex;
            align-items: center;
            justify-content: center;
            align-self: flex-end;
            padding: 2px;
            max-width: 54px;

            border: 1px solid $light-border-color;
            border-radius: $element-border-radius;

            cursor: pointer;

            .to-color-picker-current-value {
                position: relative;
                width: 50px;
                height: 20px;

                background-image: url("../../assets/img/pattern.jpg");
                background-repeat: repeat;

                span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .form-line-label {
            align-self: flex-start;
        }

        .to-color-picker-popup.pop-to-top {
            top: auto;
            bottom: 30px;
        }

        .to-color-picker-popup {
            position: absolute;
            left: 0;
            top: calc(100% + 5px);
            z-index: 100;

            .vc-sketch-presets {

                .button-add,
                .button-del {
                    width: 16px;
                    min-height: 16px;
                    margin: 5px;
                    padding: 0;

                    .btn-icon {
                        min-width: auto;
                    }
                }

                .vc-sketch-presets-color {
                    position: relative;
                    width: 16px;
                    height: 16px;
                    margin: 5px;
                    padding: 0;
                    overflow: inherit;
                    border-radius: $element-border-radius;

                    transition: $element-transition;

                    &:before {
                        content: '';
                        position: absolute;
                        top: -3px;
                        left: -3px;
                        width: calc(100% + 6px);
                        height: calc(100% + 6px);

                        border: 1px solid $gray-color;
                        border-radius: $element-border-radius;
                        opacity: 0;
                    }

                    &:hover {
                        opacity: 0.9;
                    }

                    &.active {
                        border: 0;

                        &:before {
                            opacity: 1;
                        }
                    }
                }
            }

            .vc-sketch-saturation-wrap {
                margin-top: 10px;
            }
        }
    }
}

#thegem-options.theme-dark {
    .to-color-picker {
        .to-color-picker-button {
            border: 1px solid $dark-border-color;
        }

        .to-color-picker-popup {
            .button-add,
            .button-del {
                background-color: $white-background;
            }
        }
    }
}
</style>
