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
	

	//下拉
	function choose(num){
    var input=$(".lj_input")[num];
    var sanjiao=$(".lj_sanjiao")[num];
    var list=$(".lj_liebiao")[num];
    var lists=$("li",list);
    input.innerText=lists[0].innerText;

    var a=1;
    sanjiao.onclick=function(){
    	if(a==1){
    		for(var i=0;i<lists.length;i++){
    			list.style.display='block';
    			lists[i].onclick=function(){	
    				input.innerText=this.innerText;	
    				list.style.display='none';
    			}
    		}
    		a=2
    	}else{
    		list.style.display='none';
    		a=1
    	}
    }}

  choose(0);
  choose(1);
  choose(2);
  choose(3);
  choose(4);
  choose(5);
  choose(6);
  choose(7);
  choose(8);
  choose(9);
  choose(10);
  choose(11);
	
})