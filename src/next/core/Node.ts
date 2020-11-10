export default class Node {
  public id = '';
  public name = '';
  public className = '';
  protected x = 0;
  protected y = 0;
  protected transform = '';
  protected transformOrigin = [0, 0];
  protected translate = [0, 0]; // 平移变换
  protected rotate = 0; // 旋转
  protected scale = [1, 1]; // 缩放
  protected skew = [0, 0]; // 扭曲
  protected opacity = 1;
  protected zIndex = 0;
  protected pointerEvents = 'visible'; 

  public isPointInNode(x, y) {
    return true;
  }

  public draw() {
    
  }

  public addEventListener(type, listener, options = {}) {
    
  }

  public removeEventListener(type, listener, options = {}) {

  }
}
