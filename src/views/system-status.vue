<template>
    <div>
        <to-panel id="panel.theme">
            <to-panel-group :label-title="$t('panel.theme_version')">
                {{ themeVersion }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.registration')">
                {{ systemStatus.activated }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.thegem_elements')">
                {{ systemStatus.pluginElementsActive }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.page_builder')">
                {{ systemStatus.pageBuilderVersion }}
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.permissions">
            <to-panel-group :label-title="$t('panel.stylesheets_writable')">
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.uploads_folder_writable')">
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.api_server_connection')">
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.server_environment">
            <to-panel-group :label-title="$t('panel.php_version')">
                {{ systemStatus.phpVersion }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.php_memory_limit')">
                {{ formattedSystemStatus.phpMemoryLimit }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.php_time_limit')">
                {{ systemStatus.phpTimeLimit }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.php_max_input_vars')">
                {{ systemStatus.phpMaxInputVars }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.php_post_max_size')">
                {{ formattedSystemStatus.phpPostMaxSize }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.php_upload_limit')">
                {{ formattedSystemStatus.phpUploadMaxFilesize }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.connection_time_limit')">
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.wordpress_environment">
            <to-panel-group :label-title="$t('panel.wp_version')">
                {{ systemStatus.wpVersion }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.wp_filesystem')">
                {{ formattedSystemStatus.wpFileSystem }}
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.language')">
                {{ systemStatus.blogLanguage }}
            </to-panel-group>
        </to-panel>
    </div>
</template>


<script>
import {addHelpers} from '@/services/helper';
import config from '@/services/config';

export default addHelpers({
    computed: {
        themeVersion() {
            return config.version;
        },

        systemStatus() {
            return config.systemStatus;
        },

        formattedSystemStatus() {
            var wpFileSystem = {
                direct: this.$t("filesystem.direct"),
                ssh2: this.$t("filesystem.ssh2"),
                ftpext: this.$t("filesystem.ftpext"),
                ftpsockets: this.$t("filesystem.ftpsockets")
            };

            return {
                phpMemoryLimit: this.formatBytes(config.systemStatus.phpMemoryLimit),
                phpPostMaxSize: this.formatBytes(config.systemStatus.phpPostMaxSize),
                phpUploadMaxFilesize: this.formatBytes(config.systemStatus.phpUploadMaxFilesize),
                wpFileSystem: wpFileSystem[config.systemStatus.wpFileSystem]
            }
        }
    },

    methods: {
        formatBytes(bytes, decimals = 2) {
            if (bytes === 0) return '0B';

            const k = 1024;
            const dm = decimals < 0 ? 0 : decimals;
            const sizes = ['B', 'K', 'M', 'G'];

            const i = Math.floor(Math.log(bytes) / Math.log(k));

            return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
        }
    },
})
</script>
