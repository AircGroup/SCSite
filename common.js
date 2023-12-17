$(".quote").animate({opacity: "0", margin: "0 0 100px 0"})
$(".author").animate({opacity: "0", margin: "100px 0 0 0"})

$('.logo').click(function(){
	$('.menu').toggleClass('open-menu');
	$('body').toggleClass('fixed-page');
});

$('.langChange').click(function(){
	if (document.querySelector('.langChange').innerHTML == "English") {
		document.querySelector('title').innerHTML = "Survival Club"
		document.querySelector('.title').innerHTML = "Survival Club"
		document.querySelector('.quote').innerHTML = "Sometimes even to live is an act of courage.";
		document.querySelector('.author').innerHTML = "- Seneca";
		document.querySelector('.description').innerHTML = "In this modification, you will play on behalf of Sayori in the survival club, where she and all the other members of the club will have fun. As the story progresses, you will have to make fateful choices that will affect the course of the game, so be more vigilant.";
		document.querySelector('.dateexit').innerHTML = "Release date<br>Soon";
		document.querySelector('.q1').innerHTML = "How calculated is the play?";
		document.querySelector('.a1').innerHTML = "8 hours";
		document.querySelector('.q2').innerHTML = "Who are developer modification?";
		document.querySelector('.a2').innerHTML = "Teams from Russia with partners from others country: Lager Team, AircGroup Studio";
		document.querySelector('.uridicheskayinfo').innerHTML = "Silence Team<br>CIS";
		let fastMenu = ["Trailer", "Screenshots", "Download", "Answers"];
		for (let i = 0; i < document.querySelectorAll(".menu_ul li a").length;i++){
			document.querySelectorAll(".menu_ul li a")[i].innerHTML = fastMenu[i]
		}
		document.querySelector(".langChange").innerHTML = "Русский"
	}
	else {
		console.log("RUN")
		document.querySelector('title').innerHTML = "Клуб Выживания"
		document.querySelector('.title').innerHTML = "Клуб Выживания"
		document.querySelector('.quote').innerHTML = "«Иногда даже на то, чтобы жить, нужно мужество»";
		document.querySelector('.author').innerHTML = "- Лу́ций Анне́й Се́не́ка";
		document.querySelector('.description').innerHTML = "В данной модификации вам предстоит играть от лица Сайори в клубе выживания, в котором она и все остальные члены клуба будут весело проводить время. По ходу сюжета вам придётся делать судьбоносные выборы, которые повлияют на ход игры, так что будьте бдительнее.";
		document.querySelector('.dateexit').innerHTML = "Дата выхода<br>Скоро";
		document.querySelector('.q1').innerHTML = "Насколько расчитанно прохождение?";
		document.querySelector('.a1').innerHTML = "Около 8 часов";
		document.querySelector('.q2').innerHTML = "Кто разрабатывает мод?";
		document.querySelector('.a2').innerHTML = "Команды из России в партнерстве с разработчиками из разных стран: Lager Team, AircGroup Studio";
		document.querySelector('.uridicheskayinfo').innerHTML = "Сайленс Тим<br>СНГ";
		let fastMenu = ["Трейлер", "Скриншоты", "Скачать", "Ответы"];
		for (let i = 0; i < document.querySelectorAll(".menu_ul li a").length;i++){
			document.querySelectorAll(".menu_ul li a")[i].innerHTML = fastMenu[i]
		}
		document.querySelector(".langChange").innerHTML = "English"
	}
});

$(document).ready(function(){
	$(".owl-carousel").owlCarousel({items: 1, loop: true, nav: true, margin: 10, smartSpeed: 1000});
});

$(".author").animate({opacity: "1", margin: "10 0 0 0"}, 3000);
$(".quote").animate({opacity: "1", margin: "0 0 0 0"}, 3000);