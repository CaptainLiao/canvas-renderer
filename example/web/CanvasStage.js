function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

/**
 * 该方法用来绘制一个有填充色、底边带斜箭头的圆角矩形
 * http://1017401036.iteye.com/blog/2311141
 * 
 * @param cxt:canvas的上下文环境
 * @param width:矩形的宽度
 * @param height:矩形的高度
 * @param radius:圆的半径
**/
function drawRoundRectPath(cxt, width, height, radius) {
  cxt.beginPath(0); //从右下角顺时针绘制，弧度从0到1/2PI

  cxt.arc(width - radius, height - radius, radius, 0, Math.PI / 2); //矩形下边线

  cxt.lineTo(radius, height); //左下角圆弧，弧度从1/2PI到PI

  cxt.arc(radius, height - radius, radius, Math.PI / 2, Math.PI); //矩形左边线

  cxt.lineTo(0, radius); //左上角圆弧，弧度从PI到3/2PI

  cxt.arc(radius, radius, radius, Math.PI, Math.PI * 3 / 2); //上边线

  cxt.lineTo(width - radius, 0); //右上角圆弧

  cxt.arc(width - radius, radius, radius, Math.PI * 3 / 2, Math.PI * 2); //右边线

  cxt.lineTo(width, height - radius);
  cxt.closePath();
}

var Node = /*#__PURE__*/function () {
  function Node() {
    _classCallCheck(this, Node);

    this.children = [];
  }

  _createClass(Node, [{
    key: "add",
    value: function add(node) {
      this.children.push(node);
    }
  }, {
    key: "setFont",
    value: function setFont(fontObj) {
      var t = fontObj;
      this.ctx.font = "".concat(t.fontSize, " ").concat(t.fontFamily);
    }
  }, {
    key: "setFillStyle",
    value: function setFillStyle(fillStyle) {
      this.ctx.fillStyle = fillStyle;
    }
  }, {
    key: "setStrokeStyle",
    value: function setStrokeStyle(strokeStyle) {
      this.ctx.strokeStyle = strokeStyle;
    }
  }, {
    key: "setLineWidth",
    value: function setLineWidth(lineWidth) {
      this.ctx.lineWidth = lineWidth;
    }
  }]);

  return Node;
}();

var uuid = 0;

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getRgba(hex, opacity) {
  var rgbObj = hexToRgb(hex);

  if (opacity == undefined) {
    opacity = 1;
  }

  return "rgba(".concat(rgbObj.r, ", ").concat(rgbObj.g, ", ").concat(rgbObj.b, ", ").concat(opacity, ")");
}

var Element = /*#__PURE__*/function (_Node) {
  _inherits(Element, _Node);

  var _super = _createSuper(Element);

  function Element(_ref) {
    var _this;

    var _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style,
        _ref$props = _ref.props,
        props = _ref$props === void 0 ? {} : _ref$props,
        _ref$idName = _ref.idName,
        idName = _ref$idName === void 0 ? '' : _ref$idName,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        _ref$id = _ref.id,
        id = _ref$id === void 0 ? ++uuid : _ref$id;

    _classCallCheck(this, Element);

    _this = _super.call(this);
    _this.id = id;
    _this.style = style;
    _this.props = props;
    _this.idName = idName;
    _this.className = className;
    _this.children = [];
    _this.parent = null;
    _this.parentId = 0;
    _this.root = null;
    _this.isDestroyed = false;
    _this.layoutBox = {};

    if (style.opacity !== undefined && style.color && style.color.indexOf('#') > -1) {
      style.color = getRgba(style.color, style.opacity);
    }

    if (style.opacity !== undefined && style.backgroundColor && style.backgroundColor.indexOf('#') > -1) {
      style.backgroundColor = getRgba(style.backgroundColor, style.opacity);
    } // for (let key in this.style) {
    //   if (scalableStyles.indexOf(key) > -1) {
    //     this.style[key] *= dpr;
    //   }
    // }
    // this.initRepaint();


    return _this;
  } // 子类填充实现


  _createClass(Element, [{
    key: "repaint",
    value: function repaint() {} // 子类填充实现

  }, {
    key: "insert",
    value: function insert() {}
  }, {
    key: "checkNeedRender",
    value: function checkNeedRender() {
      return true;
    } // 子类填充实现

  }, {
    key: "destroy",
    value: function destroy() {}
  }, {
    key: "add",
    value: function add(element) {
      element.parent = this;
      element.parentId = this.id;
      this.children.push(element);
    } // 方便子类实现borderRadius

  }, {
    key: "roundRectPath",
    value: function roundRectPath(ctx, layoutBox) {
      var style = this.style;
      var box = layoutBox || this.layoutBox;
      var w = box.width;
      var h = box.height;
      var r = style.borderRadius;
      var x = box.absoluteX;
      var y = box.absoluteY;
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.clip();
    }
  }, {
    key: "renderBorder",
    value: function renderBorder(ctx, layoutBox) {
      var style = this.style;

      if (style.borderRadius) {
        this.roundRectPath(ctx, layoutBox);
      }

      ctx.save();
      var box = layoutBox || this.layoutBox;
      var borderWidth = style.borderWidth || 0;
      var borderLeftWidth = style.borderLeftWidth || 0;
      var borderRightWidth = style.borderRightWidth || 0;
      var borderTopWidth = style.borderTopWidth || 0;
      var borderBottomWidth = style.borderBottomWidth || 0;
      var radius = style.borderRadius || 0;
      var borderColor = style.borderColor;
      var drawX = box.absoluteX;
      var drawY = box.absoluteY;
      ctx.beginPath();

      if (borderWidth && borderColor) {
        ctx.setLineWidth(borderWidth);
        ctx.setStrokeStyle(borderColor);
        ctx.strokeRect(drawX, drawY, box.width, box.height);
      }

      if (borderTopWidth && (borderColor || style.borderTopColor)) {
        ctx.setLineWidth(borderTopWidth);
        ctx.setStrokeStyle(style.borderTopColor || borderColor);
        ctx.moveTo(radius ? drawX + radius : drawX, drawY + borderTopWidth / 2);
        ctx.lineTo(radius ? drawX + box.width - radius : drawX + box.width, drawY + borderTopWidth / 2);
      }

      if (borderBottomWidth && (borderColor || style.borderBottomColor)) {
        ctx.lineWidth = borderBottomWidth;
        ctx.strokeStyle = style.borderBottomColor || borderColor;
        ctx.moveTo(radius ? drawX + radius : drawX, drawY + box.height - borderBottomWidth / 2);
        ctx.lineTo(radius ? drawX + box.width - radius : drawX + box.width, drawY + box.height - borderBottomWidth / 2);
      }

      if (borderLeftWidth && (borderColor || style.borderLeftColor)) {
        ctx.lineWidth = borderLeftWidth;
        ctx.strokeStyle = style.borderLeftColor || borderColor;
        ctx.moveTo(drawX + borderLeftWidth / 2, radius ? drawY + radius : drawY);
        ctx.lineTo(drawX + borderLeftWidth / 2, radius ? drawY + box.height - radius : drawY + box.height);
      }

      if (borderRightWidth && (borderColor || style.borderRightColor)) {
        ctx.lineWidth = borderRightWidth;
        ctx.strokeStyle = style.borderRightColor || borderColor;
        ctx.moveTo(drawX + box.width - borderRightWidth / 2, radius ? drawY + radius : drawY);
        ctx.lineTo(drawX + box.width - borderRightWidth / 2, radius ? drawY + box.height - radius : drawY + box.height);
      }

      ctx.closePath();
      ctx.stroke();
      ctx.restore();
    }
  }]);

  return Element;
}(Node);

var View = /*#__PURE__*/function (_Element) {
  _inherits(View, _Element);

  var _super = _createSuper(View);

  function View(_ref) {
    var _this;

    var _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style,
        _ref$props = _ref.props,
        props = _ref$props === void 0 ? {} : _ref$props,
        _ref$idName = _ref.idName,
        idName = _ref$idName === void 0 ? '' : _ref$idName,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className;

    _classCallCheck(this, View);

    _this = _super.call(this, {
      style: style,
      props: props,
      idName: idName,
      className: className
    });
    _this.type = 'View';
    return _this;
  }

  _createClass(View, [{
    key: "render",
    value: function render() {
      var radius = this.blockObj.broderRadius || 0; //圆的直径必然要小于矩形的宽高		

      if (2 * radius > this.blockObj.width || 2 * radius > this.blockObj.height) return console.error('圆的直径必然要大于矩形的宽高');
      this.ctx.save();
      this.ctx.translate(this.blockObj.x, this.blockObj.y);
      this.setLineWidth(this.blockObj.borderWidth); //绘制圆角矩形的各个边

      drawRoundRectPath(this.ctx, this.blockObj.width, this.blockObj.height, radius);

      if (this.blockObj.borderColor) {
        this.setStrokeStyle(this.blockObj.borderColor);
        this.ctx.stroke();
      }

      if (this.blockObj.backgroundColor) {
        this.setFillStyle(this.blockObj.backgroundColor);
        this.ctx.fill();
      }

      this.ctx.restore();
    }
  }]);

  return View;
}(Element);

function measureText(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'm' : _ref$text,
      lineHeight = _ref.lineHeight,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? '14px' : _ref$fontSize,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? "Times New Roman" : _ref$fontFamily;
  var tmpDiv = document.createElement('span');
  tmpDiv.innerHTML = text;
  tmpDiv.style.fontSize = fontSize;
  tmpDiv.style.fontFamily = fontFamily;

  if (lineHeight) {
    tmpDiv.style.lineHeight = lineHeight;
  } // tmpDiv.style.position = 'fixed'
  // tmpDiv.style.left = '-10000px'


  document.body.appendChild(tmpDiv);
  var rect = tmpDiv.getBoundingClientRect(); // 半行距

  var halfLineSpace = (rect.height - parseInt(fontSize)) / 2;
  return {
    width: Math.ceil(rect.width),
    height: rect.height - halfLineSpace,
    halfLineSpace: halfLineSpace
  };
}

var defaultTextProps = {
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: 0,
  paddingBottom: 0,
  marginTop: 0,
  marginBottom: 0,
  marginLeft: 0,
  marginRight: 0,
  fontSize: '14px',
  fontFamily: "-apple-system, BlinkMacSystemFont, \"PingFang SC\", \"PingFangSC\",    \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"WenQuanYi Micro Hei\", SimSun,sans-serif",
  text: '',
  color: '#000',
  backgroundColor: '',
  borderColor: '',
  borderWidth: 0,
  broderRadius: 0
};

var Text = /*#__PURE__*/function (_Node) {
  _inherits(Text, _Node);

  var _super = _createSuper(Text);

  function Text(textObj) {
    var _this;

    _classCallCheck(this, Text);

    _this = _super.call(this);
    _this.textObj = _objectSpread2(_objectSpread2({}, defaultTextProps), textObj);
    var textRect = measureText(_this.textObj);
    _this.textObj.width = textRect.width;
    _this.textObj.height = textRect.height; // 内容盒子

    var contentBlock = {
      x: _this.textObj.marginLeft,
      y: _this.textObj.marginTop - _this.textObj.paddingTop,
      width: textRect.width + _this.textObj.paddingLeft + _this.textObj.paddingRight + 2 * textRect.halfLineSpace,
      height: textRect.height + _this.textObj.paddingTop + _this.textObj.paddingBottom,
      borderColor: _this.textObj.borderColor,
      borderWidth: _this.textObj.borderWidth,
      backgroundColor: _this.textObj.backgroundColor,
      broderRadius: _this.textObj.broderRadius
    };
    new View(contentBlock);
    _this.textObj.x = _this.textObj.marginLeft + _this.textObj.paddingLeft + textRect.halfLineSpace;
    _this.textObj.y = _this.textObj.marginTop - textRect.halfLineSpace;

    _this.render();

    return _this;
  }

  _createClass(Text, [{
    key: "render",
    value: function render() {
      this.ctx.save();
      this.setFont(this.textObj);
      this.setFillStyle(this.textObj.color);
      this.ctx.fillText(this.textObj.text, this.textObj.x, this.textObj.y + this.textObj.height);
      this.ctx.restore();
    }
  }]);

  return Text;
}(Node);

var STATE = {
  "UNINIT": "UNINIT",
  "INITED": "INITED",
  "RENDERED": "RENDERED",
  "CLEAR": "CLEAR"
};

var parser = require('./libs/fast-xml-parser/parser');

var computeLayout = require('css-layout');

var nodeMap = {
  view: View,
  text: Text,
  image: View,
  scrollview: View
};

var createRenderTree = function createRenderTree(node, style) {
  var _this = this;

  var attr = node.attr || {};
  var id = attr.id || '';
  var args = Object.keys(attr).reduce(function (obj, key) {
    var value = attr[key];
    var attribute = key;

    if (key === 'id') {
      obj.style = _objectSpread2(_objectSpread2({}, obj.style), style[id]);
      return obj;
    }

    if (key === 'class') {
      obj.style = value.split(/\s+/).reduce(function (res, oneClass) {
        return _objectSpread2(_objectSpread2({}, res), style[oneClass]);
      }, obj.style || {});
      return obj;
    }

    if (value === 'true') {
      obj[attribute] = true;
    } else if (value === 'false') {
      obj[attribute] = false;
    } else {
      obj[attribute] = value;
    }

    return obj;
  }, {});
  args.idName = id;
  args.className = attr["class"] || '';
  var NODE = nodeMap[node.name];
  var element = new NODE(args);
  element.root = this;
  node.children.forEach(function (childNode) {
    var childElement = createRenderTree.call(_this, childNode, style);
    element.add(childElement);
  });
  return element;
};

function layoutHelper(children) {
  var _this2 = this;

  children.forEach(function (child) {
    var parentBox = child.parent.layoutBox;
    child.layoutBox = {
      x: ~~parentBox.x + child.layout.left,
      y: ~~parentBox.y + child.layout.top,
      width: child.layout.width,
      height: child.layout.height
    };
    layoutHelper.call(_this2, child.children);
  });
}

var Layout = /*#__PURE__*/function (_Element) {
  _inherits(Layout, _Element);

  var _super = _createSuper(Layout);

  function Layout() {
    var _this3;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        style = _ref.style,
        name = _ref.name;

    _classCallCheck(this, Layout);

    _this3 = _super.call(this, {
      style: style,
      id: 0,
      name: name
    });
    _this3.renderContext = null;
    _this3.renderport = {};
    _this3.viewport = {};
    _this3.__cost_time = {};
    _this3.hasViewPortSet = false;
    _this3.layoutBox = {
      x: 0,
      y: 0
    };
    return _this3;
  }

  _createClass(Layout, [{
    key: "init",
    value: function init(template, style) {
      var start = new Date();
      var parseConfig = {
        attributeNamePrefix: "",
        attrNodeName: "attr",
        //default is 'false'
        textNodeName: "#text",
        ignoreAttributes: false,
        ignoreNameSpace: true,
        allowBooleanAttributes: true,
        parseNodeValue: false,
        parseAttributeValue: false,
        trimValues: true,
        parseTrueNumberOnly: false
      };
      var jsonObj = parser.parse(template, parseConfig, true);
      var xmlTree = jsonObj.children[0];
      this.__cost_time.xmlTree = new Date() - start; // XML树生成渲染树

      var renderTree = createRenderTree.call(this, xmlTree, style);
      this.__cost_time.renderTree = new Date() - start;
      this.add(renderTree); // 计算布局树

      computeLayout(renderTree);
      this.__cost_time.layoutTree = new Date() - start;
      var rootEle = this.children[0];

      if (rootEle.style.width === undefined || rootEle.style.height === undefined) {
        console.error('Please set width and height property for root element');
      } else {
        this.renderport.width = rootEle.style.width;
        this.renderport.height = rootEle.style.height;
      }

      this.state = STATE.INITED;
      layoutHelper.call(this, this.children);
    }
  }, {
    key: "layout",
    value: function layout(context) {
      this.renderContext = context;

      if (this.renderContext) {
        this.renderContext.clearRect(0, 0, this.renderport.width, this.renderport.height);
      }
    }
  }, {
    key: "initRepaint",
    value: function initRepaint() {// this.on('repaint', () => {
      //   this.repaint();
      // });
    }
  }]);

  return Layout;
}(Element);

var layout = new Layout({
  style: {
    width: 0,
    height: 0
  },
  name: 'layout'
});
var xmlData = "\n<view id=\"container\">\n  <view id=\"testText\" class=\"redText\" value=\"hello canvas\">adsdf</view>\n  <view class=\"t2\">\u8FD9\u662Ft2</view>\n</view>\n";
var style = {
  container: {
    diplay: 'flex',
    flexDirection: 'row',
    width: 200,
    height: 200,
    margin: 8,
    padding: 2,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 8
  },
  testText: {
    flex: 1,
    color: '#ff0000',
    fontSize: 30,
    textAlign: 'center'
  },
  t2: {
    flex: 1,
    position: 'absolute',
    top: 20,
    left: 20
  }
};
layout.init(xmlData, style);
console.log(layout);

export default layout;
export { STATE };
