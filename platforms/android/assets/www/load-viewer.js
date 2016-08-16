var myWebViewerContainer = document.createElement("div");
var myWebViewer = new PDFTron.WebViewer({
	config: 'templateConfig.js',
    initialDoc : "editable_form.xod",
	documentType: 'xod',
	enableAnnotations: true,
	streaming: false
}, myWebViewerContainer);
