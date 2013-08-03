/*global define */
/*jslint browser: true */

define(['jquery'], function ($) {
    'use strict';

    var Slider = {
        items: {
            topItem: $('#top'),
            content: $('#content'),
            bottom: $('#bottom'),
            avatar: $('#avatar'),
            avatarContainer: $('#avatar').parent()
        },
        init: function () {
            if ($('html').hasClass('touch')) {
                return;
            }

            this.maxTop = this.items.content.offset().top - this.items.topItem.height() - this.items.avatarContainer.offset().top;
            this.topItemHeight = this.items.topItem.height();

            $(window).on('scroll', this.observe);
            this.observe.call(window);

            this.initNavigation();
        },
        observe: function () {
            var topPosition = Math.max(0, (Slider.items.content.offset().top - Slider.topItemHeight - $(this).scrollTop()));

            Slider.items.topItem.css('top', topPosition);
            Slider.items.bottom.css('z-index', topPosition === 0 ? '2' : '0');
            Slider.items.avatar.css('opacity', topPosition / Slider.maxTop);
        },
        initNavigation: function () {
            this.items.topItem.find('.menu-item a').on('click', function (e) {
                var distance = Slider.items.content.find($(this).attr('href')).offset().top - Slider.items.topItem.height();
                e.preventDefault();
                $('html, body').animate({
                    scrollTop: distance
                }, Math.max(Math.abs($(window).scrollTop() - distance), 800));
            });
        }
    };

    return Slider;
});