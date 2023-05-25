<template>
    <div class="to-panel" :id="computedId">
        <div class="to-panel-title"><b>{{ computedTitle }}</b></div>
        <div class="to-panel-content"><slot/></div>
    </div>
</template>

<script>
import {bus} from '@/services/bus';

let uuid = 0;

export default {
    beforeCreate() {
        this.uuid='to-panel-'+uuid;
        uuid++;
    },

    props: {
        title: {
            type: String,
            required: false
        },
        id: {
            type: String,
            required: true
        },
    },

    computed: {
        computedTitle() {
            return this.title ? this.title : this.$t(this.id);
        },

        computedId() {
            return this.id ? this.id: uuid;
        }
    },

    mounted() {
        bus.$emit('panelAdd', {
            title: this.computedTitle,
            id: this.computedId,
            uuid: this.uuid
        });
    },

    beforeDestroy() {
        bus.$emit('panelDestroy',this.uuid);
    },
};
</script>

<style lang="scss">
#thegem-options {
    .to-panel {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        background-color: transparent;
        border: 0;

        .to-panel-title{
            display: flex;

            b{
                position: relative;
                display: flex;
                flex-basis: auto;
                min-height: 30px;
                align-items: flex-end;
                padding: 0 15px;

                font-size: 13px;
                color: $anthracite-color;

                background-color: $white-background;
                border-top-left-radius: $panel-border-radius;
                border-top-right-radius: $panel-border-radius;

                &:after{
                    content: '';
                    position: absolute;
                    right: -28px;
                    width: 0;
                    height: 0;
                    border-style: solid;
                    border-width: 28px 0 0 28px;
                    border-color: transparent transparent transparent $white-background;
                }
            }

        }

        .to-panel-content{
            background-color: $white-background;
            padding: 25px 20px 25px 15px;
            border-radius: $panel-border-radius;
            border-top-left-radius: 0;
        }

        .to-panel-separator{
            margin-top: 30px;

            &.first-of-type{
                margin-top: 0;
                margin-bottom: 30px;
            }

            &.next-of-type{
                margin: 30px 0;
            }

            &.last-of-type{
                margin-top: 30px;
                margin-bottom: 0;
            }
        }
    }

    .to-panel + .to-panel{
        margin-top: 10px;
    }

    /*@media (max-width: 1079px) {
        .to-panel{
            .to-panel-content{
                padding: 15px 10px 15px 15px;
            }
        }
    }*/
}

#thegem-options.theme-dark {
    .to-panel-title{
        b{
            background-color: $anthracite-background;
            color: $hoar-color;

            &:after{
                border-color: transparent transparent transparent $anthracite-background;
            }
        }
    }
    .to-panel-content{
        background-color: $anthracite-background;
    }
}
</style>
