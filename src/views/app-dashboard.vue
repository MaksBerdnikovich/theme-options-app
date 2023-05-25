<template>
    <div id="thegem-options" class="dashboard">
        <div class="dashboard-title">
            <div class="text">
                <b>{{ $t('dashboard.welcome') }}</b>
                <span class="light" v-if="!config.activated">{{ $t('dashboard.gratis') }}</span>
                <span class="light" v-if="config.activated">{{ $t('dashboard.gratis_active') }}</span>
            </div>
            <div class="logo">
                <div class="version"><span class="light">{{ version }}</span></div>
                <div class="element"><img src="@/assets/img/backery-logo.png"></div>
                <div class="thegem"><img src="@/assets/img/thegem-logo.png"></div>
                <div class="update" v-if="config.themeUpdate"><button type="button" v-on:click="opeUrlInNewTab(config.themeUpdate.updateUrl)">Update to {{ config.themeUpdate.version }}</button></div>
            </div>
        </div>

        <div class="dashboard-wrapper">
            <div class="navigate">
                <to-dashboard-tab page="thegem-dashboard-welcome"></to-dashboard-tab>
                <to-dashboard-tab page="install-required-plugins"></to-dashboard-tab>
                <to-dashboard-tab :page="config.importPage"></to-dashboard-tab>
                <!--<to-dashboard-tab page="manual-and-support"></to-dashboard-tab>-->
                <to-dashboard-tab page="thegem-dashboard-system-status"></to-dashboard-tab>
                <to-dashboard-tab page="thegem-dashboard-changelog"></to-dashboard-tab>
            </div>
            <div class="content">
                <router-view/>
            </div>
        </div>

        <modals-container/>
    </div>
</template>

<script>
import { addHelpers } from '@/services/helper';
import config from '@/services/config';

export default addHelpers({
    data() {
        return {
            config: config
        };
    },

    created() {
    },

    computed: {
        version() {
            return config.version;
        }
    },

    methods: {
    },
});
</script>
