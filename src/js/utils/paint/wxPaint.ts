import {Painter} from './Painter'
import { drawImage } from './util'
const IMAGE_LIST: any = []
class WxPaint extends Painter {
  drawImage = (ctx: any, node: any): Promise<{}> => {
    return new Promise((resolve, reject) => {
      const img = IMAGE_LIST.find((item: any) => item.src === node.image)
      if (img) {
        drawImage(ctx, node, img)
        return resolve();
      }

      const bgImg = ctx.$rowCanvasElement.createImage();
      bgImg.src = node.image;
      
      bgImg.onload = () => {
        IMAGE_LIST.push(bgImg);

        drawImage(ctx, node, bgImg)
        
        return resolve();
      };
      bgImg.onerror = e => reject(e);
    });
  }
}

export const wxPaint = new WxPaint();







