
import {parse} from './index'

const str = `
<!-- sfsdf -->
<View id="container">
  <Image src="https://img.yzcdn.cn/vant/cat.jpeg" class="img"></Image>

  <Image src="https://img.yzcdn.cn/vant/cat.jpeg" class="img2"></Image>
  <View class="redText">
    <Text>123</Text>
    <Text class="t3" value="这是t2 value">22这真的是一条非常长非常长非常 长非常长非常长非常长 非常长非常长非常长非常长的字符串.</Text>
  </View>
</View>
`

parse(str);