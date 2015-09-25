window.onload=function(){
	waterfall('image_page','image_box');
	var dataInt = {"data":[{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'}]};
/*	window.onscroll=function(){		
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
	}*/
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

//鼠标拖动
var mouseOffsetX=0; //偏移
var mouseOffsetY=0;

var isDraging = false; //是否可拖拽标记

//鼠标事件1 按下相对拖拽元素左上角坐标
var s= getId('dialog');
console.log(getId('dialog'));
getId('dialog').addEventListener('mousedown',function(e){
	var e = e || window.event;
	mouseOffsetX = e.pageX - getId('dialog').offsetLeft;  
	mouseOffsetY = e.pageY - getId('dialog').offsetTop;
	isDraging = true;
})
//鼠标事件2，移动 元素位置鼠标当前位置-相对拖拽元素位置
document.onmousemove = function(){
	var e = e || window.event;

	var mouseX = e.pageX;//鼠标当前位置
	var mouseY = e.pageY;

	var moveX = 0;  //元素新位置 
	var moveY = 0;

	if (isDraging === true) {
		moveX = mouseX - mouseOffsetX;
		moveY = mouseY - mouseOffsetY;

		//限定可移动范围，move > 0 且 move < 页面宽高-浮层元素宽高

		getId('dialog').style.left = moveX + 'px';
		getId('dialog').style.top = moveY + 'px';
	}
}
//鼠标事件3，松开不可拖动
document.onmouseup = function(){
	isDraging = false;
}

function showDialog(){
getId('dialog').style.display='block';
console.log(getId('dialog'));
getId('mask').style.display='block';
autoCenter(getId('dialog'));
fillToBody(getId('dialog'));
}
function hideDialog(){
getId('dialog').style.display='none';
getId('mask').style.display='none';
}