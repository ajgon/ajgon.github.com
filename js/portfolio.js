/* global jQuery: false, Modernizr: false */

(function ($) {
    'use strict';

    var Portfolio = {
        init: function () {
            this.container = $('#portfolioItems');
            this.optionsSetter = $('#options-filter');
            this.containerPaddings = parseInt(this.container.css('padding-left'), 10) +
                                     parseInt(this.container.css('padding-right'), 10);
            this.masonryCols = -1;

            this.initIsotope();
            this.initFlipboard();
            this.initOptions();

            $(window).resize(function () {
                var containerDistance = Portfolio.container.parent().width() - Portfolio.container.outerWidth();
                var basicWidth = Portfolio.container.width();
                if (containerDistance >= 155 || containerDistance <= 0) {
                    if (containerDistance <= 0) {
                        containerDistance -= 155;
                    }
                    Portfolio.container.width(basicWidth + parseInt(containerDistance / 155, 10) * 155);
                }
            });

            $(window).load(function () {
                $(this).resize();
            });
        },
        initIsotope: function () {
            this.container.isotope({
                itemSelector: '.item',
                masonry: {
                    columnWidth: 155
                },
                // sortBy: 'date', // or 'client'
                // sortAscending: false,
                onLayout: this.isotopeOnLayout,
                getSortData: this.sortData
            }).isotope('shuffle');
        },
        initFlipboard: function () {
            this.container
                .on('mouseenter', '.item', function () {
                    var $this = $(this);
                    $this.addClass('hovered');
                    $this.find('.front').addClass('front-animating');
                    $this.find('.back').addClass('back-animating');
                })
                .on('mouseleave', '.item', function () {
                    var frontback = $(this).removeClass('hovered').find('.front, .back');
                    frontback.removeClass('paused');
                    if (!Modernizr.testAllProps('animationName')) {
                        frontback.removeClass('front-animating').removeClass('back-animating');
                    }
                })
                .on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.front, .back', function () {
                    var $this = $(this);
                    $this.removeClass('front-animating');
                    $this.removeClass('back-animating');
                })
                .on(
                    'animationiteration webkitAnimationIteration oanimationiteration MSAnimationIteration',
                    '.hovered .front, .hovered .back',
                    function () {
                        $(this).addClass('paused');
                    }
                );
        },
        initOptions: function () {
            var self = this;
            this.optionsSetter.on('click', '.mdl-button', function (e) {
                $(this).addClass('mdl-button--accent').siblings('.mdl-button').removeClass('mdl-button--accent');
                var item = $(this).data('item');
                if (item === '*') {
                    self.container.isotope({filter: '*'});
                } else {
                    self.container.isotope({filter: '[data-specs*="' + item + '"]'});
                }

            });
        },

        isotopeOnLayout: function ($elems, isotope) {
            if (Portfolio.masonryCols !== isotope.masonry.cols) {
                Portfolio.container.width(isotope.masonry.cols * 155);
                Portfolio.masonryCols = isotope.masonry.cols;
            }
        },
        sortData: {
            date: function ($elem) {
                return $elem.attr('data-date');
            },
            client: function ($elem) {
                return $elem.attr('data-client');
            }
        }
    };

    window.Portfolio = Portfolio;
    Portfolio.init();

})(jQuery);
