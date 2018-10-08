$('#logingo').click(function(){
	var name = $('#username').val();
	var pass = $('#password').val();
	if(name == 'tanhh' && pass == '123'){
		alert('进入个人中心!');
		window.location = 'myCenter.html';
	}
});