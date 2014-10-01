module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
 
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'public/css/foundation.css': 'scss/foundation.scss',
          'public/css/app.css': 'scss/app.scss'
        }        
      }
    },
 
    copy: {
      main: {
        expand: true,
        flatten: true,
        cwd: 'bower_components',
        src: ['angular/*.js', 'angular-route/*.js', 'foundation/js/*.js', 'jquery/dist/*.js'],
        dest: 'public/js/lib'
      }
    },
 
    watch: {
      options: {
        livereload: true
      },
      grunt: { files: ['Gruntfile.js'] },
 
      sass: {
        files: 'scss/*.scss',
        tasks: ['sass']
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
 
  grunt.registerTask('build', ['sass', 'copy']);
  grunt.registerTask('default', ['sass', 'copy', 'watch']);
 
}