function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

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

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var defaultStyle = {
  diplay: 'flex',
  flexDirection: 'row',
  padding: 0,
  margin: 0,
  borderRadius: 0,
  borderWidth: 0,
  borderColor: '#000',
  backgroundColor: ''
};
function parseStyle(s) {
  s.paddingTop = s.paddingTop || s.padding;
  s.paddingRight = s.paddingRight || s.padding;
  s.paddingBottom = s.paddingBottom || s.padding;
  s.paddingLeft = s.paddingLeft || s.padding;
  s.marginTop = s.marginTop || s.margin;
  s.marginRight = s.marginRight || s.margin;
  s.marginBottom = s.marginBottom || s.margin;
  s.marginLeft = s.marginLeft || s.margin;
  s.borderTopWidth = s.borderTopWidth || s.borderWidth;
  s.borderRightWidth = s.borderRightWidth || s.borderWidth;
  s.borderBottomWidth = s.borderBottomWidth || s.borderWidth;
  s.borderLeftWidth = s.borderLeftWidth || s.borderWidth;
  s.borderTopLeftRadius = s.borderTopLeftRadius || s.borderRadius;
  s.borderTopRightRadius = s.borderTopRightRadius || s.borderRadius;
  s.borderBottomLeftRadius = s.borderBottomLeftRadius || s.borderRadius;
  s.borderBottomRightRadius = s.borderBottomRightRadius || s.borderRadius;
  s.borderTopColor = s.borderTopColor || s.borderColor;
  s.borderRightColor = s.borderRightColor || s.borderColor;
  s.borderBottomColor = s.borderBottomColor || s.borderColor;
  s.borderLeftColor = s.borderLeftColor || s.borderColor;
  return s;
}

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

var Element = /*#__PURE__*/function () {
  function Element(_ref) {
    var _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style,
        _ref$props = _ref.props,
        props = _ref$props === void 0 ? {} : _ref$props,
        _ref$idName = _ref.idName,
        idName = _ref$idName === void 0 ? '' : _ref$idName,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className;

    _classCallCheck(this, Element);

    this.id = ++uuid;
    this.style = parseStyle(_objectSpread2(_objectSpread2({}, defaultStyle), style));
    this.props = props;
    this.idName = idName;
    this.className = className;
    this.children = [];
    this.parent = null;
    this.parentId = 0;
    this.root = null;
    this.isDestroyed = false;
    this.layoutBox = {};

    if (style.opacity !== undefined && style.color && style.color.indexOf('#') > -1) {
      style.color = getRgba(style.color, style.opacity);
    }

    if (style.opacity !== undefined && style.backgroundColor && style.backgroundColor.indexOf('#') > -1) {
      style.backgroundColor = getRgba(style.backgroundColor, style.opacity);
    } // this.initRepaint();

  } // 子类填充实现


  _createClass(Element, [{
    key: "repaint",
    value: function repaint() {}
  }, {
    key: "render",
    value: function render() {}
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
    }
  }, {
    key: "renderBox",
    value: function renderBox() {
      var ctx = this.ctx;

      if (this.style.backgroundColor) {
        ctx.save();

        __drawRoundBoxPath.call(this);

        ctx.setFillStyle(this.style.backgroundColor);
        ctx.fill();
        ctx.restore();
      }

      __renderBorder.call(this);
    }
  }, {
    key: "renderLine",
    value: function renderLine() {
      var ctx = this.ctx;

      __renderHelper.call(this, function () {
        ctx.beginPath();
        ctx.moveTo(10, 220);
        ctx.lineTo(10, 320);
        ctx.lineTo(200, 320);
        ctx.setLineWidth(10); // ctx.closePath()
        // ctx.setFillStyle('#ccc')
        // ctx.fill()

        ctx.stroke();
      });
    }
  }]);

  return Element;
}();

function __renderHelper(fn) {
  var ctx = this.ctx;
  ctx.save();
  fn(ctx);
  ctx.restore();
}

function __drawRoundBoxPath() {
  // 从左上角开始，顺时针画一个路径
  var ctx = this.ctx;
  var style = this.style;
  ctx.save();
  ctx.beginPath();
  var box = this.layoutBox;
  var borderLeftWidth = style.borderLeftWidth;
  var borderRightWidth = style.borderRightWidth;
  var borderTopWidth = style.borderTopWidth;
  var borderBottomWidth = style.borderBottomWidth;
  var drawX = box.x;
  var drawY = box.y;
  var ONE_CIRCLE = Math.PI * 2;

  var _x = drawX + box.width - style.borderTopRightRadius - borderRightWidth / 2;

  var _y = drawY + borderTopWidth / 2; // borderTop


  ctx.arc(drawX + style.borderTopLeftRadius + borderLeftWidth / 2, _y + style.borderTopLeftRadius, style.borderTopLeftRadius, 5 / 8 * ONE_CIRCLE, 3 / 4 * ONE_CIRCLE, false);
  ctx.moveTo(drawX + style.borderTopLeftRadius + borderLeftWidth / 2, _y);
  ctx.arc(_x, _y + style.borderTopRightRadius, style.borderTopRightRadius, 3 / 4 * ONE_CIRCLE, 7 / 8 * ONE_CIRCLE, false); // borderRight

  ctx.arc(drawX + box.width - style.borderTopRightRadius - borderRightWidth / 2, drawY + borderTopWidth / 2 + style.borderTopRightRadius, style.borderTopRightRadius, 7 / 8 * ONE_CIRCLE, 0, false);
  var borderBottomRightRadius = style.borderBottomRightRadius || style.borderRadius;
  _x = drawX + box.width - borderRightWidth / 2;
  _y = drawY + box.height - borderBottomRightRadius - borderBottomWidth / 2;
  ctx.lineTo(_x, _y);
  ctx.arc(_x - borderBottomRightRadius, _y, borderBottomRightRadius, 0, 1 / 8 * ONE_CIRCLE, false); // borderBottom

  ctx.arc(_x - style.borderBottomRightRadius, _y, style.borderBottomRightRadius, 1 / 8 * ONE_CIRCLE, 1 / 4 * ONE_CIRCLE, false);
  var borderBottomLeftRadius = style.borderBottomLeftRadius || style.borderRadius;
  _x = drawX + borderBottomLeftRadius + borderLeftWidth / 2;
  _y = drawY + box.height - borderBottomWidth / 2;
  ctx.lineTo(_x, _y);
  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 1 / 4 * ONE_CIRCLE, 3 / 8 * ONE_CIRCLE, false); // borderLeft

  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 3 / 8 * ONE_CIRCLE, 1 / 2 * ONE_CIRCLE, false);
  var borderTopLeftRadius = style.borderTopLeftRadius || style.borderRadius;
  _x = drawX + borderLeftWidth / 2;
  _y = drawY + borderTopLeftRadius + borderTopWidth / 2;
  ctx.lineTo(_x, drawY + box.height - style.borderBottomLeftRadius - style.borderBottom); // 上左圆角

  ctx.arc(_x + borderTopLeftRadius, _y, borderTopLeftRadius, 1 / 2 * ONE_CIRCLE, 5 / 8 * ONE_CIRCLE, false);
  ctx.restore();
}

function __renderBorder() {
  // 从左上角开始，顺时针画一个盒子
  var ctx = this.ctx;
  var style = this.style;
  ctx.save();
  ctx.beginPath();
  var box = this.layoutBox;
  var borderLeftWidth = style.borderLeftWidth;
  var borderRightWidth = style.borderRightWidth;
  var borderTopWidth = style.borderTopWidth;
  var borderBottomWidth = style.borderBottomWidth;
  var drawX = box.x;
  var drawY = box.y;
  var ONE_CIRCLE = Math.PI * 2;

  var _x = drawX + box.width - style.borderTopRightRadius - borderRightWidth / 2;

  var _y = drawY + borderTopWidth / 2; // borderTop


  ctx.arc(drawX + style.borderTopLeftRadius + borderLeftWidth / 2, _y + style.borderTopLeftRadius, style.borderTopLeftRadius, 5 / 8 * ONE_CIRCLE, 3 / 4 * ONE_CIRCLE, false);
  ctx.moveTo(drawX + style.borderTopLeftRadius + borderLeftWidth / 2, _y);
  ctx.arc(_x, _y + style.borderTopRightRadius, style.borderTopRightRadius, 3 / 4 * ONE_CIRCLE, 7 / 8 * ONE_CIRCLE, false);
  var borderTopColor = style.borderTopColor;

  if (borderTopWidth && borderTopColor) {
    __renderHelper.call(this, function (ctx) {
      ctx.setLineWidth(borderTopWidth);
      ctx.setStrokeStyle(borderTopColor);
      ctx.stroke();
    });
  } // borderRight


  ctx.beginPath();
  ctx.arc(drawX + box.width - style.borderTopRightRadius - borderRightWidth / 2, drawY + borderTopWidth / 2 + style.borderTopRightRadius, style.borderTopRightRadius, 7 / 8 * ONE_CIRCLE, 0, false);
  var borderBottomRightRadius = style.borderBottomRightRadius || style.borderRadius;
  _x = drawX + box.width - borderRightWidth / 2;
  _y = drawY + box.height - borderBottomRightRadius - borderBottomWidth / 2;
  ctx.lineTo(_x, _y);
  ctx.arc(_x - borderBottomRightRadius, _y, borderBottomRightRadius, 0, 1 / 8 * ONE_CIRCLE, false);
  var borderRightColor = style.borderRightColor;

  if (borderRightWidth && borderRightColor) {
    __renderHelper.call(this, function () {
      ctx.setLineWidth(borderRightWidth);
      ctx.setStrokeStyle(borderRightColor);
      ctx.stroke();
    });
  } // borderBottom


  ctx.beginPath();
  ctx.arc(_x - style.borderBottomRightRadius, _y, style.borderBottomRightRadius, 1 / 8 * ONE_CIRCLE, 1 / 4 * ONE_CIRCLE, false);
  var borderBottomLeftRadius = style.borderBottomLeftRadius || style.borderRadius;
  _x = drawX + borderBottomLeftRadius + borderLeftWidth / 2;
  _y = drawY + box.height - borderBottomWidth / 2;
  ctx.lineTo(_x, _y);
  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 1 / 4 * ONE_CIRCLE, 3 / 8 * ONE_CIRCLE, false);
  var borderBottomColor = style.borderBottomColor;

  if (borderBottomWidth && borderBottomColor) {
    __renderHelper.call(this, function () {
      ctx.setLineWidth(borderBottomWidth);
      ctx.setStrokeStyle(borderBottomColor);
      ctx.stroke();
    });
  } // borderLeft


  ctx.beginPath();
  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 3 / 8 * ONE_CIRCLE, 1 / 2 * ONE_CIRCLE, false);
  var borderTopLeftRadius = style.borderTopLeftRadius || style.borderRadius;
  _x = drawX + borderLeftWidth / 2;
  _y = drawY + borderTopLeftRadius + borderTopWidth / 2;
  ctx.lineTo(_x, drawY + box.height - style.borderBottomLeftRadius - style.borderBottom); // 上左圆角

  ctx.arc(_x + borderTopLeftRadius, _y, borderTopLeftRadius, 1 / 2 * ONE_CIRCLE, 5 / 8 * ONE_CIRCLE, false);
  var borderLeftColor = style.borderLeftColor;

  if (borderLeftWidth && borderLeftColor) {
    __renderHelper.call(this, function () {
      ctx.setLineWidth(borderLeftWidth);
      ctx.setStrokeStyle(borderLeftColor);
      ctx.stroke();
    });
  }

  ctx.restore();
}

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
    value: function render(ctx) {
      this.ctx = ctx;
      ctx.save();
      this.renderBox();
      ctx.restore();
    }
  }]);

  return View;
}(Element);

function canvasRenderer (ctx) {
  var tmpt = {
    setFont: function setFont(fontObj) {
      var t = fontObj;
      ctx.font = "".concat(t.fontSize, " ").concat(t.fontFamily);
    },
    setTextBaseline: function setTextBaseline(textBaseline) {
      ctx.textBaseline = textBaseline;
    },
    setFillStyle: function setFillStyle(fillStyle) {
      ctx.fillStyle = fillStyle;
    },
    setStrokeStyle: function setStrokeStyle(strokeStyle) {
      ctx.strokeStyle = strokeStyle;
    },
    setLineWidth: function setLineWidth(lineWidth) {
      ctx.lineWidth = lineWidth;
    }
  };
  Object.keys(tmpt).map(function (k) {
    if (!ctx[k]) ctx[k] = tmpt[k];
  });
}

var tmpDiv = document.createElement('span');
function measureText(_ref) {
  var _ref$text = _ref.text,
      text = _ref$text === void 0 ? 'm' : _ref$text,
      style = _ref.style;
  tmpDiv.innerHTML = text;
  tmpDiv.style.fontSize = style.fontSize;
  tmpDiv.style.fontFamily = style.fontFamily;
  tmpDiv.style.display = 'inline-block';

  if (style.lineHeight) {
    tmpDiv.style.lineHeight = style.lineHeight;
  }

  tmpDiv.style.position = 'fixed';
  tmpDiv.style.left = '-10000px';
  document.body.appendChild(tmpDiv);
  var rect = tmpDiv.getBoundingClientRect();
  document.body.removeChild(tmpDiv); // 半行距

  var halfLineSpace = (rect.height - parseInt(style.fontSize)) / 2;
  return {
    width: Math.ceil(rect.width) + style.paddingLeft + style.paddingRight,
    height: rect.height + style.paddingTop + style.paddingBottom,
    halfLineSpace: halfLineSpace
  };
}

var defaultTextStyle = {
  fontSize: '12px',
  lineHeight: 12 * 1.2 + 'px',
  fontFamily: "-apple-system, BlinkMacSystemFont, \"PingFang SC\", \"PingFangSC\",    \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"WenQuanYi Micro Hei\", SimSun,sans-serif",
  text: '',
  textBaseline: 'top',
  color: '#000'
};
var context = null;

var Text = /*#__PURE__*/function (_Element) {
  _inherits(Text, _Element);

  var _super = _createSuper(Text);

  function Text(_ref) {
    var _this;

    var _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style,
        _text_ = _ref._text_,
        _ref$idName = _ref.idName,
        idName = _ref$idName === void 0 ? '' : _ref$idName,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className;

    _classCallCheck(this, Text);

    style = _objectSpread2(_objectSpread2({}, defaultTextStyle), style);
    _this = _super.call(this, {
      style: style,
      idName: idName,
      className: className
    });
    style = _this.style;
    var text = _text_;

    if (style.width === undefined) {
      var r = measureText({
        text: text,
        style: style
      });
      style.width = r.width;
      style.height = r.height;
    } else if (style.textOverflow === 'ellipsis') {
      text = getTextWithEllipsis(style, text);
    }

    _this.text = text;
    _this.__lines = [];
    _this.type = 'Text';
    return _this;
  }

  _createClass(Text, [{
    key: "render",
    value: function render(ctx) {
      var _this2 = this;

      this.ctx = ctx;
      ctx.save();
      this.renderBox();
      ctx.setFont(this.style);
      ctx.setFillStyle(this.style.color);
      ctx.setTextBaseline(this.style.textBaseline);
      var startX = this.layoutBox.x + this.style.borderLeftWidth + this.style.paddingLeft;
      var startY = this.layoutBox.y + this.style.borderTopWidth + this.style.paddingTop;

      this.__lines.forEach(function (line, index) {
        ctx.fillText(line.text, startX, startY + index * parseFloat(_this2.style.lineHeight));
      });

      ctx.restore();
    }
  }]);

  return Text;
}(Element); // helper

function createCanvas() {
  if (typeof wx !== "undefined") {
    return wx.createCanvas();
  } else {
    return document.createElement('canvas');
  }
}

function getContext() {
  if (context) {
    return context;
  }

  var canvas = createCanvas();
  canvas.width = 1;
  canvas.height = 1;
  context = canvas.getContext('2d');
  return context;
}

function getTextWidth(style, value) {
  var context = getContext();
  context.font = "".concat(style.fontWeight || 'normal', " ").concat(style.fontSize || '12px', " ").concat(style.fontFamily || DEFAULT_FONT_FAMILY);
  return context.measureText(value).width || 0;
}

function getTextWithEllipsis(style, text) {
  var value = String(text);
  var maxWidth = style.width;
  var wordWidth = measureText({
    style: style,
    text: text
  }).width; // 对文字溢出的处理，默认用...

  var textOverflow = style.textOverflow || 'ellipsis'; // 文字最大长度不超限制

  if (wordWidth <= maxWidth) {
    return value;
  } // 对于用点点点处理的情况，先将最大宽度减去...的宽度


  if (textOverflow === 'ellipsis') {
    maxWidth -= getTextWidth(style, '...');
  }

  var length = value.length - 1;
  var str = value.substring(0, length);

  while (getTextWidth(style, str) > maxWidth && length > 0) {
    length--;
    str = value.substring(0, length);
  }

  return length && textOverflow === 'ellipsis' ? str + '...' : str;
}

var CanvasImage = Image;

var Image$1 = /*#__PURE__*/function (_Element) {
  _inherits(Image, _Element);

  var _super = _createSuper(Image);

  function Image(_ref) {
    var _this;

    var _ref$style = _ref.style,
        style = _ref$style === void 0 ? {} : _ref$style,
        _ref$props = _ref.props,
        props = _ref$props === void 0 ? {} : _ref$props,
        _ref$idName = _ref.idName,
        idName = _ref$idName === void 0 ? '' : _ref$idName,
        _ref$className = _ref.className,
        className = _ref$className === void 0 ? '' : _ref$className,
        src = _ref.src;

    _classCallCheck(this, Image);

    _this = _super.call(this, {
      style: style,
      props: props,
      idName: idName,
      className: className
    });
    _this.type = 'Image';
    _this.src = src;
    return _this;
  }

  _createClass(Image, [{
    key: "render",
    value: function render(ctx) {
      var _this2 = this;

      this.ctx = ctx;
      return new Promise(function (resolve, reject) {
        var img = new CanvasImage();
        img.src = _this2.src;

        img.onload = function () {
          ctx.save();

          __drawRoundBoxPath.call(_this2);

          ctx.clip();
          var _this2$layoutBox = _this2.layoutBox,
              x = _this2$layoutBox.x,
              y = _this2$layoutBox.y,
              width = _this2$layoutBox.width,
              height = _this2$layoutBox.height;
          ctx.drawImage(img, x, y, width, height);
          ctx.restore();
          resolve();
        };

        img.onerror = reject;
      });
    }
  }]);

  return Image;
}(Element);

var parser = require('./libs/fast-xml-parser/parser');

var computeLayout = require('css-layout');

var nodeMap = {
  view: View,
  text: Text,
  image: Image$1,
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
  args._text_ = node._text_;
  var NODE = nodeMap[node.name];
  var element = new NODE(args);
  element.root = this;
  node.children.forEach(function (childNode) {
    var childElement = createRenderTree.call(_this, childNode, style);
    element.add(childElement);
  });
  return element;
};

function setLayoutBox(children) {
  var _this2 = this;

  children.forEach(function (child) {
    var parentBox = child.parent.layoutBox;
    child.layoutBox = {
      x: ~~parentBox.x + child.layout.left,
      y: ~~parentBox.y + child.layout.top,
      width: child.layout.width,
      height: child.layout.height
    };
    setLayoutBox.call(_this2, child.children);
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
        textNodeName: "_text_",
        ignoreAttributes: false,
        ignoreNameSpace: true,
        allowBooleanAttributes: true,
        parseNodeValue: false,
        parseAttributeValue: false,
        trimValues: true,
        parseTrueNumberOnly: false
      };
      var jsonObj = parser.parse(template, parseConfig, true);
      this.__xmlTree = jsonObj.children[0];
      this.__style = style;
      this.__cost_time.xmlTree = new Date() - start; // XML树生成渲染树

      var renderTree = createRenderTree.call(this, this.__xmlTree, this.__style);
      this.__cost_time.renderTree = new Date() - start; // 计算布局树

      computeLayout(renderTree);
      this.__cost_time.layoutTree = new Date() - start; // 要处理文字换行，需要两棵renderTree

      var renderTree2 = createRenderTree.call(this, this.__xmlTree, this.__style);
      reCalculate([renderTree2], [renderTree]);
      computeLayout(renderTree2);
      this.add(renderTree2);
      var rootEle = this.children[0];

      if (rootEle.style.width === undefined || rootEle.style.height === undefined) {
        console.error('Please set width and height property for root element');
      } else {
        this.renderport.width = rootEle.style.width;
        this.renderport.height = rootEle.style.height;
      }

      setLayoutBox.call(this, this.children);
      return this;
    }
  }, {
    key: "render",
    value: function render(ctx) {
      canvasRenderer(ctx);
      this.renderContext = ctx;

      if (this.renderContext) {
        this.renderContext.clearRect(0, 0, this.renderport.width, this.renderport.height);
      }

      var renderChildren = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(children) {
          var _iterator, _step, child;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _iterator = _createForOfIteratorHelper(children);
                  _context.prev = 1;

                  _iterator.s();

                case 3:
                  if ((_step = _iterator.n()).done) {
                    _context.next = 10;
                    break;
                  }

                  child = _step.value;
                  _context.next = 7;
                  return child.render(ctx);

                case 7:
                  renderChildren(child.children);

                case 8:
                  _context.next = 3;
                  break;

                case 10:
                  _context.next = 15;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](1);

                  _iterator.e(_context.t0);

                case 15:
                  _context.prev = 15;

                  _iterator.f();

                  return _context.finish(15);

                case 18:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[1, 12, 15, 18]]);
        }));

        return function renderChildren(_x) {
          return _ref2.apply(this, arguments);
        };
      }();

      renderChildren(this.children);
    }
  }]);

  return Layout;
}(Element); // helper

function reCalculate(list, layoutList) {
  list.forEach(function (child, index) {
    // 处理文字换行
    if (child.type === "Text") {
      var currentLayoutNode = layoutList[index];
      var parent = currentLayoutNode.parent;
      child.style.width = Math.min(parent.layout.width - 2 * currentLayoutNode.layout.left, currentLayoutNode.layout.width);
      var contentWidth = child.style.width - child.style.borderLeftWidth - child.style.borderRightWidth; // - child.style.paddingLeft
      // - child.style.paddingRight

      var lineIndex = 1;
      var lineText = '';

      for (var i = 0; i < child.text.length; i++) {
        var _layout = measureText({
          text: lineText + child.text[i],
          style: child.style
        });

        if (_layout.width > contentWidth) {
          child.__lines.push({
            text: lineText
          });

          lineText = '';
          lineIndex += 1;
        }

        lineText += child.text[i];
      }

      child.__lines.push({
        text: lineText
      });

      child.style.height = parseFloat(child.style.lineHeight) * lineIndex + child.style.paddingBottom + child.style.paddingTop + child.style.borderTopWidth + child.style.borderBottomWidth;
    }

    reCalculate(child.children, layoutList[index].children);
  });
}

var renderInMP = function renderInMP(_ref2) {
  var canvasId = _ref2.canvasId,
      xml = _ref2.xml,
      style = _ref2.style;

  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      pixelRatio = _wx$getSystemInfoSync.pixelRatio,
      screenWidth = _wx$getSystemInfoSync.screenWidth,
      screenHeight = _wx$getSystemInfoSync.screenHeight;

  var dpr = pixelRatio;
  var w = screenWidth;
  var h = screenHeight;
  wx.createSelectorQuery().select('#canvas').boundingClientRect().node(function (res) {
    var canvasEle = res.node;
    var ctx = canvasEle.getContext('2d');
    canvasEle.width = w * dpr;
    canvasEle.height = h * dpr;
    canvasEle.style.width = "".concat(w, "px");
    canvasEle.style.height = "".concat(h, "px");
    ctx.scale(dpr, dpr);
    var layout = new Layout({
      style: {
        width: 0,
        height: 0
      },
      name: 'layout'
    });
    layout.init(xml, style).render(ctx);
    console.log(layout);
    drawGrid(ctx, w, h);
  }).exec(function (res) {
    console.log(res);
  });
};

var index =  renderInMP;

function drawGrid(ctx, w, h) {
  ctx.save();
  var gap = 10;

  for (var i = 1; i < w / gap; ++i) {
    ctx.moveTo(i * gap, 0);
    ctx.lineTo(i * gap, h);
  }

  for (var _i = 1; _i < w / gap; ++_i) {
    ctx.moveTo(0, _i * gap);
    ctx.lineTo(w, _i * gap);
  }

  for (var _i2 = 0; _i2 < w; _i2 += 2) {
    ctx.fillText(_i2 * gap * 2, _i2 * gap * 2 - 6, 10);
  }

  ctx.strokeStyle = 'rgba(0, 0, 0,.15)';
  ctx.stroke();
  ctx.restore();
}

export default index;
