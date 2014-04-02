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
    rad: 20
  };
  
  ball.x = 20;
  ball.y = 20;
  ball.rad = 20;

  var updateGame = function() {
    ball.x+=5
    ball.y+=5
    context.clearRect(0,0,canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.beginPath();
    context.arc(ball.x,ball.y,ball.rad,0,2*Math.PI);
    context.fill();
    context.closePath();
    setTimeout(updateGame,10)
    //PUT STUFF HERE
  };


  updateGame();
});
