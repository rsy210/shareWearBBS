var option=document.getElementById("option");
var lis = option.childNodes;
for (var i = 0; i < lis.length; i++) {
		bgchange(lis[i]);
};


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
