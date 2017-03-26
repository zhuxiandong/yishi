/*1.*/
function getClass(classname,father){
	father=father||document;
	if(father.getElementsByClassName){
		 return father.getElementsByClassName(classname);

	}
	else{
		var all=father.getElementsByTagName("*");//找到文档中所有的标签
		//all[].className//获取标签中class中的值
		var newarr=[];
		for(var i=0;i<all.length;i++){//遍历所有标签
			if(checkRep(all[i].className,classname))//判断遍历的标签是否与要找的标签相同
			{
				newarr.push(all[i]);//相同的话就保存到提前生命的空数组中
			}
		} 
		return newarr;//返回值：把要留下的东西保存下来
		
	}
}
	function checkRep(str,classname){
		var arr=str.split(" ");
		for (var i =  0; i < arr.length; i++) {
			 if(arr[i]==classname){
			 	return true;
			 }
		}
		return false;
	}

/*2.获取样式的兼容问题*/
/*obj:获取那一个对象
attr:属性*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return parseInt(obj.currentStyle[attr]);

	}else{
		return parseInt(getComputedStyle(obj,null)[attr]);

	}
}
//3.   获取元素
function $(selector,father){
	father=father||document;
	if(typeof selector=="string"){
		selector=selector.replace(/^\s*|\s*$/,"");
		if(selector.charAt(0)=="."){
			return getClass(selector.substring(1));
		}
		else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.substring(1));
		}
		else if(/^[a-zA-Z][a-zA-Z1-6]*$/.test(selector)){   //^开始$结束[]或的意思
			return father.getElementsByTagName(selector);
		}
	}
	else if(typeof selector=="function"){
		window.onload=function(){
			selector();
		}
	}

     
}
//2016   1025


function getChilds(father){
	var childs=father.childNodes;
	var newarr=[];
	for (var i=0;i<childs.length;i++) {
		if(childs[i].nodeType==1){
			newarr.push(childs[i]);
		}
	}
	return newarr;
}
/*********************************/
//5.获取第一个子节点
function getFirst(father){
	return getChilds(father)[0];

}
/*********************************/
//6.获取最后一个子节点
function getLast(father){
	return getChilds(father)[getChilds(father).length-1];
}
/*********************************/
//7.获取指定位置的子节点
function getNum(father,num){
	return getChilds(father)[num];
}
/*********************************/
//8.获取下一个兄弟节点
function getNext(nodeObj){
	var next=nodeObj.nextSibling;
	if(next==null){
		return false;
	}
	while(next.nodeType==3||next.nodeType==8){
		next=next.nextSibling;
		if(next==null){
		return false;
	    }
	}
	return next;
}
/*********************************/
//9.获取上一个兄弟节点
function getPrevious(nodeObj){
	var previous=nodeObj.previousSibling;
	if(previous==null){
		return false;
	}
	while(previous.nodeType==3||previous.nodeType==8){
		previous=previous.previousSibling;
		if(previous==null){
		return false;
	    }
	}
	return pervious;
}
//10.将一个元素插入到另一个元素之后
function insertAfter(father,newObj,nowObj){
	var next=getNext(nowObj);
	if(next){
		father.insertBefore(newObj,next);

	}else{
		father.appendChild(newObj);
	}
}
/************************************************/
//2016.10.27
//11.将一个元素插入到另一个元素之前
function insertBefore(newObj,nowObj){
	var parent=nowObj.parentNode;
	parent.insertBefore(newObj,nowObj);
}