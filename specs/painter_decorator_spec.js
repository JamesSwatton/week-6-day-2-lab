const assert = require('assert');
const Decorator = require('../models/decorator.js');
const Paint = require('../models/paint.js');
const Room = require('../models/room.js');

describe('Room', function() {

  let room;

  beforeEach(function() {
    room = new Room(40, false);
  });

  it('should have an area', function() {
    const actual = room.area;
    assert.strictEqual(actual, 40)
  })

  it('should start not painted', function() {
    const actual = room.painted;
    assert.strictEqual(actual, false)
  })

  it('should be able to be painted', function() {
    room.paint_room();
    const actual = room.painted
    assert.strictEqual(actual, true)
  })
})



describe('Paint', function() {

  let paint;

  beforeEach(function () {
    paint = new Paint(10)
  })

  it('should have litres of paint', function() {
    const actual = paint.litres;
    assert.strictEqual(actual, 10)
  })

  it('should check if it is empty', function() {
    const actual = paint.check_is_empty();
    assert.strictEqual(actual, false)
  })

  it('should be able to empty itself', function() {
    paint.empty();
    const actual = paint.litres;
    assert.strictEqual(actual, 0)
  })
})


describe('Decorator', function() {

  let decorator;

  beforeEach(function() {
    paint1 = new Paint(10);
    paint2 = new Paint(20);
    room = new Room(30);
    decorator = new Decorator();
  })

  it('should start with empty stock', function() {
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [])
  })

  it('should be able to add a can of paint', function() {
    decorator.add_paint_to_stock(paint1);
    const actual = decorator.stock.length;
    assert.strictEqual(actual, 1)
  })

  it('should be able to calculate total litres of paint in stock', function() {
    decorator.add_paint_to_stock(paint1);
    decorator.add_paint_to_stock(paint2);
    const actual = decorator.litres_total()
    assert.strictEqual(actual, 30)
  })

  it('has enough paint to paint a room', function() {
    decorator.add_paint_to_stock(paint1);
    decorator.add_paint_to_stock(paint2);
    const actual = decorator.can_paint_room(room);
    assert.strictEqual(actual, true)
  })
})
