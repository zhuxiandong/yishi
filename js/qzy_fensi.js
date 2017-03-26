$(function(){

	//选项卡
	var dy_guanzhu=$(".dy_guanzhu")[0];
	var dy_box=$("div",dy_guanzhu);
	var dy_last=$(".dy_work");
	//选项卡
	for(var i=0;i<dy_box.length;i++){
		dy_box[i].aa=i;
		dy_box[i].onclick=function(){
			for(var j=0;j<dy_box.length;j++){
				
				dy_last[j].style.display="none";
			}
			   
			    dy_last[this.aa].style.display="block";  
		}
	}

	
	// var xiaoka=$(".dy_xinxi");
	// var btnbox=$(".dy_quxiao",xiaoka);
       var  xiaoka=$(".dy_xinxi");
       //alert(xiaoka.length)
       var btn=$(".dy_del")
		for (var i = 0; i < btn.length; i++) {
			btn[i].index=i;
			btn[i].onclick=function(){
				xiaoka[this.index].style.display="none";
		};
	}
 })