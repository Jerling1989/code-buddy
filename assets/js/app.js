var windowHeight = $(window).height();
var headerHeight = $('#menu-bar').height();

var codeContainerHeight = windowHeight - headerHeight;

$('.code-container').height(codeContainerHeight + 'px');