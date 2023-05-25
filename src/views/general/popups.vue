<template>
    <div>
        <to-panel id="panel.popups">
            <template v-for="popup in getOption('thegemPopups')">
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

                <div class="to-panel-separator next-of-type" v-if="getPopupOption(popup, 'active')" v-bind:key="popup.key + '_2'">
                    <to-panel-group :label-title="$t('popups.popups_template')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div v-html="$t('info.popups_template')"/>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
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
                                <div class="col-2">
                                    <to-label type="text-separator">{{$t('general.or')}}</to-label>
                                    <to-link :href="popupsCreateUrl" icon="edit-file" type="systems" target="_blank">{{$t('button.create_template')}}</to-link>
                                </div>
                            </div>
                        </div>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
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
                                <div class="col-4">
                                    <to-switch
                                        :value="getPopupOption(popup, 'show_after_x_page_views')"
                                        @input="setPopupOption(popup, 'show_after_x_page_views', $event)"
                                    />
                                </div>
                                <div class="col-4" v-if="getPopupOption(popup, 'show_after_x_page_views')">
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
                                <div class="col-4">
                                    <to-switch
                                        :value="getPopupOption(popup, 'show_up_to_x_times')"
                                        @input="setPopupOption(popup, 'show_up_to_x_times', $event)"
                                    />
                                </div>
                                <div class="col-4" v-if="getPopupOption(popup, 'show_up_to_x_times')">
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
                                <div class="col-3">
                                    <to-label>{{$t('popups.show_on_mobile')}}</to-label>
                                    <to-switch
                                        :value="getPopupOption(popup, 'show_on_mobile')"
                                        @input="setPopupOption(popup, 'show_on_mobile', $event)"
                                    />
                                </div>
                                <div class="col-3">
                                    <to-label>{{$t('popups.show_on_tablet')}}</to-label>
                                    <to-switch
                                        :value="getPopupOption(popup, 'show_on_tablet')"
                                        @input="setPopupOption(popup, 'show_on_tablet', $event)"
                                    />
                                </div>
                            </div>
                        </div>
                    </to-panel-group>

                    <to-panel-group v-if="isWooCommerce" :label-title="$t('popups.display')">
                        <template v-slot:tooltip>
                            <div class="help-tooltip-text">
                                <div class="info">{{ $t('info.popups_display') }}</div>
                            </div>
                        </template>
                        <div class="to-changed-settings">
                            <div class="form-grid">
                                <div class="col-2">
                                    <to-select
                                        :value="getPopupOption(popup, 'display')"
                                        @input="setPopupOption(popup, 'display', $event)"
                                        :options="popupsDisplay"
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
            popupsDisplay: [
                {label: i18n.t('popups.entire_site'), value: 'entire_site'},
                {label: i18n.t('popups.entire_woocommerce'), value: 'entire_woocommerce'},
                {label: i18n.t('popups.excluding_woocommerce'), value: 'excluding_woocommerce'},
            ]
        }
    },

    methods: {
        getPopupOption(popup, option) {
            return this.getOption('thegemPopups.' + popup.key + '.' + option);
        },

        setPopupOption(popup, option, value) {
            this.setOption('thegemPopups.' + popup.key + '.' + option, value);
            this.autoAddNewPopup();
        },

        autoAddNewPopup() {
            let popups = this.getOption('thegemPopups');
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
                    display: 'entire_site',
                    images_preloading: '',
                    id: `thegem-popup-${Math.floor(Date.now() * Math.random())}`,
                    key: lastIdx < 0 ? 0 : (popups[lastIdx].key + 1),
                });
                this.setOption('thegemPopups', popups);
            }
        },

        resetPopupsCookie(popup) {
            this.setPopupOption(popup, 'id', `thegem-popup-${Math.floor(Date.now() * Math.random())}`)

            this.$modal.confirm({
                title: this.$t('popups.cookie'),
                htmlMessage: this.$t('popups.reset_cookie_confirm')
            }).then( (result) => {
                if (result) {
                    this.$store.dispatch('save');
                }
            });
        },

        showPreview(item) {
            window.open(item.preview,'_blank');
        },

        showEditPage(item) {
            window.open(item.edit,'_blank');
        },
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
