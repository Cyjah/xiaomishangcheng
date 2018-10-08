//购物车
$(".header_right>a").eq(3).mouseenter(function(){
    $(".show_cart").slideDown(100);
});
$(".header_right>a").eq(3).mouseleave(function(){
    $(".show_cart").slideUp(200);
});
//顶部分类导航
var show_fenleicontent_index=0;
$(".top_nav_one>ul").mouseenter(function(){
    $(".show_fenleicontent").stop().slideDown(200);
    $(".show_fenleicontent").css('z-index','3');
});
$(".top_nav_one>ul>li").mouseenter(function(){
    show_fenleicontent_index=$(this).index();
    $(".show_fenleicontent").stop().slideDown(200);
    $(".show_fenleicontent>ul").eq(show_fenleicontent_index).siblings().stop().hide();
    $(".show_fenleicontent>ul").eq(show_fenleicontent_index).stop().show();
});
$(".top_nav_one>ul>li").mouseleave(function(){
   $(".show_fenleicontent").stop().slideUp(200);
});
$(".show_fenleicontent").mouseenter(function(){
   $(this).stop().show();
});
$(".show_fenleicontent").mouseleave(function(){
    $(this).stop().slideUp(200);
});
//侧边分类导航
$(".classify_nav li").mouseenter(function(){
    $(".classify_nav_each").eq($(this).index()).siblings().hide();
    $(".classify_nav_each").eq($(this).index()).show();
    $(".classify_nav_content").show();
});
$(".classify_nav li").mouseleave(function(){
    $(".classify_nav_content").hide();
});
$(".classify_nav_content").mouseenter(function(){
    $(this).show();
});
$(".classify_nav_content").mouseleave(function(){
    $(this).hide();
});
//顶部轮播图
var timer;
var imgIndex=0;
function autoplayImages(){
    clearInterval(timer);
    timer=setInterval(function(){
        imgIndex++;
        if(imgIndex>4){
            imgIndex=0;
        }
        $(".autoplay_img").children().eq(imgIndex).stop().fadeIn().siblings().stop().fadeOut();
        $(".toplunbo_circle").children().eq(imgIndex).siblings().removeClass();
        $(".toplunbo_circle").children().eq(imgIndex).addClass("toplunbo_circle_current");
    },3000);
};
autoplayImages();
$(".autoplay_img").mouseenter(function(){
   clearInterval(timer);
});
$(".autoplay_img").mouseleave(function(){
   autoplayImages();
});
$(".toplunbo_left").mouseenter(function(){
    clearInterval(timer);
    $(this).css({"background":"#625F59","color":"#FFF"});
});
$(".toplunbo_left").mouseleave(function(){
    autoplayImages();
    $(this).css({"background":"","color":"gray"});
});
$(".toplunbo_right").mouseenter(function(){
    clearInterval(timer);
    $(this).css({"background":"#625F59","color":"#FFF"});
});
$(".toplunbo_right").mouseleave(function(){
    autoplayImages();
    $(this).css({"background":"","color":"gray"});
});
$(".toplunbo_circle").children().mouseenter(function(){
    clearInterval(timer);
});
$(".toplunbo_circle").children().mouseleave(function(){
    autoplayImages();
});
$(".toplunbo_left").click(function(){
    if(imgIndex==0){
        imgIndex=5;
    }
    imgIndex--;
    $(".autoplay_img").children().eq(imgIndex).stop().fadeIn().siblings().stop().fadeOut();
    $(".toplunbo_circle").children().eq(imgIndex).siblings().removeClass();
    $(".toplunbo_circle").children().eq(imgIndex).addClass("toplunbo_circle_current");
});
$(".toplunbo_right").click(function(){
    imgIndex++;
    if(imgIndex>4){
        imgIndex=0;
    }
    $(".autoplay_img").children().eq(imgIndex).stop().fadeIn().siblings().stop().fadeOut();
    $(".toplunbo_circle").children().eq(imgIndex).siblings().removeClass();
    $(".toplunbo_circle").children().eq(imgIndex).addClass("toplunbo_circle_current");
});
$(".toplunbo_circle").children().click(function(){
    imgIndex=$(this).index();
    console.log(imgIndex)
    $(".autoplay_img").children().eq(imgIndex).stop().fadeIn().siblings().stop().fadeOut();
    $(this).addClass("toplunbo_circle_current");
    $(this).siblings().removeClass();
});
//秒杀专场




$(".shangou_icon_left").click(function(){
    $(this).removeClass("noCurrent");
    $(".shangou_icon_right").addClass("noCurrent");
    $(this).css("color","#E3E1E0");
    $(".shangou_resPic").animate({"left":"234px"})
});
$(".shangou_icon_right").click(function(){
    $(".shangou_icon_left").addClass("noCurrent");
    $(this).removeClass("noCurrent");
    $(this).css("color","#E3E1E0");
    $(".shangou_resPic").animate({"left":"-758px"});

});
$(".shangou_icon_left").hover(function(){
   if($(this).hasClass("noCurrent")==true){
       $(this).css("color","orangered");
   }
},function(){
   $(this).css("color","");
});
$(".shangou_icon_right").hover(function(){
   if($(this).hasClass("noCurrent")==true){
       $(this).css("color","orangered");
   }
},function(){
    $(this).css("color","");
});
//手机部分效果
$(".check_more").hover(function(){
    $(this).css("color","orangered");
    $(".check_more_icon").css({"background":"orangered"});
},function(){
    $(this).css("color","");
    $(".check_more_icon").css({"background":""});
});
$(".phone>li").hover(function(){
    $(this).css({"box-shadow":" 0px 5px 12px -4px"});
   $(this).animate({"bottom":"2px"});
},function(){
    $(this).css({"transform":"","box-shadow":""});
    $(this).animate({"bottom":"0px"});
});
//家电部分效果
$(".jiadianfenlei>li").mouseenter(function(){
   $(this).addClass("current_classify").siblings().removeClass("current_classify");
   $(".home_appliances1>div").eq(1).children("ul").eq(3-$(this).index()).show();
    $(".home_appliances1>div").eq(1).children("ul").eq(3-$(this).index()).siblings().hide();
});
$(".home_appliances1 li").hover(function(){
    $(this).children("div").eq(1).stop().slideDown(200);
    $(this).css({"box-shadow":" 0px 5px 12px -4px"});
    $(this).animate({"bottom":"2px"});
},function(){
    $(this).children("div").eq(1).stop().slideUp(200);
    $(this).css({"transform":"","box-shadow":""});
    $(this).animate({"bottom":"0px"});
});
//为你推推荐
$(".weinituijian li").hover(function(){
    $(this).css({"box-shadow":" 0px 5px 12px -4px"});
    $(this).animate({"bottom":"2px"});
},function(){
    $(this).css({"transform":"","box-shadow":""});
    $(this).animate({"bottom":"0px"});
});
//热评产品
$(".reping_product li").hover(function(){
    $(this).css({"box-shadow":" 0px 5px 12px -4px"});
    $(this).animate({"bottom":"2px"});
},function(){
    $(this).css({"transform":"","box-shadow":""});
    $(this).animate({"bottom":"0px"});
});
//内容
$(".content li").hover(function(){
    $(this).css({"box-shadow":" 0px 5px 12px -4px"});
    $(this).animate({"bottom":"2px"});
},function(){
    $(this).css({"transform":"","box-shadow":""});
    $(this).animate({"bottom":"0px"});
});
//视频
$(".video li").hover(function(){
    $(this).css({"box-shadow":" 0px 5px 12px -4px"});
    $(this).animate({"bottom":"2px"});
},function(){
    $(this).css({"transform":"","box-shadow":""});
    $(this).animate({"bottom":"0px"});
});