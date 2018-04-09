const SERVER_ADDRESS = "http://localhost:4567/";

function learn() {
	clear();

	// Show spinner
	spinner.spin(spinnerDiv);

	// Get selected modes
	method = $("#modesSelect").val();

	var url = SERVER_ADDRESS+"learn/uwcse/"+method+"/sps";
	console.log(url);

	// Call REST service
	$.getJSON(url, { 
	}).done(function(data) {
		learnAux(data);
	}).fail(function() {
		alert("An error occurred.");
		spinner.stop();
	});
}

function learnAux(data) {
	// Store definition locally
    //var definitionId = generateDefinitionIdAutomodeTab();
    //localStorage.setItem(definitionId, JSON.stringify(data.definition));

	// Create an option for each clause in select menu
	//var selectMenu = "#automodeTab-selectMenu";
	var definition = ""
    for (var i = 0; i < data.definition.length; i++) {
    	definition += clauseToText(data.definition[i]) + "\n\n";
    	//var optionId = generateClauseIdAutomodeTab(i);
    	//$('<option>').val(optionId).text(i+1).appendTo(selectMenu);
    }
    $("#automodeTabDatalog").val(definition);

    // Set the number of clauses in definition
    //$("#automodeTab-numberOfClauses").html(data.definition.length);

    //if (data.definition.length > 0)
		//$("#automodeTabDatalog").val(clauseToText(data.definition[0]));

	// Show effectiveness
	$("#automodeEffectiveness-precision").html(formatNumber(data.precision));
	$("#automodeEffectiveness-recall").html(formatNumber(data.recall));
	//$("#automodeEffectiveness-f1").html(formatNumber(data.f1));
	$("#automodeEffectiveness-time").html(formatNumber(data.time));

	spinner.stop();
	$("#autmomodeResultsDiv").show();
}