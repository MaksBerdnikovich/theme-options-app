<template>
    <div class="dashboard-log">
        <div class="frame">
            <iframe width="100%" frameborder="0" scrolling="no" ref="iframe" src="https://democontent.codex-themes.com/plugins/thegem/theme/changelog/changelog.html"></iframe>
        </div>
    </div>
</template>

<script>
import { addHelpers } from '@/services/helper';

export default addHelpers({
    mounted: function () {
        window.addEventListener('message', (msg) => {
            if (msg.data && msg.data.iframeHeight) {
                let iframe = this.$refs['iframe'];
                iframe.height = "";
                iframe.height = msg.data.iframeHeight + "px";
            }
        })
    }
});
</script>

<style lang="scss">
    #thegem-options.dashboard {
        .dashboard-log {
            display: flex;
            flex: auto;
            width: 100%;
            max-height: calc(100vh - 230px);
            overflow: hidden;

            .frame{
                display: flex;
                width: 100%;
                height: 100%;
                overflow-y: scroll;
            }
        }
    }
</style>
