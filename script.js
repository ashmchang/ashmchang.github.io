$( document ).ready(function() {

$("img").on("click",function(){
	console.log("photo clicked!");
	$("img").width('200px');
	$("img").height('100px');
});

$('h1').addClass("importante");
$('#importante').on('click',function(){
	console.log("title clicked")
	$('#importante').css('color','red');
});




});