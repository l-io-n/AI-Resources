//Credit to FaraB for her script to strip out prepositions and other words for tokenization https://play.aidungeon.io/main/scenarioView?publicId=f3ad0650-7631-11eb-8d62-65072eba9468


//
// JSON FILE IMPORT/EXPORT & USER INPUT TRACKING
//

var textareaContent; // Tracking var for content of the text area
var filename = "worldInfo"; // Name of the file the user uploaded
// Import the world info JSON file
document.getElementById('selectFile').onchange = function() {
	var files = document.getElementById('selectFile').files; // The browse for file button
	if (files.length <= 0) {
		return false;
	}
	// Log the filename for later
	filename = this.value.replace(/.*[\/\\]|\.(json)$/g, ''); // Strip out filepath and extension
	formatName = "edit"; // Reset any logged formats in use
	
	// Print the value of the world info JSON file to the text area with id="result"
	var fr = new FileReader();
	fr.onload = function(e) {
		var result = JSON.parse(e.target.result);
		var formatted = JSON.stringify(result, null, 2);
		document.getElementById('result').value = formatted;
		textareaContent = formatted;
	}
	
	fr.readAsText(files.item(0));
};

// Export the contents of the textarea as a JSON file
document.getElementById('saveButton').onclick = function() {
	var jsonStr = JSON.stringify(textareaContent); //Get the file contents
	let link = document.createElement('a'); // Create a temporary link html element
	// Save the file contents as a DataURI
	link.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonStr));
	link.setAttribute('download', filename + '_' + formatName + '.json');
	// Hide the link so it does not display on the page
	link.style.display = 'none';
	document.body.appendChild(link);
	// Activate the link
	link.click();
	// Remove the temporary link
	document.body.removeChild(link);
};

// Update the tracking var for the content of the text area whenever the text area is modified by the user (typed in)
window.onload = () => {
	const textarea = document.getElementById('result')
	textarea.oninput = function() {
		textareaContent = this.value;
	}
}


//
// WORLD INFO FORMATTING
//

var taj; // Text area content as parsed JSON
var sfyCount; // Counter for current item in JSON stringification
var formatName = "edit"; // String appended to filename to help user distinguish how a saved file was formatted
document.getElementById('formatButton').onclick = function() {
	var formatted = textareaContent;
	var format = undefined;
	taj = JSON.parse(textareaContent); // Read the text area content as JSON
	sfyCount = -1; // Reset counter
	// Format the text area content based on the user selected format
	switch(document.getElementById('formatList').value) {
		case 'reduceTokens':
			format = ReduceTokens;
			formatName = "reduced-tokens";
			break;
		case 'futureman':
			format = MakeFutureman;
			formatName = "futureman";
			break;
		default:
			//
	}
	if (format != undefined) {
		formatted = JSON.stringify(taj, format, 2);
	}
	
	// Print newly formatted world info into the text area
	document.getElementById('result').value = formatted;
	textareaContent = formatted;
};

function ReduceTokens(key, value) {
	// Strip out unnecessary words from this entry (Modified from FaraB's World Info formatter script)
	if (key == "entry") {
		var formatted = value;
		const filteredWords = /\ba\b|\babout\b|\bacross\b|\bafter\b|\balong\b|\bamid\b|\bamong\b|\baround\b|\bas\b|\bat\b|\bbut\b|\bby\b|\bcirca\b|\bfor\b|\bfrom\b|\bif\b|\bin\b|\bincluding\b|\binto\b|\bless\b|\bmore\b|\blike\b|\bnear\b|\bnext\b|\bof\b|\boff\b|\bon\b|\bonto\b|\bout\b|\bover\b|\bper\b|\bplus\b|\bminus\b|\bre\b|\bregarding\b|\brespecting\b|\bsans\b|\bsave\b|\bsince\b|\bthan\b|\bthen\b|\bthence\b|\bthere\b|\bthereby\b|\btherein\b|\bthereof\b|\bthereto\b|\bthrough\b|\bthroughout\b|\bto\b|\btoward\b|\btowards\b|\bunlike\b|\buntil\b|\bunto\b|\bupon\b|\bwith\b|\bwithin\b|\bwhen\b|\bwhence\b|\bwhere\b|\bwherein\b|\bhence\b|\bhereby\b|\bthe\b|\band\b|\bi\b|\bme\b|\bmy\b|\bmyself\b|\bwe\b|\bour\b|\bours\b|\bourselves\b|\bit\b|\bits\b|\bitself\b|\bthey\b|\bthem\b|\btheir\b|\btheirs\b|\bthemselves\b|\byou\b|\byour\b|\byours\b|\byourself\b|\byourselves\b|\bwhat\b|\bwhich\b|\bwho\b|\bwhom\b|\bthis\b|\bthat\b|\bthese\b|\bthose\b|\bam\b|\bis\b|\bare\b|\bwas\b|\bwere\b|\bbe\b|\bbeen\b|\bbeing\b|\bhave\b|\bhas\b|\bhad\b|\bhaving\b|\bdo\b|\bdoes\b|\bdid\b|\bdoing\b|\ba\b|\ban\b|\bthe\b|\band\b|\bbut\b|\bif\b|\bor\b|\bbecause\b|\bas\b|\buntil\b|\bwhile\b|\bof\b|\bat\b|\bby\b|\bfor\b|\bwith\b|\babout\b|\bagainst\b|\bbetween\b|\binto\b|\bthrough\b|\bduring\b|\bbefore\b|\bafter\b|\babove\b|\bbelow\b|\bto\b|\bfrom\b|\bup\b|\bdown\b|\bin\b|\bout\b|\bon\b|\boff\b|\bover\b|\bunder\b|\bagain\b|\bfurther\b|\bthen\b|\bonce\b|\bhere\b|\bthere\b|\bwhen\b|\bwhere\b|\bwhy\b|\bhow\b|\ball\b|\bany\b|\bboth\b|\beach\b|\bfew\b|\bmore\b|\bmost\b|\bother\b|\bsome\b|\bsuch\b|\bno\b|\bnor\b|\bnot\b|\bonly\b|\bown\b|\bsame\b|\bso\b|\bthan\b|\btoo\b|\bvery\b|\bs\b|\bt\b|\bcan\b|\bwill\b|\bjust\b|\bdon\b|\bshould\b|\bnow\b|\bwhatever\b|\bmaybe\b|\busually\b|\bfairly\b|\bperhaps\b/ig;
		// Gender words
		//const maleWords = /\bhe\b|\bhim\b|\bhis\b|\bhimself\b/ig;
		//const femaleWords = /\bshe\b|\bher\b|\bhers\b|\bherself\b/ig;
		
		// Start filtering
		formatted = formatted.replace(filteredWords, ""); // Filter useless words
		formatted = formatted.replace(/\?|!| \./g, "."); // Remove any odd spaces before periods and replace other unconevntional sentence enders with a period
		formatted = formatted.replace(/ +/g, " "); // Remove any extra spacing
		value = formatted;
	}
	return value;
}

function MakeFutureman(key, value) {
	var formatted = ReduceTokens(key, value); // Remove unless words to shorten tokens
	// Apply the Futureman format to this entry
	if (key == "entry") {
		sfyCount++; // Increase entry counter
		var eKeys = taj[sfyCount].keys.split(/ *, *| *\| */g); // Get an array of this entry's keys
		var keyName = eKeys[0]; // We'll refer to this entity by its first key
		// Remove any keys already mentioned in the entry
		eKeys.forEach(function(value) { 
			var regex = new RegExp(value, "igm");
			formatted = formatted.replace(regex, "");
		});
		// Start formatting
		formatted = formatted.replace(/[\[\]\{\}]/gm, ""); // Strip any existing formatting
		formatted = formatted.replace(/ *>* *\n| *\. *\n| *\. */gm, ">>>>\n"); // Replace sentence ends with new lines and formatting
		formatted = formatted.replace(/\W*$/g, ">>"); // Remove anything after the last word on the last line and cap it with >>>>
		formatted = formatted.replace(/^<*|^/gm, "<< " + keyName + " "); // Insert the first key in front of each line of the entry
		formatted = formatted.replace(/ +/g, " "); // Remove any extra spacing
	}
	return formatted;
}