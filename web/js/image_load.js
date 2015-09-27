window.onload=function(){
	waterfall('image_page','image_box');
	var dataInt = {"data":[{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'}]};
	window.onscroll=function(){		
		if(checkScrollSlide) {
			//数据库渲染到当前页面尾部
			var oParent = document.getElementById('image_page');
			for (var i = 0; i < dataInt.data.length; i++) {
				var oBox = document.createElement('div');
				oBox.className='image_box';
				oParent.appendChild(oBox);
				var oPic = document.createElement('div');
				oPic.className='pic_style';
				oBox.appendChild(oPic);
				var oImg = document.createElement('img');
				oImg.src="images/"+dataInt.data[i].src;
				oPic.appendChild(oImg);
			}

		} 
	}
var option=document.getElementById("option");
var lis = option.childNodes;
for (var i = 0; i < lis.length; i++) {
		bgchange(lis[i]);
};


}

function waterfall(parent,box){
	//将parent下所有class为box元素取出
	var oParent = document.getElementById(parent);
	var oBoxs=getByClass(oParent,box);
	
}

function getByClass(parent,className){
	var boxArr = new Array(); //存储获取的c指定lass元素
	var oElements = parent.getElementsByTagName('*');
	for (var i = 0; i < oElements.length; i++) {
		if(oElements[i].className == className){
		boxArr.push(oElements[i]);
	}
	}
	return boxArr;
}

function checkScrollSlide(){
	//检测是否加载数据块

	var oParent = document.getElementById('image_page');

	var oBoxs = getByClass(oParent,'image_box');


	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
console.log(lastBoxH);

    var  h=document.documentElement.scrollHeight
   || document.body.scrollHeight;
console.log(h);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight; 
console.log(scrollTop+height);


	return (h <= scrollTop+height) ? true :false;
}


function bgchange(obj){
         obj.onmouseover = function (){
             obj.style.backgroundColor=' #fff';
         }
           obj.onmouseout = function (){
             obj.style.backgroundColor='';
         }
     }


//获取id
function getId(id){
	return document.getElementById(id);
}

//自动居中，登陆浮层
function autoCenter(object){
	var bodyW=document.documentElement.clientWidth;
	var bodyH=document.documentElement.clientHeight;

	var objW = object.offsetWidth;
	var objH = object.offsetHeight;

	object.style.left = (bodyW - objW)/2+'px';
	object.style.top = (bodyH - objH)/2 + 'px';

}


//自动全屏，遮罩全屏
function fillToBody(object){
	object.style.width=document.documentElement.clientWidth + 'px';
	object.style.height=document.documentElement.clientHeight+ 'px';
}


//显示隐藏登录界面
function showDialog(id){
getId(id).style.display='block';
getId('mask').style.display='block';
autoCenter(getId(id));
fillToBody(getId('mask'));
mouseDrag(id);
}
function hideDialog(id){
getId(id).style.display='none';
getId('mask').style.display='none';
}






var isDraging = false;
var mouseOffsetX=0; //偏移
var mouseOffsetY=0;
//鼠标拖动
function mouseDrag(id){


 //是否可拖拽标记

//鼠标事件1 按下相对拖拽元素左上角坐标

getId(id+'_title').addEventListener('mousedown',function(e){
	var e = e || window.event;
	mouseOffsetX = e.pageX - getId(id).offsetLeft;  
	mouseOffsetY = e.pageY - getId(id).offsetTop;
	isDraging = true;
})
//鼠标事件2，移动 元素位置鼠标当前位置-相对拖拽元素位置

}

document.onmousemove = function(e){
	var e = e || window.event;

	var mouseX = e.pageX;//鼠标当前位置
	var mouseY = e.pageY;

	var moveX = 0;  //元素新位置 
	var moveY = 0;
	if (getId('up_dialog').style.display === "block") {
		id = 'up_dialog';

	}else if(getId('in_dialog').style.display === "block"){
		id = 'in_dialog';

	}

	if (isDraging === true ) {
		moveX = mouseX - mouseOffsetX;
		moveY = mouseY - mouseOffsetY;

		//限定可移动范围，move > 0 且 move < 页面宽高-浮层元素宽高
		var pageWidth = document.documentElement.clientWidth;
		var pageHeight = document.documentElement.clientHeight;


		var dialogWidth = getId(id).offsetWidth;
		var dialogHeight = getId(id).offsetHeight;

		var maxX = pageWidth - dialogWidth;
		var maxY = pageHeight - dialogHeight;

		moveX = Math.min( maxX,Math.max(0,moveX));
		moveY = Math.min( maxY,Math.max(0,moveY));

		getId(id).style.left = moveX + 'px';
		getId(id).style.top = moveY + 'px';
	}
}
//鼠标事件3，松开不可拖动
document.onmouseup = function(){
	isDraging = false;
}

window.onresize = function(){
	autoCenter(getId('up_dialog'));
	autoCenter(getId('in_dialog'));
fillToBody(getId('mask'));
}
