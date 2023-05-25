<template>
    <div class="to-block-logo-select">
        <div class="to-block-logo-select__file">
            <to-file-select
                class="to-block-logo-file-select"
                v-if="!getOption(optionImage)"
                :value="getOption(optionImage)"
                :labelTitle="$t('general.choose_image')"
                @input="imageSelected($event)"
                :return-all-data="true"
            />
            <div v-if="getOption(optionImage)" class="to-block-logo-select-preview">
                <div>
                    <img :src="getOption(optionImage)" v-bind:style="styles"/>
                </div>
                <to-button v-on:click="clear()" icon="trash-can"></to-button>
            </div>
        </div>
        <div class="to-block-logo-select__slider">
            <to-block-label-slider-input
                label-icon="resize-horizontal"
                v-bind:label-title="labelTitle"
                v-if="getOption(optionImage)"
                :value="getOption(optionWidth)"
                @input="setOption(optionWidth,$event)"
                :min="0"
                :max="1200"
                unit="px"
            />
            <to-alert
                v-if="resolutionIsLow"
                v-bind:class="{'danger': resolutionIsLow}"
                :icon="'error'"
                :title="$t('image.size_warning') + ' ' + getOption(optionWidth)*2 + 'px'">
            </to-alert>
        </div>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';

export default addHelpers({
    data() {
        return {};
    },

    props: {
        optionImage: {
            type: String,
            required: true
        },
        optionWidth: {
            type: String,
            required: true
        },
        labelTitle: {
            type: String,
            required: true
        }
    },

    computed: {
        resolutionIsLow() {
            const selectedImgWidth = this.getOption(this.optionImage + '_selected_img_width');
            const width = this.getOption(this.optionWidth);

            return selectedImgWidth ? selectedImgWidth<2*width : false;
        },
        styles() {
            return {
                width: this.getOption(this.optionWidth) + 'px',
                'margin-left': (this.getOption(this.optionWidth)<320 ? 0:(320-this.getOption(this.optionWidth))/2) + 'px',
            }
        }
    },

    methods: {
        imageSelected(value) {
            this.setOption(this.optionImage, value.url);
            this.setOption(this.optionImage + '_selected_img_width', value.width);
        },
        clear() {
            this.setOption(this.optionImage, null);
        }
    }
})
</script>


<style lang="scss">
#thegem-options {
    .to-block-logo-select{
        display: flex;
        align-items: flex-start;

        .to-block-logo-file-select{
            position: relative;
            max-width: 100%;

            button{
                width: 320px;
                height: 320px;

                img {
                    width: 100%;
                    height: auto;
                }
            }

            span{
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%);
                margin-top: 15px;
            }
        }

        .to-block-logo-select-preview {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 320px;
            height: 320px;
            overflow: hidden;

            background-image: url("../../assets/img/pattern.jpg");
            background-repeat: repeat;

            div {
                overflow: hidden;
                text-align: center;
            }

            button{
                position: absolute;
                top: 10px;
                right: 10px;
                min-height: 30px;

                i{
                    min-width: 30px;
                }
            }
        }

        .to-block-logo-select__slider{
            display: flex;
            flex-direction: column;
            width: calc(100% - 320px);
            margin-left: auto;
            padding-left: 20px;

            .to-alert{
                margin-top: 30px;
                align-items: flex-start;

                .icon svg {
                    margin: 1px 5px 0 0;
                }
            }
        }
    }

    @media (max-width: 1279px) {
        .to-block-logo-select{
            .to-block-logo-file-select{
                button{
                    width: 210px;
                    height: 210px;
                }
            }

            .to-block-logo-select-preview {
                width: 210px;
                height: 210px;
            }

            .to-block-logo-select__slider{
                width: calc(100% - 210px);
            }
        }
    }
}
</style>
