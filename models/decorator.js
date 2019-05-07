const Decorator = function() {
  this.stock = [];
}

Decorator.prototype.add_paint_to_stock = function(paint) {
  this.stock.push(paint)
}

Decorator.prototype.litres_total = function() {
  total = 0;
  for (paint of this.stock) {
    total += paint.litres;
  }
  return total;
}

Decorator.prototype.can_paint_room = function(room) {
  if (this.litres_total() >= room.area) {
    return true;
  }
  return false;
}

module.exports = Decorator;
