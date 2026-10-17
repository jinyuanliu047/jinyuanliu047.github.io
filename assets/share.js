(function () {
  'use strict';
  const dialog = document.getElementById('website-share');
  if (!dialog || typeof dialog.showModal !== 'function') return;
  const url = 'https://www.jinyuanliu.org/';
  const status = dialog.querySelector('.share-status');
  let opener;
  document.querySelectorAll('[data-share-open]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      opener = link;
      status.textContent = '';
      dialog.showModal();
    });
  });
  dialog.querySelector('[data-share-close]').addEventListener('click', function () {
    dialog.close();
  });
  dialog.addEventListener('click', function (event) {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener('close', function () {
    if (opener) opener.focus();
  });
  dialog.querySelector('[data-copy-link]').addEventListener('click', async function () {
    try {
      await navigator.clipboard.writeText(url);
      status.textContent = 'Link copied.';
    } catch (_) {
      status.textContent = 'Please copy the website address above.';
    }
  });
})();
