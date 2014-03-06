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
  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //

});
