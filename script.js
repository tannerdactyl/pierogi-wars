$(document).ready(function() {
	

	$("#main-content").hide(); 

	
	$(".story-link").click(function() { 
		var storyname = this.id;
		$("#main-content").show();

		if (storyname == "city-link") {
			$("#truck, #restaurant, #full-photo-3, #full-photo-4").hide();
			$("#city, #full-photo-2").show();
			
		};
		if (storyname == "restaurant-link") {
			$("#truck, #city, #full-photo-2, #full-photo-4").hide();
			$("#restaurant, #full-photo-3").show();
			
		};
		
		if (storyname == "truck-link") {
			$("#restaurant, #city, #full-photo-2, #full-photo-3").hide();
			$("#truck, #full-photo-4").show();
		};


	});

	
	




	
});