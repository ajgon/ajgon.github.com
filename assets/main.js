/* global jQuery: false */


(function ($) {
    'use strict';

    $.getJSON('https://www.api.tweecool.com/?screenname=ajgon&count=25', function (data) {
        var $node = $('#recent-tweets').empty();
        var t = 0;
        var count = 0;
        for (t = 0; t < 25; t += 1) {
            if (!data.tweets[t].text.match(/^(?:RT )?@/)) {
                $node.append('<li>' + data.tweets[t].text.replace(
                    /(https?:\/\/[^\s]+[^.])/, '<a href="$1" target="_blank">$1</a>'
                ) + '</li>');
                count += 1;
            }
            if (count >= 3) {
                break;
            }
        }
    });

    $(document).on('click', 'a[data-width][data-height]', function (e) {
        e.preventDefault();
        window.open(
            $(this).attr('href'), 'win' + Math.random().toString().replace('.', ''),
            'menubar=0,resizable=0,status=0,toolbar=0,width=' + $(this).data('width') + ',height=' +
            $(this).data('height')
        );
    });
}(jQuery));
