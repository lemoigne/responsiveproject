module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                includePaths: ['app/bower_components/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'app/css/app.css': 'app/scss/app.scss'
                }
            }
        },

        connect: {
            server: {
                options: {
                    livereload: true,
                    base: 'app/',
                    port: 9000,
                    open: true
                }
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect.static('app/')
                        ];
                    }
                }
            }
        },

        watch: {
            grunt: { files: ['Gruntfile.js'] },

            js: {
                files: 'app/js/*.js',
                tasks: ['jshint', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            images: {
              files: 'app/images/*.png',
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            sass: {
                files: 'app/scss/**/*.scss',
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            html: {
                files: 'app/*.html',
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        jshint: {
            all: ['app/js/*.js']
        },

        uglify: {
            dist: {
                files: {
                    'app/js/min/all.js': ['app/js/*.js']
                }
            }
        }

    });


    grunt.registerTask('serve', [
        'connect',
        'watch'
    ]);

    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build', 'jshint', 'uglify', 'watch']);
}