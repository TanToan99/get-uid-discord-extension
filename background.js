let message = "";

chrome.webRequest.onBeforeRequest.addListener(
    function(details)
    {
        let url = details.url;
        let tag = url.match(/(\d+)/);
        message += tag[0]+"\n";
    },
    {urls: [
		"*://*.discordapp.com/avatars/*"
	]},
    ['extraHeaders']
);

const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement('a');
    const file = new Blob([content], {type: contentType});
    
    a.href= URL.createObjectURL(file);
    a.download = filename;
    a.click();
  
      URL.revokeObjectURL(a.href);
  };

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
    var d = new Date();
    var n = d.getTime();
    downloadToFile(message, n+'.txt', 'text/plain');
    message = "";
});	