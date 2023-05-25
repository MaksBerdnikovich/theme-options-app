<template>
    <div>
        <to-panel id="panel.contact_forms">
            <to-panel-subtitle v-slot:label>{{ $t('panel.contact_forms_light') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.default_input')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_contact_form_light_style_input') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Contact_Forms_Input_Defaults_Light.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('contact_form_light_input_color')" @input="setOption('contact_form_light_input_color',$event)" :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('contact_form_light_input_background_color')" @input="setOption('contact_form_light_input_background_color',$event)" :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('contact_form_light_input_border_color')" @input="setOption('contact_form_light_input_border_color',$event)" :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker :value="getOption('contact_form_light_input_placeholder_color')" @input="setOption('contact_form_light_input_placeholder_color',$event)" :label-title="$t('colors.placeholder_color')"/>
                        </div>
                    </div>
                </div>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker :value="getOption('contact_form_light_input_icon_color')" @input="setOption('contact_form_light_input_icon_color',$event)" :label-title="$t('colors.icon_color')"/>
                        </div>
                    </div>
                </div>
                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_button')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_contact_form_light_style_button') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Contact_Forms_Button_Defaults_Light.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-button option-prefix="contact_form_light"></to-block-button>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.label')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_contact_form_light_style_label') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('contact_form_light_label_color')"
                                @input="setOption('contact_form_light_label_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.contact_forms_dark') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.default_input')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_contact_form_dark_style_input') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Contact_Forms_Input_Defaults_Dark.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('contact_form_dark_input_color')"
                                @input="setOption('contact_form_dark_input_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('contact_form_dark_input_background_color')"
                                @input="setOption('contact_form_dark_input_background_color',$event)"
                                :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('contact_form_dark_input_border_color')"
                                @input="setOption('contact_form_dark_input_border_color',$event)"
                                :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('contact_form_dark_input_placeholder_color')"
                                @input="setOption('contact_form_dark_input_placeholder_color',$event)"
                                :label-title="$t('colors.placeholder_color')"/>
                        </div>
                    </div>
                </div>

                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('contact_form_dark_input_icon_color')"
                                @input="setOption('contact_form_dark_input_icon_color',$event)"
                                :label-title="$t('colors.icon_color')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_button')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_contact_form_dark_style_button') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Contact_Forms_Button_Defaults_Dark.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <to-block-button option-prefix="contact_form_dark"></to-block-button>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.label')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_contact_form_dark_style_label') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('contact_form_dark_label_color')"
                                @input="setOption('contact_form_dark_label_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                    </div>
                </div>

            </to-panel-group>
        </to-panel>

        <to-panel id="panel.newsletter_forms">
            <to-panel-subtitle v-slot:label>{{ $t('panel.newsletter_forms_content') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.default_input')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_content_input') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Newsletter_Forms_In_Content_Input_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_input_color')"
                                @input="setOption('mailchimp_content_input_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_input_background_color')"
                                @input="setOption('mailchimp_content_input_background_color',$event)"
                                :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_input_border_color')"
                                @input="setOption('mailchimp_content_input_border_color',$event)"
                                :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_input_placeholder_color')"
                                @input="setOption('mailchimp_content_input_placeholder_color',$event)"
                                :label-title="$t('colors.placeholder_color')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_button')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_content_button') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Newsletter_Forms_In_Content_Button_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_button_text_color')"
                                @input="setOption('mailchimp_content_button_text_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_button_hover_text_color')"
                                @input="setOption('mailchimp_content_button_hover_text_color',$event)"
                                :label-title="$t('colors.text_color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_button_background_color')"
                                @input="setOption('mailchimp_content_button_background_color',$event)"
                                :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_button_hover_background_color')"
                                @input="setOption('mailchimp_content_button_hover_background_color',$event)"
                                :label-title="$t('colors.background_hover')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.label')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_content_label') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_label_color')"
                                @input="setOption('mailchimp_content_label_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.description')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_content_description') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_content_text_color')"
                                @input="setOption('mailchimp_content_text_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                    </div>
                </div>

            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.newsletter_forms_sidebar') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.form_background')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_sidebars_background') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_background_color')"
                                @input="setOption('mailchimp_sidebars_background_color',$event)"
                                :label-title="$t('general.color')"
                            />
                        </div>
                    </div>
                </div>

            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_input')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_sidebars_input') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Newsletter_Forms_In_Sidebars_Input_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_input_color')"
                                @input="setOption('mailchimp_sidebars_input_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_input_background_color')"
                                @input="setOption('mailchimp_sidebars_input_background_color',$event)"
                                :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_input_border_color')"
                                @input="setOption('mailchimp_sidebars_input_border_color',$event)"
                                :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_input_placeholder_color')"
                                @input="setOption('mailchimp_sidebars_input_placeholder_color',$event)"
                                :label-title="$t('colors.placeholder_color')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_button')">
                 <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_sidebars_button') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Newsletter_Forms_In_Sidebars_Button_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_button_text_color')"
                                @input="setOption('mailchimp_sidebars_button_text_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_button_hover_text_color')"
                                @input="setOption('mailchimp_sidebars_button_hover_text_color',$event)"
                                :label-title="$t('colors.text_color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_button_background_color')"
                                @input="setOption('mailchimp_sidebars_button_background_color',$event)"
                                :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_button_hover_background_color')"
                                @input="setOption('mailchimp_sidebars_button_hover_background_color',$event)"
                                :label-title="$t('colors.background_hover')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.label')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_sidebars_label') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_label_color')"
                                @input="setOption('mailchimp_sidebars_label_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.description')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_sidebars_description') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_sidebars_text_color')"
                                @input="setOption('mailchimp_sidebars_text_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                    </div>
                </div>

            </to-panel-group>

            <to-panel-subtitle v-slot:label>{{ $t('panel.newsletter_forms_footer') }}</to-panel-subtitle>

            <to-panel-group :label-title="$t('panel.form_background')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_footer_background') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_background_color')"
                                @input="setOption('mailchimp_footer_background_color',$event)"
                                :label-title="$t('general.color')"
                            />
                        </div>
                    </div>
                </div>

            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_input')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_footer_input') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Newsletter_Forms_In_Footer_Input_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_input_color')"
                                @input="setOption('mailchimp_footer_input_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_input_background_color')"
                                @input="setOption('mailchimp_footer_input_background_color',$event)"
                                :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_input_border_color')"
                                @input="setOption('mailchimp_footer_input_border_color',$event)"
                                :label-title="$t('colors.border_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_input_placeholder_color')"
                                @input="setOption('mailchimp_footer_input_placeholder_color',$event)"
                                :label-title="$t('colors.placeholder_color')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.default_button')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_footer_button') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Newsletter_Forms_In_Footer_Button_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_button_text_color')"
                                @input="setOption('mailchimp_footer_button_text_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_button_hover_text_color')"
                                @input="setOption('mailchimp_footer_button_hover_text_color',$event)"
                                :label-title="$t('colors.text_color_hover')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_button_background_color')"
                                @input="setOption('mailchimp_footer_button_background_color',$event)"
                                :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_button_hover_background_color')"
                                @input="setOption('mailchimp_footer_button_hover_background_color',$event)"
                                :label-title="$t('colors.background_hover')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.label')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_footer_label') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_label_color')"
                                @input="setOption('mailchimp_footer_label_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                    </div>
                </div>

                <to-separator></to-separator>
            </to-panel-group>

            <to-panel-group :label-title="$t('panel.description')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_newsletter_in_footer_description') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('mailchimp_footer_text_color')"
                                @input="setOption('mailchimp_footer_text_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                    </div>
                </div>

            </to-panel-group>
        </to-panel>

        <to-panel id="panel.content_forms">
            <to-panel-group :label-title="$t('panel.default_input')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.colors_forms_content_forms_input') }}
                        </div>
                        <div class="gallery">
                            <to-button-gallery :images="[
                                {name: 'Comments_&_Content_Forms_Input_Defaults.png'},
                            ]">{{ $t('general.screenshot') }}</to-button-gallery>
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('form_elements_text_color')"
                                @input="setOption('form_elements_text_color',$event)"
                                :label-title="$t('colors.text_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('form_elements_background_color')"
                                @input="setOption('form_elements_background_color',$event)"
                                :label-title="$t('colors.background_color')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('form_elements_border_color')"
                                @input="setOption('form_elements_border_color',$event)"
                                :label-title="$t('colors.border_color')"/>
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
