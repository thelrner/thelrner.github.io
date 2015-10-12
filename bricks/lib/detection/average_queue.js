(function() {
  window.Bricks = window.Bricks || {};

  var AverageQueue = Bricks.AverageQueue = function(size) {
    this.currQueue = [];
    this.avgArr = undefined;
    this.maxSize = size;
  };

  AverageQueue.prototype.enqueue = function(array) {
    if (this.currQueue.length !== this.maxSize) {
      this.currQueue.push(array);
      this.avgArr = array;
    } else {
      this.currQueue.push(array);
      this.addToAverages(array);
      this.dequeue();         //automatic dequeue
    }
    return this;
  };

  AverageQueue.prototype.dequeue = function() {
    var array = this.currQueue.shift();
    this.removeFromAverages(array);
    return array;
  };

  AverageQueue.prototype.addToAverages = function(array) {
    for (var i = 0; i < array.length; i++) {
      this.avgArr[i] += (array[i] / this.maxSize);
    };
    this.avgProd
  };

  AverageQueue.prototype.removeFromAverages = function(array) {
    for (var i = 0; i < array.length; i++) {
      this.avgArr[i] -= (array[i] / this.maxSize);
    }
  };

  AverageQueue.prototype.avgArrProps = function() {
    return this.avgArr;
  };
}() );
