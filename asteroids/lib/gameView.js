( function (){
    window.Asteroids = window.Asteroids || {};

    var GameView = Asteroids.GameView = function(ctx) {
      this.game = new Asteroids.Game();
      this.ctx = ctx;
    };

    GameView.prototype.start = function() {
      this.bindKeyHandlers()

      setInterval(function() {
        this.game.step();
        this.game.draw(this.ctx);
      }.bind(this), 20);
    };

    GameView.prototype.bindKeyHandlers = function () {
      var gameView = this;
      ['up', 'down', 'left', 'right'].forEach ( function(pressed) {
        key(pressed, function(){
          gameView.game.ship.power(pressed);
        });
      });
      key('space', function() {
        gameView.game.ship.fireBullet()
      })
    };
})();


// function() {console.log(pressed + " is pressed!!")})});
