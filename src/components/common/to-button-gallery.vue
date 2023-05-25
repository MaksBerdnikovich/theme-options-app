<template>
    <to-button :type="type" :icon="icon" :disabled="disabled" v-on:click="click()"><slot/></to-button>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            required: false,
            default: 'default'
        },
        icon: {
            type: String,
            required: false,
            default: 'gallery'
        },
        disabled:
        {
            type: Boolean,
            required: false,
            default: false
        },
        images: {
            type: Array,
            required: true
        }
    },

    methods: {
        click() {
            let items = [];

            let srcItems = JSON.parse(JSON.stringify(this.images))

            for(let image of srcItems) {
                if (image.name) {
                    var fileName = image.name.replace(/\.png$/,'') + '.jpg';
                    image.src = '//codex-themes.com/thegem/theme-options-tooltip-screenshots/full/' + fileName;
                    //image.thumb = '//codex-themes.com/thegem/theme-options-tooltip-screenshots/thumb/' + fileName;
                }
                items.push({
                    src: image.src,
                    opts: {
                        caption: image.caption,
                        thumb: image.thumb ? image.thumb : image.src
                    }
                });
            }

            window.jQuery.fancybox.open(items, {
                loop : false
            });
        }
    }
}
</script>

<style lang="scss">
#thegem-options {
    .to-button-gallery-gallery {
        display: none;
    }
}
</style>
