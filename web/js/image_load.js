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
autoCenter(getId('dialog'));

//自动全屏，遮罩全屏
function fillToBody(object){
	object.style.width=document.documentElement.clientWidth + 'px';
	object.style.height=document.documentElement.clientHeight+ 'px';
}

function showDialog(){
getId('dialog').style.display='block';
getId('mask').style.display='block';
autoCenter(getId('dialog'));
fillToBody(getId('dialog'));
}
function hideDialog(){
getId('dialog').style.display='none';
getId('mask').style.display='none';
}