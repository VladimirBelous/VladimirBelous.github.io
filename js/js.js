// БУРГЕР
$('.menu__btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu__btn__active')
});

$('.menu_footer_service__btn_span').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu_footer_service__btn_active')
});

$('.menu_footer_company__btn_span').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu_footer_service__btn_active')
});


// МЕНЮ
$(document).ready(function(){
			var touch = $('.menu__btn');
		    var menu = $('.nav');

		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});

        $(document).ready(function(){
			var touch = $('.internet_shop');
		    var menu = $('.nav_inShop');

		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});

        $(document).ready(function(){
			var touch = $('.menu_footer_service__btn');
		    var menu = $('.menu_service_nav');

		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});

        $(document).ready(function(){
			var touch = $('.menu_footer_company__btn');
		    var menu = $('.menu_about_nav');

		    $(touch).on('click', function(e) {
		        e.preventDefault();
		        menu.slideToggle();
		    });
		    $(window).resize(function(){
		        var wid = $(window).width();
		        if(wid > 760 && menu.is(':hidden')) {
		            menu.removeAttr('style');
		        }
		    });
		});

// СЛАЙДЕР
 $('.sl').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
});
// Форма обратной связи
$(document).ready(function(){
    $('#button_contacts').click(function(){
        var form_name   = $('#form_name').val();
        var form_email   = $('#form_email').val();
        var form_message = $('#form_message').val();
        $.ajax({
            url: "post.php",
            type: "post",
            dataType: "json",
            data: {
                "form_name":   form_name,
                "form_email":   form_email,
                "form_message": form_message
            },
            success: function(data){
                $('.messages').html(data.result);
            }
        });
    });
});

// Плавная прокрутка
$(document).ready(function(){
    $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
  var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
      $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
      return false; // выключаем стандартное действие
    });
});