var windowHeight = $(window).height();
var headerHeight = $('#menu-bar').height();

var codeContainerHeight = windowHeight - headerHeight;

$('.code-container').height(codeContainerHeight + 'px');


$('.toggle-btn').click(function() {
	$(this).toggleClass('selected');
	var activeDiv = $(this).html();

	$('#' + activeDiv + '-container').toggle();
});