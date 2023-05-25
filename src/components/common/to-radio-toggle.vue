<template>
    <div class="to-radio-toggle">
        <button type="button"
                v-bind:class="getClasses(option)"
                v-for="option of options" v-on:click="optionClicked(option)"
                v-bind:key="option.value"
                :disabled="option.disabled || disabled"
                v-tooltip.bottom="option.tooltip"
        >
            <to-svg-icon v-if="option.icon" :name="option.icon"/>
            <span v-if="option.title">{{ option.title }}</span>
        </button>
    </div>
</template>

<script>
    export default {
        model: {
            prop: "value",
            event: "input"
        },
        props: {
            value: [String, Number, Boolean, Object],
            options: {
                type: Array,
                required: true
            },
            disabled: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        methods: {
            change(value) {
                this.$emit("input", value);
            },

            optionClicked: function (option) {
                if (option.selectable !== false) {
                    this.change(option.value);
                }

                if (option.event) {
                    this.$emit(option.event, option);
                }
            },

            getClasses(option) {
                let classObj = {'to-active': this.value === option.value, 'only-icon': !option.title};

                if (option.class) {
                    classObj[option.class] = true;
                }

                return classObj;
            }
        }
    }
</script>

<style lang="scss">
#thegem-options {
    .to-radio-toggle {
        display: flex;

        button {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 10px;
            min-width: 90px;
            min-height: 27px;

            background-color: transparent;
            border: 1px solid $light-border-color;
            border-left: 0;

            &:first-child {
                border-left: 1px solid $light-border-color;
                border-top-left-radius: $element-border-radius;
                border-bottom-left-radius: $element-border-radius;
            }

            &:last-child {
                border-right: 1px solid $light-border-color;
                border-top-right-radius: $element-border-radius;
                border-bottom-right-radius: $element-border-radius;
            }

            &:disabled{
                opacity: 0.6 !important;
            }

            &.only-icon{
                min-width: 45px;
                padding: 0;

                svg{
                    margin-top: 1px;
                }
            }

            &.action{
                color: $cyan-color;
            }

            span {
                padding-left: 5px;
            }
        }

        button.to-active {
            background-color: $light-toggle-active-background;
            color: $white-color;
            border-color: $light-toggle-active-background;

            &:hover {
                opacity: 1;
            }
        }
    }
}

#thegem-options.theme-dark {
    .to-radio-toggle {
        button {
            border: 1px solid $dark-border-color;
        }

        button.to-active {
            background-color: $dark-toggle-active-background;
            color: $white-color;
        }
    }
}

</style>
