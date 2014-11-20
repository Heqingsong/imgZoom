define(function(){
	return {
		zoom:function(){//size缩放层级大小
            var _this = arguments[0],
                size = arguments[1];

            if(_this.files[0].type.match(/image.*/)){
                var url = webkitURL.createObjectURL(_this.files[0]);
                var imgObj = new Image();
                imgObj.onload = function(){
                    var width = imgObj.width,
                        height = imgObj.height;
                    if((size === null || size === undefined) ? false : true){//设置了缩放等级
                        imgObj.width = parseInt(width/size);
                        imgObj.height = parseInt(height/size);
                    }else{//没设置缩放等级
                        imgObj.width *= 360 / imgObj.height;
                        imgObj.height = 360;
                    }
                    var canvas = document.createElement("canvas"),
                        canvasType = canvas.getContext("2d");
                    canvas.width = imgObj.width;canvas.height = imgObj.height;
                    canvasType.drawImage(imgObj,0,0,imgObj.width,imgObj.height);
                    if(!(_this.files[0].size > 150000))//150kb
                        return canvas.toDataURL(_this.files[0].type,0.5);//如果大于设定大小将减少图片质量到一半进行传输
                    else
                        return canvas.toDataURL(_this.files[0].type,1);//substr(22)抽取出base64位编码中前面22位描述字符
                }
                imgObj.src = url;
            }else{
                if(window.console){
                    console.error("选择的不是图片文件！");
                }else{
                    alert("您选择的不是图片文件！");
                }
            }
		},
		setUp:function(){//设置指定大小返回流
            var _this = arguments[0],
                _width = arguments[1],
                _height = arguments[2];
            if(_this.files[0].type.match(/image.*/)){
                var url = webkitURL.createObjectURL(_this.files[0]);
                var imgObj = new Image();
                imgObj.onload = function(){
                    var canvas = document.createElement("canvas"),
                        canvasType = canvas.getContext("2d");
                        canvas.width = imgObj.width = width = _width;
                        canvas.height = imgObj.height = height = _height;
                    canvasType.drawImage(imgObj,0,0,imgObj.width,imgObj.height);
                    console.log(canvas.toDataURL(_this.files[0].type,1));
                    if(!(_this.files[0].size > 150000))//150kb
                        return canvas.toDataURL(_this.files[0].type,0.5);
                    else
                        return canvas.toDataURL(_this.files[0].type,1);
                }
                imgObj.src = url;
            }else{
                if(window.console){
                    console.error("选择的不是图片文件！");
                }else{
                    alert("您选择的不是图片文件！");
                }
            }
		},
		dataURL:function(){//返回流文件
            var _this = arguments[0];
            if(_this.files[0].type.match(/image.*/)){
                var url = webkitURL.createObjectURL(_this.files[0]);
                var imgObj = new Image();
                imgObj.onload = function(){
                    var canvas = document.createElement("canvas"),
                        canvasType = canvas.getContext("2d");
                    canvas.width = imgObj.width;
                    canvas.height = imgObj.height;
                    canvasType.drawImage(imgObj,0,0,imgObj.width,imgObj.height);
                    return canvas.toDataURL(_this.files[0].type,1);
                }
                imgObj.src = url;
            }else{
                if(window.console){
                    console.error("选择的不是图片文件！");
                }else{
                    alert("您选择的不是图片文件！");
                }
            }
		}
	}
});