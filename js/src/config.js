/*global require */

require.config({
    name: 'main',
    paths: {
        'jquery': '../vendor/jquery.min',
        'isotope': '../vendor/isotope.min'
    },
    shim: {
        'isotope': {
            deps: ['jquery']
        }
    }

});

require(['main']);