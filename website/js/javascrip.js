// JAVASCRIPT
$(document).ready(function() {
	/*Variaveis */
	var _containerBtn = $(".jbtn-voltar");
	var _btnLink = $(".jbtn-voltar-link");

	$(window).scroll(function() {
		if($(this).scrollTop()>70) {
			_containerBtn.fadeIn(0);
		}else {
			_containerBtn.fadeOut(0);
		}
	});

	_containerBtn.click(function(){
			$('html, body').animate({scrollTop:0}, 800);
			return false;
		});
});
