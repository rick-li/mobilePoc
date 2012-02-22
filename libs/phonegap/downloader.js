<<<<<<< HEAD
function Downloader() {}

Downloader.prototype.downloadFile = function(fileUrl, params, win, fail) {
	
	//Make params hash optional.
	if (!fail) win = params;
	PhoneGap.exec(win, fail, "Downloader", "downloadFile", [fileUrl, params]);
};

PhoneGap.addConstructor(function() {
	PhoneGap.addPlugin("downloader", new Downloader());
	PluginManager.addService("Downloader", "com.phonegap.plugins.downloader.Downloader");
});
=======
function Downloader() {}

Downloader.prototype.downloadFile = function(fileUrl, params, win, fail) {
	
	//Make params hash optional.
	if (!fail) win = params;
	PhoneGap.exec(win, fail, "Downloader", "downloadFile", [fileUrl, params]);
};

PhoneGap.addConstructor(function() {
	PhoneGap.addPlugin("downloader", new Downloader());
	PluginManager.addService("Downloader", "com.phonegap.plugins.downloader.Downloader");
});
>>>>>>> b7764ef3faf1b4899c3ec58583d8e0bf86b0b3d8
