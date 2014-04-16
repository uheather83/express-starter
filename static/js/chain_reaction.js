
$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var numBalls = 10
  var balls = [];

 for (var i = 0; i < numBalls; i++) {
  var b_new = {
    x:width * Math.random(),
    y:height * Math.random(),
    rad:15,
    xv:9 * Math.random(),
    yv:6 * Math.random()  
  };
  balls.push(b_new);
}
  
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
  requestAnimationFrame(updateGame);
};


  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    var b_new = {
    x:x,
    y:y,
    rad:15,
    xv:9 * Math.random(),
    yv:6 * Math.random()
    };
  balls.push(b_new);
  });

  updateGame();
});
