var myWebViewerContainer = document.createElement("div");
var myWebViewer = new PDFTron.WebViewer({
    initialDoc : "editable_form.xod",
	documentType: 'xod',
	enableAnnotations: true,
	streaming: false
}, myWebViewerContainer);
