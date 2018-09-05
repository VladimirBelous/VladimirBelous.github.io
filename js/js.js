$('.menu__btn').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('menu__btn__active')
});

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

 $('.sl').slick();

 function AjaxFormRequest(result_id,formMain,url) {
                jQuery.ajax({
                    url:     url,
                    type:     "POST",
                    dataType: "html",
                    data: jQuery("#"+formMain).serialize(), 
                    success: function(response) {
                    document.getElementById(result_id).innerHTML = response;
                },
                error: function(response) {
                document.getElementById(result_id).innerHTML = "<p>Возникла ошибка при отправке формы. Попробуйте еще раз</p>";
                }
             });

             $(':input','#formMain')
 				.not(':button, :submit, :reset, :hidden')
 				.val('')
 				.removeAttr('checked')
 				.removeAttr('selected');
} 