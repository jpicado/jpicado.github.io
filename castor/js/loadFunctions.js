
$( document ).ready(function() {
	loadHIVDataset();

	$("#learnResultsDiv").hide();
});

function loadUWCSEDataset() {
	localStorage.setItem("dataset", "uwcse");
}

function loadHIVDataset() {
	localStorage.setItem("dataset", "hiv");

	// Algorithm 1 - Schema 1
	$.getJSON('data/hiv-large/foil-original.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm1",json.algorithm,"#stats-schemaTitle-algorithm1-schema1",json.schema,"#stats-precision-algorithm1-schema1",json.precision,"#stats-recall-algorithm1-schema1",json.recall,"#stats-time-algorithm1-schema1",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm1",json.algorithm,"#datalog-algorithm1-schema1-title",json.schema,"#datalog-algorithm1-schema1",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm1",json.algorithm,"#graphical-algorithm1-schema1-title",json.schema,"graphical-algorithm1-schema1",json.definition,1);
	});
	// Algorithm 1 - Schema 2
	$.getJSON('data/hiv-large/foil-4nf.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm1",json.algorithm,"#stats-schemaTitle-algorithm1-schema2",json.schema,"#stats-precision-algorithm1-schema2",json.precision,"#stats-recall-algorithm1-schema2",json.recall,"#stats-time-algorithm1-schema2",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm1",json.algorithm,"#datalog-algorithm1-schema2-title",json.schema,"#datalog-algorithm1-schema2",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm1",json.algorithm,"#graphical-algorithm1-schema2-title",json.schema,"graphical-algorithm1-schema2",json.definition,2);
	});
	// Algorithm 2 - Schema 1
	$.getJSON('data/hiv-large/castor-original.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm2",json.algorithm,"#stats-schemaTitle-algorithm2-schema1",json.schema,"#stats-precision-algorithm2-schema1",json.precision,"#stats-recall-algorithm2-schema1",json.recall,"#stats-time-algorithm2-schema1",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm2",json.algorithm,"#datalog-algorithm2-schema1-title",json.schema,"#datalog-algorithm2-schema1",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm2",json.algorithm,"#graphical-algorithm2-schema1-title",json.schema,"graphical-algorithm2-schema1",json.definition,1);
	});
	// Algorithm 2 - Schema 2
	$.getJSON('data/hiv-large/castor-4nf.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm2",json.algorithm,"#stats-schemaTitle-algorithm2-schema2",json.schema,"#stats-precision-algorithm2-schema2",json.precision,"#stats-recall-algorithm2-schema2",json.recall,"#stats-time-algorithm2-schema2",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm2",json.algorithm,"#datalog-algorithm2-schema2-title",json.schema,"#datalog-algorithm2-schema2",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm2",json.algorithm,"#graphical-algorithm2-schema2-title",json.schema,"graphical-algorithm2-schema2",json.definition,2);
	});
}

function loadIMDbDataset() {
	alert('IMDb dataset not available yet.');
}
