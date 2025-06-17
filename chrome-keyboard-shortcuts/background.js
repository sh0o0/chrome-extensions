chrome.commands.onCommand.addListener((command) => {
  if (command === "copy-page-link") {
    copyPageLink();
  }
});

chrome.action.onClicked.addListener((tab) => {
  copyPageLink();
});

function copyPageLink() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    if (tabs[0]) {
      chrome.tabs.sendMessage(tabs[0].id, { action: "copyPageLink" });
    }
  });
}
