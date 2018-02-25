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






//-----------------------banner--------------------------------
var banner = document.getElementById('banner');
var slider = document.getElementById('slider');
var sliderlis = slider.getElementsByTagName('li');
var btn = document.getElementById('btn');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var ol = document.getElementById('pagination');
var bullets = document.getElementsByClassName('bullet');
var num = 0;
sliderlis[0].style.opacity = 1;

function active(){
	for(var i = 0; i< bullets.length;i++){
			bullets[i].className = 'bullet';
		}
		bullets[num].className = 'bullet active';
}

prev.onclick = function () {
	num--;
	if(num == -1){
		num = sliderlis.length-1;
	}
	for(var i = 0; i <sliderlis.length;i++ ){
		move(sliderlis[i],{opacity:0},1000,'linear')		
	}
	move(sliderlis[num],{opacity:1},1000,'linear')

	active();
}

next.onclick = function () {
	num++;
	if(num == sliderlis.length){
		num = 0;
	}
	for(var i = 0; i <sliderlis.length;i++ ){
		move(sliderlis[i],{opacity:0},1000,'linear')		
	}
	move(sliderlis[num],{opacity:1},1000,'linear')	

	active()
}

auto()
var timper1;
function auto(){
	timper1 = setInterval(function(){
		num++;
			if(num == sliderlis.length){
			num = 0;
		}
		for(var i = 0; i <sliderlis.length;i++){
			move(sliderlis[i],{opacity:0},1000,'linear')
		}
		active()
		move(sliderlis[num],{opacity:1},1000,'linear')
	},3000)
}

function stopAuto(){
	clearInterval(timper1);
}

btn.onmouseover = function () {
	stopAuto();
}
btn.onmouseout = function () {
	auto();
}

for(var i = 0; i< bullets.length;i++){
	bullets[i].index = i;
	bullets[i].onmouseover = function(){
		active();
		num = this.index;
		for(var i = 0; i <sliderlis.length;i++ ){
		move(sliderlis[i],{opacity:0},1000,'linear')		
		}
		move(sliderlis[num],{opacity:1},1000,'linear')
		active()
			
	}
	bullets[i].onmouseout = function (){
			auto();
		}


}







//-------------------------------contentlist---------------------------------
	var contentjson = {
		"status":"0",
		"contentlist1":{
			"len":"10",
			"img":["../imgs/1bn0q7ug827_800_800.jpg","../imgs/onlinei93tpkfz10146.jpg","../imgs/ix5qt6699_800_800.jpg","../imgs/iv2dwift24_800_800.jpg","../imgs/iszr7ho672_800_800.jpg","../imgs/itc9itbg85_800_800.jpg","../imgs/iqm0260d77_800_800.jpg","../imgs/onlineig31j88m10038.jpg","../imgs/iwxbfqtn47_800_800.jpg","../imgs/onlinei5i0r2wr10439.jpg"],
			
			"num":["1222","2014","1025","1223","1254","4587","1235","5637","2301","2124"],
			"content":["买来送给男朋友男人也可以很美","用的时候加水在手上很容易起泡","拆开包装，无纺布的面膜有点厚，但是里面的精华还是很多滴～～～","只有你能脱下我的面具和伪装！","非常的划算，卸妆很干净，很彻底，感觉很滋润","非常的划算，卸妆很干净，很彻底，感觉很滋润","本人平常主要以隔离、粉底液、粉饼基本提气色为主","一点都不刺激！就像是能卸妆的纯净水一样温和！","这款你稍微卸卸隔离、粉底或者防水性没那么高的眼妆肯定没问题啊！","瓶不好操作，我是把它灌入到压嘴小瓶里面使用"],
			"information":["【2件装】SHISEIDO 资生堂 UNO 男士洗面奶 黑炭控油型 130克","【新人专享】LUSH 露诗小紅帽新生防脱生发洗发皂 55克","SNP 海洋燕窝高倍补水美白面膜 25毫升/片10片装 拒绝干燥肌","【新人专享】BIODERMA 贝德玛 舒妍多效卸妆水 500毫升 粉水 中干皮肤用","SHISEIDO 资生堂 洗颜专科 超柔密泡泡洗面乳 120克/支 3支装","【澳洲本土版】Devondale 德运 高钙脱脂成人牛奶粉 1000克/袋","佑天兰 蜂蜜黄金果冻面膜+胶原蛋白黄金果冻面膜+玻尿酸黄金果冻面膜","LA ROCHE-POSAY 理肤泉 B5痘印疤痕舒缓修复霜 100毫升","A.H.C 第四代蓝金全脸修护眼霜 30毫升 一支涂全脸","【新人专享】KOBAYASHI 小林降温贴 0-2岁用 12枚入"],
			"keyword":["清爽洁净皮脂污垢","滋补头皮，调整油脂分泌","Beautiful Days热推","敏感肌首选温和卸妆","温和配方，温柔呵护肌肤","澳洲成年人补钙专用","让肌肤“童颜化”","镇定修复祛痘印","一支涂全脸，减轻肌肤老化","备受日本妈妈推崇"],
			"price":["45","49.9","69","82","69","49.9","99","64.9","55","9.9"]
		},
		"contentlist2":{
			"len":"10",
			"img":["../imgs/imrghs0n21_800_800.jpg","../imgs/onlineifxujcks12401.jpg","../imgs/1bmbt1slp14_800_800.jpg","../imgs/1bju9m8ll21_800_800.jpg","../imgs/onlineifxuoraz12494.jpg","../imgs/izjtke4z3_800_800.jpg","../imgs/onlineifxuql2t12518.jpg","../imgs/1bgo7cvpm32_800_800.jpg","../imgs/j164u8k88_800_800.jpg","../imgs/1bkm2r7jl48_800_800.jpg"],
			"num":["1234","4254","4512","2458","5225","2122","22142","2445885","121541","2225"],
			"content":["买来送给男朋友男人也可以很美","用的时候加水在手上很容易起泡","拆开包装，无纺布的面膜有点厚，但是里面的精华还是很多滴～～～","只有你能脱下我的面具和伪装！","非常的划算，卸妆很干净，很彻底，感觉很滋润","非常的划算，卸妆很干净，很彻底，感觉很滋润","本人平常主要以隔离、粉底液、粉饼基本提气色为主","一点都不刺激！就像是能卸妆的纯净水一样温和！","这款你稍微卸卸隔离、粉底或者防水性没那么高的眼妆肯定没问题啊！","瓶不好操作，我是把它灌入到压嘴小瓶里面使用"],
			"information":["KOSE 高丝 婴儿肌玻尿酸保湿面膜 7片","Boots 博姿 天然小黄瓜爽肤水 150毫升","Daiso 大创 胎盘素药用美白化妆水 120毫升","MUJI 无印良品 天然化妆棉 189枚","unicharm 尤妮佳 Silcot省1/2化妆水化妆棉 40枚","KOSE 高丝 婴儿肌玻尿酸保湿面膜 7片","Boots 博姿 天然小黄瓜爽肤水 150毫升","Daiso 大创 胎盘素药用美白化妆水 120毫升","MUJI 无印良品 天然化妆棉 189枚","unicharm 尤妮佳 Silcot省1/2化妆水化妆棉 40枚"],
			"keyword":["满满胶原蛋白，还你嫩滑婴儿肌","博姿护肤品天然效果好","博姿护肤品天然效果好","敏感肌首选温和卸妆","温和配方，温柔呵护肌肤","澳洲成年人补钙专用","让肌肤“童颜化”","镇定修复祛痘印","一支涂全脸，减轻肌肤老化","备受日本妈妈推崇"],
			"price":["45","49","69.9","82","69","49.9","99","64.9","55","9.9"]
		},
		"contentlist3":{
			"len":"20",
			"img":["../imgs/onlinei7sqxb4o10071.jpg","../imgs/1bn0q7ug827_800_800 (1).jpg","../imgs/1bmbt1slp14_800_800.jpg","../imgs/1bju9m8ll21_800_800.jpg","../imgs/onlineifxuoraz12494.jpg","../imgs/izjtke4z3_800_800.jpg","../imgs/onlineifxuql2t12518.jpg","../imgs/1bgo7cvpm32_800_800.jpg","../imgs/j164u8k88_800_800.jpg","../imgs/1bkm2r7jl48_800_800.jpg","../imgs/onlinei7q645fq10029.jpg","../imgs/onlineihhj518a12846.jpg","../imgs/in2qz92y18_800_800.jpg","../imgs/iojz4k4i9_800_800.jpg","../imgs/onlineielbfu5y13350.jpg","../imgs/onlinei8zimnff10725.jpg","../imgs/onlineid5ll0ps11305.jpg","../imgs/onlineif3n6iqc10149.jpg","../imgs/onlineihlc9vhw11033.jpg","../imgs/im8vij2i23_800_800.jpg"],
			"num":["1234","4254","4512","2458","5225","2122","22142","2445885","121541","2225","1234","4254","4512","2458","5225","2122","22142","2445885","121541","2225"],
			"content":["买来送给男朋友男人也可以很美","用的时候加水在手上很容易起泡","拆开包装，无纺布的面膜有点厚，但是里面的精华还是很多滴～～～","只有你能脱下我的面具和伪装！","非常的划算，卸妆很干净，很彻底，感觉很滋润","非常的划算，卸妆很干净，很彻底，感觉很滋润","本人平常主要以隔离、粉底液、粉饼基本提气色为主","一点都不刺激！就像是能卸妆的纯净水一样温和！","这款你稍微卸卸隔离、粉底或者防水性没那么高的眼妆肯定没问题啊！","瓶不好操作，我是把它灌入到压嘴小瓶里面使用","买来送给男朋友男人也可以很美","用的时候加水在手上很容易起泡","拆开包装，无纺布的面膜有点厚，但是里面的精华还是很多滴～～～","只有你能脱下我的面具和伪装！","非常的划算，卸妆很干净，很彻底，感觉很滋润","非常的划算，卸妆很干净，很彻底，感觉很滋润","本人平常主要以隔离、粉底液、粉饼基本提气色为主","一点都不刺激！就像是能卸妆的纯净水一样温和！","这款你稍微卸卸隔离、粉底或者防水性没那么高的眼妆肯定没问题啊！","瓶不好操作，我是把它灌入到压嘴小瓶里面使用"],
			"information":["KOSE 高丝 婴儿肌玻尿酸保湿面膜 7片","Boots 博姿 天然小黄瓜爽肤水 150毫升","Daiso 大创 胎盘素药用美白化妆水 120毫升","MUJI 无印良品 天然化妆棉 189枚","unicharm 尤妮佳 Silcot省1/2化妆水化妆棉 40枚","KOSE 高丝 婴儿肌玻尿酸保湿面膜 7片","Boots 博姿 天然小黄瓜爽肤水 150毫升","Daiso 大创 胎盘素药用美白化妆水 120毫升","MUJI 无印良品 天然化妆棉 189枚","unicharm 尤妮佳 Silcot省1/2化妆水化妆棉 40枚","KOSE 高丝 婴儿肌玻尿酸保湿面膜 7片","Boots 博姿 天然小黄瓜爽肤水 150毫升","Daiso 大创 胎盘素药用美白化妆水 120毫升","MUJI 无印良品 天然化妆棉 189枚","unicharm 尤妮佳 Silcot省1/2化妆水化妆棉 40枚","KOSE 高丝 婴儿肌玻尿酸保湿面膜 7片","Boots 博姿 天然小黄瓜爽肤水 150毫升","Daiso 大创 胎盘素药用美白化妆水 120毫升","MUJI 无印良品 天然化妆棉 189枚","unicharm 尤妮佳 Silcot省1/2化妆水化妆棉 40枚"],
			"keyword":["满满胶原蛋白，还你嫩滑婴儿肌","博姿护肤品天然效果好","博姿护肤品天然效果好","敏感肌首选温和卸妆","温和配方，温柔呵护肌肤","澳洲成年人补钙专用","让肌肤“童颜化”","镇定修复祛痘印","一支涂全脸，减轻肌肤老化","备受日本妈妈推崇","满满胶原蛋白，还你嫩滑婴儿肌","博姿护肤品天然效果好","博姿护肤品天然效果好","敏感肌首选温和卸妆","温和配方，温柔呵护肌肤","澳洲成年人补钙专用","让肌肤“童颜化”","镇定修复祛痘印","一支涂全脸，减轻肌肤老化","备受日本妈妈推崇"],
			"price":["45","49","69.9","82","69","49.9","99","64.9","55","9.9","45","49","69.9","82","69","49.9","99","64.9","55","9.9"]
		},
		"contentlist4":{
			"len":"15",
			"img":["../imgs/izjtke4z3_800_800.jpg","../imgs/onlineifxuql2t12518.jpg","../imgs/1bgo7cvpm32_800_800.jpg","../imgs/j164u8k88_800_800.jpg","../imgs/1bkm2r7jl48_800_800.jpg","../imgs/onlinei7q645fq10029.jpg","../imgs/onlineihhj518a12846.jpg","../imgs/in2qz92y18_800_800.jpg","../imgs/iojz4k4i9_800_800.jpg","../imgs/onlineielbfu5y13350.jpg","../imgs/onlinei8zimnff10725.jpg","../imgs/onlineid5ll0ps11305.jpg","../imgs/onlineif3n6iqc10149.jpg","../imgs/onlineihlc9vhw11033.jpg","../imgs/im8vij2i23_800_800.jpg"],
			"num":["2122","22142","2445885","121541","2225","1234","4254","4512","2458","5225","2122","22142","2445885","121541","2225"],
			"content":["本人平常主要以隔离、粉底液、粉饼基本提气色为主","一点都不刺激！就像是能卸妆的纯净水一样温和！","这款你稍微卸卸隔离、粉底或者防水性没那么高的眼妆肯定没问题啊！","瓶不好操作，我是把它灌入到压嘴小瓶里面使用","买来送给男朋友男人也可以很美","用的时候加水在手上很容易起泡","拆开包装，无纺布的面膜有点厚，但是里面的精华还是很多滴～～～","只有你能脱下我的面具和伪装！","非常的划算，卸妆很干净，很彻底，感觉很滋润","非常的划算，卸妆很干净，很彻底，感觉很滋润","本人平常主要以隔离、粉底液、粉饼基本提气色为主","一点都不刺激！就像是能卸妆的纯净水一样温和！","这款你稍微卸卸隔离、粉底或者防水性没那么高的眼妆肯定没问题啊！","瓶不好操作，我是把它灌入到压嘴小瓶里面使用"],
			"information":["KOSE 高丝 婴儿肌玻尿酸保湿面膜 7片","Boots 博姿 天然小黄瓜爽肤水 150毫升","Daiso 大创 胎盘素药用美白化妆水 120毫升","MUJI 无印良品 天然化妆棉 189枚","unicharm 尤妮佳 Silcot省1/2化妆水化妆棉 40枚","KOSE 高丝 婴儿肌玻尿酸保湿面膜 7片","Boots 博姿 天然小黄瓜爽肤水 150毫升","Daiso 大创 胎盘素药用美白化妆水 120毫升","MUJI 无印良品 天然化妆棉 189枚","unicharm 尤妮佳 Silcot省1/2化妆水化妆棉 40枚","KOSE 高丝 婴儿肌玻尿酸保湿面膜 7片","Boots 博姿 天然小黄瓜爽肤水 150毫升","Daiso 大创 胎盘素药用美白化妆水 120毫升","MUJI 无印良品 天然化妆棉 189枚","unicharm 尤妮佳 Silcot省1/2化妆水化妆棉 40枚"],
			"keyword":["澳洲成年人补钙专用","让肌肤“童颜化”","镇定修复祛痘印","一支涂全脸，减轻肌肤老化","备受日本妈妈推崇","满满胶原蛋白，还你嫩滑婴儿肌","博姿护肤品天然效果好","博姿护肤品天然效果好","敏感肌首选温和卸妆","温和配方，温柔呵护肌肤","澳洲成年人补钙专用","让肌肤“童颜化”","镇定修复祛痘印","一支涂全脸，减轻肌肤老化","备受日本妈妈推崇"],
			"price":["49.9","99","64.9","55","9.9","45","49","69.9","82","69","49.9","99","64.9","55","9.9"]
		}

	}



//面向对象思想去解决问题(结构层次相同)

	var contentlist1 = document.getElementById('contentlist1');
	var contentlist2 = document.getElementById('contentlist2');
	var contentlist3 = document.getElementById('contentlist3');
	var contentlist4 = document.getElementById('contentlist4');
	var contentlist5 = document.getElementById('contentlist5');
	var contentlist6 = document.getElementById('contentlist6');

	function ContentList(elem,data){
		this.parent = elem;
		this.data = data;
		this.ul = this.parent.getElementsByClassName('list')[0];
		this.lis = this.parent.getElementsByClassName('menu');
		this.liuyan = this.parent.getElementsByClassName('liuyan');
	}

	ContentList.prototype.init = function () {
		this.creatLi();
		this.mouseover();
		this.leave();
	}

	ContentList.prototype.creatLi = function () {
		for(var i = 0; i < this.data.len; i++){
			var li = document.createElement('li');
			li.className = 'menu';
			li.innerHTML = `
				<a href="" class="pic"><img src="${this.data.img[i]}"><em>
				<ul id="emptystar">
					<li class="l"><i class="iconfont">&#xe79f;</i></li>
					<li class="l"><i class="iconfont">&#xe79f;</i></li>
					<li class="l"><i class="iconfont">&#xe79f;</i></li>
					<li class="l"><i class="iconfont">&#xe79f;</i></li>
					<li class="l"><i class="iconfont">&#xe79f;</i></li>
				</ul>
				<span id="pinglun">${this.data.num[i]}条评论</span>
				<span class="liuyan">${this.data.content[i]}</span>    
			</em></a>
			<div>
				<p><a href="">${this.data.information[i]}</a></p>
				<a href="">${this.data.keyword[i]}</a>
				<div id="post">包邮</div>
				<strong>￥${this.data.price[i]}</strong> <span class="c">立即购买</span>
			</div>		
			`
			this.ul.appendChild(li);
		}
	}
	ContentList.prototype.mouseover = function (){
		for(var i = 0; i < this.lis.length;i++){
			this.lis[i].onmouseenter = this.move;
		}
	}

	ContentList.prototype.leave = function (){
		for(var i = 0; i < this.lis.length;i++){
			this.lis[i].onmouseleave = this.Leave;
		}
	}

	ContentList.prototype.Leave = function (){
		var em = this.getElementsByTagName('em')[0];
		var span = this.getElementsByClassName('liuyan')[0];
		em.style.display = 'none';
		span.style.left = 195 + 'px';
	}

	ContentList.prototype.move = function (){
		var span = this.getElementsByClassName('liuyan')[0];
		var em = this.getElementsByTagName('em')[0];
		span.style.left = 195 + 'px';
		em.style.display = 'block';
		move(span,{left:5},5000,'linear');
	}


	var json = contentjson.contentlist1;
	var con1 = new ContentList(contentlist1,json);
	con1.init();

	var json2 = contentjson.contentlist2;
	var con2 = new ContentList(contentlist2,json2);
	con2.init();

	var json3 = contentjson.contentlist3;
	var con3 = new ContentList(contentlist3,json3);
	con3.init();

	var json4 = contentjson.contentlist4;
	var con4 = new ContentList(contentlist4,json4);
	con4.init();

	var json5 = contentjson.contentlist4;
	var con5 = new ContentList(contentlist5,json5);
	con5.init();

	var json6 = contentjson.contentlist1;
	var con6 = new ContentList(contentlist6,json6);
	con6.init();


//-----------------------侧边栏----------------------------------
	var rightlist = document.getElementById('rightlist');
	var a = rightlist.getElementsByClassName('f');

	//鼠标移入改变按钮颜色
	for(var i = 0; i < a.length;i++){
		a[i].index = i;
		a[i].onmouseenter = function (){
			for(var i = 0; i < a.length;i++){
				a[i].className = 'f';
			}
			this.className = 'active f';
		};
		a[i].onmouselevae = function (){
			for(var i = 0; i < a.length;i++){
				a[i].className = 'f';
			}
		}


	}



// 监听屏幕的滚动距离映射楼层功能
	var posArr = [];

	
		posArr.push(  posTop(contentlist1) );
		posArr.push(  posTop(contentlist2) );
		posArr.push(  posTop(contentlist3) );
		posArr.push(  posTop(contentlist4) );
		posArr.push(  posTop(contentlist5) );
		posArr.push(  posTop(contentlist6) );
	
		console.log(posArr)
		for(var i = 0; i< a.length;i++){
			a[i].index = i;
			a[i].onclick = function (){
				for(var i = 0; i < a.length;i++){
					a[i].className = 'f';
				}
				this.className = 'active f';

				document.documentElement.scrollTop =  posArr[this.index] + 5;
			}
		}





	function posLeft(elem){
		var result = 0;
		while(elem){
			result += elem.offsetLeft;
			elem = elem.offsetParent;
		}
		return result;
	}

	function posTop(elem){
		var result = 0;
		while(elem){
			result += elem.offsetTop;
			elem = elem.offsetParent;
		}
		return result;
	}















  