module.exports = function(grunt) {
    grunt.initConfig({
        sprite: {
            all: {
                src: 'images/icon/*.png',
                dest: 'images/spritesheet.png',
                destCss: 'css/sprite.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-spritesmith');
};
