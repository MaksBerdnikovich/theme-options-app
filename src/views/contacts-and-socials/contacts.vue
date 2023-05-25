<template>
    <div>
        <to-panel id="panel.contact_top_area">
            <to-panel-group :label-title="$t('panel.contacts')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.contacts_and_socials_contacts_top_area') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[{name:'Contact_Top_Aria_Details.png'}]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="top_area_contacts_address" :label-title="$t('settings.address_details')"/>
                        </div>
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="top_area_contacts_phone" :label-title="$t('settings.phone_number')"/>
                        </div>
                    </div>
                    <to-separator></to-separator>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="top_area_contacts_fax" :label-title="$t('settings.fax_number')"/>
                        </div>
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="top_area_contacts_email" :label-title="$t('settings.email_address')"/>
                        </div>
                    </div>
                    <to-separator></to-separator>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="top_area_contacts_website" :label-title="$t('settings.website_url')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.contact_widget">
            <to-panel-group :label-title="$t('panel.contacts')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.contacts_and_socials_contacts_widget') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[{name:'Contact_Widget_Details.png'}]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="contacts_address" :blockIcon="false" :label-title="$t('settings.address_details')"/>
                        </div>
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="contacts_phone" :blockIcon="false" :label-title="$t('settings.phone_number')"/>
                        </div>
                    </div>
                    <to-separator></to-separator>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="contacts_fax" :blockIcon="false" :label-title="$t('settings.fax_number')"/>
                        </div>
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="contacts_email" :blockIcon="false" :label-title="$t('settings.email_address')"/>
                        </div>
                    </div>
                    <to-separator></to-separator>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2 col-tb-auto">
                            <to-block-contact option-prefix="contacts_website" :blockIcon="false" :label-title="$t('settings.website_url')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>
    </div>
</template>

<script>
    import {addHelpers} from '@/services/helper';

    export default addHelpers({
        data() {
            return {
            }
        }
    })
</script>
