$(function () {
	/*Создание переменной*/
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerheight();
	let scrollPos = $(window).scrollTop();

	checkScroll(scrollPos, introH) 

 	/*Прилипание шапки*/
	$(window).on("scroll resize", function(){

		introH = intro.innerheight();
		
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if(scrollPos > introH) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed");
		}
	}

		/*Плавный скролл*/
		$("[data-scroll]").on("click", function(event){
			event.preventDefault();

			let elementID = $(this).data('scroll');
			let elementOffset = $(elementID).offset().top;

			nav.removeClass("show");

			$("html, body").animate({
				scrollTop:elementOffset - 70
			},700);

		});

		/*Меню на мобилках*/
		let nav = $("#nav");
		let navToggle = $("#navToggle");

		navToggle.on("click", function(event) {
			event.preventDefault();

			nav.toggleClass("show");
		});


		/*Слайдер с отзывами*/

		let slider = $("#reweiewsSlider");
		slider.slick({
  		infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1
  		fade: true
  		arrows: false
  		dots: true
		});
});