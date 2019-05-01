$(document).ready(function() {

//选项卡切换		
var $ap=$(".tab_opt li");
$ap.click(function(){
$(this).addClass("state").siblings().removeClass("state");
var index=$ap.index(this);
$(".tab_cont .cont").eq(index).show().siblings(".cont").hide();
});		


});