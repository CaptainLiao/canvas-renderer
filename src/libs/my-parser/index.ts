
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

export {
  parse
}

function parse(source: string) {
  const nodes = new Parser(0, source).parseNodes()

  console.log(nodes);
  
}

type hashMap = {
  [key: string]: string
}

class XNode {
  children: XNode[] | string;
  node_type: NodeType;
  constructor(children: XNode[] | string, node_type: NodeType) {
    this.children = children;
    this.node_type = node_type;
  }

  static text(data: string): XNode {
    return new XNode(data, NodeType.Text)
  }

  static elem(name: string, attrs: hashMap, children: XNode[]): XNode {
    return new XNode(children, NodeType.Element(new ElementData(name, attrs)))
  }
}


class NodeType {
  static Text = 'Text'
  static Element(data: ElementData): ElementData  {
    return new ElementData(data.tag_name, data.attributes)
  }
}

class ElementData {
  tag_name: string;
  attributes: Object;
  constructor(tag_name: string, attributes: Object) {
    this.tag_name = tag_name
    this.attributes = attributes
  }
}


class Parser {
  pos: number
  input: string

  constructor(pos: number, input: string) {
    this.pos = pos
    this.input = input
  }

  parseNodes(): XNode[] {
    const nodes = []

    while (true) {
      this.consumeWhiteSpace()
      if (this.eof() || this.startsWith('</')) break

      nodes.push(this.parseNode())
    }
    return nodes
  }

  parseNode(): XNode {
    if (this.nextChar() == '<') {
      return this.parseElement()
    }
    return this.parseText()
  }

  parseText(): XNode {
    const t = this.consumeWhile(c => c != '<')
    return XNode.text(t)
  }
  parseElement(): XNode {
    if (this.consumeChar() !== '<') throw new Error('Invalid')
    const tagName = this.parseTagName()
    const attrs = this.parseAttributes()

    if (this.consumeChar() !== '>') throw new Error('Invalid tag name')

    const children = this.parseNodes()

    if (
      this.consumeChar() !== '<' ||
      this.consumeChar() !== '/' ||
      this.parseTagName() !== tagName ||
      this.consumeChar() !== '>'
    ) throw new Error('Invalid tag name')
    
    return XNode.elem(tagName, attrs, children)
  }

  nextChar(): string {
    return this.input[this.pos]
  }

  startsWith(str: string): boolean {
    return this.input.startsWith(str, this.pos)
  }
  eof(): boolean {
    return this.pos >= this.input.length
  }

  consumeChar(): string {
    const s = this.input[this.pos]
    this.pos += 1
    return s
  }
  consumeWhile(test: (n: string) => boolean): string {
    let result = ''
    while (!this.eof() && test(this.nextChar())) {
      result += this.consumeChar()
    }
    return result
  }
  consumeWhiteSpace(): void {
    const isWhiteSpace = (str: string) => str === ' '
    this.consumeWhile(isWhiteSpace)
  }

  parseTagName(): string {
    return this.consumeWhile(c => /[a-z]|[A-Z]|[0-9]/.test(c))
  }


  parseAttributes(): hashMap {
    const obj: hashMap = {}
    while(true) {
      this.consumeWhiteSpace()
      if (this.nextChar() === '>') break;

      const [name, value] = this.parseAttr()
      obj[name] = value
    }

    return obj
  }

  parseAttr(): [string, string] {
    const name = this.parseTagName()
    if (this.consumeChar() !== '=') throw new Error('Invalid tag name')

    const value = this.parseAttrValue()
    return [name, value]
  }
  parseAttrValue(): string {
    const openQuote = this.consumeChar()
    if (openQuote !== '"' && openQuote !== '\'') throw new Error('Invalid')

    const value = this.consumeWhile(c => c !== openQuote)
    if (this.consumeChar() !== openQuote) throw new Error('Invalid')

    return value
  }
}
