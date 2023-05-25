<template>
    <div>
        <div>
            INPUT
            <to-input :value="getOption('theme_version')" @input="setOption('theme_version',$event)"/> {{ $store.state.theme_version }}
        </div>
        <div>
            TEXTAREA
            <to-textarea :value="getOption('theme_version')" @input="setOption('theme_version',$event)" v-model="$store.state.theme_version"/> {{ $store.state.theme_version }}
        </div>
        <div>
            SWITCH:
            <to-switch v-model="switchValue" />
        </div>
        <div>
            COLOR PICKER:
            <to-color-picker v-model="color" label-title="Color" />
            {{ color }}
        </div>
        <div>
            SLIDER:
            <to-slider :min="10" :max="100" v-model="slider" />
        </div>
        <div>
            BUTTONS:
            <to-button icon="sun" v-on:click="onClick()">Button</to-button>
            <to-button icon="sun"></to-button>
            <to-button>button</to-button>
        </div>
        <div>
            TOGGLE:
            <to-toggle-button false-value-icon="broken-link" true-value-icon="link" v-model="switchValue">Button</to-toggle-button>
        </div>
        <div>
            RADIO TOGGLE:
            <to-radio-toggle v-model="radioToggle" :options="[
                {icon:'aspect-ratio',title:'GIF',value:'gif',tooltip:'GIF'},
                {icon:'pen',title:'SVG',value:'svg'},
                {icon:'source-code',title:'CSS',value:'css'}
            ]"/>
        </div>
        <div>
            RADIO ICON:
            <to-radio-icon v-model="radioToggle" :options="[
                {icon:'aspect-ratio',title:'GIF',value:'gif'},
                {icon:'pen',title:'SVG',value:'svg'},
                {icon:'source-code',title:'CSS',value:'css'}
            ]"/>
        </div>
        <div>
            TOOLTIP
            <button type="button" v-tooltip.top-center="'TOOLTIP'">HOVER ME</button>
        </div>
        <div>
            HELP TOOLTIP
            <to-help-tooltip>
                <h1>Tooltip</h1>
                This is a tooltip contents
            </to-help-tooltip>
        </div>
        <div>
            CODEMIRROR CSS
            <to-codemirror lang="css" v-model="codeCss"/>
        </div>
        <div>
            CODEMIRROR JS
            <to-codemirror lang="js" v-model="codeJs"/>
        </div>
        <div>
            CODEMIRROR HTML
            <to-codemirror lang="html" v-model="codeHtml"/>
        </div>
        <div>
            IMAGE SELECTOR
            <to-file-select v-model="image"/>
        </div>
        <div>
            RESPONSIVE SELECTOR
            <to-dropdown-icon v-model="responsive" :options="[
                {icon:'monitor',value:'desktop'},
                {icon:'android',value:'mobile'},
            ]"/>
        </div>
        <div>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            BLOCKS
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>
        <div>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            <to-block-padding option-prefix="page_padding" />
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>
        <div>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            <to-block-label-slider-input label-icon="left" label-title="Left" :min="0" :max="100" unit="%" v-model="blockLabelSliderInput" />
            <hr/>
            {{ blockLabelSliderInput }}
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>
        <div>
            <to-select v-model="select" :options="[
                {value:'1',label:'val1',icon:'monitor'},
                {value:'2',label:'val2',icon:'android'},
                {value:'3',label:'val3',icon:'monitor'}
            ]"></to-select>
            {{ select }}
        </div>
        <div>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            <to-block-font option-prefix="main_menu"></to-block-font>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>
        <div>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            <to-block-gradient option-prefix="gradient"></to-block-gradient>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>
        <div>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            <to-block-logo-select option-image="image" option-width="image_width" label-title="Mobile logo width" />
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>
        <div>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            <!--<to-block-icon-select option-prefix="image" />-->
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>
        <div>
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
            <to-block-switch-input
                option-switch="facebook_active" option-input="facebook_link"
                switch-label-icon="align-justify" switch-label-title="Facebook"
                input-label-title="Facebook link"
            />
            <hr/><hr/><hr/><hr/><hr/><hr/><hr/><hr/>
        </div>
        <div>
            <to-block-icon option-prefix="default.title_icon"/>
        </div>
        <div>
            <router-link to="/general/theme-layout/panel.scroll_to_top">General / Theme Layout -> scroll to top</router-link>
        </div>
        <div>
            <to-button-gallery :images="[
                {src:'/1.png', thumb: '/1.png', caption:'1'},
                {src:'/2.png', thumb: '/1.png', caption:'2'},
                {src:'/3.png', thumb: '/1.png', caption:'3'}
            ]">GALLERY</to-button-gallery>
        </div>
        <div>
            WYSIWYG<br/>
            #{{ wysiwyg }}#
            <to-wysiwyg v-model="wysiwyg"></to-wysiwyg>
        </div>
    </div>
</template>

<script>
    import { addHelpers } from '@/services/helper';

    export default addHelpers({
        data: () => { return {
            select: '1',
            color: '',
            slider: 10,
            switchValue: false,
            radioToggle: 'gif',
            codeCss: '.to-switch-btn {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}',
            codeJs: 'function () {\n console.log("hello");\n}',
            codeHtml: '<div>Hello<br/></div>',
            image: '',
            responsive: 'desktop',
            wysiwyg: '<strong>Bold</strong> Test',
            blockLabelSliderInput: 0
        }},

        methods: {
            onClick: function() {
                window.console.log(document.getElementsByClassName('vs__dropdown-menu'));
            }
        }
    })
</script>
