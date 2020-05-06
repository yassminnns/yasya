$(document).ready(function () {
	$(".wrapper_form").on("click", ".tab", function () {

    // Удаляем классы active
    $(".wrapper_form").find(".active").removeClass("active");

    // Добавляем классы active
    $(this).addClass("active");
 	$(".tab-form").eq($(this).index()).addClass("active");
});	
});

