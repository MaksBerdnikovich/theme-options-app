<template>
    <div class="to-block-icon">
        <to-label v-if="labelTitle">{{ labelTitle }}</to-label>
        <div class="selected-block" v-if="getPrefixedOption(iconSuffix) && getPrefixedOption(packSuffix)">
            <div class="preview" v-html="'&'+'#x'+getPrefixedOption(iconSuffix)+';'" :style="iconStyle"></div>
            <to-button class="trash" icon="trash-can" v-on:click="remove()" v-if="showDeleteButton"></to-button>
            <to-button class="library" v-on:click="selectIcon()"><to-svg-icon name="grid-view"/>{{ $t('addicon.icon_library') }}</to-button>
        </div>
        <to-button v-else class="select-block" v-on:click="selectIcon()">
            <i><to-svg-icon name="plus"/></i><span>{{ $t('addicon.choose_icon') }}</span>
        </to-button>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';
import config from '@/services/config';
import ToModalIcon from '@/components/system/to-modal-icon';


export default addHelpers({
    props: {
        optionPrefix: {
            type: String,
            required: true
        },
        iconSuffix: {
            type: String,
            required: false,
            default: ''
        },
        packSuffix: {
            type: String,
            required: false,
            default: 'pack'
        },
        defaultIcon: {
            type: String,
            required: false,
        },
        defaultPack: {
            type: String,
            required: false,
        },
        defaultRemovable: {
            type: Boolean,
            required: false,
            default: false
        },
        labelTitle: {
            type: String,
            required: false
        },
    },

    methods: {
        getIconOption() {
            return this.optionPrefix + (this.optionPrefix!='' && this.iconSuffix!='' ? '_': '') + this.iconSuffix;
        },

        getPackOption() {
            return this.optionPrefix + (this.optionPrefix!='' && this.packSuffix!='' ? '_': '') + this.packSuffix;
        },

        selectIcon() {
            this.$modal.show(ToModalIcon, {
                iconOption: this.getIconOption(),
                packOption: this.getPackOption()
            }, {
                height: '80%',
                width: 1082
                //height: 'auto'
            });
        },

        remove() {
            if (this.defaultIcon !== undefined && this.defaultPack !== undefined) {
                if (this.defaultRemovable && this.getOption(this.getIconOption()) == this.defaultIcon && this.getOption(this.getPackOption()) == this.defaultPack) {
                    this.setOption(this.getIconOption(), '');
                    this.setOption(this.getPackOption(), '');
                } else {
                    this.setOption(this.getIconOption(), this.defaultIcon);
                    this.setOption(this.getPackOption(), this.defaultPack);
                }
            } else {
                this.setOption(this.getIconOption(), '');
                this.setOption(this.getPackOption(), '');
            }
        }
    },

    computed: {
        showDeleteButton() {
            return this.defaultIcon === undefined || this.defaultPack === undefined || this.defaultRemovable
                || this.getOption(this.getIconOption()) != this.defaultIcon || this.getOption(this.getPackOption()) != this.defaultPack;
        },

        iconStyle() {
            let selectedPack = this.getPrefixedOption(this.packSuffix);

            for(let pack of config.iconPacks) {
                if (selectedPack == pack.value) {
                    return {'font-family': pack.fontFamily};
                }
            }
        }
    }
})
</script>

<style lang="scss">
#thegem-options {
    .to-block-icon {
        display: flex;
        flex-direction: column;

        .select-block{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            min-width: 100%;
            height: 210px;

            padding: 0;
            margin: 0;
            border: 1px solid $light-border-color;

            .btn-text{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-transform: none;
                padding: 0;

                span{
                    font-size: 12px;
                    padding-top: 5px;
                }
            }
        }

        .selected-block{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            min-width: 100%;
            height: 210px;

            background-image: url("../../assets/img/pattern.jpg");
            background-repeat: repeat;

            .preview {
                font-size: 100px;
                color: $light-body-color;
            }

            .trash{
                position: absolute;
                display: flex;
                align-items: center;
                justify-content: center;

                top: 5px;
                right: 10px;
                width: 27px;
                height: 27px;
                min-height: 27px;
                margin: 0;
                padding: 0;
                border: 1px solid $light-border-color;

                text-align: center;
                opacity: 0;
                -webkit-transition: opacity 0.3s;
                transition: opacity 0.3s;

                .btn-icon{
                    min-width: auto;
                }
            }

            .library{
                position: absolute;

                bottom: 10px;
                left: 50%;
                transform: translate(-50%, 0);
                min-width: 110px;
                max-width: 100%;
                height: 27px;
                min-height: 27px;

                border: 1px solid $light-border-color;
                opacity: 0;
                -webkit-transition: opacity 0.3s;
                transition: opacity 0.3s;

                .btn-text{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 10px;
                    text-transform: none;
                    font-size: 12px;

                    svg{
                        margin: 0 5px 0 0;
                    }
                }
            }

            &:hover{
                .trash,
                .library{
                    opacity: 1;
                }
            }
        }
    }
}
</style>
