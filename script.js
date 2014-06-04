$(document).ready(function() {
	
	$("#controls").hide();
	
	function scrollTo(id) { // scrolls to certain location
		$('html, body').animate(
			{scrollTop: $(id).offset().top}, "1000");
	}

	

	
	//Story navigation buttons
	$("#city-control, #teaser-1").click(function() { 
		scrollTo("#city");
	});

	$("#restaurant-control, #teaser-2").click(function() { 
		scrollTo("#restaurant");
	});

	$("#truck-control, #teaser-3").click(function() { 
		scrollTo("#truck");
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

	// $("#city").waypoint(function() {
	// 	$("#city-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
	// 	$("#city-control").animate({color: 'rgba(0, 0, 0, 1)'});
	// 	$("#restaurant-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
	// 	$("#truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});

	// });

	$("#city").waypoint(function() {
		// Turn button yellow and text black
		$("#city-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
		$("#control-1").animate({color: 'rgba(0, 0, 0, 1)'});
		
		// Make sure other buttons are pink and white
		$("#restaurant-control, #truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
		$("#control-2, #control-3").animate({color: 'rgba(255, 255, 255, 1)'});
	});

	$("#city").waypoint(function(direction) {
		if (direction == "down") {
			$("#restaurant-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
			$("#control-2").animate({color: 'rgba(0, 0, 0, 1)'});

			$("#city-control, #truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
			$("#control-1, #control-3").animate({color: 'rgba(255, 255, 255, 1)'});
		}

		if (direction == "up") {
			$("#city-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
			$("#control-1").animate({color: 'rgba(0, 0, 0, 1)'});
		
			// Make sure other buttons are pink and white
			$("#restaurant-control, #truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
			$("#control-2, #control-3").animate({color: 'rgba(255, 255, 255, 1)'});
		};
	}, {offset: function() {
			return -$(this).height();
			}
		});


	$("#restaurant").waypoint(function(direction) {
		if (direction == "down") {
			$("#truck-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
			$("#control-3").animate({color: 'rgba(0, 0, 0, 1)'});

			$("#city-control, #restaurant-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
			$("#control-1, #control-2").animate({color: 'rgba(255, 255, 255, 1)'});
		}

		if (direction == "up") {
			$("#restaurant-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
			$("#control-2").animate({color: 'rgba(0, 0, 0, 1)'});
		
			// Make sure other buttons are pink and white
			$("#city-control, #truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
			$("#control-1, #control-3").animate({color: 'rgba(255, 255, 255, 1)'});
		};
	}, {offset: function() {
			return -$(this).height();
			}
		});





	// $("#restaurant").waypoint(function(direction) {
	// 	if (direction == "down") {
	// 		$("#restaurant-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
	// 		$("#restaurant-control").animate({color: 'rgba(0, 0, 0, 1)'});
	// 		$("#city-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
	// 		$("#truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
	// 	}
		
	// 	if (direction == "up") {
	// 		$("#city-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
	// 		$("#city-control").animate({color: 'rgba(0, 0, 0, 1)'});
	// 		$("#restaurant-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
	// 		$("#truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
	// 	}

	// });


	// $("#truck").waypoint(function(direction) {
	// 	if (direction == "down") {
	// 		$("#truck-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
	// 		$("#truck-control").animate({color: 'rgba(0, 0, 0, 1)'});
	// 		$("#city-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
	// 		$("#restaurant-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
	// 	}
		
	// 	if (direction == "up") {
	// 		$("#restaurant-control").animate({backgroundColor: 'rgba(255, 213, 25, .5)'});
	// 		$("#restaurant-control").animate({color: 'rgba(0, 0, 0, 1)'});
	// 		$("#city-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
	// 		$("#truck-control").animate({backgroundColor: 'rgba(255, 0 , 113, 1)'});
	// 	}
	// });
	
	
	
});