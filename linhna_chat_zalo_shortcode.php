<?php
/*
Plugin Name: Linhna Chat Zalo
Description: Plugin mô tả
Version: 1.1
Author: Linhna
*/
function check_for_plugin_update($checked_data) {
    global $wp_version;

    $plugin_slug = 'linhna_chat_zalo'; // Thay thế bằng slug của plugin của bạn
    $plugin_path = plugin_basename(__FILE__);
    $remote_version = '1.1'; // Thay thế bằng phiên bản mới nhất của plugin trên GitHub
    $plugin_data = get_plugin_data(WP_PLUGIN_DIR . '/' . $plugin_path);

    if (version_compare($wp_version, $remote_version, '<') && version_compare($plugin_data['Version'], $remote_version, '<')) {
        $checked_data->response[$plugin_path] = array(
            'new_version' => $remote_version,
            'slug' => $plugin_slug,
            'url' => 'https://github.com/emailcuathuc/linhna_chat_zalo/', // Thay thế bằng URL của repository của bạn
            'package' => 'https://github.com/emailcuathuc/linhna_chat_zalo/archive/refs/heads/main.zip' // Thay thế bằng URL trực tiếp đến tệp ZIP của plugin
        );
    }

    return $checked_data;
}

add_filter('site_transient_update_plugins', 'check_for_plugin_update');

// Load CSS and JS
function linhna_chat_zalo_enqueue_scripts() {
    wp_enqueue_style('linhna_chat_zalo_css', plugin_dir_url(__FILE__) . 'css/linhna_chat_zalo.css');
    wp_enqueue_script('linhna_chat_zalo_js', plugin_dir_url(__FILE__) . 'js/linhna_chat_zalo.js', array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'linhna_chat_zalo_enqueue_scripts');

// Include shortcode
function linhna_zalo_shortcode($atts) {
    $default_id = 'linhna_zalo';
    $attributes = shortcode_atts(array(
        'id' => $default_id,
    ), $atts);

    $output_image = '<img class="linhna_zalo_chat" id="' . esc_attr($attributes['id']) . '" src="https://page.widget.zalo.me/static/images/2.0/Logo.svg" alt="Chat Zalo">';
    $output_tooltip = '<div class="linhna-tooltip" id="linhna-tooltip"><span id="hello-customer">Tư vấn 24/24 kể cả lễ tết qua Zalo</span><span class="linhna-close-btn" onclick="linhnaCloseTooltip()">&#10005;</span><div class="linhna-tooltip-phone"><img class="live-svg" src="https://raw.githubusercontent.com/emailcuathuc/svg/main/live.svg" alt="Live tư vấn"><div class="tu-van">Tư vấn gần đây: <span id="slide_phone"></span></div></div></div>';
    
    return $output_image . $output_tooltip;
}
add_shortcode('linhna_zalo', 'linhna_zalo_shortcode');