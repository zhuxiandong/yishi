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
function choose(num){
var input=$(".lj_input")[num];
var bigbox = $(".kuan_lj_box")[num];//input标签
var xiala=$(".kuan_lj_xiala")[num];
var caidan=$(".caidan")[num];
var caidans=$("li",caidan);
var caidanfirst=getFirst(caidan);
bigbox.innerText=caidanfirst.innerText;
var a=1;
xiala.onclick=function(){
	if(a==1){
	for(var i=0;i<caidans.length;i++){
		caidan.style.display='block';
		caidans[i].onclick=function(){	
		bigbox.innerText=this.innerText;
		caidan.style.display='none';
	}
	a=2
    }
   }else{
		caidan.style.display='none';
	a=1
   }	
}
}
choose(0);
choose(1);
choose(2);
choose(3);
choose(4);
choose(5);
choose(6);
choose(7);


})