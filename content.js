document.addEventListener("selectionchange", () => {
  const selectedText = window.getSelection().toString();
  const textLength = selectedText.length;

  chrome.runtime.sendMessage({ type: "updateTextLength", length: textLength });
});