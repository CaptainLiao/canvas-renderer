
/**
<View id="container">
  <Image src="https://img.yzcdn.cn/vant/cat.jpeg" class="img"></Image>
  <Image src="https://img.yzcdn.cn/vant/cat.jpeg" class="img2"></Image>
  <Text class="t3" value="这是t2 value">22这真的是一条非常长非常长非常 长非常长非常长非常长 非常长非常长非常长非常长的字符串.</Text>

  
  <View class="redText"><Text>123</Text></View>
</View>

The following syntax is allowed:

Balanced tags: <View>...</View>
Attributes with quoted values: id="main"
Text nodes: <Text>world</Text>
*/

const fs = require('fs');

export {
  parse
}

function parse(source: string) {
  const nodes = new Parser(0, source).parseNodes()
  fs.writeFileSync('dist/my-parser/out.json', JSON.stringify(nodes, null, 2))
  console.log(nodes);
  
}

type hashMap = {
  [key: string]: string
}


enum XNodeName {
  Text = 'txt',
}

class XNode {
  children: XNode[];
  nodeName: string;
  attrs: hashMap;
  text?: string;
  constructor(node: XNode) {
    this.children = node.children;
    this.nodeName = node.nodeName;
    this.attrs = node.attrs;
    if (node.text !== undefined && node.text !== null) this.text = node.text;
  }

  static createTextNode(data: string): XNode {
    return new XNode({children: [], nodeName: XNodeName.Text, attrs: {}, text: data})
  }

  static createElemNode(name: string, attrs: hashMap, children: XNode[], text?: string): XNode {
    return new XNode({children, nodeName: name, attrs, text})
  }
}

class Parser {
  curIndex: number
  input: string

  constructor(curIndex: number, input: string) {
    this.curIndex = curIndex
    this.input = input
  }

  parseNodes(): XNode[] {
    const nodes = []

    while (true) {
      this.consumeWhiteSpace()
      if (this.eof() || this.startsWith('</')) break
      if (this.startsWith('<!')) {
        this.consumeComment()
        continue
      }

      nodes.push(this.parseNode())
    }
    return nodes
  }

  parseNode(): XNode {
    if (this.currentChar() == '<') {
      return this.parseElement()
    }
    return this.parseText()
  }

  parseText(): XNode {
    const t = this.consumeWhile(c => c != '<')
    return XNode.createTextNode(t)
  }
  parseElement(): XNode {
    if (this.consumeChar() !== '<') throw new Error('Invalid')
    const tagName = this.parseTagName()
    const attrs = this.parseAttributes()

    if (this.consumeChar() !== '>') throw new Error('Invalid tag name')

    let children = this.parseNodes()
    let text = void 0
    if (children[0] && children[0].nodeName === XNodeName.Text) {
      text = children[0].text
      children = []
    }

    if (
      this.consumeChar() !== '<' ||
      this.consumeChar() !== '/' ||
      this.parseTagName() !== tagName ||
      this.consumeChar() !== '>'
    ) throw new Error('Invalid tag name')
    
    return XNode.createElemNode(tagName, attrs, children, text)
  }

  currentChar(): string {
    const c = this.input[this.curIndex]
    return c
  }

  eof(): boolean {
    return this.curIndex >= this.input.length
  }

  consumeChar(): string {
    const s = this.currentChar()
    this.curIndex += 1
    return s
  }
  startsWith(str): boolean {
    return this.input.startsWith(str, this.curIndex)
  }
  consumeWhile(test: (n: string) => boolean): string {
    let result = ''
    while (!this.eof() && test(this.currentChar())) {
      result += this.consumeChar()
    }
    return result
  }
  consumeWhiteSpace(): void {
    const isWhiteSpace = (str: string) => /\s+/.test(str) || str === ''
    this.consumeWhile(isWhiteSpace)
  }
  consumeComment(): void {
    const regex = /<!(.+)-->/
    let str = ''
    while (!this.eof() && !regex.test(str)) {
      str += this.consumeChar()
    }
  }

  parseTagName(): string {
    return this.consumeWhile(c => /[a-z]|[A-Z]|[0-9]/.test(c))
  }


  parseAttributes(): hashMap {
    const obj: hashMap = {}
    while(true) {
      this.consumeWhiteSpace()
      if (this.currentChar() === '>') break;

      const [name, value] = this.parseAttr()
      obj[name] = value
    }

    return obj
  }

  parseAttr(): [string, string] {
    const name = this.parseTagName()
    if (this.consumeChar() !== '=') throw new Error('Invalid attributes')

    const value = this.parseAttrValue()
    return [name, value]
  }
  parseAttrValue(): string {
    const openQuote = this.consumeChar()
    if (openQuote !== '"' && openQuote !== '\'') throw new Error('Invalid attributes')

    const value = this.consumeWhile(c => c !== openQuote)
    if (this.consumeChar() !== openQuote) throw new Error('Invalid attributes')

    return value
  }
}
