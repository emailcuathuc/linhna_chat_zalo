<?php
/*
Plugin Name: Linhna Chat Zalo
Description: Plugin mô tả
Version: 1.0
Author: Linhna
*/

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