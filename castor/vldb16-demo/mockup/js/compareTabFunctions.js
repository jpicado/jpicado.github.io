
function populateStatsForAlgorithmOnSchema(algorithmId,algorithmName,schemaTitleId,schemaTitle,precisionId,precision,recallId,recall,f1Id,f1,timeId,time) {
	// Stats
	$( algorithmId ).html(algorithmName);
	$( schemaTitleId ).html(schemaTitle+" Schema");
	$( precisionId ).html(formatNumber(precision));
	$( recallId ).html(formatNumber(recall));
	//$( f1Id ).html(formatNumber(f1));
	//$( timeId ).html(formatNumber(time/60));
}

function populateDatalogForAlgorithmOnSchema(algorithmId,algorithmName,schemaTitleId,schemaTitle,definitionId,definition) {
	// Datalog
	$( algorithmId ).html(algorithmName);
	$( schemaTitleId ).html(schemaTitle+" Schema");
	var definition =  definitionToStringHIV(definition);
	$( definitionId ).html(definition);
}

function populateGraphicalForAlgorithmOnSchema(algorithmId,algorithmName,schemaTitleId,schemaTitle,graphicalViewId,definition,schemaNumber,algorithmNumber,clauseCountId) {
    // Graphical
    $( algorithmId ).html(algorithmName);
    $( schemaTitleId ).html(schemaTitle+" Schema");

    // Store definition locally
    var definitionId = generateDefinitionId(algorithmNumber, schemaNumber);
    localStorage.setItem(definitionId, JSON.stringify(definition));

    // Clear options of select menu
	var selectMenu = "compareTab-selectMenu-"+definitionId;
	clearSelectOptions(document.getElementById(selectMenu));
	// Create an option for each clause in select menu
	var selectMenuId = "#"+selectMenu;
    for (var i = 0; i < definition.length; i++) {
    	var optionId = generateClauseId(algorithmNumber, schemaNumber, i);
    	$('<option>').val(optionId).text(i+1).appendTo(selectMenuId);
    }

    // Set the number of clauses in definition
    $( clauseCountId ).html(definition.length);

    // Show graphical view of first clause
    //createGraphicalViewForDefinitionHIV(definition, graphicalViewId, schemaNumber);
    createGraphicalViewForClauseHIV(definition[0], graphicalViewId, schemaNumber, 0);
}

function selectMenuChanged(selectMenu) {
	var value = selectMenu.value;

	// Must match id generate in generateClauseId
	var regex = /algorithm(\d+)-schema(\d+)-clause(\d+)/g;
	var match = regex.exec(value);

	var algorithmNumber = match[1];
	var schemaNumber = match[2];
	var clauseNumber = match[3];

	var definitionId = generateDefinitionId(algorithmNumber, schemaNumber);

	// Parse definition to JSON
	var definitionJson = JSON.parse(localStorage.getItem(definitionId));
	var clause = definitionJson[clauseNumber];

	var divId = "graphical-algorithm"+algorithmNumber+"-schema"+schemaNumber;
	createGraphicalViewForClauseHIV(clause, divId, schemaNumber, clauseNumber);
}

function generateDefinitionId(algorithmNumber, schemaNumber) {
	return "algorithm"+algorithmNumber+"-schema"+schemaNumber;
}

function generateClauseId(algorithmNumber, schemaNumber, clauseNumber) {
	return generateDefinitionId(algorithmNumber, schemaNumber)+"-clause"+clauseNumber;
}

