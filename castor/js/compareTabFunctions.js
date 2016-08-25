
function populateStatsForAlgorithmOnSchema(algorithmId,algorithmName,schemaTitleId,schemaTitle,precisionId,precision,recallId,recall,f1Id,f1,timeId,time) {
	// Stats
	$( algorithmId ).html(algorithmName);
	$( schemaTitleId ).html(schemaTitle+" Schema");
	$( precisionId ).html(formatNumber(precision));
	$( recallId ).html(formatNumber(recall));
	$( f1Id ).html(formatNumber(f1));
	$( timeId ).html(formatNumber(time/60));
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

