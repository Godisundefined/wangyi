	var $username = $('#usernum');
	var $Log = $('.Log').eq(0);
	var $Log1 = $('.Log').eq(1);

	var $userphone = $('#userphone');
	var $userpassword = $('#userpassword');


	$('.ph').eq(0).on('click',function(){
		$(this).attr('class','active ph');
		$('#em').attr('class','');
		$('.content_phone').css('display','block');
		$('.content_email').css('display','none');
	});

	$('#em').on('click',function(){
		$('.ph').eq(0).attr('class','ph');
		$(this).attr('class','active');
		$('.content_phone').css('display','none');
		$('.content_email').css('display','block');
	});





	$username.on('click',function(){
		$(this).attr('placeholder','');
	});

	$userphone.on('click',function(){
		$(this).attr('placeholder','');
	});

	$userpassword.on('click',function(){
		$(this).attr('placeholder','');
	});	


	// $Log.on('click',function(){
		
	// 	var value = $username.val().trim();
	// 	ajax(value);
	// })

	$Log1.on('click',function(){
		
		var value = $userphone.val().trim();
		var Val = $userpassword.val().trim();
		console.log(Val)
		ajax(value,Val);
	})

	function ajax(value,Val){
		$.ajax({
			url:'http://localhost/wangyi/src/php/login.php',
			type:'get',
			data:{username:value,password:Val},
			datatype:'json',
			async:true,
			success:function (data){			
				var json = JSON.parse(data);
				if(json.code == "0"){
					setTimeout(function(){ window.location.href = "http://localhost:8888/html/index.html" },1000);
				}
			},
			error:function(err){
				console.log(err);
			}
		})
	}

