( function (){
    window.Asteroids = window.Asteroids || {};

    var Bullet = Asteroids.Bullet = function(){
      this.radius = Bullet.RADIUS;
      this.color = Bullet.COLOR;
    };

    Bullet.RADIUS = 3;
    Bullet.COLOR = "#00ff00";

    Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

    Bullet.prototype.collideWith = function(otherObject){
      if (otherObject instanceof Asteroids.Asteroid){
        this.game.remove(otherObject);
      };
    };

    Bullet.prototype.move = function (){
      var newX = this.pos[0] + this.vel[0];
      var newY = this.pos[1] + this.vel[1];
      this.pos = [newX, newY];
    };

})();
