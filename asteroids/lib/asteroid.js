( function (){
    window.Asteroids = window.Asteroids || {};

    var Asteroid = window.Asteroids.Asteroid = function (args){
      Asteroids.MovingObject.call(this, args);
      this.color = Asteroid.COLOR;
      this.radius = Asteroid.RADIUS;
      this.vel = Asteroids.Util.randomVec(5);
      this.image = document.createElement("img");
      this.image.src = ("asteroid.png");
    };

    Asteroid.COLOR = "#000";
    Asteroid.RADIUS = 50;

    Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

    Asteroid.prototype.draw = function(ctx){
      ctx.drawImage(this.image, this.pos[0] - 50, this.pos[1] - 50, 100, 100);
    };

    Asteroid.prototype.collideWith = function(otherObject){
      if (otherObject instanceof Asteroids.Ship){
        console.log("Collide with ship!!!!!!!!")
        otherObject.relocate();
      };
    };

})();
