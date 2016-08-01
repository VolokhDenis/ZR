
$( document ).ready(function() {
    var circs = $('.addit-info').length;
    console.log( circs );

for (var i = 1; i <= circs; i++) {
	var elem_width = $('.cir_' + i + ' .addit-info').width();
	var elem_height = $('.cir_' + i + ' .addit-info').height();

	elem_width = elem_width + 40;
	elem_height = elem_height/2-8;
		$('.cir_' + i + ' .addit-info').css({
			"margin-left" : "-" + elem_width + "px",
			"margin-top" : "-" + elem_height + "px"
		});
	
}

});



