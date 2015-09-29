( function (){
    window.Asteroids = window.Asteroids || {};

    var MovingObject = window.Asteroids.MovingObject = function (args){
      this.pos = args.pos;
      this.vel = args.vel;
      this.radius = args.radius;
      this.color = args.color;
      this.game = args.game;
    };

    MovingObject.prototype.draw = function (ctx) {
      // ctx.clearRect(0, 0, this.xDim, this.yDim);
      ctx.fillStyle = this.color;
      ctx.beginPath();

      ctx.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2 * Math.PI,
        false
      );

      ctx.fill();
    };

    MovingObject.prototype.move = function (){
      var newX = this.pos[0] + this.vel[0];
      var newY = this.pos[1] + this.vel[1];
      this.pos = this.game.wrap([newX, newY]);
    };

    MovingObject.prototype.isCollidedWith = function (otherObject) {
      var xDist = this.pos[0] - otherObject.pos[0];
      var yDist = this.pos[1] - otherObject.pos[1];
      var distance = Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));

      return distance <= (this.radius + otherObject.radius);
    };

    MovingObject.prototype.collideWith = function(otherObject) {
      // [this, otherObject].forEach( this.game.remove, this.game );
      // second arg to forEach === bind(this.game)
    };

})();
