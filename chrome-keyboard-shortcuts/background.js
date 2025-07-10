chrome.commands.onCommand.addListener((command) => {
  if (command === "copy-page-link") {
    copyPageLink();
  }
});

chrome.action.onClicked.addListener(() => {
  copyAllTabUrls();
});

function copyPageLink() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "copyPageLink" });
    }
  });
}

function copyAllTabUrls() {
  chrome.tabs.query({ currentWindow: true }, (tabs) => {
    const urls = tabs.map(tab => tab.url).join('\n');
    
    chrome.tabs.query({ active: true, currentWindow: true }, (activeTabs) => {
      if (activeTabs[0]) {
        chrome.tabs.sendMessage(activeTabs[0].id, { 
          action: "copyAllTabUrls",
          urls: urls
        });
      }
    });
  });
}
