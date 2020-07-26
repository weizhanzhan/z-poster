<template>
	<view class="content">
		<canvas id="myCanvas"  class="c-box" canvas-id="id"></canvas>
		<button @click="addImg">Add Img Widget</button>
		<button @click="save">保存</button>
	</view>
</template>

<script>
import { exportCanvasAsPNG} from '../../utils/canplay.js'

	class Poster {
		constructor(id){
			console.log('tag', uni.canvasGetImageData("id",'myCanvas'),)
			this.template =  document.getElementById("myCanvas").firstElementChild
			console.log('uni', uni)
			this.ctx =  this.template.getContext("2d");

			this._init()
		}

		_init(){
			// this.renderCanvasBg()
			// this.listeneMouseEvent()
			this.drag()

		}

		drag(){
			var r1 = new Rect(50,50,50,50,"pink",this.ctx);
			var ctx =this.ctx
			var cv = myCanvas.firstElementChild
			r1.draw();
	
			myCanvas.ontouchstart = function(e) {
				console.log('1212', cv)
				//获取鼠标在canvas中的坐标位置
				var dx = e.changedTouches[0].clientX-cv.offsetLeft-1;
				var dy = e.changedTouches[0].clientY-cv.offsetTop-1;
				console.log('tag',dx,dy, ctx.isPointInPath(dx,dy))
						
				//当前鼠标坐标点是否在矩形内
				if(ctx.isPointInPath(dx,dy)){
					console.log("在图形内");
					//获取鼠标在图形内的坐标
					dx=dx-r1.x;
					dy=dy-r1.y;
					myCanvas.ontouchmove=function(e){
										console.log('move', '11')
						cv.width=cv.width;
						var mx = e.changedTouches[0].clientX-this.offsetLeft-1-dx;
						var my = e.changedTouches[0].clientY-this.offsetTop-1-dy;
						r1.x=mx;
						r1.y=my;
						//判断碰撞
						if(isCrash(r2,r1)){
							r1.c="red";
						}else{
							r1.c="cyan";
						}		
						r2.draw();
						r1.draw();
					}	
				}else{
					console.log("在图像外");
				}
			};
			this.template.ontouchend = function(){
				this.ontouchmove=null;
				}
		
			//检测碰撞的方法:
			function isCrash(x,y){
				var l1 = x.x;
				var r1 =l1+x.w;
				var t1 = x.y;
				var b1 = t1+x.h;
		
				var l2 = y.x;
				var r2 =l2+y.w;
				var t2 = y.y;
				var b2 = t2+y.h;
		
				if(l1>r2 || r1<l2 || t1>b2 || b1 <t2){
					return false;
				}
				return true;
		
			}
			
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

	//下面两个方法无法使用isPointInPath()来判断
	// ctx.strokeRect()
	// ctx.fillRect(50,50,100,100);
	//将canvas绘制的图形抽象成对象,对象保存图片的位置及大小信息
	function Rect(x,y,w,h,c="#000",ctx){
		this.x=x;
		this.y=y;
		this.w=w;
		this.h=h;
		this.c=c;
		this.ctx = ctx
	}
	Rect.prototype.draw=function(){
		this.ctx.beginPath();
		this.ctx.rect(this.x,this.y,this.w,this.h);
		this.ctx.fillStyle=this.c;
		this.ctx.fill();
	}
	export default {
		data() {
			return {
				poster:null
			}
		},
		onLoad() {
			// uni.createCanvasContext('id', this)

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
