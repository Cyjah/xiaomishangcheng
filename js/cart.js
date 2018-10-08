$(".header_content>ul>li").eq(2).mouseenter(function(){
   $(".user_service").slideDown(100);
   $(".header_content>ul>li").eq(1).children().html("");
});
$(".header_content>ul>li").eq(2).mouseleave(function(){
   $(".user_service").slideUp(100);
   $(".header_content>ul>li").eq(1).children().html("|");
});
$(".user_service").mouseenter(function(){
    $(this).show();
});
// 购物车选中和全选
var haveChoosed=$(".per_choose").length;              //已经被选中的商品个数
//鼠标移入选框时出现勾
$(".gou").mouseenter(function(){
    $(this).children().css("visibility","visible");
});
//鼠标移出选框时隐藏勾
$(".gou").mouseleave(function(){
   if($(this).hasClass("xuanzhong")==true){
       $(this).children().css("visibility","visible");
   }else{
       $(this).children().css("visibility","hidden");
   }
});
//全选
var all_subtotal=0;
$(".all").click(function(){
    var each_subtotal=[];
    if($(".gou").eq(0).hasClass("xuanzhong")==false){
        $(".gou").addClass("xuanzhong");
        $(".gou").children().css("visibility","visible");
        //计算选中所有商品的价格总和
        for(var i=0;i<$(".per_choose").length;i++) {
            each_subtotal[i] = $(".per_choose").eq(i).parent().parent().children(".subtotal").children("span").eq(0).html();
            all_subtotal = all_subtotal + parseInt(each_subtotal[i]);
        }
        $(".all_price").children("span").eq(5).html(all_subtotal);
    }else{
        $(".gou").removeClass("xuanzhong");
        $(".gou").children().css("visibility","hidden");
        all_subtotal=0;
        $(".all_price").children("span").eq(5).html(all_subtotal);
    }
});
//选取单个
$(".per_choose").click(function(){
   if($(this).hasClass("xuanzhong")==false){
       $(this).addClass("xuanzhong");
       haveChoosed++;
       //计算选中所有商品的价格总和
       var current_=$(this).parent().parent().children(".subtotal").children("span").eq(0).html();
       console.log(nnn)
       console.log($(this).hasClass("xuanzhong"))
       if($(this).hasClass("xuanzhong")){
           alert()
           all_subtotal=all_subtotal+nnn;
       }
       // for(var i=0;i<$(".per_choose").length;i++) {
       //     if($(".per_choose").eq(i).hasClass("xuanzhong")){
       //         each_subtotal[i] = $(".per_choose").eq(i).parent().parent().children(".subtotal").children("span").eq(0).html();
       //     }
       //     all_subtotal = all_subtotal + parseInt(each_subtotal[i]);
       // }
       $(".all_price").children("span").eq(5).html(all_subtotal);
       if(haveChoosed==$(".gou").length-1){
           $(".all").addClass("xuanzhong");
           $(".all").children().css("visibility","visible");
       }
   } else{
       $(this).removeClass("xuanzhong");
       $(this).children().css("visibility","hidden");
       haveChoosed--;
       if(haveChoosed!=$(".gou").length-1){
               $(".all").removeClass("xuanzhong");
               $(".all").children().css("visibility","hidden");

       }

   }
});
//添加、减少商品数量功能
$(".jia").click(function(){
    num=parseInt($(this).parent().parent().children().eq(1).html());
    num=num+1;
    $(this). parent().parent().children().eq(1).html(num);
    //计算单件选中商品所有数量的总价格
    var current_goods_price=$(this).parent().parent().parent().parent().children(".price_per_unit").children("span").eq(0).html();
    var current_goods_price_all=num*current_goods_price;
    $(this).parent().parent().parent().parent().children(".subtotal").children("span").eq(0).html(current_goods_price_all);
});
$(".jian").click(function(){
    num=parseInt($(this).parent().parent().children().eq(1).html());
    if(num==1){
        num=1;
    }else{
        num=num-1;
        $(this). parent().parent().children().eq(1).html(num);
        //计算单件选中商品所有数量的总价格
        var current_goods_price=$(this).parent().parent().parent().parent().children(".price_per_unit").children("span").eq(0).html();
        var current_goods_price_all=num*current_goods_price;
        $(this).parent().parent().parent().parent().children(".subtotal").children("span").eq(0).html(current_goods_price_all);
    }

});
//删除购物车中的商品
var idx=0;
var tsBg_height=$(document).height();
$(".operate>span").click(function(){
    $(".tishi_box").slideDown();
    $(".tishi_bg").css({"height":tsBg_height+"px","background":"#333","display":"block","opacity":"0.6"});
    idx=$($(this).parent().parent()).index();
});
$(".tishi_box>span").eq(0).click(function(){
    $(".tishi_box").slideUp();
    $(".tishi_bg").css({"display":"none"});
});
$(".tishi_box>span").eq(1).click(function(){
    $(".tishi_box").slideUp();
    $(".tishi_bg").css({"display":"none"});
});
$(".tishi_box>span").eq(2).click(function(){
    $(".cart_content").children().eq(idx).remove();
    $(".tishi_box").slideUp();
    $(".tishi_bg").css({"display":"none"});
});
$(".operate span").mouseenter(function(){
    $(this).css({"background":"#E53935","color":"#FFF"})
});
$(".operate span").mouseleave(function(){
    $(this).css({"background":"#FFF","color":"#747474"})
});
//鼠标移入推荐商品效果
$(".tuijian li").mouseenter(function(){
    $(this).siblings().children("div").css("display","none");
    $(this).children("div").css("display","block");
});
$(".tuijian li").mouseleave(function(){
    $(this).children("div").css("display","none");
});
$(".tuijian li div").mouseenter(function(){
    $(this).css({"background":"#ff6700","color":"#FFF"});
});
$(".tuijian li div").mouseleave(function(){
    $(this).css({"background":"#FFF","color":"#ff6700"});
});
