<template>
    <div class="to-block-product-preset">
        <div class="to-changed-settings">
            <to-radio-toggle :value="getPrefixedOption('type')" @input="setPrefixedOption('type',$event)" :options="typeOptions"></to-radio-toggle>
        </div>

        <div class="to-changed-settings below-type" v-if="getPrefixedOption('type') === 'below'">
            <div class="to-file-select-list below">
                <to-radio-icon :value="getPrefixedOption('below')" @input="setPrefixedOption('below', $event)" :options="presetBelowOptions"/>
            </div>
        </div>

        <div class="to-changed-settings" v-if="getPrefixedOption('type') === 'on_image'">
            <div class="to-file-select-list">
                <to-radio-icon :value="getPrefixedOption('on_image')" @input="setPrefixedOption('on_image', $event)" :options="presetOnImageOptions"/>
            </div>
        </div>

        <div class="to-changed-settings" v-if="getPrefixedOption('type') === 'on_hover'">
            <div class="to-file-select-list">
                <to-radio-icon :value="getPrefixedOption('on_hover')" @input="setPrefixedOption('on_hover', $event)" :options="presetOnHoverOptions"/>
            </div>
        </div>
    </div>
</template>

<script>
    import {addHelpers} from '@/services/helper';
    import config from '@/services/config';
    import i18n from '@/services/i18n';

    export default addHelpers({
        data: () => {

            var presetBelow = [], presetOnImage = [], presetOnHover = [];

            var presetBelowTypes = [
                {img: 'default-cart-button', title: i18n.t('productArchive.default_cart_button')},
                {img: 'default-cart-icon', title: i18n.t('productArchive.default_cart_icon')},
                {img: 'cart-disabled', title: i18n.t('productArchive.cart_disabled')},
                {img: 'border-cart-icon', title: i18n.t('productArchive.border_cart_icon')},
                {img: 'shadow-hover-01', title: i18n.t('productArchive.shadow_hover_01')},
                {img: 'shadow-hover-02', title: i18n.t('productArchive.shadow_hover_02')},
                {img: 'rounded-images', title: i18n.t('productArchive.rounded_images')},
                {img: 'rectangle-button-01', title: i18n.t('productArchive.rectangle_button')},
                //{img: 'rectangle-button-02', title: i18n.t('productArchive.rectangle_button_02')},
                {img: 'separator-01', title: i18n.t('productArchive.separator_01')},
                {img: 'separator-02', title: i18n.t('productArchive.separator_02')},
            ];
            var presetOnImageTypes = [
                {img: 'default-cart-button', title: i18n.t('productArchive.default_cart_button')},
                {img: 'default-cart-icon', title: i18n.t('productArchive.default_cart_icon')},
                {img: 'solid-background', title: i18n.t('productArchive.solid_background')},
                {img: 'rounded-corners', title: i18n.t('productArchive.rounded_corners')},
                {img: 'shadow-hover-01', title: i18n.t('productArchive.shadow_hover_01')},
                {img: 'shadow', title: i18n.t('productArchive.shadow')},
                {img: 'separator-01', title: i18n.t('productArchive.separator_01')},
                {img: 'separator-02', title: i18n.t('productArchive.separator_02')},
            ];

            var presetOnHoverTypes = [
                {img: 'default', title: i18n.t('productArchive.default_hover')},
                {img: 'rounded-corners', title: i18n.t('productArchive.rounded_corners')},
                {img: 'solid-background', title: i18n.t('productArchive.solid_background')},
                {img: 'separator', title: i18n.t('productArchive.hover_separator')},
                {img: 'centered-caption', title: i18n.t('productArchive.centered_caption')},
                {img: 'shadow-hover', title: i18n.t('productArchive.shadow_hover')},
                {img: 'gradient-hover', title: i18n.t('productArchive.gradient_hover')},
            ];

            for (let type of presetBelowTypes) {
                let urlBelow = config.presetsUrl + 'below/' + type.img + '.jpg';
                presetBelow.push({image: urlBelow, imageType: '', value: type.img, title: type.title});
            }

            for (let type of presetOnImageTypes) {
                let urlImage = config.presetsUrl + 'image/' + type.img + '.jpg';
                presetOnImage.push({image: urlImage, imageType: '', value: type.img, title: type.title});
            }

            for (let type of presetOnHoverTypes) {
                let urlHover = config.presetsUrl + 'hover/' + type.img + '.jpg';
                presetOnHover.push({image: urlHover, imageType: '', value: type.img, title: type.title});
            }

            return {
                presetBelowOptions: presetBelow,
                presetOnImageOptions: presetOnImage,
                presetOnHoverOptions: presetOnHover,
            }
        },

        props: {
            optionPrefix: {
                type: String,
                required: true
            },
            tabBelow: {
                type: Boolean,
                required: false,
                default: true
            },
            tabOnImage: {
                type: Boolean,
                required: false,
                default: true
            },
            tabOnHover: {
                type: Boolean,
                required: false,
                default: true
            },
            showOverlay: {
                type: Boolean,
                required: false,
                default: false
            }
        },

        computed: {
            typeOptions() {
                var options=[];

                if (this.tabBelow) {
                    options.push({icon: 'presets-a', title: i18n.t('general.caption_below'), value: 'below'});
                }
                if (this.tabOnImage) {
                    options.push({icon: 'presets-b', title: i18n.t('general.caption_on_image'), value: 'on_image'});
                }
                if (this.tabOnHover) {
                    options.push({icon: 'presets-c', title: i18n.t('general.caption_on_hover'), value: 'on_hover'});
                }
                return options;
            }
        }
    });
</script>

<style lang="scss">
    #thegem-options {
        .to-block-product-preset{

            .to-radio-icon {
                display: flex;
                flex-wrap: wrap;
                margin-left: -5px;
                margin-right: -5px;
            }

            .to-radio-icon .item {
                width: calc(100% / 6);
                min-height: 130px;
                padding: 0 5px;
                margin-bottom: 50px;
            }

            .to-radio-icon .item button {
                width: 100%;
                height: 100%;
            }

            .to-radio-icon .item span{
                padding: 0 10px;
            }

            .below-type, .labels-type{
                .to-radio-icon .item {
                    width: calc(100% / 6);
                    min-height: 180px;
                }

                .to-radio-icon .item span{
                    padding: 0 15px;
                }
            }

            .labels-type{
                .to-radio-icon .item {
                    margin-bottom: 30px;
                }
            }

            .product-layout-type{
                .to-radio-icon .item {
                    width: calc(100% / 3);
                    min-height: auto;
                    padding: 0 10px;
                }
                .to-radio-icon .item span{
                    padding: 0 15px;
                }
                .to-radio-icon .item button{
                    background-repeat: no-repeat;
                    padding-bottom: 100%;
                }
                .to-radio-icon .item button:before {
                    content: '';
                    position: absolute;
                    top: -4px;
                    left: -4px;
                    opacity: 0.3;
                    width: calc(100% + 8px);
                    height: calc(100% + 8px);
                    border: 2px solid $light-border-color;
                    border-radius: 3px;
                    z-index: 0;
                }
                .to-radio-icon .item.to-active button:before {
                    border-color: $cyan-color;
                    opacity: 1;
                }

                @media (max-width: 1279px) {
                    .to-radio-icon .item {
                        width: calc(100% / 2);
                    }
                }
            }
        }
    }

    #thegem-options.page-options .to-block-product-preset .product-layout-type{
        @media (max-width: 1366px) {
            .to-radio-icon .item {
                width: calc(100% / 2);
            }
        }
    }
</style>
