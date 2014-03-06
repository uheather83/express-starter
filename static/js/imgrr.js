$('#toggle_img').click(function() {
	if ($('#toggle.img').text() === "Go Away!") {
		$('#main_img').hide();
		$('#toggle.img').text("Come Back!");
} else if ($('#toggle.img').text() === "Come Back!") {
	$('#main_img').show();
	$('#toggle.img').text("Go Away!");
	}	
});

// Problem 3 (Swap Em) -----------------------------------------------

$('#change_img').click(function() {
	alert($('#change_img').val());

});
// WRITE CODE HERE

// Problem 4 (Find the Source) -------------------------------------------------
$('.clickable').click(function() {
  // WRITE CODE HERE
});

// Problem 5 (Imgrr) -------------------------------------------------
// WRITE CODE HERE
