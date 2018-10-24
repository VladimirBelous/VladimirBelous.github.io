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
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
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

