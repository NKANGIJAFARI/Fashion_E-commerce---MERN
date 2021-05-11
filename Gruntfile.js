// import sass from 'node-sass';

module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			development: {
				options: {},
				files: {
					'/src/Styles/main.css': '/src/Styles/main.scss',
				},
			},
			production: {
				options: {},
				files: {
					'src/Styles/main.css': 'src/Styles/main.scss',
				},
			},
		},
		watch: {
			files: ['<%= sass.files %>'],
			tasks: ['sass'],
		},
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass']);
	grunt.registerTask('heroku:production', 'sass');
};
// grunt.initConfig({
// 	sass: {
// 		// Task
// 		dist: {
// 			// Target
// 			options: {
// 				// Target options
// 				style: 'expanded',
// 			},
// 			files: {
// 				// Dictionary of files
// 				'main.css': 'main.scss', // 'destination': 'source'
// 				'widgets.css': 'widgets.scss',
// 			},
// 		},
// 	},
// });
