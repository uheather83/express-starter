
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
    rad:10
  };

  var b1 = {
    x:50,
    y:50,
    rad:30
  };

  var b2 = {
    x:80,
    y:80,
    rad:40
  };
  balls.push(b0);
  balls.push(b1);
  balls.push(b2);
  var updateGame = function() {
    for (var i = 0; i < balls.length; i++) {
    
    context.fillStyle = 'blue';
    context.beginPath();
    context.arc(balls[i].x,balls[i].y,balls[i].rad,0,2*Math.PI);
    context.fill();
    context.closePath();
}
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
