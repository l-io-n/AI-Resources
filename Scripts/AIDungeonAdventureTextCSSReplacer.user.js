// ==UserScript==
// @name         AI Dungeon Adventure Text CSS Replacer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Allows you to format the text for AI Dungeon adventures to however you'd like.
// @author       l i o n
// @match        https://play.aidungeon.io/*
// @icon         https://www.google.com/s2/favicons?domain=aidungeon.io
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle ( `
    /*The default text formatting so your format doesn't leak outside the adventure text*/
    * {
        text-shadow: none !important;
    }
    /*Selects every div that is Keyboard-focusable and isn't being overwritten by a css- class (as far as I can tell).*/
    *:not(div[class^="css-"]), div[data-focusable="true"] {
        /*Place whatever text formatting you want here. Just make sure to keep the !important*/
        font-family: Georgia Pro !important;
        text-shadow: 2px 1px #cccccc38 !important;
    }
` );

// Function included for Greasemonkey 4 users thanks to Brock Adams https://stackoverflow.com/questions/19385698/how-to-change-a-class-css-with-a-greasemonkey-tampermonkey-script
function GM_addStyle (cssStr) {
    var D = document;
    var newNode = D.createElement ('style');
    newNode.textContent = cssStr;

    var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (newNode);
}
