//Represent a Table object with another Javascript module. 
//It should have properties like its total dimensions and an array of BilliardBalls it contains.
var BB = BB || {};

BB.TableModule = (function(){

  //defaults to these if init isn't run
  var height = 600;
  var width = 800;
  var balls = [];
  
  function init(height, width, balls){
    this.height = height;
    this.width = width;
    this.balls = balls;
  };
  
  function ballCollection(){
    return balls;
  };
  
  function addBall(ball){
    balls.push(ball);
  };

  function render(){
    $('#table').css({
      'width' : this.width + 'px',
      'height' : this.height + 'px'
    });

    $('#table').empty(); 
    balls.forEach(function(ball, index){
      ball.render();
    });
  };

  function _checkCollisions(){
    balls.forEach(function(ball){
      if ((ball.position['x'] + ball.radius) >= width ){
        ball.velocity['x'] *= -1;
      } else if ((ball.position['x'] - ball.radius <= 0)){
        ball.velocity['x'] *= -1;
      }
    });
  }

  function tic(){
    balls.forEach(function(ball){
      ball.tic();
    });
    _checkCollisions();
    this.render();
  };

  return {
    init : init,
    ballCollection : ballCollection,
    addBall : addBall,
    height: height,
    width : width,
    render : render,
    tic : tic
  };
}());
