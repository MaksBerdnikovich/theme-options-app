<template>
    <div class="to-modal-icon">

        <div class="to-modal-header">
            <div class="logo">
                <i><img src="@/assets/img/logo-dark.png"></i> <span>{{ $t('addicon.icon_library') }}</span>
            </div>
            <div class="search">
                <to-input :value="term" :icon="'search'" @input="setTerm($event)" :placeholder="$t('addicon.filter_by_name')"/>
            </div>
            <div class="close">
                <to-button icon="delete" v-on:click="$emit('close')"/>
            </div>
        </div>

        <div class="to-modal-content">

            <div class="navigate">
                <div v-on:click="setCurrentPack('')" :class="{'item': true, active: currentPack===''}">
                    <to-svg-icon name="po-allicons"/> {{ $t('addicon.all_icons') }}
                </div>
                <div v-for="pack in iconPacks" v-bind:key="pack.value" v-on:click="setCurrentPack(pack.value)" :class="{'item': true, active: currentPack===pack.value}">
                    <to-svg-icon :name="pack.value"/> {{ pack.title }}
                </div>
            </div>

            <div class="wrapper">

                <div class="title">{{ currentPackTitle }}</div>

                <div class="grid">
                    <RecycleScroller
                        class="icon-scroller"
                        :items="iconsRows"
                        :item-size="115"
                        key-field="id"
                        v-slot="{ item }"
                        ref="scroller"
                        v-prevent-parent-scroll>

                        <div class="icon-row">
                            <div class="icon" v-for="icon in item.icons" v-bind:key="icon.id"
                                 :class="{active: getOption(iconOption) == icon.code && getOption(packOption) == icon.pack, 'disable': icon.code == ''}"
                                 v-on:click="chooseIcon(icon)">
                                <div :class="{'icon-preview':true,'icon-spacer': icon.title == ''}" :style="icon.style" v-html="'&'+'#x'+icon.code+';'"></div>
                                <div class="icon-name">{{ icon.title }}</div>
                            </div>
                        </div>
                    </RecycleScroller>
                </div>

            </div>
        </div>

        <div class="to-modal-footer">

        </div>

    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';
import config from '@/services/config'

export default addHelpers({
    data() {
        // preprocess icons
        if (!config.iconPacks[0].iconsArray) {
            for(let pack of config.iconPacks) {
                let icons=pack.icons;
                pack.iconsArray=[];
                for(let iconCode in pack.icons) {
                    pack.iconsArray.push({
                        pack: pack.value,
                        code: iconCode,
                        title: icons[iconCode],
                        style: {'font-family':pack.fontFamily}
                    });
                }

                pack.iconsArray.sort((a,b)=>{
                    if (a.title === b.title) {
                        return 0;
                    }

                    return a.title < b.title ? -1 : 1;
                });
            }
        }

        return {
            term: '',
            currentPack: '',
            iconsRows: '',
            iconPacksSrc: config.iconPacks,
            iconsInRow: 7
        }
    },

    props: {
        iconOption: {
            type: String,
            required: true
        },
        packOption: {
            type: String,
            required: true
        },
        packs: {
            required: false,
        }
    },

    created() {
        this.updateIconsRows();
    },

    mounted() {
        let pack = this.getOption(this.packOption);
        if (pack) {
            this.setCurrentPack(pack);
        }
    },

    methods: {
        chooseIcon(icon) {
            if (icon.title == '') {
                return;
            }

            this.setOption(this.iconOption, icon.code);
            this.setOption(this.packOption, icon.pack);
            this.$emit('close');
            //this.updateIconsRows(true);
        },

        setTerm(term) {
            this.currentPack = '';
            this.term = term;
            this.updateIconsRows();
        },

        setCurrentPack(pack) {
            this.currentPack = pack;
            this.updateIconsRows();
        },

        updateIconsRows(keepScrollPosition) {
            let iconsInRow = this.iconsInRow;
            let iconsRows = [];
            let icons = [];
            let term = this.term.toLowerCase();

            for(let pack of this.iconPacks) {
                if (pack.value == this.currentPack || this.currentPack === '') {
                    for(let icon of pack.iconsArray) {
                        if (term === '' || icon.title.indexOf(term) >= 0) {
                            icons.push(icon);
                            if (icons.length == iconsInRow) {
                                iconsRows.push({
                                    icons: icons,
                                    id: JSON.stringify(icons)
                                });
                                icons = [];
                            }
                        }
                    }
                }
            }

            if (icons.length>0) {
                while (icons.length < iconsInRow) {
                    icons.push({title: '', style: '' , code: '' });
                }

                iconsRows.push({
                    icons: icons,
                    id: JSON.stringify(icons)
                });
            }

            this.iconsRows = iconsRows;

            if (!keepScrollPosition && this.$refs['scroller']) {
                this.$refs['scroller'].$el.scrollTop = 0;
            }
        }
    },

    computed: {
        iconPacks() {
            window.console.log(this.packs);

            let iconPacks = [];
            for(let pack of this.iconPacksSrc) {
                if (this.packs && this.packs.indexOf(pack.value) == -1) {
                    continue;
                }
                iconPacks.push(pack);
            }

            return iconPacks;
        },

        currentPackTitle() {
            for(let pack of this.iconPacks) {
                if (pack.value === this.currentPack) {
                    return pack.title;
                }
            }

            return this.$t('addicon.all_icons');
        },

    }
});
</script>

<style lang="scss">
#thegem-options {
    .to-modal-icon{
        position: relative;
        height: 100%;

        .to-modal-header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 60px;

            background-color: $white-background;
            box-shadow: $element-bottom-shadow;

            .logo{
                display: flex;
                align-items: center;
                margin-left: 20px;

                img{
                    max-width: 30px;
                }
                span{
                    text-transform: uppercase;
                    padding-left: 10px;
                    font-size: 14px;
                    font-weight: 300;
                    padding-top: 3px;
                }
            }

            .search{
                margin-left: auto;
                min-width: 230px;

                .to-input{
                    background-color: $light-main-background;
                    border-color: transparent;
                }
            }
            .close{
                .btn-icon{
                    width: 50px;
                    min-height: 50px;
                }
            }
        }

        .to-modal-content{
            display: flex;
            height: calc(100% - 60px);
            padding: 10px 0 10px 10px;

            .navigate{
                display: flex;
                flex-direction: column;
                width: 190px;
                height: 100%;
                overflow: hidden;

                border-radius: $element-border-radius;
                background-color: $white-background;

                .item{
                    display: flex;
                    align-items: center;
                    min-height: 30px;
                    padding-right: 10px;

                    transition: $element-transition;

                    cursor: pointer;

                    .svg-icon{
                        min-width: 35px;
                        text-align: center;
                    }
                    &.active,
                    &:hover{
                        background-color: $cyan-background;
                        color: $white-color;
                    }

                }
            }

            .wrapper{
                display: flex;
                flex-direction: column;
                margin-left: auto;
                width: calc(100% - 190px);

                .title{
                    display: flex;
                    min-height: 50px;
                    align-items: center;
                    padding: 0 30px;

                    font-size: 19px;
                    font-weight: 300;
                }

                .grid{
                    position: relative;
                    display: flex;
                    height: 100%;

                    .icon-scroller {
                        width: 100%;
                        height: calc(100% - 50px);
                        overflow: auto;
                        padding: 0 30px;

                        .icon-row {
                            display: flex;
                            margin: 0 -8px;

                            .icon{
                                position: relative;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                flex-direction: column;
                                overflow: hidden;
                                text-align: center;

                                width: calc(100% / 7);
                                height: 100px;
                                margin: 0 8px;
                                cursor: pointer;

                                background-color: $white-background;
                                border-radius: $element-border-radius;
                                transition: $element-transition;

                                &:before{
                                    content: '';
                                    position: absolute;
                                    top: 0;
                                    left: 0;
                                    width: 100%;
                                    height: 100%;
                                    border: 2px solid $cyan-color;
                                    border-radius: $element-border-radius;
                                    transition: $element-transition;
                                    opacity: 0;
                                }

                                &.active,
                                &:hover{
                                    opacity: 0.9;

                                    &:before{
                                        opacity: 1;
                                    }
                                }

                                .icon-preview{
                                    margin-bottom: 5px;
                                    font-size: 38px;
                                }

                                .icon-name{
                                    position: relative;
                                    width: 80%;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    overflow: hidden;
                                    margin-top: 5px;
                                    opacity: 0.5;
                                }

                                &.disable{
                                    visibility: hidden;
                                    transition: none;
                                }

                            }
                        }
                    }
                }
            }
        }
    }
}

#thegem-options.theme-dark {
    .to-modal-icon {

        .to-modal-header {
            background-color: $white-background;
            color: $light-body-color;

            .search {
                .to-input {
                    background-color: $light-main-background;
                    border-color: transparent;
                }
            }

            .close {
                .to-btn{
                    color: $light-body-color;
                    background-color: $white-background;
                }
            }
        }

        .to-modal-content{
            .navigate{
                background-color: $white-background;
            }

            .wrapper{
                color: $light-body-color;
            }
        }
    }
}

</style>
