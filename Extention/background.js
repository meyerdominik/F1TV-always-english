chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  
  if (/^https:\/\/f1tv\.formula1\.com/.test(tab.url)) {
	  if (changeInfo.status == 'loading') {
		  chrome.tabs.executeScript(null, {file: './foreground.js'})
	  }
  }
})