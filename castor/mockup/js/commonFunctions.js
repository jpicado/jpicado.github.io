elementNames = {
	"H": "Hydrogen","He": "Helium","Li": "Lithium","Be": "Beryllium","B": "Boron","C": "Carbon","N": "Nitrogen","O": "Oxygen","F": "Fluorine","Ne": "Neon","Na": "Sodium","Mg": "Magnesium","Al": "Aluminum, Aluminium","Si": "Silicon","P": "Phosphorus","S": "Sulfur","Cl": "Chlorine","Ar": "Argon","K": "Potassium","Ca": "Calcium","Sc": "Scandium","Ti": "Titanium","V": "Vanadium","Cr": "Chromium","Mn": "Manganese","Fe": "Iron","Co": "Cobalt","Ni": "Nickel","Cu": "Copper","Zn": "Zinc","Ga": "Gallium","Ge": "Germanium","As": "Arsenic","Se": "Selenium","Br": "Bromine","Kr": "Krypton","Rb": "Rubidium","Sr": "Strontium","Y": "Yttrium","Zr": "Zirconium","Nb": "Niobium","Mo": "Molybdenum","Tc": "Technetium","Ru": "Ruthenium","Rh": "Rhodium","Pd": "Palladium","Ag": "Silver","Cd": "Cadmium","In": "Indium","Sn": "Tin","Sb": "Antimony","Te": "Tellurium","I": "Iodine","Xe": "Xenon","Cs": "Cesium","Ba": "Barium","La": "Lanthanum","Ce": "Cerium","Pr": "Praseodymium","Nd": "Neodymium","Pm": "Promethium","Sm": "Samarium","Eu": "Europium","Gd": "Gadolinium","Tb": "Terbium","Dy": "Dysprosium","Ho": "Holmium","Er": "Erbium","Tm": "Thulium","Yb": "Ytterbium","Lu": "Lutetium","Hf": "Hafnium","Ta": "Tantalum","W": "Tungsten","Re": "Rhenium","Os": "Osmium","Ir": "Iridium","Pt": "Platinum","Au": "Gold","Hg": "Mercury","Tl": "Thallium","Pb": "Lead","Bi": "Bismuth","Po": "Polonium","At": "Astatine","Rn": "Radon","Fr": "Francium","Ra": "Radium","Ac": "Actinium","Th": "Thorium","Pa": "Protactinium","U": "Uranium","Np": "Neptunium","Pu": "Plutonium","Am": "Americium","Cm": "Curium","Bk": "Berkelium","Cf": "Californium","Es": "Einsteinium","Fm": "Fermium","Md": "Mendelevium","No": "Nobelium","Lr": "Lawrencium","Rf": "Rutherfordium","Db": "Dubnium","Sg": "Seaborgium","Bh": "Bohrium","Hs": "Hassium","Mt": "Meitnerium","Ds": "Darmstadtium","Rg": "Roentgenium","Cn": "Copernicium","Uut": "Ununtrium","Fl": "Flerovium","Uup": "Ununpentium","Lv": "Livermorium","Uus": "Ununseptium","Uuo": "Ununoctium"
}

function formatNumber(number) {
	return Math.round(number * 100) / 100
}

function definitionToString(definitionJson) {
	var definition = "";
	for (var i = 0; i < definitionJson.length; i++){
		var obj = definitionJson[i];

		var body = "\t";
		for (var j = 0; j < obj.body.length; j++){
			if (j > 0 && j%3 == 0) {
				body += "\n\t";
			}
			body += obj.body[j];
			if (j < obj.body.length - 1) {
				body += ", ";
			}
		}
		var clause = obj.head + " :- \n" + body + ".\n\n";
		definition += clause;
	}
	return definition;
}

function clauseToStringHIV(clauseJson) {
	var compoundPrefix = "comp";
	var atomPrefix = "atom";
	var bondPrefix = "bond";

	// Head
	// var head = clauseJson.head.replace("hiv_active", "hivActive");
	var compoundId = compoundPrefix;
	var head = "antiHIVActive("+compoundId+")"

	// Body
	var body = bodyToStringHIV(clauseJson.body, compoundId, atomPrefix, bondPrefix);

	var clause = head + " :- \n" + body + ".\n\n";
	
	return clause;
}

function definitionToStringHIV(definitionJson) {
	var definition = "";
	for (var i = 0; i < definitionJson.length; i++){
		definition += clauseToStringHIV(definitionJson[i]);
	}
	return definition;
}

function bodyToStringHIV(bodyJson, compoundId, atomPrefix, bondPrefix) {
	var atomCounter = 1;
	var bondCounter = 1;

	var atomVars = {};
	var bondVars = {};

	var body = "\t";
	var addedAtoms = 0;
	for (var j = 0; j < bodyJson.length; j++){
		var atom = bodyJson[j];

		var addAtom = true;
		if (atom.startsWith("p2" || atom.startsWith("p3"))) {
			addAtom = false;
		} else if (atom.startsWith("compounds")) {
			// Change predicate
			var predicate = getPredicateOfAtom(atom);
			predicate = predicate.replace("compounds", "Compounds");

			// Change variable names
			var tokens = atom.split("(");
			var arguments = tokens[1].substring(0, tokens[1].length-1);

			var terms = getTermsInAtom(atom);
			var compoundVar = terms[0];
			var atomVar = terms[1];

			if (atomVar in atomVars) {
				var newAtomVar = atomVars[atomVar];
			} else {
				var newAtomVar = atomPrefix+atomCounter;
				atomCounter++;
				atomVars[atomVar] = newAtomVar;
			}
			atom = predicate+"("+arguments.replace(compoundVar, compoundId).replace(atomVar, newAtomVar)+")";
		} else if (atom.startsWith("element_")) {
			// Change predicate
			var predicate = getPredicateOfAtom(atom);
			var elementSymbol = capitalizeFirstLetter(predicate.replace("element_",""));
			var elementName = elementNames[elementSymbol];
			predicate = elementName;

			// Change variable names
			var tokens = atom.split("(");
			var arguments = tokens[1].substring(0, tokens[1].length-1);

			var terms = getTermsInAtom(atom);
			var atomVar = terms[0];
			if (atomVar in atomVars) {
				var newAtomVar = atomVars[atomVar];
			} else {
				var newAtomVar = atomPrefix+atomCounter;
				atomCounter++;
				atomVars[atomVar] = newAtomVar;
			}
			atom = predicate+"("+arguments.replace(atomVar, newAtomVar)+")";
		}  else if(atom.startsWith("bonds")) {
			// Change predicate
			var predicate = getPredicateOfAtom(atom);
			predicate = predicate.replace("bonds", "Bonds").replace("_", "");

			// Change variable names
			var tokens = atom.split("(");
			var arguments = tokens[1].substring(0, tokens[1].length-1);

			var terms = getTermsInAtom(atom);
			var bondVar = terms[0];
			var atom1Var = terms[1];
			var atom2Var = terms[2];

			// bond
			if (bondVar in bondVars) {
				var newBondVar = bondVars[bondVar];
			} else {
				var newBondVar = bondPrefix+bondCounter;
				bondCounter++;
				bondVars[bondVar] = newBondVar;
			}
			// atom1
			if (atom1Var in atomVars) {
				var newAtom1Var = atomVars[atom1Var];
			} else {
				var newAtom1Var = atomPrefix+atomCounter;
				atomCounter++;
				atomVars[atom1Var] = newAtom1Var;
			}
			// atom2
			if (atom2Var in atomVars) {
				var newAtom2Var = atomVars[atom2Var];
			} else {
				var newAtom2Var = atomPrefix+atomCounter;
				atomCounter++;
				atomVars[atom2Var] = newAtom2Var;
			}

			atom = predicate+"("+arguments.replace(bondVar, newBondVar).replace(atom1Var, newAtom1Var).replace(atom2Var, newAtom2Var)+")";
		} else if(atom.startsWith("bondtype")) {
			// Change predicate
			var predicate = getPredicateOfAtom(atom);
			predicate = predicate.replace("bondtype", "BondType").replace("_", "");

			// Change variable names
			var tokens = atom.split("(");
			var arguments = tokens[1].substring(0, tokens[1].length-1);

			var terms = getTermsInAtom(atom);
			var bondVar = terms[0];
			if (bondVar in bondVars) {
				var newBondVar = bondVars[bondVar];
			} else {
				var newBondVar = bondPrefix+bondCounter;
				bondCounter++;
				bondVars[bondVar] = newBondVar;
			}

			atom = predicate+"("+arguments.replace(bondVar, newBondVar)+")";
		}

		if (addAtom) {
			if (addedAtoms > 0) {
				body += ", ";
			}

			// Add new line
			if (addedAtoms > 0 && addedAtoms%3 == 0) {
				body += "\n\t";
			}

			body += atom;
			addedAtoms++;
		}
	}
	return body;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getPredicateOfAtom(atom) {
	var tokens = atom.split("(");
	var predicate = tokens[0];
	return predicate;
}

function getTermsInAtom(atom) {
	var tokens = atom.split("(");
	var arguments = tokens[1].substring(0, tokens[1].length-1);

	// Get terms in literal
	var regex = /([^\"'][^,]*|\".+?\"|'.+?')[,\\s]*/g;
	var match = regex.exec(arguments);

	// Get terms in literal
	var termsInAtom = [];
	while (match != null) {
		var term = match[1];
		termsInAtom.push(term);
		match = regex.exec(arguments);
	}

	return termsInAtom;
}


function createGraphicalViewForClauseHIV(clauseJson, elementId, schema, definitionNumber) {
	document.getElementById(elementId).title = clauseToStringHIV(clauseJson);

	var graph = createGraph(elementId);
	var seenTerms = {};
	
	bonds = {}
	bondTypes = {}

	// For each body literal in definition
	for (var j = 0; j < clauseJson.body.length; j++) {
		var atom = clauseJson.body[j];

		// Get predicate and terms
		var predicate = getPredicateOfAtom(atom);

		if (predicate == "compounds")
			continue;

		// Get terms in atom
		var termsInAtom = getTermsInAtom(atom);

		// Process terms
		if (schema == 1) {
			createGraphicalViewHIVAuxSchema1(graph, seenTerms, definitionNumber, predicate, termsInAtom, bonds, bondTypes);
		} else {
			createGraphicalViewHIVAuxSchema2(graph, seenTerms, definitionNumber, predicate, termsInAtom, bonds, bondTypes);
		}
	}

	// Add missing edges based on bond types
	for (var bondId in bonds) {
		if (bonds.hasOwnProperty(bondId)) {
			if (bondId in bondTypes) {
				// There is already one edge between source and target
				// Add only if type is 2 or 3
				for (var j = 1; j < bondTypes[bondId]; j++) {
					var sourceId = bonds[bondId].source;
					var targetId = bonds[bondId].target;
					
					graph.add({
						data: {
							source: sourceId,
							target: targetId
							//label: predicate
						},
						classes: 'autorotate multiline-manual bezier'
					});
				};
			}
		}
	}

	graph.layout({
		name: 'cose'
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		  var target = $(e.target).attr("href") // activated tab
		  if (target == "#compareTab" || target == "#datalogTab" || target == "#learnTab" || target == "#learnDefinitionsTab") {
		  	graph.resize();	
		  	graph.layout({
		  		name: 'cose'
		  	});
		  }
		});
}

function createGraphicalViewForDefinitionHIV(definitionJson, elementId, schema) {
	var graph = createGraph(elementId);

	// For each definition
	var seenTerms = {};
	for (var i = 0; i < definitionJson.length; i++) {
		var obj = definitionJson[i];

		bonds = {}
		bondTypes = {}

		// For each body literal in definition
		for (var j = 0; j < obj.body.length; j++) {
			var atom = obj.body[j];

			// Get predicate and terms
			var predicate = getPredicateOfAtom(atom);

			if (predicate == "compounds")
				continue;

			// Get terms in atom
			var termsInAtom = getTermsInAtom(atom);

			// Process terms
			if (schema == 1) {
				createGraphicalViewHIVAuxSchema1(graph, seenTerms, i, predicate, termsInAtom, bonds, bondTypes);
			} else {
				createGraphicalViewHIVAuxSchema2(graph, seenTerms, i, predicate, termsInAtom, bonds, bondTypes);
			}
		}

		// Add missing edges based on bond types
		for (var bondId in bonds) {
			if (bonds.hasOwnProperty(bondId)) {
				if (bondId in bondTypes) {
					// There is already one edge between source and target
					// Add only if type is 2 or 3
					for (var j = 1; j < bondTypes[bondId]; j++) {
						var sourceId = bonds[bondId].source;
						var targetId = bonds[bondId].target;
						
						graph.add({
							data: {
								source: sourceId,
								target: targetId
								//label: predicate
							},
							classes: 'autorotate multiline-manual bezier'
						});
					};
				}
			}
		}




	}

	graph.layout({
		name: 'cose'
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		  var target = $(e.target).attr("href") // activated tab
		  if (target == "#compareTab" || target == "#datalogTab" || target == "#learnTab" || target == "#learnDefinitionsTab") {
		  	graph.resize();	
		  	graph.layout({
		  		name: 'cose'
		  	});
		  }
		});
}

function createGraphicalViewHIVAuxSchema1(graph, seenTerms, definitionNumber, predicate, termsInAtom, bonds, bondTypes) {
	if (predicate == "bonds") {
		// Save bond source and target
		var bondId = getNodeId(definitionNumber, termsInAtom[0]);
		var sourceId = getNodeId(definitionNumber, termsInAtom[1]);
		var targetId = getNodeId(definitionNumber, termsInAtom[2]);
		bonds[bondId] = { 'source': sourceId, 'target' : targetId};
	} else if (predicate == "bondtype_1" || predicate == "bondtype_2" || predicate == "bondtype_3") {
		// Get bond type
		flag = parseInt(termsInAtom[1]);
		if (flag == 1) {
			var bondId = getNodeId(definitionNumber, termsInAtom[0]);
			var typeString = predicate.replace("bondtype_","");
			bondTypes[bondId] = parseInt(typeString);
		}
	}

	// Process terms
	var termIdsInAtom = [];
	for (var attrCounter = 0; attrCounter < termsInAtom.length; attrCounter++) {
		var term = termsInAtom[attrCounter];

		// First conditions are exceptions
		if (attrCounter == 0 && predicate == "bonds") {
			// Do not create node for bond
		} else if (predicate == "bondtype_1" || predicate == "bondtype_2" || predicate == "bondtype_3") {
			/*if (attrCounter == 0) {
				// Do not create node for bond
			} else if (attrCounter == 1) {
				// Get bond type
				flag = parseInt(term);
				if (flag == 1) {
					var bondId = getNodeId(definitionNumber, termsInAtom[attrCounter-1]);
					var typeString = predicate.replace("bondtype_","");
					bondTypes[bondId] = parseInt(typeString);
				}
			}*/
		} else {
            // Create node in graph
            var termId = getNodeId(definitionNumber, term);
            if (termId in seenTerms) {
            } else {
            	seenTerms[termId] = term;
            	graph.add({
            		data: { 
            			id: termId
            			//label: term 
            		},
            		classes: 'center-center'
            	});
            }

            // Assign color and label to node according to element
        	if (predicate.startsWith("element_")) {
        		// Set color
        		var classForElement = predicate.toLowerCase();
        		graph.getElementById(termId).addClass(classForElement);

        		// Set label
        		var label = capitalizeFirstLetter(predicate.replace("element_",""));
        		//var label = predicate;
        		graph.getElementById(termId).data("label", label);
        	}

            termIdsInAtom.push(termId);
        }
	}

	if (termIdsInAtom.length == 1) {
		// Do not create self edges

		// If arity 1, relation indicates an attribute for entity. Then, update label with attribute
		//var newLabel = graph.getElementById(termsInAtom[0]).data("label") + "\n"+predicate;
		//graph.getElementById(termsInAtom[0]).data("label", newLabel);
	} else if(predicate == "bondtype_1" || predicate == "bondtype_2" || predicate == "bondtype_3") {
		// Do nothing
	} else {
		// Create edges
		for (var k = 0; k < termIdsInAtom.length; k++) {
			for (var l = k+1; l < termIdsInAtom.length; l++) {
				if (k != l) {
					//var id = 'clause'+definitionNumber+'_'+predicate+'_'+termIdsInAtom[k]+'_'+termIdsInAtom[l];
					var id = getEdgeId(definitionNumber, predicate, termIdsInAtom, k, l);
					graph.add({
						data: {
							id: id,
							source: termIdsInAtom[k],
							target: termIdsInAtom[l]
							//label: predicate
						},
						classes: 'autorotate multiline-manual bezier'
					});
				}
			}
		}
	}
}

function createGraphicalViewHIVAuxSchema2(graph, seenTerms, definitionNumber, predicate, termsInAtom, bonds, bondTypes) {
	if (predicate == "bonds") {
		// Save bond source and target
		var bondId = getNodeId(definitionNumber, termsInAtom[0]);
		var sourceId = getNodeId(definitionNumber, termsInAtom[1]);
		var targetId = getNodeId(definitionNumber, termsInAtom[2]);
		bonds[bondId] = { 'source': sourceId, 'target' : targetId};

		// Get bond type
		type1 = parseInt(termsInAtom[3]);
		type2 = parseInt(termsInAtom[4]);
		type3 = parseInt(termsInAtom[5]);
		if (type1 == 1) {
			bondTypes[bondId] = 1;
		} else if (type2 == 1) {
			bondTypes[bondId] = 2;
		} else if (type3 == 1) {
			bondTypes[bondId] = 3;
		}
	}

	// Process terms
	var termIdsInAtom = [];
	for (var attrCounter = 0; attrCounter < termsInAtom.length; attrCounter++) {
		var term = termsInAtom[attrCounter];

		// First conditions are exceptions
		if (predicate == "bonds" && (attrCounter == 0 || attrCounter == 3 || attrCounter == 4 || attrCounter == 5) ) {
			// Do not create node for bond
		} else {
            // Create node in graph
            var termId = getNodeId(definitionNumber, term);
            if (termId in seenTerms) {
            } else {
            	seenTerms[termId] = term;
            	graph.add({
            		data: { 
            			id: termId
            			//label: term 
            		},
            		classes: 'center-center'
            	});
            }

            // Assign color and label to node according to element
        	if (predicate.startsWith("element_")) {
        		// Set color
        		var classForElement = predicate.toLowerCase();
        		graph.getElementById(termId).addClass(classForElement);

        		// Set label
        		var label = capitalizeFirstLetter(predicate.replace("element_",""));
        		//var label = predicate;
        		graph.getElementById(termId).data("label", label);
        	}

            termIdsInAtom.push(termId);
        }
	}

	if (termIdsInAtom.length == 1) {
		// Do not create self edges

		// If arity 1, relation indicates an attribute for entity. Then, update label with attribute
		//var newLabel = graph.getElementById(termsInAtom[0]).data("label") + "\n"+predicate;
		//graph.getElementById(termsInAtom[0]).data("label", newLabel);
	} else {
		// Create edges
		for (var k = 0; k < termIdsInAtom.length; k++) {
			for (var l = k+1; l < termIdsInAtom.length; l++) {
				if (k != l) {
					//var id = 'clause'+definitionNumber+'_'+predicate+'_'+termIdsInAtom[k]+'_'+termIdsInAtom[l];
					var id = getEdgeId(definitionNumber, predicate, termIdsInAtom, k, l);
					graph.add({
						data: {
							id: id,
							source: termIdsInAtom[k],
							target: termIdsInAtom[l]
							//label: predicate
						},
						classes: 'autorotate multiline-manual bezier'
					});
				}
			}
		}
	}
}

function getNodeId(definitionNumber, term) {
	return 'clause'+definitionNumber+'_'+term;
}

function getEdgeId(definitionNumber, predicate, termIdsInAtom, sourceIndex, targetIndex) {
	return getEdgeIdFromIds(definitionNumber, predicate, termIdsInAtom[sourceIndex], termIdsInAtom[targetIndex]);
}

function getEdgeIdFromIds(definitionNumber, predicate, sourceId, targetId) {
	return 'clause'+definitionNumber+'_'+predicate+'_'+sourceId+'_'+targetId;
}

function createGraphicalViewGeneral(definitionJson, elementId) {
	var graph = createGraph(elementId);

	// For each definition
	var seenTerms = {};
	for (var i = 0; i < definitionJson.length; i++) {
		var obj = definitionJson[i];

		// For each body literal in definition
		for (var j = 0; j < obj.body.length; j++) {
			var atom = obj.body[j];

			// Get predicate and terms
			var tokens = atom.split("(");
			var predicate = tokens[0];
			var arguments = tokens[1].substring(0, tokens[1].length-1);

			// Get terms in literal
			var regex = /([^\"'][^,]*|\".+?\"|'.+?')[,\\s]*/g;
			var match = regex.exec(arguments);
			var termsInAtom = [];
			var attrCounter = 0;
			while (match != null) {
				// matched text: match[0]
				var term = match[1];

				// Create node in graph
	            var termId = 'clause'+i+'_'+term;
	            if (termId in seenTerms) {
	            } else {
	            	seenTerms[termId] = term;
	            	graph.add({
	            		data: { 
	            			id: termId,
	            			label: term 
	            		},
	            		classes: 'center-center multiline-manual'
	            	});
	            }

		        termsInAtom.push(termId);
		        attrCounter++;

				// match start: match.index
				// capturing group n: match[n]
				match = regex.exec(arguments);
			}

			if (termsInAtom.length == 1) {
				// If arity 1, relation indicates an attribute for entity. Then, update label with attribute
				var newLabel = graph.getElementById(termsInAtom[0]).data("label") + "\n"+predicate;
				graph.getElementById(termsInAtom[0]).data("label", newLabel);
			} else {
				// Create edges
				for (var k = 0; k < termsInAtom.length; k++) {
					for (var l = 0; l < termsInAtom.length; l++) {
						if (k != l) {
							graph.add({
								data: {
									id: 'clause'+i+'_'+predicate+'_'+termsInAtom[k]+'_'+termsInAtom[l],
									source: termsInAtom[k],
									target: termsInAtom[l],
									label: predicate
								},
								classes: 'autorotate multiline-manual'
							});
						}
					}
				}
			}
		}
	}

	graph.layout({
		name: 'cose'
	});

	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		  var target = $(e.target).attr("href") // activated tab
		  if (target == "#graphicalTab") {
		  	graph.resize();	
		  	graph.layout({
		  		name: 'cose'
		  	});
		  }
		});

}

function createGraph(elementId) {
	var graph = cytoscape({
		container: document.getElementById(elementId),
		style: [
		{
			selector: 'node',
			style: {
				'background-color': 'black',
				'border-width': 1,
      			'border-color': 'black',
				label: 'data(label)'
			}
		},
		{
			selector: 'edge',
			style: {
				'label': 'data(label)',
				'width': 1,
				'line-color': 'black'
			}
		},
		{
            selector: 'edge.bezier',
            style: {
				'curve-style': 'bezier',
                'control-point-step-size': 40
			}
		},
		{
			selector: '.center-center',
			style: {
				'text-valign': 'center',
				'text-halign': 'center'
			}
		},
		{
			selector: '.autorotate',
			style: {
				'edge-text-rotation': 'autorotate'
			}
		},
		{
			selector: '.multiline-manual',
			style: {
				'text-wrap': 'wrap'
			}
		},
		{selector:'.element_h',style:{'background-color': '#FFFFFF'}},
		{selector:'.element_he',style:{'background-color': '#D9FFFF'}},
		{selector:'.element_li',style:{'background-color': '#CC80FF'}},
		{selector:'.element_be',style:{'background-color': '#C2FF00'}},
		{selector:'.element_b',style:{'background-color': '#FFB5B5'}},
		{selector:'.element_c',style:{'background-color': '#909090'}},
		{selector:'.element_n',style:{'background-color': '#3050F8'}},
		{selector:'.element_o',style:{'background-color': '#FF0D0D'}},
		{selector:'.element_f',style:{'background-color': '#90E050'}},
		{selector:'.element_ne',style:{'background-color': '#B3E3F5'}},
		{selector:'.element_na',style:{'background-color': '#AB5CF2'}},
		{selector:'.element_mg',style:{'background-color': '#8AFF00'}},
		{selector:'.element_al',style:{'background-color': '#BFA6A6'}},
		{selector:'.element_si',style:{'background-color': '#F0C8A0'}},
		{selector:'.element_p',style:{'background-color': '#FF8000'}},
		{selector:'.element_s',style:{'background-color': '#FFFF30'}},
		{selector:'.element_cl',style:{'background-color': '#1FF01F'}},
		{selector:'.element_ar',style:{'background-color': '#80D1E3'}},
		{selector:'.element_k',style:{'background-color': '#8F40D4'}},
		{selector:'.element_ca',style:{'background-color': '#3DFF00'}},
		{selector:'.element_sc',style:{'background-color': '#E6E6E6'}},
		{selector:'.element_ti',style:{'background-color': '#BFC2C7'}},
		{selector:'.element_v',style:{'background-color': '#A6A6AB'}},
		{selector:'.element_cr',style:{'background-color': '#8A99C7'}},
		{selector:'.element_mn',style:{'background-color': '#9C7AC7'}},
		{selector:'.element_fe',style:{'background-color': '#E06633'}},
		{selector:'.element_co',style:{'background-color': '#F090A0'}},
		{selector:'.element_ni',style:{'background-color': '#50D050'}},
		{selector:'.element_cu',style:{'background-color': '#C88033'}},
		{selector:'.element_zn',style:{'background-color': '#7D80B0'}},
		{selector:'.element_ga',style:{'background-color': '#C28F8F'}},
		{selector:'.element_ge',style:{'background-color': '#668F8F'}},
		{selector:'.element_as',style:{'background-color': '#BD80E3'}},
		{selector:'.element_se',style:{'background-color': '#FFA100'}},
		{selector:'.element_br',style:{'background-color': '#A62929'}},
		{selector:'.element_kr',style:{'background-color': '#5CB8D1'}},
		{selector:'.element_rb',style:{'background-color': '#702EB0'}},
		{selector:'.element_sr',style:{'background-color': '#00FF00'}},
		{selector:'.element_y',style:{'background-color': '#94FFFF'}},
		{selector:'.element_zr',style:{'background-color': '#94E0E0'}},
		{selector:'.element_nb',style:{'background-color': '#73C2C9'}},
		{selector:'.element_mo',style:{'background-color': '#54B5B5'}},
		{selector:'.element_tc',style:{'background-color': '#3B9E9E'}},
		{selector:'.element_ru',style:{'background-color': '#248F8F'}},
		{selector:'.element_rh',style:{'background-color': '#0A7D8C'}},
		{selector:'.element_pd',style:{'background-color': '#006985'}},
		{selector:'.element_ag',style:{'background-color': '#C0C0C0'}},
		{selector:'.element_cd',style:{'background-color': '#FFD98F'}},
		{selector:'.element_in',style:{'background-color': '#A67573'}},
		{selector:'.element_sn',style:{'background-color': '#668080'}},
		{selector:'.element_sb',style:{'background-color': '#9E63B5'}},
		{selector:'.element_te',style:{'background-color': '#D47A00'}},
		{selector:'.element_i',style:{'background-color': '#940094'}},
		{selector:'.element_xe',style:{'background-color': '#429EB0'}},
		{selector:'.element_cs',style:{'background-color': '#57178F'}},
		{selector:'.element_ba',style:{'background-color': '#00C900'}},
		{selector:'.element_la',style:{'background-color': '#70D4FF'}},
		{selector:'.element_ce',style:{'background-color': '#FFFFC7'}},
		{selector:'.element_pr',style:{'background-color': '#D9FFC7'}},
		{selector:'.element_nd',style:{'background-color': '#C7FFC7'}},
		{selector:'.element_pm',style:{'background-color': '#A3FFC7'}},
		{selector:'.element_sm',style:{'background-color': '#8FFFC7'}},
		{selector:'.element_eu',style:{'background-color': '#61FFC7'}},
		{selector:'.element_gd',style:{'background-color': '#45FFC7'}},
		{selector:'.element_tb',style:{'background-color': '#30FFC7'}},
		{selector:'.element_dy',style:{'background-color': '#1FFFC7'}},
		{selector:'.element_ho',style:{'background-color': '#00FF9C'}},
		{selector:'.element_er',style:{'background-color': '#00E675'}},
		{selector:'.element_tm',style:{'background-color': '#00D452'}},
		{selector:'.element_yb',style:{'background-color': '#00BF38'}},
		{selector:'.element_lu',style:{'background-color': '#00AB24'}},
		{selector:'.element_hf',style:{'background-color': '#4DC2FF'}},
		{selector:'.element_ta',style:{'background-color': '#4DA6FF'}},
		{selector:'.element_w',style:{'background-color': '#2194D6'}},
		{selector:'.element_re',style:{'background-color': '#267DAB'}},
		{selector:'.element_os',style:{'background-color': '#266696'}},
		{selector:'.element_ir',style:{'background-color': '#175487'}},
		{selector:'.element_pt',style:{'background-color': '#D0D0E0'}},
		{selector:'.element_au',style:{'background-color': '#FFD123'}},
		{selector:'.element_hg',style:{'background-color': '#B8B8D0'}},
		{selector:'.element_tl',style:{'background-color': '#A6544D'}},
		{selector:'.element_pb',style:{'background-color': '#575961'}},
		{selector:'.element_bi',style:{'background-color': '#9E4FB5'}},
		{selector:'.element_po',style:{'background-color': '#AB5C00'}},
		{selector:'.element_at',style:{'background-color': '#754F45'}},
		{selector:'.element_rn',style:{'background-color': '#428296'}},
		{selector:'.element_fr',style:{'background-color': '#420066'}},
		{selector:'.element_ra',style:{'background-color': '#007D00'}},
		{selector:'.element_ac',style:{'background-color': '#70ABFA'}},
		{selector:'.element_th',style:{'background-color': '#00BAFF'}},
		{selector:'.element_pa',style:{'background-color': '#00A1FF'}},
		{selector:'.element_u',style:{'background-color': '#008FFF'}},
		{selector:'.element_np',style:{'background-color': '#0080FF'}},
		{selector:'.element_pu',style:{'background-color': '#006BFF'}},
		{selector:'.element_am',style:{'background-color': '#545CF2'}},
		{selector:'.element_cm',style:{'background-color': '#785CE3'}},
		{selector:'.element_bk',style:{'background-color': '#8A4FE3'}},
		{selector:'.element_cf',style:{'background-color': '#A136D4'}},
		{selector:'.element_es',style:{'background-color': '#B31FD4'}},
		{selector:'.element_fm',style:{'background-color': '#B31FBA'}},
		{selector:'.element_md',style:{'background-color': '#B30DA6'}},
		{selector:'.element_no',style:{'background-color': '#BD0D87'}},
		{selector:'.element_lr',style:{'background-color': '#C70066'}},
		{selector:'.element_rf',style:{'background-color': '#CC0059'}},
		{selector:'.element_db',style:{'background-color': '#D1004F'}},
		{selector:'.element_sg',style:{'background-color': '#D90045'}},
		{selector:'.element_bh',style:{'background-color': '#E00038'}},
		{selector:'.element_hs',style:{'background-color': '#E6002E'}},
		{selector:'.element_mt',style:{'background-color': '#EB0026'}}
		],
		layout: {
			name: 'cose'
		}
	});

	return graph;
}

function clearSelectOptions(selectMenu) {
	for(var i = selectMenu.options.length - 1 ; i >= 0 ; i--) {
		selectMenu.remove(i);
    }
}