require.config({
	baseUrl: ".",
    paths: {
        "imgZoom":"imgZoom"
    }
});

require(['imgZoom'], function (imgZoom) {
	document.getElementById("file").addEventListener("change",function(){
        /**
         * 取图片的大中小号
        * @param {obj} （必填）this传入当前input[type=file]对象
        * @param {number} （可选）小号为：3;中号为：1.5;原始为:1
        * */
        //imgZoom.zoom(this,1.5);

        /**
         * 把图片缩放到指定大小
        * @param {obj} （必填）this传入当前input[type=file]对象
        * @param {number} （必填）宽度
        * @param {number} （必填）高度
        * */
        imgZoom.setUp(this,200,200);

        /**
         * 把图片转换为base64的流文件（不控制图片大小）
         * @param {obj} （必填）this传入当前input[type=file]对象
         * */
        imgZoom.dataURL(this);
    });
});