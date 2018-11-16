// БУРГЕР
$('.menu__btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu__btn__active')
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

// СЛАЙДЕР
 $('.sl').slick({
  dots: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
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




// Main sl
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    
    if(n > slides.length){
        slideIndex = 1; 
    }   
    if(n < 1){
        slideIndex = slides.length;
    }   
    for(i=0; i < slides.length; i++){
        slides[i].style.display = "none";
    }   
    for(i=0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className+= " active";   
}

function slideTime(n){
 n=1
 showSlides(slideIndex += n);
 }
 
setInterval(slideTime, 4000);﻿

