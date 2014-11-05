module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		ngdocs: {
			options: {
				dest: 'public/docs',
				/*scripts: ['../app.min.js'],*/
				html5Mode: false,
				startPage: '/api',
				title: "rf Component Framework",
				titleLink: "/api",
				bestMatch: true

			},

			api: {
				src: ['public/src/**/*.js', '!public/src/**/*.spec.js'],
				title: 'API Documentation'
			}
		}

	});

	// ===========================================================================
	// LOAD GRUNT PLUGINS ========================================================
	// ===========================================================================
	// we can only load these if they are in our package.json
	// make sure you have run npm install so our app can find these

	grunt.loadNpmTasks('grunt-ngdocs');
	grunt.registerTask('docs', ['ngdocs']);
};


