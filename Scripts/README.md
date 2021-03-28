## Scripts
**AI Dungeon Adventure Text CSS Replacer** <br />
Tampermonkey/Greasemonkey script that allows you to change the AI Dungeon text to any css formatting you'd like. That means fancy fonts, colors, drop-shadow, whatever you want! <br />
> *How to Install*
1. Install the Tampermonkey extension on Chrome or Firefox.
2. Click on AIDungeonAdventureTextCSSReplacer.js in the file list.
3. Click 'Raw' on the top right. <br />
(Alternatively, just click this: https://github.com/l-io-n/AIDungeon-Resources/raw/main/Scripts/AIDungeonAdventureTextCSSReplacer.user.js)
4. Tampermonkey will prompt you to install the script. Click 'install'.
5. Go into the Tampermonkey extension and click the > arrow to the right of the script you just installed. Click edit. A new window should pop up with the script.
6. Look for the `GM_addStyle (`, then look for the line that reads `/*Place whatever text formatting you want here. Just make sure to keep the !important*/`.
7. Under that line, paste whatever CSS you'd like to be applied to your AI Dungeon adventure text. The default uses Georgia Pro and some drop-shadow.
8. Right before the `;` of each line of css, make sure you add `!important`, for example `color: red !important;`
9. Once you've added your CSS, hit File and Save. You can then close that page.
10. Reload AI Dungeon. Now you have your CSS applied.
 <br />
 <br />
