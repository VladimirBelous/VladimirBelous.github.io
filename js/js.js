// Фильтр

$(function(){
  $('.toggles button').click(function(){
    var get_id = this.id;
    var get_current = $('.posts .' +get_id);

    $('.post').not(get_current).hide(500);
    get_current.show(500);
  });

  $('#showall').click(function(){
    $('.post').show(500);
  });
});

//Слайдер

var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })

// Модальное окно

// открыть по кнопке
$('.js-button-campaign').click(function() {

	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');
});

// закрыть на крестик
$('.js-close-campaign').click(function() {
	$('.js-overlay-campaign').fadeOut();

});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
	var popup = $('.js-popup-campaign');
	if (e.target!=popup[0]&&popup.has(e.target).length === 0){
		$('.js-overlay-campaign').fadeOut();

	}
});