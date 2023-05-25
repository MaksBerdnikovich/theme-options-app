import Vue from 'vue';
import Vuex from 'vuex';
import i18n from '@/services/i18n';
import config from '@/services/config';
import Api from '@/services/api';
import ToModalFilesystemCredentials from "@/components/system/to-modal-filesystem-credentials";
import settings from '@/services/store-settings';

Vue.use(Vuex);

var optionsDefaults = {

    // General
    basic_outer_background_type: 'color',
    basic_outer_background_color: '',
    basic_outer_background_image: '',
    basic_outer_background_image_repeat: '0',
    basic_outer_background_size: 'auto',
    basic_outer_background_position_x: 'center',
    basic_outer_background_position_y: 'center',
    basic_outer_background_image_color: '',
    basic_outer_background_image_overlay: '',
    basic_outer_background_pattern: '',
    basic_outer_background_gradient_type: '',
    basic_outer_background_gradient_position: '',
    basic_outer_background_gradient_angle: '',
    basic_outer_background_gradient_point1_color: '',
    basic_outer_background_gradient_point2_color: '',
    basic_outer_background_gradient_point1_position: '',
    basic_outer_background_gradient_point2_position: '',

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

    preloader: '',
    preloader_type: 'css',
    content_preloader_style: 'preloader-4',
    content_preloader_line_1: '',
    content_preloader_line_2: '',
    content_preloader_line_3: '',
    content_preloader_select_style: 'normal',
    page_padding_left: '10',
    page_padding_right: '10',
    page_padding_top: '10',
    page_padding_bottom: '10',

    page_layout_breadcrumbs: '1',
    page_layout_breadcrumbs_default_color: '#99A9B5FF',
    page_layout_breadcrumbs_active_color: '#3C3950FF',
    page_layout_breadcrumbs_hover_color: '#3C3950FF',
    page_layout_breadcrumbs_alignment: 'left',
    page_layout_breadcrumbs_bottom_spacing: '0',
    page_layout_breadcrumbs_shop_category: '0',

    thegemPopups: [],
    thegemPopupsPost: [],
    thegemPopupsDefault: [],
    thegemPopupsPortfolio: [],
    thegemPopupsProduct: [],
    thegemPopupsProductCategories: [],
    thegemPopupsBlog: [],
    thegemPopupsSearch: [],
    popups_layout_source_post: 'default',
    popups_layout_source_default: 'default',
    popups_layout_source_portfolio: 'default',
    popups_layout_source_product: 'default',
    popups_layout_source_product_categories: 'default',
    popups_layout_source_blog: 'default',
    popups_layout_source_search: 'default',

    // Menu & Header
    header_show: '1',
    sticky_header: '1',
    disable_fixed_header: '',
    sticky_header_on_mobile: '',
    show_menu_socials: '1',
    show_menu_socials_mobile: '1',
    header_width: 'normal',
    top_area_width: 'normal',
    top_area_button_link_target: 'self',
    top_area_button_id: '',

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
    header_builder_mobile_menu_search: '',
    header_builder_mobile_menu_socials: '',

    top_background_type: 'color',
    top_background_color: '',
    top_background_image: '',
    top_background_image_repeat: '0',
    top_background_size: 'auto',
    top_background_position_x: 'center',
    top_background_position_y: 'center',
    top_background_image_color: '',
    top_background_image_overlay: '',
    top_background_pattern: '',
    top_background_gradient_type: '',
    top_background_gradient_position: '',
    top_background_gradient_angle: '',
    top_background_gradient_point1_color: '',
    top_background_gradient_point2_color: '',
    top_background_gradient_point1_position: '',
    top_background_gradient_point2_position: '',

    navigation_background_type: 'color',
    navigation_background_color: '',
    navigation_background_image: '',
    navigation_background_image_repeat: '0',
    navigation_background_size: 'auto',
    navigation_background_position_x: 'center',
    navigation_background_position_y: 'center',
    navigation_background_image_color: '',
    navigation_background_image_overlay: '',
    navigation_background_pattern: '',
    navigation_background_gradient_type: '',
    navigation_background_gradient_position: '',
    navigation_background_gradient_angle: '',
    navigation_background_gradient_point1_color: '',
    navigation_background_gradient_point2_color: '',
    navigation_background_gradient_point1_position: '',
    navigation_background_gradient_point2_position: '',

    top_area_background_type: 'color',
    top_area_background_color: '',
    top_area_background_image: '',
    top_area_background_image_repeat: '0',
    top_area_background_size: 'auto',
    top_area_background_position_x: 'center',
    top_area_background_position_y: 'center',
    top_area_background_image_color: '',
    top_area_background_image_overlay: '',
    top_area_background_pattern: '',
    top_area_background_gradient_type: '',
    top_area_background_gradient_position: '',
    top_area_background_gradient_angle: '',
    top_area_background_gradient_point1_color: '',
    top_area_background_gradient_point2_color: '',
    top_area_background_gradient_point1_position: '',
    top_area_background_gradient_point2_position: '',

    top_area_button_border_color: '',
    top_area_button_hover_border_color: '',

    main_menu_text_transform: 'none',
    main_menu_letter_spacing: 0,
    main_menu_font_style: 'regular',
    submenu_text_transform: 'none',
    submenu_letter_spacing: 0,
    submenu_font_style: 'regular',
    mobile_menu_text_transform: 'none',
    mobile_menu_letter_spacing: 0,
    mobile_menu_font_style: 'regular',
    overlay_menu_text_transform: 'none',
    overlay_menu_letter_spacing: '0',
    overlay_menu_font_style: 'regular',

    menu_use_light_menu_logo: '',
    submenu_highlighter_color: '',

    hide_search_icon: '',
    website_search_layout: 'fullscreen',
    website_search_layout_dropdown_placeholder_text: 'Search...',
    website_search_layout_fullscreen_placeholder_text: 'Start typing to search...',
    website_search_post_type_products: '1',
    website_search_post_type_posts: '1',
    website_search_post_type_pages: '1',
    website_search_post_type_portfolio: '1',
    website_search_ajax: '1',
    website_search_products_auto_suggestions: '16',
    website_search_posts_auto_suggestions: '8',
    website_search_posts_result_title: 'Results from Blog',
    website_search_pages_auto_suggestions: '8',
    website_search_pages_result_title: 'Results from Pages',
    website_search_portfolio_auto_suggestions: '8',
    website_search_portfolio_result_title: 'Results from Portfolio',
    website_search_popular: '0',
    website_search_popular_title: 'Top Searches:',
    website_search_select_terms_data: '',
    website_search_view_results_button_text: 'View all search results',

    // Footer
    footer: '1',
    footer_apply_all_existing: '0',
    footer_parallax: '',
    custom_footer: '',
    custom_footer_enable: '1',
    footer_widget_area_fullwidth: '',
    footer_bottom_area_fullwidth: '',
    footer_widget_area_hide: '',
    footer_active: '',
    footer_widget_woocommerce: '1',

    footer_widget_area_background_type: 'color',
    footer_widget_area_background_color: '',
    footer_widget_area_background_image: '',
    footer_widget_area_background_image_repeat: '0',
    footer_widget_area_background_size: 'auto',
    footer_widget_area_background_position_x: 'center',
    footer_widget_area_background_position_y: 'center',
    footer_widget_area_background_image_color: '',
    footer_widget_area_background_image_overlay: '',
    footer_widget_area_background_pattern: '',
    footer_widget_area_background_gradient_type: '',
    footer_widget_area_background_gradient_position: '',
    footer_widget_area_background_gradient_angle: '',
    footer_widget_area_background_gradient_point1_color: '',
    footer_widget_area_background_gradient_point2_color: '',
    footer_widget_area_background_gradient_point1_position: '',
    footer_widget_area_background_gradient_point2_position: '',

    footer_background_type: 'color',
    footer_background_color: '',
    footer_background_image: '',
    footer_background_image_repeat: '0',
    footer_background_size: 'auto',
    footer_background_position_x: 'center',
    footer_background_position_y: 'center',
    footer_background_image_color: '',
    footer_background_image_overlay: '',
    footer_background_pattern: '',
    footer_background_gradient_type: '',
    footer_background_gradient_position: '',
    footer_background_gradient_angle: '',
    footer_background_gradient_point1_color: '',
    footer_background_gradient_point2_color: '',
    footer_background_gradient_point1_position: '',
    footer_background_gradient_point2_position: '',

    custom_footer_background_type: 'color',
    custom_footer_background_color: '',
    custom_footer_background_image: '',
    custom_footer_background_image_repeat: '0',
    custom_footer_background_size: 'auto',
    custom_footer_background_position_x: 'center',
    custom_footer_background_position_y: 'center',
    custom_footer_background_image_color: '',
    custom_footer_background_image_overlay: '',
    custom_footer_background_pattern: '',
    custom_footer_background_gradient_type: '',
    custom_footer_background_gradient_position: '',
    custom_footer_background_gradient_angle: '',
    custom_footer_background_gradient_point1_color: '',
    custom_footer_background_gradient_point2_color: '',
    custom_footer_background_gradient_point1_position: '',
    custom_footer_background_gradient_point2_position: '',

    // Typography
    h1_text_transform: '',
    h1_letter_spacing: 0,
    h1_font_style: 'regular',
    h2_text_transform: '',
    h2_letter_spacing: 0,
    h2_font_style: 'regular',
    h3_text_transform: '',
    h3_letter_spacing: 0,
    h3_font_style: 'regular',
    h4_text_transform: '',
    h4_letter_spacing: 0,
    h4_font_style: 'regular',
    h5_text_transform: '',
    h5_letter_spacing: 0,
    h5_font_style: 'regular',
    h6_text_transform: '',
    h6_letter_spacing: 0,
    h6_font_style: 'regular',
    body_text_transform: '',
    body_letter_spacing: 0,
    body_font_style: 'regular',
    title_excerpt_text_transform: '',
    title_excerpt_letter_spacing: 0,
    title_excerpt_font_style: 'regular',
    styled_subtitle_text_transform: '',
    styled_subtitle_letter_spacing: 0,
    styled_subtitle_font_style: 'regular',
    xlarge_title_text_transform: '',
    xlarge_title_letter_spacing: 0,
    xlarge_title_font_style: 'regular',
    tabs_title_text_transform: '',
    tabs_title_letter_spacing: 0,
    tabs_title_font_style: 'regular',
    tabs_title_thin_text_transform: '',
    tabs_title_thin_letter_spacing: 0,
    tabs_title_thin_font_style: 'regular',
    counter_text_transform: '',
    counter_letter_spacing: 0,
    counter_font_style: 'regular',
    widget_title_text_transform: '',
    widget_title_letter_spacing: 0,
    widget_title_font_style: 'regular',
    light_title_font_size: '',
    light_title_text_transform: '',
    light_title_font_style: 'regular',
    light_title_letter_spacing: '',
    light_title_line_height: '',
    button_font_size: '',
    button_line_height: '',
    button_letter_spacing: '',
    button_text_transform: '',
    button_font_style: 'regular',
    button_thin_font_size: '',
    button_thin_line_height: '',
    button_thin_letter_spacing: '',
    button_thin_text_transform: '',
    button_thin_font_style: 'regular',
    widget_triangle_color: '',

    //Colors
    gradient_hover_point1_color: 'rgba(255,43,88,0.8)',
    gradient_hover_point1_position: '0',
    gradient_hover_type: 'linear',
    gradient_hover_point2_color: 'rgba(255,216,0,0.8)',
    gradient_hover_point2_position: '100',
    gradient_hover_angle: '90',
    gradient_hover_position: '',

    circular_overlay_hover_point1_color: 'rgba(0, 188, 212,0.75)',
    circular_overlay_hover_point1_position: '0',
    circular_overlay_hover_type: 'linear',
    circular_overlay_hover_point2_color: 'rgba(53, 64, 147,0.75)',
    circular_overlay_hover_point2_position: '100',
    circular_overlay_hover_angle: '90',
    circular_overlay_hover_position: '',

    contact_form_light_custom_styles: '1',
    contact_form_dark_custom_styles: '1',
    mailchimp_content_custom_styles: '1',
    mailchimp_sidebars_custom_styles: '1',
    mailchimp_footer_custom_styles: '1',
    tag_background_color: '',
    tag_font_color: '',
    tag_background_color_hover: '',
    tag_font_color_hover: '',

    //Form Colors
    contact_form_light_input_color: '',
    contact_form_light_input_background_color: '',
    contact_form_light_input_border_color: '',
    contact_form_light_input_placeholder_color: '',
    contact_form_light_input_icon_color: '',
    contact_form_light_label_color: '',
    contact_form_dark_input_color: '',
    contact_form_dark_input_background_color: '',
    contact_form_dark_input_border_color: '',
    contact_form_dark_input_placeholder_color: '',
    contact_form_dark_input_icon_color: '',
    contact_form_dark_label_color: '',
    mailchimp_content_input_color: '',
    mailchimp_content_input_background_color: '',
    mailchimp_content_input_border_color: '',
    mailchimp_content_input_placeholder_color: '',
    mailchimp_content_button_text_color: '',
    mailchimp_content_button_hover_text_color: '',
    mailchimp_content_button_background_color: '',
    mailchimp_content_button_hover_background_color: '',
    mailchimp_content_label_color: '',
    mailchimp_content_text_color: '',
    mailchimp_sidebars_background_color: '',
    mailchimp_sidebars_input_color: '',
    mailchimp_sidebars_input_background_color: '',
    mailchimp_sidebars_input_border_color: '',
    mailchimp_sidebars_input_placeholder_color: '',
    mailchimp_sidebars_button_text_color: '',
    mailchimp_sidebars_button_hover_text_color: '',
    mailchimp_sidebars_button_background_color: '',
    mailchimp_sidebars_button_hover_background_color: '',
    mailchimp_sidebars_label_color: '',
    mailchimp_sidebars_text_color: '',
    mailchimp_footer_background_color: '',
    mailchimp_footer_input_color: '',
    mailchimp_footer_input_background_color: '',
    mailchimp_footer_input_border_color: '',
    mailchimp_footer_input_placeholder_color: '',
    mailchimp_footer_button_text_color: '',
    mailchimp_footer_button_hover_text_color: '',
    mailchimp_footer_button_background_color: '',
    mailchimp_footer_button_hover_background_color: '',
    mailchimp_footer_label_color: '',
    mailchimp_footer_text_color: '',
    contact_form_light_button_style: '',
    contact_form_light_button_text_weight: '',
    contact_form_light_button_text_style: '',
    contact_form_light_button_text_transform: '',
    contact_form_light_button_size: '',
    contact_form_light_button_position: '',
    contact_form_light_button_border: '',
    contact_form_light_button_corner: '',
    contact_form_light_button_background_color: '',
    contact_form_light_button_hover_background_color: '',
    contact_form_light_button_border_color: '',
    contact_form_light_button_hover_border_color: '',
    contact_form_light_button_text_color: '',
    contact_form_light_button_hover_text_color: '',
    contact_form_dark_button_style: '',
    contact_form_dark_button_text_weight: '',
    contact_form_dark_button_text_style: '',
    contact_form_dark_button_text_transform: '',
    contact_form_dark_button_size: '',
    contact_form_dark_button_position: '',
    contact_form_dark_button_border: '',
    contact_form_dark_button_corner: '',
    contact_form_dark_button_background_color: '',
    contact_form_dark_button_hover_background_color: '',
    contact_form_dark_button_border_color: '',
    contact_form_dark_button_hover_border_color: '',
    contact_form_dark_button_text_color: '',
    contact_form_dark_button_hover_text_color: '',

    // TheGem PostTypes
    quickfinder_title_text_transform: '',
    quickfinder_title_letter_spacing: 0,
    quickfinder_title_font_style: 'regular',
    quickfinder_title_thin_text_transform: '',
    quickfinder_title_thin_letter_spacing: 0,
    quickfinder_title_thin_font_style: 'regular',
    quickfinder_description_text_transform: '',
    quickfinder_description_letter_spacing: 0,
    quickfinder_description_font_style: 'regular',
    gallery_title_text_transform: '',
    gallery_title_letter_spacing: 0,
    gallery_title_font_style: 'regular',
    gallery_title_bold_text_transform: '',
    gallery_title_bold_letter_spacing: 0,
    gallery_title_bold_font_style: 'regular',
    gallery_description_text_transform: '',
    gallery_description_letter_spacing: 0,
    gallery_description_font_style: 'regular',
    portfolio_title_text_transform: '',
    portfolio_title_letter_spacing: 0,
    portfolio_title_font_style: 'regular',
    portfolio_description_text_transform: '',
    portfolio_description_letter_spacing: 0,
    portfolio_description_font_style: 'regular',
    testimonial_text_transform: '',
    testimonial_letter_spacing: 0,
    testimonial_font_style: 'regular',
    testimonial_title_text_transform: '',
    testimonial_title_letter_spacing: 0,
    testimonial_title_font_style: 'regular',

    testimonial_name_font_family: 'Montserrat',
    testimonial_name_font_size: '14',
    testimonial_name_font_style: '700normal',
    testimonial_name_font_sets: '',
    testimonial_name_line_height: '25',
    testimonial_name_text_transform: 'uppercase',
    testimonial_name_letter_spacing: '',

    testimonial_company_font_family: 'Source Sans Pro',
    testimonial_company_font_size: '14',
    testimonial_company_font_style: '300normal',
    testimonial_company_font_sets: '',
    testimonial_company_line_height: '25',
    testimonial_company_text_transform: 'none',
    testimonial_company_letter_spacing: '',

    testimonial_position_font_family: 'Source Sans Pro',
    testimonial_position_font_size: '14',
    testimonial_position_font_style: '300normal',
    testimonial_position_font_sets: '',
    testimonial_position_line_height: '25',
    testimonial_position_text_transform: 'none',
    testimonial_position_letter_spacing: '',

    // Single Pages
    global_settings_apply_default: '1',
    global_settings_apply_post: '1',
    global_settings_apply_portfolio: '1',
    page_404_custom: '1',
    portfolio_archive_page: '',
    global_settings_apply_post_appearance: '',
    global_settings_apply_post_header: '',
    global_settings_apply_post_title: '',
    global_settings_apply_post_content: '',
    global_settings_apply_post_footer: '',
    global_settings_apply_post_extras: '',
    global_settings_apply_default_header: '',
    global_settings_apply_default_title: '',
    global_settings_apply_default_content: '',
    global_settings_apply_default_footer: '',
    global_settings_apply_default_extras: '',
    global_settings_apply_portfolio_appearance: '',
    global_settings_apply_portfolio_header: '',
    global_settings_apply_portfolio_title: '',
    global_settings_apply_portfolio_content: '',
    global_settings_apply_portfolio_footer: '',
    global_settings_apply_portfolio_extras: '',
    global_settings_apply_product_header: '',
    global_settings_apply_product_title: '',
    global_settings_apply_product_content: '',
    global_settings_apply_product_footer: '',
    global_settings_apply_product_extras: '',
    global_settings_apply_blog_header: '',
    global_settings_apply_blog_title: '',
    global_settings_apply_blog_content: '',
    global_settings_apply_blog_footer: '',
    global_settings_apply_blog_extras: '',
    global_settings_apply_product_categories_header: '',
    global_settings_apply_product_categories_title: '',
    global_settings_apply_product_categories_content: '',
    global_settings_apply_product_categories_footer: '',
    global_settings_apply_product_categories_extras: '',

    // Single Post
    post_layout_source: 'default',
    post_builder_template: '',
    post_builder_preview: '',
    single_post_builder_preview_post: '',

    // Single Page
    page_layout_source: 'default',
    page_builder_template: '',
    page_builder_preview: '',

    // Single Portfolio
    portfolio_layout_source: 'default',
    portfolio_builder_template: '',
    portfolio_builder_previews: '',
    portfolio_project_details: '',
    portfolio_project_details_data: '',

    // Archive Pages
    global_settings_apply_blog: '1',
    global_settings_apply_search: '1',
    search_page_custom_settings: '1',
    blog_hide_social_sharing: '0',

    // Archive Blog
    blog_archive_layout_source: 'default',
    blog_archive_builder_template: '',
    blog_archive_builder_preview: '',
    blog_layout_type: 'list',
    blog_layout_type_grid: 'justified',
    blog_layout_sorting_default_orderby: 'default',
    blog_layout_sorting_default_order: 'default',
    blog_layout_skin: 'alternative',
    blog_layout_columns_desktop: '3x',
    blog_layout_columns_tablet: '3x',
    blog_layout_columns_mobile: '2x',
    blog_layout_columns_100: '5',
    blog_layout_gaps_desktop: '42',
    blog_layout_gaps_tablet: '42',
    blog_layout_gaps_mobile: '42',
    blog_layout_sorting: '0',
    blog_layout_hover_effect: 'default',
    blog_layout_icon_on_hover: '1',
    blog_layout_caption_position: 'bellow',
    blog_layout_caption_featured_image: '1',
    blog_layout_caption_title: '1',
    blog_layout_caption_title_preset: 'h5',
    blog_layout_caption_description: '1',
    blog_layout_caption_date: '1',
    blog_layout_caption_categories: '1',
    blog_layout_caption_author: '1',
    blog_layout_caption_author_avatar: '1',
    blog_layout_caption_comments: '1',
    blog_layout_caption_likes: '1',
    blog_layout_caption_socials: '1',
    blog_layout_caption_read_more: '',
    blog_layout_caption_read_more_text: 'Read More',
    blog_layout_caption_content_alignment_desktop: 'left',
    blog_layout_caption_content_alignment_tablet: 'left',
    blog_layout_caption_content_alignment_mobile: 'left',
    blog_layout_caption_container_preset: 'transparent',
    blog_layout_caption_bottom_border: '1',
    blog_layout_pagination: '1',
    blog_layout_pagination_items_per_page: '12',
    blog_layout_pagination_items_per_page_desktop: '12',
    blog_layout_pagination_items_per_page_tablet: '12',
    blog_layout_pagination_items_per_page_mobile: '12',
    blog_layout_pagination_type: 'normal',
    blog_layout_pagination_reduce_html: '',
    blog_layout_pagination_reduce_html_items_count: '',
    blog_layout_load_more_text: 'Load More',
    blog_layout_load_more_icon: '',
    blog_layout_load_more_icon_pack: '',
    blog_layout_load_more_stretch: '',
    blog_layout_load_more_separator: '',
    blog_layout_load_more_spacing_desktop: '100',
    blog_layout_load_more_spacing_tablet: '100',
    blog_layout_load_more_spacing_mobile: '100',
    blog_layout_load_more_btn_type: 'flat',
    blog_layout_load_more_btn_size: 'small',
    blog_layout_load_more_btn_size_desktop: 'small',
    blog_layout_load_more_btn_size_tablet: 'small',
    blog_layout_load_more_btn_size_mobile: 'small',
    blog_layout_loading_animation: '0',
    blog_layout_animation_effect: 'move-up',
    blog_layout_ignore_highlights: '1',
    blog_layout_skeleton_loader: '0',

    // Archive Search
    global_settings_apply_search_header: '',
    global_settings_apply_search_title: '',
    global_settings_apply_search_content: '',
    global_settings_apply_search_footer: '',
    global_settings_apply_search_extras: '',
    search_layout_type: 'grid',
    search_layout_type_grid: 'justified',
    search_layout_skin: 'alternative',
    search_layout_columns_desktop: '4x',
    search_layout_columns_tablet: '3x',
    search_layout_columns_mobile: '2x',
    search_layout_list_columns: '1x',
    search_layout_columns_100: '5',
    search_layout_gaps_desktop: '42',
    search_layout_gaps_tablet: '42',
    search_layout_gaps_mobile: '42',
    search_layout_sorting: '0',
    search_layout_hover_effect: 'default',
    search_layout_icon_on_hover: '1',
    search_layout_post_type_indication: '1',
    search_layout_caption_position: 'bellow',
    search_layout_caption_featured_image: '1',
    search_layout_caption_title: '1',
    search_layout_caption_title_preset: 'h6',
    search_layout_caption_description: '1',
    search_layout_caption_date: '0',
    search_layout_caption_categories: '0',
    search_layout_caption_author: '0',
    search_layout_caption_author_avatar: '0',
    search_layout_caption_content_alignment_desktop: 'left',
    search_layout_caption_content_alignment_tablet: 'left',
    search_layout_caption_content_alignment_mobile: 'left',
    search_layout_caption_container_preset: 'transparent',
    search_layout_caption_bottom_border: '0',
    search_layout_pagination: '1',
    search_layout_pagination_items_per_page: '12',
    search_layout_pagination_type: 'normal',
    search_layout_load_more_text: 'Load More',
    search_layout_load_more_icon: '',
    search_layout_load_more_icon_pack: '',
    search_layout_load_more_stretch: '',
    search_layout_load_more_separator: '',
    search_layout_load_more_spacing_desktop: '100',
    search_layout_load_more_spacing_tablet: '100',
    search_layout_load_more_spacing_mobile: '100',
    search_layout_load_more_btn_type: 'flat',
    search_layout_load_more_btn_size: 'small',
    search_layout_mixed_grids_items: '12',
    search_layout_mixed_grids_title: 'Results from blogs and pages',
    search_layout_mixed_grids_show_all: 'Show all results',
    search_layout_mixed_grids_show_all_icon: '',
    search_layout_mixed_grids_show_all_icon_pack: '',
    search_layout_mixed_grids_show_all_stretch: '',
    search_layout_mixed_grids_show_all_separator: '',
    search_layout_mixed_grids_show_all_spacing_desktop: '100',
    search_layout_mixed_grids_show_all_spacing_tablet: '100',
    search_layout_mixed_grids_show_all_spacing_mobile: '100',
    search_layout_mixed_grids_show_all_btn_type: 'flat',
    search_layout_mixed_grids_show_all_btn_size: 'small',
    search_layout_loading_animation: '0',
    search_layout_animation_effect: 'move-up',
    search_layout_skeleton_loader: '0',

    // WooCommerce
    global_settings_apply_product: '1',
    global_settings_apply_product_categories: '1',
    woocommerce_activate_images_sizes: '',
    product_categories_price_page_color: '',
    mobile_cart_position: 'top',
    minicart_amount_label_color: '',
    minicart_main_background_color: '',
    product_hide_social_sharing: '0',
    product_title_show: '0',
    product_content_padding_top: '0',
    product_content_padding_top_tablet: '0',
    product_content_padding_top_mobile: '0',
    product_header_separator: '1',

    product_title_page_text_transform: '',
    product_title_page_letter_spacing: 0,
    product_title_page_font_style: 'regular',
    product_title_widget_text_transform: '',
    product_title_widget_letter_spacing: 0,
    product_title_widget_font_style: 'regular',
    product_title_cart_text_transform: '',
    product_title_cart_letter_spacing: 0,
    product_title_cart_font_style: 'regular',
    product_title_checkout_color: '#3C3950FF',
    product_title_listing_font_family: 'Montserrat',
    product_title_listing_text_transform: '',
    product_title_listing_letter_spacing: 0,
    product_title_listing_font_style: 'regular',
    product_price_listing_font_family: 'Source Sans Pro',
    product_price_listing_font_sets: '',
    product_price_listing_font_size: '18',
    product_price_listing_font_style: '400normal',
    product_price_listing_letter_spacing: '',
    product_price_listing_line_height: '18',
    product_price_listing_text_transform: '',
    product_price_page_text_transform: '',
    product_price_page_letter_spacing: 0,
    product_price_page_font_style: 'regular',
    product_price_widget_text_transform: '',
    product_price_widget_letter_spacing: 0,
    product_price_widget_font_style: 'regular',
    product_price_cart_text_transform: '',
    product_price_cart_letter_spacing: 0,
    product_price_cart_font_style: 'regular',
    woocommerce_price_text_transform: '',
    woocommerce_price_letter_spacing: 0,
    woocommerce_price_font_style: 'regular',

    // Cart & Checkout Options
    cart_layout_source: 'default',
    cart_builder_template: '',
    cart_empty_layout_source: 'default',
    cart_empty_builder_template: '',
    checkout_layout_source: 'default',
    checkout_thanks_layout_source: 'default',
    checkout_thanks_builder_template: '',
    checkout_builder_template: '',
    cart_label_count: '',
    cart_table_header_color: '',
    cart_table_header_background_color: '',
    cart_form_labels_color: '',
    checkout_step_title_color: '',
    checkout_step_background_color: '',
    checkout_step_title_active_color: '',
    checkout_step_background_active_color: '',
    hide_card_icon: '0',
    cart_layout: 'modern',
    modern_cart_steps: '1',
    modern_cart_steps_position: 'content_area',
    cart_empty_title: 'Your cart is currently empty.',
    cart_empty_text: 'No products in the cart.',
    cart_elements_cross_sells: '1',
    cart_elements_cross_sells_title: 'You may be interested in',
    cart_elements_cross_sells_items: '-1',
    cart_elements_cross_sells_columns_desktop: '4x',
    cart_elements_cross_sells_columns_tablet: '3x',
    cart_elements_cross_sells_columns_mobile: '2x',
    cart_elements_cross_sells_columns_100: '5',
    checkout_type: 'one-page',
    checkout_thank_you_extra: '',
    checkout_thank_you_default: '1',
    cart_icon: '',
    cart_icon_pack: '',
    cart_icon_default: 'cart',
    cart_label_type: '1',
    wishlist_icon_desktop: '',
    wishlist_icon_tablet: '',
    wishlist_icon_mobile: '',
    wishlist_icon_default: 'heart',
    wishlist_icon: '',
    wishlist_icon_pack: '',
    mini_cart_type: 'dropdown',
    mini_cart_sidebar_title: 'Shopping Cart',
    mini_cart_sidebar_view_cart_btn: '1',
    mini_cart_sidebar_infotext: '',

    // Product styles new options
    product_grid_title_legacy: '0',
    product_grid_title_font_family: 'Montserrat',
    product_grid_title_font_size: '14',
    product_grid_title_font_style: '700normal',
    product_grid_title_font_sets: '',
    product_grid_title_line_height: '18.2',
    product_grid_title_text_transform: 'none',
    product_grid_title_letter_spacing: '0',
    product_grid_title_color: '#5F727FFF',
    product_grid_title_color_hover: '#3C3950FF',
    product_grid_title_color_on_image: '#212227FF',
    product_grid_category_font_family: 'Montserrat',
    product_grid_category_font_size: '9',
    product_grid_category_font_style: '500normal',
    product_grid_category_font_sets: '',
    product_grid_category_line_height: '10.8',
    product_grid_category_text_transform: 'uppercase',
    product_grid_category_letter_spacing: '0.45',
    product_grid_category_color: '#99A9B5FF',
    product_grid_category_color_hover: '#00BCD4FF',
    product_grid_category_color_on_image: '#FFFFFFFF',
    product_grid_category_title_font_family: 'Montserrat',
    product_grid_category_title_font_size: '14',
    product_grid_category_title_font_style: '700normal',
    product_grid_category_title_font_sets: '',
    product_grid_category_title_line_height: '19.6',
    product_grid_category_title_text_transform: 'uppercase',
    product_grid_category_title_letter_spacing: '0.7',
    product_grid_category_title_color_dark: '#212227FF',
    product_grid_category_title_color_light: '#FFFFFFFF',
    product_grid_category_title_color_below_image: '#5F727FFF',
    product_grid_category_counts_font_family: 'Montserrat',
    product_grid_category_counts_font_size: '11',
    product_grid_category_counts_font_style: '500normal',
    product_grid_category_counts_font_sets: '',
    product_grid_category_counts_line_height: '11',
    product_grid_category_counts_text_transform: 'uppercase',
    product_grid_category_counts_letter_spacing: '0.45',
    product_grid_category_counts_color_dark: '#212227FF',
    product_grid_category_counts_color_light: '#FFFFFFB3',
    product_grid_category_counts_color_below_image: '#5F727FB3',
    product_grid_price_color: '#5F727FFF',
    product_grid_price_color_on_image: '#212227FF',
    product_grid_button_border_width: '1',
    product_grid_button_border_radius: '30',
    product_grid_button_add_to_cart_color: '#5F727FFF',
    product_grid_button_add_to_cart_color_hover: '#FFFFFFFF',
    product_grid_button_add_to_cart_background: '#DFE5E8FF',
    product_grid_button_add_to_cart_background_hover: '#00BCD4FF',
    product_grid_button_add_to_cart_border_color: '#DFE5E8FF',
    product_grid_button_add_to_cart_border_color_hover: '#00BCD4FF',
    product_grid_button_select_options_color: '#5F727FFF',
    product_grid_button_select_options_color_hover: '#FFFFFFFF',
    product_grid_button_select_options_background: '',
    product_grid_button_select_options_background_hover: '#00BCD4FF',
    product_grid_button_select_options_border_color: '#5F727FFF',
    product_grid_button_select_options_border_color_hover: '#00BCD4FF',
    product_grid_button_load_more_border_width: '1',
    product_grid_button_load_more_border_radius: '30',
    product_grid_button_load_more_color: '#5F727FFF',
    product_grid_button_load_more_color_hover: '#FFFFFFFF',
    product_grid_button_load_more_background: '#DFE5E8FF',
    product_grid_button_load_more_background_hover: '#00BCD4FF',
    product_grid_button_load_more_border_color: '#DFE5E8FF',
    product_grid_button_load_more_border_color_hover: '#00BCD4FF',
    product_grid_icons_border_width: '0',
    product_grid_icons_border_radius: '20',
    product_grid_icons_color: '#5F727FFF',
    product_grid_icons_color_hover: '#FFFFFFFF',
    product_grid_icons_caption_image_color: '#212227FF',
    product_grid_icons_caption_image_color_hover: '#FFFFFFFF',
    product_grid_icons_background: '#DFE5E8FF',
    product_grid_icons_background_hover: '#00BCD4FF',
    product_grid_icons_border_color: '',
    product_grid_icons_border_color_hover: '',
    product_grid_quick_view_color: '#FFFFFFFF',
    product_grid_quick_view_background: '#00BCD4A6',
    product_labels_font_family: 'Montserrat',
    product_labels_font_size: '7',
    product_labels_font_style: '700normal',
    product_labels_font_sets: '',
    product_labels_line_height: '8.4',
    product_labels_text_transform: 'uppercase',
    product_labels_letter_spacing: '0.35',
    product_labels_text_color: '#FFFFFFFF',
    product_labels_sale_background: '#00BCD4FF',
    product_labels_new_background: '#393D50FF',
    product_labels_out_of_stock_background: '#F44336FF',
    product_labels_style: '1',
    product_label_new_text: 'New',
    product_label_sale_text: 'On Sale',
    product_label_out_of_stock_text: 'Out of stock',
    product_label_sale_type: 'percentage',
    product_label_sale_prefix: '-',
    product_label_sale_suffix: '%',
    product_page_button_add_to_cart_border_width: '',
    product_page_button_add_to_cart_border_radius: '',
    product_page_button_add_to_cart_color: '',
    product_page_button_add_to_cart_color_hover: '',
    product_page_button_add_to_cart_background: '',
    product_page_button_add_to_cart_background_hover: '',
    product_page_button_add_to_cart_border_color: '',
    product_page_button_add_to_cart_border_color_hover: '',
    product_page_button_add_to_wishlist_color: '',
    product_page_button_add_to_wishlist_color_hover: '',
    product_page_button_add_to_wishlist_color_filled: '',
    product_rating_stars_base_color: '',
    product_rating_stars_rated_color: '',

    // Product page layout new options
    product_layout_source: 'default',
    product_builder_template: '',
    product_builder_preview_product: '',
    product_page_layout: 'default',
    product_page_layout_style: 'horizontal_tabs',
    product_page_layout_centered: '0',
    product_page_layout_centered_top_margin: '42',
    product_page_layout_centered_boxed: '0',
    product_page_layout_centered_boxed_color: '',
    product_page_layout_preset: 'col-50-50',
    product_page_layout_fullwidth: '0',
    product_page_layout_sticky: '0',
    product_page_layout_sticky_offset: '0',
    product_page_skeleton_loader: '0',
    product_page_layout_background: '',
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
    product_page_additional_tabs: '0',
    product_page_additional_tabs_data: '',
    product_page_button_add_to_cart_text: 'Add to Cart',
    product_page_button_add_to_cart_icon_show: '0',
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
    size_guide_text: 'Size guide',

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
    product_gallery_retina_ready: '0',
    product_gallery_grid_columns: '1x',
    product_gallery_grid_gaps: '42',
    product_gallery_grid_gaps_hide: '0',
    product_gallery_grid_top_margin: '0',
    product_gallery_video_autoplay: '0',

    // Product archives new options
    product_archive_layout_source: 'default',
    product_archive_builder_template: '',
    product_archive_builder_preview: '',
    product_archive_type: 'grid',
    product_archive_content_width: 'boxed',
    product_archive_used_in_fullwidth_section: '0',
    product_archive_layout: 'justified',
    product_archive_columns_desktop: '4x',
    product_archive_columns_tablet: '3x',
    product_archive_columns_mobile: '2x',
    product_archive_columns_desktop_list : '2x',
    product_archive_columns_tablet_list : '2x',
    product_archive_columns_100: '5',
    product_archive_size_desktop: '42',
    product_archive_size_tablet: '42',
    product_archive_size_mobile: '42',
    product_archive_image_column_width_desktop: '',
    product_archive_image_column_width_tablet: '',
    product_archive_image_column_width_mobile: '',
    product_archive_image_aspect_ratio: 'portrait',
    product_archive_preset_type: 'below',
    product_archive_preset_below: 'default-cart-button',
    product_archive_preset_on_image: 'default-cart-button',
    product_archive_preset_on_hover: 'default',
    product_archive_quick_view: '0',
    product_archive_quick_view_text: 'Quick View',
    product_archive_orderby: 'default',
    product_archive_order: 'asc',
    product_archive_show_sorting: '0',
    product_archive_category_description_position: 'above',
    product_archive_show_categories_desktop: '1',
    product_archive_show_categories_tablet: '1',
    product_archive_show_categories_mobile: '0',
    product_archive_show_title: '1',
    product_archive_show_description: '1',
    product_archive_show_divider: '1',
    product_archive_show_price: '1',
    product_archive_show_reviews_desktop: '1',
    product_archive_show_reviews_tablet: '1',
    product_archive_show_reviews_mobile: '0',
    product_archive_show_swatches_desktop: '0',
    product_archive_show_swatches_tablet: '0',
    product_archive_show_swatches_mobile: '0',
    product_archive_show_swatches_data: '',
    product_archive_show_add_to_cart: '1',
    product_archive_add_to_cart_type: 'button',
    product_archive_cart_button_show_icon: '1',
    product_archive_cart_button_text: 'Add To Cart',
    product_archive_cart_icon: '',
    product_archive_cart_icon_pack: '',
    product_archive_select_options_button_text: 'Select Options',
    product_archive_select_options_icon: '',
    product_archive_select_options_icon_pack: '',
    product_archive_show_wishlist: '1',
    product_archive_add_wishlist_icon: '',
    product_archive_add_wishlist_icon_pack: '',
    product_archive_added_wishlist_icon: '',
    product_archive_added_wishlist_icon_pack: '',
    product_archive_items_per_page_desktop: '12',
    product_archive_items_per_page_tablet: '12',
    product_archive_items_per_page_mobile: '12',
    product_archive_show_pagination: '1',
    product_archive_pagination_type: 'normal',
    product_archive_pagination_reduce_html: '',
    product_archive_pagination_reduce_html_items_count: '',
    product_archive_more_button_text: 'Load More',
    product_archive_more_icon: '',
    product_archive_more_icon_pack: '',
    product_archive_more_stretch_full_width: '',
    product_archive_more_show_separator: '',
    product_archive_labels: '1',
    product_archive_label_sale: '1',
    product_archive_label_new: '1',
    product_archive_label_out_stock: '1',
    product_archive_filters_type: 'native',
    product_archive_filters_ajax: '0',
    product_archive_scroll_to_top: '1',
    product_archive_remove_attr_counts: '0',
    product_archive_filters_style: 'standard',
    product_archive_filters_style_native: 'sidebar',
    product_archive_filter_by_categories: '1',
    product_archive_filter_by_categories_hierarchy: '0',
    product_archive_filter_by_categories_count: '0',
    product_archive_filter_by_categories_title: 'Categories',
    product_archive_filter_by_categories_order_by: 'name',
    product_archive_filter_by_categories_order: '1',
    product_archive_filter_by_price: '0',
    product_archive_filter_by_price_title: 'Price',
    product_archive_filter_by_price_order: '3',
    product_archive_filter_by_attribute: '0',
    product_archive_filter_by_attribute_count: '0',
    product_archive_filter_by_attribute_hide_empty: '0',
    product_archive_filter_by_attribute_data: '',
    product_archive_filter_by_attribute_order: '2',
    product_archive_filter_by_status: '0',
    product_archive_filter_by_status_title: 'Status',
    product_archive_filter_by_status_sale: '1',
    product_archive_filter_by_status_sale_text: 'On Sale',
    product_archive_filter_by_status_stock: '1',
    product_archive_filter_by_status_stock_text: 'In Stock',
    product_archive_filter_by_status_count: '0',
    product_archive_filter_by_status_order: '4',
    product_archive_filter_by_search: '0',
    product_archive_filters_text_labels_all_text: 'Show All',
    product_archive_filters_text_labels_clear_text: 'Clear Filters',
    product_archive_filters_text_labels_search_text: 'Search by Product',
    product_archive_filter_buttons_hidden_show_text: 'Show filters',
    product_archive_filter_buttons_hidden_sidebar_title: 'Filter',
    product_archive_filter_buttons_hidden_filter_by_text: 'Filter By',
    product_archive_added_cart_text: 'Item added to cart',
    product_archive_added_wishlist_text: 'Item added to wishlist',
    product_archive_removed_wishlist_text: 'Item removed from wishlist',
    product_archive_view_cart_button_text: 'View Cart',
    product_archive_checkout_button_text: 'Checkout',
    product_archive_view_wishlist_button_text: 'View Wishlist',
    product_archive_not_found_text: 'No items were found matching your selection.',
    product_archive_loading_animation: '0',
    product_archive_animation_effect: 'move-up',
    product_archive_ignore_highlights: '1',
    product_archive_skeleton_loader: '0',
    product_archive_featured_only: '0',
    product_archive_sale_only: '0',
    product_archive_social_sharing: '0',
    product_archive_customize_styles: '0',
    product_archive_image_hover_effect_image: 'fade',
    product_archive_image_hover_effect_page: 'fade',
    product_archive_image_hover_effect_hover: 'fade',
    product_archive_image_hover_effect_fallback: 'zooming',
    product_archive_caption_position: 'right',
    product_archive_caption_layout: 'vertical',
    product_archive_caption_container_preset: 'transparent',
    product_archive_caption_container_alignment_desktop: '',
    product_archive_caption_container_alignment_tablet: '',
    product_archive_caption_container_alignment_mobile: '',
    product_archive_caption_container_background_color: '',
    product_archive_caption_container_background_color_hover: '',
    product_archive_caption_container_separator: '',
    product_archive_caption_container_separator_width: '',
    product_archive_caption_container_separator_color: '',
    product_archive_caption_container_preset_hover: 'light',
    product_archive_caption_container_preset_hover_background_color: '',
    product_archive_caption_container_alignment_hover: '',
    product_archive_stay_visible: '4000',

    // Performance
    caching_plugin: 'wp_super_cache',
    delay_js_execution: '1',
    excluded_js_files_area: '',
    disable_gutenberg_css: '',
    product_page_force_delay: '',
    shop_page_force_delay: '',
    enable_mobile_lazy_loading: '',
    page_speed_image_load: 'native',
    pagespeed_lazy_images_desktop_enable: '',
    pagespeed_lazy_images_mobile_enable: '',
    pagespeed_lazy_images_page_cache_enabled: '',
    pagespeed_lazy_load_exclusions: '',
    pagespeed_lazy_load_nth_images: '1',

    // Contacts & Socials
    facebook_active: '',
    facebook_link: '#',
    linkedin_active: '',
    linkedin_link: '#',
    twitter_active: '',
    twitter_link: '#',
    instagram_active: '',
    instagram_link: '#',
    pinterest_active: '',
    pinterest_link: '#',
    stumbleupon_active: '',
    stumbleupon_link: '#',
    rss_active: '',
    rss_link: '#',
    vimeo_active: '',
    vimeo_link: '#',
    youtube_active: '',
    youtube_link: '#',
    flickr_active: '',
    flickr_link: '#',
    tumblr_active: '',
    tumblr_link: '#',
    wordpress_active: '',
    wordpress_link: '#',
    dribbble_active: '',
    dribbble_link: '#',
    deviantart_active: '',
    deviantart_link: '',
    share_active: '',
    share_link: '#',
    myspace_active: '',
    myspace_link: '#',
    skype_active: '',
    skype_link: '#',
    picassa_active: '',
    picassa_link: '#',
    googledrive_active: '',
    googledrive_link: '#',
    blogger_active: '',
    blogger_link: '#',
    spotify_active: '',
    spotify_link: '#',
    delicious_active: '',
    delicious_link: '#',
    telegram_active: '',
    telegram_link: '#',
    vk_active: '',
    vk_link: '#',
    whatsapp_active: '',
    whatsapp_link: '#',
    viber_active: '',
    viber_link: '#',
    ok_active: '',
    ok_link: '#',
    reddit_active: '',
    reddit_link: '#',
    slack_active: '',
    slack_link: '#',
    askfm_active: '',
    askfm_link: '#',
    meetup_active: '',
    meetup_link: '#',
    weibo_active: '',
    weibo_link: '#',
    qzone_active: '',
    qzone_link: '#',
    soundcloud_active: '',
    soundcloud_link: '#',
    discord_active: '',
    discord_link: '#',
    tiktok_active: '',
    tiktok_link: '#',

    show_social_icons: '',
    add_new_social: '',

    // Custom CSS & JS
    custom_js_header: '',
    tracking_js: '',

    // Unknown
    page_default_title_style: '1',
    page_default_title_breadcrumbs: true,
    page_default_sidebar: true,
    image: null,
    image_width: 25,
    catalog_view: '',
    product_quick_view: '',
    pagespeed_lazy_images_visibility_offset: 50,
    top_area_show: '1',
    header: true, //new
    top_area_button: true,
    use_light_menu_logo: false,
    options_sticky_header: false,
    top_area_transparency: false,
    menu_opacity: 50,
    top_area_opacity: 37,
    page_padding_locked: false,


    // pavel: options for storing selected image real width for to-block-logo-select
    logo_selected_img_width: 328,
    small_logo_selected_img_width: 264,
    logo_light_selected_img_width: 328,
    small_logo_light_selected_img_width: 264,

    // pavel: checkboxes from themeoptions
    // sed "s/</\n</g" <file with old themeoptions contents> | grep checkbox | grep theme_options | sed "s/^.*\[//" | sed "s/\].*/: '',/"
    disable_scroll_top_button: '',
    disable_uppercase_font: '',
    disable_smooth_scroll: '',
    enable_page_preloader: '',
    disable_og_tags: '',
    activate_news_posttype: '',
    activate_nivoslider: '',
    global_hide_breadcrumbs: '',
    top_area_contacts: '',
    top_area_socials: '',
    top_area_disable_fixed: '',
    top_area_disable_mobile: '',
    top_area_disable_tablet: '',
    styled_subtitle_custom_responsive_fonts: '',
    h1_custom_responsive_fonts: '',
    h2_custom_responsive_fonts: '',
    h3_custom_responsive_fonts: '',
    h4_custom_responsive_fonts: '',
    h5_custom_responsive_fonts: '',
    h6_custom_responsive_fonts: '',
    xlarge_custom_responsive_fonts: '',
    title_excerpt_custom_responsive_fonts: '',
    counter_custom_responsive_fonts: '',
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
    portfolio_hide_date: '',
    portfolio_hide_sets: '',
    portfolio_hide_likes: '',
    portfolio_hide_top_navigation: '',
    portfolio_hide_bottom_navigation: '',
    portfolio_hide_socials: '',
    po_custom_types: '',
    font_preload_enabled: '',
    font_preload_preloadable_fonts: '',
    font_preload_preloaded_fonts: '',
};

var pageOptionsDefaults = {
    // pavel: checkboxes from themeoptions
    // sed "s/</\n</g" <file with old themeoptions contents> | grep checkbox | grep thegem_page_data_options_default | sed "s/^.*\[//" | sed "s/\].*/: '',/"
    global: {
        menu_show: '1',
        title_show: '1',
        title_use_page_settings: '0',
        top_area_alignment: '',
        header_top_area_transparent: '',
        header_top_area_opacity: '',
        title_alignment: 'center',
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
        sidebar_show: '0',
        effects_hide_header: '',
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        title_breadcrumbs_alignment: 'center',
        title_breadcrumbs_shop_category: '0',
        product_header_separator: '1',
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',
    },
    default: {
        menu_show: '1',
        title_show: '1',
        title_use_page_settings: '0',
        header_hide_top_area: '0',
        header_hide_top_area_tablet: '0',
        header_hide_top_area_mobile: '0',
        title_rich_content: '',
        title_content: '',
        title_alignment: 'center',
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
        content_padding_top: '',
        content_padding_top_tablet: '',
        content_padding_top_mobile: '',
        content_padding_bottom: '',
        content_padding_bottom_tablet: '',
        content_padding_bottom_mobile: '',
        sidebar_show: '0',
        effects_hide_footer: '0',
        footer_hide_widget_area: '0',
        footer_hide_default: '0',
        footer_custom: '0',
        footer_custom_show: '0',
        enable_page_preloader: '0',
        effects_disabled: '0',
        delay_js_execution: '1',
        excluded_js_files: '0',
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        title_breadcrumbs_alignment: 'center',
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',
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
        popups_layout_source: 'default',
        custom_fields: '',
        custom_fields_data: '',
    },
    post: {
        menu_show: '1',
        show_featured_content: '',
        title_show: '1',
        title_use_page_settings: '0',
        header_hide_top_area: '0',
        header_hide_top_area_tablet: '0',
        header_hide_top_area_mobile: '0',
        title_rich_content: '',
        title_content: '',
        title_alignment: 'center',
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
        content_padding_top: '',
        content_padding_top_tablet: '',
        content_padding_top_mobile: '',
        content_padding_bottom: '',
        content_padding_bottom_tablet: '',
        content_padding_bottom_mobile: '',
        sidebar_show: '0',
        effects_hide_footer: '0',
        footer_hide_widget_area: '0',
        footer_hide_default: '0',
        footer_custom: '0',
        footer_custom_show: '0',
        enable_page_preloader: '0',
        effects_disabled: '0',
        delay_js_execution: '1',
        excluded_js_files: '0',
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        title_breadcrumbs_alignment: 'center',
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',
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
        popups_layout_source: 'default',
        custom_fields: '',
        custom_fields_data: '',
    },
    portfolio: {
        menu_show: '1',
        title_show: '1',
        title_use_page_settings: '0',
        header_hide_top_area: '0',
        header_hide_top_area_tablet: '0',
        header_hide_top_area_mobile: '0',
        title_rich_content: '',
        title_content: '',
        title_alignment: 'center',
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
        content_padding_top: '',
        content_padding_top_tablet: '',
        content_padding_top_mobile: '',
        content_padding_bottom: '',
        content_padding_bottom_tablet: '',
        content_padding_bottom_mobile: '',
        sidebar_show: '0',
        effects_hide_footer: '0',
        footer_hide_widget_area: '0',
        footer_hide_default: '0',
        footer_custom: '0',
        footer_custom_show: '0',
        enable_page_preloader: '0',
        effects_disabled: '0',
        delay_js_execution: '1',
        excluded_js_files: '0',
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        title_breadcrumbs_alignment: 'center',
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',
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
        popups_layout_source: 'default',
        custom_fields: '',
        custom_fields_data: '',
    },
    blog: {
        menu_show: '1',
        title_show: '1',
        title_use_page_settings: '0',
        header_hide_top_area: '0',
        header_hide_top_area_tablet: '0',
        header_hide_top_area_mobile: '0',
        title_rich_content: '',
        title_content: '',
        title_alignment: 'center',
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
        content_padding_top: '',
        content_padding_top_tablet: '',
        content_padding_top_mobile: '',
        content_padding_bottom: '',
        content_padding_bottom_tablet: '',
        content_padding_bottom_mobile: '',
        sidebar_show: '0',
        effects_hide_footer: '0',
        footer_hide_widget_area: '0',
        footer_hide_default: '0',
        footer_custom: '0',
        footer_custom_show: '0',
        enable_page_preloader: '0',
        effects_disabled: '0',
        delay_js_execution: '1',
        excluded_js_files: '0',
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        title_breadcrumbs_alignment: 'center',
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',

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

        popups_layout_source: 'default',
    },
    search: {
        menu_show: '1',
        title_show: '1',
        title_use_page_settings: '0',
        header_hide_top_area: '0',
        header_hide_top_area_tablet: '0',
        header_hide_top_area_mobile: '0',
        title_rich_content: '',
        title_content: '',
        title_alignment: 'center',
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
        content_padding_top: '',
        content_padding_top_tablet: '',
        content_padding_top_mobile: '',
        content_padding_bottom: '',
        content_padding_bottom_tablet: '',
        content_padding_bottom_mobile: '',
        sidebar_show: '0',
        effects_hide_footer: '0',
        footer_hide_widget_area: '0',
        footer_hide_default: '0',
        footer_custom: '0',
        footer_custom_show: '0',
        enable_page_preloader: '0',
        effects_disabled: '0',
        delay_js_execution: '1',
        excluded_js_files: '0',
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        title_breadcrumbs_alignment: 'center',
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',
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
        popups_layout_source: 'default',
    },
    product: {
        menu_show: '1',
        title_show: '1',
        title_use_page_settings: '0',
        header_hide_top_area: '0',
        header_hide_top_area_tablet: '0',
        header_hide_top_area_mobile: '0',
        title_rich_content: '',
        title_content: '',
        title_alignment: 'center',
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
        content_padding_top: '',
        content_padding_top_tablet: '',
        content_padding_top_mobile: '',
        content_padding_bottom: '',
        content_padding_bottom_tablet: '',
        content_padding_bottom_mobile: '',
        sidebar_show: '0',
        effects_hide_footer: '0',
        footer_hide_widget_area: '0',
        footer_hide_default: '0',
        footer_custom: '0',
        footer_custom_show: '0',
        footer_widget_woocommerce: '1',
        enable_page_preloader: '0',
        effects_disabled: '0',
        delay_js_execution: '1',
        excluded_js_files: '0',
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        social_sharing_button: '1',
        title_breadcrumbs_alignment: 'center',
        title_breadcrumbs_shop_category: '0',
        product_header_separator: '1',
        page_layout_breadcrumbs: '1',
        page_layout_breadcrumbs_default_color: '#99A9B5FF',
        page_layout_breadcrumbs_active_color: '#3C3950FF',
        page_layout_breadcrumbs_hover_color: '#3C3950FF',
        page_layout_breadcrumbs_alignment: 'left',
        page_layout_breadcrumbs_bottom_spacing: '0',
        page_layout_breadcrumbs_shop_category: '0',
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',
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
        popups_layout_source: 'default',
        custom_fields: '',
        custom_fields_data: '',
    },
    product_categories: {
        menu_show: '1',
        title_show: '1',
        title_use_page_settings: '0',
        header_hide_top_area: '0',
        header_hide_top_area_tablet: '0',
        header_hide_top_area_mobile: '0',
        title_rich_content: '',
        title_content: '',
        title_alignment: 'center',
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
        content_padding_top: '',
        content_padding_top_tablet: '',
        content_padding_top_mobile: '',
        content_padding_bottom: '',
        content_padding_bottom_tablet: '',
        content_padding_bottom_mobile: '',
        sidebar_show: '0',
        effects_hide_footer: '0',
        footer_hide_widget_area: '0',
        footer_hide_default: '0',
        footer_custom: '0',
        footer_custom_show: '0',
        footer_widget_woocommerce: '1',
        enable_page_preloader: '0',
        effects_disabled: '0',
        delay_js_execution: '1',
        excluded_js_files: '0',
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        title_breadcrumbs_alignment: 'center',
        title_breadcrumbs_shop_category: '0',
        product_header_separator: '1',
        page_layout_breadcrumbs: '1',
        page_layout_breadcrumbs_default_color: '#99A9B5FF',
        page_layout_breadcrumbs_active_color: '#3C3950FF',
        page_layout_breadcrumbs_hover_color: '#3C3950FF',
        page_layout_breadcrumbs_alignment: 'left',
        page_layout_breadcrumbs_bottom_spacing: '0',
        page_layout_breadcrumbs_shop_category: '0',
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',

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

        popups_layout_source: 'default',
    },
};

// custom post types default options
const customPostTypes = JSON.parse(JSON.stringify(config.customPostTypes));
for(let post of customPostTypes) {
    pageOptionsDefaults[post.value] = {
        // layout
        global_settings_apply_header: '',
        global_settings_apply_title: '',
        global_settings_apply_content: '',
        global_settings_apply_footer: '',
        global_settings_apply_extras: '',
        post_layout_source: 'default',
        post_builder_template: '',
        single_post_builder_preview_post: '',
        // menu & header
        effects_hide_header: '',
        header_transparent: '',
        header_opacity: '50',
        header_menu_logo_light: '',
        header_top_area_transparent: '0',
        header_top_area_opacity: '0',
        header_hide_top_area: '0',
        header_hide_top_area_tablet: '0',
        header_hide_top_area_mobile: '0',
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
        // title area
        title_show: '1',
        title_style: '1',
        title_template: '',
        title_rich_content: '',
        title_content: '',
        title_alignment: 'center',
        title_use_page_settings: '0',
        title_breadcrumbs: '0',
        title_breadcrumbs_alignment: 'center',
        breadcrumbs_default_color: '',
        breadcrumbs_active_color: '',
        breadcrumbs_hover_color: '',
        title_title_width: '',
        title_excerpt_width: '',
        title_text_color: '#FFFFFFFF',
        title_excerpt_text_color: '#FFFFFFFF',
        title_padding_locked: '',
        title_padding_tablet_locked: '',
        title_padding_mobile_locked: '',
        title_padding_left: '',
        title_padding_right: '',
        title_padding_top: '',
        title_padding_bottom: '',
        title_padding_tablet_left: '',
        title_padding_tablet_right: '',
        title_padding_tablet_top: '',
        title_padding_tablet_bottom: '',
        title_padding_mobile_left: '',
        title_padding_mobile_right: '',
        title_padding_mobile_top: '',
        title_padding_mobile_bottom: '',
        title_top_margin: '0',
        title_top_margin_tablet: '0',
        title_top_margin_mobile: '0',
        title_excerpt_top_margin: '18',
        title_excerpt_top_margin_tablet: '18',
        title_excerpt_top_margin_mobile: '18',
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
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',
        menu_show: '1',
        show_featured_content: '',
        // content & sidebar
        sidebar_show: '0',
        sidebar_position: 'left',
        page_default_sidebar: '1',
        sidebar_sticky: '0',
        content_padding_top: '',
        content_padding_top_tablet: '',
        content_padding_top_mobile: '',
        content_padding_bottom: '',
        content_padding_bottom_tablet: '',
        content_padding_bottom_mobile: '',
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
        // footer
        effects_hide_footer: '0',
        footer_hide_widget_area: '0',
        footer_hide_default: '0',
        footer_custom: '0',
        footer_custom_show: '0',
        effects_parallax_footer: '',
        // extras
        enable_page_preloader: '0',
        effects_disabled: '0',
        delay_js_execution: '1',
        excluded_js_files: '0',
        // popups
        popups_layout_source: 'default',
        // custom fields
        custom_fields: '',
        custom_fields_data: '',
    }
}

// custom taxonomies default options
const customTaxonomies = JSON.parse(JSON.stringify(config.customTaxonomies));
for(let taxonomy of customTaxonomies) {
    pageOptionsDefaults[taxonomy.value] = {
        // layout
        global_settings_apply_header: '',
        global_settings_apply_title: '',
        global_settings_apply_content: '',
        global_settings_apply_footer: '',
        global_settings_apply_extras: '',
        // Archive Blog
        archive_layout_source: 'default',
        archive_builder_template: '',
        archive_builder_preview: '',
        archive_layout_type: 'list',
        archive_layout_type_grid: 'justified',
        archive_layout_sorting_default_orderby: 'default',
        archive_layout_sorting_default_order: 'default',
        archive_layout_skin: 'alternative',
        archive_layout_columns_desktop: '3x',
        archive_layout_columns_tablet: '3x',
        archive_layout_columns_mobile: '2x',
        archive_layout_columns_100: '5',
        archive_layout_gaps_desktop: '42',
        archive_layout_gaps_tablet: '42',
        archive_layout_gaps_mobile: '42',
        archive_layout_sorting: '0',
        archive_layout_hover_effect: 'default',
        archive_layout_icon_on_hover: '1',
        archive_layout_caption_position: 'bellow',
        archive_layout_caption_featured_image: '1',
        archive_layout_caption_title: '1',
        archive_layout_caption_title_preset: 'h5',
        archive_layout_caption_description: '1',
        archive_layout_caption_date: '1',
        archive_layout_caption_categories: '1',
        archive_layout_caption_author: '1',
        archive_layout_caption_author_avatar: '1',
        archive_layout_caption_comments: '1',
        archive_layout_caption_likes: '1',
        archive_layout_caption_socials: '1',
        archive_layout_caption_read_more: '',
        archive_layout_caption_read_more_text: 'Read More',
        archive_layout_caption_content_alignment_desktop: 'left',
        archive_layout_caption_content_alignment_tablet: 'left',
        archive_layout_caption_content_alignment_mobile: 'left',
        archive_layout_caption_container_preset: 'transparent',
        archive_layout_caption_bottom_border: '1',
        archive_layout_pagination: '1',
        archive_layout_pagination_reduce_html: '',
        archive_layout_pagination_reduce_html_items_count: '',
        archive_layout_pagination_items_per_page: '12',
        archive_layout_pagination_items_per_page_desktop: '12',
        archive_layout_pagination_items_per_page_tablet: '12',
        archive_layout_pagination_items_per_page_mobile: '12',
        archive_layout_pagination_type: 'normal',
        archive_layout_load_more_text: 'Load More',
        archive_layout_load_more_icon: '',
        archive_layout_load_more_icon_pack: '',
        archive_layout_load_more_stretch: '',
        archive_layout_load_more_separator: '',
        archive_layout_load_more_spacing_desktop: '100',
        archive_layout_load_more_spacing_tablet: '100',
        archive_layout_load_more_spacing_mobile: '100',
        archive_layout_load_more_btn_type: 'flat',
        archive_layout_load_more_btn_size: 'small',
        archive_layout_load_more_btn_size_desktop: 'small',
        archive_layout_load_more_btn_size_tablet: 'small',
        archive_layout_load_more_btn_size_mobile: 'small',
        archive_layout_loading_animation: '0',
        archive_layout_animation_effect: 'move-up',
        archive_layout_ignore_highlights: '1',
        archive_layout_skeleton_loader: '0',
        // menu & header
        effects_hide_header: '',
        header_transparent: '',
        header_opacity: '50',
        header_menu_logo_light: '',
        header_top_area_transparent: '0',
        header_top_area_opacity: '0',
        header_hide_top_area: '0',
        header_hide_top_area_tablet: '0',
        header_hide_top_area_mobile: '0',
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
        // title area
        title_show: '1',
        title_style: '1',
        title_template: '',
        title_rich_content: '',
        title_content: '',
        title_alignment: 'center',
        title_use_page_settings: '0',
        title_breadcrumbs: '0',
        title_breadcrumbs_alignment: 'center',
        breadcrumbs_default_color: '',
        breadcrumbs_active_color: '',
        breadcrumbs_hover_color: '',
        title_title_width: '',
        title_excerpt_width: '',
        title_text_color: '#FFFFFFFF',
        title_excerpt_text_color: '#FFFFFFFF',
        title_padding_locked: '',
        title_padding_tablet_locked: '',
        title_padding_mobile_locked: '',
        title_padding_left: '',
        title_padding_right: '',
        title_padding_top: '',
        title_padding_bottom: '',
        title_padding_tablet_left: '',
        title_padding_tablet_right: '',
        title_padding_tablet_top: '',
        title_padding_tablet_bottom: '',
        title_padding_mobile_left: '',
        title_padding_mobile_right: '',
        title_padding_mobile_top: '',
        title_padding_mobile_bottom: '',
        title_top_margin: '0',
        title_top_margin_tablet: '0',
        title_top_margin_mobile: '0',
        title_excerpt_top_margin: '18',
        title_excerpt_top_margin_tablet: '18',
        title_excerpt_top_margin_mobile: '18',
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
        title_background_effect: 'normal',
        title_background_ken_burns_direction: 'zoom_in',
        title_background_ken_burns_transition_speed: 15000,
        title_font_preset_html: '',
        title_font_preset_style: '',
        title_font_preset_weight: '',
        title_font_preset_transform: '',
        title_excerpt_font_preset_html: '',
        title_excerpt_font_preset_style: '',
        title_excerpt_font_preset_weight: '',
        title_excerpt_font_preset_transform: '',
        menu_show: '1',
        show_featured_content: '',
        // content & sidebar
        sidebar_show: '0',
        sidebar_position: 'left',
        page_default_sidebar: '1',
        sidebar_sticky: '0',
        content_padding_top: '',
        content_padding_top_tablet: '',
        content_padding_top_mobile: '',
        content_padding_bottom: '',
        content_padding_bottom_tablet: '',
        content_padding_bottom_mobile: '',
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
        // footer
        effects_hide_footer: '0',
        footer_hide_widget_area: '0',
        footer_hide_default: '0',
        footer_custom: '0',
        footer_custom_show: '0',
        effects_parallax_footer: '',
        // extras
        enable_page_preloader: '0',
        effects_disabled: '0',
        hide_social_sharing: '0',
        // popups
        popups_layout_source: 'default',
        // custom fields
        custom_fields: '',
        custom_fields_data: '',
    }
}

// map for translate option names in application
const optionsNameMap = {
    // <option name used in source code>: <option name in store>

    // Title Area
    'global.title_padding_tablet_left': 'global.title_padding_left_tablet',
    'global.title_padding_tablet_right': 'global.title_padding_right_tablet',
    'global.title_padding_tablet_top': 'global.title_padding_top_tablet',
    'global.title_padding_tablet_bottom': 'global.title_padding_bottom_tablet',
    'global.title_padding_mobile_left': 'global.title_padding_left_mobile',
    'global.title_padding_mobile_right': 'global.title_padding_right_mobile',
    'global.title_padding_mobile_top': 'global.title_padding_top_mobile',
    'global.title_padding_mobile_bottom': 'global.title_padding_bottom_mobile',

    'post.title_padding_tablet_left': 'post.title_padding_left_tablet',
    'post.title_padding_tablet_right': 'post.title_padding_right_tablet',
    'post.title_padding_tablet_top': 'post.title_padding_top_tablet',
    'post.title_padding_tablet_bottom': 'post.title_padding_bottom_tablet',
    'post.title_padding_mobile_left': 'post.title_padding_left_mobile',
    'post.title_padding_mobile_right': 'post.title_padding_right_mobile',
    'post.title_padding_mobile_top': 'post.title_padding_top_mobile',
    'post.title_padding_mobile_bottom': 'post.title_padding_bottom_mobile',

    'default.title_padding_tablet_left': 'default.title_padding_left_tablet',
    'default.title_padding_tablet_right': 'default.title_padding_right_tablet',
    'default.title_padding_tablet_top': 'default.title_padding_top_tablet',
    'default.title_padding_tablet_bottom': 'default.title_padding_bottom_tablet',
    'default.title_padding_mobile_left': 'default.title_padding_left_mobile',
    'default.title_padding_mobile_right': 'default.title_padding_right_mobile',
    'default.title_padding_mobile_top': 'default.title_padding_top_mobile',
    'default.title_padding_mobile_bottom': 'default.title_padding_bottom_mobile',

    'portfolio.title_padding_tablet_left': 'portfolio.title_padding_left_tablet',
    'portfolio.title_padding_tablet_right': 'portfolio.title_padding_right_tablet',
    'portfolio.title_padding_tablet_top': 'portfolio.title_padding_top_tablet',
    'portfolio.title_padding_tablet_bottom': 'portfolio.title_padding_bottom_tablet',
    'portfolio.title_padding_mobile_left': 'portfolio.title_padding_left_mobile',
    'portfolio.title_padding_mobile_right': 'portfolio.title_padding_right_mobile',
    'portfolio.title_padding_mobile_top': 'portfolio.title_padding_top_mobile',
    'portfolio.title_padding_mobile_bottom': 'portfolio.title_padding_bottom_mobile',

    'blog.title_padding_tablet_left': 'blog.title_padding_left_tablet',
    'blog.title_padding_tablet_right': 'blog.title_padding_right_tablet',
    'blog.title_padding_tablet_top': 'blog.title_padding_top_tablet',
    'blog.title_padding_tablet_bottom': 'blog.title_padding_bottom_tablet',
    'blog.title_padding_mobile_left': 'blog.title_padding_left_mobile',
    'blog.title_padding_mobile_right': 'blog.title_padding_right_mobile',
    'blog.title_padding_mobile_top': 'blog.title_padding_top_mobile',
    'blog.title_padding_mobile_bottom': 'blog.title_padding_bottom_mobile',

    'search.title_padding_tablet_left': 'search.title_padding_left_tablet',
    'search.title_padding_tablet_right': 'search.title_padding_right_tablet',
    'search.title_padding_tablet_top': 'search.title_padding_top_tablet',
    'search.title_padding_tablet_bottom': 'search.title_padding_bottom_tablet',
    'search.title_padding_mobile_left': 'search.title_padding_left_mobile',
    'search.title_padding_mobile_right': 'search.title_padding_right_mobile',
    'search.title_padding_mobile_top': 'search.title_padding_top_mobile',
    'search.title_padding_mobile_bottom': 'search.title_padding_bottom_mobile',

    'product.title_padding_tablet_left': 'product.title_padding_left_tablet',
    'product.title_padding_tablet_right': 'product.title_padding_right_tablet',
    'product.title_padding_tablet_top': 'product.title_padding_top_tablet',
    'product.title_padding_tablet_bottom': 'product.title_padding_bottom_tablet',
    'product.title_padding_mobile_left': 'product.title_padding_left_mobile',
    'product.title_padding_mobile_right': 'product.title_padding_right_mobile',
    'product.title_padding_mobile_top': 'product.title_padding_top_mobile',
    'product.title_padding_mobile_bottom': 'product.title_padding_bottom_mobile',

    'product_categories.title_padding_tablet_left': 'product_categories.title_padding_left_tablet',
    'product_categories.title_padding_tablet_right': 'product_categories.title_padding_right_tablet',
    'product_categories.title_padding_tablet_top': 'product_categories.title_padding_top_tablet',
    'product_categories.title_padding_tablet_bottom': 'product_categories.title_padding_bottom_tablet',
    'product_categories.title_padding_mobile_left': 'product_categories.title_padding_left_mobile',
    'product_categories.title_padding_mobile_right': 'product_categories.title_padding_right_mobile',
    'product_categories.title_padding_mobile_top': 'product_categories.title_padding_top_mobile',
    'product_categories.title_padding_mobile_bottom': 'product_categories.title_padding_bottom_mobile',

    // Typography
    'xlarge_title_font_size_tablet': 'xlarge_font_size_tablet',
    'xlarge_title_line_height_tablet': 'xlarge_line_height_tablet',
    'xlarge_title_font_size_mobile': 'xlarge_font_size_mobile',
    'xlarge_title_line_height_mobile': 'xlarge_line_height_mobile',
};

var timeoutHandler = null;

const extra = {
    namespaced: true,

    state() {
        return {
            options_saving: false,
            options_modified: false,
            options_saved_contents: '',
            options_saving_contents: '',
            options_current_contents: '',
            show_saved_notification_timeout_handler: null,
            show_saved_notification: false,
            saved_notification_text: false,
            invite_preview: false,
            credentials: {},
            backups: config.backups,
            page_settings_applying: false,
        }
    },

    getters: {
        getExtraByName: state => name => {
            return state[name];
        }
    },

    mutations: {
        setExtraByName(state, payload) {
            state[payload.name] = payload.value;
        },

        optionsUpdated(state) {
            state.options_current_contents = JSON.stringify(Object.assign({},this.state,{extra:null, settings: null}));
            state.options_modified = state.options_current_contents != state.options_saved_contents;
        },

        init(state) {
            state.options_saved_contents = JSON.stringify(Object.assign({},this.state,{extra:null, settings: null}));
            state.options_current_contents = state.options_saved_contents;
        },

        preview(state) {
            state.invite_preview = false;
        },

        savingStart(state) {
            this.commit('extra/optionsUpdated');
            state.options_saving_contents = state.options_current_contents;
            state.options_saving=true;
        },

        savingSuccess(state) {
            state.options_saved_contents = state.options_saving_contents;
            state.options_saving = false;

            if (state.show_saved_notification_timeout_handler) {
                clearTimeout(state.show_saved_notification_timeout_handler);
                state.show_saved_notification_timeout_handler = null;
            }
            state.show_saved_notification = true;
            state.saved_notification_text = i18n.t('general.saved_changes')

            state.show_saved_notification_timeout_handler = setTimeout(()=> {
                state.show_saved_notification = false;
                //state.saved_notification_text = i18n.t('general.saved_changes')
                state.show_saved_notification_timeout_handler = null;
            }, 4000);

            state.invite_preview = true;

            this.commit('extra/optionsUpdated');
        },

        savingFailed(state) {
            state.options_saving = false;
            this.commit('extra/optionsUpdated');
        }
    },

    actions: {
        applyPageSettings(context, type) {
            let applyMessage = i18n.t('apply.confirm_'+type.pt);
            if (type.msg === 'custom_posts') applyMessage = i18n.t('apply.confirm_custom_posts');
            if (type.msg === 'custom_archives') applyMessage = i18n.t('apply.confirm_custom_archives');

            this._vm.$modal.confirm({title: i18n.t('apply.title'), message: applyMessage}).then( (result) => {
                if (result) {
                    context.commit('setExtraByName',{name:'page_settings_applying', value: true});

                    var doCall=(offset) => {
                        Api('applyPageSettings',{type: type.pt, group: type.gr, offset: offset}).then(
                            response => {
                                if (response.data && response.data.status === true && response.data.offset) {
                                    doCall(response.data.offset);
                                    return;
                                }

                                context.commit('setExtraByName',{name:'page_settings_applying', value: false});
                                if (response.data && response.data.status === true) {
                                    this._vm.$modal.alert({message: response.data.message});
                                }
                            },
                            () => {
                                context.commit('setExtraByName',{name:'page_settings_applying', value: false});
                                this._vm.$modal.alert({message: i18n.t('apply.apply_failed')});
                            }
                        );
                    }

                    doCall();
                }
            });
        },

        optionsUpdated() {
            if (timeoutHandler) {
                clearTimeout(timeoutHandler);
            }

            timeoutHandler = setTimeout(()=>{
                this.commit('extra/optionsUpdated');
                timeoutHandler = null;
            },500);
        }
    }
};

var store;

if (config.isTheme) {
    store = new Vuex.Store({
        modules: {
            extra: extra,
            settings: settings
        },

        state() {
            var options=JSON.parse(JSON.stringify(config.options));

            for(let optionName in optionsDefaults) {
                if (typeof options[optionName] === 'undefined') {
                    options[optionName]=optionsDefaults[optionName];
                }
            }

            delete options.extra;

            for(let pageName in pageOptionsDefaults) {
                if (!options.page_options[pageName]) {
                    options.page_options[pageName] = {};
                }

                for(let optionName in pageOptionsDefaults[pageName]) {
                    if (typeof options.page_options[pageName][optionName] === 'undefined') {
                        options.page_options[pageName][optionName] = pageOptionsDefaults[pageName][optionName];
                    }
                }
            }

            //window.console.log(options);
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
                        value = state.page_options[parts[0]][parts[1]];
                        break;
                    case 3:
                        value = state[parts[0]][parts[1]][parts[2]];
                        break;
                }

                if (typeof value === 'undefined') {
                    window.console.error('trying to get unknown option "' + name + '"')
                }

                // window.console.log('get option "' + name + '" as "' + value + '"');
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
                        value = state.page_options[parts[0]][parts[1]];
                        break;
                    case 3:
                        value = state[parts[0]][parts[1]][parts[2]];
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
            backupRestored(state, payload) {
                this.commit('importSettings', payload);
                this.commit('extra/init');
                this.commit('extra/optionsUpdated');
            },

            importSettings(state, payload) {
                for(let optionName in payload) {
                    if (optionName != 'extra' && optionName != 'settings') {
                        state[optionName] = payload[optionName];
                    }
                }

                for(let optionName in state) {
                    if (optionName != 'extra' && optionName != 'settings' && typeof payload[optionName] === 'undefined') {
                        state[optionName] = '';
                    }
                }
            },

            setOptionByName(state, payload) {

                if (optionsNameMap[payload.name]) {
                    payload.name = optionsNameMap[payload.name];
                }

                window.console.log('set option "' + payload.name + '" to "' + payload.value + '"');
                //window.console.log('state = ' + state['global.header_menu_logo_light']);

                if (payload.name == 'header_style' && payload.value == '1' && state['header_style'] == '2') {
                    state['main_menu_font_family'] = 'Montserrat';
                    state['main_menu_font_style'] = '700';
                }
                if (payload.name == 'header_style' && payload.value == '3' && state['header_style'] == '2') {
                    state['main_menu_font_family'] = 'Montserrat';
                    state['main_menu_font_style'] = '700';
                }
                if (payload.name == 'header_style' && payload.value == '4' && state['header_style'] == '2') {
                    state['main_menu_font_family'] = 'Montserrat';
                    state['main_menu_font_style'] = '700';
                }

                if (payload.name == 'mobile_menu_layout' && payload.value == 'default' && state['mobile_menu_layout'] == 'overlay') {
                    state['mobile_menu_font_family'] = 'Source Sans Pro';
                    state['mobile_menu_font_style'] = '400';
                    state['mobile_menu_font_sets'] = '';
                    state['mobile_menu_font_size'] = '16';
                    state['mobile_menu_line_height'] = '20';
                    state['mobile_menu_text_transform'] = 'none';
                }
                if (payload.name == 'mobile_menu_layout' && payload.value == 'slide-horizontal' && state['mobile_menu_layout'] == 'overlay') {
                    state['mobile_menu_font_family'] = 'Source Sans Pro';
                    state['mobile_menu_font_style'] = '400';
                    state['mobile_menu_font_sets'] = '';
                    state['mobile_menu_font_size'] = '16';
                    state['mobile_menu_line_height'] = '20';
                    state['mobile_menu_text_transform'] = 'none';
                }
                if (payload.name == 'mobile_menu_layout' && payload.value == 'slide-vertical' && state['mobile_menu_layout'] == 'overlay') {
                    state['mobile_menu_font_family'] = 'Source Sans Pro';
                    state['mobile_menu_font_style'] = '400';
                    state['mobile_menu_font_sets'] = '';
                    state['mobile_menu_font_size'] = '16';
                    state['mobile_menu_line_height'] = '20';
                    state['mobile_menu_text_transform'] = 'none';
                }

                let parts = payload.name.split('.');
                switch (parts.length) {
                    case 1:
                        state[payload.name] = payload.value;
                        break;
                    case 2:
                        state.page_options[parts[0]][parts[1]] = payload.value;
                        break;
                    case 3:
                        state[parts[0]][parts[1]][parts[2]] = payload.value;
                        break;
                }

                if (payload.name == 'font_preload_enabled' && payload.value != '1') {
                    state['font_preload_preloaded_fonts'] = '';
                }

                if (payload.name == 'font_preload_enabled' && payload.value == '1') {
                    let selfHostedFonts = ',' + config.selfhostedFonts + ',';
                    let preloadableFonts = [];

                    for (let option in state) {
                        if (option.indexOf('_font_family')>=0) {
                            if (selfHostedFonts.indexOf(','+ state[option] +',')>=0 && preloadableFonts.indexOf(state[option])<0) {
                                preloadableFonts.push(state[option]);
                            }
                        }
                    }

                    state['font_preload_preloadable_fonts'] = preloadableFonts.join(',');
                    state['font_preload_preloaded_fonts'] = '';
                }

                //If Header Builder Enabled Menu to Default
                if (payload.name === 'header_source' && payload.value === 'builder') {
                    state['header_layout'] = 'default';
                }

                if (payload.name == 'default.header_top_area_transparent' && payload.value == '1') {
                    state['default.menu_show'] = '1';
                    state['default.header_transparent'] = '1';
                }

                if (payload.name == 'header_transparent' && payload.value == '0') {
                    state['default.header_top_area_transparent'] = '0';
                }

                if (payload.name == 'header_style' && payload.value == '4') {
                    state.page_options['global']['header_menu_logo_light'] = 1;
                }
                if (payload.name == 'header_style' && payload.value != '4') {
                    state.page_options['global']['header_menu_logo_light'] = 0;
                }

                //Product Page Defaults Presets
                if (payload.name == 'product_page_layout_style' && payload.value == 'horizontal_tabs') {
                    state.page_options['global']['header_transparent'] = '';
                    state.page_options['global']['header_opacity'] = '50';
                    state['product_page_layout_centered'] = '0';
                    state['product_page_layout_centered_top_margin'] = '42';
                    state['product_page_layout_centered_boxed'] = '0';
                    state['product_page_layout_centered_boxed_color'] = '';
                    state['product_page_layout_background'] = '';
                    state['product_page_layout_preset'] = 'col-50-50';
                    state['product_gallery_column_width'] = '50';
                    state['product_page_layout_fullwidth'] = '0';
                    state['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = '1';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                    state['product_gallery'] = 'enabled';
                    state['product_gallery_type'] = 'vertical';
                    state['product_gallery_grid_columns'] = '1x';
                    state['product_gallery_grid_gaps_hide'] = '0';
                    state['product_gallery_grid_top_margin'] = '0';
                    state['product_gallery_video_autoplay'] = '0';
                    state['product_gallery_column_position'] = 'left';
                    state['product_page_desc_review_layout'] = 'tabs';
                    state['product_page_desc_review_layout_tabs_style'] = 'horizontal';
                    state['product_page_desc_review_layout_tabs_alignment'] = 'left';
                }
                if (payload.name == 'product_page_layout_style' && payload.value == 'vertical_tabs') {
                    state.page_options['global']['header_transparent'] = '';
                    state.page_options['global']['header_opacity'] = '50';
                    state['product_page_layout_centered'] = '0';
                    state['product_page_layout_centered_top_margin'] = '42';
                    state['product_page_layout_centered_boxed'] = '0';
                    state['product_page_layout_centered_boxed_color'] = '';
                    state['product_page_layout_background'] = '';
                    state['product_page_layout_preset'] = 'col-50-50';
                    state['product_gallery_column_width'] = '50';
                    state['product_page_layout_fullwidth'] = '0';
                    state['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = '1';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                    state['product_gallery'] = 'enabled';
                    state['product_gallery_type'] = 'dots';
                    state['product_gallery_grid_columns'] = '1x';
                    state['product_gallery_grid_gaps_hide'] = '0';
                    state['product_gallery_grid_top_margin'] = '0';
                    state['product_gallery_video_autoplay'] = '0';
                    state['product_gallery_column_position'] = 'left';
                    state['product_page_desc_review_layout'] = 'tabs';
                    state['product_page_desc_review_layout_tabs_style'] = 'vertical';
                    state['product_page_desc_review_layout_tabs_alignment'] = 'left';
                }
                if (payload.name == 'product_page_layout_style' && payload.value == 'accordion') {
                    state.page_options['global']['header_transparent'] = '';
                    state.page_options['global']['header_opacity'] = '50';
                    state['product_page_layout_centered'] = '0';
                    state['product_page_layout_centered_top_margin'] = '42';
                    state['product_page_layout_centered_boxed'] = '0';
                    state['product_page_layout_centered_boxed_color'] = '';
                    state['product_page_layout_background'] = '';
                    state['product_page_layout_preset'] = 'col-50-50';
                    state['product_gallery_column_width'] = '50';
                    state['product_page_layout_fullwidth'] = '0';
                    state['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = '1';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                    state['product_gallery'] = 'enabled';
                    state['product_gallery_type'] = 'horizontal';
                    state['product_gallery_grid_columns'] = '1x';
                    state['product_gallery_grid_gaps_hide'] = '0';
                    state['product_gallery_grid_top_margin'] = '0';
                    state['product_gallery_video_autoplay'] = '0';
                    state['product_gallery_column_position'] = 'left';
                    state['product_page_desc_review_layout'] = 'accordion';
                    state['product_page_desc_review_layout_acc_position'] = 'next_to_gallery';
                }
                if (payload.name == 'product_page_layout_style' && payload.value == 'one_by_one') {
                    state.page_options['global']['header_transparent'] = '';
                    state.page_options['global']['header_opacity'] = '50';
                    state['product_page_layout_centered'] = '0';
                    state['product_page_layout_centered_top_margin'] = '42';
                    state['product_page_layout_centered_boxed'] = '0';
                    state['product_page_layout_centered_boxed_color'] = '';
                    state['product_page_layout_background'] = '';
                    state['product_page_layout_preset'] = 'col-50-50';
                    state['product_gallery_column_width'] = '50';
                    state['product_page_layout_fullwidth'] = '0';
                    state['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = '1';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                    state['product_gallery'] = 'enabled';
                    state['product_gallery_type'] = 'horizontal';
                    state['product_gallery_grid_columns'] = '1x';
                    state['product_gallery_grid_gaps_hide'] = '0';
                    state['product_gallery_grid_top_margin'] = '0';
                    state['product_gallery_video_autoplay'] = '0';
                    state['product_gallery_column_position'] = 'left';
                    state['product_page_desc_review_layout'] = 'one_by_one';
                }
                if (payload.name == 'product_page_layout_style' && payload.value == 'fullwidth') {
                    state.page_options['global']['header_transparent'] = '';
                    state.page_options['global']['header_opacity'] = '50';
                    state['product_page_layout_centered'] = '0';
                    state['product_page_layout_centered_top_margin'] = '42';
                    state['product_page_layout_centered_boxed'] = '0';
                    state['product_page_layout_centered_boxed_color'] = '';
                    state['product_page_layout_background'] = '';
                    state['product_page_layout_preset'] = 'col-60-40';
                    state['product_gallery_column_width'] = '65';
                    state['product_page_layout_fullwidth'] = '1';
                    state['product_page_layout_sticky'] = '1';
                    state['page_layout_breadcrumbs'] = '1';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                    state['product_gallery'] = 'enabled';
                    state['product_gallery_type'] = 'grid';
                    state['product_gallery_grid_columns'] = '2x';
                    state['product_gallery_grid_gaps_hide'] = '0';
                    state['product_gallery_grid_top_margin'] = '0';
                    state['product_gallery_video_autoplay'] = '1';
                    state['product_gallery_column_position'] = 'left';
                    state['product_page_desc_review_layout'] = 'accordion';
                    state['product_page_desc_review_layout_acc_position'] = 'next_to_gallery';
                }
                if (payload.name == 'product_page_layout_style' && payload.value == 'swapped_columns') {
                    state.page_options['global']['header_transparent'] = '';
                    state.page_options['global']['header_opacity'] = '50';
                    state['product_page_layout_centered'] = '0';
                    state['product_page_layout_centered_top_margin'] = '42';
                    state['product_page_layout_centered_boxed'] = '0';
                    state['product_page_layout_centered_boxed_color'] = '';
                    state['product_page_layout_background'] = '';
                    state['product_page_layout_preset'] = 'col-50-50';
                    state['product_gallery_column_width'] = '50';
                    state['product_page_layout_fullwidth'] = '0';
                    state['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = '1';
                    state['page_layout_breadcrumbs_alignment'] = 'right';
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                    state['product_gallery'] = 'enabled';
                    state['product_gallery_type'] = 'horizontal';
                    state['product_gallery_grid_columns'] = '1x';
                    state['product_gallery_grid_gaps_hide'] = '0';
                    state['product_gallery_grid_top_margin'] = '0';
                    state['product_gallery_video_autoplay'] = '0';
                    state['product_gallery_column_position'] = 'right';
                    state['product_page_desc_review_layout'] = 'tabs';
                    state['product_page_desc_review_layout_tabs_style'] = 'horizontal';
                    state['product_page_desc_review_layout_tabs_alignment'] = 'center';
                }
                if (payload.name == 'product_page_layout_style' && payload.value == 'no_gallery_margins') {
                    state.page_options['global']['header_transparent'] = '1';
                    state.page_options['global']['header_opacity'] = '0';
                    state['product_page_layout_centered'] = '0';
                    state['product_page_layout_centered_top_margin'] = '42';
                    state['product_page_layout_centered_boxed'] = '0';
                    state['product_page_layout_centered_boxed_color'] = '';
                    state['product_page_layout_background'] = '';
                    state['product_page_layout_preset'] = 'col-50-50';
                    state['product_gallery_column_width'] = '50';
                    state['product_page_layout_fullwidth'] = '1';
                    state['product_page_layout_sticky'] = '1';
                    state['page_layout_breadcrumbs'] = '1';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                    state['product_gallery'] = 'enabled';
                    state['product_gallery_type'] = 'grid';
                    state['product_gallery_grid_columns'] = '1x';
                    state['product_gallery_grid_gaps_hide'] = '1';
                    state['product_gallery_grid_top_margin'] = '90';
                    state['product_gallery_video_autoplay'] = '1';
                    state['product_gallery_column_position'] = 'left';
                    state['product_page_desc_review_layout'] = 'tabs';
                    state['product_page_desc_review_layout_tabs_style'] = 'horizontal';
                    state['product_page_desc_review_layout_tabs_alignment'] = 'center';
                }
                if (payload.name == 'product_page_layout_style' && payload.value == 'centered') {
                    state.page_options['global']['header_transparent'] = '';
                    state.page_options['global']['header_opacity'] = '50';
                    state['product_page_layout_centered'] = '1';
                    state['product_page_layout_centered_top_margin'] = '55';
                    state['product_page_layout_centered_boxed'] = '0';
                    state['product_page_layout_centered_boxed_color'] = '';
                    state['product_page_layout_background'] = '';
                    state['product_page_layout_preset'] = 'col-50-50';
                    state['product_gallery_column_width'] = '50';
                    state['product_page_layout_fullwidth'] = '0';
                    state['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = '1';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                    state['product_gallery'] = 'enabled';
                    state['product_gallery_type'] = 'horizontal';
                    state['product_gallery_grid_columns'] = '1x';
                    state['product_gallery_grid_gaps_hide'] = '0';
                    state['product_gallery_grid_top_margin'] = '0';
                    state['product_gallery_video_autoplay'] = '0';
                    state['product_gallery_column_position'] = 'left';
                    state['product_page_desc_review_layout'] = 'one_by_one';
                }
                if (payload.name == 'product_page_layout_style' && payload.value == 'centered_boxed') {
                    state.page_options['global']['header_transparent'] = '';
                    state.page_options['global']['header_opacity'] = '50';
                    state['product_page_layout_centered'] = '1';
                    state['product_page_layout_centered_top_margin'] = '42';
                    state['product_page_layout_centered_boxed'] = '1';
                    state['product_page_layout_centered_boxed_color'] = '#FFFFFFFF';
                    state['product_page_layout_background'] = '#F4F6F7FF';
                    state['product_page_layout_preset'] = 'col-60-40';
                    state['product_gallery_column_width'] = '60';
                    state['product_page_layout_fullwidth'] = '0';
                    state['product_page_layout_sticky'] = '0';
                    state['page_layout_breadcrumbs'] = '1';
                    state['page_layout_breadcrumbs_alignment'] = 'left';
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                    state['product_gallery'] = 'enabled';
                    state['product_gallery_type'] = 'vertical';
                    state['product_gallery_grid_columns'] = '1x';
                    state['product_gallery_grid_gaps_hide'] = '0';
                    state['product_gallery_grid_top_margin'] = '0';
                    state['product_gallery_video_autoplay'] = '0';
                    state['product_gallery_column_position'] = 'left';
                    state['product_page_desc_review_layout'] = 'tabs';
                    state['product_page_desc_review_layout_tabs_style'] = 'horizontal';
                    state['product_page_desc_review_layout_tabs_alignment'] = 'left';
                }

                //Product page default columns positions
                if (payload.name == 'product_gallery_carousel_type' && payload.value == 'hover-navigate') {
                    state['product_gallery_thumb_enable'] = '1';
                    state['product_gallery_thumb_type'] = 'carousel';
                }
                if (payload.name == 'product_page_desc_review_layout_tabs_style' && payload.value == 'vertical') {
                    state['product_page_desc_review_layout_tabs_alignment'] = 'left';
                }
                if (payload.name == 'product_page_layout_preset' && payload.value == 'col-40-60') {
                    state['product_gallery_column_width'] = '40';
                }
                if (payload.name == 'product_page_layout_preset' && payload.value == 'col-50-50') {
                    state['product_gallery_column_width'] = '50';
                }
                if (payload.name == 'product_page_layout_preset' && payload.value == 'col-60-40') {
                    state['product_gallery_column_width'] = '60';
                }
                if (payload.name == 'product_page_layout_preset' && payload.value == 'col-100') {
                    state['product_gallery_column_width'] = '100';
                }

                //Product gallery grid 100% width
                if (payload.name == 'product_page_layout_fullwidth' && payload.value == '0') {
                    state['product_gallery_grid_gaps_hide'] = '0';
                    state['product_gallery_grid_top_margin'] = '0';
                }
                if (payload.name == 'product_gallery_grid_gaps_hide' && payload.value == '0') {
                    state['product_gallery_grid_top_margin'] = '0';
                }
                if (payload.name == 'product_gallery_grid_gaps_hide' && payload.value == '1') {
                    state['product_gallery_grid_top_margin'] = '90';
                }
                if (payload.name == 'global.header_transparent' && payload.value == '') {
                    state['product_gallery_grid_top_margin'] = '0';
                }

                //Product page default top spacing
                if (payload.name == 'page_layout_breadcrumbs' && payload.value == '1') {
                    state['product_content_padding_top'] = '0';
                    state['product_content_padding_top_tablet'] = '0';
                    state['product_content_padding_top_mobile'] = '0';
                }
                if (payload.name == 'page_layout_breadcrumbs' && payload.value == '0') {
                    state['product_content_padding_top'] = '70';
                    state['product_content_padding_top_tablet'] = '21';
                    state['product_content_padding_top_mobile'] = '21';
                }
                if (payload.name == 'product.page_layout_breadcrumbs' && payload.value == '1') {
                    state.page_options['product']['content_padding_top'] = '0';
                    state.page_options['product']['content_padding_top_tablet'] = '0';
                    state.page_options['product']['content_padding_top_mobile'] = '0';
                }
                if (payload.name == 'product.page_layout_breadcrumbs' && payload.value == '0') {
                    state.page_options['product']['content_padding_top'] = '70';
                    state.page_options['product']['content_padding_top_tablet'] = '21';
                    state.page_options['product']['content_padding_top_mobile'] = '21';
                }
                if (payload.name == 'product_categories.page_layout_breadcrumbs' && payload.value == '1') {
                    state.page_options['product_categories']['content_padding_top'] = '0';
                    state.page_options['product_categories']['content_padding_top_tablet'] = '0';
                    state.page_options['product_categories']['content_padding_top_mobile'] = '0';
                }
                if (payload.name == 'product_categories.page_layout_breadcrumbs' && payload.value == '0') {
                    state.page_options['product_categories']['content_padding_top'] = '70';
                    state.page_options['product_categories']['content_padding_top_tablet'] = '21';
                    state.page_options['product_categories']['content_padding_top_mobile'] = '21';
                }

                //Product Archive Layout
                if (payload.name == 'product_archive_columns_desktop' && payload.value == '100%') {
                    state.page_options['product_categories']['sidebar_show'] = '0';
                }
                if (payload.name == 'product_archive_columns_desktop' && payload.value == '100%' && state.page_options['product_categories']['sidebar_show'] == '0' && state['product_archive_filters_type'] == 'native') {
                    state['product_archive_filters_type'] = 'disabled';
                }
                if (payload.name == 'product_categories.sidebar_show' && payload.value == '1' && state['product_archive_filters_type'] == 'disabled') {
                    state['product_archive_filters_type'] = 'native';
                }
                if (payload.name == 'product_categories.sidebar_show' && payload.value == '0' && state['product_archive_filters_type'] == 'native') {
                    state['product_archive_filters_type'] = 'disabled';
                }
                if (payload.name == 'product_archive_type' && payload.value == 'list') {
                    state['product_archive_preset_type'] = 'below';
                }

                //Product Archive Used In Fullwidth Hide Option
                if ((payload.name == 'product_archive_content_width' && payload.value == 'fullwidth') || (payload.name == 'product_archive_content_width' && payload.value == 'fullwidth-nogaps')) {
                    state['product_archive_used_in_fullwidth_section'] = '1';
                }
                if (payload.name == 'product_archive_content_width' && payload.value == 'boxed') {
                    state['product_archive_used_in_fullwidth_section'] = '0';
                }
                if (payload.name == 'product_archive_content_width' && payload.value == 'fullwidth' && state['product_archive_columns_desktop'] == '100%') {
                    state['product_archive_columns_desktop'] = '4x';
                }

                //Archive Search
                if (payload.name == 'search_layout_caption_position' && payload.value == 'on_image') {
                    state['search_layout_hover_effect'] = 'default';
                }

                // Huck for switch on product builder
                if (payload.name == 'product_layout_source' && payload.value == 'builder') {
                    state['product_page_layout'] = 'default';
                }

                // Cart Builder switch options - https://app.asana.com/0/0/1202696986681115/f
                if (payload.name == 'cart_layout_source' && payload.value == 'builder') {
                    state['cart_layout'] = 'modern';
                    state['modern_cart_steps'] = '0';
                    state['cart_elements_cross_sells'] = '0';
                }

                // Blog / Product Archive Builder switch options - https://app.asana.com/0/1199540649412175/1202822063316849/f
                if (payload.name == 'blog_archive_layout_source' && payload.value == 'builder') {
                    //state.page_options['blog']['title_show'] = '0';
                }
                if (payload.name == 'product_archive_layout_source' && payload.value == 'builder') {
                    //state.page_options['product_categories']['title_show'] = '0';
                }

                // Single Post/Page/Portfolio Builder switch options - https://app.asana.com/0/0/1202958595252949/f
                if (payload.name == 'post_layout_source' && payload.value == 'builder') {
                    state['global_settings_apply_post_title'] = '1';
                    state.page_options['post']['title_show'] = '0';
                    state.page_options['post']['title_rich_content'] = '0';
                }
                if (payload.name == 'page_layout_source' && payload.value == 'builder') {
                    state['global_settings_apply_default_title'] = '1';
                    state.page_options['default']['title_show'] = '0';
                    state.page_options['default']['title_rich_content'] = '0';
                }
                if (payload.name == 'portfolio_layout_source' && payload.value == 'builder') {
                    state['global_settings_apply_portfolio_title'] = '1';
                    state.page_options['portfolio']['title_show'] = '0';
                    state.page_options['portfolio']['title_rich_content'] = '0';
                }

                // CPT Post/Taxonomy Builder switch options - https://app.asana.com/0/0/1202958595252949/f
                for(let post of customPostTypes) {
                    if (payload.name == post.value + '.' + 'post_layout_source' && payload.value == 'builder') {
                        state.page_options[post.value]['global_settings_apply_title'] = '1';
                        state.page_options[post.value]['title_show'] = '0';
                        state.page_options[post.value]['title_rich_content'] = '0';
                    }
                }
                for(let taxonomy of customTaxonomies) {
                    if (payload.name == taxonomy.value + '.' + 'archive_layout_source' && payload.value == 'builder') {
                        state.page_options[taxonomy.value]['global_settings_apply_title'] = '1';
                        state.page_options[taxonomy.value]['title_show'] = '0';
                        state.page_options[taxonomy.value]['title_rich_content'] = '0';
                    }
                }

                //DEPENDENCE OF COLORS FROM OLD TO (options.php > line 6196)
                if (payload.name == 'header_layout' && payload.value == 'fullwidth_hamburger') {
                    state['main_menu_level1_active_color'] = '#00bcd4';
                }

                if (payload.name == 'header_layout' && payload.value == 'overlay') {
                    state['main_menu_text_transform'] = 'uppercase';
                }

                if (payload.name == 'header_layout' && payload.value == 'vertical') {
                    //state['main_menu_font_family'] = 'Montserrat';
                    //state['main_menu_font_style'] = '700';
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';

                    state['top_background_color'] = '#ffffff';
                    state['main_menu_level1_color'] = '#3c3950';
                    state['main_menu_level1_background_color'] = '';
                    state['main_menu_level1_hover_color'] = '#00bcd4';
                    state['main_menu_level1_hover_background_color'] = '';
                    state['main_menu_level1_active_color'] = '#00bcd4';
                    state['main_menu_level1_active_background_color'] = '#f4f6f7';
                    state['main_menu_level2_color'] = '#99a9b5';
                    state['main_menu_level2_background_color'] = '#212331';
                    state['main_menu_level2_hover_color'] = '#ffffff';
                    state['main_menu_level2_hover_background_color'] = '#393d4f';
                    state['main_menu_level2_active_color'] = '#ffffff';
                    state['main_menu_level2_active_background_color'] = '#393d4f';
                    state['main_menu_mega_column_title_color'] = '#3c3950';
                    state['main_menu_mega_column_title_hover_color'] = '#00bcd4';
                    state['main_menu_mega_column_title_active_color'] = '#00bcd4';
                    state['main_menu_level3_color'] = '#99a9b5';
                    state['main_menu_level3_background_color'] = '#393d50';
                    state['main_menu_level3_hover_color'] = '#ffffff';
                    state['main_menu_level3_hover_background_color'] = '#494c64';
                    state['main_menu_level3_active_color'] = '#00bcd4';
                    state['main_menu_level3_active_background_color'] = '#393d50';
                    state['main_menu_level2_border_color'] = '#494660';
                }

                if (payload.name == 'header_layout' && payload.value == 'perspective') {
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';

                    state['main_menu_level1_active_color'] = '#00bcd4';
                    state['basic_outer_background_color'] = '#b9b8be';
                }

                if (payload.name == 'header_style' && payload.value == '1') {
                    state['navigation_background_type'] = 'color';
                    state['navigation_background_color'] = '#ffffff';
                    state['top_background_type'] = 'color';
                    state['top_background_color'] = '#ffffff';
                    state['main_menu_level1_color'] = '#3c3950';
                    state['main_menu_level1_background_color'] = '';
                    state['main_menu_level1_hover_color'] = '#00bcd4';
                    state['main_menu_level1_hover_background_color'] = '';
                    state['main_menu_level1_active_color'] = '#00bcd4';
                    state['main_menu_level1_active_background_color'] = '#f4f6f7';
                    state['main_menu_level2_color'] = '#99a9b5';
                    state['main_menu_level2_background_color'] = '#212331';
                    state['main_menu_level2_hover_color'] = '#ffffff';
                    state['main_menu_level2_hover_background_color'] = '#393d4f';
                    state['main_menu_level2_active_color'] = '#ffffff';
                    state['main_menu_level2_active_background_color'] = '#393d4f';
                    state['main_menu_mega_column_title_color'] = '#ffffff';
                    state['main_menu_mega_column_title_hover_color'] = '#00bcd4';
                    state['main_menu_mega_column_title_active_color'] = '#00bcd4';
                    state['main_menu_level3_color'] = '#99a9b5';
                    state['main_menu_level3_background_color'] = '#393d50';
                    state['main_menu_level3_hover_color'] = '#ffffff';
                    state['main_menu_level3_hover_background_color'] = '#494c64';
                    state['main_menu_level3_active_color'] = '#00bcd4';
                    state['main_menu_level3_active_background_color'] = '#393d50';
                    state['main_menu_level2_border_color'] = '#494660';
                    state['main_menu_level1_light_color'] = '#ffffff';
                    state['main_menu_level1_light_hover_color'] = '#00bcd4';
                    state['main_menu_level1_light_active_color'] = '#00bcd4';
                    state['overlay_menu_background_color'] = '#212331';
                    state['overlay_menu_color'] = '#ffffff';
                    state['overlay_menu_hover_color'] = '#00bcd4';
                    state['overlay_menu_active_color'] = '#00bcd4';
                    state['hamburger_menu_icon_color'] = '#3c3950';
                    state['hamburger_menu_icon_light_color'] = '#ffffff';
                    state['mobile_menu_button_color'] = '#3c3950';
                    state['mobile_menu_button_light_color'] = '#ffffff';
                }

                if (payload.name == 'header_style' && payload.value == '2') {
                    state['main_menu_font_family'] = 'Source Sans Pro';
                    state['main_menu_font_style'] = '400';
                    state['navigation_background_type'] = 'color';
                    state['navigation_background_color'] = '#ffffff';
                    state['top_background_type'] = 'color';
                    state['top_background_color'] = '#ffffff';
                    state['main_menu_level1_color'] = '#5f727f';
                    state['main_menu_level1_background_color'] = '';
                    state['main_menu_level1_hover_color'] = '#00bcd4';
                    state['main_menu_level1_hover_background_color'] = '';
                    state['main_menu_level1_active_color'] = '#00bcd4';
                    state['main_menu_level1_active_background_color'] = '';
                    state['main_menu_level2_color'] = '#5f727f';
                    state['main_menu_level2_background_color'] = '#f4f6f7';
                    state['main_menu_level2_hover_color'] = '#3c3950';
                    state['main_menu_level2_hover_background_color'] = '#ffffff';
                    state['main_menu_level2_active_color'] = '#3c3950';
                    state['main_menu_level2_active_background_color'] = '#ffffff';
                    state['main_menu_mega_column_title_color'] = '#5f727f';
                    state['main_menu_mega_column_title_hover_color'] = '#00bcd4';
                    state['main_menu_mega_column_title_active_color'] = '#00bcd4';
                    state['main_menu_level3_color'] = '#5f727f';
                    state['main_menu_level3_background_color'] = '#ffffff';
                    state['main_menu_level3_hover_color'] = '#ffffff';
                    state['main_menu_level3_hover_background_color'] = '#494c64';
                    state['main_menu_level3_active_color'] = '#00bcd4';
                    state['main_menu_level3_active_background_color'] = '#ffffff';
                    state['main_menu_level2_border_color'] = '#dfe5e8';
                    state['main_menu_level1_light_color'] = '#ffffff';
                    state['main_menu_level1_light_hover_color'] = '#00bcd4';
                    state['main_menu_level1_light_active_color'] = '#00bcd4';
                    state['overlay_menu_background_color'] = '#ffffff';
                    state['overlay_menu_color'] = '#212331';
                    state['overlay_menu_hover_color'] = '#00bcd4';
                    state['overlay_menu_active_color'] = '#00bcd4';
                    state['hamburger_menu_icon_color'] = '#3c3950';
                    state['hamburger_menu_icon_light_color'] = '#ffffff';
                    state['mobile_menu_button_color'] = '#3c3950';
                    state['mobile_menu_button_light_color'] = '#ffffff';
                }

                if (payload.name == 'header_style' && payload.value == '3') {
                    state['navigation_background_type'] = 'color';
                    state['navigation_background_color'] = '#ffffff';
                    state['top_background_type'] = 'color';
                    state['top_background_color'] = '#ffffff';
                    state['main_menu_level1_color'] = '#3c3950';
                    state['main_menu_level1_background_color'] = '';
                    state['main_menu_level1_hover_color'] = '#00bcd4';
                    state['main_menu_level1_hover_background_color'] = '';
                    state['main_menu_level1_active_color'] = '#3c3950';
                    state['main_menu_level1_active_background_color'] = '#3c3950';
                    state['main_menu_level2_color'] = '#5f727f';
                    state['main_menu_level2_background_color'] = '#f4f6f7';
                    state['main_menu_level2_hover_color'] = '#3c3950';
                    state['main_menu_level2_hover_background_color'] = '#ffffff';
                    state['main_menu_level2_active_color'] = '#3c3950';
                    state['main_menu_level2_active_background_color'] = '#ffffff';
                    state['main_menu_mega_column_title_color'] = '#3c3950';
                    state['main_menu_mega_column_title_hover_color'] = '#00bcd4';
                    state['main_menu_mega_column_title_active_color'] = '#00bcd4';
                    state['main_menu_level3_color'] = '#5f727f';
                    state['main_menu_level3_background_color'] = '#ffffff';
                    state['main_menu_level3_hover_color'] = '#ffffff';
                    state['main_menu_level3_hover_background_color'] = '#494c64';
                    state['main_menu_level3_active_color'] = '#00bcd4';
                    state['main_menu_level3_active_background_color'] = '#ffffff';
                    state['main_menu_level2_border_color'] = '#dfe5e8';
                    state['main_menu_level1_light_color'] = '#ffffff';
                    state['main_menu_level1_light_hover_color'] = '#00bcd4';
                    state['main_menu_level1_light_active_color'] = '#ffffff';
                    state['overlay_menu_background_color'] = '#ffffff';
                    state['overlay_menu_color'] = '#212331';
                    state['overlay_menu_hover_color'] = '#00bcd4';
                    state['overlay_menu_active_color'] = '#00bcd4';
                    state['hamburger_menu_icon_color'] = '#3c3950';
                    state['hamburger_menu_icon_light_color'] = '#ffffff';
                    state['mobile_menu_button_color'] = '#3c3950';
                    state['mobile_menu_button_light_color'] = '#ffffff';
                }

                if ((payload.name == 'header_layout' && payload.value == 'fullwidth_hamburger' && state['header_style'] == '3') || (payload.name == 'header_style' && payload.value == '3' && state['header_layout'] == 'fullwidth_hamburger')) {
                    state['main_menu_level1_active_color'] = '#00bcd4';
                }
                if ((payload.name == 'header_layout' && payload.value == 'vertical' && state['header_style'] == '3') || (payload.name == 'header_style' && payload.value == '3' && state['header_layout'] == 'vertical')) {
                    state['main_menu_level1_active_color'] = '#00bcd4';
                }
                if ((payload.name == 'header_layout' && payload.value == 'perspective' && state['header_style'] == '3') || (payload.name == 'header_style' && payload.value == '3' && state['header_layout'] == 'perspective')) {
                    state['main_menu_level1_active_color'] = '#00bcd4';
                }

                if (payload.name == 'header_style' && payload.value == '4') {
                    state['navigation_background_type'] = 'color';
                    state['navigation_background_color'] = '#212331';
                    state['top_background_type'] = 'color';
                    state['top_background_color'] = '#212331';
                    state['main_menu_level1_color'] = '#ffffff';
                    state['main_menu_level1_background_color'] = '';
                    state['main_menu_level1_hover_color'] = '#00bcd4';
                    state['main_menu_level1_hover_background_color'] = '';
                    state['main_menu_level1_active_color'] = '#ffffff';
                    state['main_menu_level1_active_background_color'] = '#ffffff';
                    state['main_menu_level2_color'] = '#99a9b5';
                    state['main_menu_level2_background_color'] = '#393d50';
                    state['main_menu_level2_hover_color'] = '#ffffff';
                    state['main_menu_level2_hover_background_color'] = '#212331';
                    state['main_menu_level2_active_color'] = '#ffffff';
                    state['main_menu_level2_active_background_color'] = '#212331';
                    state['main_menu_mega_column_title_color'] = '#ffffff';
                    state['main_menu_mega_column_title_hover_color'] = '#00bcd4';
                    state['main_menu_mega_column_title_active_color'] = '#00bcd4';
                    state['main_menu_level3_color'] = '#99a9b5';
                    state['main_menu_level3_background_color'] = '#212331';
                    state['main_menu_level3_hover_color'] = '#ffffff';
                    state['main_menu_level3_hover_background_color'] = '#131121';
                    state['main_menu_level3_active_color'] = '#00bcd4';
                    state['main_menu_level3_active_background_color'] = '#212331';
                    state['main_menu_level2_border_color'] = '#494c64';
                    state['main_menu_level1_light_color'] = '#ffffff';
                    state['main_menu_level1_light_hover_color'] = '#00bcd4';
                    state['main_menu_level1_light_active_color'] = '#ffffff';
                    state['overlay_menu_background_color'] = '#212331';
                    state['overlay_menu_color'] = '#ffffff';
                    state['overlay_menu_hover_color'] = '#00bcd4';
                    state['overlay_menu_active_color'] = '#00bcd4';
                    state['hamburger_menu_icon_color'] = '#ffffff';
                    state['hamburger_menu_icon_light_color'] = '#ffffff';
                    state['mobile_menu_button_color'] = '#ffffff';
                    state['mobile_menu_button_light_color'] = '#ffffff';
                }

                if ((payload.name == 'header_layout' && payload.value == 'fullwidth_hamburger' && state['header_style'] == '4') || (payload.name == 'header_style' && payload.value == '4' && state['header_layout'] == 'fullwidth_hamburger')) {
                    state['main_menu_level1_active_color'] = '#00bcd4';
                }
                if ((payload.name == 'header_layout' && payload.value == 'vertical' && state['header_style'] == '4') || (payload.name == 'header_style' && payload.value == '4' && state['header_layout'] == 'vertical')) {
                    state['main_menu_level1_active_color'] = '#00bcd4';
                }
                if ((payload.name == 'header_layout' && payload.value == 'perspective' && state['header_style'] == '4') || (payload.name == 'header_style' && payload.value == '4' && state['header_layout'] == 'perspective')) {
                    state['main_menu_level1_active_color'] = '#00bcd4';
                }

                if (payload.name == 'top_area_style' && payload.value == '1') {
                    state['top_area_background_type'] = 'color';

                    state['top_area_background_color'] = '#f4f6f7';
                    state['top_area_border_color'] = '#00bcd4';
                    state['top_area_separator_color'] = '#dfe5e8';
                    state['top_area_text_color'] = '#5f727f';
                    state['top_area_link_color'] = '#5f727f';
                    state['top_area_link_hover_color'] = '#00bcd4';
                    state['top_area_button_text_color'] = '#ffffff';
                    state['top_area_button_background_color'] = '#494c64';
                    state['top_area_button_hover_text_color'] = '#ffffff';
                    state['top_area_button_hover_background_color'] = '#00bcd4';
                    state['top_area_icons_color'] = '#5f727f';
                }

                if (payload.name == 'top_area_style' && payload.value == '2') {
                    state['top_area_background_type'] = 'color';

                    state['top_area_background_color'] = '#212331';
                    state['top_area_border_color'] = '#474b61';
                    state['top_area_separator_color'] = '#51546c';
                    state['top_area_text_color'] = '#99a9b5';
                    state['top_area_link_color'] = '#99a9b5';
                    state['top_area_link_hover_color'] = '#ffffff';
                    state['top_area_button_text_color'] = '#ffffff';
                    state['top_area_button_background_color'] = '#00bcd4';
                    state['top_area_button_hover_text_color'] = '#ffffff';
                    state['top_area_button_hover_background_color'] = '#46485c';
                    state['top_area_icons_color'] = '#99a9b5';
                }

                if (payload.name == 'top_area_style' && payload.value == '3') {
                    state['top_area_background_type'] = 'color';

                    state['top_area_background_color'] = '#393d50';
                    state['top_area_border_color'] = '#00bcd4';
                    state['top_area_separator_color'] = '#494c64';
                    state['top_area_text_color'] = '#99a9b5';
                    state['top_area_link_color'] = '#99a9b5';
                    state['top_area_link_hover_color'] = '#ffffff';
                    state['top_area_button_text_color'] = '#ffffff';
                    state['top_area_button_background_color'] = '#99a9b5';
                    state['top_area_button_hover_text_color'] = '#ffffff';
                    state['top_area_button_hover_background_color'] = '#00bcd4';
                    state['top_area_icons_color'] = '#99a9b5';
                }

                if ((payload.name == 'menu_appearance_tablet_portrait' && payload.value == 'responsive') || (payload.name == 'menu_appearance_tablet_portrait' && payload.value == 'centered') || (payload.name == 'menu_appearance_tablet_portrait' && payload.value == 'default')){
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';
                }

                if ((payload.name == 'menu_appearance_tablet_landscape' && payload.value == 'responsive') || (payload.name == 'menu_appearance_tablet_landscape' && payload.value == 'centered') || (payload.name == 'menu_appearance_tablet_landscape' && payload.value == 'default')){
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';
                }

                if ((payload.name == 'mobile_menu_layout' && payload.value == 'default' && state['mobile_menu_layout_style'] == 'light') || (payload.name == 'mobile_menu_layout_style' && payload.value == 'light' && state['mobile_menu_layout'] == 'default')){
                    //state['mobile_menu_font_family'] = 'Source Sans Pro';
                    //state['mobile_menu_font_style'] = '400';
                    //state['mobile_menu_font_sets'] = '';
                    //state['mobile_menu_font_size'] = '16';
                    //state['mobile_menu_line_height'] = '20';
                    //state['mobile_menu_background_color'] = '';
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';

                    state['mobile_menu_level1_color'] = '#5f727f';
                    state['mobile_menu_level1_background_color'] = '#f4f6f7';
                    state['mobile_menu_level1_active_color'] = '#3c3950';
                    state['mobile_menu_level1_active_background_color'] = '#ffffff';
                    state['mobile_menu_level2_color'] = '#5f727f';
                    state['mobile_menu_level2_background_color'] = '#f4f6f7';
                    state['mobile_menu_level2_active_color'] = '#3c3950';
                    state['mobile_menu_level2_active_background_color'] = '#ffffff';
                    state['mobile_menu_level3_color'] = '#5f727f';
                    state['mobile_menu_level3_background_color'] = '#f4f6f7';
                    state['mobile_menu_level3_active_color'] = '#3c3950';
                    state['mobile_menu_level3_active_background_color'] = '#ffffff';
                    state['mobile_menu_border_color'] = '#dfe5e8';
                    state['mobile_menu_social_icon_color'] = '';
                    state['mobile_menu_hide_color'] = '';
                }

                if ((payload.name == 'mobile_menu_layout' && payload.value == 'overlay' && state['mobile_menu_layout_style'] == 'light') || (payload.name == 'mobile_menu_layout_style' && payload.value == 'light' && state['mobile_menu_layout'] == 'overlay')){
                    state['mobile_menu_font_family'] = 'Montserrat';
                    state['mobile_menu_font_style'] = '700';
                    state['mobile_menu_font_sets'] = '';
                    state['mobile_menu_font_size'] = '24';
                    state['mobile_menu_line_height'] = '48';
                    state['mobile_menu_text_transform'] = 'uppercase';
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';

                    state['mobile_menu_background_color'] = '#ffffff';
                    state['mobile_menu_level1_color'] = '#212331';
                    state['mobile_menu_level1_background_color'] = '';
                    state['mobile_menu_level1_active_color'] = '#00bcd4';
                    state['mobile_menu_level1_active_background_color'] = '';
                    state['mobile_menu_level2_color'] = '#212331';
                    state['mobile_menu_level2_background_color'] = '';
                    state['mobile_menu_level2_active_color'] = '#00bcd4';
                    state['mobile_menu_level2_active_background_color'] = '';
                    state['mobile_menu_level3_color'] = '#212331';
                    state['mobile_menu_level3_background_color'] = '';
                    state['mobile_menu_level3_active_color'] = '#00bcd4';
                    state['mobile_menu_level3_active_background_color'] = '';
                    state['mobile_menu_border_color'] = '';
                    state['mobile_menu_social_icon_color'] = '';
                    state['mobile_menu_hide_color'] = '#00bcd4';
                }

                if ((payload.name == 'mobile_menu_layout' && payload.value == 'slide-horizontal' && state['mobile_menu_layout_style'] == 'light') || (payload.name == 'mobile_menu_layout_style' && payload.value == 'light' && state['mobile_menu_layout'] == 'slide-horizontal')) {
                    //state['mobile_menu_background_color'] = '#ffffff';
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';

                    state['mobile_menu_level1_color'] = '#5f727f';
                    state['mobile_menu_level1_background_color'] = '#dfe5e8';
                    state['mobile_menu_level1_active_color'] = '#3c3950';
                    state['mobile_menu_level1_active_background_color'] = '#dfe5e8';
                    state['mobile_menu_level2_color'] = '#5f727f';
                    state['mobile_menu_level2_background_color'] = '#f0f3f2';
                    state['mobile_menu_level2_active_color'] = '#3c3950';
                    state['mobile_menu_level2_active_background_color'] = '#f0f3f2';
                    state['mobile_menu_level3_color'] = '#5f727f';
                    state['mobile_menu_level3_background_color'] = '#ffffff';
                    state['mobile_menu_level3_active_color'] = '#ffffff';
                    state['mobile_menu_level3_active_background_color'] = '#494c64';
                    state['mobile_menu_border_color'] = '#dfe5e8';
                    state['mobile_menu_social_icon_color'] = '#99a9b5';
                    state['mobile_menu_hide_color'] = '#3c3950';
                }

                if ((payload.name == 'mobile_menu_layout' && payload.value == 'slide-vertical' && state['mobile_menu_layout_style'] == 'light') || (payload.name == 'mobile_menu_layout_style' && payload.value == 'light' && state['mobile_menu_layout'] == 'slide-vertical')) {
                    //state['mobile_menu_font_family'] = 'Source Sans Pro';
                    //state['mobile_menu_font_style'] = '400';
                    //state['mobile_menu_font_sets'] = '';
                    //state['mobile_menu_font_size'] = '16';
                    //state['mobile_menu_line_height'] = '20';
                    //state['mobile_menu_background_color'] = '#ffffff';
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';

                    state['mobile_menu_level1_color'] = '#5f727f';
                    state['mobile_menu_level1_background_color'] = '#dfe5e8';
                    state['mobile_menu_level1_active_color'] = '#3c3950';
                    state['mobile_menu_level1_active_background_color'] = '#dfe5e8';
                    state['mobile_menu_level2_color'] = '#5f727f';
                    state['mobile_menu_level2_background_color'] = '#f0f3f2';
                    state['mobile_menu_level2_active_color'] = '#3c3950';
                    state['mobile_menu_level2_active_background_color'] = '#f0f3f2';
                    state['mobile_menu_level3_color'] = '#5f727f';
                    state['mobile_menu_level3_background_color'] = '#ffffff';
                    state['mobile_menu_level3_active_color'] = '#ffffff';
                    state['mobile_menu_level3_active_background_color'] = '#494c64';
                    state['mobile_menu_border_color'] = '#dfe5e8';
                    state['mobile_menu_social_icon_color'] = '#99a9b5';
                    state['mobile_menu_hide_color'] = '#3c3950';
                }

                if ((payload.name == 'mobile_menu_layout' && payload.value == 'default' && state['mobile_menu_layout_style'] == 'dark') || (payload.name == 'mobile_menu_layout_style' && payload.value == 'dark' && state['mobile_menu_layout'] == 'default')) {
                    //state['mobile_menu_font_family'] = 'Source Sans Pro';
                    //state['mobile_menu_font_style'] = '400';
                    //state['mobile_menu_font_size'] = '16';
                    //state['mobile_menu_line_height'] = '20';
                    //state['mobile_menu_background_color'] = '';
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';

                    state['mobile_menu_level1_color'] = '#99a9b5';
                    state['mobile_menu_level1_background_color'] = '#212331';
                    state['mobile_menu_level1_active_color'] = '#ffffff';
                    state['mobile_menu_level1_active_background_color'] = '#181828';
                    state['mobile_menu_level2_color'] = '#99a9b5';
                    state['mobile_menu_level2_background_color'] = '#212331';
                    state['mobile_menu_level2_active_color'] = '#ffffff';
                    state['mobile_menu_level2_active_background_color'] = '#181828';
                    state['mobile_menu_level3_color'] = '#99a9b5';
                    state['mobile_menu_level3_background_color'] = '#212331';
                    state['mobile_menu_level3_active_color'] = '#3c3950';
                    state['mobile_menu_level3_active_background_color'] = '#181828';
                    state['mobile_menu_border_color'] = '#494c64';
                    state['mobile_menu_social_icon_color'] = '';
                    state['mobile_menu_hide_color'] = '';
                }

                if ((payload.name == 'mobile_menu_layout' && payload.value == 'overlay' && state['mobile_menu_layout_style'] == 'dark') || (payload.name == 'mobile_menu_layout_style' && payload.value == 'dark' && state['mobile_menu_layout'] == 'overlay')) {
                    state['mobile_menu_font_family'] = 'Montserrat';
                    state['mobile_menu_font_style'] = '700';
                    state['mobile_menu_font_sets'] = '';
                    state['mobile_menu_font_size'] = '24';
                    state['mobile_menu_line_height'] = '48';
                    state['mobile_menu_text_transform'] = 'uppercase';
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';

                    state['mobile_menu_background_color'] = '#212331';
                    state['mobile_menu_level1_color'] = '#ffffff';
                    state['mobile_menu_level1_background_color'] = '';
                    state['mobile_menu_level1_active_color'] = '#00bcd4';
                    state['mobile_menu_level1_active_background_color'] = '';
                    state['mobile_menu_level2_color'] = '#ffffff';
                    state['mobile_menu_level2_background_color'] = '';
                    state['mobile_menu_level2_active_color'] = '#00bcd4';
                    state['mobile_menu_level2_active_background_color'] = '';
                    state['mobile_menu_level3_color'] = '#ffffff';
                    state['mobile_menu_level3_background_color'] = '';
                    state['mobile_menu_level3_active_color'] = '#00bcd4';
                    state['mobile_menu_level3_active_background_color'] = '';
                    state['mobile_menu_border_color'] = '';
                    state['mobile_menu_social_icon_color'] = '';
                    state['mobile_menu_hide_color'] = '#00bcd4';
                }

                if ((payload.name == 'mobile_menu_layout' && payload.value == 'slide-horizontal' && state['mobile_menu_layout_style'] == 'dark') || (payload.name == 'mobile_menu_layout_style' && payload.value == 'dark' && state['mobile_menu_layout'] == 'slide-horizontal')) {
                    //state['mobile_menu_font_family'] = 'Source Sans Pro';
                    //state['mobile_menu_font_style'] = '400';
                    //state['mobile_menu_font_sets'] = '';
                    //state['mobile_menu_font_size'] = '16';
                    //state['mobile_menu_line_height'] = '20';
                    //state['mobile_menu_background_color'] = '#212331';
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';

                    state['mobile_menu_level1_color'] = '#99a9b5';
                    state['mobile_menu_level1_background_color'] = '#212331';
                    state['mobile_menu_level1_active_color'] = '#ffffff';
                    state['mobile_menu_level1_active_background_color'] = '#212331';
                    state['mobile_menu_level2_color'] = '#99a9b5';
                    state['mobile_menu_level2_background_color'] = '#393d4f';
                    state['mobile_menu_level2_active_color'] = '#ffffff';
                    state['mobile_menu_level2_active_background_color'] = '#393d4f';
                    state['mobile_menu_level3_color'] = '#99a9b5';
                    state['mobile_menu_level3_background_color'] = '#494c64';
                    state['mobile_menu_level3_active_color'] = '#3c3950';
                    state['mobile_menu_level3_active_background_color'] = '#00bcd4';
                    state['mobile_menu_border_color'] = '#494c64';
                    state['mobile_menu_social_icon_color'] = '#99a9b5';
                    state['mobile_menu_hide_color'] = '#ffffff';
                }

                if ((payload.name == 'mobile_menu_layout' && payload.value == 'slide-vertical' && state['mobile_menu_layout_style'] == 'dark') || (payload.name == 'mobile_menu_layout_style' && payload.value == 'dark' && state['mobile_menu_layout'] == 'slide-vertical')) {
                    //state['mobile_menu_font_family'] = 'Source Sans Pro';
                    //state['mobile_menu_font_style'] = '400';
                    //state['mobile_menu_font_sets'] = '';
                    //state['mobile_menu_font_size'] = '16';
                    //state['mobile_menu_line_height'] = '20';
                    //state['mobile_menu_background_color'] = '#212331';
                    state['navigation_background_type'] = 'color';
                    state['top_background_type'] = 'color';
                    state['top_area_background_type'] = 'color';

                    state['mobile_menu_level1_color'] = '#99a9b5';
                    state['mobile_menu_level1_background_color'] = '#212331';
                    state['mobile_menu_level1_active_color'] = '#ffffff';
                    state['mobile_menu_level1_active_background_color'] = '#212331';
                    state['mobile_menu_level2_color'] = '#99a9b5';
                    state['mobile_menu_level2_background_color'] = '#393d4f';
                    state['mobile_menu_level2_active_color'] = '#ffffff';
                    state['mobile_menu_level2_active_background_color'] = '#393d4f';
                    state['mobile_menu_level3_color'] = '#99a9b5';
                    state['mobile_menu_level3_background_color'] = '#494c64';
                    state['mobile_menu_level3_active_color'] = '#3c3950';
                    state['mobile_menu_level3_active_background_color'] = '#00bcd4';
                    state['mobile_menu_border_color'] = '#494c64';
                    state['mobile_menu_social_icon_color'] = '#99a9b5';
                    state['mobile_menu_hide_color'] = '#ffffff';
                }

                this.dispatch('extra/optionsUpdated');
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

                    window.console.log('set option "' + option + '" to "' + payload.value + '"');

                    let match = option.match(/^(styled_subtitle|h[123456]|xlarge|title_excerpt|counter)_(font_size|line_height)_(tablet|mobile)$/);
                    if (match && state[option] != payload.value) {
                        let settingName = match[1] + '_custom_responsive_fonts';

                        if (settingName == 'xlarge_title_custom_responsive_fonts') {
                            settingName = 'xlarge_custom_responsive_fonts';
                        }

                        state[settingName] = "1";
                    }

                    let parts = option.split('.');
                    switch (parts.length) {
                        case 1:
                            state[option] = payload.value;
                            break;
                        case 2:
                            state.page_options[parts[0]][parts[1]] = payload.value;
                            break;
                        case 3:
                            state[parts[0]][parts[1]][parts[2]] = payload.value;
                            break;
                    }

                    //PRODUCT ARCHIVE LAYOUT
                    if (option == 'product_archive_preset_below' && payload.value == 'default-cart-button') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'button';
                        state['product_archive_cart_button_show_icon'] = '1';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_caption_container_preset'] = 'transparent';
                        state['product_archive_caption_container_alignment_desktop'] = '';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '1';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'default-cart-icon') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_caption_container_preset'] = 'transparent';
                        state['product_archive_caption_container_alignment_desktop'] = '';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '4';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'cart-disabled') {
                        state['product_archive_show_add_to_cart'] = '';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '22';
                        state['product_archive_size_tablet'] = '22';
                        state['product_archive_size_mobile'] = '22';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_caption_container_preset'] = 'gray';
                        state['product_archive_caption_container_alignment_desktop'] = '';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '3';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'border-cart-icon') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '12';
                        state['product_archive_size_tablet'] = '12';
                        state['product_archive_size_mobile'] = '12';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_caption_container_preset'] = 'white';
                        state['product_archive_caption_container_alignment_desktop'] = '';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '2';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'shadow-hover-01') {
                        state['product_archive_show_add_to_cart'] = '';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '1';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_caption_container_preset'] = 'transparent';
                        state['product_archive_caption_container_alignment_desktop'] = '';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '3';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'shadow-hover-02') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'button';
                        state['product_archive_cart_button_show_icon'] = '1';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '30';
                        state['product_archive_size_tablet'] = '30';
                        state['product_archive_size_mobile'] = '30';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_caption_container_preset'] = 'transparent';
                        state['product_archive_caption_container_alignment_desktop'] = '';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '#99A9B5';
                        state['product_archive_icons_color_background'] = '#02010100';
                        state['product_archive_icons_color_border'] = '#99A9B5';
                        state['product_archive_icons_color_hover'] = '#FFFFFF';
                        state['product_archive_icons_color_background_hover'] = '#00BCD4';
                        state['product_archive_icons_color_border_hover'] = '#00BCD4';
                        state['product_archive_button_add_to_cart_text_color'] = '#99A9B5';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '#FFFFFF';
                        state['product_archive_button_add_to_cart_background_color'] = '#02010100';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '#00BCD4';
                        state['product_archive_button_add_to_cart_border_color'] = '#99A9B5';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '#00BCD4';
                        state['product_archive_button_select_options_text_color'] = '#99A9B5';
                        state['product_archive_button_select_options_text_color_hover'] = '#FFFFFF';
                        state['product_archive_button_select_options_background_color'] = '#02010100';
                        state['product_archive_button_select_options_background_color_hover'] = '#00BCD4';
                        state['product_archive_button_select_options_border_color'] = '#99A9B5';
                        state['product_archive_button_select_options_border_color_hover'] = '#00BCD4';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '3';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'rounded-images') {
                        state['product_archive_show_add_to_cart'] = '';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_caption_container_preset'] = 'transparent';
                        state['product_archive_caption_container_alignment_desktop'] = '';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '1';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'rectangle-button-01') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'button';
                        state['product_archive_cart_button_show_icon'] = '';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '32';
                        state['product_archive_size_tablet'] = '32';
                        state['product_archive_size_mobile'] = '32';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_caption_container_preset'] = 'transparent';
                        state['product_archive_caption_container_alignment_desktop'] = 'left';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '0';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '3';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'rectangle-button-02') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'button';
                        state['product_archive_cart_button_show_icon'] = '1';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '16';
                        state['product_archive_size_tablet'] = '16';
                        state['product_archive_size_mobile'] = '16';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_caption_container_preset'] = 'transparent';
                        state['product_archive_caption_container_alignment_desktop'] = 'left';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '3';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '#DFE5E8';
                        state['product_archive_button_select_options_background_color_hover'] = '#00BCD4';
                        state['product_archive_button_select_options_border_color'] = '#02010100';
                        state['product_archive_button_select_options_border_color_hover'] = '#02010100';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '1';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'separator-01') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'button';
                        state['product_archive_cart_button_show_icon'] = '1';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '36';
                        state['product_archive_size_tablet'] = '36';
                        state['product_archive_size_mobile'] = '36';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '1';
                        state['product_archive_caption_container_separator_width'] = '2';
                        state['product_archive_caption_container_separator_color'] = '#f4f6f7';
                        state['product_archive_caption_container_preset'] = 'gray';
                        state['product_archive_caption_container_alignment_desktop'] = '';
                        state['product_archive_caption_container_background_color_hover'] = '#FFFFFF';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '4';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_below' && payload.value == 'separator-02') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '0';
                        state['product_archive_size_tablet'] = '0';
                        state['product_archive_size_mobile'] = '0';
                        state['product_archive_image_hover_effect_page'] = 'fade';
                        state['product_archive_caption_container_separator'] = '1';
                        state['product_archive_caption_container_separator_width'] = '1';
                        state['product_archive_caption_container_separator_color'] = '#212227';
                        state['product_archive_caption_container_preset'] = 'transparent';
                        state['product_archive_caption_container_alignment_desktop'] = '';
                        state['product_archive_caption_container_background_color_hover'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '#02010100';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '#00BCD4';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '6';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_on_image' && payload.value == 'default-cart-button') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'button';
                        state['product_archive_cart_button_show_icon'] = '1';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = '';
                        state['product_archive_image_hover_effect_image'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '3';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_on_image' && payload.value == 'default-cart-icon') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = '';
                        state['product_archive_image_hover_effect_image'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '4';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_on_image' && payload.value == 'solid-background') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_caption_container_preset_hover'] = 'solid';
                        state['product_archive_caption_container_alignment_hover'] = '';
                        state['product_archive_image_hover_effect_image'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '3';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_on_image' && payload.value == 'rounded-corners') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = 'center';
                        state['product_archive_image_hover_effect_image'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '1';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_on_image' && payload.value == 'shadow-hover-01') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '22';
                        state['product_archive_size_tablet'] = '22';
                        state['product_archive_size_mobile'] = '22';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = 'center';
                        state['product_archive_image_hover_effect_image'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '2';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_on_image' && payload.value == 'shadow') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'button';
                        state['product_archive_cart_button_show_icon'] = '1';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = 'right';
                        state['product_archive_image_hover_effect_image'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '2';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_on_image' && payload.value == 'separator-01') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '0';
                        state['product_archive_size_tablet'] = '0';
                        state['product_archive_size_mobile'] = '0';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = 'center';
                        state['product_archive_image_hover_effect_image'] = 'fade';
                        state['product_archive_caption_container_separator'] = '1';
                        state['product_archive_caption_container_separator_width'] = '4';
                        state['product_archive_caption_container_separator_color'] = '#DFE5E8';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '3';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_on_image' && payload.value == 'separator-02') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '0';
                        state['product_archive_size_tablet'] = '0';
                        state['product_archive_size_mobile'] = '0';
                        state['product_archive_caption_container_preset_hover'] = 'solid';
                        state['product_archive_caption_container_alignment_hover'] = 'center';
                        state['product_archive_image_hover_effect_image'] = 'fade';
                        state['product_archive_caption_container_separator'] = '1';
                        state['product_archive_caption_container_separator_width'] = '1';
                        state['product_archive_caption_container_separator_color'] = '#212227';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '#212227';
                        state['product_archive_icons_color_background'] = '#02010100';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '#212227';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '5';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_on_hover' && payload.value == 'default') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = '';
                        state['product_archive_image_hover_effect_hover'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '4';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_on_hover' && payload.value == 'rounded-corners') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '42';
                        state['product_archive_size_tablet'] = '42';
                        state['product_archive_size_mobile'] = '42';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = '';
                        state['product_archive_image_hover_effect_hover'] = 'zooming-blur';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '1';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_on_hover' && payload.value == 'solid-background') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '';
                        state['product_archive_show_reviews_tablet'] = '';
                        state['product_archive_show_reviews_mobile'] = '';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '32';
                        state['product_archive_size_tablet'] = '32';
                        state['product_archive_size_mobile'] = '32';
                        state['product_archive_caption_container_preset_hover'] = 'solid';
                        state['product_archive_caption_container_alignment_hover'] = '';
                        state['product_archive_image_hover_effect_hover'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '2';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_on_hover' && payload.value == 'separator') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '0';
                        state['product_archive_size_tablet'] = '0';
                        state['product_archive_size_mobile'] = '0';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = 'center';
                        state['product_archive_image_hover_effect_hover'] = 'fade';
                        state['product_archive_caption_container_separator'] = '1';
                        state['product_archive_caption_container_separator_width'] = '1';
                        state['product_archive_caption_container_separator_color'] = '#dfe5e8';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '3';
                        state['product_label_sale_type'] = 'text';
                    }

                    if (option == 'product_archive_preset_on_hover' && payload.value == 'centered-caption') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'button';
                        state['product_archive_cart_button_show_icon'] = '1';
                        state['product_archive_show_categories_desktop'] = '';
                        state['product_archive_show_categories_tablet'] = '';
                        state['product_archive_show_categories_mobile'] = '';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '6';
                        state['product_archive_size_tablet'] = '6';
                        state['product_archive_size_mobile'] = '6';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = 'center';
                        state['product_archive_image_hover_effect_hover'] = 'fade';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '';
                        state['product_archive_label_new'] = '';
                        state['product_archive_label_sale'] = '';
                        state['product_archive_label_out_stock'] = '';
                        state['product_labels_style'] = '1';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_on_hover' && payload.value == 'shadow-hover') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '26';
                        state['product_archive_size_tablet'] = '26';
                        state['product_archive_size_mobile'] = '26';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = '';
                        state['product_archive_image_hover_effect_hover'] = 'zooming-blur';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '1';
                        state['product_label_sale_type'] = 'percentage';
                    }

                    if (option == 'product_archive_preset_on_hover' && payload.value == 'gradient-hover') {
                        state['product_archive_show_add_to_cart'] = '1';
                        state['product_archive_add_to_cart_type'] = 'icon';
                        state['product_archive_show_categories_desktop'] = '1';
                        state['product_archive_show_categories_tablet'] = '1';
                        state['product_archive_show_categories_mobile'] = '1';
                        state['product_archive_show_reviews_desktop'] = '1';
                        state['product_archive_show_reviews_tablet'] = '1';
                        state['product_archive_show_reviews_mobile'] = '1';
                        state['product_archive_social_sharing'] = '';
                        state['product_archive_size_desktop'] = '16';
                        state['product_archive_size_tablet'] = '16';
                        state['product_archive_size_mobile'] = '16';
                        state['product_archive_caption_container_preset_hover'] = 'light';
                        state['product_archive_caption_container_alignment_hover'] = '';
                        state['product_archive_image_hover_effect_hover'] = 'gradient';
                        state['product_archive_caption_container_separator'] = '';
                        state['product_archive_caption_container_separator_width'] = '';
                        state['product_archive_caption_container_separator_color'] = '';
                        state['product_archive_button_border_radius_desktop'] = '';
                        state['product_archive_icons_color'] = '';
                        state['product_archive_icons_color_background'] = '';
                        state['product_archive_icons_color_border'] = '';
                        state['product_archive_icons_color_hover'] = '';
                        state['product_archive_icons_color_background_hover'] = '';
                        state['product_archive_icons_color_border_hover'] = '';
                        state['product_archive_button_add_to_cart_text_color'] = '';
                        state['product_archive_button_add_to_cart_text_color_hover'] = '';
                        state['product_archive_button_add_to_cart_background_color'] = '';
                        state['product_archive_button_add_to_cart_background_color_hover'] = '';
                        state['product_archive_button_add_to_cart_border_color'] = '';
                        state['product_archive_button_add_to_cart_border_color_hover'] = '';
                        state['product_archive_button_select_options_text_color'] = '';
                        state['product_archive_button_select_options_text_color_hover'] = '';
                        state['product_archive_button_select_options_background_color'] = '';
                        state['product_archive_button_select_options_background_color_hover'] = '';
                        state['product_archive_button_select_options_border_color'] = '';
                        state['product_archive_button_select_options_border_color_hover'] = '';
                        state['product_archive_labels'] = '1';
                        state['product_archive_label_new'] = '1';
                        state['product_archive_label_sale'] = '1';
                        state['product_archive_label_out_stock'] = '1';
                        state['product_labels_style'] = '1';
                        state['product_label_sale_type'] = 'percentage';
                    }
                }

                this.dispatch('extra/optionsUpdated');
            },

            reset(state) {
                for(let optionName in config.defaultOptions) {
                    if (optionName != 'extra' && optionName != 'settings') {
                        state[optionName] = config.defaultOptions[optionName];
                    }
                }
            }
        },

        actions: {
            init() {
                this.commit('extra/init');
            },

            reset() {
                this.commit('reset');
                this.dispatch('extra/optionsUpdated');
                this.dispatch('save',i18n.t('reset.done'));
            },

            import(context, settings) {
                context.commit('importSettings',settings);
                context.dispatch('extra/optionsUpdated');
                this.dispatch('save',i18n.t('backup.import_done'));
            },

            preview() {
                window.open(config.homeUrl,"_blank");

                this.commit('extra/preview');
            },

            save(context, notification_message) {
                if (context.getters['extra/getExtraByName']('options_saving')) {
                    return;
                }

                if (notification_message) {
                    context.commit('extra/setExtraByName',{name:'saved_notification_text', value: notification_message});
                }

                context.commit('extra/savingStart',true);

                var startMs=(new Date()).getTime();

                Api('save',{
                    options: JSON.parse(context.getters['extra/getExtraByName']('options_saving_contents')),
                    credentials: context.getters['extra/getExtraByName']('credentials')
                }).then(
                    response => {
                        if (response.data && response.data.status === true) {
                            var delayMs=1000 - ((new Date()).getTime() - startMs);
                            setTimeout(()=>{
                                context.commit('extra/savingSuccess', response.data);
                            }, delayMs > 0 ? delayMs : 0);
                        } else {
                            context.commit('extra/savingFailed', response);
                            if (response.data && response.data.status && response.data.status.reason) {
                                if (response.data.status.reason == 'credentials') {
                                    this._vm.$modal.show(ToModalFilesystemCredentials, {
                                        html: response.data.status.form,
                                        doneCallback: () => {context.dispatch('save');}
                                    }, {
                                        height: 'auto'
                                    });
                                    return;
                                }
                                if (response.data.status.reason == 'error') {
                                    this._vm.$modal.alert({
                                        htmlMessage: response.data.status.message
                                    });
                                    return;
                                }

                            }
                        }
                    },
                    error => {
                        context.commit('extra/savingFailed', error);
                    }
                );
            }
        },

        strict: false
    });
}

export default store;
