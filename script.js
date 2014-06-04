$(document).ready(function() {
	
	
	function scrollTo(id) { // scrolls to certain location
		$('html, body').animate(
			{scrollTop: $(id).offset().top}, "1000");
	}
	
	//Story navigation buttons
	$("#landing-control").click(function() { 
		scrollTo("#landing");
	});

	$("#city-control, #teaser-1").click(function() { 
		scrollTo("#city");
	});

	$("#restaurant-control, #teaser-2").click(function() { 
		scrollTo("#restaurant");
	});

	$("#truck-control, #teaser-3").click(function() { 
		scrollTo("#truck");
	});

	// Nav button hover text
	$("#landing-control").hover(function() {
		$(this).append($("<p>landing</p>"));
	}, function() {
		$(this).empty();
	});

	$("#city-control").hover(function() {
		$(this).append($("<p>city</p>"));
	}, function() {
		$(this).empty();
	});

	$("#restaurant-control").hover(function() {
		$(this).append($("<p>restaurant</p>"));
	}, function() {
		$(this).empty();
	});

	$("#truck-control").hover(function() {
		$(this).append($("<p>truck</p>"));
	}, function() {
		$(this).empty();
	});

	


	
});