/*jslint node: true */
module.exports = function (grunt) {
    'use strict';

    var fs = require('fs');

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
        },
        template: {
            dev: {
                src: '_data/templates/_layout.ejs',
                dest: 'index.html',
                variables: {
                    portfolio: JSON.parse(fs.readFileSync('_data/json/portfolio.json')),
                    specs: JSON.parse(fs.readFileSync('_data/json/specs.json')),
                    moment: require('moment')
                }
            },
        },
        watch: {
            css: {
                files: ['css/src/*.css'],
                tasks: ['cssmin']
            },
            js: {
                files: ['js/src/*.js', 'js/vendor/*.js'],
                tasks: ['requirejs']
            },
            html: {
                files: ['_data/json/*.json', '_data/templates/*.ejs'],
                tasks: ['template']
            }
        }
    });

    grunt.loadNpmTasks('grunt-jslint');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-templater');

    // Default task(s).
    grunt.registerTask('lint', ['csslint', 'jslint']);
    grunt.registerTask('devmin', ['cssmin', 'requirejs', 'template']);
    grunt.registerTask('minify', ['imagemin', 'devmin']);
    grunt.registerTask('default', ['lint', 'minify']);

};
