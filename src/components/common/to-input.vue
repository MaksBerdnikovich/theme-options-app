<template>
    <div class="to-input-group">
        <i v-if="icon" class="input-icon">
            <to-svg-icon :name="icon"/>
        </i>
        <to-label v-if="label">{{ labelTitle }}</to-label>
        <input
            :type="type"
            :placeholder="placeholder"
            :min="min" :max="max" :step="step"
            v-bind:class="{'to-input':true, indent: icon}"
            :disabled="disabled"
            :readonly="readonly"
            :value="value"
            @input="updateInput"
        />
    </div>
</template>

<script>
    export default {
        model: {
            prop: "value",
            event: "input"
        },
        props: {
            value: [String, Number],
            type: {
                type: String,
                required: false,
                default: 'text'
            },
            placeholder: {
                type: String,
                required: false,
            },
            icon: {
                type: String,
                required: false
            },
            min: {
                type: Number,
                required: false
            },
            max: {
                type: Number,
                required: false
            },
            step: {
                type: Number,
                required: false
            },
            label: {
                type: Boolean,
                required: false,
                default: false
            },
            labelTitle: {
                type: String,
                required: false
            },
            disabled: {
                type: String,
                required: false,
            },
            readonly: {
                type: String,
                required: false,
            },
        },
        methods: {
            updateInput: function (e) {
                this.$emit("input", e.target.value);
            }
        }
    }
</script>

<style lang="scss">
#thegem-options {
    .to-input-group {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        $input-icon-width: 30px;

        .input-icon {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            width: $input-icon-width;
            z-index: 5;
            color: $light-body-color;
        }

        .to-input {
            width: 100%;
            height: 27px;
            min-height: auto;
            padding: 0 10px;
            margin: 0;

            font-size: 13px;
            font-weight: 400;
            color: $light-body-color;
            line-height: 1;

            outline: none;
            border-radius: $element-border-radius;
            border: 1px solid $light-border-color;
            background-color: $white-background;

            &.indent {
                padding-left: 30px;
            }

            &::placeholder {
                color: $gray-color;
            }

            &:focus {
                border-color: $light-border-color;
            }
        }
    }

    .to-input-file {
        position: relative;

        input {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            padding: 0 !important;
            margin: 0 !important;
            opacity: 0;
            z-index: 10;
        }

        input:hover + button {
            background-color: $light-toggle-active-background;
            border-color: $light-toggle-active-background;
            color: $white-color;
        }
    }
}

#thegem-options.theme-dark {
    .to-input-group {

        .input-icon {
            color: $dark-body-color;
        }

        .to-input {
            color: $dark-body-color;
            border: 1px solid $dark-border-color;
            background-color: $anthracite-background;

            &::placeholder {
                color: $gray-color;
            }

            &:focus {
                border-color: $dark-border-color;
            }
        }
    }

    .to-input-file {
        input:hover + button {
            background-color: $dark-border-color;
            color: $white-color;
        }
    }
}
</style>
