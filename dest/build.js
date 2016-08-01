/* Za-Rulem -v 0.0.1 - 2016-08-01 */
// A $( document ).ready() block.
//$( document ).ready(function() {
//    console.log( "ready!" );
//});

//$('#addit ul li').mouseover(function(){
//	Class_check=$(this).attr("class");
// 	$(this).stop().animate({backgroundColor: '#400101'});

//});
//$('#addit ul li').mouseout(function(){
//	if(Class_check){
// 	$(this).stop().css({backgroundColor : "red"});
// }else{
// 	$(this).stop().css({'background-color' : 'rgba( 0, 0, 0, 0 )'});
// }
//});

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



