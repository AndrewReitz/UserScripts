// ==UserScript==
// @name         jisho-audio-downloader
// @namespace    http://andrew.cash/
// @version      0.1
// @description  Adds a link under play audio on jisho.org to download the audio
// @author       andrewreitz
// @match        https://jisho.org/*
// @grant        GM_download
// ==/UserScript==

(() => {
    const playAudioButtons = document.getElementsByClassName('concept_audio');
    const audioContainers = document.getElementsByTagName("audio");

    [...playAudioButtons].forEach((item, index) => {
        const audioContainer = audioContainers[index];

        const downloadAudioButton = document.createElement('a');
        downloadAudioButton.innerText = "Download Audio";
        downloadAudioButton.className = "concept_light-status_link";

        downloadAudioButton.onclick = () => GM_download(audioContainer.firstElementChild.src, audioContainer.id + ".mp3");

        item.parentNode.insertBefore(downloadAudioButton, item.nextSibling);
    });
})();
