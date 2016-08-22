
function populateStatsForAlgorithmOnSchema(algorithmId,algorithmName,schemaTitleId,schemaTitle,precisionId,precision,recallId,recall,timeId,time) {
	// Stats
	$( algorithmId ).html(algorithmName);
	$( schemaTitleId ).html(schemaTitle);
	$( precisionId ).html(formatNumber(precision));
	$( recallId ).html(formatNumber(recall));
	$( timeId ).html(formatNumber(time)+" s");
}

function populateDatalogForAlgorithmOnSchema(algorithmId,algorithmName,schemaTitleId,schemaTitle,definitionId,definition) {
	// Datalog
	$( algorithmId ).html(algorithmName);
	$( schemaTitleId ).html(schemaTitle+" Schema");
	var definition = definitionToString(definition);
	$( definitionId ).html(definition);
}

function populateGraphicalForAlgorithmOnSchema(algorithmId,algorithmName,schemaTitleId,schemaTitle,graphicalViewId,definition,schema) {
    // Graphical
    $( algorithmId ).html(algorithmName);
    $( schemaTitleId ).html(schemaTitle+" Schema");
    createGraphicalViewHIV(definition, graphicalViewId,schema);
}

