<template>
    <div>
        <to-panel id="panel.backup">

            <to-panel-group :label-title="$t('panel.to_backup')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backup_and_import_backup_theme_options') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-alert :title="$t('alert.last_backup') + ' ' + lastBackup" route="#"></to-alert>
                </div>

                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-3">
                            <to-button icon="hdd" :processing="backuping" type="systems" v-on:click="backup()">{{$t('button.backup_now')}}</to-button>
                        </div>
                        <div class="col-3">
                            <to-button icon="restore" :processing="restoring" type="systems" :disabled="!hasBackup" v-on:click="restore(0)">{{$t('button.backup_restore')}}</to-button>
                        </div>
                    </div>
                </div>

            </to-panel-group>

        </to-panel>

        <to-panel id="panel.export">

            <to-panel-group :label-title="$t('panel.to_export')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backup_and_import_export_theme_options') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-textarea ref="options"
                        :value="optionsString"
                    />
                </div>

                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-3">
                            <to-button icon="static-views" type="systems" v-on:click="optionsCopy()">{{$t('button.copy')}}</to-button>
                        </div>
                        <div class="col-3">
                            <to-button icon="installing-updates" type="systems" v-on:click="optionsDownload()">{{$t('button.download')}}</to-button>
                        </div>
                    </div>
                </div>
            </to-panel-group>

        </to-panel>

        <to-panel id="panel.import">

            <to-panel-group :label-title="$t('panel.to_import')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.backup_and_import_import_theme_options') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-textarea
                        v-model="importSettings"
                    />
                </div>

                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-3"></div>
                        <div class="col-3">
                            <div class="to-input-file">
                                <input type="file" @change="importFromFile($event)">
                                <to-button icon="uninstalling-updates" type="systems">{{$t('button.import')}}</to-button>
                            </div>
                        </div>
                        <div class="col-3">
                            <to-button icon="ok" type="systems" :disabled="!importSettingsIsValid" v-on:click="importFromText()">{{$t('button.apply')}}</to-button>
                        </div>
                    </div>
                </div>

            </to-panel-group>

        </to-panel>
    </div>
</template>


<script>
import ToModalFilesystemCredentials from "@/components/system/to-modal-filesystem-credentials";
import {addHelpers} from '@/services/helper';

var FileSaver = require('file-saver');

export default addHelpers({
    data() {
        return {
            importSettings: '',
            backuping: false,
            restoring: false
        };
    },

    methods: {
        optionsCopy() {
            let el=this.$refs['options'].$el;
            el.focus();
            el.select();
            document.execCommand('copy');
            this.$modal.alert({message: this.$t('backup.current_settings_copied_to_clipboard')});
        },

        optionsDownload() {
            var blob = new Blob([this.optionsString], {
                type: "text/plain;charset=utf-8"
            });

            FileSaver.saveAs(blob, "thegem_options.txt");
        },

        importFromFile($event) {
            const file = $event.target.files[0];
            $event.target.value = '';
            const reader = new FileReader();

            reader.onload = e => {
                try {
                    JSON.parse(e.target.result);
                } catch (e) {
                    this.$modal.alert({message:this.$t('backup.invalid_import_data')});
                    return;
                }

                this.importSettings = e.target.result;
            };
            reader.readAsText(file);
        },

        importFromText() {
            try {
                var settings = JSON.parse(this.importSettings);
            } catch (e) {
                this.$modal.alert({message:this.$t('backup.invalid_import_data')});
                return;
            }

            this.$store.dispatch('import', settings);
        },

        backup() {
            this.backuping = true;

            this.api('backup').then(
                response => {
                    this.backuping = false;
                    if (response.data && response.data.status === true) {
                        this.$modal.alert({message: this.$t('backup.backup_success')});
                        this.setExtra('backups',response.data.backups);
                    } else {
                        this.$modal.alert({message: this.$t('backup.backup_failed')});
                    }
                },
                () => {
                    this.backuping = false;
                    this.$modal.alert({message: this.$t('backup.backup_failed')});
                }
            );
        },

        restore(idx) {
            this.restoring = true;

            this.api('restore',{
                id: idx,
                credentials: this.getExtra('credentials')
            }).then(
                response => {
                    this.restoring = false;
                    if (response.data && response.data.status === true) {
                        this.$store.commit('backupRestored',response.data.options);
                        this.$modal.alert({message: this.$t('backup.restore_success')});
                    } else {
                        if (response.data && response.data.status && response.data.status.reason) {
                            if (response.data.status.reason == 'credentials') {
                                this.$modal.show(ToModalFilesystemCredentials, {
                                    html: response.data.status.form,
                                    doneCallback: () => {this.restore(idx);}
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
                    this.restoring = false;
                    this.$modal.alert({message: this.$t('backup.restore_failed')});
                }
            );
        },

        locationHash() {
            const url = new URL(window.location.href)
            return url.href.split(/[=#]/)[3]
        },
    },

    computed: {
        optionsString() {
            return this.getExtra('options_current_contents');
        },

        importSettingsIsValid() {
            try {
                JSON.parse(this.importSettings);
            } catch (e) {
                return false;
            }
            return true;
        },

        lastBackup() {
            let backups = this.getExtra('backups');
            if (backups.length == 0) {
                return this.$t('alert.no_last_backup');
            }

            return backups[0].dt;
        },

        hasBackup() {
            return this.getExtra('backups').length > 0;
        }
    },

    mounted() {
        if (this.locationHash() === 'autoBackup') this.backup()
    }
})
</script>
