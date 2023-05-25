<template>
    <div class="dashboard-plugins">
        <div class="block-info">
            <div class="caption light">{{ $t('dashboard.title_install_update_plugin') }}</div>
            <div class="text">{{ $t('dashboard.text_install_update_plugin') }}</div>
        </div>
        <div class="block-action">

        </div>
    </div>
</template>

<style lang="scss">
    #thegem-options.dashboard {
        .dashboard-plugins{
            display: flex;
            flex: auto;
            flex-direction: column;
        }
    }
</style>
