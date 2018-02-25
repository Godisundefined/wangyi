<?php

	//当前php页面的编码
	header('Access-Control-Allow-Origin:*');
	header('Content-Type:text/html; charset=utf-8'); 
	//链接数据库
	$con = mysqli_connect('localhost','root','','wangyi');
	//指定往数据库添加数据的编码
	mysqli_query($con,'set names utf8');

	$username = $_REQUEST['username'];

	$sql = "select * from reg where username = '$username' ";

	$query = mysqli_query($con , $sql);

	if($query && mysqli_num_rows($query)){
		echo '{"code":"0"}';
	}
	else{
		echo '{"code":"1"}';
	}

?>