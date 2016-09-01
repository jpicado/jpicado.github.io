
const POSITIVE_EXAMPLES_CLASS = "posExamples";
const NEGATIVE_EXAMPLES_CLASS = "negExamples";

const DEFAULT_TESTING_PERCENTAGE = 0.2;


$( document ).ready(function() {
	$("#learnResultsDiv").hide();

	// Load examples from file
	// Examples must match examples in the database
	// Ideally, it would query the REST service to get the examples
	$.ajax({
		url : "data/hiv-small/hiv_active_pos.csv",
		dataType: "text",
		success : function (data) {
			$("#learnTabPositiveTrainingExamples").text(data);

			// Add examples to list
			var container = $("#positiveExamplesList");
			createCheckboxList(container, data, POSITIVE_EXAMPLES_CLASS);

			// Check default examples
			checkDefaultExamplesAux(POSITIVE_EXAMPLES_CLASS);
			updateExamplesCountAux(POSITIVE_EXAMPLES_CLASS, "#numberTrainingPositiveExamples", "#numberTestingPositiveExamples");
			$('#defaultCheckbox').prop('checked', true);
       	}
	});

	// Load examples from file
	// Examples must match examples in the database
	// Ideally, it would query the REST service to get the examples
	$.ajax({
		url : "data/hiv-small/hiv_active_neg.csv",
		dataType: "text",
		success : function (data) {
			$("#learnTabNegativeTrainingExamples").text(data);

			// Add examples to list
			var container = $("#negativeExamplesList");
			createCheckboxList(container, data, NEGATIVE_EXAMPLES_CLASS);

			// Check default examples
			checkDefaultExamplesAux(NEGATIVE_EXAMPLES_CLASS);
			updateExamplesCountAux(NEGATIVE_EXAMPLES_CLASS, "#numberTrainingNegativeExamples", "#numberTestingNegativeExamples");
			$('#defaultCheckbox').prop('checked', true);
       	}
	});
});

const SERVER_ADDRESS = "http://localhost:8080/CastorService/";

var learnButtonElement = document.getElementById('learnButton');
learnButtonElement.onclick = learn;

var learnButtonElement = document.getElementById('clearButton');
learnButtonElement.onclick = clear;

var defaultCheckboxElement = document.getElementById('defaultCheckbox');
defaultCheckboxElement.onchange = checkDefaultExamples;

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

function learn() {
	// Check that at least one positive and one negative training example is selected
	if(checkOneExampleSelected(POSITIVE_EXAMPLES_CLASS) == false || checkOneExampleSelected(NEGATIVE_EXAMPLES_CLASS) == false) {
		alert("Select at least 1 positive/negative example for training and 1 positive/negative example for testing.");
		return;
	}

	// Clean current results
	clear();

	// Show spinner
	spinner.spin(spinnerDiv);

	// Get examples encodings (indicates which examples to use for training and testing)
	var posExamplesEncoding = getOneHotEncodingFromClass(POSITIVE_EXAMPLES_CLASS);
	var negExamplesEncoding = getOneHotEncodingFromClass(NEGATIVE_EXAMPLES_CLASS);

	var dataset = localStorage.getItem("dataset");
	var url = SERVER_ADDRESS+"learn/params/"+dataset+"?pos="+posExamplesEncoding+"&neg="+negExamplesEncoding;
	console.log(url);

	// Call REST service
	$.getJSON(url, { 
	}).done(function(data) {
		spinner.stop();

		//$('.greeting-id').append(data.value);
		//alert(JSON.stringify(data));

		$("#learnResultsDiv").show();

		/*// Show datalog
		var definition = definitionToStringHIV(data.definition);
		$("#datalog-learnTab").html(definition);

		alert(data.definition.length);
		alert(JSON.stringify(data.definition));

		// Show graphical
		createGraphicalViewForDefinitionHIV(data.definition,"graphical-learnTab",1);

		for (var i = 0; i < data.definition.length; i++) {
	    	alert(JSON.stringify(data.definition[i]));
	    }*/

		// Store definition locally
	    var definitionId = generateDefinitionIdLearnTab();
	    localStorage.setItem(definitionId, JSON.stringify(data.definition));

	    // Create an option for each clause in select menu
		var selectMenu = "#learnTab-selectMenu";
	    for (var i = 0; i < data.definition.length; i++) {
	    	var optionId = generateClauseIdLearnTab(i);
	    	$('<option>').val(optionId).text(i+1).appendTo(selectMenu);
	    }

	    // Set the number of clauses in definition
	    $( "#learnTab-numberOfClauses" ).html(data.definition.length);

	    // Show graphical view of first clause
	    //createGraphicalViewForDefinitionHIV(definition, graphicalViewId, schemaNumber);
	    if(data.definition.length > 0) {
	    	createGraphicalViewForClauseHIV(data.definition[0], "graphical-learnTab", 1, 0);
	    }

		// Show effectiveness
		$("#learnEffectiveness-precision").html(formatNumber(data.precision));
		$("#learnEffectiveness-recall").html(formatNumber(data.recall));
		//$("#learnEffectiveness-f1").html(formatNumber(data.f1));
		$("#learnEffectiveness-time").html(formatNumber(data.time));

	}).fail(function() {
		alert("An error occurred.");
		spinner.stop();
	});
}

function selectMenuChangedLearnTab(selectMenu) {
	var value = selectMenu.value;

	// Must match id generate in generateClauseId
	var regex = /learnTab-definition-clause(\d+)/g;
	var match = regex.exec(value);

	var clauseNumber = match[1];
	var definitionId = generateDefinitionIdLearnTab();

	// Parse definition to JSON
	var definitionJson = JSON.parse(localStorage.getItem(definitionId));
	var clause = definitionJson[clauseNumber];

	var divId = "graphical-learnTab";
	createGraphicalViewForClauseHIV(clause, divId, 1, clauseNumber);
}

function generateDefinitionIdLearnTab() {
	return "learnTab-definition";
}

function generateClauseIdLearnTab(clauseNumber) {
	return generateDefinitionIdLearnTab()+"-clause"+clauseNumber;
}

function clear() {
	$("#learnResultsDiv").hide();

	var selectMenu = document.getElementById("learnTab-selectMenu");
    clearSelectOptions(selectMenu);
}

function createCheckboxList(container, data, className) {
	var lines = data.split('\n');
    for(var line = 0; line < lines.length; line++){
    	if (lines[line] == "")
    		continue;
		var compound = lines[line];
		container.append('<li class="list-group-item"><input type="checkbox" class="'+className+'" id="'+compound+'">'+compound+'</li>')
    }
    $("."+className).change(function() {
		// Update count
    	updateExamplesCount();
    	// Set default checkbox to false
    	$("#defaultCheckbox").prop('checked', false);
	});
}

function getOneHotEncodingFromClass(className) {
	var encoding = "";
	$("."+className).each(function() {
		// console.log(this.checked);
		// console.log(this.id);
		if (this.checked)
			encoding = "1"+encoding;
		else
			encoding = "0"+encoding;
	});
	return encoding;
}

function checkDefaultExamples() {
	var checkedValue = $('#defaultCheckbox').prop('checked')

	if (checkedValue) {
		checkDefaultExamplesAux(POSITIVE_EXAMPLES_CLASS);
		checkDefaultExamplesAux(NEGATIVE_EXAMPLES_CLASS);
		updateExamplesCount();
	}
}

function checkDefaultExamplesAux(className) {
	// Get number of examples
	var examplesCount = $("."+className).length;
	
	// Get number of training examples
	var examplesChecked = examplesCount * (1-DEFAULT_TESTING_PERCENTAGE);

	// Set training and testing examples
	var counter = 0;
	$("."+className).each(function() {
		if (counter < examplesChecked) {
			$(this).prop('checked', true);
		} else {
			$(this).prop('checked', false);
		}
		counter++;
	});
}

function updateExamplesCount() {
	updateExamplesCountAux(POSITIVE_EXAMPLES_CLASS, "#numberTrainingPositiveExamples", "#numberTestingPositiveExamples");
	updateExamplesCountAux(NEGATIVE_EXAMPLES_CLASS, "#numberTrainingNegativeExamples", "#numberTestingNegativeExamples");
}

function updateExamplesCountAux(className, trainingId, testingId) {
	var examplesCount = $("."+className).length;
	
	// Count checked
	var training = 0;
	$("."+className).each(function() {
		if (this.checked)
			training++;
	});

	$(trainingId).html(training);
	$(testingId).html(examplesCount-training);
}

function checkOneExampleSelected(className) {
	var satisifiesTraining = false;
	var satisifiesTesting = false;
	$("."+className).each(function() {
		if (this.checked) {
			satisifiesTraining = true;
		} else {
			satisifiesTesting = true;
		}
		if (satisifiesTraining && satisifiesTesting) {
			return true;
		}
	});
	return satisifiesTraining && satisifiesTesting;
}

