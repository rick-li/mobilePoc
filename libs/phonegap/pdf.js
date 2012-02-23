/*
 * PhoneGap is available under *either* the terms of the modified BSD license *or* the
 * MIT License (2008). See http://opensource.org/licenses/alphabetical for full text.
 *
 * Copyright (c) 2005-2010, Nitobi Software Inc.
 * Copyright (c) 2011, IBM Corporation
 */

/**
 * Constructor
 */
function PdfViewer() {
};

/**
 * Starts the pdf viewer intent
 *
 * @param url Pdf url 
 */
PdfViewer.prototype.play = function(url) {
	console.log('play pdf');
    PhoneGap.exec(null, null, "PdfViewer", "viewPdf", [url]);
};

/**
 * Load PdfPlayer
 */
PhoneGap.addConstructor(function() {
    PhoneGap.addPlugin("pdfViewer", new PdfViewer());
});