// ==UserScript==
// @name         ColabAlive
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically reconnects Google Colab when disconnected
// @author       You
// @match        colab.research.google.com/*/*/*
// @icon         https://www.google.com/s2/favicons?domain=stackoverflow.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //From https://stackoverflow.com/questions/57113226/how-to-prevent-google-colab-from-disconnecting?answertab=active#tab-top
// 1
function clickConnect() {
    try {
        document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
        // this also works, if above one doesn't work, comment it and uncomment below one
        //document.querySelector("colab-connect-button").shadowRoot.getElementById('connect').click();
        setTimeout(clickDismiss, 500);
        console.log("Keeping Colab Alive!");
    } catch (error) {
        console.log(error);
    }
}

//2
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//3
async function clickDismiss() {

    try {

        // click manage session button
        document.querySelector("colab-usage-display").shadowRoot.querySelector("paper-button").click();

    } catch (error) {
        console.log(error);
    }

    try {
        // leave from manage session window
        await sleep(1000);
        document.querySelector('colab-sessions-dialog').shadowRoot.querySelector('.dismiss').click();
    } catch (error) {
        console.log(error);
    }

    try {
        // click close button
        await sleep(1000);
        document.querySelector("paper-tab").querySelector("paper-icon-button").shadowRoot.getElementById('icon').click();
    } catch (error) {
        console.log(error);
    }

}
//4
setInterval(clickConnect, 60000);


})();