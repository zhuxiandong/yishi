$(function(){
	var huoyuebox=$(".bxb_list4")[0];
	var huoyue=$(".bxb_list4word1")[0].innerText;
	var jindutiao=$(".bxb_list3")[0];

	
	if(huoyue>=80){
		$(".bxb_list4word2")[0].innerHTML="很活跃"

	}else if(huoyue>=40&&huoyue<80){
		$(".bxb_list4word2")[0].innerHTML="活跃";
	}else{
		$(".bxb_list4word2")[0].innerHTML="不活跃";
	}
	jindutiao.style.left=huoyue/96*101+"px";
	
	function move(){
	var mw=huoyue-101+"px";
	jindutiao.style.marginLeft=mw;
	}
	move();
//星星
	var bslxinbox=$(".bsl_xinxinbox")[0];
	var shixing=$(".shixing");
	var kongxing=$(".kongxing");
	var bslfen=$(".bsl_fen")[0];
	//获取评分
	var num=Math.ceil(bslfen.innerHTML);
    //显示星星
    for (var i = 0; i < num; i++) {
    	shixing[i].style.display="block";
    	kongxing[i].style.display="block";
    };

// 右边选项卡
    var titlebox=$(".zb_title")[0];
	var title=titlebox.getElementsByTagName("li");
	var con=$(".zb_lili");
	var xiugai=$(".zb_xiugai")[0];
	var hen=$(".zb_henbox");
	for (var i = 0; i < title.length; i++) {
		title[i].index=i;
		title[i].onclick=function(){
			for (var j = 0; j < title.length; j++) {
				title[j].style.height="36px";
				title[j].style.marginTop="16px";
				con[j].style.display="none";
				title[j].style.border="none";

				title[j].style.marginLeft="14px";
				title[j].style.marginRight="4px";

				hen[j].style.display="none";


			};
			title[this.index].style.height="46px";
			title[this.index].style.marginTop="4px";
			con[this.index].style.display="block";
			title[this.index].style.border="2px solid #fff";
			title[this.index].style.borderBottom="none";

			title[this.index].style.marginLeft="12px";
			title[this.index].style.marginRight="2px";

			hen[this.index].style.display="block";


		}
	};


	//面试评价

	//var lastscore=$(".zb_dazi")[0].innerHTML;
	//获取第一个评分
	var firstscore=Number($(".ws_list1")[0].getAttribute("score"));
	//获取第二个评分
	var secondscore=Number($(".ws_list2")[0].getAttribute("score"));
	//获取第三个评分
	var thirdscore=Number($(".ws_list3")[0].getAttribute("score"));
	//获取滚动条
	var zb_shu=$(".zb_list3")[0];
	var zb_shu2=$(".zb_list3")[1];
	var zb_shu3=$(".zb_list3")[2];
	//根据分数移动滚动条
	zb_shu.style.left=firstscore/5*270+"px";
	zb_shu2.style.left=secondscore/5*270+"px";
	zb_shu3.style.left=thirdscore/5*270+"px";
	//把平均分给了最后得分
	$(".zb_dazi")[0].innerHTML=((firstscore+secondscore+thirdscore)/3).toFixed(2);
	//alert(huoyuetiao.length)
	

})