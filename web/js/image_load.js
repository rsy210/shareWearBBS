window.onload=function(){
	waterfall('image_page','image_box');
	var dataInt = {"data":[{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'},{"src":'1.jpg'}]};
	window.onscroll=function(){
		var add = checkScrollSlide();
		if(add) {
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
	console.log(oBoxs.length);


	var lastBoxH = oBoxs[oBoxs.length-1].offsetTop + Math.floor(oBoxs[oBoxs.length-1].offsetHeight/2);
console.log(lastBoxH);
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	var height = document.body.clientHeight || document.documentElement.clientHeight; 
console.log(scrollTop+height);
console.log(height);

	return (lastBoxH <= scrollTop+height) ? true :false;
}