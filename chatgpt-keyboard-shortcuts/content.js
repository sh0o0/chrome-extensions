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
  const el = document.createElement('textarea');
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  document.querySelector('textarea').focus();
}

window.addEventListener('keydown', (e) => {
  // 生成停止（送信ボタンをクリック）
  if (e.shiftKey && e.metaKey && (e.key === 'U' || e.key === 'u')) {
    clickElement('#composer-submit-button');
    e.preventDefault();
    return;
  }
  // 最後のメッセージを編集
  if (e.shiftKey && e.metaKey && (e.key === 'M' || e.key === 'm')) {
    clickLastElement('[aria-label="メッセージを編集する"]');
    e.preventDefault();
    return;
  }

  if (e.shiftKey && e.metaKey && e.key === '0') {
    location.search = `?model=o3`;
    e.preventDefault();
    return;
  }
  if (e.shiftKey && e.metaKey && e.key === '9') {
    location.search = `?model=o4-mini-high`;
    e.preventDefault();
    return;
  }
  if (e.shiftKey && e.metaKey && e.key === '8') {
    location.search = `?model=gpt-4o`;
    e.preventDefault();
    return;
  }
});
