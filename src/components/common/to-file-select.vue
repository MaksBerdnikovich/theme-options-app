<template>
    <div class="to-file-select">
        <slot v-bind:select="select">
            <button type="button" v-on:click="select()">
                <i><to-svg-icon name="plus"/></i>
            </button>
            <span>{{ labelTitle }}</span>
        </slot>
    </div>
</template>

<script>
import i18n from '@/services/i18n';

export default {
    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: String,
        returnAllData: {
            type: Boolean,
            required: false,
            default: false
        },
        labelTitle: {
            type: String,
            required: false
        },
        popupTitle: {
            type: String,
            required: false,
            default: i18n.t('general.select_image_popup_title')
        },
        popupButtonTitle: {
            type: String,
            required: false,
            default: i18n.t('general.select_image_popup_button')
        },
        type: {
            type: String,
            required: false,
            default: 'image'
        }
    },

    data: function () {
        return {
            isShowing: false,
            wpImageSelector: null
        }
    },

    methods: {
        select: function () {
            if (!this.wpImageSelector) {
                // Create the media frame.
                this.wpImageSelector = window.wp.media({
                    // Set the title of the modal.
                    title: this.popupTitle,
                    button: {
                        text: this.popupButtonTitle,
                    },
                    library: {
                        type: this.type
                    }
                });

                // When an image is selected, run a callback.
                this.wpImageSelector.on('select', () => {
                    var attachment = this.wpImageSelector.state().get('selection').first();

                    var value = this.returnAllData ? JSON.parse(JSON.stringify(attachment)) : attachment.attributes.url;

                    window.console.log(value);
                    this.$emit('input', value);
                });
            }

            // Finally, open the modal.
            this.wpImageSelector.open();
        },
    }
}
</script>


<style lang="scss">
#thegem-options {
    .to-file-select {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 90px;

        button{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            width: 90px;
            height: 70px;
            padding: 0;
            margin: 0;
            border: 1px solid $gray-color;

            &:before{
                content: '';
                position: absolute;
                top: -4px;
                left: -4px;
                width: calc(100% + 8px);
                height: calc(100% + 8px);
                opacity: 0;

                border: 2px solid transparent;
                border-radius: $element-border-radius;
            }

            &.selected{
                border: 0;
                background-image: url("../../assets/img/pattern.jpg");
                background-repeat: repeat;

                &:before{
                    border-color: $cyan-color;
                    opacity: 1;
                }
            }

            img {
                height: auto;
                width: auto;
                max-height: 70px;
                max-width: 90px;
            }
        }

        span{
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            line-height: 1.3;

            padding-top: 5px;
        }
    }
}
</style>
