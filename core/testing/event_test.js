goog.require('X.base');
goog.require('X.event');
goog.require('X.event.events');
goog.require('X.event.ZoomEvent');
goog.require('X.event.RotateEvent');
goog.require('X.event.PanEvent');
goog.require('X.event.RenderEvent');
goog.require('X.event.HoverEvent');
goog.require('X.event.HoverEndEvent');
goog.require('X.event.ResetViewEvent');
goog.require('X.event.ModifiedEvent');
goog.require('goog.testing.jsunit');

/**
 * Test for X.event.className
 */
function testXeventClassName() {

  // create test event
  var e = new X.event('test');
  
  assertEquals(e['className'], 'event');
  
}

/**
 * Test for X.event.uniqueId
 */
function testXeventUniqueId() {

  var id = "abcdef";
  
  // transform to unique string
  var uniqueStr = X.event.uniqueId(id);
  var uniqueStr2 = X.event.uniqueId(id);
  
  assertNotEquals(id, uniqueStr);
  assertNotEquals(id, uniqueStr2);
  assertNotEquals(uniqueStr, uniqueStr2);
  
}

/**
 * Test the X.event.PanEvent
 */
function testXeventPanEvent() {

  // create new pan events
  var pe = new X.event.PanEvent();
  var pe2 = new X.event.PanEvent();
  
  // .. should be always the same type
  assertEquals(pe.type, pe2.type);
  
  // assign a distance
  var _x = 1;
  var _y = 2;
  pe.distance = new goog.math.Vec2(_x, _y);
  
  // check the distances..
  
  // the default distance should always be 0,0
  assertEquals(pe2.distance.x, 0);
  assertEquals(pe2.distance.y, 0);
  
  // .. test for the custom distance
  assertEquals(pe.distance.x, _x);
  assertEquals(pe.distance.y, _y);
  
}

/**
 * Test the X.event.RotateEvent
 */
function testXeventRotateEvent() {

  // create new pan events
  var re = new X.event.RotateEvent();
  var re2 = new X.event.RotateEvent();
  
  // .. should be always the same type
  assertEquals(re.type, re2.type);
  
  // assign a distance
  var _x = 1;
  var _y = 2;
  re.distance = new goog.math.Vec2(_x, _y);
  
  // check the distances..
  
  // the default distance should always be 0,0
  assertEquals(re2.distance.x, 0);
  assertEquals(re2.distance.y, 0);
  
  // .. test for the custom distance
  assertEquals(re.distance.x, _x);
  assertEquals(re.distance.y, _y);
  
  // assign an angle
  var _angle = 15;
  re2.angle = _angle;
  
  // check it
  assertEquals(re.angle, 0); // default
  assertEquals(re2.angle, 15);
  
}

/**
 * Test the X.event.ZoomEvent
 */
function testXeventZoomEvent() {

  // create new pan events
  var ze = new X.event.ZoomEvent();
  var ze2 = new X.event.ZoomEvent();
  
  // .. should be always the same type
  assertEquals(ze.type, ze2.type);
  
  // set some properties
  var _in = true;
  var _in2 = false;
  var _fast = false;
  var _fast2 = true;
  
  ze.in = _in;
  ze2.in = _in2;
  ze.fast = _fast;
  ze2.fast = _fast2;
  
  // check the assignments
  assertTrue(ze.in);
  assertFalse(ze2.in);
  assertFalse(ze.fast);
  assertTrue(ze2.fast);
  
}

/**
 * Test the X.event.RenderEvent
 */
function testXeventRenderEvent() {

  // create new pan events
  var re = new X.event.RenderEvent();
  var re2 = new X.event.RenderEvent();
  
  // .. should be always the same type
  assertEquals(re.type, re2.type);
  
}

/**
 * Test the X.event.HoverEvent
 */
function testXeventHoverEvent() {

  // create new pan events
  var he = new X.event.HoverEvent();
  var he2 = new X.event.HoverEvent();
  
  // .. should be always the same type
  assertEquals(he.type, he2.type);
  
  // assign coordinates
  var _x = 1;
  var _y = 2;
  he.x = _x;
  he.y = _y;
  
  // check the coordinates
  assertEquals(he.x, _x);
  assertEquals(he.y, _y);
  assertEquals(he2.x, 0); // default
  assertEquals(he2.y, 0); // default
  
}

/**
 * Test the X.event.HoverEndEvent
 */
function testXeventHoverEndEvent() {

  // create new pan events
  var hee = new X.event.HoverEndEvent();
  var hee2 = new X.event.HoverEndEvent();
  
  // .. should be always the same type
  assertEquals(hee.type, hee2.type);
  
}


/**
 * Test the X.event.ResetViewEvent
 */
function testXeventResetViewEvent() {

  // create new pan events
  var rve = new X.event.ResetViewEvent();
  var rve2 = new X.event.ResetViewEvent();
  
  // .. should be always the same type
  assertEquals(rve.type, rve2.type);
  
}

/**
 * Test the X.event.ModifiedEvent
 */
function testXeventModifiedEvent() {

  // create new pan events
  var me = new X.event.ModifiedEvent();
  var me2 = new X.event.ModifiedEvent();
  
  // .. should be always the same type
  assertEquals(me.type, me2.type);
  
  // check the className of the associated object
  assertEquals(me.object.className, 'object');
  

}

/**
 * Test the X.event.ProgressEvent
 */
function testXeventProgressEvent() {

  // create new pan events
  var pe = new X.event.ProgressEvent();
  var pe2 = new X.event.ProgressEvent();
  
  // .. should be always the same type
  assertEquals(pe.type, pe2.type);
  
  // assign a value
  var _value = 0.8;
  pe2.value = _value;
  
  // check it
  assertEquals(pe.value, 0);
  assertEquals(pe2.value, _value);
  
}
