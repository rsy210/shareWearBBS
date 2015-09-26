
window.onload=function(){
	

var option=document.getElementById('option');

var lis = option.childNodes;
for (var i = 0; i < lis.length; i++) {
		bgchange(lis[i]);
};

}

//获取id
function getId(id){
	return document.getElementById(id);
}



function bgchange(obj){
         obj.onmouseover = function (){
             obj.style.backgroundColor=' #fff';
         }
           obj.onmouseout = function (){
             obj.style.backgroundColor='';
         }
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
function showDialog(){
getId('dialog').style.display='block';
console.log(getId('dialog'));
getId('mask').style.display='block';
autoCenter(getId('dialog'));
fillToBody(getId('mask'));
mouseDrag();
}
function hideDialog(){
getId('dialog').style.display='none';
getId('mask').style.display='none';
}






var isDraging = false;
var mouseOffsetX=0; //偏移
var mouseOffsetY=0;
//鼠标拖动
function mouseDrag(){


 //是否可拖拽标记

//鼠标事件1 按下相对拖拽元素左上角坐标
var s= getId('dialog');
console.log(getId('dialog'));
getId('dialog_title').addEventListener('mousedown',function(e){
	var e = e || window.event;
	mouseOffsetX = e.pageX - getId('dialog').offsetLeft;  
	mouseOffsetY = e.pageY - getId('dialog').offsetTop;
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

	if (isDraging === true) {
		moveX = mouseX - mouseOffsetX;
		moveY = mouseY - mouseOffsetY;

		//限定可移动范围，move > 0 且 move < 页面宽高-浮层元素宽高
		var pageWidth = document.documentElement.clientWidth;
		var pageHeight = document.documentElement.clientHeight;

		var dialogWidth = getId('dialog').offsetWidth;
		var dialogHeight = getId('dialog').offsetHeight;

		var maxX = pageWidth - dialogWidth;
		var maxY = pageHeight - dialogHeight;

		moveX = Math.min( maxX,Math.max(0,moveX));
		moveY = Math.min( maxY,Math.max(0,moveY));

		getId('dialog').style.left = moveX + 'px';
		getId('dialog').style.top = moveY + 'px';
	}
}
//鼠标事件3，松开不可拖动
document.onmouseup = function(){
	isDraging = false;
}

window.onresize = function(){
	autoCenter(getId('dialog'));
fillToBody(getId('mask'));
}
