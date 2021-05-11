// import sass from 'node-sass';

module.exports = function (grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				options: { style: 'expanded' },
				files: {
					'main.css': 'main.scss',
				},
				watch: {
					files: ['<%= sass.files %>'],
					tasks: ['sass'],
				},
			},
		},
	});

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
