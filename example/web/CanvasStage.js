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
  }

  _createClass(Node, [{
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

var Block = /*#__PURE__*/function (_Node) {
  _inherits(Block, _Node);

  var _super = _createSuper(Block);

  function Block(blockObj) {
    var _this;

    _classCallCheck(this, Block);

    _this = _super.call(this);
    _this.blockObj = blockObj;

    _this.render();

    return _this;
  }

  _createClass(Block, [{
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

  return Block;
}(Node);

var Line = /*#__PURE__*/function (_Node) {
  _inherits(Line, _Node);

  var _super = _createSuper(Line);

  function Line(lineObj) {
    var _this;

    _classCallCheck(this, Line);

    _this = _super.call(this);
    _this.lineObj = lineObj;
    return _this;
  }

  _createClass(Line, [{
    key: "render",
    value: function render() {
      this.ctx.save();
      this.drawPath();
      this.setStrokeStyle(this.lineObj.color);
      this.setLineWidth(this.lineObj.lineWidth);
      this.ctx.stroke();
      this.ctx.restore();
    }
  }, {
    key: "drawPath",
    value: function drawPath() {
      var _this$lineObj = this.lineObj,
          startPoint = _this$lineObj.startPoint,
          endPoint = _this$lineObj.endPoint;
      this.ctx.beginPath();
      this.ctx.moveTo(startPoint[0], startPoint[1]);
      this.ctx.lineTo(endPoint[0], endPoint[1]);
    }
  }]);

  return Line;
}(Node);

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
    new Block(contentBlock);
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

var CanvasStage = /*#__PURE__*/function () {
  function CanvasStage(_ref) {
    var el = _ref.el,
        width = _ref.width,
        height = _ref.height,
        _ref$ratio = _ref.ratio,
        ratio = _ref$ratio === void 0 ? 1 : _ref$ratio;

    _classCallCheck(this, CanvasStage);

    this.canvas = el; // 解决字体/图片模糊

    this.canvas.width = width * ratio;
    this.canvas.height = height * ratio;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.ctx = this.canvas.getContext('2d');
    this.ctx.scale(ratio, ratio);
  }

  _createClass(CanvasStage, [{
    key: "add",
    value: function add(Node) {
      Node.prototype.ctx = this.ctx;
      Node.prototype.canvas = this.canvas;
    }
  }]);

  return CanvasStage;
}();

export { Block, CanvasStage, Line, Node, Text };
