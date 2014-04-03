$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;

  //PUT STUFF HERE

  //run an iteration of the game


  var ball = {
    x: 20,
    y: 20,
    rad: 20,
    xv:5,
    yv:5
  };
  
  ball.x = 20;
  ball.y = 20;
  ball.rad = 20;
  ball.xv = 5;
  ball.yv = 5;

  var updateGame = function() {
    ball.x+=ball.xv;
    ball.y+=ball.yv;
    if ((ball.yv>0 && ball.y + ball.rad >= canvas.height)
      ||(ball.yv<0 && ball.y -ball.rad <=0)) {
      ball.yv = -ball.yv;
    }
    if ((ball.xv>0 && ball.x + ball.rad >= canvas.width)
      ||(ball.xv<0 && ball.x -ball.rad<=0)) {
      ball.xv = -ball.xv;
    }
    context.clearRect(0,0,canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(ball.x,ball.y,ball.rad,0,2*Math.PI);
    context.fill();
    context.closePath();
    setTimeout(updateGame,10)
  };


  updateGame();
});
