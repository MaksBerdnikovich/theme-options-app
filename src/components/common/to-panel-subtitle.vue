<template>
    <div class="to-panel-subtitle"><b><slot name="label"/></b></div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
#thegem-options {
    .to-panel-subtitle{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 40px;
        min-width: calc(100% + 25px);
        margin-left: -10px;

        text-align: center;
        font-size: 11px;
        text-transform: uppercase;
        color: $anthracite-color;

        background-color: $light-blue-background;
        border-radius: $element-border-radius;
    }
}

#thegem-options.theme-dark {
    .to-panel-subtitle{
        color: $dark-body-color;
        background-color: $anthracite-color;
    }
}
</style>
