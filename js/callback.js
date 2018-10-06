$(document).ready(function() {
 	var modal = $('.popup'),
 					overlay = $('.overlay'),
 					link = $('a[data-popup="true"]'),
 					close = $('.close-btn'),
 					callback = $('.callback');

 	close.click(function() {
 		modal.toggleClass('popup_active');
 		overlay.hide();
 		$('html').css('overflow-y', 'visible');
 	});
 	overlay.click(function() {
 		modal.toggleClass('popup_active');
 		overlay.hide();
 	});
 	link.on('click', function () {
 		callback.show();
 		overlay.show();
 		modal.toggleClass('popup_active');
 		$('html').css('overflow-y', 'hidden');		
 	});
 });// Много кнопок - одно окно