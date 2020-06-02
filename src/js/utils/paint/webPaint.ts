import { Painter } from './Painter'
import { drawImage } from './util'
const CACHE_IMAGE_LIST: any = []
class WebPaint extends Painter {
  drawImage = (ctx: CanvasRenderingContext2D, node: any) => {
    return new Promise((resolve, reject) => {
      const img = CACHE_IMAGE_LIST.find((item: any) => item.src === node.image)
      if (img) {
        drawImage(ctx, node, img)
        return resolve();
      }
 
      const bgImg = new Image();
      bgImg.src = node.image;
      // bgImg.setAttribute("crossOrigin",'Anonymous')
      
      bgImg.onload = () => {
        CACHE_IMAGE_LIST.push(bgImg);
        drawImage(ctx, node, bgImg)
        resolve();
      };
      bgImg.onerror = reject;
    });
  }
}

export const webPaint = new WebPaint();






