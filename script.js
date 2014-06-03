$(document).ready(function() {
	
	// scrolls to certain location
	function scrollTo(id) {
		$('html, body').animate(
			{scrollTop: $(id).offset().top}, "1000");
	}
	
	//Story navigation buttons
	$("#landing-control").click(function() { 
		scrollTo("#landing");
	});

	$("#city-control, #city-teaser").click(function() { 
		scrollTo("#city");
	});

	$("#restaurant-control, #restaurant-teaser").click(function() { 
		scrollTo("#restaurant");
	});

	$("#truck-control, #truck-teaser").click(function() { 
		scrollTo("#truck");
	});

	

	
});