

$( document ).ready(function() {
	$("#learnResultsDiv").hide();
	$.ajax({
		url : "data/hiv-small/hiv_active_train_pos.csv",
		dataType: "text",
		success : function (data) {
			$("#learnTabPositiveTrainingExamples").text(data);
       	}
	});
	$.ajax({
		url : "data/hiv-small/hiv_active_train_neg.csv",
		dataType: "text",
		success : function (data) {
			$("#learnTabNegativeTrainingExamples").text(data);
       	}
	});
});

const SERVER_ADDRESS = "http://localhost:8080/CastorService/";

var learnButtonElement = document.getElementById('learnButton');
learnButtonElement.onclick = learn;

var learnButtonElement = document.getElementById('clearButton');
learnButtonElement.onclick = clear;

function learn() {
	var dataset = localStorage.getItem("dataset");
	var url = SERVER_ADDRESS+"learn/"+dataset;

	$.getJSON(url, { 
	}).done(function(data) {
		//$('.greeting-id').append(data.value);
		alert(JSON.stringify(data));

		$("#learnResultsDiv").show();

		// Show datalog
		var definition = definitionToString(data.definition);
		$("#datalog-learnTab").html(definition);

		// Show graphical
		createGraphicalViewHIV(data.definition,"graphical-learnTab",1);

		// Show effectiveness
		$("#learnEffectiveness-precision").html(formatNumber(data.precision));
		$("#learnEffectiveness-recall").html(formatNumber(data.recall));
		$("#learnEffectiveness-time").html(formatNumber(data.time)+" s");

	}).fail(function() {
		alert("An error occurred.");
	});
}

function clear() {
	$("#learnResultsDiv").hide();
}
