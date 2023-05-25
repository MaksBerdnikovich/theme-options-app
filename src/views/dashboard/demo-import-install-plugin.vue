<template>
    <div class="dashboard-demo">
        <div class="caption light">{{ $t('dashboard.title_install_plugin') }}</div>
        <div class="text">{{ $t('dashboard.text_install_plugin') }}</div>
        <div class="link">
            <a :href="config.pluginUrl" class="to-btn to-btn-primary">{{config.pluginInstalled ? $t('dashboard.activate'):$t('dashboard.link_install_now')}}</a>
        </div>
    </div>
</template>


<style lang="scss">
    #thegem-options.dashboard {
        .dashboard-demo{
            display: flex;
            flex: auto;
            flex-direction: column;

            .caption{
                text-transform: uppercase;
            }

            .to-btn.to-btn-primary{
                max-width: 200px;
                margin-top: 30px;
            }
        }
    }
</style>

<script>
import { addHelpers } from '@/services/helper';
import config from '@/services/config';

export default addHelpers({
    data() {
        return {
            config: config,
        }
    },
});
</script>
