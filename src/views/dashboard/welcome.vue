<template>
    <div class="dashboard-welcome">
        <div class="block-activate">
            <div class="activation">
                <div class="caption light">{{ $t('dashboard.title_theme_activation') }}</div>
                <div class="form">
                    <div class="form-line">
                        <to-input type="text" v-model="purchaseCode" :placeholder="$t('dashboard.placeholder_purchase_code')"/>
                    </div>
                    <div class="form-line">
                        <to-button type="primary" :processing="activating" :disabled="disableActivation" v-on:click="activate()">{{disableActivation ? $t('dashboard.button_activated'):$t('dashboard.button_activate')}}</to-button>
                    </div>
                </div>
            </div>

            <div class="alerts">
                <div v-if="activationError && showAnyGrayBlock" class="steps">
                    <div class="item warning">
                        <div class="msg">
                            <i><to-svg-icon name="alert-outline"/></i> <span v-html="activationError"></span>
                        </div>
                        <div v-if="!showOnlyContactSupport" class="but">
                            <to-button type="outline" v-bind:class="'alert'" v-on:click="opeUrlInNewTab(config.licenseManagerUrl)">{{$t('dashboard.button_check_your_activations')}}</to-button>
                        </div>
                    </div>
                    <div v-if="!showOnlyContactSupport" class="item">
                        <div class="msg">
                            <i><to-svg-icon name="currency-usd-circle-outline"/></i> <span>{{$t('dashboard.alert_buy_license')}}</span>
                        </div>
                        <div class="but">
                            <to-button type="outline" v-on:click="opeUrlInNewTab(config.buyUrl)">{{$t('dashboard.button_buy_license')}}</to-button>
                        </div>
                    </div>
                    <div class="item">
                        <div class="msg">
                            <i><to-svg-icon name="lifebuoy"/></i> <span>{{$t('dashboard.alert_contact_support')}}</span>
                        </div>
                        <div class="but">
                            <to-button type="outline" v-on:click="opeUrlInNewTab(config.supportUrl)">{{$t('dashboard.button_contact_support')}}</to-button>
                        </div>
                    </div>
                </div>
                <div v-if="activationError && !showAnyGrayBlock" class="empty">
                    <i><to-svg-icon name="alert-outline"/></i> <span v-html="activationError"></span>
                </div>
                <div v-if="config.activated" class="valid">
                    <i><to-svg-icon name="checkmark"/></i>
                    <span>{{$t('dashboard.alert_code_valid')}} <a :href="getAdminPageUrl('install-required-plugins')">{{$t('dashboard.link_begin_install_plugins')}}</a></span>
                </div>
            </div>
            <div class="purchase">
                <div class="caption light">{{ $t('dashboard.title_purchase_code') }}</div>
                <div class="list">
                    <ul>
                        <li>1. <span v-html="$t('dashboard.list_purchase_step1')"></span> <a href="https://themeforest.net/downloads">Themeforest.net/downloads</a></li>
                        <li>2. <span v-html="$t('dashboard.list_purchase_step2')"></span></li>
                        <li>3. <span v-html="$t('dashboard.list_purchase_step3')"></span></li>
                        <li>4. <span v-html="$t('dashboard.list_purchase_step4')"></span></li>
                    </ul>
                </div>
                <div class="image"><img src="@/assets/img/get-code.png"></div>
            </div>
            <div class="license">
                <div class="caption light">{{ $t('dashboard.title_buy_license') }}</div>
                <div class="text">{{ $t('dashboard.text_another_license') }}</div>
                <div class="butt">
                    <to-button v-on:click="opeUrlInNewTab(config.buyUrl)" type="primary">{{$t('dashboard.button_purchase')}}</to-button>
                </div>
            </div>
        </div>
        <div class="block-status">
            <div class="system">
                <div class="caption light">{{ $t('dashboard.title_system_status') }}</div>
                <div class="list">
                    <ul>
                        <!--
                        <li><span>{{ $t('dashboard.list_status_stylesheets') }}</span> <i><to-svg-icon name="checkmark"/></i></li>
                        -->
                        <li>
                            <span>{{ $t('dashboard.list_status_uploads') }}</span> <i><to-svg-icon :name="systemStatus.uploadsFolderWritable ? 'checkmark':'delete'"/></i>
                            <p v-if="!systemStatus.uploadsFolderWritable" class="inc">{{ $t('dashboard.text_status_uploads') }}</p>
                        </li>
                        <li><span>{{ $t('dashboard.list_status_api_server') }}</span> <i><to-svg-icon :name="systemStatus.apiServerConnection ? 'checkmark':'delete'"/></i></li>
                        <li><span>{{ $t('dashboard.list_status_php_memory') }}</span> <i><to-svg-icon :name="systemStatus.phpMemoryLimitOk ? 'checkmark':'delete'"/> {{systemStatus.phpMemoryLimitFormatted}}</i></li>
                        <li><span>{{ $t('dashboard.list_status_php_time') }}</span> <i><to-svg-icon :name="systemStatus.phpTimeLimitOk ? 'checkmark':'delete'"/> {{systemStatus.phpTimeLimit}}s</i></li>
                        <li>
                            <span>{{ $t('dashboard.list_status_php_postmaxsize') }}</span> <i><to-svg-icon :name="systemStatus.phpPostMaxSizeOk ? 'checkmark':'delete'"/> {{systemStatus.phpPostMaxSizeFormatted}}</i>
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_status_php_upload') }}</span> <i><to-svg-icon :name="systemStatus.phpUploadMaxFilesizeOk ? 'checkmark':'delete'"/> {{systemStatus.phpUploadMaxFilesizeFormatted}}</i>
                            <p class="inc">{{ $t('dashboard.text_status_php_upload') }} <a href="http://php.net/manual/en/function.phpinfo.php" target="_blank">phpinfo</a></p>
                        </li>
                    </ul>
                </div>
                <div class="butt">
                    <to-button v-on:click="openUrl(getAdminPageUrl('thegem-dashboard-system-status'))" type="primary">{{$t('dashboard.button_more_info')}}</to-button>
                </div>
            </div>
            <div class="links">
                <div class="caption light">{{ $t('dashboard.title_useful_links') }}</div>
                <div class="list">
                    <ul>
                        <li><a :href="getAdminPageUrl('install-required-plugins')" target="_blank">{{ $t('dashboard.link_install_plugins') }}</a></li>
                        <li><a :href="getAdminPageUrl(config.importPage)" target="_blank">{{ $t('dashboard.link_prebuilt_websites') }}</a></li>
                        <li><a :href="getAdminPageUrl('thegem-theme-options')" target="_blank">{{ $t('dashboard.link_theme_options') }}</a></li>
                        <li><a :href="config.documentationUrl" target="_blank">{{ $t('dashboard.link_documentation') }}</a></li>
                        <li><a :href="config.supportUrl" target="_blank">{{ $t('dashboard.link_support') }}</a></li>
                        <!--
                        <li><a :href="config.blocksUrl" target="_blank">{{ $t('dashboard.link_thegem_blocks') }}</a></li>
                        -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { addHelpers } from '@/services/helper';
import config from '@/services/config';

export default addHelpers({
    data() {
        return {
            systemStatus: config.systemStatus,
            purchaseCode: config.purchaseCode,
            config: config,
            activationError: '',
            activationErrorCode: 0,
            activating: false
        }
    },

    computed: {
        disableActivation() {
            return !!config.activated && this.purchaseCode == config.purchaseCode;
        },

        showAnyGrayBlock() {
            return [1, 3, 4].indexOf(this.activationErrorCode) < 0;
        },

        showOnlyContactSupport() {
            return [2, 5].indexOf(this.activationErrorCode) >= 0;
        }
    },

    methods: {
        activate() {
            this.activating = true;
            this.api('activate',{
                purchaseCode: this.purchaseCode
            }).then(
                response => {
                    this.activating = false;
                    config.purchaseCode = this.purchaseCode;
                    config.activated = response.data.activated;
                    this.activationError = response.data.error ? response.data.error:'';
                    let errorCodeMatch = this.activationError.match(/\(E(\d\d)\)/);

                    if (errorCodeMatch) {
                        this.activationErrorCode = +errorCodeMatch[1];
                    } else {
                        this.activationErrorCode = 0;
                    }

                    this.activationError = this.activationError.replace(/\(E(\d\d)\)/,'');
                },
                () => {
                    this.activating = false;
                    this.$modal.alert({message: this.$t('dashboard.activation_failed')});
                }
            );
        }
    }
});
</script>

<style lang="scss">
    #thegem-options.dashboard {
        .dashboard-welcome {
            display: flex;
            flex: auto;
            margin: 0 -40px;

            .block-activate {
                position: relative;
                display: flex;
                flex-direction: column;
                width: 65%;
                padding: 0 40px;

                &:before{
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 1px;
                    height: 100%;
                    background-color: $hoar-color;
                }

                > div + div{
                    margin-top: 40px;
                }

                .activation {
                    display: flex;
                    flex-direction: column;

                    .form{
                        display: flex;
                        margin: 0 -10px;

                        .form-line{
                            width: 70%;
                            padding: 0 10px;

                            .to-btn{
                                width: 100%;
                            }

                            &:last-child{
                                width: 30%;
                            }
                        }
                    }
                }

                .alerts{
                    display: flex;
                    flex-direction: column;

                    > div + div{
                        margin-top: 30px;
                    }

                    .steps{
                        display: flex;
                        flex-wrap: wrap;
                        flex: auto;
                        margin: 0 -30px;

                        .item{
                            display: flex;
                            flex: auto;
                            flex-wrap: wrap;
                            padding: 0 30px;
                            width: calc(100% / 3);
                            min-height: 130px;

                            .msg{
                                display: flex;

                                i{
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    width: 40px;
                                    height: 40px;
                                    margin-top: 4px;
                                    border-radius: 50%;
                                    background-color: $dashboard-system;

                                    svg{
                                        width: 25px;
                                        height: 25px;
                                        color: #ffffff;
                                    }
                                }
                                span{
                                    width: calc(100% - 40px);
                                    padding-left: 15px;

                                    a{
                                        display: none;
                                    }
                                }
                            }

                            .but{
                                width: 100%;
                                margin-top: 30px;
                                align-self: flex-end;

                                .to-btn{
                                    width: calc(100% - 55px);
                                    margin-left: auto;
                                }
                            }

                            &.warning{
                                color: $red-color;
                                .msg{
                                    display: flex;

                                    i{
                                        background-color: $red-color;
                                    }
                                }
                            }
                        }
                    }

                    .empty,
                    .valid{
                        display: flex;
                        align-items: center;

                        i{
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            min-width: 40px;
                            min-height: 40px;
                            border-radius: 50%;

                            svg{
                                width: 25px;
                                height: 25px;
                                color: #ffffff;
                            }
                        }
                        span{
                            padding-left: 15px;
                        }
                        a{
                            color: $cyan-color;
                            font-weight: 400;
                        }
                    }
                    .empty{
                        color: $red-color;
                        i{
                            background-color: $red-color;
                        }
                    }
                    .valid{
                        color: $green-color;
                        i{
                            background-color: $green-color;
                        }
                    }
                }

                .purchase{
                    position: relative;

                    .image{
                        position: absolute;
                        top: 0;
                        right: 150px;
                        max-width: 340px;
                        z-index: -1;

                        img{
                            width: 100%;
                        }

                        @media (max-width: 1680px) {
                            right: 0;
                        }
                    }

                    .list{
                        ul{
                            list-style: none;
                            li{
                                width: 100%;
                                margin-top: 5px;
                                &:first-child{
                                    margin: 0;
                                }
                            }
                        }
                        b{
                            font-family: "Source Sans Pro";
                            font-weight: 400;
                        }
                        a{
                            color: $cyan-color;
                            font-weight: 400;
                        }
                    }
                }

                .license{
                    .butt{
                        margin-top: 20px;

                        .to-btn{
                            min-width: 300px;
                        }
                    }
                }
            }

            .block-status {
                position: relative;
                display: flex;
                width: 35%;
                padding: 0 40px;
                margin: 0 -10px;

                .system{
                    display: flex;
                    flex-direction: column;
                    width: 65%;
                    padding: 0 10px;

                    .list{
                        ul{
                            list-style-type: none;
                            li{
                                display: flex;
                                align-items: center;
                                flex-wrap: wrap;
                                margin-top: 15px;
                                width: 100%;

                                &:first-child{
                                    margin:0;
                                }

                                i{
                                    display: flex;
                                    align-items: center;
                                    font-style: normal;
                                    font-size: 21px;
                                    font-weight: 300;

                                    svg{
                                        margin:3px 10px 0 0;
                                        height: 20px;
                                        width: 20px;
                                        &.svg-icon--checkmark{
                                            color: $cyan-color;
                                        }
                                        &.svg-icon--delete{
                                            color: $red-color;
                                        }
                                    }
                                }
                                a{
                                    color: $cyan-color;
                                    font-weight: 400;
                                }
                                span{
                                    font-size: 21px;
                                    min-width: 220px;
                                    font-weight: 300;
                                }
                                p{
                                    width: 100%;
                                    margin: 5px 0 0 0;
                                    font-size: 14px;
                                    color: $dashboard-system;
                                }
                            }
                        }
                    }
                }

                .links{
                    display: flex;
                    flex-direction: column;
                    width: 35%;
                    padding: 0 10px;

                    .list{
                        ul{
                            list-style-type: none;

                            li{
                                display: flex;
                                margin-top: 10px;
                                width: 100%;

                                &:first-child{
                                    margin:0;
                                }

                                a{
                                    color: $cyan-color;
                                    font-weight: 400;
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                }

                .butt{
                    margin-top: 40px;

                    .to-btn{
                        min-width: 140px;
                    }
                }
            }
        }

        @media (max-width: 1900px) {
            .dashboard-welcome {
                .block-activate{
                    width: 60%;
                    padding: 0 25px;
                }
                .block-status{
                    width: 40%;
                    padding: 0 25px;
                }
            }
        }

        @media (max-width: 1600px) {
            .dashboard-welcome {
                .block-activate {
                    .alerts{
                        .steps{
                            margin: 0 -15px;

                            .item{
                                padding: 0 15px;
                            }
                        }
                    }
                }

                .block-status{
                    padding: 0 25px;
                    margin: 0;
                    flex-direction: column;

                    .system{
                        padding: 0;
                        width: 100%;
                    }
                    .links{
                        width: 100%;
                        padding: 0;
                        margin-top: 40px;
                    }
                }
            }
        }

        @media (max-width: 1380px) {
            .dashboard-welcome {
                margin: 0 -25px;

                .block-activate{
                    .activation {
                        .form{
                            flex-direction: column;
                            margin: 0;

                            .form-line{
                                width: 100%;
                                padding: 0;

                                &:last-child{
                                    width: 100%;
                                    margin-top: 20px;
                                }
                            }
                        }
                    }

                    .alerts {
                        .steps {
                            margin: 0;

                            .item {
                                flex-wrap: nowrap;
                                align-items: center;
                                padding: 0;
                                width: 100%;
                                min-height: auto;
                                margin-top: 20px;

                                &:first-child{
                                    margin-top: 0;
                                }

                                .msg {
                                    width: 100%;
                                    span {
                                        width: calc(100% - 40px);
                                        padding: 0 15px;
                                    }
                                }

                                .but {
                                    width: auto;
                                    margin-top: 0;
                                    align-self: auto;

                                    .to-btn {
                                        width: auto;
                                        min-width: 230px;
                                    }
                                }
                            }
                        }
                    }

                    .purchase{
                        .image{
                            position: relative;
                            max-width: 340px;
                            z-index: 1;
                            margin-top: 40px;
                        }
                    }
                }
            }
        }

        @media (max-width: 1200px) {
            .dashboard-welcome {
                margin: 0 -15px;

                .block-activate{
                    padding: 0 15px;
                }
                .block-status {
                    padding: 0 15px;

                    .system .list ul li i{
                        font-size: 18px;
                    }
                    .system .list ul li span{
                        font-size: 18px;
                        min-width: 180px;
                    }
                    .system .list ul li i svg{
                        width: 18px;
                        height: 18px;
                    }
                }
            }
        }

        @media (max-width: 900px) {
            .dashboard-welcome {
                margin: 0;
                flex-direction: column;

                .block-activate{
                    padding: 0;
                    width: 100%;

                    &:before{
                        display: none;
                    }
                }

                .block-status{
                    width: 100%;
                    padding: 0;
                    margin: 40px -30px 0 -30px;
                    flex-direction: row;

                    .system{
                        padding: 0 30px;
                        width: 60%;
                    }
                    .links{
                        width: 40%;
                        padding: 0 30px;
                        margin-top: 0;
                    }
                }
            }
        }

        @media (max-width: 767px) {
            .dashboard-welcome {

                .block-activate{
                    padding: 0;
                    width: 100%;

                    .alerts{
                        .steps{
                            .item{
                                flex-wrap: wrap;

                                .but{
                                    width: 100%;
                                    margin-top: 20px;

                                    .to-btn{
                                        width: calc(100% - 55px);
                                        margin-left: auto;
                                    }
                                }
                            }
                        }
                    }
                }

                .block-status{
                    margin: 40px 0 0 0;
                    flex-direction: column;

                    .system{
                        padding: 0;
                        width: 100%;
                    }
                    .links{
                        width: 100%;
                        padding: 0;
                        margin-top: 40px;
                    }
                }
            }
        }

    }
</style>
