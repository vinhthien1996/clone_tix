
$("#sidebar-menu-open").click( function () {
	$("#navMenu").animate({"right": "0"}, 200);
    $("#menu-screen").show('fade', 200);
    $('body').addClass('hidden-main');
});

$("#sidebar-menu-close").click( function () {
	$("#navMenu").animate(
        {"right": "-70%"}, 200);
	$("#menu-screen").hide('fade', 200);
	$('body').removeClass('hidden-main');
});

$("body").click(function (e) {

	if (!$(e.target).closest('.navigation').length && !$(e.target).closest('#sidebar-menu-open').length) {
		$("#navMenu").animate({"right": "-70%"}, 100);
		$("#menu-screen").hide('fade', 100);
		$('body').removeClass('hidden-main');
	}
});