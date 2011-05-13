$(document).ready(function() {
	$('#agents a').click(function(event) {
		event.preventDefault();
		$('#content').load($(this).attr('href'));
		$('#content').css('backgroundImage', 'url()');
	});
});