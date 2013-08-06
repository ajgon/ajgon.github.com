/*global define */
/*jslint browser: true */

define(['jquery', 'isotope'], function ($) {
    'use strict';

    var Portfolio = {
        init: function () {
            this.container = $('#portfolioItems');
            this.containerPaddings = parseInt(this.container.css('padding-left'), 10) + parseInt(this.container.css('padding-right'), 10);
            this.masonryCols = -1;
            this.container.isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: 155
                },
                onLayout: this.isotopeOnLayout
            }).isotope('shuffle');

            $(window).resize(function () {
                var containerDistance = Portfolio.container.parent().width() - Portfolio.container.outerWidth();
                if (containerDistance > 155 || containerDistance < 0) {
                    if (containerDistance < 0) {
                        containerDistance -= 155;
                    }
                    Portfolio.container.width(Portfolio.container.width() + parseInt(containerDistance / 155, 10) * 155);
                }
            });

            this.container
            .on('mouseenter', '.item', function (e) {
                $(this).addClass('hovered').find('.front, .back').addClass('animating');
            }).on('mouseleave', '.item', function (e) {
                $(this).removeClass('hovered').find('.front, .back').removeClass('paused');
            }).on('animationend', '.front, .back', function (e) {
                $(this).removeClass('animating');
            }).on('animationiteration', '.hovered .front, .hovered .back', function (e) {
                $(this).addClass('paused');
            });

        },
        isotopeOnLayout: function ($elems, isotope) {
            // var containerWidth = Portfolio.container.parent().width(),
            //     newContainerWidth = parseInt(containerWidth / 160, 10) * 160,
            //     containerNewMargin = (containerWidth - newContainerWidth) / 2;
            // console.log(containerWidth, newContainerWidth, containerNewMargin);
            // Portfolio.container.width(newContainerWidth - Portfolio.containerPaddings);
            //
            if (Portfolio.masonryCols !== isotope.masonry.cols) {
                Portfolio.container.width(isotope.masonry.cols * 155);
                Portfolio.masonryCols = isotope.masonry.cols;
            }
            console.log(isotope.masonry.cols);
        }
    };

    return Portfolio;
});