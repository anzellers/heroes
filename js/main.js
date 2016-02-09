// $('.hero:nth-child(1)');
// $('.gallery first-child');
// $('.hero: first-child');

$('.hero').first().addClass('shown');
$('h1.name').text(  $('.hero').first().attr('title')  ) ;


// var showNext = function() {
// 	$(this).
// }



$('button.next').on('click', function () {

	if ( $('.shown').is(':last-child') ) {
	
		$('.shown').removeClass('shown')
		.siblings()
		.first()
		.addClass('shown');
	}

	else {

		$('.shown')
			.removeClass('shown')
			.next()
			.addClass('shown');
		}

	$('h1').text( $('.shown').attr('title') );

});






$('button.prev').on('click', function () {

	if ( $('.shown').is(':first-child') ) {
	
		$('.shown').removeClass('shown')
		.siblings()
		.last()
		.addClass('shown');
	}
	else {
		$('.shown')
			.removeClass('shown')
			.prev()
			.addClass('shown');
	}

	$('h1').text( $('.shown').attr('title') );

});


// $('.hero').each (function (index)) {

// }