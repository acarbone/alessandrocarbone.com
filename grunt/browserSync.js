/**
 * BrowserSync - Sync every attached device for user's input
 * ===============================
 */

module.exports = {
	bsFiles: {
		src : '<%= paths.tmp %>/**/*.*'
	},
	options: {
		watchTask: true,
		server: {
			baseDir: "./<%= paths.tmp %>/",
			directory: true
		}
	}
};