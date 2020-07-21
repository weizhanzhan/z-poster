<template>
	<view class="content">
		<view class="text-area">
			<canvas id="canvas" style="width:300px;height:400px"></canvas>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		mounted(){
			const canvas = document.getElementById("canvas").children[0]
			var context = canvas.getContext("2d");
			
			
			var img = new Image();
			img.src = "../../static/1.jpg";
			img.onload = imgfn;//图片加载完在执行
			console.log(img.width,img.height)
			function imgfn() {
				var bg = context.createPattern(img, "repeat");//createPattern() 方法在指定的方向内重复指定的元素。
				context.fillStyle = bg;//fillStyle 属性设置或返回用于填充绘画的颜色、渐变或模式。
				context.fillRect(0, 0, 300, 400);//绘制已填充矩形fillRect(左上角x坐标, 左上角y坐标, 宽, 高)
			}
		
			
			// // 设置字体
			// context.font = "18px bold 黑体";
			
			// context.fontcolor = "#000000"
			// // 设置颜色
			// context.fillStyle="#0000ff";
			// // 设置水平对齐方式
			// context.textAlign = "center";
			// // 设置垂直对齐方式
			// context.textBaseline = "middle";
			// // 绘制文字（参数：要写的字，x坐标，y坐标）
			// context.fillText("要写的文字", 100, 100);
			
			// context.fillRect(20,20,150,100);
		},
		methods: {

		}
	}
</script>

<style>
	.content{
		padding-top: 20px;
	}
	canvas {
	    border: 1px solid #EEEEEE;
		margin: 0 auto;
		
	}
</style>
