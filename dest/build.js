/* Za-Rulem -v 0.0.1 - 2016-07-27 */
// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
});

$('#addit ul li').mouseover(function(){
 	$(this).stop().animate({backgroundColor: '#400101'});
 	 console.log( "colorIn" );
});
$('#addit ul li').mouseout(function(){
 	$(this).stop().animate({backgroundColor: 'red'});
 	 console.log( "colorIn" );
});