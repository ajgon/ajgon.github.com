/*global define */
/*jslint browser: true */

define(['jquery', 'isotope'], function ($) {
    'use strict';

    var Portfolio = {
        init: function () {
            this.container = $('#portfolioItems');
            // this.container.isotope({
            //     itemSelector: '.item',
            //     masonry: {
            //         columnWidth: 160
            //     }
            // }); //.isotope('shuffle');
        }
    };

    return Portfolio;
});