/**
 * Optimize all images
 * ===============================
 */

module.exports = {
	options: {
		progressive: false
	},
	dist: {
		files: [{
			expand: true,
			cwd: '<%= paths.src %>/images',
			src: ['**/*.{gif,png,jpg,GIF,PNG,JPG}'],
			dest: '<%= paths.dist %>/images'
		}]
	},
	dev: {
		files: [{
			expand: true,
			cwd: '<%= paths.src %>/images',
			src: ['**/*.{gif,png,jpg,GIF,PNG,JPG}'],
			dest: '<%= paths.tmp %>/images'
		}]
	},
};