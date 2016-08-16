/**
 * ReaderControl config file
 * ------------------------------
 * This js file is meant to simplify configuring commonly used settings for ReaderControl.
 * You can override default settings through ReaderControl.config properties, or add JavaScript code directly here.
 */

(function($) {
	$(document).on('viewerLoaded', function() {
		readerControl.pageDisplay = readerControl.pageDisplayModes.Single;
		readerControl.setPageMode();

		var docViewer = readerControl.docViewer;
		$(window).on('orientationchange', function() {
			$('#viewerPage').css('min-height', '600px');
		});

		docViewer.on('pageComplete', function() {
			$('input[type="radio"], input[type="checkbox"]')
				.off('change')
				.on('change');
			$('input[type="text"], textarea, select')
				.off('blur')
				.on('blur');
		});

		var pageContainer = $('#viewerWrapper');

		pageContainer.css({
			background: '#333',
			opacity: '0.5'
		});

		docViewer.on('pageComplete', function() {
			debugger;
			$('[id^=pageWidgetContainer] div').each(function() {
				var $this = $(this);
				$this.find('input,textarea').prop('readonly', true);
				$this.find('input[type=checkbox], select').prop('disabled', true);
			});
		});
	});
})(this.jQuery);
