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
PdfViewer.prototype.viewPdf = function(directory, fileName) {
    PhoneGap.exec(null, null, "PdfViewer", "viewPdf", [directory, fileName]);
};

/**
 * Load PdfPlayer
 */
PhoneGap.addConstructor(function() {
    PhoneGap.addPlugin("pdfViewer", new PdfViewer());
});