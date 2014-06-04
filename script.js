$(document).ready(function() {
	
	$("#controls").hide();
	
	function scrollTo(id) { // scrolls to certain location
		$('html, body').animate(
			{scrollTop: $(id).offset().top}, "1000");
	}

	
	//Story navigation buttons
	$("#city-control, #teaser-1").click(function() { 
		scrollTo("#city");
		$("#city-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
	});

	$("#restaurant-control, #teaser-2").click(function() { 
		scrollTo("#restaurant");
		$("#restaurant-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
	});

	$("#truck-control, #teaser-3").click(function() { 
		scrollTo("#truck");
		$("#restaurant-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
	});

	//Hide the nav bar with scrolling
	$("#main-content").waypoint(function(direction) {
		if (direction == "down") {
			$("#controls").fadeIn("slow");
		}
		if (direction == "up") {
			$("#controls").fadeOut("slow");
		}
	});

	$("#city").waypoint(function() {
		$("#city-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
		$("#restaurant-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
		$("#truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});

	});


	$("#restaurant").waypoint(function(direction) {
		if (direction == "down") {
			$("#restaurant-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
			$("#city-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
			$("#truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
		}
		
		if (direction == "up") {
			$("#city-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
			$("#restaurant-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
			$("#truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
		}

	});


	$("#truck").waypoint(function(direction) {
		if (direction == "down") {
			$("#truck-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
			$("#city-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
			$("#restaurant-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
		}
		
		if (direction == "up") {
			$("#restaurant-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
			$("#city-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
			$("#truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
		}
	});
	

	
});