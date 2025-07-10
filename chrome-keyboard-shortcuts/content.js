chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "copyPageLink") {
    copyPageLinkAsRichText();
  } else if (request.action === "copyAllTabUrls") {
    copyAllTabUrlsToClipboard(request.urls);
  }
});

async function copyPageLinkAsRichText() {
  try {
    const title = document.title;
    const url = window.location.href;

    // Create HTML format for rich text
    const htmlData = `<a href="${url}">${title}</a>`;

    // Create plain text fallback
    const textData = `[${title}](${url})`;

    // Use the modern Clipboard API with rich text support
    const clipboardItem = new ClipboardItem({
      "text/html": new Blob([htmlData], { type: "text/html" }),
      "text/plain": new Blob([textData], { type: "text/plain" }),
    });

    await navigator.clipboard.write([clipboardItem]);

    // Show a brief notification
    showNotification("Page link copied to clipboard!");
  } catch (error) {
    console.error("Failed to copy page link:", error);
    // Fallback to plain text if rich text fails
    try {
      const fallbackText = `${document.title} - ${window.location.href}`;
      await navigator.clipboard.writeText(fallbackText);
      showNotification("Page link copied to clipboard (plain text)");
    } catch (fallbackError) {
      console.error("Failed to copy even plain text:", fallbackError);
      showNotification("Failed to copy page link", "error");
    }
  }
}

async function copyAllTabUrlsToClipboard(urls) {
  try {
    await navigator.clipboard.writeText(urls);
    showNotification("All tab URLs copied to clipboard!");
  } catch (error) {
    console.error("Failed to copy URLs:", error);
    showNotification("Failed to copy URLs", "error");
  }
}

function showNotification(message, type = "success") {
  // Create notification element
  const notification = document.createElement("div");
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === "error" ? "#ff4444" : "#4CAF50"};
    color: white;
    padding: 12px 20px;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    z-index: 10000;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    transition: opacity 0.3s ease;
  `;

  document.body.appendChild(notification);

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 3000);
}
