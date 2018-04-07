$(document).ready(function() {
	(function(){
		$('button').on('click', function() {
			if ($(this).text() == 'C') {
				$('.screen').empty();
			} else if ($(this).text() == '=') {
				$('.screen').text(eval($('.screen').text()));
			} else {
				$('.screen').append($(this).text());
			}
		});
	})();
});


