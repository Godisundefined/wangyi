//验证用户名
var $username = $('#zhanghao');
var $password = $('#mima');

$username.on(
	{
		click:function(){
		$(this).attr('placeholder','');
		}
	}
)

$username.on({
		blur:function(){
		var value = $(this).val().trim();
		
		if( isPhone(value) ){

			ajax1(value);
		}else{
			$('.result').html('手机号格式错误').css('color','red');
			$username.val('');
			$('.inputbox').eq(0).css('border-color','red');
		}

	}
})

function isPhone(phoneinput){
	var str = phoneinput;
	var reg = /^[1][3,4,5,7,8][0-9]{9}$/;
	if(!reg.test(str)){
		return false;
	}else{
		return true;
	}
}

	function ajax1(val){
		$.ajax({
			url:'http://localhost/wangyi/dist/php/reg1.php',
			type:'get',
			data:{username:val},
			async:true,
			success:function(data){
				var json = JSON.parse(data)
				if(json.code == "0"){

					$('.result').html('该用户已注册').css('color','red');
					$username.val('');
				}else{
					$('.result').html('用户名可用').css('color','green');
				}
			},
			error:function(err){
			console.log(111);
		}
		})
	}

//获取验证码
	var $phone_btn = $('.phone_btn').eq(0);
	$phone_btn.on('click',function(){

	})
//获取用户输入的密码并验证
	var $password =  $('#mima');
	$password.on('click',function(){
		$(this).attr('placeholder','');
		
	})
	$password.on('blur',function(){
		var value = $(this).val().trim();
		if( isPassword(value) ){
			console.log('密码可以用')
		}else{
			console.log('请重新输入')
		}
	})

	function isPassword(password){
		var str = password;
		////必须为字母加数字且长度不小于8位
		 if (str == null || str.length <8) {
        return false;
   		 }
	    var reg1 = new RegExp(/^[0-9A-Za-z]+$/);
	    if (!reg1.test(str)) {
	        return false;
	    }
	    var reg = new RegExp(/[A-Za-z].*[0-9]|[0-9].*[A-Za-z]/);
	    if (reg.test(str)) {
	        return true;
	    } else {
	        return false;
	    }

	}

//提交数据库
	var $submit = $('.Log').eq(0);

	 $submit.on('click',function(){
	 	var usercon = $username.val();
	 	var userpass = $password.val();
	 	console.log(userpass)
	 	if( isPhone(usercon) && isPassword(userpass)){

	 		$.ajax({
			url:'http://localhost/wangyi/dist/php/reg2.php',
			type:'get',
			data:{username:usercon,password:userpass},
			async:true,
			success:function(data){
				var json = JSON.parse(data);
				
				if(json.code == "0"){
					setTimeout(function(){ window.location.href = "http://localhost:8888/html/index.html" },1000);
				}
			},
			error:function(err){
			
			}
		})
	 	}
	 })

