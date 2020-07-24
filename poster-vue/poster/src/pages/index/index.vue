<template>
	<view class="content">
		<canvas id="myCanvas"  class="c-box"></canvas>
		<button @click="addImg">Add Img Widget</button>
		<button @click="save">保存</button>
	</view>
</template>

<script>
import { exportCanvasAsPNG} from '../../utils/canplay.js'

	class Poster {
		constructor(id){
			this.template = document.getElementById("myCanvas").firstElementChild
			this.ctx =  this.template.getContext("2d");

			this._init()
		}

		_init(){
			this.renderCanvasBg()
			this.listeneMouseEvent()
		}
		//渲染canvas背景图片
		renderCanvasBg(){
			const img = new Image(); img.src = "../../static/1.jpg";
			let imgW = '';
			let imgH = '';

			img.onload = () => {	//图片加载完在执行
		
				imgW = img.width;
				imgH = img.height;	
				this.ctx.drawImage(img,0,0,360,570)
			}	
		}
		listeneMouseEvent(){
			console.log(1234)
			const canvas = this.template.parentElement
			console.log(canvas)
			canvas.addEventListener( "mousedown" , function(e){
				var mouse = {
					x : e.clientX - canvas.getBoundingClientRect().left,
					y : e.clientY - canvas.getBoundingClientRect().top
				},
				offset = {
					x : mouse.x - shape.x,
					y : mouse.y - shape.y
				};
				console.log(456)
				canvas.addEventListener("mousemove" , function(e){
					mouse = {
							x : e.clientX - canvas.getBoundingClientRect().left,
							y : e.clientY - canvas.getBoundingClientRect().top
					};
					console.log(123)
					shape.x = mouse.x - offset.x;
					shape.y = mouse.y - offset.y;
	
					canvas.clearRect(0,0,canvas.width,canvas.height);
					drawGraph(); // 重新绘制图形
		
				} , false);
		
				canvas.addEventListener("mouseup" , function(){
					console.log(789)
						// ...
				} , false);
			})
		}
		appendWidget(){
			let img = new Image(); 
			img.src="../../static/logo.png";
			img.onload=  () => {
        this.ctx.drawImage(img,50,50);   //在画布X轴 50  Y轴坐标50 处添加一张图片
   		};

		}
		//导出canvas 保存为png图片
		exportCanvasAsPNG
	}
	export default {
		data() {
			return {
				poster:null
			}
		},
		onLoad() {

		},
		mounted(){
			this.poster = new Poster('myCanvas')	
		},
		methods: {
			save(){
				this.poster.exportCanvasAsPNG('myCanvas','测试保存文件')
			},
			addImg(){
				this.poster.appendWidget()
			}
		}
	}
</script>

<style>
.c-box{
	width: 360px;
	height: 570px;
	border: 1px solid #eeeeee;
	margin: 0 auto;
	/* background: url('/static/1.jpg') no-repeat; */
	background-size:100% 100%; 
	background-attachment:fixed;
}
</style>
