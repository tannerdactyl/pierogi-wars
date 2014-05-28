$(document).ready(function() {
	

	$("#main-content").hide(); 

	
	$(".story-link").click(function() { 
		var storyname = this.id;
		storychooser(storyname);


	});

	
	
	function storychooser(storyname) {
		console.log(storyname);
		$("#main-content").show();

		if (storyname == "restaurant-link") {
			$("#restaurant").show();
			$("#truck","#city").hide();
		};
		if (storyname == "city-link") {
			$("#city").show();
			$("#truck","#restaurant").hide();
		};
		
		if (storyname == "truck-link") {
			$("#truck").show();
			$("#restaurant","#city").hide();
		};
	}




	
});