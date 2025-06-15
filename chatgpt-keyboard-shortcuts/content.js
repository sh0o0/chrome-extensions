function clickElement(selector) {
  const element = document.querySelector(selector);

  if (element) {
    element.click();
  }
}

function clickLastElement(selector) {
  const elements = document.querySelectorAll(selector);
  console.log(elements);
  if (elements.length === 0) return;

  const lastElement = elements[elements.length - 1];
  lastElement.click();
}

function copyTextToClipboard(text) {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  document.querySelector("textarea").focus();
}

const keyAndModels = {
  0: "o3",
  9: "o4-mini",
  8: "gpt-4o",
  7: "o4-mini-high",
};

window.addEventListener("keydown", (e) => {
  // 生成停止（送信ボタンをクリック）
  if (e.metaKey && e.key === "Escape") {
    clickElement("#composer-submit-button");
    e.preventDefault();
    return;
  }

  if (e.shiftKey && e.metaKey && keyAndModels.hasOwnProperty(e.key)) {
    location.search = `?model=${keyAndModels[e.key]}`;
    e.preventDefault();
    return;
  }
});
