// VARIABLES TO CALCULATE HEIGHT OF CONTAINER DIVS
var windowHeight = $(window).height();
var headerHeight = $('#menu-bar').height();
var codeContainerHeight = windowHeight - headerHeight;

// SETTING CONTAINER HEIGHT
$('.code-container').height(codeContainerHeight + 'px');

// CLICK EVENT FOR ANY OF THE MENU TOGGLE BUTTONS
$('.toggle-btn').click(function() {

	// TOGGLES BUTTON CLASS TO SELECTED
	$(this).toggleClass('selected');

	// GRABS CODE NAME FROM BUTTON AND ASSOCIATES IT TO CORRECT DIV
	// IN ORDER TO TOGGLE THE CONTAINER DIV AS ACTIVE OR NOT
	var activeDiv = $(this).html();
	$('#' + activeDiv + '-container').toggle();

	// CALCULATING THE AMOUNT OF ACTIVE CONTAINER
	var showingDivs = $('.code-container').filter(function() {
		return($(this).css('display') != 'none');
	}).length;

	// CALCULATING THE CORRECT WIDTH OF EACH ACTIVE CONTAINER
	var width = 100 / showingDivs;
	// ASSIGNING CORRECT WIDTH TO EACH ACTIVE CONTAINER
	$('.code-container').css('width', width + '%');

});

// CLICK EVENT FOR WHEN THE 'RUN CODE' BUTTON IS CLICKED
$('#run-code').click(function() {

	// COMPILING CSS AND HTML INTO IFRAME FOR RESULTS CONTAINER
	$('iframe').contents().find('html').html('<style>' + $('#css-code').val() + '</style>' + $('#html-code').val());
	
	// ADDING JAVASCRIPT TO THE RESULTS CONTAINER
	document.getElementById('result-frame').contentWindow.eval($('#js-code').val());
});

