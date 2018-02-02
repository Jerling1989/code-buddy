var windowHeight = $(window).height();
var headerHeight = $('#menu-bar').height();

var codeContainerHeight = windowHeight - headerHeight;

$('.code-container').height(codeContainerHeight + 'px');


$('.toggle-btn').click(function() {

	$(this).toggleClass('selected');
	var activeDiv = $(this).html();

	$('#' + activeDiv + '-container').toggle();

	var showingDivs = $('.code-container').filter(function() {
		return($(this).css('display') != 'none');
	}).length;

	var width = 100 / showingDivs;

	$('.code-container').css('width', width + '%');

});


$('#run-code').click(function() {
	$('iframe').contents().find('html').html($('#html-code').val());
});