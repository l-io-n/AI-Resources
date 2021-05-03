// ==UserScript==
// @name         AI Dungeon Adventure Text CSS Replacer
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Allows you to format the text for AI Dungeon adventures to however you'd like.
// @author       l i o n
// @match        https://play.aidungeon.io/*
// @icon         https://www.google.com/s2/favicons?domain=aidungeon.io
// @require      https://openuserjs.org/src/libs/sizzle/GM_config.js
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @grant        GM_registerMenuCommand
// @run-at       document-start
// ==/UserScript==

const cID = 'AIDTextCSSReplacer';
var simpleInterface = true; // User setting on whether to use a simple interface or edit raw CSS
var cancelAlerts = true; // Prevents alert messages on init when compiling CSS
var appliedCSS; // The CSS that will be applied to the page on user Save
var bgTextCSS = '#'+cID+' {background: #121212; color: #e0e0e0;}'; // CSS for the background color and text based on user settings
const defaultCSS = // Default CSS to be applied to the page on user Save. Does nothing by default
`/*The default text formatting so your format doesn't leak outside the adventure text*/
* {
    text-shadow: none !important;
}
/*Selects every div that is Keyboard-focusable and isn't being overwritten by a css- class (as far as I can tell).*/
*:not(div[class^="css-"]), div[data-focusable="true"] {
    /*Place whatever text formatting you want here. Just make sure to keep the !important*/
    /* For example:
    font-family: Georgia Pro !important;
    text-shadow: 2px 1px #cccccc38 !important;
    */
}`;
var defaultExampleTextCSS = '{font-size: 20px !important;}'; // Default CSS for the example preview text
const defaultFrameCSS = // Default CSS for the interface
`inset: 15vh auto auto 69vw;
height: 75vh;
width: 30vw;
border: 1px solid #121212;
margin: 0px;
max-height: 95%;
max-width: 95%;
opacity: 0.75;
overflow: auto;
padding: 0px;
position: fixed;
z-index: 9999;
display: block;`;
const defaultInterfaceCSS =
     '#'+cID+'_cb_customCSS_var, #'+cID+'_customCSS_var { display: none !important; } ' // Simple interface by default
    +'#'+cID+'_exampleText_var { text-align: center !important; } ' // Align the example text to the center of the interface
    +'#'+cID+'_refreshButton_var { text-align: right !important; } ' // Align the Reset Applied CSS button to the right by Save and Close
    + bgTextCSS // Apply the interface background and text colors based on user settings
    +'#'+cID+'_exampleText_field_label ' + defaultExampleTextCSS; // Apply any saved css to the example text

//-
// Functional stuff that actually does the work of changing the CSS on the page
//-

GM_addStyle (appliedCSS);
// Function included for Greasemonkey 4 users thanks to Brock Adams https://stackoverflow.com/questions/19385698/how-to-change-a-class-css-with-a-greasemonkey-tampermonkey-script
function GM_addStyle (cssStr) {
    var D = document;
    var newNode = D.createElement ('style');
    newNode.textContent = cssStr;

    var targ = D.getElementsByTagName ('head')[0] || D.body || D.documentElement;
    targ.appendChild (newNode);
}

//-
// Configuration Settings interface stuff
//-
GM_registerMenuCommand('Configuration Settings', () => {
    GM_config.open();
})

// Initialize Configuration Settings
GM_config.init(
{
    'id': cID, // The id used for this instance of GM_config
    'title': 'AI Dungeon Adventure Text CSS Replacer Settings', // Panel Title
    'fields': // Fields that are displayed in the configuration settings
    {
        'interfaceButton': // Swaps the interface from simple to raw CSS
        {
            'label': 'Toggle User-Friendly Interface / Raw CSS Editing', // Appears on the button
            'type': 'button', // Makes this setting a button input
            'title': 'Click this to toggle between raw CSS and a user-friendly interface.',
            'size': 100, // Control the size of the button (default is 25)
            'click': function() { // Function to call when button is clicked
                GM_config.write(); // Temporarily save any user changes
                simpleInterface = !simpleInterface;
                RefreshInterface();
            }
        },
        'sectionTitle':
        {
            'section': ['CSS Settings', 'Check the boxes next to the changes to you want made to the CSS, then hit Save to apply them!'],
            'type': 'hidden'
        },
        'cb_customCSS':
        {
            'label': 'Use Custom CSS', // Appears next to field
            'type': 'checkbox', // Makes this setting a checkbox input
            'title': 'Enter CSS here...',
            'default': false // Default value if user doesn't change it
        },
        'customCSS': // The raw CSS text area
        {
            'title': 'Enter CSS here...',
            'type': 'textarea',
            'default': defaultCSS
        },
        'cb_font-family':
        {
            'label': 'Text Font', // Appears next to field
            'type': 'checkbox', // Makes this setting a checkbox input
            'title': 'Try Read Regular for dyslexia!', // Add a tooltip (hover over text)
            'default': false // Default value if user doesn't change it
        },
        'font-family':
        {
            //'label': 'Text Font', // Appears next to field
            'type': 'text', // Makes this setting a text input
            'title': 'Try Read Regular for dyslexia!', // Add a tooltip (hover over text)
            'size': 30, // Limit length of input (default is 25)
            'default': 'Georgia Pro' // Default value if user doesn't change it
        },
        'cb_color':
        {
            'label': 'Text Color',
            'type': 'checkbox',
            'title': 'RGB and Hex values work too!',
            'default': false
        },
        'color':
        {
            //'label': 'Text Color',
            'type': 'text',
            'title': 'RGB and Hex values work too!',
            'size': 25, // Limit length of input (default is 25)
            'default': 'white' // Default value if user doesn't change it
        },
        'cb_text-shadow':
        {
            'label': 'Drop Shadow',
            'type': 'checkbox',
            'title': 'The format is Horizontal(px) Vertical(px) Blur(px) Color.',
            'default': false
        },
        'text-shadow':
        {
            //'label': 'Drop Shadow',
            'type': 'text',
            'title': 'The format is Horizontal(px) Vertical(px) Blur(px) Color.',
            'size': 50, // Limit length of input (default is 25)
            'default': '2px 1px #cccccc38' // Default value if user doesn't change it
        },
        'cb_letter-spacing':
        {
            'label': 'Letter Spacing',
            'type': 'checkbox',
            'title': 'Spaces out the l e t t e r s .',
            'default': false
        },
        'letter-spacing':
        {
            //'label': 'Letter Spacing',
            'type': 'unsigned float',
            'title': 'Spaces out the l e t t e r s .',
            'default': 0.3
        },
        'cb_line-height':
        {
            'label': 'Line Height',
            'type': 'checkbox',
            'title': 'Give each line break some breathing room or cramp them up for a creepy effect.',
            'default': false
        },
        'line-height':
        {
            //'label': 'Line Height',
            'type': 'unsigned float',
            'title': 'Give each line break some breathing room or cramp them up for a creepy effect.',
            'default': 1.3
        },
        'exampleButton':
        {
            'label': 'Preview Changes', // Appears on the button
            'section': ['', ''], // Appears above the field
            'type': 'button', // Makes this setting a button input
            'size': 100, // Control the size of the button (default is 25)
            'click': function() { // Function to call when button is clicked
                CompileCSS();
                RefreshInterface();
            }
        },
        'exampleText':
        {
            'label': 'The quick brown fox jumps over the lazy dog',
            'type': 'hidden',
            'default': defaultExampleTextCSS
        },
        'lightButton':
        {
            'section': ['Misc Settings', 'Note: Sometimes you need to refresh the page (F5) for saved changes to take effect'], // Appears above the field
            'label': 'Toggle 💡', // Appears on the button
            'type': 'button', // Makes this setting a button input
            'title': 'Makes the interface background white, grey, or black.',
            'size': 100, // Control the size of the button (default is 25)
            'default': 'black',
            'click': function() {
                GM_config.write();
                // Alter the interface background and text colors depending on user settings
                switch(GM_config.get('lightButton')) {
                    case 'black':
                        GM_config.set('lightButton', 'grey');
                        bgTextCSS = '#'+cID+' {background: #808080; color: #e0e0e0;}';
                        break;
                    case 'grey':
                        GM_config.set('lightButton', 'white');
                        bgTextCSS = '#'+cID+' {background: #e0e0e0; color: #121212;}';
                        break;
                    case 'white':
                        GM_config.set('lightButton', 'black');
                        bgTextCSS = '#'+cID+' {background: #121212; color: #e0e0e0;}';
                        break;
                }
                RefreshInterface();
            }
        },
        'debug':
        {
            'type': 'checkbox',
            'label': 'Debug: Display Compiled CSS',
            'title': 'Check this box if you want to see the CSS when it is compiled.',
            'default': false
        },
        'refreshButton':
        {
            'label': 'Reset Applied CSS', // Appears on the button
            'type': 'button', // Makes this setting a button input
            'title': 'Removes any CSS we have applied to the page, effectively reverting it back to default CSS while keeping our settings saved.',
            'size': 100, // Control the size of the button (default is 25)
            'click': function() { // Function to call when button is clicked
                GM_config.set('h_ResetAppliedCSS', true); // Resets any CSS applied to the page but keeps user settings
                GM_config.write();
                window.location.reload(false); // Refreshes the browser page so CSS can be reset
            }
        },
        'h_ResetAppliedCSS':
        {
            'type': 'hidden',
            'default': false
        }
    },
    'css': defaultInterfaceCSS,
    'events':
    {
        'init': function() {
            if (GM_config.get('h_ResetAppliedCSS') == false) { // We skip applying the CSS to the page when we want to do things like reset the applied CSS whilst saving our user settings
                cancelAlerts = true; // Prevent multiple alerts on interface reload
                CompileCSS();
                GM_addStyle (appliedCSS);
            }
        },
        'open': function() {
            // Customizes the interface's css
            GM_config.frame.setAttribute('style', defaultFrameCSS);
            // Now that the interface has loaded, allow alert messages
            cancelAlerts = false;
        },
        'save': function() {
            CompileCSS();
            GM_addStyle (appliedCSS);
            GM_config.set('h_ResetAppliedCSS', false);
            GM_config.write();
            alert('Configuration Settings saved!');
        }
    }
});

function CompileCSS() {
    //NOTE: Using GM_config.write() here may cause problems?
    GM_config.write(); // Temporarily save user settings
    var nullUserSettings = true; // Tracks if the user has actually checked any boxes
    var isCheckBoxed = false; // Tracks if a field has been checked by the user
    appliedCSS = `
* {
    text-shadow: none !important;
}
*:not(div[class^="css-"]), div[data-focusable="true"] {
`; // Formatted the way this is to capture the newline so the CSS formatting is kept readable

    var exampleTextCSS = '{ '; // Begin encapsulation of example text CSS
    for (var id in GM_config.fields) {
        // Checks if the current id is a checked checkbox
        if (id.startsWith('cb_') && GM_config.get(id)) {
            // The next id should be added to the CSS since it's checkbox is checked
            isCheckBoxed = true;
            nullUserSettings = false;
        }
        else if (isCheckBoxed) {
            // When Custom CSS is checked, don't apply any other changes to CSS
            if (id == 'customCSS') {
                appliedCSS = GM_config.get(id);
                if (GM_config.get('debug', true) && !cancelAlerts) {
                    alert(`Custom CSS Compiled:
` + appliedCSS); // This newline is intentional
                }
                return;
            }
            // Add CSS to be applied
            appliedCSS += `    ` + id + `: ` + GM_config.get(id) + ` !important;
`; // This newline is intentional

            // Add CSS to example text so we can preview our CSS to be applied
            exampleTextCSS += id + ': ' + GM_config.get(id) + ' !important; ';
            // Reset checkbox tracker
            isCheckBoxed = false;
        }
    }
    // Complete the CSS encapsulation
    appliedCSS += `}`;
    exampleTextCSS += 'font-size: 20px !important;}';
    GM_config.set('exampleText', exampleTextCSS);
    if (nullUserSettings) {
        appliedCSS = ``; // Reset the CSS being applied
        GM_config.set('exampleText', defaultExampleTextCSS); // Reset example text CSS
        if (GM_config.get('debug', true) && !cancelAlerts) {
            alert('No selections were made, so no CSS was compiled.');
        }
        return;
    }
    if (GM_config.get('debug', true) && !cancelAlerts) {
        alert(`CSS Compiled:` + appliedCSS);
    }
}

// Swaps from a more simple user-friendly interface to one that actively lets you mess with the CSS
function RefreshInterface() {
    var i;
    var alignRightRefresh = '#'+cID+'_refreshButton_var { text-align: right !important; } ';
    // Toggle hiding/showing elements based on what kind of interface the user has selected
    if (simpleInterface) {
        i = '#'+cID+'_cb_customCSS_var, #'+cID+'_customCSS_var { display: none !important; } '
        + '#'+cID+'_cb_font-family_var, '
        + '#'+cID+'_font-family_var, '
        + '#'+cID+'_cb_color_var, '
        + '#'+cID+'_color_var, '
        + '#'+cID+'_cb_text-shadow_var, '
        + '#'+cID+'_text-shadow_var, '
        + '#'+cID+'_cb_letter-spacing_var, '
        + '#'+cID+'_letter-spacing_var, '
        + '#'+cID+'_cb_line-height_var, '
        + '#'+cID+'_line-height_var '
        + '#'+cID+'_section_1 '
        + '{ display: block !important; } '
        + '#'+cID+'_exampleText_var { text-align: center !important; } '
        + '#'+cID+'_exampleText_field_label ' + GM_config.get('exampleText'); // Only show Example Text elements on the simple interface
    }
    else {
        i = '#'+cID+'_cb_customCSS_var, #'+cID+'_customCSS_var { display: block !important; } '
        + '#'+cID+'_cb_font-family_var, '
        + '#'+cID+'_font-family_var, '
        + '#'+cID+'_cb_color_var, '
        + '#'+cID+'_color_var, '
        + '#'+cID+'_cb_text-shadow_var, '
        + '#'+cID+'_text-shadow_var, '
        + '#'+cID+'_cb_letter-spacing_var, '
        + '#'+cID+'_letter-spacing_var, '
        + '#'+cID+'_cb_line-height_var, '
        + '#'+cID+'_line-height_var, '
        + '#'+cID+'_section_1 '
        + '{ display: none !important; } ';
    }
    // Apply CSS changes to hide/show parts of the interface
    GM_config.init({ 'id': cID, 'css': i + alignRightRefresh + bgTextCSS});
    // Refresh the config panel for the interface change
    GM_config.close();
    GM_config.open();
}

