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


    function dian(num){
		var box=$(".gzl-box")[num];
		var xiala=$(".gzl-xiala")[num];
		var caidan=$(".gzl-caidan")[num];
		var caidans=$("li",caidans);
        /*元素获取结束*/

        /*判断下拉框执行方式开始*/
		var a=1;
		xiala.onclick=function(){
			if (a==1) {
				for (var i = 0; i < caidans.length; i++) {
					caidan.style.display='block';
					caidans[i].onclick=function(){
						box.innerHTML=this.innerHTML;
						caidan.style.display='none';
					}
				}
				a=2
			}else{
				caidan.style.display='none';
				a=1
			}
		}
	}
	dian(0);
	dian(1);
	dian(2);
	dian(3);
	dian(4);
	dian(5);
	dian(6);
	dian(7);
	dian(8);
	dian(9);
       

    /*是否公开  开始*/
    /*元素获取开始*/
	var gzl_publicbox=$(".gzl_publicbox")[0];
	var gzl_publicyuan1=$(".gzl_publicyuan1",gzl_publicbox)[0];
	var gzl_publicyuan2=$(".gzl_publicyuan2",gzl_publicbox)[0];
	var texts=$(".gzl_publictext");
	var first=$(".first",gzl_publicbox)[0];
	var second=$(".second",gzl_publicbox)[0];
	/*元素获取结束*/

	/*点击公开按钮第一次开始*/
	gzl_publicyuan1.onclick=function(){
		this.style.display="none";
		gzl_publicyuan2.style.display="block";
		first.style.display="none";
		second.style.display="block";
	}
	/*点击公开按钮第一次结束*/


	/*点击公开按钮第二次开始*/
	gzl_publicyuan2.onclick=function(){
		gzl_publicyuan1.style.display="block";
		this.style.display="none";
		first.style.display="block";
		second.style.display="none";
	}

})