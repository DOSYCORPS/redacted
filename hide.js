"use strict";
{
  const overlay = document.createElement("rdctdoverlay");
  overlay.style = `
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 10vh;
    background-color: black;
    font-family: monospace;
    font-size: 125pt;
    z-index: 12000000;
    display: block;
  `;
  overlay.innerHTML = `Increasing safety...`;
  document.documentElement.insertAdjacentElement('afterbegin', overlay);
}
