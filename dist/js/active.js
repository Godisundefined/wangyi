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
		

		topNavphone_d.onmouseenter = function(){
	
			clearTimeout(timper)
		}

		topNavphone_d.onmouseleave = function (){
			
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
		
				search_input.value = this.innerHTML;
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

//--------------------header-----------------------------
var $pos = $('.pos');
var $em = $('.pos').find('em');
var $tabTime = $('#tabTime');
var $timeLis = $('#tabTime').find('li');

var timesArr = [00,07,09,11,13,17,21,24];

	setInterval(run,1000);

	function run(){
		var nowDate = new Date();
	 	var now_year = nowDate.getFullYear();
	 	var now_month = nowDate.getMonth();
	 	var now_date = nowDate.getDate();
	 	var now_hour = nowDate.getHours();

 		for(var i=0;i<timesArr.length;i++){
 		if(  zero(now_hour) >=  timesArr[i] && zero(now_hour) < timesArr[i+1]){

 			$timeLis.eq(i).css({'height':'47','border-bottom':'3px solid #ff2046'});
 			$timeLis.eq(i).find('b').eq(0).css('color','white')
 			$timeLis.eq(i).find('b').eq(1).html(`抢购中`).css('color','red')

 			var targetDate = new Date(now_year,now_month,now_date,timesArr[i+1],00);		
 			
	 		}
	 	}

		var now = new Date();
		var num = Math.floor((targetDate.getTime() - now.getTime())/1000);
		var hours = Math.floor(num%86400/3600);
		var min = Math.floor(num%86400%3600/60);
		var second = Math.floor(num%86400%3600%60);
		$em.first().html( zero(hours)+":"+zero(min)+":"+zero(second) )
	}

	function zero(num){
		if( num < 10){
			return "0" + num;
		}else{
			return "" + num;
		}
	}


//-----------------------tabTime------------------------------------
//时间卡吸顶
	var $tabTime = $('#tabTime');
	var tH = posTop( $tabTime[0] );
	
	window.onscroll = function(){	

		if(document.documentElement.scrollTop >= tH){
			
			$tabTime.eq(0).css({
				'position':'fixed',
				'left':0,
				'top':0
			})
		}else{
			$tabTime.css({
				'position':'absolute',
				'top': tH
			})
		}
	}

	function posTop(elem){
		var result = 0;
		while(elem){
			result += elem.offsetTop;
			elem = elem.offsetParent;
		}
		return result;
	}


//---------------------goodlist---------------------------
var goodsjson = {
	"status":"0",
	"data1":{
		"len":"8",
		"src":["../imgs/5775a5d6-dc53-4ab6-9907-43b956cee350.jpg","../imgs/1bhjnatin6_800_800.jpg","../imgs/fb52894f-6532-4841-af71-9d65e340c1ea.jpg","../imgs/d1258d76-cf2c-466b-824e-52a2a3ba8152.jpg","../imgs/a236349c02ed448e84743d7302af80791508911557172j96mzcvr12675.jpg","../imgs/081625a9-c45e-4180-ac3f-a0140e1aeb99.jpg","../imgs/f788ba3c-1669-4afc-92eb-c8a20f823a1f.jpg","../imgs/742132b7-5db3-4bcd-896d-26fbbeba8423.jpg",],
		"b":["4件装 | ","1件装 | ","2件装 | ","5件装 | ","4件装 | ","2件装 | ","2件装 | ","7件装 | "],
		"cont":['【官方直采】moony 尤妮佳 L 44片/包 4包装 男宝宝用拉拉裤 包装随机','【到手价239】亚瑟士 asics JOG 100 2 慢跑跑步鞋 ','Tommy Hilfiger汤米 男士休闲纯色立领拉链保暖夹克外套 美码偏大一码','【4件装】太阳芦荟社 透明质酸原液 10毫升','HERA 赫妍 生物细胞活性精华神仙水 150毫升 稳定肌肤，补充能量','CPB 肌肤之钥 光采保湿露 清爽型 170毫升','【考拉自营】LONGINES 浪琴名匠系列机械情侣表女表 L2.128.4.78.6','【修身款；建议买大一码】The North Face 乐斯菲斯 秋冬新品防水排湿户外男抓绒三合一冲锋衣 2UC9'],
		"key":['成长必备，拉拉裤','激发宝宝好奇心','设计奖原款，日本官方直邮','四川丑桔，不好看十分好吃','和脱发说拜拜','香味浓郁 层层酥脆','大角度卧躺调节','棉质徽章宽松长袖T恤'],
		"residuum":['278','88','97','270','125','888','2000','1220'] ,
		"sum":['300','288','133','301','300','1020','5000','1800'],
		"currentprice":['60','145','397','35.9','195','19.9','1680','97'],
		"originalprice":['78','299','674','59','229','90','3980','499']
	},

	"data2":{
		"len":"2",
		"mainsrc":['../imgs/1c52e4cl959_960_300.jpg','../imgs/1c52e0l3b72_960_300.jpg'],
		"asidesrc":[
			['../imgs/iitob6cj79_800_800.jpg','../imgs/ilovmcxm62_800_800.jpg','../imgs/1bj9vlk2p80_800_800.jpg'],

			['../imgs/ivi3s6kg22_800_800.jpg','../imgs/44cb52c885924aebbff7ea5fce559b1e1509507804428j9ghz02l10314.jpg','../imgs/onlineig3fyup210795.jpg']
		],

		"currentprice":[['398','239','1399'],['845','995','795']],
		"originalprice":[['500','300','1999'],['1880','2180','3180']]
	}
}
	var goodslist = document.getElementById('goodslist');
	var goodslist1 = document.getElementById('goodslist1');
	var goodslist2 = document.getElementById('goodslist2');
	var goodslist3 = document.getElementById('goodslist3');
	var active1 = document.getElementById('active1');
	var active2 = document.getElementById('active2');

	function Goods(parent,data){
		this.parent = parent;
		this.data = data;
		this.barWrap = this.parent.getElementsByClassName('barWrap');		
		this.bar = this.parent.getElementsByClassName('bar');
		this.detaillist = this.parent.getElementsByClassName('detaillist');
		
	}

	Goods.prototype.init = function (){
		this.creatdetail();
		this.progress_bar();
	}

	Goods.prototype.creatdetail = function (){

		for(var i = 0; i < this.data.len;i++){

			var div = document.createElement('div');
			div.className = 'detaillist';
			div.innerHTML = `
				<a class="pic"><img src="${this.data.src[i]}" class="proImg"></a>
			<div class="proinfo">
				<h3>
					<a href="" class="tit">
						<b>${this.data.b[i]}</b>
						${this.data.cont[i]}
					</a>
					<a href="" class="key">${this.data.key[i]}</a>
				</h3>
				<dl class="progress">
					<dt class="barWrap">
						<b class="bar"></b>
					</dt>
					<dd class="main">
						剩余 <i>${this.data.residuum[i]}</i>	件	
					</dd>
				</dl>	
			</div>
			<div class="pri">	
				<p class="price">
						¥ <b>${this.data.currentprice[i]}</b>
						<span class="marketprice">
							<del>${this.data.originalprice[i]}</del>
						</span>
					</p>
					<a href="" class="buy">立即抢购</a>
			</div>
			`
			this.parent.appendChild(div);
		}
	}

	Goods.prototype.progress_bar = function (){

		var barWrap_width = (this.barWrap)[0].offsetWidth;
		for(var i = 0; i< this.data.len;i++){	
			(this.bar)[i].scale =(this.data.residuum[i])/(this.data.sum[i]);
			(this.bar)[i].style.width = this.bar[i].scale * barWrap_width + 'px';
		}
	}

	var goodsjson1 = goodsjson.data1;
	var lis1 = new Goods( goodslist1, goodsjson1);
	lis1.init()

	function Active(parent,data){
		this.parent = parent;
		this.data = data;

	}

	Active.prototype.init = function (){
		this.createAct();
		this.time();
		this.Run();
	}

	Active.prototype.createAct = function(){
		for(var i=0;i < this.data.len;i++){
			var active = document.createElement('div');
			active.className = 'active';
			active.innerHTML = `
					<a href="" class="actImg"><img src="${this.data.mainsrc[i]}"></a>
		<div class="actlist">
			<div class="l">
				<a href=""><img src="${this.data.asidesrc[i][0]}"></a>
				<p>￥<span>${this.data.currentprice[i][0]}</span><del>${this.data.originalprice[i][0]}</del></p>
			</div>
			<div class="l">
				<a href=""><img src="${this.data.asidesrc[i][1]}"></a>
				<p>￥<span>${this.data.currentprice[i][1]}</span><del>${this.data.originalprice[i][1]}</del></p>
			</div>
			<div class="l">
				<a href=""><img src="${this.data.asidesrc[i][2]}"></a>
				<p>￥<span>${this.data.currentprice[i][2]}</span><del>${this.data.originalprice[i][2]}</del></p>
			</div>
		</div>
		<div class="timestart">
			<i class="iconfont">&#xe633;</i>
			<span>距结束00:00:00</span>
		</div>
			`
			this.parent.appendChild(active)
		}
	}

	Active.prototype.time = function (){
		setInterval(this.Run,1000);
	}

	Active.prototype.Run = function (){
		var nowDate = new Date();
	 	var now_year = nowDate.getFullYear();
	 	var now_month = nowDate.getMonth();
	 	var now_date = nowDate.getDate();
	 	var now_hour = nowDate.getHours();

 		for(var i=0;i<timesArr.length;i++){
 		if(  zero(now_hour) >=  timesArr[i] && zero(now_hour) < timesArr[i+1]){

 			var targetDate = new Date(now_year,now_month,now_date,timesArr[i+1],00);		
 			
	 		}
	 	}

		var now = new Date();
		var num = Math.floor((targetDate.getTime() - now.getTime())/1000);
		var hours = Math.floor(num%86400/3600);
		var min = Math.floor(num%86400%3600/60);
		var second = Math.floor(num%86400%3600%60);
		
		$('.timestart').find('span').html( zero(hours)+":"+zero(min)+":"+zero(second) )
	}

	var Activejson1 = goodsjson.data2;
	var ac1 = new Active(active1,Activejson1);
	ac1.init();

	var goodsjson2 = goodsjson.data1;
	var lis2 = new Goods( goodslist2, goodsjson2);
	lis2.init();

	var goodsjson3 = goodsjson.data1;
	var lis3 = new Goods( goodslist3, goodsjson3);
	lis3.init();

	var Activejson2 = goodsjson.data2;
	var ac2 = new Active(active2,Activejson2);
	ac2.init();














