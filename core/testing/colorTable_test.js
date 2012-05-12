goog.require('X.base');
goog.require('X.colorTable');
goog.require('goog.testing.jsunit');
goog.require('goog.asserts');

/**
 * Test for X.colorTable.className
 */
function testXcolorTableClassName() {

  c = new X.colorTable();
  
  assertEquals(c.className, 'colorTable');
  
}

/**
 * Test for X.colorTable.id to test uniqueness.
 */
function testXcolorTableId() {

  var counter = window["X.Counter"];
  var oldValue = counter.value();
  
  var c = new X.colorTable();
  
  // the counter should be increased by 1
  var newValue = counter.value();
  
  assertEquals(newValue, oldValue + 1);
  
}

/**
 * Test for X.colorTable.add
 */
function testXcolorTableAdd() {

  var c = new X.colorTable();
  
  // define an example color table entry
  var colorValue = 0;
  var colorLabel = "Label value 0";
  var colorR = 255;
  var colorG = 254;
  var colorB = 253;
  var colorA = 128;
  
  // add the example color
  c.add(colorValue, colorLabel, colorR, colorG, colorB, colorA);
  
  // .. now grab the entry using the colorValue
  var returnedColor = c._map.get(colorValue);
  
  assertEquals(returnedColor[0], colorLabel);
  assertEquals(returnedColor[1], colorR);
  assertEquals(returnedColor[2], colorG);
  assertEquals(returnedColor[3], colorB);
  assertEquals(returnedColor[4], colorA);
  
}
