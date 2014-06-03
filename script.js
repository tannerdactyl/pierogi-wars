$(document).ready(function() {
	
	
	function scrollTo(id) { // scrolls to certain location
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

	
	// $(function(){
 //    	$(window).scroll(function() { 
 //        	if ($(this).scrollTop() > 75) { 
 //            $("#controls:hidden").css('visibility','visible');   
 //            $("#controls:hidden").fadeIn('slow');  
 //        	} 
 //        	else {     
 //            $("#controls:visible").fadeOut("slow"); 
 //        	}  
 //    	});
	// });

	$("#controls").hide(); //hide your div initially
    var topOfOthDiv = $("#landing").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#controls").show(200); //reached the desired point -- show div
        }
    });

	
});