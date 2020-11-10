
/**
 * 该方法用来绘制一个有填充色、底边带斜箭头的圆角矩形
 * http://1017401036.iteye.com/blog/2311141
 * 
 * @param cxt:canvas的上下文环境
 * @param width:矩形的宽度
 * @param height:矩形的高度
 * @param radius:圆的半径
**/
export function drawRoundRectPath(cxt,width,height,radius){
	cxt.beginPath(0);
	//从右下角顺时针绘制，弧度从0到1/2PI
	cxt.arc(width-radius,height-radius,radius,0,Math.PI/2);

  //矩形下边线
	cxt.lineTo(radius,height)

	//左下角圆弧，弧度从1/2PI到PI
	cxt.arc(radius,height-radius,radius,Math.PI/2,Math.PI);

	//矩形左边线
	cxt.lineTo(0,radius);

	//左上角圆弧，弧度从PI到3/2PI
	cxt.arc(radius,radius,radius,Math.PI,Math.PI*3/2);

	//上边线
	cxt.lineTo(width-radius,0);

	//右上角圆弧
	cxt.arc(width-radius,radius,radius,Math.PI*3/2,Math.PI*2);

	//右边线
	cxt.lineTo(width,height-radius);
	cxt.closePath();
}

function roundRect(ctx, layoutBox) {
	const style = this.style || {};
	const box   = layoutBox  || this.layoutBox;

	const w = box.width;
	const h = box.height;
	const r = style.borderRadius;
	const x = box.absoluteX;
	const y = box.absoluteY;

	ctx.moveTo(x + r, y)
	ctx.arcTo(x + w, y, x + w, y + h, r);
	ctx.arcTo(x + w, y + h, x, y + h, r);
	ctx.arcTo(x, y + h, x, y, r);
	ctx.arcTo(x, y, x + w, y, r);

	ctx.clip();
}