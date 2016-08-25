
$( document ).ready(function() {

	// 	DATASET 1 - HIV-Large

	// Algorithm 1 - FOIL
	$.getJSON('data/hiv-large/foil-schema1.json', function(json) {
		populateStatsForAlgorithmScalability("#scalability-algorithm1-dataset1",json.algorithm,"#scalability-precision-algorithm1-dataset1",json.precision,"#scalability-recall-algorithm1-dataset1",json.recall,"#scalability-f1-algorithm1-dataset1",json.f1,"#scalability-time-algorithm1-dataset1",json.time);
	});
	// Algorithm 2 - Progol
	populateStatsForAlgorithmScalability("#scalability-algorithm2-dataset1","Progol","#scalability-precision-algorithm2-dataset1","-","#scalability-recall-algorithm2-dataset1","-","#scalability-f1-algorithm2-dataset1","-","#scalability-time-algorithm2-dataset1","&#8734");
	// Algorithm 3 - ProGolem
	populateStatsForAlgorithmScalability("#scalability-algorithm3-dataset1","ProGolem","#scalability-precision-algorithm3-dataset1","-","#scalability-recall-algorithm3-dataset1","-","#scalability-f1-algorithm3-dataset1","-","#scalability-time-algorithm3-dataset1","&#8734");
	// Algorithm 4 - Castor
	$.getJSON('data/hiv-large/castor-schema1.json', function(json) {
		populateStatsForAlgorithmScalability("#scalability-algorithm4-dataset1",json.algorithm,"#scalability-precision-algorithm4-dataset1",json.precision,"#scalability-recall-algorithm4-dataset1",json.recall,"#scalability-f1-algorithm4-dataset1",json.f1,"#scalability-time-algorithm4-dataset1",json.time);
	});

	// 	DATASET 2 - HIV-Medium (2k4k)

	// Algorithm 1 - FOIL
	$.getJSON('data/hiv-2k4k/foil-cl15-fold1-schema1.json', function(json) {
		populateStatsForAlgorithmScalability("#scalability-algorithm1-dataset2",json.algorithm,"#scalability-precision-algorithm1-dataset2",json.precision,"#scalability-recall-algorithm1-dataset2",json.recall,"#scalability-f1-algorithm1-dataset2",json.f1,"#scalability-time-algorithm1-dataset2",json.time);
	});
	// Algorithm 2 - Progol
	$.getJSON('data/hiv-2k4k/progol-cl15-fold1-schema1.json', function(json) {
		populateStatsForAlgorithmScalability("#scalability-algorithm2-dataset2",json.algorithm,"#scalability-precision-algorithm2-dataset2",json.precision,"#scalability-recall-algorithm2-dataset2",json.recall,"#scalability-f1-algorithm2-dataset2",json.f1,"#scalability-time-algorithm2-dataset2",json.time);
	});
	// Algorithm 3 - ProGolem
	populateStatsForAlgorithmScalability("#scalability-algorithm3-dataset2","ProGolem","#scalability-precision-algorithm3-dataset2","-","#scalability-recall-algorithm3-dataset2","-","#scalability-f1-algorithm3-dataset2","-","#scalability-time-algorithm3-dataset2","&#8734");
	// Algorithm 4 - Castor
	$.getJSON('data/hiv-2k4k/castor-fold1-schema1.json', function(json) {
		populateStatsForAlgorithmScalability("#scalability-algorithm4-dataset2",json.algorithm,"#scalability-precision-algorithm4-dataset2",json.precision,"#scalability-recall-algorithm4-dataset2",json.recall,"#scalability-f1-algorithm4-dataset2",json.f1,"#scalability-time-algorithm4-dataset2",json.time);
	});
});

function populateStatsForAlgorithmScalability(algorithmId,algorithmName,precisionId,precision,recallId,recall,f1Id,f1,timeId,time) {
	// Stats
	
	var precisionValue = precision;
	if(!isString(precision))
		precisionValue = formatNumber(precision);
	var recallValue = recall;
	if(!isString(recall))
		recallValue = formatNumber(recall);
	var f1Value = f1;
	if(!isString(f1))
		f1Value = formatNumber(f1);
	var timeValue = time;
	if(!isString(time))
		timeValue = formatNumber(time/60);

	$( algorithmId ).html(algorithmName);
	$( precisionId ).html(precisionValue);
	$( recallId ).html(recallValue);
	$( f1Id ).html(f1Value);
	$( timeId ).html(timeValue);
}

function isString(s) {
	return typeof s === 'string' || s instanceof String;
}

function isNumber(n) {
	return !isNan(parseFloat(n)) && isFinite(n);
}
