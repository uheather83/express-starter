$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.fillStyle = color;
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+sideLen,y);
    context.lineTo(x+sideLen,y+sideLen);
    context.lineTo(x, y+sideLen);
    context.lineTo(x,y);
    context.fill();
  }

  $('#p1').click(function() {
  drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  var drawCircle = function(x, y, radius, color) {
    context.strokeStyle = color;
    context.fillStyle = color;
    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI);
    context.fill();
    context.stroke();
    context.closePath();
  }


  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });


  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });
   

var drawCircle2 = function(x, y, radius, color) {
    context.strokeStyle = color;
    context.beginPath();
    context.arc(x,y,radius,0,2*Math.PI);
    context.stroke();
    context.closePath();
  }

var drawSquare2 = function(x, y, sideLen, color) {
    context.strokeStyle = color;
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x+sideLen,y);
    context.lineTo(x+sideLen,y+sideLen);
    context.lineTo(x, y+sideLen);
    context.lineTo(x,y);
    context.stroke();
  }

   $('#p5').click(function() {
    drawCircle2(125, 100, 25, 'green');
    drawCircle2(100, 125, 25, 'green');
    drawCircle2(100, 75, 25, 'green');
    drawCircle2(75, 100, 25, 'green');
    drawCircle2(100, 100, 25, 'blue');
    drawSquare2(75,75,50,'red')
  });

var drawTriplet = function(x,y,color) {
    context.strokeStyle = color;
    context.moveTo(x,y);
    drawCircle2(x+87.5,y+37.5,50, color);
    drawCircle2(x+50,y+100,50, color);
    drawCircle2(x+125,y+100,50, color);
}

 $('#p6').click(function() {
    drawTriplet(50,50, 'green');
  });

 $('#p7').click(function() {
    drawTriplet(100,150, 'blue');
  });

$('#p8').click(function() {
    drawTriplet(50,50, 'red');
    drawTriplet(300,80, 'blue');
    drawTriplet(80,300, 'green');
    drawTriplet(250,250, 'black');
  });
  // Write drawTriplet function here

  // Challenge:
  // Write drawTriangle, drawTriforce, drawTripleTriforce,
  // drawSierpinski functions here

  


  

  

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //

});
