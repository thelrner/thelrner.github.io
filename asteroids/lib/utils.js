( function (){
  window.Asteroids = window.Asteroids || {};

  Asteroids.Util = function() {};

  Asteroids.Util.inherits = function(childClass, parentClass) {
    function Surrogate() {};
    Surrogate.prototype = parentClass.prototype;
    childClass.prototype = new Surrogate();
  };

  // all objects move same velocity, just diff dir
  Asteroids.Util.randomVec = function(length){
    var x = Math.random() * length
    var y = Math.sqrt(Math.pow(length, 2) - Math.pow(x, 2));

    return [this.randomDir() * x, this.randomDir() * y];
  };

  Asteroids.Util.randomDir = function() {
    return Math.random() < 0.5 ? -1 : 1;
  };

})();
