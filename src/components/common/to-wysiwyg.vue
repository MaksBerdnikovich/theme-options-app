<template>
    <!-- without this div post-settings.vue is buggy -->
    <div>
        <to-textarea :id="uuid" :value="value" @input="updateInput"  :height="height" />
    </div>
</template>

<script>
import config from '@/services/config';

let uuid = 0;

export default {
    beforeCreate() {
        this.uuid='to-wysiwyg-'+uuid;
        uuid++;
    },

data() {
        return {
            intervalTimer: null
        };
    },

    model: {
        prop: "value",
        event: "input"
    },

    props: {
        value: [String, Number],
        bodyClass: {
            type: String,
            required: false,
            default: 'page_title_content'
        },

        height: {
            type: String,
            required: false,
            default: '200px'
        }
    },

    methods: {
        updateInput: function (e) {
            // cleanup data-mce-* attributes
            e = e.replace(/data-mce-[a-z]+="[^"]*"/,'');

            this.$emit("input", e);
        },

        getJsWpEditor() {
            if (!window.wp) {
                return;
            }

            if (window.wp.editor && window.wp.editor.initialize) {
                return window.wp.editor;
            }

            if (window.wp.oldEditor && window.wp.oldEditor.initialize) {
                return window.wp.oldEditor;
            }
        }
    },

    mounted() {
        var editor = this.getJsWpEditor();

        if (!editor) {
            return;
        }

        const self=this;

        setTimeout(() => {
            var settings = JSON.parse(JSON.stringify(window.wp.editor.getDefaultSettings()));

            settings.mediaButtons = true;
            settings.tinymce.content_css += ',' + config.styleEditorCssUrl;
            settings.tinymce.body_class += ' post-type-' + config.postType;
            settings.tinymce.body_class += ' ' + this.bodyClass;
            settings.quicktags.buttons = 'em,strong,link';

            settings.tinymce.toolbar1 = "formatselect,bold,italic,bullist,numlist,blockquote,alignleft,aligncenter,alignright,link,wp_more,spellchecker,fullscreen,wp_adv";
            settings.tinymce.toolbar2 = "styleselect,strikethrough,hr,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help";
            settings.tinymce.wordpress_adv_hidden = false;
            settings.tinymce.style_formats = config.wysiwygFormats.slice();

// css/style-editor.css
            //console.log(settings);
            settings.tinymce.setup = (editor) => {
                editor.on('change', (event) => {
                    if (!event.lastLevel) {
                        window.tinyMCE.triggerSave();
                    } else {
                        self.updateInput(event.level.content);
                    }
                });
            };

            editor.initialize(this.uuid, settings);
        }, 200);

        this.intervalTimer = setInterval( () => {
            window.tinyMCE.triggerSave();
        }, 2000);
    },

    beforeDestroy() {
        var editor = this.getJsWpEditor();

        if (!editor) {
            return;
        }

        clearInterval(this.intervalTimer);
        editor.remove(this.uuid);
    }
}
</script>
