$(function(){ // on dom ready

// photos from flickr with creative commons license
  
var cy = cytoscape({
  container: document.getElementById('learnTabSchema1'),
  
  boxSelectionEnabled: false,
  autounselectify: true,
  
  style: cytoscape.stylesheet()
    .selector('node')
      .css({
      'shape': 'rectangle',
        'background-fit': 'contain',
        'border-color': '#000',
        'border-width': 0.1,
        'border-opacity': 0.5
      })
    .selector('edge')
      .css({
        'width': 1,
        'line-color': '#ffaaaa',
        'target-arrow-color': '#ffaaaa',
        'target-arrow-shape': 'diamond',
        'curve-style': 'bezier'
      })
      .selector('$node > node')
      .css({
        'background-color': '#D9FFFF',
      'background-opacity': 0.2
      })
      
    .selector('#compounds')
      .css({
   'height': 30,
   'width': 40,
        'background-image': 'http://i.imgur.com/vYlLdJK.jpg'
      })
    .selector('#p1')
      .css({
      })
    .selector('#bonds')
      .css({
   'height': 35,
   'width': 27.5,
        'background-image': 'http://i.imgur.com/kXcb1Tr.png'
      })
    .selector('#bondtypes1')
      .css({
   'height': 30,
   'width': 42.5,
        'background-image': 'http://i.imgur.com/S6xekDx.png'
      })
  .selector('#bondtypes2')
      .css({
   'height': 30,
   'width': 42.5,
        'background-image': 'http://i.imgur.com/mu61bWA.png'
      })
  .selector('#bondtypes3')
      .css({
   'height': 30,
   'width': 42.5,
        'background-image': 'http://i.imgur.com/mV8IPiC.png'
      })
  .selector('#hivactivepos')
      .css({
   'height': 10,
   'width': 40,
        'background-image': 'http://i.imgur.com/vTIJ11L.png'
      })
  .selector('#hivactiveneg')
      .css({
   'height': 10,
   'width': 40,
        'background-image': 'http://i.imgur.com/jEAIgo7.png'
      })
  .selector('#n1')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/u9QygtF.png'
      })
  .selector('#n2')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/7UHfLai.png'
      })
  .selector('#n3')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/hNbdKtC.png'
      })
      .selector('#n4')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/7lwQGkN.png'
      })
      .selector('#n5')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/COf3pj3.png'
      })
      .selector('#n6')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/k7N451l.png'
      })
      .selector('#n7')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/4MZactY.png'
      })
      .selector('#n8')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/oHZSL0F.png'
      })
      .selector('#n9')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/qQs6uDR.png'
      })
      .selector('#n10')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/bF8fWJV.png'
      })
      .selector('#n11')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/lyCLgYi.png'
      })
      .selector('#n12')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/35ZsKwR.png'
      })
      .selector('#n13')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/9R1y43i.png'
      })
      .selector('#n14')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/Dh519eI.png'
      })
      .selector('#n15')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/00fbtD9.png'
      })
      .selector('#n16')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/kn0sNB0.png'
      })
      .selector('#n17')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/E9QcWm5.png'
      })
      .selector('#n18')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/I68SdWw.png'
      })
      .selector('#n19')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/uu3J9Rc.png'
      })
      .selector('#n20')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/juT3IlY.png'
      })
      .selector('#n21')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/p7dHse1.png'
      })
      .selector('#n22')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/pwtoZy4.png'
      })
      .selector('#n23')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/3axZzPe.png'
      })
      .selector('#n24')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/QED5Ci7.png'
      })
      .selector('#n25')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/mBdjQ4S.png'
      })
      .selector('#n26')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/Pp6cPxA.png'
      })
      .selector('#n27')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/Ka12XlW.png'
      })
      .selector('#n28')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/9wsAnjO.png'
      })
      .selector('#n29')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/UuJQPzT.png'
      })
      .selector('#n30')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/eLatxq5.png'
      })
      .selector('#n31')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/8PAWGH9.png'
      })
      .selector('#n32')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/HiAvzKn.png'
      })
      .selector('#n33')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/encEXyb.png'
      })
      .selector('#n34')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/0dFWbcl.png'
      })
      .selector('#n35')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/dM2loRs.png'
      })
      .selector('#n36')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/DipyYcp.png'
      })
      .selector('#n37')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/ygG3Sjn.png'
      })
      .selector('#n38')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/Acp8dDq.png'
      })
      .selector('#n39')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/eoO9ZDi.png'
      })
      .selector('#n40')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/sR15NNS.png'
      })
      .selector('#n41')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/y3gaXey.png'
      })
      .selector('#n42')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/YTWVzNr.png'
      })
      .selector('#n43')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/afqujR5.png'
      })
      .selector('#n44')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/oyNN4Pg.png'
      })
      .selector('#n45')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/DlBNJq5.png'
      })
      .selector('#n46')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/vkFw2V2.png'
      })
      .selector('#n47')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/NMcfVFy.png'
      })
      .selector('#n48')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/SzTQAgl.png'
      })
      .selector('#n49')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/9xLnviY.png'
      })
      .selector('#n50')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/jexyN9O.png'
      })
      .selector('#n51')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/fzVqEme.png'
      })
      .selector('#n52')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/TzJSlJn.png'
      })
      .selector('#n53')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/kUSNOSN.png'
      })
      .selector('#n54')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/LUGzH6a.png'
      })
      .selector('#n55')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/78ImU5n.png'
      })
      .selector('#n56')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/gvffjLy.png'
      })
      .selector('#n57')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/xuVPRZM.png'
      })
      .selector('#n58')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/CRnE2uH.png'
      })
      .selector('#n59')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/Q2Vsenf.png'
      })
      .selector('#n60')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/GUVh9yB.png'
      })
      .selector('#n61')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/wpRZ4JW.png'
      })
      .selector('#n62')
      .css({
   'height': 14,
   'width': 40,
        'background-image': 'http://i.imgur.com/mjg1HL1.png'
      }),





  
  elements: {
    nodes: [
      { data: { id: 'compounds' } },
      { data: { id: 'bonds' } },
      { data: { id: 'bondtypes1' } },
      { data: { id: 'bondtypes2' } },
      { data: { id: 'bondtypes3' } },
      { data: { id: 'hivactivepos' } },
      { data: { id: 'hivactiveneg' } },
      { data: { id: 'n1' } },
      { data: { id: 'n2' } },
      { data: { id: 'n3' } },
      { data: { id: 'n4' } },
      { data: { id: 'n5' } },
      { data: { id: 'n6' } },
      { data: { id: 'n7' } },
      { data: { id: 'n8' } },
      { data: { id: 'n9' } },
      { data: { id: 'n10' } },
      { data: { id: 'n11' } },
      { data: { id: 'n12' } },
      { data: { id: 'n13' } },
      { data: { id: 'n14' } },
      { data: { id: 'n15' } },
      { data: { id: 'n16' } },
      { data: { id: 'n17' } },
      { data: { id: 'n18' } },
      { data: { id: 'n19' } },
      { data: { id: 'n20' } },
      { data: { id: 'n21' } },
      { data: { id: 'n22' } },
      { data: { id: 'n23' } },
      { data: { id: 'n24' } },
      { data: { id: 'n25' } },
      { data: { id: 'n26' } },
      { data: { id: 'n27' } },
      { data: { id: 'n28' } },
      { data: { id: 'n29' } },
      { data: { id: 'n30' } },
      { data: { id: 'n31' } },
      { data: { id: 'n32' } },
      { data: { id: 'n33' } },
      { data: { id: 'n34' } },
      { data: { id: 'n35' } },
      { data: { id: 'n36' } },
      { data: { id: 'n37' } },
      { data: { id: 'n38' } },
      { data: { id: 'n39' } },
      { data: { id: 'n40' } },
      { data: { id: 'n41' } },
      { data: { id: 'n42' } },
      { data: { id: 'n43' } },
      { data: { id: 'n44' } },
      { data: { id: 'n45' } },
      { data: { id: 'n46' } },
      { data: { id: 'n47' } },
      { data: { id: 'n48' } },
      { data: { id: 'n49' } },
      { data: { id: 'n50' } },
      { data: { id: 'n51' } },
      { data: { id: 'n52' } },
      { data: { id: 'n53' } },
      { data: { id: 'n54' } },
      { data: { id: 'n55' } },
      { data: { id: 'n56' } },
      { data: { id: 'n57' } },
      { data: { id: 'n58' } },
      { data: { id: 'n59' } },
      { data: { id: 'n60' } },
      { data: { id: 'n61' } },
      { data: { id: 'n62' } }
      
    ],
    edges: [
      { data: { source: 'compounds', target: 'bonds' } },
      { data: { source: 'compounds', target: 'hivactivepos' } },
      { data: { source: 'compounds', target: 'hivactiveneg' } },
      // { data: { source: 'bonds', target: 'n1' } },
      // { data: { source: 'bonds', target: 'n2' } },
      // { data: { source: 'bonds', target: 'n3' } },
      // { data: { source: 'bonds', target: 'n4' } },
      // { data: { source: 'bonds', target: 'n5' } },
      // { data: { source: 'bonds', target: 'n6' } },
      // { data: { source: 'bonds', target: 'n7' } },
      // { data: { source: 'bonds', target: 'n8' } },
      // { data: { source: 'bonds', target: 'n9' } },
      // { data: { source: 'bonds', target: 'n10' } },
      { data: { source: 'compounds', target: 'n1' } },
      { data: { source: 'compounds', target: 'n2' } },
      { data: { source: 'compounds', target: 'n3' } },
      { data: { source: 'compounds', target: 'n4' } },
      { data: { source: 'compounds', target: 'n5' } },
      { data: { source: 'compounds', target: 'n6' } },
      { data: { source: 'compounds', target: 'n7' } },
      { data: { source: 'compounds', target: 'n8' } },
      { data: { source: 'compounds', target: 'n9' } },
      { data: { source: 'compounds', target: 'n10' } },
      // { data: { source: 'bonds', target: 'n11' } },
      // { data: { source: 'bonds', target: 'n12' } },
      // { data: { source: 'bonds', target: 'n13' } },
      // { data: { source: 'bonds', target: 'n14' } },
      // { data: { source: 'bonds', target: 'n15' } },
      // { data: { source: 'bonds', target: 'n16' } },
      // { data: { source: 'bonds', target: 'n17' } },
      // { data: { source: 'bonds', target: 'n18' } },
      // { data: { source: 'bonds', target: 'n19' } },
      // { data: { source: 'bonds', target: 'n20' } },
      { data: { source: 'compounds', target: 'n11' } },
      { data: { source: 'compounds', target: 'n12' } },
      { data: { source: 'compounds', target: 'n13' } },
      { data: { source: 'compounds', target: 'n14' } },
      { data: { source: 'compounds', target: 'n15' } },
      { data: { source: 'compounds', target: 'n16' } },
      { data: { source: 'compounds', target: 'n17' } },
      { data: { source: 'compounds', target: 'n18' } },
      { data: { source: 'compounds', target: 'n19' } },
      { data: { source: 'compounds', target: 'n20' } },
      // { data: { source: 'bonds', target: 'n21' } },
      // { data: { source: 'bonds', target: 'n22' } },
      // { data: { source: 'bonds', target: 'n23' } },
      // { data: { source: 'bonds', target: 'n24' } },
      // { data: { source: 'bonds', target: 'n25' } },
      // { data: { source: 'bonds', target: 'n26' } },
      // { data: { source: 'bonds', target: 'n27' } },
      // { data: { source: 'bonds', target: 'n28' } },
      // { data: { source: 'bonds', target: 'n29' } },
      // { data: { source: 'bonds', target: 'n30' } },
      { data: { source: 'compounds', target: 'n21' } },
      { data: { source: 'compounds', target: 'n22' } },
      { data: { source: 'compounds', target: 'n23' } },
      { data: { source: 'compounds', target: 'n24' } },
      { data: { source: 'compounds', target: 'n25' } },
      { data: { source: 'compounds', target: 'n26' } },
      { data: { source: 'compounds', target: 'n27' } },
      { data: { source: 'compounds', target: 'n28' } },
      { data: { source: 'compounds', target: 'n29' } },
      { data: { source: 'compounds', target: 'n30' } },
      // { data: { source: 'bonds', target: 'n31' } },
      // { data: { source: 'bonds', target: 'n32' } },
      // { data: { source: 'bonds', target: 'n33' } },
      // { data: { source: 'bonds', target: 'n34' } },
      // { data: { source: 'bonds', target: 'n35' } },
      // { data: { source: 'bonds', target: 'n36' } },
      // { data: { source: 'bonds', target: 'n37' } },
      // { data: { source: 'bonds', target: 'n38' } },
      // { data: { source: 'bonds', target: 'n39' } },
      // { data: { source: 'bonds', target: 'n40' } },
      { data: { source: 'compounds', target: 'n31' } },
      { data: { source: 'compounds', target: 'n32' } },
      { data: { source: 'compounds', target: 'n33' } },
      { data: { source: 'compounds', target: 'n34' } },
      { data: { source: 'compounds', target: 'n35' } },
      { data: { source: 'compounds', target: 'n36' } },
      { data: { source: 'compounds', target: 'n37' } },
      { data: { source: 'compounds', target: 'n38' } },
      { data: { source: 'compounds', target: 'n39' } },
      { data: { source: 'compounds', target: 'n40' } },
      // { data: { source: 'bonds', target: 'n41' } },
      // { data: { source: 'bonds', target: 'n42' } },
      // { data: { source: 'bonds', target: 'n43' } },
      // { data: { source: 'bonds', target: 'n44' } },
      // { data: { source: 'bonds', target: 'n45' } },
      // { data: { source: 'bonds', target: 'n46' } },
      // { data: { source: 'bonds', target: 'n47' } },
      // { data: { source: 'bonds', target: 'n48' } },
      // { data: { source: 'bonds', target: 'n49' } },
      // { data: { source: 'bonds', target: 'n50' } },
      { data: { source: 'compounds', target: 'n41' } },
      { data: { source: 'compounds', target: 'n42' } },
      { data: { source: 'compounds', target: 'n43' } },
      { data: { source: 'compounds', target: 'n44' } },
      { data: { source: 'compounds', target: 'n45' } },
      { data: { source: 'compounds', target: 'n46' } },
      { data: { source: 'compounds', target: 'n47' } },
      { data: { source: 'compounds', target: 'n48' } },
      { data: { source: 'compounds', target: 'n49' } },
      { data: { source: 'compounds', target: 'n50' } },
      // { data: { source: 'bonds', target: 'n51' } },
      // { data: { source: 'bonds', target: 'n52' } },
      // { data: { source: 'bonds', target: 'n53' } },
      // { data: { source: 'bonds', target: 'n54' } },
      // { data: { source: 'bonds', target: 'n55' } },
      // { data: { source: 'bonds', target: 'n56' } },
      // { data: { source: 'bonds', target: 'n57' } },
      // { data: { source: 'bonds', target: 'n58' } },
      // { data: { source: 'bonds', target: 'n59' } },
      // { data: { source: 'bonds', target: 'n60' } },
      { data: { source: 'compounds', target: 'n51' } },
      { data: { source: 'compounds', target: 'n52' } },
      { data: { source: 'compounds', target: 'n53' } },
      { data: { source: 'compounds', target: 'n54' } },
      { data: { source: 'compounds', target: 'n55' } },
      { data: { source: 'compounds', target: 'n56' } },
      { data: { source: 'compounds', target: 'n57' } },
      { data: { source: 'compounds', target: 'n58' } },
      { data: { source: 'compounds', target: 'n59' } },
      { data: { source: 'compounds', target: 'n60' } },
      // { data: { source: 'bonds', target: 'n61' } },
      // { data: { source: 'bonds', target: 'n62' } },
      { data: { source: 'compounds', target: 'n61' } },
      { data: { source: 'compounds', target: 'n62' } },
      { data: { source: 'bonds', target: 'bondtypes1' } },
      { data: { source: 'bonds', target: 'bondtypes2' } },
      { data: { source: 'bonds', target: 'bondtypes3' } }
    ]
  },
  
  layout: {
    name: 'cose',
    directed: true,
    padding: 10
  }
}); // cy init
  

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var target = $(e.target).attr("href") // activated tab
      if (target == "#learnTab") {
        cy.resize(); 
        cy.layout({
          name: 'cose',
          directed: true,
          padding: 10
        });
      }
    });  

}); // on dom ready