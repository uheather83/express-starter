
$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

  // PUT STUFF HERE

  // Run an interation of the game
  var balls = [];
  var b0 = {
    x:0,
    y:0,
    rad:10,
    xv:5,
    yv:5
  };

  var b1 = {
    x:50,
    y:50,
    rad:30,
    xv:5,
    yv:5
  };

  var b2 = {
    x:80,
    y:80,
    rad:40,
    xv:5,
    yv:5
  };
  balls.push(b0);
  balls.push(b1);
  balls.push(b2);
  var updateGame = function() {
    context.clearRect(0,0,canvas.width, canvas.height);
    for (var i = 0; i < balls.length; i++) {
    balls[i].x+=balls[i].xv;
    balls[i].y+=balls[i].yv;
    if ((balls[i].yv>0 && balls[i].y + balls[i].rad >= canvas.height)
      ||(balls[i].yv<0 && balls[i].y -balls[i].rad <=0)) {
      balls[i].yv = -balls[i].yv;
    }
    if ((balls[i].xv>0 && balls[i].x + balls[i].rad >= canvas.width)
      ||(balls[i].xv<0 && balls[i].x -balls[i].rad<=0)) {
      balls[i].xv = -balls[i].xv;
    }
    
    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(balls[i].x,balls[i].y,balls[i].rad,0,2*Math.PI);
    context.fill();
    context.closePath();
  
}
  setTimeout(updateGame,10);
};


  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});
