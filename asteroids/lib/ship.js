( function (){
    window.Asteroids = window.Asteroids || {};

    var Ship = Asteroids.Ship = function(args) {
      Asteroids.MovingObject.call(this, args);
      this.vel = [0,0];
      this.radius = Ship.RADIUS;
      this.color = Ship.COLOR;
      this.image = document.createElement("img");
      this.image.src = ("ship.png");
    };
    Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

    Ship.RADIUS = 25;
    Ship.COLOR = "#e36c66";

    Ship.prototype.relocate = function(){
      this.pos = this.game.randomPosition().pos;
      this.vel = [0, 0];
    };

    Ship.prototype.draw = function(ctx){
      ctx.drawImage(this.image, this.pos[0] - 25, this.pos[1], 50, 50);
    };

    Ship.prototype.power = function(impulse){
      switch (impulse) {
        case "left":
          this.vel = [this.vel[0] - 1, this.vel[1]];
          break;
        case "right":
          this.vel = [this.vel[0] + 1, this.vel[1]];
          break;
        case "up":
          this.vel = [this.vel[0], this.vel[1] - 1];
          break;
        case "down":
          this.vel = [this.vel[0], this.vel[1] + 1];
          break;
        default:
          break;
      };
    };

    Ship.prototype.fireBullet = function(){
      var bullet = new Asteroids.Bullet();
      if (this.vel[0] === 0 && this.vel[1] === 0) {
        bullet.vel = [0, -3];
      } else {
        bullet.vel = this.vel.slice();
      };
      bullet.pos = this.pos.slice();
      bullet.game = this.game;
      this.game.bullets.push(bullet);
    };
})();
