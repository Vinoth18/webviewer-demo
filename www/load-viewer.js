var myWebViewerContainer = document.createElement("div");
var myWebViewer = new PDFTron.WebViewer({
    initialDoc : "webviewer/samples/files/form1.xod",
	documentType: 'xod',
	enableAnnotations: true,
	streaming: false
}, myWebViewerContainer);