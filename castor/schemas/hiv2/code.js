$(function(){ // on dom ready

var cy2 = cytoscape({
  
  container: document.getElementById('cy2'),
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
      { data: { id: 'p1', name: 'P2_0', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p2', name: 'P2_1', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p3', name: 'P2_2', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p4', name: 'P2_3', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p5', name: 'P2_4', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p6', name: 'P2_5', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p7', name: 'P2_6', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p8', name: 'P2_7', weight: 40, faveColor: '#6FB1FC'  } },
      { data: { id: 'p9', name: 'P2_8', weight: 40, faveColor: '#6FB1FC'  } },
		{ data: { id: 'p10', name: 'P2_9', weight: 40, faveColor: '#6FB1FC'  } },
		{ data: { id: 'p11', name: 'P2_10', weight: 40, faveColor: '#6FB1FC'  } },
		{ data: { id: 'p12', name: 'P3', weight: 40, faveColor: '#6FB1FC'  } },

      { data: { id: 'b', name: 'Bonds', weight: 60, faveColor: '#EDA1ED'  } },
      { data: { id: 'b1', name: 'BondType1', weight: 45, faveColor: '#EDA1AA'  } },
      { data: { id: 'b2', name: 'BondType2', weight: 45, faveColor: '#EDA1AA'  } },
      { data: { id: 'b3', name: 'BondType3', weight: 45, faveColor: '#EDA1AA'  } },
      { data: { id: 'c', name: 'Compounds', weight: 80, faveColor: '#86B342'  } },
      
      { data: { id: 'n1', name: 'C', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n2', name: 'O', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n3', name: 'N', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n4', name: 'H', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n5', name: 'S', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n6', name: 'F', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n7', name: 'Cl', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n8', name: 'P', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n9', name: 'Br', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n10', name: 'I', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n11', name: 'Na', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n12', name: 'Se', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n13', name: 'Sn', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n14', name: 'Cu', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n15', name: 'Si', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n16', name: 'As', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n17', name: 'B', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n18', name: 'Ge', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n19', name: 'Ac', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n20', name: 'Mg', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n21', name: 'Rh', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n22', name: 'Fe', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n23', name: 'Ru', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n24', name: 'Co', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n25', name: 'Bi', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n26', name: 'Pd', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n27', name: 'Ni', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n28', name: 'Sb', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n29', name: 'Pt', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n30', name: 'Ir', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n31', name: 'Re', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n32', name: 'Mn', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n33', name: 'W', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n34', name: 'Mo', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n35', name: 'Gd', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n36', name: 'Tl', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n37', name: 'Zn', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n38', name: 'Hg', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n39', name: 'Ho', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n40', name: 'Pb', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n41', name: 'Cr', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n42', name: 'Ag', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n43', name: 'Ga', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n44', name: 'Au', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n45', name: 'Li', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n46', name: 'K', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n47', name: 'Cs', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n48', name: 'Nb', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n49', name: 'V', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n50', name: 'Nd', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n51', name: 'Al', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n52', name: 'Zr', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n53', name: 'Te', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n54', name: 'Ti', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n55', name: 'Cd', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n56', name: 'Yb', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n57', name: 'Ca', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n58', name: 'U', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n59', name: 'Er', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n60', name: 'Pr', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n61', name: 'Sm', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n62', name: 'Os', weight: 50, faveColor: '#F5A45D' } },
      { data: { id: 'n63', name: 'Tb', weight: 50, faveColor: '#F5A45D' } }
    ],
    edges: [
      { data: { source: 'c', target: 'n1', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n2', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n3', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n4', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n5', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n6', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n7', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n8', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n9', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n10', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n11', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n12', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n13', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n14', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n15', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n16', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n17', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n18', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n19', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n20', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n21', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n22', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n23', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n24', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n25', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n26', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n27', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n28', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n29', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n30', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n31', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n32', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n33', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n34', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n35', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n36', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n37', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n38', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n39', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n40', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n41', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n42', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n43', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n44', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n45', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n46', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n47', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n48', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n49', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n50', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n51', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n52', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n53', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n54', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n55', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n56', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n57', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n58', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n59', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n60', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n61', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n62', faveColor: '#86B342' } },
      { data: { source: 'c', target: 'n63', faveColor: '#86B342' } },

      { data: { source: 'b', target: 'n1', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n2', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n3', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n4', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n5', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n6', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n7', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n8', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n9', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n10', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n11', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n12', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n13', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n14', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n15', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n16', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n17', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n18', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n19', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n20', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n21', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n22', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n23', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n24', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n25', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n26', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n27', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n28', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n29', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n30', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n31', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n32', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n33', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n34', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n35', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n36', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n37', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n38', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n39', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n40', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n41', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n42', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n43', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n44', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n45', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n46', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n47', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n48', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n49', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n50', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n51', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n52', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n53', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n54', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n55', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n56', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n57', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n58', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n59', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n60', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n61', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n62', faveColor: '#EDA1ED' } },
      { data: { source: 'b', target: 'n63', faveColor: '#EDA1ED' } },
      
      { data: { source: 'b', target: 'b1', faveColor: '#EDA1AA' } },
      { data: { source: 'b', target: 'b2', faveColor: '#EDA1AA' } },
      { data: { source: 'b', target: 'b3', faveColor: '#EDA1AA' } },
      
      { data: { source: 'c', target: 'p1', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p2', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p3', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p4', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p5', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p6', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p7', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p8', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p9', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p10', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p11', faveColor: '#6FB1FC' } },
      { data: { source: 'c', target: 'p12', faveColor: '#6FB1FC' } },

    ]
  },
  
  layout: {
    name: 'cose',
    padding: 10
  },
  ready: function(){
    window.cy2 = this;
    
    // giddy up
  }
});
// you can use qtip's regular options
// see http://qtip2.com/
cy2.$('#c').qtip({
  content: 'Compound<br />\nAtom',
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

for (i = 1; i < 64; i++) { 
    num = '#n'+i;

cy2.$(num).qtip({
  content: 'Atom',
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
}
 
cy2.$('#b').qtip({
  content: 'Bond<br />\nAtom<br />\nAtom',
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
 
for (i = 1; i < 13; i++) { 
    num = '#p'+i;

cy2.$(num).qtip({
  content: 'Atom',
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
} 

for (i = 1; i < 4; i++) { 
    num = '#b'+i;

cy2.$(num).qtip({
  content: 'Bond<br />\nType',
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
} 


}); // on dom ready