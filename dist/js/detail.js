//----------------------topNav--------------------------
var topNav_content = document.getElementById('topNav_content');
var topNavphone = document.getElementById('topNavphone');


 topNavphone.onmouseenter = function () {
 	var topNavphone_d = document.createElement('div');
 	topNavphone_d.id = 'topNavphone_d';
 	topNavphone_d.innerHTML = `
 		<img src="../imgs/2dcode-app3.jpg">
				<b>下载app</b>
				<span>领取1000元新人红包</span>
 	`;
 	topNavphone.appendChild(topNavphone_d);

	 	topNavphone.onmouseleave = function () {
		var timper = setTimeout(function(){
			
		topNavphone.removeChild(topNavphone_d);
		},200)
		console.log(111)


		topNavphone_d.onmouseenter = function(){
			console.log(222)
			clearTimeout(timper)
		}

		topNavphone_d.onmouseleave = function (){
			console.log(333)
			topNavphone.removeChild(topNavphone_d);
			
		}
	}

 }

 //--------------------------------doc------------------------------------
//搜索框功能
var search =  document.getElementById('search');
var search_input = search.children[0];
var suggestList = document.getElementById('suggestList');
var lis = suggestList.getElementsByTagName('li');

	//光标移入
	search_input.addEventListener('focus',function(){
		search_input.placeholder = '';
	})
	
	//光标移出
	search_input.addEventListener('blur',function(){
		search_input.placeholder = '在千万海外产品中搜索';
		suggestList.innerHTML = '';

	})
	
	search_input.addEventListener('input',function(){

		var val = this.value;
		suggestList.innerHTML = '';

		getJSON('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd='+ val + '&json=1&p=3&sid=1433_21090_18560_17001_20928&req=2&csor=1&cb=foo',function(data){
			//console.log(data);

			if(data.status == '0'){
				var list = data.s;
				for(var i=0;i<list.length;i++){
					var li = document.createElement('li');
					li.innerHTML = `${list[i]}`;
					suggestList.appendChild(li);
				}
			}else{
					suggestList.innerHTML = '';
			}
			listenLis();
		})
	}.bind(search_input))

	function listenLis(){
		for(var i =0; i < lis.length;i++){

			lis[i].onmousedown = function(){
				console.log(this)
				console.log(this.innerHTML)
				search_input.value = this.innerHTML;
				console.log(search_input.value)
				suggestList.innerHTML = '';
			}
		}
	};


	//跨域jsonp
	function getJSON(url,cbFn){
		var script = document.createElement('script');
		var re = /cb=(\w+)/;
		url = url.replace( re , function(arg){
			return arg + String(Math.random()).replace(/\./,'');
		});
		var fnName = url.match(re)[1];
		window[fnName] = cbFn;
		script.src = url;
		script.onload = function(){
			document.body.removeChild(script);
			delete window[fnName];
		};
		document.body.appendChild(script);
	}


//三级菜单弹出部分-------lineDiv---------------
 var topLevel = document.getElementById('topLevel');
 var linelist = document.getElementById('linelist');
 var linelist_lis = linelist.getElementsByTagName('li');
 var lineDiv = document.getElementById('lineDiv');
 var lineledt = document.getElementById('lineleft');
 var lineright = document.getElementById('lineright');

 var id;
 var id2;

 var listjson = {
 	"status":"0",
 	"data":[
 		{
 			"id":"0",
 			"left":[
 				{
 					"title":"奶粉",
 					"content":["爱他美","牛栏","a2","喜宝","贝拉米","惠氏","美素佳儿","梅林","雅培","美赞臣","雀巢","合生元","满去加","Pre段","1段","2段","3段","5段（2+）","4段(1+)","6段"]
 				},
 				{
 					"title":"纸尿裤/拉拉裤",
 					"content":["花王","尤妮佳","大王","好奇","帮宝适","妈咪宝贝","班博","丽贝乐","妮飘","NB号","S号","M号","L号","L号","XXL号"]
 				},
 				{
 					"title":"营养辅食",
 					"content":["辅食泥", "米粉米糊","泡芙","溶溶豆","营养品","饼干","肉松面仔","调味品","其他辅食","其他零食"]
 				},
 				{
 					"title":"宝宝用品",
 					"content":["洗漱护肤","护理","喂养","出行","清洁消毒","文具图书","积木","益智玩具","其他玩具","宝宝家居","小家电"]
 				},
 				{
 					"title":"童装童鞋",
 					"content":["童装童鞋","童装","儿童配饰","童鞋"]
 				},
 				{
 					"title":"孕妈必备",
 					"content":["孕妈洗护","孕期营养","产前产后用品","孕妈服","妈咪包"]
 				}
 			],
 			"right":["../imgs/1bvhc6gkh51_120_120.jpg","../imgs/ibu5ibg166.jpg","../imgs/ibwaaevb49.jpg","../imgs/ic8p1ibz13.jpg","../imgs/ic736fqt39.jpg","../imgs/icx9ju3818.jpg","../imgs/id0z24735.jpg","../imgs/iey2wlw933_120_120.jpg","../imgs/ig1o83dv34_120_120.jpg"]
 		},
 		{
 			"id":"1",
 			"left":[
 				{
 					"title":"护肤",
 					"content":["洁面","卸妆","爽肤水","面霜","眼部护理","精华","乳液/凝胶","手/足护理","身体护理","唇部护理","护肤套装","男士面膜","精油芳疗","面部护肤","男士护肤"]
 				},
 				{
 					"title":"面膜",
 					"content":["可莱丝","森田药妆","Montagne jeunesse","丽得姿","SNP","Elizavecca","我的心机","自然晨露","THE BODY SHOP","我的美丽日记","BEYOND","其他面膜"]
 				},
 				{
 					"title":"彩妆",
 					"content":["BB霜/CC霜","唇膏/唇彩","隔离/妆前","粉底","","粉饼/散粉","美甲","眼线","眉笔","睫毛膏","眼影","腮红","遮瑕","高光/修颜","香水","化妆工具","彩妆工具"]
 				},
 				{
 					"title":"防晒修复",
 					"content":["香蕉船","近江兄弟","曼秀雷敦","碧柔","其他防晒"]
 				},
 				{
 					"title":"香水/香氛",
 					"content":["女士香水","男士香水","香水套装","Q版香水","中性香水","其他香水"]
 				}
 			],
 			"right":["../imgs/ieft86iu85_120_120.jpg","../imgs/idvqc2kv42.jpg","../imgs/icc1uivj43.jpg","../imgs/ii71no6h49_120_120.jpg","../imgs/idv0dp6a35.jpg","../imgs/igats98t62_120_120.jpg","../imgs/ieft6s0945_120_120.jpg","../imgs/ijatm0c894_120_120.jpg","../imgs/ifxc1ubr35_120_120.jpg"]
 		},
 		{
 			"id":"2",
 			"left":[
 				{
 					"title":"精选大牌",
 					"content":["MICHAEL KORS","Kipling 凯浦林","Kate Spade","Rebecca Minkoff","土拨鼠"]
 				},
 				{
 					"title":"手表配饰",
 					"content":["墨镜","眼镜","腰带","项链","手镯","大牌手表","流行饰品","围巾/丝巾","Zippo 打火机","军刀","其他配件"]
 				},
 				{
 					"title":"女士箱包",
 					"content":["斜挎包","手提包","手拿包","双肩包","化妆包","钱包/卡包","附件包"]
 				},
 				{
 					"title":"女士箱包",
 					"content":["斜挎包","手提包","手拿包","双肩包","化妆包","钱包/卡包","附件包"]
 				},
 				{
 					"title":"服饰内衣",
 					"content":["男装","女装","丝袜","Calvin Klein 卡文克莱","睡衣/家居服","套装内衣"]
 				},
 				{
 					"title":"男士箱包",
 					"content":["斜挎包","手拿包","双肩包","商务包","钱包/卡包","网易考拉拉杆箱","手提包","旅行包","腰包/胸包"]
 				},
 				{
 					"title":"鞋",
 					"content":["女鞋","男鞋","户外鞋"]
 				}
 			],
 			"right":["../imgs/id2q3etz98.jpg","../imgs/id1tosf320.jpg","../imgs/id2fm4ms50.jpg","../imgs/ii8tv4yk15_120_120.jpg","../imgs/id2pp8658.jpg","../imgs/ibxec5al87.jpg","../imgs/id5kjrfg80.jpg","../imgs/ifyzegfa15_120_120.jpg","../imgs/idj01llj78.jpg",]
 		},
 		{
 			"id":"3",
 			"left":[

 			],
 			"right":[

 			]
 		},
 		{
 			"id":"4",
 			"left":[

 			],
 			"right":[

 			]
 		},
 		{
 			"id":"5",
 			"left":[

 			],
 			"right":[

 			]
 		},
 		{
 			"id":"6",
 			"left":[

 			],
 			"right":[

 			]
 		},
 		{
 			"id":"7",
 			"left":[

 			],
 			"right":[

 			]
 		},
 		{
 			"id":"8",
 			"left":[

 			],
 			"right":[

 			]
 		},
 		{
 			"id":"9",
 			"left":[

 			],
 			"right":[

 			]
 		}
 	]
 }

 

  topLevel.onmouseenter = function (){
	
  	linelist.style.display = 'block';  
  }

  topLevel.onmouseleave = function (){
  	 id = setTimeout(function(){
  	lineDiv.style.display = 'none';
  		},200)
  }

  	linelist.onmouseenter = function (){
  		clearTimeout(id);

	  	lineDiv.style.display = 'block';

     	listenline();
	  }
    linelist.onmouseleave = function (){
    	id2 = setTimeout(function(){
		  	lineDiv.style.display = 'none';
		  	linelist.style.display = 'none';
    	},200)

	  }
	 lineDiv.onmouseenter = function (){
	 	clearInterval(id2);
	 }
	 lineDiv.onmouseout = function (){

	 }

	 function listenline(){
	 	for(var i=0;i < linelist_lis.length;i++){
	 		linelist_lis[i].id = i;
	 		linelist_lis[i].onmouseenter = function (){
	 			createleft(this.id);
	 			createright(this.id);
	 			
	 		}

	 		linelist_lis[i].onmouselevae = function (){
	 			lineleft.innerHTML = '';
	 		}
	 	}
	 	
	 }

	 function createleft(id){

	 	var lineleft = document.getElementById('lineleft');
	 	lineleft.innerHTML = '';
	 	
	 	var data = listjson.data[id].left;
	 	
	 	for(var i = 0; i < data.length;i++){
	 
	 		var lineleft_1 = document.createElement('div');
	 		
	 		lineleft_1.className = 'lineleft_1';

	 		lineleft_1.innerHTML = `
		 			<p><a href="">${data[i].title}</a></p>
					<div></div>`

	 		lineleft.appendChild(lineleft_1);

	 		var div = lineleft_1.getElementsByTagName('div')[0];

	 		for(var j = 0; j < data[i].content.length;j++){
	 			
	 			var a = document.createElement('a');
	 			a.innerHTML = data[i].content[j];
	 			div.appendChild(a)
	 		}
	 				
	 	}

	 }

	 function createright(id){
	 	var lineright = document.getElementById('lineright');
	 	lineright.innerHTML = '';

	 	var data = listjson.data[id].right;
	 	for(var i = 0; i < data.length; i++){
	 		var a = document.createElement('a');
	 		a.innerHTML = `<img src="${data[i]}">`;
	 		lineright.appendChild(a);
	 	}

	 }

//--------------------------------act------------------------------
var acts = document.getElementsByClassName('act');


	for(var i = 0; i < acts.length;i++){

	}
	function Menu(elems,data){
		this.Menu = elems;
		
	}


	var menu1 = new Menu( acts );


//--------------------------------mainImg------------------------------
var showImgbox = document.getElementsByClassName('showImgbox')[0];
var mainImg = document.getElementById('mainImg');
var listul = document.getElementsByClassName('listimg')[0];
var lisImg = listul.getElementsByTagName('img');
var arr = ['../imgs/1bn0q7ug827_800_800.jpg','../imgs/1bkm2q76v5_800_800 (1).jpg','../imgs/1bkm2q7p048_800_800 (1).jpg'];

	function DetailImg(mainImg){
		this.mainImg = mainImg;
		

	}

	DetailImg.prototype.init = function(){
		this.tabing();
		
	}

	DetailImg.prototype.tabing = function (){
			
		for(var i = 0; i < lisImg.length; i++){
			lisImg[i].index = i;
			lisImg[i].onclick = this.tabImg;
		}
	}
	DetailImg.prototype.tabImg = function(){
		 
		mainImg.src =  arr[this.index];
	}

	var detail1 =  new  DetailImg( mainImg )
	detail1.init();







