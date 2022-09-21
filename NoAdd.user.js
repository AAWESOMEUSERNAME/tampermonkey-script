// ==UserScript==
// @name         Fuck off Ads
// @namespace    http://tampermonkey.net/
// @version      0.11
// @description  try to take over the world!
// @author       You
// @require      https://code.jquery.com/jquery-3.6.1.min.js
// @match        https://musicbee.fandom.com/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==
/* global $, jQuery */
(function() {
    'use strict';

    function removeAdsFromMusicBeeWiki(){
        var container = $('.top-ads-container')
        console.log('container',container)
        container.remove()
    }
    removeAdsFromMusicBeeWiki()
    // Your code here...
})();