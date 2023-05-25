<template>
    <ul v-bind:class="['to-panel-navigation',className]">
        <li v-for="panel of panels" v-bind:key="panel.id">
            <to-button :type="'secondary'" v-bind:key="panel.id" v-scroll-to="{container: scrollContainer, offset: scrollOffset, el:'#'+panel.id.replace('.','\\.')}" v-on:click="active(panel.id)" v-bind:class="{'active': activePanel === panel}">{{panel.title}}</to-button>
        </li>
    </ul>
</template>

<script>
import {bus} from '@/services/bus';

export default {
    props: {
        className: {
            type: String,
            required: false,
            default: ""
        },

        scrollContainer: {
            type: String,
            default: 'body'
        }
    },

    data: function () {
        return {
            panels: [],
            isActive: '',
            scrollPos: 0
        }
    },

    mounted () {
        window.addEventListener('scroll', this.onScroll)
    },

    beforeDestroy () {
        window.removeEventListener('scroll', this.onScroll)
    },

    computed: {
        activePanel() {
            if (this.panels.length == 0) {
                return '';
            }

            var el = document.getElementsByClassName('interface-interface-skeleton__content');
            var bodyRect = el.length>0 ? el[0].getBoundingClientRect():document.body.getBoundingClientRect();
            var scrollPos = el.length>0 ? this.scrollPos*0:this.scrollPos;

            let active = this.panels[0];

            for(let panel of this.panels) {
                let elemRect = document.getElementById(panel.id).getBoundingClientRect();
                let offsetY = elemRect.top - bodyRect.top - scrollPos;

                if (offsetY > 20) {
                    break;
                }
                active = panel;
            }

            return active;
        },

        scrollOffset() {
            return this.scrollContainer == 'body' ? -40 : -5;
        }
    },

    created() {
        bus.$on('panelAdd', panel => {
            this.panels.push(panel);
        });

        bus.$on('panelDestroy', uuid => {
            for (var idx in this.panels) {
                if (this.panels[idx].uuid == uuid) {
                    this.panels.splice(idx, 1);
                    break;
                }
            }
        });
    },

    methods: {
        onScroll() {
            var el = document.getElementsByClassName('interface-interface-skeleton__content');
            this.scrollPos = el.length > 0 ? el[0].scrollTop : window.scrollY;
        },

        active: function (panel) {
            this.isActive = panel;
        }
    }
};
</script>

<style lang="scss">
#thegem-options {
    .to-panel-navigation {
        display: flex;
        flex-direction: column;
        width: 100%;

        li {
            display: flex;
            align-items: center;
            margin-top: 20px;

            button {
                min-height: 30px;
                max-width: 100%;
                width: auto;
                border-radius: 25px;
                padding: 5px 15px;
                text-transform: none;
                font-size: 12px;
                line-height: 1.2;
                opacity: 1;

                text-align: center;

                &:hover{
                    color: $white-color;
                    background-color: $cyan-background;
                }

                &.active{
                    color: $white-color;
                    background-color: $cyan-background;
                }
            }

            .btn-text {
                padding-right: 0;
                text-align: left;
            }
        }

        &.horizontal {
            flex-direction: row;
            flex-wrap: wrap;

            li {
                margin: 5px;

                button {
                    min-height: 20px;
                    padding: 3px 10px;
                    font-size: 10px;
                }

                .btn-text {
                    padding-right: 0;
                }
            }
        }
    }
}

#thegem-options.theme-dark {
    .to-panel-navigation {
        button {
            &:hover{
                color: $white-color;
                background-color: $cyan-background;
                opacity: 1;
            }

            &.active{
                color: $white-color;
                background-color: $cyan-background;
            }
        }
    }
}
</style>
