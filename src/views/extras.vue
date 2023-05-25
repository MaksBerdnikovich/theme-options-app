<template>
    <div>
        <to-panel id="panel.extra_options">
            <to-panel-group :label-title="$t('panel.regenerate_css')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.extras_regenerate_css') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-button icon="sync" :processing="regeneratingCss" v-on:click="regenerateCss()" type="systems">{{$t('button.regenerate_css')}}</to-button>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.open_graph_tags')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.extras_graph_tags') }}
                        </div>
                    </div>
                </template>
                <to-switch trueValue="0" falseValue="1" :value="getOption('disable_og_tags')" @input="setOption('disable_og_tags',$event)"/>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.thumbnails_cache')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.extras_thumbnails_cache') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-button :processing="purging" icon="delete-bin" type="systems" v-on:click="purge()">{{$t('button.purge_all')}}</to-button>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.news_post_type')" :label-deprecated="$t('general.deprecated')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.extras_news_post_type')"/>
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('activate_news_posttype')" @input="setOption('activate_news_posttype',$event)"/>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.nivoslider')" :label-deprecated="$t('general.deprecated')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.extras_nivoslider')"/>
                        </div>
                    </div>
                </template>
                <to-switch :value="getOption('activate_nivoslider')" @input="setOption('activate_nivoslider',$event)"/>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.version_control">
            <to-panel-group :label-title="$t('panel.version_rollback')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            <div v-html="$t('info.extras_version_rollback')"/>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-3">
                            <to-button icon="sync" :processing="themeDowngrade" type="systems" v-on:click="downgrade()">{{ $t('button.reinstall_previous')}}</to-button>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <!--
        <to-panel id="panel.page_options_for_custom_post_types">
            <to-panel-group :class="'no-title'">
                <div class="to-changed-settings">
                    <to-alert :title="$t('alert.custom_post_types')"></to-alert>
                </div>
                <div class="to-changed-settings" v-if="customPostTypes.length == 0">
                    <to-alert :title="$t('alert.no_custom_post_types')"></to-alert>
                </div>
            </to-panel-group>

            <to-panel-group v-for="postType in customPostTypes" v-bind:key="postType.value" :label-title="postType.label">
                <to-switch :value="getCustomPostTypeOption(postType.value)" @input="setCustomPostTypeOption(postType.value, $event)"/>
            </to-panel-group>
        </to-panel>
        -->
    </div>
</template>


<script>
    import {addHelpers} from '@/services/helper';
    import config from '@/services/config';
    import ToModalFilesystemCredentials from "@/components/system/to-modal-filesystem-credentials";
    import {bus} from '@/services/bus';

    export default addHelpers({
        data() {
            return {
                purging: false,
                customPostTypes: JSON.parse(JSON.stringify(config.customPostTypes)),
                regeneratingCss: false,
                themeDowngrade: false
            }
        },

        methods: {
            getCustomPostTypeOption(option) {
                var postTypes = (this.getOption('po_custom_types') + '').split(',');
                return postTypes.indexOf(option) >=0 ? '1' : '';
            },

            setCustomPostTypeOption(option, value) {
                var postTypes = (this.getOption('po_custom_types') + '').split(',');
                var index = postTypes.indexOf(option);
                if (index >=0 ) {
                    postTypes.splice(index, 1);
                }

                if (value === '1') {
                    postTypes.push(option);
                }

                this.setOption('po_custom_types', postTypes.filter((_) => _!='').join(','));
            },

            purge() {
                this.purging = true;
                this.api('purgeThumbnailsCache').then(
                    response => {
                        this.purging = false;
                        if (response.data && response.data.status === true) {
                            this.$modal.alert({message:this.$t('extras.purge_success')});
                        } else {
                            this.$modal.alert({message:this.$t('extras.purge_failed')});
                        }
                    },
                    () => {
                        this.purging = false;
                        this.$modal.alert({message:this.$t('extras.purge_failed')});
                    }
                );
            },

            locationHash() {
                const url = new URL(window.location.href)
                return url.href.split(/[=#]/)[3]
            },

            regenerateCss() {
                this.regeneratingCss = true;

                this.api('regenerateCss',{
                    credentials: this.getExtra('credentials')
                }).then(
                    response => {
                        this.regeneratingCss = false;
                        const successMessage = (this.locationHash() === 'regenerateCss')
                            ? this.$t('extras.regenerate_css_gdpr_success')
                            : this.$t('extras.regenerate_css_success');

                        if (response.data && response.data.status === true) {
                            this.$modal.alert({
                                icon:'checkmark',
                                title: this.$t('extras.regenerate_success'),
                                message: successMessage
                            });
                            let el = document.getElementById('thegem-custom-css-generation-error');
                            if (el) {
                                el.remove();
                            }
                        } else {
                            if (response.data && response.data.status && response.data.status.reason) {
                                if (response.data.status.reason == 'credentials') {
                                    this.$modal.show(ToModalFilesystemCredentials, {
                                        html: response.data.status.form,
                                        doneCallback: () => {this.regenerateCss();}
                                    }, {
                                        height: 'auto'
                                    });
                                    return;
                                }
                                if (response.data.status.reason == 'error') {
                                    this.$modal.alert({
                                        htmlMessage: response.data.status.message
                                    });
                                    return;
                                }
                            }
                        }
                    },
                    () => {
                        this.regeneratingCss = false;
                        this.$modal.alert({message: this.$t('extras.regenerate_css_failed')});
                    }
                );
            },

            regenerateEmptyCss() {
                this.regeneratingCss = true;

                this.api('regenerateEmptyCss',{
                    credentials: this.getExtra('credentials')
                }).then(
                    response => {
                        this.regeneratingCss = false;
                        if (response.data && response.data.status === true) {
                            window.location.href = this.getAdminPageUrl('thegem-dashboard-welcome');
                            return;
                        } else {
                            if (response.data && response.data.status && response.data.status.reason) {
                                if (response.data.status.reason == 'credentials') {
                                    this.$modal.show(ToModalFilesystemCredentials, {
                                        html: response.data.status.form,
                                        doneCallback: () => {this.regenerateEmptyCss();}
                                    }, {
                                        height: 'auto'
                                    });
                                    return;
                                }
                                if (response.data.status.reason == 'error') {
                                    this.$modal.alert({
                                        htmlMessage: response.data.status.message
                                    });
                                    return;
                                }
                            }
                        }
                    },
                    () => {
                        this.regeneratingCss = false;
                        this.$modal.alert({message: this.$t('extras.regenerate_css_failed')});
                    }
                );
            },

            downgrade() {
                this.themeDowngrade = true;

                this.$modal.confirm({title: this.$t('downgrade.title'), message: this.$t('downgrade.message')}).then( (result) => {
                    if (result) {
                        window.location.href = 'admin.php?page=thegem-downgrade';
                    } else {
                        this.themeDowngrade = false;
                    }
                });
            }
        },

        created() {
            bus.$on('navigationParamsAction', action => {
                if (action === 'regenerateCss') {
                    this.regenerateCss();
                }

                if (action === 'regenerateEmptyCss') {
                    this.regenerateEmptyCss();
                }
            });
        },

        mounted() {
            if (this.locationHash() === 'regenerateCss') this.regenerateCss()
        }
    })
</script>
