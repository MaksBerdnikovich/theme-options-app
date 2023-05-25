<template>
    <div class="to-modal-confirm">
        <div class="caption">
            <div class="title"><i><to-svg-icon name="error"/></i> <span>{{title}}</span></div>
            <div class="close"><to-button :icon="buttonCloseIcon" @click="$emit('close')" :type="'default'"></to-button></div>
        </div>
        <div class="message" v-if="message">{{message}}</div>
        <div class="message" v-if="htmlMessage" v-html="htmlMessage"></div>
        <div class="footer">
            <to-button :icon="buttonYesIcon" @click="close(true)" :type="'primary'"></to-button>
            <!--<to-button :icon="buttonNoIcon" @click="close(false)" :type="'primary'"></to-button>-->
        </div>
    </div>
</template>

<script>
import i18n from '@/services/i18n';

export default {
    props: {
        title: {
            type: String,
            required: false,
            default: i18n.t('modal.confirm.title')
        },
        message: {
            type: String,
            required: false,
        },
        htmlMessage: {
            type: String,
            required: false,
        },
        buttonYesIcon: {
            type: String,
            required: false,
            default: 'checkmark'
        },
        buttonYesTitle: {
            type: String,
            required: false,
            default: i18n.t('modal.confirm.button_yes_title')
        },
        buttonNoIcon: {
            type: String,
            required: false,
            default: 'delete'
        },
        buttonNoTitle: {
            type: String,
            required: false,
            default: i18n.t('modal.confirm.button_no_title')
        },
        buttonCloseIcon: {
            type: String,
            required: false,
            default: 'delete'
        },
        resolve: {
            type: Function,
            required: true
        },
    },

    methods: {
        close(result) {

            if (result) {
                this.resolve(true);
            } else {
                this.resolve(false);
            }

            this.$emit('close');
        }
    }
}
</script>


<style lang="scss">
#thegem-options {
    .to-modal-confirm{
        position: relative;

        .caption{
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 60px;
            padding: 0 20px;

            background-color: $white-background;
            box-shadow: $element-bottom-shadow;

            .title{
                display: flex;
                align-items: center;

                span{
                    padding-left: 10px;
                    font-size: 14px;
                    text-transform: uppercase;
                    font-weight: 300;
                }

                svg{
                    width: 30px;
                    height: 30px;
                }
            }

            .close{
                margin-left: auto;

                .btn-icon{
                    min-width: auto;
                }
            }
        }

        .message{
            display: flex;
            padding: 30px;
            font-size: 13px;
            line-height: 2;
        }

        .footer{
            display: flex;
            padding: 0 20px 20px 20px;
            justify-content: flex-end;
        }
    }
}

#thegem-options.theme-dark {
    .to-modal-confirm{
        .caption{
            background-color: $white-background;

            .title{
                color: $light-body-color;
            }

            .close{
                .to-btn{
                    color: $light-body-color;
                    background-color: $white-background;
                }
            }
        }

        .message{
            color: $light-body-color;
        }
    }
}
</style>
