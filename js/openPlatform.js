//给屏幕添加滚动事件
$(window).scroll(function(){
	var x = $(window).scrollTop();
	if(x>480){
		$('.back-top').fadeIn();
	}else{
		$('.back-top').fadeOut();
	}
});
//给回到顶部的箭头添加点击事件
$('.back-top').click(function(){
	$('html,body').animate({'scrollTop':0},500);
});

$('.header-nav li').hover(function(){
	$(this).children('a').css('color','deepskyblue');
},function(){
	$(this).children('a').css('color','white');
});

$('.current').hover(function(){
	$('.header-hide').show();
},function(){
	$('.header-hide').hide();
});

$('.header-hide').mouseenter(function(){
	$(this).show();
});
$('.header-hide').mouseleave(function(){
	$(this).hide();
});
$('.six-bottom').hover(function(){
	$('.wechat').show();
},function(){
	$('.wechat').hide();
});
