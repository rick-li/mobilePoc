function Downloader() {}

Downloader.prototype.downloadFile = function(fileUrl, params, win, fail) {
	fileUrl = "./mobile/resources/mobile/phonegap/plugins/research.pdf";
	//Make params hash optional.
	if (!fail) win = params;
	PhoneGap.exec(win, fail, "Downloader", "downloadFile", [fileUrl, params]);
};

PhoneGap.addConstructor(function() {
	PhoneGap.addPlugin("downloader", new Downloader());
	PluginManager.addService("Downloader", "com.phonegap.plugins.downloader.Downloader");
});
