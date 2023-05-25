<template>
    <div class="to-separator"></div>
</template>

<script>
    export default {}
</script>

<style lang="scss">
#thegem-options {
    .to-separator{
        display: flex;
        margin-top: 30px;
        border-bottom: 1px solid $hoar-color;
    }
}

#thegem-options.theme-dark {
    .to-separator{
        border-bottom: 1px solid $dark-border-color;
    }
}
</style>
