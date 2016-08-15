$(function(){ // on dom ready

var cy = cytoscape({
  
  container: document.getElementById('cy'),
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
        'width': 'mapData(weight, 40, 80, 20, 60)',
        'content': 'data(name)',
        'text-valign': 'center',
        'text-outline-width': 2,
        'text-outline-color': 'data(faveColor)',
        'background-color': 'data(faveColor)',
        'color': '#fff'
      })
    .selector(':selected')
      .css({
        'border-width': 3,
        'border-color': '#333'
      })
    .selector('edge')
      .css({
        'curve-style': 'bezier',
        'opacity': 0.25,
        'width': 'mapData(strength, 70, 100, 2, 6)',
        
        'line-color': 'data(faveColor)',
        'source-arrow-color': 'data(faveColor)',
        'target-arrow-color': 'data(faveColor)'
      })
    .selector('edge.questionable')
      .css({
        'line-style': 'dotted',
        'target-arrow-shape': 'diamond'
      })
    .selector('.faded')
      .css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
  
  elements: {
    nodes: [
      { data: { id: 'p1', name: 'Colors', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p2', name: 'Composers', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p3', name: 'CostDesigners', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p4', name: 'Countries', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p5', name: 'Directors', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p7', name: 'Editors', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p8', name: 'Genres', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p9', name: 'Languages', weight: 40, faveColor: '#6FB1FC'  } },
		{ data: { id: 'p10', name: 'Misc', weight: 40, faveColor: '#6FB1FC'  } },
		{ data: { id: 'p11', name: 'ProdCompanies', weight: 40, faveColor: '#6FB1FC'  } },
		{ data: { id: 'p12', name: 'ProdDesigners', weight: 40, faveColor: '#6FB1FC'  } },
	  { data: { id: 'p13', name: 'Producers', weight: 40, faveColor: '#6FB1FC'  } },
	  { data: { id: 'p14', name: 'Actors', weight: 40, faveColor: '#6FB1FC'  } },
	  { data: { id: 'p15', name: 'Writers', weight: 40, faveColor: '#6FB1FC'  } },
	  { data: { id: 'p16', name: 'CinemaTagers', weight: 40, faveColor: '#6FB1FC'  } },

      { data: { id: 'b1', name: 'Akanames', weight: 60, faveColor: '#EDA1AA'  } },
      { data: { id: 'b2', name: 'Biographies', weight: 60, faveColor: '#EDA1AA'  } },

      { data: { id: 'c', name: 'Movies', weight: 80, faveColor: '#86B342'  } },
      
      { data: { id: 'n1', name: 'Movies2Actors', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n2', name: 'Movies2Cinematagers', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n3', name: 'Movies2Colors', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n4', name: 'Movies2Composers', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n5', name: 'Movies2CostDesigners', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n6', name: 'Movies2Countries', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n7', name: 'Movies2Directors', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n8', name: 'Movies2Editors', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n9', name: 'Movies2Genres', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n10', name: 'Movies2Languages', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n11', name: 'Movies2Misc', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n12', name: 'Movies2ProdCompanies', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n13', name: 'Movies2Producers', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n14', name: 'Movies2ProdDesigners', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n15', name: 'Movies2Writers', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n16', name: 'MpaaRatings', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n17', name: 'Akatitles', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n18', name: 'Altversions', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n19', name: 'Business', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n20', name: 'Ratings', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n21', name: 'ReleaseDates', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n22', name: 'RunningTimes', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n23', name: 'Technical', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n24', name: 'Distributors', weight: 50, faveColor: '#F5A45D' } }
    ],
    edges: [
      { data: { source: 'c', target: 'n1', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n2', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n3', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n4', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n5', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n6', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n7', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n8', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n9', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n10', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n11', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n12', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n13', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n14', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n15', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n16', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n17', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n18', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n19', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n20', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n21', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n22', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n23', faveColor: '#F5A45D' } },
      { data: { source: 'c', target: 'n24', faveColor: '#F5A45D' } },

      { data: { source: 'n1', target: 'p14', faveColor: '#6FB1FC' } },
      { data: { source: 'b1', target: 'p14', faveColor: '#EDA1AA' } },
      { data: { source: 'b2', target: 'p14', faveColor: '#EDA1AA' } },
      
      { data: { source: 'n2', target: 'p16', faveColor: '#6FB1FC' } },
      { data: { source: 'n3', target: 'p1', faveColor: '#6FB1FC' } },
      { data: { source: 'n4', target: 'p2', faveColor: '#6FB1FC' } },
      { data: { source: 'n5', target: 'p3', faveColor: '#6FB1FC' } },
      { data: { source: 'n6', target: 'p4', faveColor: '#6FB1FC' } },
      { data: { source: 'n7', target: 'p5', faveColor: '#6FB1FC' } },
      { data: { source: 'n8', target: 'p7', faveColor: '#6FB1FC' } },
      { data: { source: 'n9', target: 'p8', faveColor: '#6FB1FC' } },
      { data: { source: 'n10', target: 'p9', faveColor: '#6FB1FC' } },
      { data: { source: 'n11', target: 'p10', faveColor: '#6FB1FC' } },
      { data: { source: 'n12', target: 'p11', faveColor: '#6FB1FC' } },
      { data: { source: 'n13', target: 'p13', faveColor: '#6FB1FC' } },
      { data: { source: 'n14', target: 'p12', faveColor: '#6FB1FC' } },
      { data: { source: 'n15', target: 'p15', faveColor: '#6FB1FC' } }
      
    ]
  },
  
  layout: {
    name: 'cose',
    padding: 10
  },
  ready: function(){
    window.cy = this;
    
    // giddy up
  }
});
// you can use qtip's regular options
// see http://qtip2.com/
cy.$('#c').qtip({
  content: 'MovieId<br />\nTitle<br />\nYear',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#b1').qtip({
  content: 'Name<br />\nAkaName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});


cy.$('#b2').qtip({
  content: 'BioId<br />\nName<br />\nBioText',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p1').qtip({
  content: 'Id<br />\nColor',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p2').qtip({
  content: 'Id<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p3').qtip({
  content: 'Id<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p4').qtip({
  content: 'Id<br />\nCountry',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p5').qtip({
  content: 'Id<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p7').qtip({
  content: 'Id<br />\nName',
    position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p8').qtip({
  content: 'Id<br />\nGenre',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p9').qtip({
  content: 'Id<br />\nLanguage',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p10').qtip({
  content: 'Id<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p11').qtip({
  content: 'Id<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p12').qtip({
  content: 'Id<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p13').qtip({
  content: 'Id<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p14').qtip({
  content: 'Id<br />\nName<br />\nSex',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p15').qtip({
  content: 'Id<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#p16').qtip({
  content: 'Id<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});


cy.$('#n1').qtip({
  content: 'MovieId<br />\nActorId<br />\nRole',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n2').qtip({
  content: 'MovieId<br />\nCinemaTagerId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n3').qtip({
  content: 'MovieId<br />\nColorId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n4').qtip({
  content: 'MovieId<br />\nComposerId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n5').qtip({
  content: 'MovieId<br />\nCostDesignerId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n6').qtip({
  content: 'MovieId<br />\nCountryId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n7').qtip({
  content: 'MovieId<br />\nDirectorId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n8').qtip({
  content: 'MovieId<br />\nEditorId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n9').qtip({
  content: 'MovieId<br />\nGenreId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n10').qtip({
  content: 'MovieId<br />\nLanguageId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n11').qtip({
  content: 'MovieId<br />\nMiscId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n12').qtip({
  content: 'MovieId<br />\nProdComanyId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n13').qtip({
  content: 'MovieId<br />\nProducerId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n14').qtip({
  content: 'MovieId<br />\nProdDesignerId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n15').qtip({
  content: 'MovieId<br />\nWriterId',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n16').qtip({
  content: 'MovieId<br />\nRating',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n17').qtip({
  content: 'MovieId<br />\nLanguageId<br />\nTitle',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n18').qtip({
  content: 'MovieId<br />\nVersion',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n19').qtip({
  content: 'MovieId<br />\nBusiness',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n20').qtip({
  content: 'MovieId<br />\nRank<br />\nVotes',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n21').qtip({
  content: 'MovieId<br />\nCountryId<br />\nDate',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n22').qtip({
  content: 'MovieId<br />\nTime',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n23').qtip({
  content: 'MovieId<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});

cy.$('#n24').qtip({
  content: 'MovieId<br />\nName',
  position: {
    my: 'top center',
    at: 'bottom center'
  },
  style: {
    classes: 'qtip-bootstrap',
    tip: {
      width: 16,
      height: 8
    }
  }
});



}); // on dom ready