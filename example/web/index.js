import Renderer from '../../src/index.js'

const xmlData = `
<View id="container">
  <Image src="https://img.yzcdn.cn/vant/cat.jpeg" class="img"></Image>
  <Image src="https://img.yzcdn.cn/vant/cat.jpeg" class="img2"></Image>
  <Text class="t3" value="这是t2 value">这真的是一条非常长非常长非常 长非常长非常长非常长 非常长非常长非常长非常长的字符串.</Text>

  
  <View class="redText">123</View>
</View>
`;

const style = {
  container: {
    position: 'relative',
    diplay: 'flex',
    flexDirection: 'column',
    width: 200,
    height: 200,
    margin: 10,
    padding: 2,
    backgroundColor: '#999',

    // borderRadius: 12,
    // borderWidth: 10
  },

  img: {
    position: 'absolute',
    top:0,
    width: 200,
    height: 200,
    zIndex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  img2: {
    width: 80,
    height: 80,
  },

  t3: {
    margin: 8,
    padding: 10,

    backgroundColor: 'rgb(0, 120, 255)',

    borderWidth: 10,
    borderLeftColor: '#000',
    borderTopColor: '#fff',
    borderRightColor: '#000',
    borderRadius: 10,
  },
  redText: {
    // marginTop: 10,
    // flex: 1,
    // backgroundColor: 'rgba(237,241,247,1)',
    // borderRadius: 6,
    // textAlign: 'center',
  },
}


const renderer = new Renderer({xml: xmlData, style})

renderer.render('#canvas')
renderer.toDataURL()
  .then(res => console.log(res))