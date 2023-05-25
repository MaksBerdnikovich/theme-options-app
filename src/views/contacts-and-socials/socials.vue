<template>
    <div>
        <to-panel id="panel.social_networks">
            <to-panel-group :label-title="$t('panel.social_networks_popular')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.contacts_and_socials_socials_popular_social_networks') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-2">
                            <to-block-switch-input option-switch="facebook_active" option-input="facebook_link" switch-label-icon="soc-facebook" switch-label-title="Facebook" input-label-title="Facebook link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="linkedin_active" option-input="linkedin_link" switch-label-icon="soc-linkedin" switch-label-title="LinkedIn" input-label-title="LinkedIn link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="twitter_active" option-input="twitter_link" switch-label-icon="soc-twitter" switch-label-title="Twitter" input-label-title="Twitter link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="instagram_active" option-input="instagram_link" switch-label-icon="soc-instagram" switch-label-title="Instagram" input-label-title="Instagram link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="pinterest_active" option-input="pinterest_link" switch-label-icon="soc-pinterest" switch-label-title="Pinterest" input-label-title="Pinterest link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="rss_active" option-input="rss_link" switch-label-icon="soc-rss" switch-label-title="RSS" input-label-title="RSS link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="vimeo_active" option-input="vimeo_link" switch-label-icon="soc-vimeo" switch-label-title="Vimeo" input-label-title="Vimeo link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="youtube_active" option-input="youtube_link" switch-label-icon="soc-youtube" switch-label-title="YouTube" input-label-title="YouTube link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="flickr_active" option-input="flickr_link" switch-label-icon="soc-flickr" switch-label-title="Flickr" input-label-title="Flickr link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="tumblr_active" option-input="tumblr_link" switch-label-icon="soc-tumblr" switch-label-title="Tumblr" input-label-title="Tumblr link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="wordpress_active" option-input="wordpress_link" switch-label-icon="soc-wordpress" switch-label-title="WordPress" input-label-title="WordPress link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="dribbble_active" option-input="dribbble_link" switch-label-icon="soc-dribbble" switch-label-title="Dribbble" input-label-title="Dribbble link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="deviantart_active" option-input="deviantart_link" switch-label-icon="soc-deviantart" switch-label-title="DeviantArt" input-label-title="DeviantArt link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="share_active" option-input="share_link" switch-label-icon="soc-share" switch-label-title="Share" input-label-title="Share link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="skype_active" option-input="skype_link" switch-label-icon="soc-skype" switch-label-title="Skype" input-label-title="Skype link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="googledrive_active" option-input="googledrive_link" switch-label-icon="soc-google-drive" switch-label-title="Google Drive" input-label-title="Google Drive link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="blogger_active" option-input="blogger_link" switch-label-icon="soc-blogger" switch-label-title="Blogger" input-label-title="Blogger link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="spotify_active" option-input="spotify_link" switch-label-icon="soc-spotify" switch-label-title="Spotify" input-label-title="Spotify link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="telegram_active" option-input="telegram_link" switch-label-icon="soc-telegram" switch-label-title="Telegram" input-label-title="Telegram link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="vk_active" option-input="vk_link" switch-label-icon="soc-vk" switch-label-title="VK" input-label-title="VK link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="whatsapp_active" option-input="whatsapp_link" switch-label-icon="soc-whatsapp" switch-label-title="WhatsApp" input-label-title="WhatsApp link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="viber_active" option-input="viber_link" switch-label-icon="soc-viber" switch-label-title="Viber" input-label-title="Viber link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="ok_active" option-input="ok_link" switch-label-icon="soc-ok" switch-label-title="OK" input-label-title="OK link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="reddit_active" option-input="reddit_link" switch-label-icon="soc-reddit" switch-label-title="Reddit" input-label-title="Reddit link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="slack_active" option-input="slack_link" switch-label-icon="soc-slack" switch-label-title="Slack" input-label-title="Slack link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="askfm_active" option-input="askfm_link" switch-label-icon="soc-ask-fm" switch-label-title="ASKfm" input-label-title="ASKfm link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="meetup_active" option-input="meetup_link" switch-label-icon="soc-meetup" switch-label-title="Meetup" input-label-title="Meetup link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="weibo_active" option-input="weibo_link" switch-label-icon="soc-weibo" switch-label-title="Weibo" input-label-title="Weibo link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="qzone_active" option-input="qzone_link" switch-label-icon="soc-qzone" switch-label-title="Qzone" input-label-title="Qzone link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="soundcloud_active" option-input="soundcloud_link" switch-label-icon="soc-soundcloud" switch-label-title="Soundcloud" input-label-title="Soundcloud link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="discord_active" option-input="discord_link" switch-label-icon="soc-discord" switch-label-title="Discord" input-label-title="Discord link"/>
                        </div>
                        <div class="col-2">
                            <to-block-switch-input option-switch="tiktok_active" option-input="tiktok_link" switch-label-icon="soc-tiktok" switch-label-title="TikTok" input-label-title="TikTok link"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.colors">
            <to-panel-group :label-title="$t('panel.social_icon_colors')">
                <template v-slot:tooltip>
                    <div class="help-tooltip-text">
                        <div class="info">
                            {{ $t('info.contacts_and_socials_socials_icon_colors') }}
                        </div>
                    </div>
                </template>
                <div class="to-changed-settings">
                    <div class="form-grid">
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('socials_colors_top_area')"
                                @input="setOption('socials_colors_top_area',$event)"
                                :label-title="$t('colors.in_top_area')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('socials_colors_footer')"
                                @input="setOption('socials_colors_footer',$event)"
                                :label-title="$t('colors.in_footer')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('socials_colors_posts')"
                                @input="setOption('socials_colors_posts',$event)"
                                :label-title="$t('colors.in_content')"/>
                        </div>
                        <div class="col-4">
                            <to-color-picker
                                :value="getOption('socials_colors_woocommerce')"
                                @input="setOption('socials_colors_woocommerce',$event)"
                                :label-title="$t('colors.in_woo')"/>
                        </div>
                    </div>
                </div>
            </to-panel-group>
        </to-panel>

        <to-panel id="panel.add_new_social">
            <template v-for="social in getOption('customSocials')">
                <to-panel-group :label-title="$t('panel.add_new_social_network')" v-bind:key="social.key + '_1'">
                    <template v-slot:tooltip>
                        <div class="help-tooltip-text">
                            <div class="info">
                                {{ $t('info.contacts_and_socials_socials_add_new_social_network') }}
                            </div>
                        </div>
                    </template>
                    <div class="to-changed-settings">
                        <to-switch
                            :value="getSocialOption(social, 'active')"
                            @input="setSocialOption(social, 'active', $event)"
                        />
                    </div>
                </to-panel-group>

                <to-panel-group :label-title="$t('panel.social_network')" v-if="getSocialOption(social, 'active')" v-bind:key="social.key + '_2'">

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-2">
                                <to-label>{{ $t('addicon.social_name') }}</to-label>
                                <to-input :value="getSocialOption(social, 'name')" @input="setSocialOption(social, 'name', $event)"/>
                            </div>
                            <div class="col-2">
                                <to-label>{{ $t('addicon.link_to_profile') }}</to-label>
                                <to-input :value="getSocialOption(social, 'link')" @input="setSocialOption(social, 'link', $event)"/>
                            </div>
                        </div>
                    </div>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-3 col-tb-2">
                                <to-block-icon option-prefix=""
                                               :icon-suffix="'customSocials.' + social.key + '.icon'"
                                               :pack-suffix="'customSocials.' + social.key + '.icon_pack'"
                                               :label-title="$t('addicon.icon_no_shape')"
                                />
                            </div>
                            <div class="col-3 col-tb-2">
                                <to-block-icon option-prefix=""
                                               :icon-suffix="'customSocials.' + social.key + '.rounded_icon'"
                                               :pack-suffix="'customSocials.' + social.key + '.icon_pack'"
                                               :label-title="$t('addicon.icon_circle_shape')"
                                />
                            </div>
                            <div class="col-3 col-tb-2">
                                <to-block-icon option-prefix=""
                                               :icon-suffix="'customSocials.' + social.key + '.squared_icon'"
                                               :pack-suffix="'customSocials.' + social.key + '.icon_pack'"
                                               :label-title="$t('addicon.icon_square_shape')"
                                />
                            </div>
                        </div>
                    </div>

                    <div class="to-changed-settings">
                        <div class="form-grid">
                            <div class="col-5">
                                <to-color-picker :label-title="$t('addicon.icon_color')" :value="getSocialOption(social, 'color')" @input="setSocialOption(social, 'color', $event)" />
                            </div>
                            <div class="col-offset-80">
                                <to-label>{{ $t('addicon.css_class') }}</to-label>
                                <to-input :value="getSocialOption(social, 'id')" @input="setSocialOption(social, 'id', $event)" />
                            </div>
                        </div>
                    </div>

                </to-panel-group>
            </template>
        </to-panel>
    </div>
</template>

<script>
import {addHelpers} from '@/services/helper';

export default addHelpers({
    data() {
        return {
        }
    },

    methods: {
        getSocialOption(social, option) {
            return this.getOption('customSocials.' + social.key + '.' + option);
        },

        setSocialOption(social, option, value) {
            this.setOption('customSocials.' + social.key + '.' + option, value);
            this.autoAddNewSocial();
        },

        autoAddNewSocial() {
            let socials = this.getOption('customSocials');
            let lastIdx = socials.length-1;

            if (lastIdx<0 || socials[lastIdx].active) {
                socials.push({
                    id: '',
                    name: '' ,
                    icon_pack: '',
                    icon: '',
                    rounded_icon: '',
                    squared_icon: '',
                    color: '',
                    active: '',
                    link: '#',
                    key: lastIdx<0 ? 0:(socials[lastIdx].key + 1)
                });
                this.setOption('customSocials', socials);
            }
        }
    },

    mounted() {
        this.autoAddNewSocial();
    }
})
</script>
