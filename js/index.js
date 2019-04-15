$(function(){

	$(".menuButton, .overlay").on('click', function(e){
		e.preventDefault();
		$(".menuButton").toggleClass("activeButton");
		$(".menu").toggleClass("activeMenu");
		$(".overlay").toggleClass("active");
		$("body").toggleClass("active");
	});

	$(".information__item").on("click", function(){
		$(".information__item").removeClass("information__item--active");
		$(this).toggleClass("information__item--active");
	});

});