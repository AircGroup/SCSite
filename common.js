$(".quote").animate({opacity: "0", margin: "0 0 100px 0"})
$(".author").animate({opacity: "0", margin: "100px 0 0 0"})

$('.logo').click(function(){
	$('.menu').toggleClass('open-menu');
	$('body').toggleClass('fixed-page');
});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({items: 1, loop: true, nav: true, margin: 10, smartSpeed: 1000});
});

$(".author").animate({opacity: "1", margin: "10 0 0 0"}, 3000);
$(".quote").animate({opacity: "1", margin: "0 0 0 0"}, 3000);