// ==UserScript==
// @name         Tatoeba-Extensions
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  adds button to download audio from tatoeba
// @author       pieces
// @match        https://tatoeba.org/*
// @grant        GM_download, GM_setClipboard
// ==/UserScript==

(() => {
    const regex = /vm.playAudio\('(https:\/\/audio\.tatoeba\.org\/sentences\/jpn\/\d{1,10}.mp3)'\)/;
    const sentances = document.getElementsByClassName("sentence");

    const audioElement = document.getElementsByClassName("md-icon-button audioAvailable md-button md-ink-ripple");

    [...audioElement].forEach((audio) => {
        const downloadAudioButton = document.createElement("button");
        downloadAudioButton.className = "md-icon-button audioAvailable md-button md-ink-ripple";
        downloadAudioButton.innerHTML = "<md-icon class=\"ng-scope material-icons\">cloud_download</md-icon>";

        const downloadName = new URLSearchParams(window.location.search).get("query");
        const urlMaybe = audio.getAttribute("ng-click").match(/vm.playAudio\('(https:\/\/audio\.tatoeba\.org\/sentences\/jpn\/\d{1,10}.mp3)'\)/) || [];

        if (urlMaybe.length < 2) return;

        downloadAudioButton.onclick = () => {
            GM_setClipboard("", "text");
            //GM_download(urlMaybe[1], downloadName);
        }

        audio.parentNode.insertBefore(downloadAudioButton, audio.nextSibling);
    });
})();
