const Paint = function(litres) {
  this.litres = litres;
}

Paint.prototype.check_is_empty = function() {
  if (this.litres === 0) {
    return true;
  }
  return false;
}

Paint.prototype.empty = function () {
  this.litres = 0;
}

module.exports = Paint;
