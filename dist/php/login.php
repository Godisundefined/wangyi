<?php
	//允许跨域访问
	header('Access-Control-Allow-Origin:*');
	//当前php页面的编码
	header('Content-Type:text/html; charset=utf-8');
	//连接数据库
	$con = mysqli_connect('localhost','root','','wangyi');
	//指定往数据库添加的数据编码
	mysqli_query($con,'set names utf8');

	//接收请求的参数
	$username = $_REQUEST['username'];
	$password = $_REQUEST['password'];

	//编辑命令语句
	$sql = "select * from reg where username = '$username' && password = '$password'";

	$query = mysqli_query($con,$sql);

	if($query && mysqli_num_rows($query)){
		echo '{"code":"0"}';
		
	}else{
		echo '{"code":"1"}';
	}


?>