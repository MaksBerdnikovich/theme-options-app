<template>
    <div class="to-modal-alert">
        <div class="caption">
            <div class="title"><i><to-svg-icon :name="icon"/></i> <span>{{title}}</span></div>
            <div class="close"><to-button :icon="buttonCloseIcon" @click="$emit('close')" :type="'default'"></to-button></div>
        </div>
        <div class="message" v-if="message">{{message}}</div>
        <div class="message" v-if="htmlMessage" v-html="htmlMessage"></div>
        <div class="footer">
            <to-button :icon="buttonOkIcon" @click="$emit('close')" :type="'primary'"></to-button>
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
            default: i18n.t('modal.alert.title')
        },
        message: {
            type: String,
            required: false,
        },
        icon: {
            type: String,
            required: false,
            default: 'error'
        },
        htmlMessage: {
            type: String,
            required: false,
        },
        buttonOkIcon: {
            type: String,
            required: false,
            default: 'checkmark'
        },
        buttonOkTitle: {
            type: String,
            required: false,
            default: i18n.t('modal.alert.button_ok_title')
        },
        buttonCloseIcon: {
            type: String,
            required: false,
            default: 'delete'
        },
    }
}
</script>

<style lang="scss">
#thegem-options {
    .to-modal-alert{
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
    .to-modal-alert{
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
