$(document).ready(function() {
	

	$("#main-content").hide(); 

	
	$(".story-link").click(function() { 
		var storyname = this.id;
		$("#main-content").show();

		if (storyname == "city-link") {
			$("#truck, #restaurant, #full-photo-3, #full-photo-4").fadeOut("fast");
			$("#city, #full-photo-2").fadeIn("slow");
			
		};
		if (storyname == "restaurant-link") {
			$("#truck, #city, #full-photo-2, #full-photo-4").fadeOut("fast");
			$("#restaurant, #full-photo-3").fadeIn("slow");
			
		};
		
		if (storyname == "truck-link") {
			$("#restaurant, #city, #full-photo-2, #full-photo-3").fadeOut("fast");
			$("#truck, #full-photo-4").fadeIn("slow");
		};


	});

	
	$(".back-link").click(function() {
		$("#main-content").fadeOut("fast");
	});




	
});