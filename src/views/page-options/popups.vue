<template>
    <div>
        <to-panel id="panel.popups">
            <to-panel-group :label-title="$t('panel.popups')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info"><div v-html="$t('info.p_options_popups_layout_source')"/></div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-1 col-tb-1">
                            <to-select :value="getOption('popups_item_data.popups_layout_source')" @input="setOption('popups_item_data.popups_layout_source',$event)" :options="popupsLayoutSource"></to-select>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <div class="to-panel-separator" v-if="getOption('popups_item_data.popups_layout_source') === 'custom'">
                <template v-for="popup in getOption('popups_item_data.thegemPopups')">
                    <to-panel-group :label-title="$t('popups.popups_add')" v-bind:key="popup.key + '_1'">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">{{ $t('info.popups_add_new') }}</div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <to-switch
                                :value="getPopupOption(popup, 'active')"
                                @input="setPopupOption(popup, 'active', $event)"
                            />
                        </div>
                    </to-panel-group>

                    <div class="to-panel-separator next-of-type " v-if="getPopupOption(popup, 'active')" v-bind:key="popup.key + '_2'">
                        <to-panel-group :label-title="$t('popups.popups_template')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div v-html="$t('info.popups_template')"/>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-1">
                                        <to-label>{{$t('popups.template')}}</to-label>
                                        <to-select
                                            :value="getPopupOption(popup, 'template')"
                                            @input="setPopupOption(popup, 'template', $event)"
                                            :options="popupsTemplatesList"
                                            v-on:right-button-clicked="showPreview($event)"
                                            v-on:edit-button-clicked="showEditPage($event)"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-1">
                                        <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                        <to-link :href="popupsCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                    </div>
                                </div>
                            </div>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-1">
                                        <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                        <to-link :href="popupsImportUrl" icon="advertisement" type="systems" target="_blank">{{$t('button.import_template')}}</to-link>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.popups_triggers')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div v-html="$t('info.popups_triggers')"/>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <to-block-popups-trigger
                                    :class="'popups-trigger--po'"
                                    :value="getPopupOption(popup, 'triggers')"
                                    @input="setPopupOption(popup, 'triggers', $event)"
                                />
                            </div>
                        </to-panel-group>

                        <to-panel-subtitle v-slot:label>{{ $t('popups.popups_additional_options') }}</to-panel-subtitle>

                        <to-panel-group :label-title="$t('popups.cookie')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_cookie') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-2">
                                        <to-label>{{$t('popups.cookie_time')}}</to-label>
                                        <to-input
                                            :value="getPopupOption(popup, 'cookie_time')"
                                            @input="setPopupOption(popup, 'cookie_time', $event)"
                                        />
                                    </div>
                                    <div class="col-4 aside--bottom">
                                        <to-button
                                            icon="restore" type="systems" style="min-width: 150px;"
                                            v-on:click="resetPopupsCookie(popup)">
                                            {{$t('button.reset_cookie')}}
                                        </to-button>
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.show_after_x_page_views')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_show_after_x_page_views') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch
                                            :value="getPopupOption(popup, 'show_after_x_page_views')"
                                            @input="setPopupOption(popup, 'show_after_x_page_views', $event)"
                                        />
                                    </div>
                                    <div class="col-auto" v-if="getPopupOption(popup, 'show_after_x_page_views')">
                                        <to-label>{{$t('popups.show_page_views')}}</to-label>
                                        <to-input
                                            :value="getPopupOption(popup, 'show_page_views')"
                                            @input="setPopupOption(popup, 'show_page_views', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.show_up_to_x_times')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_show_up_to_x_times') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch
                                            :value="getPopupOption(popup, 'show_up_to_x_times')"
                                            @input="setPopupOption(popup, 'show_up_to_x_times', $event)"
                                        />
                                    </div>
                                    <div class="col-auto" v-if="getPopupOption(popup, 'show_up_to_x_times')">
                                        <to-label>{{$t('popups.show_popup_count')}}</to-label>
                                        <to-input
                                            :value="getPopupOption(popup, 'show_popup_count')"
                                            @input="setPopupOption(popup, 'show_popup_count', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.hide_for_logged_in_users')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_hide_for_logged_in_users') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch
                                            :value="getPopupOption(popup, 'hide_for_logged_in_users')"
                                            @input="setPopupOption(popup, 'hide_for_logged_in_users', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.show_on_devices')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_show_on_devices') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-label>{{$t('popups.show_on_mobile')}}</to-label>
                                        <to-switch
                                            :value="getPopupOption(popup, 'show_on_mobile')"
                                            @input="setPopupOption(popup, 'show_on_mobile', $event)"
                                        />
                                    </div>
                                    <div class="col-auto">
                                        <to-label>{{$t('popups.show_on_tablet')}}</to-label>
                                        <to-switch
                                            :value="getPopupOption(popup, 'show_on_tablet')"
                                            @input="setPopupOption(popup, 'show_on_tablet', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-panel-group :label-title="$t('popups.images_preloading')">
                            <template v-slot:tooltip>
                                <div class="help-tooltip-text">
                                    <div class="info">{{ $t('info.popups_images_preloading') }}</div>
                                </div>
                            </template>
                            <div class="to-changed-settings">
                                <div class="form-grid">
                                    <div class="col-auto">
                                        <to-switch
                                            :value="getPopupOption(popup, 'images_preloading')"
                                            @input="setPopupOption(popup, 'images_preloading', $event)"
                                        />
                                    </div>
                                </div>
                            </div>
                        </to-panel-group>

                        <to-separator />
                    </div>
                </template>
            </div>
        </to-panel>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';
import config from '@/services/config';
import i18n from '@/services/i18n';

export default addHelpers({
    data() {
        const popupsTemplatesList = JSON.parse(JSON.stringify(config.popupsTemplates));
        for(let item of popupsTemplatesList) {
            if (item.preview) {
                item.rightButton = {icon: 'eye'};
            }

            if (item.edit) {
                item.editButton = {icon: 'pencil-drawing', name: i18n.t('button.edit_template')};
            }
        }

        return {
            popupsTemplatesList,
            popupsLayoutSource: [
                {label: i18n.t('general.default_settings_po'), value: 'default'},
                {label: i18n.t('general.custom_settings'), value: 'custom'},
                {label: i18n.t('general.disabled'), value: 'disabled'},
            ]
        }
    },

    methods: {
        getPopupOption(popup, option) {
            return this.getOption('popups_item_data.thegemPopups.' + popup.key + '.' + option);
        },

        setPopupOption(popup, option, value) {
            this.setOption('popups_item_data.thegemPopups.' + popup.key + '.' + option, value);
            this.autoAddNewPopup();
        },

        autoAddNewPopup() {
            let popups = this.getOption('popups_item_data.thegemPopups');
            let lastIdx = popups.length-1;

            if (lastIdx<0 || popups[lastIdx].active) {
                popups.push({
                    active: '',
                    template: '',
                    triggers: {},
                    show_after_x_page_views: '',
                    show_page_views: '2',
                    show_up_to_x_times: '',
                    show_popup_count: '1',
                    cookie_time: '30',
                    hide_for_logged_in_users: '',
                    show_on_mobile: '',
                    show_on_tablet: '',
                    images_preloading: '',
                    id: `thegem-popup-${Math.floor(Date.now() * Math.random())}`,
                    key: lastIdx < 0 ? 0 : (popups[lastIdx].key + 1),
                });
                this.setOption('popups_item_data.thegemPopups', popups);
            }
        },

        markAsSaved() {
            this.setOption('options_outside_parameter_modified', false);
            this.setOption('options_saved_contents', this.getOption('options_current_contents'))
        },

        save() {
            // second saving
            els = document.getElementsByClassName('editor-post-publish-button');
            if (els.length > 0) {
                els[0].click();
                this.markAsSaved();
                return;
            }

            // first saving
            let els = document.getElementsByClassName('editor-post-publish-panel__toggle');
            if (els.length > 0) {
                els[0].click();
                setTimeout( ()=>{
                    els = document.getElementsByClassName('editor-post-publish-button');
                    if (els.length > 0) {
                        els[els.length-1].click();
                        return;
                    }
                }, 100);
                this.markAsSaved();
                return;
            }

            // page builder
            let el = document.getElementById('publish');
            if (el) {
                el.click();
                this.markAsSaved();
                return;
            }

            // category
            els = document.getElementsByClassName('edit-tag-actions');
            if (els.length>0) {
                let buttons = els[0].getElementsByClassName('button-primary');
                if (buttons.length>0) {
                    buttons[0].click();
                    this.markAsSaved();
                    return;
                }
            }
        },

        resetPopupsCookie(popup) {
            this.setPopupOption(popup, 'id', `thegem-popup-${Math.floor(Date.now() * Math.random())}`)

            this.$modal.confirm({
                title: this.$t('popups.cookie'),
                htmlMessage: this.$t('popups.reset_cookie_confirm')
            }).then( (result) => {
                if (result) {
                    this.save();
                }
            });
        },

        showPreview(item) {
            window.open(item.preview,'_blank');
        },

        showEditPage(item) {
            window.open(item.edit,'_blank');
        }
    },

    computed: {
        isWooCommerce() {
            return config.isWooCommerce;
        },

        popupsCreateUrl(){
            return config.popupsCreateUrl
        },

        popupsImportUrl(){
            return config.popupsImportUrl
        },
    },

    mounted() {
        this.autoAddNewPopup();
    }
})
</script>
