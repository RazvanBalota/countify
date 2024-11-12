chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "textLengthDisplay",
    title: "Selected text length: 0 characters",
    contexts: ["selection"]
  });
});

chrome.runtime.onMessage.addListener((message) => {
  if (message.type === "updateTextLength") {
    chrome.contextMenus.update("textLengthDisplay", {
      title: `Selected text length: ${message.length} characters`
    });
  }
});
