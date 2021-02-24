# canvas-renderer
只要听说用 canvas 开发海报类需求，我就虎躯一震！为嘛？

第一，canvas接口多、容易忘；

第二，重复绘制。同样的绘制工作要做两遍(微信小程序和 H5)，并且绘制的接口并不完全兼容;

第三，难修改。在已绘制好的图形中修改，是一件十分酸爽的事儿。

网上有不少轮子，但我都不甚满意。因为我需要一个低学习成本、跨平台、易扩展的轮子！

直到看到这篇文章[手把手教你打造一款轻量级canvas渲染引擎](https://segmentfault.com/a/1190000021297495?_ea=27021986)，顿时觉得可行，然而它只适用于微信小游戏。于是，我根据上面的思路，造了个新轮子。像写 react 一样，仅需要：
* 1. 编写 xml 文档
* 2. 编写对应的样式
* 3. 渲染：render({xml, style})

# 目前支持的渲染元素
[√] Image

[√] Text

[√] View

# 使用
````js
import Renderer from 'canvas-renderer'

const xmlData = `
  <View id="container">
    <Image src="https://img.yzcdn.cn/vant/cat.jpeg" class="img"></Image>
    <Image src="https://cdn.133.cn/ticket/h5/images/tabbar/v2/ticket-a.png" class="img2"></Image>
    <Text class="t3" value="这是t2 value">这真的是一条非常长非常长非常 长非常长非常长非常长 非常长非常长非常长非常长的字符串.</Text>
  </View>
`
const style = {}

const renderer = new Renderer({xml: xmlData, style})
renderer.render('#canvas')
renderer.toDataURL()
  .then(url => {
    console.log(url)
    return renderer.saveImageToPhotosAlbum(url)
  })
````

# 用户自定义渲染元素
显然，项目已有的元素无法满足所有产品需求，所以提供了插件机制，使用户可以开发任意渲染元素。

**插件开发**伪代码入下：
````js
import {Element} from 'canvas-renderer'

class Circle extends Element {
  constructor({
    style = {},
    props = {},
    idName = '',
    className = '',
  }) {
    super({
      style,
      props,
      idName,
      className
    })
    this.type = 'Circle';
    ......
  },
  render(ctx) {

  }
}
````
**插件使用**
````js
import CanvasRenderer from 'canvas-renderer'
import Circle from './Circle'

CanvasRenderer.usePlugin('Circle', Circle)

````

# 功能
[√] 支持小程序和 H5

[√] 绘制

[√] 输出/保存为图片

[x] 重绘

[x] 重排

[x] 事件

[x] 滚动
referer: https://segmentfault.com/a/1190000021297495?_ea=27021986

