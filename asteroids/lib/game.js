( function (){
    window.Asteroids = window.Asteroids || {};

    var Game = Asteroids.Game = function() {
      this.asteroids = [];
      this.addAsteroids();
      this.ship = new Asteroids.Ship(this.randomPosition());
      this.ship.game = this;
      this.bullets = [];
    };

    Game.DIM_X = window.innerWidth;
    Game.DIM_Y = window.innerHeight;

    Game.NUM_ASTEROIDS = 5;

    Game.prototype.addAsteroids = function() {
      for (var i = 0; i < Game.NUM_ASTEROIDS; i++){
        var ast = new Asteroids.Asteroid(this.randomPosition());
        ast.game = this;
        this.add(ast);
      };
    };

    Game.prototype.add = function(object){
      if (object instanceof Asteroids.Asteroid){
        this.asteroids.push(object);
      } else if (object instanceof Asteroids.Bullet){
        this.bullets.push(object);
      };
    };

    Game.prototype.randomPosition = function() {
      var x = Math.random() * Game.DIM_X;
      var y = Math.random() * Game.DIM_Y;
      return { pos: [x, y] };
    };

    Game.prototype.allObjects = function() {
      var allObj = this.asteroids.slice()
      allObj.push(this.ship);
      return allObj.concat(this.bullets);
      // ANSWER: return [].concat(this.ships, this.asteroids, this.bullets);
    };

    Game.prototype.draw = function(ctx) {
      ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y)
      //clears canvas for drawing
      this.allObjects().forEach(function(object) {
        object.draw(ctx);
      });
    };

    Game.prototype.moveObjects = function() {
      this.allObjects().forEach(function(asteroid) {
        asteroid.move();
      });
    };

    Game.prototype.wrap = function(pos){
      if (pos[0] < 0) {
        pos[0] = Game.DIM_X;
      } else if (pos[0] > Game.DIM_X){
        pos[0] = 0;
      };
      if (pos[1] < 0) {
        pos[1] = Game.DIM_Y;
      } else if (pos[1] > Game.DIM_Y){
        pos[1] = 0;
      };
      return pos;
    };

    Game.prototype.checkCollisions = function () {
      var game = this;
      game.allObjects().forEach(function(checkObject) {
        game.allObjects().forEach(function(otherObject) {
          if(checkObject !== otherObject) {
            if (checkObject.isCollidedWith(otherObject)) {
              checkObject.collideWith(otherObject);
            };
          };
        });
      })
    };

    Game.prototype.step = function() {
      this.moveObjects();
      this.checkCollisions();
    };

    Game.prototype.remove = function(object){
      if (object instanceof Asteroids.Asteroid){
        var removeIdx = this.asteroids.indexOf(object)
        this.asteroids = this.asteroids.slice(0, removeIdx).concat(
              this.asteroids.slice(removeIdx + 1));
      } else if (object instanceof Asteroids.Bullet){
        var removeIdx = this.bullets.indexOf(object)
        this.bullets = this.bullets.slice(0, removeIdx).concat(
              this.bullets.slice(removeIdx + 1));
      };

    };

})();
