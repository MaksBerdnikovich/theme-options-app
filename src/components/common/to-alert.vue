<template>
    <div class="to-alert">
        <div class="icon">
            <to-svg-icon :name="icon ? icon : icon.default"/>
        </div>
        <div class="text">
            <span>{{ title }}</span>
            <router-link v-if="route" :to="route" :target="target">{{ titleLink }}</router-link>
            <a v-if="href" :href="href" :target="target">{{ titleLink }}</a>
            <span>{{ titleAfterLink }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            titleLink: {
                type: String,
                required: false
            },
            titleAfterLink: {
                type: String,
                required: false
            },
            route: {
                type: String,
                required: false
            },
            href: {
                type: String,
                required: false
            },
            target: {
                type: String,
                required: false,
                default: '_self'
            },
            icon: {
                type: String,
                required: false,
                default: 'info'
            }
        },
    }
</script>

<style lang="scss">
#thegem-options {
    .to-alert{
        display: flex;
        align-items: center;
        color: $light-gray-color;
        line-height: 1.5;
        text-align: left;

        &.danger{
            color: $red-color;
        }

        .icon{
            svg{
                margin: 5px 5px 0 0;
            }
        }
        .text{
            a{
                padding: 0 5px;
                color: $cyan-color;
                text-decoration: underline;
            }
        }
    }
}
</style>
