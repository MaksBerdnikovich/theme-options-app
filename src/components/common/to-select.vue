<template>
    <vue-select
        v-bind:options="options"
        :value="value"
        :clearable="clearable"
        :placeholder="placeholder"
        @input="inputEvent"
        :reduce="reduce"
        :selectable="selectable"
    >
        <template v-slot:option="option">
            <slot name="option" v-bind="option">
                <to-svg-icon v-if="option.icon" :name="option.icon"/> {{ option.label }}
                <to-button v-if="option.rightButton" :icon="option.rightButton.icon" v-on:click="rightButtonClicked(option)"></to-button>
            </slot>
        </template>
        <template v-slot:selected-option="option">
            <slot name="selected-option" v-bind="option">
                <div v-if="option">
                    <to-svg-icon v-if="option.icon" :name="option.icon"/> {{ option.label }}
                    <to-button v-if="option.editButton" v-bind:class="'edit-link'" :icon="option.editButton.icon" v-on:click="editButtonClicked(option)">{{ option.editButton.name }}</to-button>
                </div>
            </slot>
        </template>
    </vue-select>
</template>

<script>
    export default {
        model: {
            prop: 'value',
            event: 'input'
        },

        props: {
            value: [String, Object, Number],
            options: {
                type: Array,
                required: true
            },
            placeholder: {
                type: String,
                required: false,
            },
            clearable: {
                type: Boolean,
                required: false,
                default: false
            }
        },

        methods: {
            reduce(option) {
                return option.value;
            },

            selectable(option) {
                return !option.disabled;
            },

            inputEvent(value) {
                this.$emit('input', value);
            },

            rightButtonClicked(option) {
                this.$emit('right-button-clicked',option);
            },

            editButtonClicked(option) {
                this.$emit('edit-button-clicked',option);
            },
        }
    }
</script>

<style lang="scss">

#thegem-options {
    .v-select {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;

        .vs__dropdown-toggle {
            border: 0;
            padding: 0;
            margin: 0;
            width: 100%;
            border-radius: 0;
            cursor: pointer;
        }

        .vs__selected-options {
            padding: 0;
        }

        .vs__search {
            width: 100%;
            min-width: auto;
            height: 25px;
            min-height: auto;
            padding: 0 30px 0 10px;
            margin: 0;

            font-size: 13px;
            font-weight: 400;
            line-height: 1;

            outline: none;
            cursor: pointer;
            border-radius: $element-border-radius;
            border: 1px solid $light-border-color;
            background-color: $white-background;

            &::placeholder {
                color: $gray-color;
            }

            &:focus {
                border-color: $light-border-color;
            }
        }

        .vs__actions {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            right: 0;
            height: 100%;
            min-width: 30px;
            padding: 0;
            cursor: pointer;

            .vs__open-indicator {
                transition: $element-transition;
            }

            .vs__clear {
                display: flex;
                align-items: center;
                width: 12px;
                margin: 0;
                padding: 0;
            }
        }

        .vs__selected {
            position: absolute;
            width: calc(100% - 50px);
            left: 10px;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0;
            margin: 0;
            color: $light-body-color;
            font-size: 13px;
            font-weight: 400;
            line-height: 1.2;
        }
        .vs__selected > div {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .vs__selected button.edit-link{
            position: absolute;
            min-height: auto;
            height: 27px;
            display: flex;
            align-items: center;
            justify-content: center;
            top: 0;
            left: calc(100% + 50px);
            width: fit-content;
            white-space: nowrap;
            text-transform: none;
            background: transparent;
        }

        .vs__selected button.edit-link > .btn-text{
            color: #00bcd4;
            text-decoration: underline;
            font-size: 12px;
        }

        .vs__selected button.edit-link > .btn-icon{
            min-width: 30px;
        }

        .vs__dropdown-menu {
            margin: 0;
            padding: 0;
            min-width: auto;
            width: 100%;
            max-height: 200px;
            overflow-x: hidden;
            list-style-type: none;
            box-shadow: none;
            background-color: $white-background;
            border: 1px solid $light-border-color;
            border-bottom-left-radius: $element-border-radius;
            border-bottom-right-radius: $element-border-radius;

            &::-webkit-scrollbar {
                width: 4px;
                background-color: transparent;
            }
            &::-webkit-scrollbar-track {
                background-color: transparent;
            }
            &::-webkit-scrollbar-thumb {
                background-color: $light-border-color;
                border-radius: 2px;
            }

            li {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 8px 10px;
                margin: 0;

                color: $light-body-color;
                font-size: 13px;
                font-weight: 400;
                line-height: 1;
                background-color: $white-background;

                transition: $element-transition;

                .to-btn{
                    margin-left: auto;
                    min-height: auto;
                    min-width: 40px;
                    background: transparent;

                    &:hover{
                        transform: translate(10%);
                    }

                    svg{
                        transition: $element-transition;
                        color: $cyan-color;
                    }
                }

                &:hover, &:focus, &:active {
                    color: $white-color;
                    background-color: $cyan-background;

                    .to-btn{
                        svg{
                            color: $white-color;
                        }
                    }
                }

                &.vs__dropdown-option--disabled{
                    opacity: 0.4;

                    &:hover, &:focus, &:active{
                        color: $light-body-color;
                        background-color: transparent;
                    }
                }
            }
        }

        &.vs--searching{
            .vs__selected > div{
                opacity: 0;
            }
        }

        &.vs--open {
            .vs__selected button.edit-link{
                pointer-events: none;
            }
        }
    }
}

#thegem-options.theme-dark {
    .v-select {

        .vs__search {
            color: $dark-body-color;
            border: 1px solid $dark-border-color;
            background-color: $anthracite-background;
        }

        .vs__dropdown-menu {
            color: $dark-body-color;
            border: 1px solid $dark-border-color;
            background-color: $anthracite-background;

            li {
                background-color: $anthracite-background;

                &:hover, &:focus, &:active {
                    color: $white-color;
                    background-color: $cyan-background;

                    .to-btn{
                        background-color: $cyan-background;
                    }
                }
            }
        }

    }
}

#thegem-options.page-options{
    @media only screen and (max-width: 1630px){
        .v-select .vs__selected button.edit-link{
            left: auto;
            right: -40px;
            top: -30px;
        }
    }

    @media only screen and (min-width: 320px){
        .taxonomy-te-edit-link .v-select .vs__selected button.edit-link{
            left: auto;
            right: -40px;
            top: -30px;
        }
    }
}

</style>
