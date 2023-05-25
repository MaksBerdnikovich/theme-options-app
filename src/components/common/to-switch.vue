<template>
    <div v-bind:class="['to-switch-btn',className]">
        <div class="switch-btn" :class="{ enabled: isEnabled }" @click="toggle">
            <i class="true">
                <to-svg-icon :name="falseValueIcon"/>
            </i>
            <i class="false">
                <to-svg-icon :name="trueValueIcon"/>
            </i>
            <div class="toggle"></div>
        </div>
        <span class="switch-val" v-if="showValueTitle">{{ valueTitle }}</span>
    </div>
</template>

<script>
    // https://vuejsexamples.com/tag/switch/
    export default {
        model: {
            prop: "value",
            event: "input"
        },
        props: {
            value: [String, Number, Boolean, Object],
            className: {
                type: String,
                required: false,
                default: ""
            },
            color: {
                type: String,
                required: false,
                default: "#4D4D4D"
            },
            falseValue: {
                type: [String, Number, Boolean, Object],
                required: false,
                default: ''
            },
            trueValue: {
                type: [String, Number, Boolean, Object],
                required: false,
                default: "1"
            },
            showValueTitle: {
                type: Boolean,
                required: false,
                default: true
            },
            falseValueTitle: {
                type: String,
                required: false,
                default: function () {
                    return this.$t('general.disabled');
                }
            },
            trueValueTitle: {
                type: String,
                required: false,
                default: function () {
                    return this.$t('general.enabled');
                }
            },
            falseValueIcon: {
                type: String,
                required: false,
                default: 'checkmark'
            },
            trueValueIcon: {
                type: String,
                required: false,
                default: 'delete'
            }
        },
        computed: {
            isEnabled: function () {
                return this.value == this.trueValue;
            },
            valueTitle: function () {
                return this.value == this.trueValue ? this.trueValueTitle : this.falseValueTitle;
            }
        },
        methods: {
            toggle: function () {
                this.$emit("input", this.isEnabled ? this.falseValue : this.trueValue);
            }
        }
    }
</script>

<style lang="scss">
#thegem-options {
    $switch-button-height: 20px;
    $switch-button-width: 46px;
    $switch-button-gap: 3px;
    $switch-transition: $element-transition;

    .to-switch-btn {
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 27px;

        .switch-btn {
            position: relative;
            display: flex;
            align-items: center;

            height: $switch-button-height;
            width: $switch-button-width;
            background-color: $light-border-color;
            border-radius: $switch-button-height;

            transition: $switch-transition;

            cursor: pointer;

            i {
                position: absolute;
                display: flex;
                height: 100%;
                align-items: center;
                color: $white-color;
                opacity: 0.7;

                svg{
                    width: 14px;
                }
            }

            i.true {
                left: calc(#{$switch-button-gap} * 2);
            }

            i.false {
                right: calc(#{$switch-button-gap} * 2);
            }

            .toggle {
                position: relative;
                height: $switch-button-height;
                width: $switch-button-height;
                border-radius: $switch-button-height;
                background-color: $white-background;
                border: 2px solid $light-border-color;

                transition: $switch-transition;
                z-index: 5;
            }

            &.enabled {
                background-color: $cyan-background;
                box-shadow: none;

                i {
                    opacity: 1;
                }

                .toggle {
                    border: 2px solid $cyan-background;
                    transform: translateX( calc(#{$switch-button-height} + #{$switch-button-gap}*2) );
                }
            }
        }

        .switch-val {
            min-width: 70px;
            color: $light-body-color;
            padding-left: 10px;
            text-align: left;
        }
    }

    &.theme-dark {
        .switch-btn {
            background-color: $dark-main-background;

            i {
                color: $anthracite-background;
                opacity: 1;
            }

            .toggle {
                background-color: $anthracite-background;
                border: 2px solid $dark-main-background;
            }

            &.enabled {
                background-color: $cyan-background;

                i {
                    color: $white-color;
                }

                .toggle {
                    background-color: $white-background;
                    border: 2px solid $cyan-background;
                }
            }
        }
        .switch-val {
            color: $dark-body-color;
        }
    }
}
</style>
