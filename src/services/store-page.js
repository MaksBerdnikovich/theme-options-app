import Vue from 'vue';
import Vuex from 'vuex';
import config from '@/services/config';
import settings from '@/services/store-settings';


Vue.use(Vuex);

var optionsDefaults = {
    // Menu & Header
    effects_hide_header: 'default',
    menu_show: 'default',
    menu_options: 'default',
    top_area_options: 'default',
    content_padding_top: '',
    content_padding_top_tablet: '',
    content_padding_top_mobile: '',
    header_custom_menu: '',
    product_header_separator: '1',

    header_source: 'default',
    header_builder: '',
    header_builder_sticky: '',
    header_builder_sticky_opacity: '50',
    header_builder_sticky_desktop: '',
    header_builder_sticky_mobile: '',
    header_builder_sticky_hide_desktop: '',
    header_builder_sticky_hide_mobile: '1',
    header_builder_light_color: '#FFFFFF',
    header_builder_light_color_hover: '#00BCD4',

    // Title Area
    breadcrumbs_default_color: '',
    breadcrumbs_active_color: '',
    breadcrumbs_hover_color: '',
    title_breadcrumbs_alignment: 'center',
    title_breadcrumbs_shop_category: '0',
    header_hide_top_area_tablet: 'default',
    header_hide_top_area_mobile: 'default',
    title_show: '',
    title_padding_locked: '',
    title_padding_tablet_locked: '',
    title_padding_mobile_locked: '',
    title_padding_left_tablet: '',
    title_padding_right_tablet: '',
    title_padding_top_tablet: '',
    title_padding_bottom_tablet: '',
    title_padding_left_mobile: '',
    title_padding_right_mobile: '',
    title_padding_top_mobile: '',
    title_padding_bottom_mobile: '',
    title_top_margin_tablet: '',
    title_top_margin_mobile: '',
    title_excerpt_top_margin_tablet: '',
    title_excerpt_top_margin_mobile: '',
    title_alignment: 'center',
    title_font_preset_html: '',
    title_font_preset_style: '',
    title_font_preset_weight: '',
    title_font_preset_transform: '',
    title_excerpt_font_preset_html: '',
    title_excerpt_font_preset_style: '',
    title_excerpt_font_preset_weight: '',
    title_excerpt_font_preset_transform: '',
    title_background_type: 'color',
    title_background_color: '',
    title_background_image: '',
    title_background_image_repeat: '0',
    title_background_size: 'auto',
    title_background_position_x: 'center',
    title_background_position_y: 'center',
    title_background_image_color: '',
    title_background_image_overlay: '',
    title_background_pattern: '',
    title_background_gradient_type: '',
    title_background_gradient_position: '',
    title_background_gradient_angle: '',
    title_background_gradient_point1_color: '',
    title_background_gradient_point2_color: '',
    title_background_gradient_point1_position: '',
    title_background_gradient_point2_position: '',
    title_background_video: '',
    title_background_video_type: '',
    title_background_video_poster: '',
    title_background_video_overlay: '',
    title_background_video_aspect_ratio: '',
    title_background_video_play_on_mobile: '',
    title_icon: '',
    title_icon__pack: '',
    title_icon_shape_show: '',
    title_background_effect: 'normal',
    title_background_ken_burns_direction: 'zoom_in',
    title_background_ken_burns_transition_speed: 15000,
    slideshow_preloader: '',

    // Content & Sidebar
    content_area_options: 'default',

    main_background_type: 'color',
    main_background_color: '',
    main_background_image: '',
    main_background_image_repeat: '0',
    main_background_size: 'auto',
    main_background_position_x: 'center',
    main_background_position_y: 'center',
    main_background_image_color: '',
    main_background_image_overlay: '',
    main_background_pattern: '',
    main_background_gradient_type: '',
    main_background_gradient_position: '',
    main_background_gradient_angle: '',
    main_background_gradient_point1_color: '',
    main_background_gradient_point2_color: '',
    main_background_gradient_point1_position: '',
    main_background_gradient_point2_position: '',

    sidebar_show: 'default',
    sidebar_position: 'left',
    sidebar_sticky: '0',

    page_layout_breadcrumbs: 'default',
    page_layout_breadcrumbs_default_color: '#99A9B5FF',
    page_layout_breadcrumbs_active_color: '#3C3950FF',
    page_layout_breadcrumbs_hover_color: '#3C3950FF',
    page_layout_breadcrumbs_alignment: 'left',
    page_layout_breadcrumbs_bottom_spacing: '0',
    page_layout_breadcrumbs_shop_category: '0',

    // Footer
    effects_hide_footer: 'default',
    footer_custom_show: 'default',
    content_padding_bottom: '',
    content_padding_bottom_tablet: '',
    content_padding_bottom_mobile: '',
    footer_widget_woocommerce: '1',

    // One pager and scroller
    effects_one_pager: '0',
    effects_page_scroller: '0',
    effects_page_scroller_type: 'advanced',
    fullpage_disabled_dots: '0',
    fullpage_style_dots: '',
    fullpage_disabled_tooltips_dots: '0',
    fullpage_fixed_background: '0',
    fullpage_enable_continuous: '0',
    fullpage_disabled_mobile: '0',
    effects_page_scroller_mobile: '0',
    fullpage_scroll_effect: 'normal',

    //Extras
    enable_page_preloader: 'default',
    effects_disabled: '0',
    redirect_to_subpage: '0',
    delay_js_execution_desktop: '0',
    delay_js_execution_mobile: '0',
    disable_cache: '0',
    custom_fields_data: '',

    // Post settings
    post_item_data: {
        post_layout_settings: 'default',
        post_layout_source: 'default',
        post_builder_template: '',
        video_type: '',
        video_aspect_ratio: '',
        video: '',
        video_play_on_mobile: '',
        video_overlay: '',
        video_poster: '',
        video_start: 'autoplay',
        audio: '',
        quote_text: '',
        quote_author: '',
        quote_background: '',
        quote_author_color: '',
        gallery: '',
        gallery_autoscroll: '1500',
        show_featured_posts_slider: '',
        show_featured_content: '',
        highlight: '',
        highlight_type: '',
        highlight_style: '',
        highlight_title_left_background: '#00BCD4FF',
        highlight_title_right_background: '#00BCD4FF',
        highlight_title_left_color: '#FFFFFFFF',
        highlight_title_right_color: '#FFFFFFFF',
    },
    post_elements_data: {
        post_elements: 'default',
        show_author: '',
        blog_hide_author: '',
        blog_hide_date: '',
        blog_hide_date_in_blog_cat: '',
        blog_hide_categories: '',
        blog_hide_tags: '',
        blog_hide_comments: '',
        blog_hide_likes: '',
        blog_hide_navigation: '',
        blog_hide_socials: '',
        blog_hide_realted: '',
    },

    // Post settings
    page_item_data: {
        page_layout_settings: 'default',
        page_layout_source: 'default',
        page_builder_template: '',
    },

    //Portfolio Item Settings
    portfolio_item_data: {
        portfolio_layout_settings: 'default',
        portfolio_layout_source: 'default',
        portfolio_builder_template: '',
        back_url: '',
        highlight: '',
        highlight_type: '',
        overview_title: '',
        overview_summary: '',
        project_link: '',
        project_text: '',
        fullwidth: '',
        project_button_show: '',
        grid_appearance_type: 'featured_image',
        grid_appearance_featured_image: '',
        grid_appearance_gif: '',
        grid_appearance_gif_start: 'autoplay',
        grid_appearance_gif_poster: '',
        grid_appearance_gif_preload: '',
        grid_appearance_video: '',
        grid_appearance_video_type: '',
        grid_appearance_video_aspect_ratio: '',
        grid_appearance_video_play_on_mobile: '',
        grid_appearance_video_overlay: '',
        grid_appearance_video_poster: '',
        grid_appearance_video_start: 'autoplay',
        grid_appearance_gallery_autoscroll: '1',
        grid_appearance_gallery_autoscroll_speed: '3000',
        grid_appearance_image_behavior: 'link_to_page',
        grid_appearance_gif_behavior: 'link_to_page',
        grid_appearance_video_behavior: 'link_to_page',
        grid_appearance_gallery_behavior: 'link_to_page',
        grid_appearance_behavior_target: '_blank',
        grid_appearance_behavior_custom_link: '',
        grid_appearance_behavior_custom_link_target: '_blank',
    },
    portfolio_elements_data: {
        portfolio_page_elements: 'default',
        portfolio_hide_date: '',
        portfolio_hide_sets: '',
        portfolio_hide_likes: '',
        portfolio_hide_socials: '',
        portfolio_hide_top_navigation: '',
        portfolio_hide_bottom_navigation: '',
    },

    //Product Item Settings
    product_item_data: {
        highlight: '',
        highlight_type: 'squared',
        thegem_product_disable_hover: '0',
        size_guide: 'default',
        size_guide_image: '',
        size_guide_text: 'Size guide',
        product_layout_settings: 'default',
        product_layout_source: 'default',
        product_builder_template: '',

        // Product page layout new options
        product_page_layout: 'default',
        product_page_layout_style: 'horizontal_tabs',
        product_page_layout_centered: '0',
        product_page_layout_centered_top_margin: '42',
        product_page_layout_centered_boxed: '0',
        product_page_layout_centered_boxed_color: '',
        product_page_layout_fullwidth: '0',
        product_page_layout_sticky: '0',
        product_page_layout_sticky_offset: '0',
        product_page_skeleton_loader: '0',
        product_page_layout_background: '',
        product_page_layout_title_area: 'disabled',
        product_page_ajax_add_to_cart: '1',
        product_page_desc_review_source: 'extra_description',
        product_page_desc_review_layout: 'tabs',
        product_page_desc_review_layout_tabs_style: 'horizontal',
        product_page_desc_review_layout_tabs_alignment: 'left',
        product_page_desc_review_layout_acc_position: 'below_gallery',
        product_page_desc_review_layout_one_by_one_description_background: '#F4F6F7FF',
        product_page_desc_review_layout_one_by_one_additional_info_background: '#FFFFFFFF',
        product_page_desc_review_layout_one_by_one_reviews_background: '#F4F6F7FF',
        product_page_desc_review_description: '1',
        product_page_desc_review_description_title: 'Description',
        product_page_desc_review_additional_info: '1',
        product_page_desc_review_additional_info_title: 'Additional Info',
        product_page_desc_review_reviews: '1',
        product_page_desc_review_reviews_title: 'Reviews',
        product_page_button_add_to_cart_text: 'Add to Cart',
        product_page_button_add_to_cart_icon: 'f1e7',
        product_page_button_add_to_cart_icon_pack: 'material',
        product_page_button_add_to_cart_icon_position: 'left',
        product_page_button_add_to_wishlist_icon: 'f37b',
        product_page_button_add_to_wishlist_icon_pack: 'material',
        product_page_button_added_to_wishlist_icon: 'f377',
        product_page_button_added_to_wishlist_icon_pack: 'material',
        product_page_button_clear_attributes_text: 'Clear selection',
        product_page_elements_prev_next: '1',
        product_page_elements_preview_on_hover: '1',
        product_page_elements_back_to_shop: '1',
        product_page_elements_back_to_shop_link: 'main_shop',
        product_page_elements_back_to_shop_link_custom_url: '',
        product_page_elements_title: '1',
        product_page_elements_attributes: '0',
        product_page_elements_attributes_data: '',
        product_page_elements_reviews: '1',
        product_page_elements_reviews_text: 'customer reviews',
        product_page_elements_price: '1',
        product_page_elements_price_strikethrough: '1',
        product_page_elements_description: '1',
        product_page_elements_stock_amount: '1',
        product_page_elements_stock_amount_text: 'Products in stock',
        product_page_elements_size_guide: '1',
        product_page_elements_sku: '1',
        product_page_elements_sku_title: 'SKU',
        product_page_elements_categories: '1',
        product_page_elements_categories_title: 'Categories',
        product_page_elements_tags: '1',
        product_page_elements_tags_title: 'Tags',
        product_page_elements_share: '1',
        product_page_elements_share_title: 'Share',
        product_page_elements_share_facebook: '1',
        product_page_elements_share_twitter: '1',
        product_page_elements_share_pinterest: '1',
        product_page_elements_share_tumblr: '1',
        product_page_elements_share_linkedin: '1',
        product_page_elements_share_reddit: '1',
        product_page_elements_upsell: '1',
        product_page_elements_upsell_title: 'You may also like',
        product_page_elements_upsell_title_alignment: 'left',
        product_page_elements_upsell_items: '-1',
        product_page_elements_upsell_columns_desktop: '4x',
        product_page_elements_upsell_columns_tablet: '3x',
        product_page_elements_upsell_columns_mobile: '2x',
        product_page_elements_upsell_columns_100: '5',
        product_page_elements_related: '1',
        product_page_elements_related_title: 'Related Products',
        product_page_elements_related_title_alignment: 'left',
        product_page_elements_related_items: '-1',
        product_page_elements_related_columns_desktop: '4x',
        product_page_elements_related_columns_tablet: '3x',
        product_page_elements_related_columns_mobile: '2x',
        product_page_elements_related_columns_100: '5',
        product_page_additional_tabs: 'default',
        product_page_additional_tabs_data: '',

        // Product gallery new options
        product_gallery: 'enabled',
        product_gallery_type: 'horizontal',
        product_gallery_column_position: 'left',
        product_gallery_column_width: '50',
        product_gallery_show_image: 'hover',
        product_gallery_zoom: '1',
        product_gallery_lightbox: '1',
        product_gallery_labels: '1',
        product_gallery_label_sale: '1',
        product_gallery_label_new: '1',
        product_gallery_label_out_stock: '1',
        product_gallery_auto_height: '1',
        product_gallery_elements_color: '',
        product_gallery_grid_columns: '1x',
        product_gallery_grid_gaps: '42',
        product_gallery_grid_gaps_hide: '0',
        product_gallery_grid_top_margin: '0',
        product_gallery_video_autoplay: '0',
    },

    product_archive_item_data: {
        product_archive_layout_source: 'default',
        product_archive_builder_template: '',
    },

    blog_archive_item_data: {
        blog_archive_layout_settings: 'default',
        blog_archive_layout_source: 'default',
        blog_archive_builder_template: '',
    },

    custom_archive_item_data: {
        layout_settings: 'default',
        layout_source: 'default',
        builder_template: '',
    },

    custom_post_item_data: {
        layout_settings: 'default',
        layout_source: 'default',
        builder_template: '',
        video_type: '',
        video_aspect_ratio: '',
        video: '',
        video_play_on_mobile: '',
        video_overlay: '',
        video_poster: '',
        video_start: 'autoplay',
        audio: '',
        quote_text: '',
        quote_author: '',
        quote_background: '',
        quote_author_color: '',
        gallery: '',
        gallery_autoscroll: '1500',
        show_featured_posts_slider: '',
        show_featured_content: '',
        highlight: '',
        highlight_type: '',
        highlight_style: '',
        highlight_title_left_background: '#00BCD4FF',
        highlight_title_right_background: '#00BCD4FF',
        highlight_title_left_color: '#FFFFFFFF',
        highlight_title_right_color: '#FFFFFFFF',
    },

    popups_item_data: {
        popups_layout_source: 'default',
        thegemPopups: [],
    }
};

const optionsNameMap = {
    // <option name used in source code>: <option name in store>

    // Title Area
    'title_padding_tablet_left': 'title_padding_left_tablet',
    'title_padding_tablet_right': 'title_padding_right_tablet',
    'title_padding_tablet_top': 'title_padding_top_tablet',
    'title_padding_tablet_bottom': 'title_padding_bottom_tablet',
    'title_padding_mobile_left': 'title_padding_left_mobile',
    'title_padding_mobile_right': 'title_padding_right_mobile',
    'title_padding_mobile_top': 'title_padding_top_mobile',
    'title_padding_mobile_bottom': 'title_padding_bottom_mobile',

    // Portfolio Item Settings
    'back_url': 'portfolio_item_data.back_url',
    'highlight': 'portfolio_item_data.highlight',
    'highlight_type': 'portfolio_item_data.highlight_type',
    'overview_title': 'portfolio_item_data.overview_title',
    'project_link': 'portfolio_item_data.project_link',
    'project_text': 'portfolio_item_data.project_text',
    'fullwidth': 'portfolio_item_data.fullwidth',
    'project_button_show': 'portfolio_item_data.project_button_show',
    'portfolio_page_elements': 'portfolio_elements_data.portfolio_page_elements',
    'portfolio_hide_date': 'portfolio_elements_data.portfolio_hide_date',
    'portfolio_hide_sets': 'portfolio_elements_data.portfolio_hide_sets',
    'portfolio_hide_likes': 'portfolio_elements_data.portfolio_hide_likes',
    'portfolio_hide_socials': 'portfolio_elements_data.portfolio_hide_socials',
    'portfolio_hide_top_navigation': 'portfolio_elements_data.portfolio_hide_top_navigation',
    'portfolio_hide_bottom_navigation': 'portfolio_elements_data.portfolio_hide_bottom_navigation',

    // Post Item Settings
    'video_type': 'post_item_data.video_type',
    'video_aspect_ratio': 'post_item_data.video_aspect_ratio',
    'video': 'post_item_data.video',
    'audio': 'post_item_data.audio',
    'quote_text': 'post_item_data.quote_text',
    'quote_author': 'post_item_data.quote_author',
    'quote_background': 'post_item_data.quote_background',
    'quote_author_color': 'post_item_data.quote_author_color',
    'gallery': 'post_item_data.gallery',
    'gallery_autoscroll': 'post_item_data.gallery_autoscroll',
    'show_featured_content': 'post_item_data.show_featured_content',
    //'post_highlight': 'post_item_data.highlight',
    //'post_highlight_type': 'post_item_data.highlight_type',
    //'post_highlight_style': 'post_item_data.highlight_style',
    'post_elements': 'post_elements_data.post_elements',
    'show_author': 'post_elements_data.show_author',
    'blog_hide_author': 'post_elements_data.blog_hide_author',
    'blog_hide_date': 'post_elements_data.blog_hide_date',
    'blog_hide_date_in_blog_cat': 'post_elements_data.blog_hide_date_in_blog_cat',
    'blog_hide_categories': 'post_elements_data.blog_hide_categories',
    'blog_hide_tags': 'post_elements_data.blog_hide_tags',
    'blog_hide_comments': 'post_elements_data.blog_hide_comments',
    'blog_hide_likes': 'post_elements_data.blog_hide_likes',
    'blog_hide_navigation': 'post_elements_data.blog_hide_navigation',
    'blog_hide_socials': 'post_elements_data.blog_hide_socials',
    'blog_hide_realted': 'post_elements_data.blog_hide_realted',
};

var timeoutHandler = null;

var store;

if  (config.isPage || config.isTaxonomy) {
    store = new Vuex.Store({
        modules: {
            settings: settings
        },

        state() {
            var options=JSON.parse(JSON.stringify(config.options));

            for(let optionName in optionsDefaults) {
                if (typeof options[optionName] === 'undefined') {
                    options[optionName]=optionsDefaults[optionName];
                }

                if (typeof options[optionName] === 'object' && typeof optionsDefaults[optionName] == 'object') {
                    for(let subOptionName in optionsDefaults[optionName]) {
                        if (typeof options[optionName][subOptionName] === 'undefined') {
                            options[optionName][subOptionName]=optionsDefaults[optionName][subOptionName];
                        }
                    }
                }
            }

            options.options_current_contents = null;
            options.options_modified = false;
            options.options_outside_parameter_modified = false;
            options.options_saved_contents = JSON.stringify(Object.assign({}, options, {settings: null, options_current_contents: null, options_saved_contents: null, options_modified: null}));

            return options;
        },

        getters: {
            getOptionByName: state => name => {

                if (optionsNameMap[name]) {
                    name = optionsNameMap[name];
                }

                let parts = name.split('.');
                let value;
                switch (parts.length) {
                    case 1:
                        value = state[name];
                        break;
                    case 2:
                        value = state[parts[0]][parts[1]];
                        break;
                    case 3:
                        value = state[parts[0]][parts[1]][parts[2]];
                        break;
                    case 4:
                        value = state[parts[0]][parts[1]][parts[2]][parts[3]];
                        break;
                }

                if (typeof value === 'undefined') {
                    window.console.error('trying to get unknown option "' + name + '"')
                }

                //window.console.log('get option "' + name + '" as "' + value + '"');
                return value;
            },

            getOptionByPrefixedName: state => (prefix, name) => {
                let option = prefix + (name!='' && prefix != '' ? '_' + name : name);

                if (optionsNameMap[option]) {
                    option = optionsNameMap[option];
                }

                let parts = option.split('.');
                let value;
                switch (parts.length) {
                    case 1:
                        value = state[option];
                        break;
                    case 2:
                        value = state[parts[0]][parts[1]];
                        break;
                    case 3:
                        value = state[parts[0]][parts[1]][parts[2]];
                        break;
                    case 4:
                        value = state[parts[0]][parts[1]][parts[2]][parts[3]];
                        break;
                }

                if (typeof value === 'undefined') {
                    window.console.error('trying to get unknown option "' + option + '"')
                }

                // window.console.log('get option "' + option + '" as "' + value + '"');
                return value;
            }
        },

        mutations: {
            setOptionByName(state, payload) {

                if (optionsNameMap[payload.name]) {
                    payload.name = optionsNameMap[payload.name];
                }

                window.console.log('set option "' + payload.name + '" to "' + payload.value + '"');

                let parts = payload.name.split('.');
                switch (parts.length) {
                    case 1:
                        state[payload.name] = payload.value;
                        break;
                    case 2:
                        state[parts[0]][parts[1]] = payload.value;
                        break;
                    case 3:
                        state[parts[0]][parts[1]][parts[2]] = payload.value;
                        break;
                    case 4:
                        state[parts[0]][parts[1]][parts[2]][parts[3]] = payload.value;
                        break;
                }

                if (payload.name == 'effects_one_pager' && payload.value == '1') {
                    state['effects_page_scroller'] = '0';
                }

                if (payload.name == 'effects_page_scroller' && payload.value == '1') {
                    state['effects_one_pager'] = '0';
                }

                if (payload.name == 'effects_page_scroller' && payload.value == '1') {
                    state['menu_options'] = 'custom';
                }

                if (payload.name == 'effects_page_scroller' && payload.value == '1') {
                    state['header_transparent'] = '1';
                }

                //Product Page Defaults Presets
                if (payload.name == 'product_item_data.product_page_layout_style' && payload.value == 'horizontal_tabs') {
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '0';
                    state['header_opacity'] = '50';
                    state['product_item_data']['product_page_layout_centered'] = '0';
                    state['product_item_data']['product_page_layout_centered_top_margin'] = '42';
                    state['product_item_data']['product_page_layout_centered_boxed'] = '0';
                    state['product_item_data']['product_page_layout_centered_boxed_color'] = '';
                    state['product_item_data']['product_page_layout_background'] = '';
                    state['product_item_data']['product_page_layout_preset'] = 'col-50-50';
                    state['product_item_data']['product_gallery_column_width'] = '50';
                    state['product_item_data']['product_page_layout_fullwidth'] = '0';
                    state['product_item_data']['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = 'enabled';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_item_data']['product_gallery'] = 'enabled';
                    state['product_item_data']['product_gallery_type'] = 'vertical';
                    state['product_item_data']['product_gallery_grid_columns'] = '1x';
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '0';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                    state['product_item_data']['product_gallery_video_autoplay'] = '0';
                    state['product_item_data']['product_gallery_column_position'] = 'left';
                    state['product_item_data']['product_page_desc_review_layout'] = 'tabs';
                    state['product_item_data']['product_page_desc_review_layout_tabs_style'] = 'horizontal';
                    state['product_item_data']['product_page_desc_review_layout_tabs_alignment'] = 'left';
                }
                if (payload.name == 'product_item_data.product_page_layout_style' && payload.value == 'vertical_tabs') {
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '0';
                    state['header_opacity'] = '50';
                    state['product_item_data']['product_page_layout_centered'] = '0';
                    state['product_item_data']['product_page_layout_centered_top_margin'] = '42';
                    state['product_item_data']['product_page_layout_centered_boxed'] = '0';
                    state['product_item_data']['product_page_layout_centered_boxed_color'] = '';
                    state['product_item_data']['product_page_layout_background'] = '';
                    state['product_item_data']['product_page_layout_preset'] = 'col-50-50';
                    state['product_item_data']['product_gallery_column_width'] = '50';
                    state['product_item_data']['product_page_layout_fullwidth'] = '0';
                    state['product_item_data']['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = 'enabled';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_item_data']['product_gallery'] = 'enabled';
                    state['product_item_data']['product_gallery_type'] = 'dots';
                    state['product_item_data']['product_gallery_grid_columns'] = '1x';
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '0';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                    state['product_item_data']['product_gallery_video_autoplay'] = '0';
                    state['product_item_data']['product_gallery_column_position'] = 'left';
                    state['product_item_data']['product_page_desc_review_layout'] = 'tabs';
                    state['product_item_data']['product_page_desc_review_layout_tabs_style'] = 'vertical';
                    state['product_item_data']['product_page_desc_review_layout_tabs_alignment'] = 'left';
                }
                if (payload.name == 'product_item_data.product_page_layout_style' && payload.value == 'accordion') {
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '0';
                    state['header_opacity'] = '50';
                    state['product_item_data']['product_page_layout_centered'] = '0';
                    state['product_item_data']['product_page_layout_centered_top_margin'] = '42';
                    state['product_item_data']['product_page_layout_centered_boxed'] = '0';
                    state['product_item_data']['product_page_layout_centered_boxed_color'] = '';
                    state['product_item_data']['product_page_layout_background'] = '';
                    state['product_item_data']['product_page_layout_preset'] = 'col-50-50';
                    state['product_item_data']['product_gallery_column_width'] = '50';
                    state['product_item_data']['product_page_layout_fullwidth'] = '0';
                    state['product_item_data']['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = 'enabled';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_item_data']['product_gallery'] = 'enabled';
                    state['product_item_data']['product_gallery_type'] = 'horizontal';
                    state['product_item_data']['product_gallery_grid_columns'] = '1x';
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '0';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                    state['product_item_data']['product_gallery_video_autoplay'] = '0';
                    state['product_item_data']['product_gallery_column_position'] = 'left';
                    state['product_item_data']['product_page_desc_review_layout'] = 'accordion';
                    state['product_item_data']['product_page_desc_review_layout_acc_position'] = 'next_to_gallery';
                }
                if (payload.name == 'product_item_data.product_page_layout_style' && payload.value == 'one_by_one') {
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '0';
                    state['header_opacity'] = '50';
                    state['product_item_data']['product_page_layout_centered'] = '0';
                    state['product_item_data']['product_page_layout_centered_top_margin'] = '42';
                    state['product_item_data']['product_page_layout_centered_boxed'] = '0';
                    state['product_item_data']['product_page_layout_centered_boxed_color'] = '';
                    state['product_item_data']['product_page_layout_background'] = '';
                    state['product_item_data']['product_page_layout_preset'] = 'col-50-50';
                    state['product_item_data']['product_gallery_column_width'] = '50';
                    state['product_item_data']['product_page_layout_fullwidth'] = '0';
                    state['product_item_data']['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = 'enabled';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_item_data']['product_gallery'] = 'enabled';
                    state['product_item_data']['product_gallery_type'] = 'horizontal';
                    state['product_item_data']['product_gallery_grid_columns'] = '1x';
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '0';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                    state['product_item_data']['product_gallery_video_autoplay'] = '0';
                    state['product_item_data']['product_gallery_column_position'] = 'left';
                    state['product_item_data']['product_page_desc_review_layout'] = 'one_by_one';
                }
                if (payload.name == 'product_item_data.product_page_layout_style' && payload.value == 'fullwidth') {
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '0';
                    state['header_opacity'] = '50';
                    state['product_item_data']['product_page_layout_centered'] = '0';
                    state['product_item_data']['product_page_layout_centered_top_margin'] = '42';
                    state['product_item_data']['product_page_layout_centered_boxed'] = '0';
                    state['product_item_data']['product_page_layout_centered_boxed_color'] = '';
                    state['product_item_data']['product_page_layout_background'] = '';
                    state['product_item_data']['product_page_layout_preset'] = 'col-60-40';
                    state['product_item_data']['product_gallery_column_width'] = '65';
                    state['product_item_data']['product_page_layout_fullwidth'] = '1';
                    state['product_item_data']['product_page_layout_sticky'] = '1';
                    state['page_layout_breadcrumbs'] = 'enabled';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_item_data']['product_gallery'] = 'enabled';
                    state['product_item_data']['product_gallery_type'] = 'grid';
                    state['product_item_data']['product_gallery_grid_columns'] = '2x';
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '0';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                    state['product_item_data']['product_gallery_video_autoplay'] = '1';
                    state['product_item_data']['product_gallery_column_position'] = 'left';
                    state['product_item_data']['product_page_desc_review_layout'] = 'accordion';
                    state['product_item_data']['product_page_desc_review_layout_acc_position'] = 'next_to_gallery';
                }
                if (payload.name == 'product_item_data.product_page_layout_style' && payload.value == 'swapped_columns') {
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '0';
                    state['header_opacity'] = '50';
                    state['product_item_data']['product_page_layout_centered'] = '0';
                    state['product_item_data']['product_page_layout_centered_top_margin'] = '42';
                    state['product_item_data']['product_page_layout_centered_boxed'] = '0';
                    state['product_item_data']['product_page_layout_centered_boxed_color'] = '';
                    state['product_item_data']['product_page_layout_background'] = '';
                    state['product_item_data']['product_page_layout_preset'] = 'col-50-50';
                    state['product_item_data']['product_gallery_column_width'] = '50';
                    state['product_item_data']['product_page_layout_fullwidth'] = '0';
                    state['product_item_data']['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = 'enabled';
                    state['page_layout_breadcrumbs_alignment'] = 'right';
                    state['product_item_data']['product_gallery'] = 'enabled';
                    state['product_item_data']['product_gallery_type'] = 'horizontal';
                    state['product_item_data']['product_gallery_grid_columns'] = '1x';
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '0';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                    state['product_item_data']['product_gallery_video_autoplay'] = '0';
                    state['product_item_data']['product_gallery_column_position'] = 'right';
                    state['product_item_data']['product_page_desc_review_layout'] = 'tabs';
                    state['product_item_data']['product_page_desc_review_layout_tabs_style'] = 'horizontal';
                    state['product_item_data']['product_page_desc_review_layout_tabs_alignment'] = 'center';
                }
                if (payload.name == 'product_item_data.product_page_layout_style' && payload.value == 'no_gallery_margins') {
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '1';
                    state['header_opacity'] = '0';
                    state['product_item_data']['product_page_layout_centered'] = '0';
                    state['product_item_data']['product_page_layout_centered_top_margin'] = '42';
                    state['product_item_data']['product_page_layout_centered_boxed'] = '0';
                    state['product_item_data']['product_page_layout_centered_boxed_color'] = '';
                    state['product_item_data']['product_page_layout_background'] = '';
                    state['product_item_data']['product_page_layout_preset'] = 'col-50-50';
                    state['product_item_data']['product_gallery_column_width'] = '50';
                    state['product_item_data']['product_page_layout_fullwidth'] = '1';
                    state['product_item_data']['product_page_layout_sticky'] = '1';
                    state['page_layout_breadcrumbs'] = 'enabled';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_item_data']['product_gallery'] = 'enabled';
                    state['product_item_data']['product_gallery_type'] = 'grid';
                    state['product_item_data']['product_gallery_grid_columns'] = '1x';
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '1';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '90';
                    state['product_item_data']['product_gallery_video_autoplay'] = '1';
                    state['product_item_data']['product_gallery_column_position'] = 'left';
                    state['product_item_data']['product_page_desc_review_layout'] = 'tabs';
                    state['product_item_data']['product_page_desc_review_layout_tabs_style'] = 'horizontal';
                    state['product_item_data']['product_page_desc_review_layout_tabs_alignment'] = 'center';
                }
                if (payload.name == 'product_item_data.product_page_layout_style' && payload.value == 'centered') {
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '0';
                    state['header_opacity'] = '50';
                    state['product_item_data']['product_page_layout_centered'] = '1';
                    state['product_item_data']['product_page_layout_centered_top_margin'] = '55';
                    state['product_item_data']['product_page_layout_centered_boxed'] = '0';
                    state['product_item_data']['product_page_layout_centered_boxed_color'] = '';
                    state['product_item_data']['product_page_layout_background'] = '';
                    state['product_item_data']['product_page_layout_preset'] = 'col-50-50';
                    state['product_item_data']['product_gallery_column_width'] = '50';
                    state['product_item_data']['product_page_layout_fullwidth'] = '0';
                    state['product_item_data']['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = 'enabled';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_item_data']['product_gallery'] = 'enabled';
                    state['product_item_data']['product_gallery_type'] = 'horizontal';
                    state['product_item_data']['product_gallery_grid_columns'] = '1x';
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '0';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                    state['product_item_data']['product_gallery_video_autoplay'] = '0';
                    state['product_item_data']['product_gallery_column_position'] = 'left';
                    state['product_item_data']['product_page_desc_review_layout'] = 'one_by_one';
                }
                if (payload.name == 'product_item_data.product_page_layout_style' && payload.value == 'centered_boxed') {
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '0';
                    state['header_opacity'] = '50';
                    state['product_item_data']['product_page_layout_centered'] = '1';
                    state['product_item_data']['product_page_layout_centered_top_margin'] = '42';
                    state['product_item_data']['product_page_layout_centered_boxed'] = '1';
                    state['product_item_data']['product_page_layout_centered_boxed_color'] = '#FFFFFFFF';
                    state['product_item_data']['product_page_layout_background'] = '#F4F6F7FF';
                    state['product_item_data']['product_page_layout_preset'] = 'col-60-40';
                    state['product_item_data']['product_gallery_column_width'] = '60';
                    state['product_item_data']['product_page_layout_fullwidth'] = '0';
                    state['product_item_data']['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = 'enabled';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_item_data']['product_gallery'] = 'enabled';
                    state['product_item_data']['product_gallery_type'] = 'vertical';
                    state['product_item_data']['product_gallery_grid_columns'] = '1x';
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '0';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                    state['product_item_data']['product_gallery_video_autoplay'] = '0';
                    state['product_item_data']['product_gallery_column_position'] = 'left';
                    state['product_item_data']['product_page_desc_review_layout'] = 'tabs';
                    state['product_item_data']['product_page_desc_review_layout_tabs_style'] = 'horizontal';
                    state['product_item_data']['product_page_desc_review_layout_tabs_alignment'] = 'left';
                }

                //Product page default columns positions
                if (payload.name == 'product_item_data.product_page_desc_review_layout_tabs_style' && payload.value == 'vertical') {
                    state['product_item_data']['product_page_desc_review_layout_tabs_alignment'] = 'left';
                }
                if (payload.name == 'product_item_data.product_page_layout_preset' && payload.value == 'col-40-60') {
                    state['product_item_data']['product_gallery_column_width'] = '40';
                }
                if (payload.name == 'product_item_data.product_page_layout_preset' && payload.value == 'col-50-50') {
                    state['product_item_data']['product_gallery_column_width'] = '50';
                }
                if (payload.name == 'product_item_data.product_page_layout_preset' && payload.value == 'col-60-40') {
                    state['product_item_data']['product_gallery_column_width'] = '60';
                }
                if (payload.name == 'product_item_data.product_page_layout_preset' && payload.value == 'col-100') {
                    state['product_item_data']['product_gallery_column_width'] = '100';
                }
                if (payload.name == 'product_item_data.product_layout_settings' && payload.value == 'default') {
                    state['product_item_data']['size_guide'] = 'default';
                }

                //Product gallery grid 100% width
                if (payload.name == 'product_item_data.product_page_layout_fullwidth' && payload.value == '0') {
                    state['product_item_data']['product_gallery_grid_gaps_hide'] = '0';
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                }
                if (payload.name == 'product_item_data.product_gallery_grid_gaps_hide' && payload.value == '0') {
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                }
                if (payload.name == 'product_item_data.product_gallery_grid_gaps_hide' && payload.value == '1') {
                    state['product_item_data']['product_gallery_grid_top_margin'] = '90';
                }
                if (payload.name == 'header_transparent' && payload.value == '') {
                    state['product_item_data']['product_gallery_grid_top_margin'] = '0';
                }

                //Product page default top spacing
                if (payload.name == 'page_layout_breadcrumbs' && payload.value == 'enabled') {
                    state['content_padding_top'] = '0';
                    state['content_padding_top_tablet'] = '0';
                    state['content_padding_top_mobile'] = '0';
                }
                if (payload.name == 'page_layout_breadcrumbs' && payload.value == 'disabled') {
                    state['content_padding_top'] = '70';
                    state['content_padding_top_tablet'] = '21';
                    state['content_padding_top_mobile'] = '21';
                }

                /*if (payload.name == 'header_top_area_transparent' && payload.value == '1') {
                    state['menu_show'] = 'enabled';
                    state['menu_options'] = 'custom';
                    state['header_transparent'] = '1';
                }

                if (payload.name == 'header_transparent' && payload.value == '0') {
                    state['header_top_area_transparent'] = '0';
                }*/

                // Huck for switch on product builder
                if (payload.name == 'product_item_data.product_layout_source' && payload.value == 'builder') {
                    state['product_item_data']['product_page_layout'] = 'default';
                }

                // Blog / Product Archive Builder switch options - https://app.asana.com/0/1199540649412175/1202822063316849/f
                if (payload.name == 'blog_archive_item_data.blog_archive_layout_source' && payload.value == 'builder') {
                    //state['title_show'] = 'disabled';
                    state['product_header_separator'] = '0';
                }
                if (payload.name == 'product_archive_item_data.product_archive_layout_source' && payload.value == 'builder') {
                    //state['title_show'] = 'disabled';
                    state['product_header_separator'] = '0';
                }
                if (payload.name == 'custom_archive_item_data.layout_source' && payload.value == 'builder') {
                    //state['title_show'] = 'disabled';
                    state['product_header_separator'] = '0';
                }

                // Single Post/Page/Portfolio Builder switch options - https://app.asana.com/0/0/1202958595252949/f
                if (payload.name == 'post_item_data.post_layout_source' && payload.value == 'builder') {
                    state['title_show'] = 'disabled';
                }
                if (payload.name == 'page_item_data.page_layout_source' && payload.value == 'builder') {
                    state['title_show'] = 'disabled';
                }
                if (payload.name == 'portfolio_item_data.portfolio_layout_source' && payload.value == 'builder') {
                    state['title_show'] = 'disabled';
                }
                if (payload.name == 'custom_post_item_data.layout_source' && payload.value == 'builder') {
                    state['title_show'] = 'disabled';
                }

                this.dispatch('optionsUpdated');
            },

            setOptionByPrefixedName(state, payload) {
                if (!Array.isArray(payload.name)) {
                    payload.name=[payload.name];
                }

                for(var optionName of payload.name) {
                    var option = payload.prefix + (optionName != '' ? '_' + optionName : '');

                    if (optionsNameMap[option]) {
                        option = optionsNameMap[option];
                    }

                    let parts = option.split('.');
                    switch (parts.length) {
                        case 1:
                            state[option] = payload.value;
                            break;
                        case 2:
                            state[parts[0]][parts[1]] = payload.value;
                            break;
                        case 3:
                            state[parts[0]][parts[1]][parts[2]] = payload.value;
                            break;
                        case 4:
                            state[parts[0]][parts[1]][parts[2]][parts[3]] = payload.value;
                            break;
                    }
                }

                this.dispatch('optionsUpdated');
            },

            optionsUpdated(state) {
                state.options_current_contents = JSON.stringify(Object.assign({}, state, {settings: null, options_current_contents: null, options_saved_contents: null, options_modified: null}));
                state.options_modified = state.options_current_contents != state.options_saved_contents;

                document.getElementById('thegem_page_options_data').value=JSON.stringify(Object.assign({}, state, {options_current_contents: null, options_saved_contents: null, options_modified: null}));
            },
        },

        actions: {
            init() {
                this.dispatch('optionsUpdated');
            },

            optionsUpdated() {
                if (timeoutHandler) {
                    clearTimeout(timeoutHandler);
                }

                timeoutHandler = setTimeout(()=>{
                    this.commit('optionsUpdated');
                    timeoutHandler = null;
                },100);
            }
        },

        strict: false
    });
}

export default store;
