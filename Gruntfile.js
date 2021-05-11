const sass = require('node-sass');

require('load-grunt-tasks')(grunt);

grunt.initConfig({
	sass: {
		development: {
			options: {},
			files: {
				'/frontend/src/styles/main.css': '/frontend/src/styles/main.scss',
			},
		},
		production: {
			options: {},
			files: {
				'/frontend/src/styles/main.css': '/frontend/src/styles/main.scss',
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
