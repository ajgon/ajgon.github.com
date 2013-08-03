/*jslint node: true */
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        csslint: {
            strict: {
                src: ['css/src/main.css']
            }
        },
        jslint: {
            all: {
                src: ['Gruntfile.js', 'js/src/**/*.js']
            }
        },
        requirejs: {
            compile: {
                options: {
                    baseUrl: 'js/src',
                    mainConfigFile: 'js/src/config.js',
                    out: 'js/dist/main.min.js'
                }
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0,
            },
            combine: {
                files: {
                    'css/dist/main.min.css': ['css/src/normalize.css', 'css/src/boilerplate.css', 'css/src/main.css']
                }
            }
        },
        imagemin: {
            all: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['*.png', 'img/**/*.png', 'img/**/*.jpg'],
                    dest: './',
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    // Default task(s).
    grunt.registerTask('lint', ['csslint', 'jslint']);
    grunt.registerTask('minify', ['cssmin', 'requirejs', 'imagemin']);
    grunt.registerTask('devmin', ['cssmin', 'requirejs']);
    grunt.registerTask('default', ['lint', 'minify']);

};
