$(document).ready(function(){

//リンク画像のホバー(画像を２枚用意)用
$("img.ovr").mouseover(function(){
		$(this).attr("src",$(this).attr("src").replace(/^(.+)(\.[a-z]+)$/, "$1_on$2"))
}).mouseout(function(){
		$(this).attr("src",$(this).attr("src").replace(/^(.+)_on(\.[a-z]+)$/, "$1$2"));
})

//Androidにキーワード検索のline-heightを付ける
var UA = window.navigator.userAgent.toLowerCase();
if(UA.indexOf("android") != -1){
	$(".search input").css("line-height", "26px");
}

//navBtnをクリックでnavの出現
$("#mainNavBtn").click(function(){
	$("#mainNav").slideToggle();
	return false;
});

//navのtabをクリックで中身を切替
var navTab1;
$(".tabBox1 .nav-tabs li a").click(function(){
	navTab1 = $(this).parent().attr("id");
	$(this).parents("ul").children("li").removeClass("active");
	$(this).parent().addClass("active");
	$(this).parents("dl").children("dd").children("ul").hide();
	$(this).parents("dl").children("dd").children("ul." + navTab1).show();
	return false;
});

//詳細メインのスペックテーブルの行の色
$(".dataBox table tr:even").addClass("trEven");
$(".dataBox table tr:odd").addClass("trOdd");
$(".dataBox2 .clearfix:even").addClass("trEven");
$(".dataBox2 .clearfix:odd").addClass("trOdd");

//その他クチコミのもっと見るボタン
if($("#qaBlk ul").height() > 450){
	$("#qaBlk ul").css({height:400})
	$("#qaBlk .moreView a").click(function(){
		$(this).parents("ul").css("height", "auto");
		$(this).parent(".moreView").remove();
		return false;
	});
}else{
	$("#qaBlk .moreView").hide();
}

//もっと見るボタン2：詳細ページのラバーの使用選手など
var itemCount = $(".itemCountBox .item").length;
if(itemCount > 8){
	$(".itemCountBox .item:gt(7)").hide();
	$(".itemCountBox .btnMore2").click(function(){
		$(this).parent(".itemCountBox").find(".item").show();
		$(this).hide();
		return false;
	});
}else{
	$(".itemCountBox .btnMore2").hide();
}


var ua = {};
ua.name = window.navigator.userAgent.toLowerCase();
 
ua.isiPhone = ua.name.indexOf('iphone') >= 0;
ua.isAndroid = ua.name.indexOf('android') >= 0;

var sclNum = 0;
var register = $("#register");

if (ua.isiPhone) {
	$("#register").show().css({bottom:0,position:"static"});
}else if (ua.isAndroid) {
	$("#register").show().css({bottom:0,position:"static"});
}else{

$(window).scroll(function(){
	//alert("a")
	sclNum = $(window).scrollTop();
	if(sclNum > 20){
		register.stop().show().animate({bottom:0});
	}else{
		register.stop().animate({bottom:-150});
	}
})
}
});//end
