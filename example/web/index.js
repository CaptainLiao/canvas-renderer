import cangine from '../../src/index.js'

const xmlData = `
<view id="container">
  <image src="https://media.prod.mdn.mozit.cloud/attachments/2013/06/22/5395/505e0ef785fba7e3a5f9c1ac70e78658/backdrop.png" class="img"></image>
  <text class="t3" value="这是t2 value">这真的是一条非常长非常长非常 长非常长非常长非常长 非常长非常长非常长非常长的字符串.</text>
  <image src="https://img01.yzcdn.cn/vant/cat.jpeg" class="img2"></image>
  <view class="redText"></view>
</view>
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
    borderBottomWidth: 1,
    borderBottomColor: '#fff'
  },
  redText: {
    // marginTop: 10,
    // flex: 1,
    // backgroundColor: 'rgba(237,241,247,1)',
    // borderRadius: 6,
    // textAlign: 'center',
  },
}


cangine({canvasId: '#canvas', xml: xmlData, style})