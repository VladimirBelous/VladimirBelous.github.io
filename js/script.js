
// Контакты

$('[type="button"]').click(function() {
  $.post( 
  
  "submit.php", //url
  
  { //äàííûå èç ôîðìû
    name: $('[name="name"]').val(),
    tel: $('[name="tel"]').val(),
    selected: $('[name="selected"]').val(),
    message: $('[name="message"]').val()
  }, 

  function( data ) { //ïîñëå îòïðàâêè äàííûõ
    $( ".result" ).html(data);
  }
  
  );
});

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
