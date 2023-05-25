<template>
    <div class="to-dropdown-icon" v-on:click="showPopup()" v-click-outside="hidePopup">
        <!--<to-svg-icon v-if="currentValueIcon" :name="currentValueIcon"/>-->
        <!--<ul v-if="popupVisible" class="to-dropdown-icon-popup">
            <li v-for="option in sortedOptions" v-bind:key="option.id" v-on:click.stop="selectOption($event,option.value)"
                v-bind:class="{'active': value === option.value}">
                <to-svg-icon :name="option.icon" v-tooltip.right="option.tooltip"/>
            </li>
        </ul>-->
        <ul class="to-dropdown-icon-popup">
            <li v-for="option in sortedOptions" v-bind:key="option.id" v-on:click.stop="selectOption($event,option.value)"
                v-bind:class="{'active': value === option.value}">
                <to-svg-icon :name="option.icon" v-tooltip.bottom="option.tooltip"/>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                popupVisible: false
            };
        },

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
        },

        computed: {
            sortedOptions: function () {
                var options = this.options.slice();
                /*for (var idx in options) {
                    if (options[idx].value == this.value) {
                        var deleted = options.splice(idx, 1);
                        options.unshift(deleted[0]);
                        break;
                    }
                }*/

                return options;
            },

            currentValueIcon: function () {
                for (var option of this.options) {
                    if (option.value === this.value) {
                        return option.icon;
                    }
                }

                if (this.options.length > 0) {
                    this.$emit("input", this.options[0].value);
                }

                return null;
            }
        },

        methods: {
            selectOption: function ($event, value) {
                this.$emit("input", value);
                this.popupVisible = false;
            },
            hidePopup: function () {
                this.popupVisible = false;
            },
            showPopup: function () {
                this.popupVisible = true;
            }
        }
    }
</script>

<style lang="scss">
#thegem-options {
    .to-dropdown-icon {
        position: relative;
        display: flex;

        .to-dropdown-icon-popup {
            display: flex;

            text-align: center;
            background-color: $white-background;

            animation: 0.4s fade linear;

            li{
                display: flex;
                width: 24px;
                height: 24px;

                align-items: center;
                justify-content: center;
                border-radius: $element-border-radius;
                border: 1px solid transparent;
                cursor: pointer;
                text-align: center;
                transition: $element-transition;

                &.active{
                    border-color: $light-border-color;
                }

                &:hover{
                    color: $cyan-color;
                }
            }
        }
    }

    @keyframes fade {
        0%, 25% {
            visibility: hidden;
            opacity: 0;
        }
        50%, 100% {
            visibility: visible;
            opacity: 1;
        }
    }
}

#thegem-options.theme-dark {
    .to-dropdown-icon {
        .to-dropdown-icon-popup {
            background-color: $anthracite-background;
            //border: 1px solid $dark-border-color;
        }
    }
}

</style>

<!--<style lang="scss">
#thegem-options {
    .to-dropdown-icon {
        position: relative;
        display: inline-block;
        vertical-align: top;
        width: 26px;
        text-align: center;

        border-radius: $element-border-radius;
        border: 1px solid transparent;
        cursor: pointer;

        .to-dropdown-icon-popup {
            position: absolute;
            display: flex;
            flex-direction: column;
            left: 0;
            top: -6px;
            width: 100%;
            padding: 5px 0;

            text-align: center;
            background-color: $white-background;
            border-radius: $element-border-radius;
            border: 1px solid $light-border-color;

            animation: 0.4s fade linear;

            li{
                display: flex;
                align-items: center;
                justify-content: center;
                width: 100%;
                cursor: pointer;
                text-align: center;
                transition: $element-transition;

                &:hover{
                    color: $cyan-color;
                }
            }
            li + li{
                margin-top: 5px;
            }
        }
    }

    @keyframes fade {
        0%, 25% {
            visibility: hidden;
            opacity: 0;
        }
        50%, 100% {
            visibility: visible;
            opacity: 1;
        }
    }
}

#thegem-options.theme-dark {
    .to-dropdown-icon {
        .to-dropdown-icon-popup {
            background-color: $anthracite-background;
            border: 1px solid $dark-border-color;
        }
    }
}

</style>-->
