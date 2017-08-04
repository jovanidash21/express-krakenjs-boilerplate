'use strict';


module.exports = function watch(grunt) {
    // Load task
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Options
    return {
        css: {
            files: ['src/css/*.scss'],
            tasks: ['sass:dev']
        },
        js: {
            files: ['src/js/*.js'],
            tasks: ['uglify:dev']
        }
    };
};
