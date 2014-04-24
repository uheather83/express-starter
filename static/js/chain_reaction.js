
$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;
  var numBalls = 10
  var balls = [];
  var reactions = [];
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
    for(var i=0; i<balls.length; i++){
      var collided = false
      for(var j = 0; j<reactions.length; j++) {
        var ball1 = balls[i];
        var ball2 = reactions[j];
        var xdiff = ball1.x - ball2.x;
        var ydiff = ball1.y - ball2.y;
        var dist = Math.sqrt(xdiff*xdiff + ydiff*ydiff)
          if(dist<ball1.rad + ball2.rad) {
          collided = true;
          if (collided === true) {
          var reaction = {
            x:balls[i].x,
            y:balls[i].y,
            rad:1
            };
            reactions.push(reaction);
          balls.splice(i,1);
          i--;
          }
        }
      }
    }
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
      };
    for (var i = 0; i < reactions.length; i++) {
      if (reactions[i].rad <30) {
        reactions[i].rad++; }
      }
  
    for (var i = 0; i < reactions.length; i++) {
    context.fillStyle = 'green';
    context.beginPath();
    context.arc(reactions[i].x,reactions[i].y,reactions[i].rad,0,2*Math.PI);
    context.fill();
    context.closePath();
    }

    for (var i = 0; i < balls.length; i++) { 
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
    var x1 = e.pageX - $(this).offset().left;
    var y1 = e.pageY - $(this).offset().top;
    var reaction = {
    x:x1,
    y:y1,
    rad:1
    };
  reactions.push(reaction);
  });

  updateGame();
});
