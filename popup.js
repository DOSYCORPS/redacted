"use strict";
{
  const form = document.querySelector('form');
  document.onload = load;
  load();
  function load() {
    chrome.storage.sync.get('redacted', ({redacted}) => {
      form.querySelector('textarea').value = redacted.join('\n');
    });
  };
  form.onsubmit = e => {
    e.preventDefault();
    const redacted = form.querySelector('textarea').value.split(/\s+/g).map( line => line.trim() ).filter( line => line.length > 0 );
    chrome.storage.sync.set({redacted});
  };
}
