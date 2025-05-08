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
  // 新しいチャット
  if (e.ctrlKey && e.shiftKey && (e.key === 'N' || e.key === 'n')) {
    window.location.pathname = '/';
    e.preventDefault();
    return;
  }
  // 生成停止（送信ボタンをクリック）
  if (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.key === 's')) {
    clickElement('#composer-submit-button');
    e.preventDefault();
    return;
  }
  // 最後のメッセージを編集
  if (e.ctrlKey && e.shiftKey && (e.key === 'E' || e.key === 'e')) {
    clickLastElement('[aria-label="メッセージを編集する"]');
    e.preventDefault();
    return;
  }

  if (e.ctrlKey && e.shiftKey && e.key === '0') {
    location.search = `?model=o3`;
    e.preventDefault();
    return;
  }
  if (e.ctrlKey && e.shiftKey && e.key === '9') {
    location.search = `?model=o4-mini-high`;
    e.preventDefault();
    return;
  }
  if (e.ctrlKey && e.shiftKey && e.key === '8') {
    location.search = `?model=gpt-4o`;
    e.preventDefault();
    return;
  }
});
