window.addEventListener('DOMContentLoaded', function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},3000); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
	
	$('.slider').slick({
		infinite: true,
		autoplay:true
	});


	$(window).scroll(function() {
		$('.fadein').each(function() {
			var	targetElement =$(this).offset().top;
			var	scroll = $(window).scrollTop();
			var	windowHeight = $(window).height();
			if (scroll > targetElement - windowHeight +150) {
				$(this).addClass('scrollin');
			}
		});
	});


	$("#drawer_toggle").click(function(){
		$(this).toggleClass("open");
		$("#global_nav").toggleClass("sp_open");
		// $('body').css('overflow','hidden');
		$('html').toggleClass('.hidden');
		$('.nav-fadein').toggleClass('scrollin-2')
	});


});
