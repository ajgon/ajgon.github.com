//= require lib/modernizr
//= require lib/jquery
//= require lib/material
//= require lib/isotope
//= require lib/analytics
//= require portfolio

/* global jQuery: false */

(function ($) {
    'use strict';

    $(document).on('click', 'a[data-width][data-height]', function (e) {
        e.preventDefault();
        window.open(
            $(this).attr('href'), 'win' + Math.random().toString().replace('.', ''),
            'menubar=0,resizable=0,status=0,toolbar=0,width=' + $(this).data('width') + ',height=' +
            $(this).data('height')
        );
    });

    if (document.getElementById('disqus_thread')) {
        /*** DISQS ***/
        /* * * CONFIGURATION VARIABLES * * */
        var disqus_shortname = 'ajgon';

        /* * * DON'T EDIT BELOW THIS LINE * * */
        (function() {
            var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
            dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
        })();
    }
}(jQuery));

window['GoogleAnalyticsObject'] = 'ga';
ga('create', 'UA-65616575-1', 'auto');
ga('send', 'pageview');
