// ==UserScript==
// @name         F2C C4C Helper
// @namespace    http://manuelseeger.de
// @version      0.1
// @description  Show A/UAT/PAV on C4C
// @author       Manuel Seeger
// @match        https://*.crm.ondemand.com/*
// @icon         https://www.google.com/s2/favicons?domain=ondemand.com
// @grant        none
// @require      https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    const main = (elems) => {
        if (location.hostname.toString().includes('my343942')) {
            elems[0].style.backgroundColor = 'aqua';
        } else if (location.hostname.toString().includes('my350201')) {
            elems[0].style.backgroundColor = 'red';
        }
    }
    waitForKeyElements('#mainShell-header', main);
})();