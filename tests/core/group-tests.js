module( "Group", {
    teardown: function() {
      document.getElementById('group').innerHTML = '';
    }
});


test( "group select", function() {
  var svg = d3.select('#group').append('svg'),
      el = svg.append('g');
      
  equal(svg.select('g').length, 1);
});

test( "group transform before", function() {
  var svg = d3.select('#group').append('svg'),
      g = svg.append('g');
      
  g.attr('transform', 'translate(10,10)');
  
  var rect = g.append('rect').attr({ 'x': 0, 'y': 0, 'width': 1, 'height': 1 });
  
  var bbox = rect.node().getBBox();
  equal(bbox.x, 10)
  equal(bbox.y, 10)
});

test( "group transform after", function() {
  var svg = d3.select('#group').append('svg'),
      g = svg.append('g');
      
  var rect = g.append('rect').attr({ 'x': 0, 'y': 0, 'width': 1, 'height': 1 });
  g.attr('transform', 'translate(10,10)');
  
  var bbox = rect.node().getBBox();
  equal(bbox.x, 10)
  equal(bbox.y, 10)
});

test( "nested group transform before", function() {
  var svg = d3.select('#group').append('svg'),
      g = svg.append('g'),
      g2 = g.append('g');
  
  g.attr('transform', 'translate(10,10)');
  g2.attr('transform', 'translate(5,5)');
      
  var rect = g2.append('rect').attr({ 'x': 0, 'y': 0, 'width': 1, 'height': 1 });
  
  var bbox = rect.node().getBBox();
  equal(bbox.x, 15)
  equal(bbox.y, 15)
});


test( "nested group transform after", function() {
  var svg = d3.select('#group').append('svg'),
      g = svg.append('g'),
      g2 = g.append('g');
      
  var rect = g2.append('rect').attr({ 'x': 0, 'y': 0, 'width': 1, 'height': 1 });
  
  g.attr('transform', 'translate(10,10)');
  g2.attr('transform', 'translate(5,5)');
  
  
  var bbox = rect.node().getBBox();
  equal(bbox.x, 15)
  equal(bbox.y, 15)
});

