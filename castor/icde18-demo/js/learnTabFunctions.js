$( document ).ready(function() {
	loadUWCSEDataset();
});

var learnButtonElement = document.getElementById('automodeLearnButton');
learnButtonElement.onclick = learn;

var clearButtonElement = document.getElementById('automodeClearButton');
clearButtonElement.onclick = clear;

var opts = {
  lines: 13 // The number of lines to draw
, length: 35 // The length of each line
, width: 14 // The line thickness
, radius: 42 // The radius of the inner circle
, scale: 1 // Scales overall size of the spinner
, corners: 1 // Corner roundness (0..1)
, color: '#000' // #rgb or #rrggbb or array of colors
, opacity: 0.25 // Opacity of the lines
, rotate: 0 // The rotation offset
, direction: 1 // 1: clockwise, -1: counterclockwise
, speed: 1 // Rounds per second
, trail: 60 // Afterglow percentage
, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
, zIndex: 2e9 // The z-index (defaults to 2000000000)
, className: 'spinner' // The CSS class to assign to the spinner
, top: '50%' // Top position relative to parent
, left: '50%' // Left position relative to parent
, shadow: false // Whether to render a shadow
, hwaccel: false // Whether to use hardware acceleration
, position: 'absolute' // Element positioning
}
var spinnerDiv = document.getElementById('spinnerDiv');
var spinner = new Spinner(opts);


function loadUWCSEDataset() {
	// Hide results
	$("#autmomodeResultsDiv").hide();

	// Hide hypothesis language
	$("#hypothesisLanguageDiv").hide();

	// Load modes for baseline
	//var selectMenu = document.getElementById("automodeTab-selectMenu");
	//loadModes("#automodeTabModes", "modes/"+selectMenu.value+".json");
	loadModes("#automodeTabModes", "modes/manual.json");
}

function clear() {
	$("#autmomodeResultsDiv").hide();

	//var selectMenu = document.getElementById("automodeTab-selectMenu");
    //clearSelectOptions(selectMenu);
}

function clearSelectOptions(selectMenu) {
	for(var i = selectMenu.options.length - 1 ; i >= 0 ; i--) {
		selectMenu.remove(i);
    }
}

function generateDefinitionIdAutomodeTab() {
	return "automodeTab-definition";
}

function generateClauseIdAutomodeTab(clauseNumber) {
	return generateDefinitionIdAutomodeTab()+"-clause"+clauseNumber;
}

function formatNumber(number) {
	return Math.round(number * 100) / 100
}

function selectModesChangedAutomodeTab(selectMenu) {
	path = "modes/" + selectMenu.value + ".json";
	loadModes("#automodeTabModes", path);
}

function loadModes(elementId, path) {
	$.getJSON(path, function(json) {
	    var allModes = json.headMode + "\n";

	    for (var i = 0; i < json.bodyModes.length; i++) {
	    	allModes += json.bodyModes[i] + "\n";
	    }

	    $(elementId).text(allModes);
	});
}

/*function selectClauseChangedAutomodeTab(selectMenu) {
	var value = selectMenu.value;

	// Must match id generate in generateClauseId
	var regex = /automodeTab-definition-clause(\d+)/g;
	var match = regex.exec(value);

	var clauseNumber = match[1];
	var definitionId = generateDefinitionIdAutomodeTab();

	// Parse definition to JSON
	var definitionJson = JSON.parse(localStorage.getItem(definitionId));
	$("#automodeTabDatalog").val(clauseToText(definitionJson[clauseNumber]));
}*/

function clauseToText(json) {
	var clause = json.head + " :- \n\t" + json.body + ".";;
	return clause;
}

function hypothesisLanguageCheckboxClick(cb) {
	if (cb.checked) {
		// show
		$("#hypothesisLanguageDiv").show();
	} else {
		// hide
		$("#hypothesisLanguageDiv").hide();

		// Set default modes
		$("#modesSelect").val("manual");
		path = "modes/manual.json";
		loadModes("#automodeTabModes", path);
	}
}
