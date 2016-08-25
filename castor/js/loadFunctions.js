
$( document ).ready(function() {
	loadHIVDataset();
});

function loadUWCSEDataset() {
	localStorage.setItem("dataset", "uwcse");
}

function loadHIVDataset() {
	localStorage.setItem("dataset", "hiv");

	// COMPARE TAB

	// Algorithm 1 - Schema 1
	$.getJSON('data/hiv-2k4k/foil-cl15-fold1-schema1.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm1",json.algorithm,"#stats-schemaTitle-algorithm1-schema1",json.schema,"#stats-precision-algorithm1-schema1",json.precision,"#stats-recall-algorithm1-schema1",json.recall,"#stats-f1-algorithm1-schema1",json.f1,"#stats-time-algorithm1-schema1",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm1",json.algorithm,"#datalog-algorithm1-schema1-title",json.schema,"#datalog-algorithm1-schema1",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm1",json.algorithm,"#graphical-algorithm1-schema1-title",json.schema,"graphical-algorithm1-schema1",json.definition,1);
	});
	// Algorithm 1 - Schema 2
	$.getJSON('data/hiv-2k4k/foil-cl15-fold1-schema2.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm1",json.algorithm,"#stats-schemaTitle-algorithm1-schema2",json.schema,"#stats-precision-algorithm1-schema2",json.precision,"#stats-recall-algorithm1-schema2",json.recall,"#stats-f1-algorithm1-schema2",json.f1,"#stats-time-algorithm1-schema2",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm1",json.algorithm,"#datalog-algorithm1-schema2-title",json.schema,"#datalog-algorithm1-schema2",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm1",json.algorithm,"#graphical-algorithm1-schema2-title",json.schema,"graphical-algorithm1-schema2",json.definition,2);
	});
	// Algorithm 2 - Schema 1
	$.getJSON('data/hiv-2k4k/progol-cl15-fold1-schema1.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm2",json.algorithm,"#stats-schemaTitle-algorithm2-schema1",json.schema,"#stats-precision-algorithm2-schema1",json.precision,"#stats-recall-algorithm2-schema1",json.recall,"#stats-f1-algorithm2-schema1",json.f1,"#stats-time-algorithm2-schema1",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm2",json.algorithm,"#datalog-algorithm2-schema1-title",json.schema,"#datalog-algorithm2-schema1",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm2",json.algorithm,"#graphical-algorithm2-schema1-title",json.schema,"graphical-algorithm2-schema1",json.definition,1);
	});
	// Algorithm 2 - Schema 2
	$.getJSON('data/hiv-2k4k/progol-cl15-fold1-schema2.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm2",json.algorithm,"#stats-schemaTitle-algorithm2-schema2",json.schema,"#stats-precision-algorithm2-schema2",json.precision,"#stats-recall-algorithm2-schema2",json.recall,"#stats-f1-algorithm2-schema2",json.f1,"#stats-time-algorithm2-schema2",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm2",json.algorithm,"#datalog-algorithm2-schema2-title",json.schema,"#datalog-algorithm2-schema2",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm2",json.algorithm,"#graphical-algorithm2-schema2-title",json.schema,"graphical-algorithm2-schema2",json.definition,2);
	});
	// Algorithm 3 - Schema 1
	$.getJSON('data/hiv-2k4k/castor-fold1-schema1.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm3",json.algorithm,"#stats-schemaTitle-algorithm3-schema1",json.schema,"#stats-precision-algorithm3-schema1",json.precision,"#stats-recall-algorithm3-schema1",json.recall,"#stats-f1-algorithm3-schema1",json.f1,"#stats-time-algorithm3-schema1",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm3",json.algorithm,"#datalog-algorithm3-schema1-title",json.schema,"#datalog-algorithm3-schema1",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm3",json.algorithm,"#graphical-algorithm3-schema1-title",json.schema,"graphical-algorithm3-schema1",json.definition,1);
	});
	// Algorithm 3 - Schema 2
	$.getJSON('data/hiv-2k4k/castor-fold1-schema2.json', function(json) {
		populateStatsForAlgorithmOnSchema("#stats-algorithm3",json.algorithm,"#stats-schemaTitle-algorithm3-schema2",json.schema,"#stats-precision-algorithm3-schema2",json.precision,"#stats-recall-algorithm3-schema2",json.recall,"#stats-f1-algorithm3-schema2",json.f1,"#stats-time-algorithm3-schema2",json.time);
		populateDatalogForAlgorithmOnSchema("#datalog-algorithm3",json.algorithm,"#datalog-algorithm3-schema2-title",json.schema,"#datalog-algorithm3-schema2",json.definition);
		populateGraphicalForAlgorithmOnSchema("#graphical-algorithm3",json.algorithm,"#graphical-algorithm3-schema2-title",json.schema,"graphical-algorithm3-schema2",json.definition,2);
	});
}

function loadIMDbDataset() {
	alert('IMDb dataset not available yet.');
}
