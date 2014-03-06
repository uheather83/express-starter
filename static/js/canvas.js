$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

$('#p1').click(function() {
	context.fillStyle = 'pink';
    context.strokeRect(15,20,50,100);
  });

$('#p2').click(function() {
	context.fillStyle = 'pink';
    context.strokeRect(100,125,40,40);
  });

$('#p3').click(function() {
    context.beginPath();
    context.arc(30,30,20,2,6);
    context.stroke();
    context.closePath();
  });

$('#p4').click(function() {
    context.beginPath();
    context.arc(200,200,50,0,2*Math.PI);
    context.stroke();
    context.closePath();
  });

$('#p5').click(function() {
    context.moveTo(80,80);
    context.lineTo(15,15);
    context.strokeStyle = 'orange';
    context.stroke();
  });
  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
