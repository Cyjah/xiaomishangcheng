//轮播图实现
var timer;
var num=0;
function go(){
	timer = setInterval(function(){
		num ++;
		if(num>3){
			num = 0;
			$('.lunbo').css({'left':-num*100 + '%'},500);
			num = 1;
		} 
		$('.lunbo').animate({'left':-num*100 + '%'});
		//让索引框移动
		$('.lunbo-bottom li').eq(num).addClass('current');
		$('.lunbo-bottom li').eq(num).siblings().removeClass('current');
		if(num == 3){
			$('.lunbo-bottom li').eq(0).addClass('current');
			$('.lunbo-bottom li').eq(0).siblings().removeClass('current');
		}
	},3000);
}
go();
//鼠标移入清除定时器
$('.out').hover(function(){
	clearInterval(timer);
},function(){
	go();
});
//给索引增加点击事件
$('.lunbo-bottom li').click(function(){
	$(this).addClass('current');
	$(this).siblings().removeClass('current');
	num = $(this).index();
	$('.lunbo').css('left',-num*100 + '%');
});

$('.middle-bottom-box').hover(function(){
	$(this).addClass('box-current');
},function(){
	$(this).removeClass('box-current');
});

$('.product').hover(function(){
	$('.title-nav-hide').show();
},function(){
	$('.title-nav-hide').hide();
});

$('.item-carousel').mouseenter(function(){
	$(this).addClass('active');
	$(this).siblings().removeClass('active');
});