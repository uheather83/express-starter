$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

$('#p1').click(function() {
    context.strokeRect(15,20,50,100);
  });

$('#p2').click(function() {
    context.strokeRect(80,12,40,40);
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
    context.stroke();
  });

$('#p6').click(function() {
	context.strokeStyle = 'green';
    context.strokeRect(30,40,200,22);
  });

$('#p7').click(function() {
	context.fillStyle = 'red';
    context.beginPath();
    context.strokeStyle = 'red';
    context.arc(230,235,50,0,2*Math.PI);
    context.fill();
    context.closePath();
  });

$('#p8').click(function() {
	context.fillStyle = 'yellow';
	context.strokeStyle = 'blue';
	context.strokeRect(100,125,40,40);
    context.fillRect(100,125,40,40);
  });

$('#p9').click(function() {
for (var i = 0; i <= 4; i++) {
        context.strokeRect(50*i,0,50,50); }
});


$('#p10').click(function() {
for (var i = 0; i <= 99; i++) {
        context.strokeRect(5*i,0,5,5); }
});

});
  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

