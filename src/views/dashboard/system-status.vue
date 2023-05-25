<template>
    <div class="dashboard-status">

        <div class="block-info">
            <div class="item">
                <div class="caption light">{{ $t('dashboard.title_server_environment') }}</div>
                <div class="list">
                    <ul>
                        <li>
                            <span>{{ $t('dashboard.list_server_php_version') }}</span> <i><to-svg-icon :name="systemStatus.phpVersionOk ? 'checkmark':'delete'"/></i> {{systemStatus.phpVersion}}
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_status_php_memory') }}</span> <i><to-svg-icon :name="systemStatus.phpMemoryLimitOk ? 'checkmark':'delete'"/> {{systemStatus.phpMemoryLimitFormatted}}</i>
                            <p v-if="!systemStatus.phpMemoryLimitOk" class="inc">{{$t('dashboard.text_theme_server_recommended')}} {{ $t('dashboard.list_status_php_memory') }} is 256MB. {{$t('dashboard.text_theme_server_recommended_ask')}}</p>
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_status_php_time') }}</span> <i><to-svg-icon :name="systemStatus.phpTimeLimitOk ? 'checkmark':'delete'"/> {{systemStatus.phpTimeLimit}}s</i>
                            <p v-if="!systemStatus.phpTimeLimitOk" class="inc">{{$t('dashboard.text_theme_server_recommended')}} {{ $t('dashboard.list_status_php_time') }} is 180 seconds. {{$t('dashboard.text_theme_server_recommended_ask')}}</p>
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_server_php_input_vars') }}</span> <i><to-svg-icon :name="systemStatus.phpMaxInputVarsOk ? 'checkmark':'delete'"/> {{systemStatus.phpMaxInputVars}}</i>
                            <p v-if="!systemStatus.phpMaxInputVarsOk" class="inc">{{$t('dashboard.text_theme_server_recommended')}} {{ $t('dashboard.list_server_php_input_vars') }} is 4000. {{$t('dashboard.text_theme_server_recommended_ask')}}</p>
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_status_php_postmaxsize') }}</span> <i><to-svg-icon :name="systemStatus.phpPostMaxSizeOk ? 'checkmark':'delete'"/> {{systemStatus.phpPostMaxSizeFormatted}}</i>
                            <p v-if="!systemStatus.phpPostMaxSizeOk" class="inc">{{$t('dashboard.text_theme_server_recommended')}} {{ $t('dashboard.list_status_php_postmaxsize') }} is 96MB. {{$t('dashboard.text_theme_server_recommended_ask')}}</p>
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_status_php_upload') }}</span> <i><to-svg-icon :name="systemStatus.phpUploadMaxFilesizeOk ? 'checkmark':'delete'"/> {{systemStatus.phpUploadMaxFilesizeFormatted}}</i>
                            <p v-if="!systemStatus.phpUploadMaxFilesizeOk" class="inc">{{$t('dashboard.text_theme_server_recommended')}} {{ $t('dashboard.list_status_php_upload') }} is 16MB. {{$t('dashboard.text_theme_server_recommended_ask')}}</p>
                        </li>
                        <li>
                            <p class="inc">{{ $t('dashboard.text_server_connection1') }} <a href="https://make.wordpress.org/support/handbook/appendix/creating-a-phpinfo-page/" target="_blank">php_info</a>.</p>
                            <p class="inc">{{ $t('dashboard.text_server_connection2') }} <a href="https://make.wordpress.org/support/handbook/appendix/creating-a-phpinfo-page/" target="_blank">this wordpress.org article</a>.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="block-info">
            <div class="item">
                <div class="caption light">{{ $t('dashboard.title_wp_environment') }}</div>
                <div class="list">
                    <ul>
                        <li><span>{{ $t('dashboard.list_wp_version') }}</span> {{systemStatus.wpVersion}}</li>
                        <li><span>{{ $t('dashboard.list_wp_file') }}</span> <i>{{systemStatus.wpFileSystem}}</i></li>
                        <li><span>{{ $t('dashboard.list_wp_lang') }}</span> <i>{{systemStatus.blogLanguage}}</i></li>
                        <li><span>{{ $t('dashboard.list_wp_direction') }}</span> <i>{{systemStatus.direction}}</i></li>
                        <li>
                            <span>{{ $t('dashboard.list_wp_home_url') }}</span>
                            <p class="inc"><a target="_blank" :href="systemStatus.homeUrl">{{systemStatus.homeUrl}}</a></p>
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_wp_site_url') }}</span>
                            <p class="inc"><a target="_blank" :href="systemStatus.siteUrl">{{systemStatus.siteUrl}}</a></p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="block-info">
            <div class="item">
                <div class="caption light">{{ $t('dashboard.title_permissions') }}</div>
                <div class="list">
                    <ul>
                        <li>
                            <span>{{ $t('dashboard.list_permission_uploads') }}</span> <i><to-svg-icon :name="systemStatus.uploadsFolderWritable ? 'checkmark':'delete'"/></i> {{ systemStatus.uploadsFolderWritable ? $t('general.yes'):$t('general.no') }}
                            <p v-if="!systemStatus.uploadsFolderWritable" class="inc">{{ $t('dashboard.text_status_uploads') }}</p>
                        </li>
                        <li><span>{{ $t('dashboard.list_permission_api_server') }}</span> <i><to-svg-icon :name="systemStatus.apiServerConnection ? 'checkmark':'delete'"/></i> {{ systemStatus.apiServerConnection ? $t('general.connected'):$t('general.not_connected') }}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="block-info">
            <div class="item">
                <div class="caption light">{{ $t('dashboard.title_theme') }}</div>
                <div class="list">
                    <ul>
                        <li>
                            <span>{{ $t('dashboard.list_theme_version') }}</span> <i><to-svg-icon :name="(!config.themeUpdate || !config.themeUpdate.hasUpdate) ? 'checkmark':'delete'"/></i> {{$t('general.installed')}} {{'(v.'+config.version+')'}}
                            <p v-if="config.themeUpdate" class="inc">{{$t('dashboard.text_theme_version')}} {{config.themeUpdate.version}} {{$t('dashboard.text_theme_version_available')}}. <a v-on:click="opeUrlInNewTab(config.themeUpdate.updateUrl)">{{$t('dashboard.text_update_now')}}</a></p>
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_activation') }}</span> <i><to-svg-icon :name="systemStatus.activated ? 'checkmark':'delete'"/></i> {{ systemStatus.activated ? $t('dashboard.status_active'):$t('dashboard.status_not_active') }}
                            <p v-if="!systemStatus.activated" class="inc">{{$t('dashboard.text_theme_not_active')}} <a :href="getAdminPageUrl('thegem-dashboard-welcome')">{{$t('dashboard.link_activate_now')}}</a></p>
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_theme_elements') }}</span> <i><to-svg-icon :name="systemStatus.pluginElementsActive ? 'checkmark':'delete'"/></i> {{systemStatus.pluginElementsActive ? $t('general.installed'):$t('general.not_installed')}} {{systemStatus.pluginElementsActive ? '(v.'+config.pluginElementsUpdate.currentVersion+')' : ''}}
                            <p v-if="systemStatus.pluginElementsActive && config.pluginElementsUpdate.newVersion" class="inc">{{$t('dashboard.text_theme_version')}} {{config.pluginElementsUpdate.newVersion}} {{$t('dashboard.text_theme_version_available')}}. <a v-on:click="opeUrlInNewTab(config.pluginElementsUpdate.updateUrl)">{{$t('dashboard.text_update_now')}}</a></p>
                            <p v-if="!systemStatus.pluginElementsActive" class="inc">{{ $t('dashboard.text_elements') }} <a :href="getAdminPageUrl('install-required-plugins')">{{ $t('dashboard.link_elements_install') }}</a></p>
                        </li>
                        <li>
                            <span>{{ $t('dashboard.list_theme_builder') }}</span> <i><to-svg-icon :name="systemStatus.pageBuilderVersion ? 'checkmark':'delete'"/></i> {{ systemStatus.pageBuilderVersion ? $t('general.installed'):$t('general.not_installed') }}
                            <p v-if="!systemStatus.pageBuilderVersion" class="inc">{{ $t('dashboard.text_theme_builder') }} <a :href="getAdminPageUrl('install-required-plugins')">{{ $t('dashboard.link_theme_install') }}</a></p>
                        </li>
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
            config: config
        }
    },
});
</script>

<style lang="scss">
    #thegem-options.dashboard {
        .dashboard-status{
            display: flex;
            flex: auto;
            margin: 0 -40px;

            .block-info{
                position: relative;
                padding: 0 40px;
                width: 25%;

                &:before{
                    content: '';
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 1px;
                    height: 100%;
                    background-color: $hoar-color;
                }

                &:last-child:before{
                    display: none;
                }

                .item{
                    display: flex;
                    flex-direction: column;

                    .list{
                        ul{
                            list-style-type: none;
                            li{
                                display: flex;
                                align-items: center;
                                flex-wrap: wrap;
                                margin-top: 10px;
                                width: 100%;
                                font-weight: 300;

                                &:first-child{
                                    margin:0;
                                }

                                i{
                                    display: flex;
                                    align-items: center;
                                    font-style: normal;
                                    font-size: 17px;
                                    font-weight: 300;

                                    svg{
                                        margin:0 10px 0 0;
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
                                    cursor: pointer;
                                }
                                span{
                                    font-size: 17px;
                                    min-width: 180px;
                                    font-weight: 300;
                                }
                                p{
                                    width: 100%;
                                    margin: 0 0 10px 0;
                                    font-size: 12px;
                                    font-weight: 400;
                                    color: $dashboard-system;

                                    &.dark{
                                        color: $dashboard-color;

                                    }
                                }
                                p + p{
                                    margin: -10px 0 0 0;
                                }
                            }
                        }
                    }
                }
            }
        }

        @media (max-width: 1700px) {
            .dashboard-status {
                flex-wrap: wrap;

                .block-info{
                    padding: 0 25px;
                    width: 50%;


                    &:nth-child(2){
                        &:before{
                            display: none;
                        }
                    }

                    &:nth-child(n+3){
                        padding-top: 40px;
                    }
                }
            }
        }

        @media (max-width: 1479px) {
            .dashboard-status {
                margin: 0 -25px;

                .block-info{
                    padding: 0 25px;
                }
            }
        }

        @media (max-width: 767px) {
            .dashboard-status {
                margin: 0;

                .block-info{
                    padding: 0;
                    width: 100%;

                    &:before{
                        display: none;
                    }

                    &:nth-child(2){
                        padding-top: 40px;
                    }
                }
            }
        }

    }
</style>
