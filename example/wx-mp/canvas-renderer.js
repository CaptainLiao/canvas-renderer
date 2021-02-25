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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
    }
  }

  _createClass(Element, [{
    key: "render",
    value: function render() {}
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

        ctx.fillStyle = this.style.backgroundColor;
        ctx.fill();
        ctx.restore();
      }

      __renderBorder.call(this);
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
  ctx.arc(_x, _y + style.borderTopRightRadius, style.borderTopRightRadius, 3 / 4 * ONE_CIRCLE, 7 / 8 * ONE_CIRCLE, false);
  var borderTopColor = style.borderTopColor;

  if (borderTopWidth && borderTopColor) {
    __renderHelper.call(this, function (ctx) {
      ctx.lineWidth = borderTopWidth;
      ctx.strokeStyle = borderTopColor;
      ctx.stroke();
    });
  } // borderRight


  ctx.beginPath();
  ctx.arc(drawX + box.width - style.borderTopRightRadius - borderRightWidth / 2, drawY + borderTopWidth / 2 + style.borderTopRightRadius, style.borderTopRightRadius, 7 / 8 * ONE_CIRCLE, 0, false);
  var borderBottomRightRadius = style.borderBottomRightRadius || style.borderRadius;
  _x = drawX + box.width - borderRightWidth / 2;
  _y = drawY + box.height - borderBottomRightRadius - borderBottomWidth / 2;
  ctx.arc(_x - borderBottomRightRadius, _y, borderBottomRightRadius, 0, 1 / 8 * ONE_CIRCLE, false);
  var borderRightColor = style.borderRightColor;

  if (borderRightWidth && borderRightColor) {
    __renderHelper.call(this, function () {
      ctx.lineWidth = borderRightWidth;
      ctx.strokeStyle = borderRightColor;
      ctx.stroke();
    });
  } // borderBottom


  ctx.beginPath();
  ctx.arc(_x - style.borderBottomRightRadius, _y, style.borderBottomRightRadius, 1 / 8 * ONE_CIRCLE, 1 / 4 * ONE_CIRCLE, false);
  var borderBottomLeftRadius = style.borderBottomLeftRadius || style.borderRadius;
  _x = drawX + borderBottomLeftRadius + borderLeftWidth / 2;
  _y = drawY + box.height - borderBottomWidth / 2;
  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 1 / 4 * ONE_CIRCLE, 3 / 8 * ONE_CIRCLE, false);
  var borderBottomColor = style.borderBottomColor;

  if (borderBottomWidth && borderBottomColor) {
    __renderHelper.call(this, function () {
      ctx.lineWidth = borderBottomWidth;
      ctx.strokeStyle = borderBottomColor;
      ctx.stroke();
    });
  } // borderLeft


  ctx.beginPath();
  ctx.arc(_x, _y - borderBottomLeftRadius, borderBottomLeftRadius, 3 / 8 * ONE_CIRCLE, 1 / 2 * ONE_CIRCLE, false);
  var borderTopLeftRadius = style.borderTopLeftRadius || style.borderRadius;
  _x = drawX + borderLeftWidth / 2;
  _y = drawY + borderTopLeftRadius + borderTopWidth / 2; // 上左圆角

  ctx.arc(_x + borderTopLeftRadius, _y, borderTopLeftRadius, 1 / 2 * ONE_CIRCLE, 5 / 8 * ONE_CIRCLE, false);
  var borderLeftColor = style.borderLeftColor;

  if (borderLeftWidth && borderLeftColor) {
    __renderHelper.call(this, function () {
      ctx.lineWidth = borderLeftWidth;
      ctx.strokeStyle = borderLeftColor;
      ctx.stroke();
    });
  }

  ctx.restore();
}

var data = {
  canvasElement: null,
  canvasId: null,
  canvasComponentThis: null,
  canvasContext: null
};
var global$1 = {
  getCanvasId: function getCanvasId() {
    return data.canvasId;
  },
  setCanvasId: function setCanvasId(canvasId) {
    data.canvasId = canvasId.slice(1);
  },
  getCanvas: function getCanvas() {
    return data.canvasElement;
  },
  setCanvas: function setCanvas(canvasElement) {
    data.canvasElement = canvasElement;
  },
  getCanvasComponentThis: function getCanvasComponentThis() {
    return data.canvasComponentThis;
  },
  setCanvasComponentThis: function setCanvasComponentThis(_this) {
    return data.canvasComponentThis = _this;
  },
  getContext: function getContext() {
    return data.canvasContext;
  },
  setContext: function setContext(context) {
    return data.canvasContext = context;
  }
};

var wxOffscreenCanvas = null;
function createCanvas() {
  // 基础库 2.7.0 开始支持
  {
    if (!wxOffscreenCanvas) {
      wxOffscreenCanvas = wx.createOffscreenCanvas();
    }

    return wxOffscreenCanvas;
  }
}
function createImage() {
  {
    return global$1.getCanvas().createImage();
  }
}

function getLineHeight(_ref) {
  var style = _ref.style;
  return Math.max(parseFloat(style.fontSize) * 1.2, parseFloat(style.lineHeight || 0)) + 'px';
}

var context = null;
var offCanvas = null;

function getContext() {
  if (context) {
    context.clearRect(0, 0, offCanvas.width, offCanvas.height);
    return context;
  }

  offCanvas = createCanvas();
  offCanvas.width = 1;
  offCanvas.height = 1;
  context = offCanvas.getContext('2d');

  if (!context) {
    context = wx.createCanvasContext('offCanvas');
  }

  return context;
}

function getTextWidth(_ref2) {
  var style = _ref2.style,
      text = _ref2.text;
  var context = getContext();
  context.font = "".concat(style.fontWeight, " ").concat(style.fontSize, " ").concat(style.fontFamily);
  var w = context.measureText(text).width + style.paddingLeft + style.paddingRight;
  return w || 0;
}

function getTextWithEllipsis(style, text) {
  var value = String(text);
  var maxWidth = style.width;
  var wordWidth = getTextWidth({
    style: style,
    text: text
  }); // 对文字溢出的处理，默认用...

  var textOverflow = style.textOverflow || 'ellipsis'; // 文字最大长度不超限制

  if (wordWidth <= maxWidth) {
    return value;
  } // 对于用点点点处理的情况，先将最大宽度减去...的宽度


  if (textOverflow === 'ellipsis') {
    maxWidth -= getTextWidth({
      style: style,
      text: '...'
    });
  }

  var length = value.length - 1;
  var str = value.substring(0, length);

  while (getTextWidth({
    style: style,
    text: str
  }) > maxWidth && length > 0) {
    length--;
    str = value.substring(0, length);
  }

  return length && textOverflow === 'ellipsis' ? str + '...' : str;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var util = createCommonjsModule(function (module, exports) {

  var getAllMatches = function getAllMatches(string, regex) {
    var matches = [];
    var match = regex.exec(string);

    while (match) {
      var allmatches = [];
      var len = match.length;

      for (var index = 0; index < len; index++) {
        allmatches.push(match[index]);
      }

      matches.push(allmatches);
      match = regex.exec(string);
    }

    return matches;
  };

  var doesMatch = function doesMatch(string, regex) {
    var match = regex.exec(string);
    return !(match === null || typeof match === 'undefined');
  };

  var doesNotMatch = function doesNotMatch(string, regex) {
    return !doesMatch(string, regex);
  };

  exports.isExist = function (v) {
    return typeof v !== 'undefined';
  };

  exports.isEmptyObject = function (obj) {
    return Object.keys(obj).length === 0;
  };
  /**
   * Copy all the properties of a into b.
   * @param {*} target
   * @param {*} a
   */


  exports.merge = function (target, a, arrayMode) {
    if (a) {
      var keys = Object.keys(a); // will return an array of own properties

      var len = keys.length; //don't make it inline

      for (var i = 0; i < len; i++) {
        if (arrayMode === 'strict') {
          target[keys[i]] = [a[keys[i]]];
        } else {
          target[keys[i]] = a[keys[i]];
        }
      }
    }
  };
  /* exports.merge =function (b,a){
    return Object.assign(b,a);
  } */


  exports.getValue = function (v) {
    if (exports.isExist(v)) {
      return v;
    } else {
      return '';
    }
  }; // const fakeCall = function(a) {return a;};
  // const fakeCallNoReturn = function() {};


  exports.buildOptions = function (options, defaultOptions, props) {
    var newOptions = {};

    if (!options) {
      return defaultOptions; //if there are not options
    }

    for (var i = 0; i < props.length; i++) {
      if (options[props[i]] !== undefined) {
        newOptions[props[i]] = options[props[i]];
      } else {
        newOptions[props[i]] = defaultOptions[props[i]];
      }
    }

    return newOptions;
  };

  exports.doesMatch = doesMatch;
  exports.doesNotMatch = doesNotMatch;
  exports.getAllMatches = getAllMatches;
});

var convertToJson = function convertToJson(node, options) {
  var jObj = {
    name: node.tagname
  }; //when no child node or attr is present

  if ((!node.child || util.isEmptyObject(node.child)) && (!node.attrsMap || util.isEmptyObject(node.attrsMap))) {
    return util.isExist(node.val) && !!node.val ? node.val : jObj;
  } else {
    //otherwise create a textnode if node has some text
    if (util.isExist(node.val)) {
      if (!(typeof node.val === 'string' && (node.val === '' || node.val === options.cdataPositionChar))) {
        if (options.arrayMode === "strict") {
          jObj[options.textNodeName] = [node.val];
        } else {
          jObj[options.textNodeName] = node.val;
        }
      }
    }
  }

  util.merge(jObj, node.attrsMap, options.arrayMode);
  jObj.children = [];
  node.children.forEach(function (child) {
    jObj.children.push(convertToJson(child, options));
  }); // const keys = Object.keys(node.child);
  // for (let index = 0; index < keys.length; index++) {
  //   var tagname = keys[index];
  //   if (node.child[tagname] && node.child[tagname].length > 1) {
  //     jObj[tagname] = [];
  //     for (var tag in node.child[tagname]) {
  //       jObj[tagname].push(convertToJson(node.child[tagname][tag], options));
  //     }
  //   } else {
  //     if(options.arrayMode === true){
  //       const result = convertToJson(node.child[tagname][0], options)
  //       if(typeof result === 'object')
  //         jObj[tagname] = [ result ];
  //       else
  //         jObj[tagname] = result;
  //     }else if(options.arrayMode === "strict"){
  //       jObj[tagname] = [convertToJson(node.child[tagname][0], options) ];
  //     }else{
  //       jObj[tagname] = convertToJson(node.child[tagname][0], options);
  //     }
  //   }
  // }
  //add value

  return jObj;
};

var convertToJson_1 = convertToJson;
var node2json = {
  convertToJson: convertToJson_1
};

var xmlNode = function xmlNode(tagname, parent, val) {
  this.tagname = tagname;
  this.parent = parent;
  this.child = {}; //child tags

  this.attrsMap = {}; //attributes map

  this.children = [];
  this.val = val; //text only

  this.addChild = function (child) {
    this.children.push(child);

    if (Array.isArray(this.child[child.tagname])) {
      //already presents
      this.child[child.tagname].push(child);
    } else {
      this.child[child.tagname] = [child];
    }
  };
};

var buildOptions = util.buildOptions;
var TagType = {
  OPENING: 1,
  CLOSING: 2,
  SELF: 3,
  CDATA: 4
};
var regx = '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|(([\\w:\\-._]*:)?([\\w:\\-._]+))([^>]*)>|((\\/)(([\\w:\\-._]*:)?([\\w:\\-._]+))\\s*>))([^<]*)'; //const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");
//polyfill

if (!Number.parseInt && window.parseInt) {
  Number.parseInt = window.parseInt;
}

if (!Number.parseFloat && window.parseFloat) {
  Number.parseFloat = window.parseFloat;
}

var defaultOptions = {
  attributeNamePrefix: '@_',
  attrNodeName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  ignoreNameSpace: false,
  allowBooleanAttributes: false,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseNodeValue: true,
  parseAttributeValue: false,
  arrayMode: false,
  trimValues: true,
  //Trim string values of tag and attributes
  cdataTagName: false,
  cdataPositionChar: '\\c',
  localeRange: '',
  tagValueProcessor: function tagValueProcessor(a) {
    return a;
  },
  attrValueProcessor: function attrValueProcessor(a) {
    return a;
  },
  stopNodes: [] //decodeStrict: false,

};
var defaultOptions_1 = defaultOptions;
var props = ['attributeNamePrefix', 'attrNodeName', 'textNodeName', 'ignoreAttributes', 'ignoreNameSpace', 'allowBooleanAttributes', 'parseNodeValue', 'parseAttributeValue', 'arrayMode', 'trimValues', 'cdataTagName', 'cdataPositionChar', 'localeRange', 'tagValueProcessor', 'attrValueProcessor', 'parseTrueNumberOnly', 'stopNodes'];
var props_1 = props;

var getTraversalObj = function getTraversalObj(xmlData, options) {
  options = buildOptions(options, defaultOptions, props); //xmlData = xmlData.replace(/\r?\n/g, " ");//make it single line

  xmlData = xmlData.replace(/<!--[\s\S]*?-->/g, ''); //Remove  comments

  var xmlObj = new xmlNode('!xml');
  var currentNode = xmlObj;
  regx = regx.replace(/\[\\w/g, '[' + options.localeRange + '\\w');
  var tagsRegx = new RegExp(regx, 'g');
  var tag = tagsRegx.exec(xmlData);
  var nextTag = tagsRegx.exec(xmlData);

  while (tag) {
    var tagType = checkForTagType(tag);

    if (tagType === TagType.CLOSING) {
      //add parsed data to parent node
      if (currentNode.parent && tag[14]) {
        currentNode.parent.val = util.getValue(currentNode.parent.val) + '' + processTagValue(tag, options, currentNode.parent.tagname);
      }

      if (options.stopNodes.length && options.stopNodes.includes(currentNode.tagname)) {
        currentNode.child = [];

        if (currentNode.attrsMap == undefined) {
          currentNode.attrsMap = {};
        }

        currentNode.val = xmlData.substr(currentNode.startIndex + 1, tag.index - currentNode.startIndex - 1);
      }

      currentNode = currentNode.parent;
    } else if (tagType === TagType.CDATA) {
      if (options.cdataTagName) {
        //add cdata node
        var childNode = new xmlNode(options.cdataTagName, currentNode, tag[3]);
        childNode.attrsMap = buildAttributesMap(tag[8], options);
        currentNode.addChild(childNode); //for backtracking

        currentNode.val = util.getValue(currentNode.val) + options.cdataPositionChar; //add rest value to parent node

        if (tag[14]) {
          currentNode.val += processTagValue(tag, options);
        }
      } else {
        currentNode.val = (currentNode.val || '') + (tag[3] || '') + processTagValue(tag, options);
      }
    } else if (tagType === TagType.SELF) {
      if (currentNode && tag[14]) {
        currentNode.val = util.getValue(currentNode.val) + '' + processTagValue(tag, options);
      }

      var _childNode = new xmlNode(options.ignoreNameSpace ? tag[7] : tag[5], currentNode, '');

      if (tag[8] && tag[8].length > 0) {
        tag[8] = tag[8].substr(0, tag[8].length - 1);
      }

      _childNode.attrsMap = buildAttributesMap(tag[8], options);
      currentNode.addChild(_childNode);
    } else {
      //TagType.OPENING
      var _childNode2 = new xmlNode(options.ignoreNameSpace ? tag[7] : tag[5], currentNode, processTagValue(tag, options));

      if (options.stopNodes.length && options.stopNodes.includes(_childNode2.tagname)) {
        _childNode2.startIndex = tag.index + tag[1].length;
      }

      _childNode2.attrsMap = buildAttributesMap(tag[8], options);
      currentNode.addChild(_childNode2);
      currentNode = _childNode2;
    }

    tag = nextTag;
    nextTag = tagsRegx.exec(xmlData);
  }

  return xmlObj;
};

function processTagValue(parsedTags, options, parentTagName) {
  var tagName = parsedTags[7] || parentTagName;
  var val = parsedTags[14];

  if (val) {
    if (options.trimValues) {
      val = val.trim();
    }

    val = options.tagValueProcessor(val, tagName);
    val = parseValue(val, options.parseNodeValue, options.parseTrueNumberOnly);
  }

  return val;
}

function checkForTagType(match) {
  if (match[4] === ']]>') {
    return TagType.CDATA;
  } else if (match[10] === '/') {
    return TagType.CLOSING;
  } else if (typeof match[8] !== 'undefined' && match[8].substr(match[8].length - 1) === '/') {
    return TagType.SELF;
  } else {
    return TagType.OPENING;
  }
}

function resolveNameSpace(tagname, options) {
  if (options.ignoreNameSpace) {
    var tags = tagname.split(':');
    var prefix = tagname.charAt(0) === '/' ? '/' : '';

    if (tags[0] === 'xmlns') {
      return '';
    }

    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }

  return tagname;
}

function parseValue(val, shouldParse, parseTrueNumberOnly) {
  if (shouldParse && typeof val === 'string') {
    var parsed;

    if (val.trim() === '' || isNaN(val)) {
      parsed = val === 'true' ? true : val === 'false' ? false : val;
    } else {
      if (val.indexOf('0x') !== -1) {
        //support hexa decimal
        parsed = Number.parseInt(val, 16);
      } else if (val.indexOf('.') !== -1) {
        parsed = Number.parseFloat(val);
      } else {
        parsed = Number.parseInt(val, 10);
      }

      if (parseTrueNumberOnly) {
        parsed = String(parsed) === val ? parsed : val;
      }
    }

    return parsed;
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
} //TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");


var attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])(.*?)\\3)?', 'g');

function buildAttributesMap(attrStr, options) {
  if (!options.ignoreAttributes && typeof attrStr === 'string') {
    attrStr = attrStr.replace(/\r?\n/g, ' '); //attrStr = attrStr || attrStr.trim();

    var matches = util.getAllMatches(attrStr, attrsRegx);
    var len = matches.length; //don't make it inline

    var attrs = {};

    for (var i = 0; i < len; i++) {
      var attrName = resolveNameSpace(matches[i][1], options);

      if (attrName.length) {
        if (matches[i][4] !== undefined) {
          if (options.trimValues) {
            matches[i][4] = matches[i][4].trim();
          }

          matches[i][4] = options.attrValueProcessor(matches[i][4], attrName);
          attrs[options.attributeNamePrefix + attrName] = parseValue(matches[i][4], options.parseAttributeValue, options.parseTrueNumberOnly);
        } else if (options.allowBooleanAttributes) {
          attrs[options.attributeNamePrefix + attrName] = true;
        }
      }
    }

    if (!Object.keys(attrs).length) {
      return;
    }

    if (options.attrNodeName) {
      var attrCollection = {};
      attrCollection[options.attrNodeName] = attrs;
      return attrCollection;
    }

    return attrs;
  }
}

var getTraversalObj_1 = getTraversalObj;
var xmlstr2xmlnode = {
  defaultOptions: defaultOptions_1,
  props: props_1,
  getTraversalObj: getTraversalObj_1
};

var defaultOptions$1 = {
  allowBooleanAttributes: false,
  //A tag can have attributes without any value
  localeRange: 'a-zA-Z'
};
var props$1 = ['allowBooleanAttributes', 'localeRange']; //const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");

var validate = function validate(xmlData, options) {
  options = util.buildOptions(options, defaultOptions$1, props$1); //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE

  var tags = [];
  var tagFound = false;

  if (xmlData[0] === "\uFEFF") {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }

  var regxAttrName = new RegExp('^[_w][\\w\\-.:]*$'.replace('_w', '_' + options.localeRange));
  var regxTagName = new RegExp('^([w]|_)[\\w.\\-_:]*'.replace('([w', '([' + options.localeRange));

  for (var i = 0; i < xmlData.length; i++) {
    if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value
      i++;

      if (xmlData[i] === '?') {
        i = readPI(xmlData, ++i);

        if (i.err) {
          return i;
        }
      } else if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        var closingTag = false;

        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        } //read tagname


        var tagName = '';

        for (; i < xmlData.length && xmlData[i] !== '>' && xmlData[i] !== ' ' && xmlData[i] !== '\t' && xmlData[i] !== '\n' && xmlData[i] !== '\r'; i++) {
          tagName += xmlData[i];
        }

        tagName = tagName.trim(); //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          continue;
        }

        if (!validateTagName(tagName, regxTagName)) {
          return {
            err: {
              code: 'InvalidTag',
              msg: 'Tag ' + tagName + ' is an invalid name.'
            }
          };
        }

        var result = readAttributeStr(xmlData, i);

        if (result === false) {
          return {
            err: {
              code: 'InvalidAttr',
              msg: 'Attributes for "' + tagName + '" have open quote.'
            }
          };
        }

        var attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          attrStr = attrStr.substring(0, attrStr.length - 1);
          var isValid = validateAttributeString(attrStr, options, regxAttrName);

          if (isValid === true) {
            tagFound = true; //continue; //text may presents after self closing tag
          } else {
            return isValid;
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return {
              err: {
                code: 'InvalidTag',
                msg: 'closing tag "' + tagName + "\" don't have proper closing."
              }
            };
          } else if (attrStr.trim().length > 0) {
            return {
              err: {
                code: 'InvalidTag',
                msg: 'closing tag "' + tagName + "\" can't have attributes or invalid starting."
              }
            };
          } else {
            var otg = tags.pop();

            if (tagName !== otg) {
              return {
                err: {
                  code: 'InvalidTag',
                  msg: 'closing tag ' + otg + ' is expected inplace of ' + tagName + '.'
                }
              };
            }
          }
        } else {
          var _isValid = validateAttributeString(attrStr, options, regxAttrName);

          if (_isValid !== true) {
            return _isValid;
          }

          tags.push(tagName);
          tagFound = true;
        } //skip tag text value
        //It may include comments and CDATA value


        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else {
              break;
            }
          }
        } //end of reading tag text value


        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if (xmlData[i] === ' ' || xmlData[i] === '\t' || xmlData[i] === '\n' || xmlData[i] === '\r') {
        continue;
      }

      return {
        err: {
          code: 'InvalidChar',
          msg: 'char ' + xmlData[i] + ' is not expected .'
        }
      };
    }
  }

  if (!tagFound) {
    return {
      err: {
        code: 'InvalidXml',
        msg: 'Start tag expected.'
      }
    };
  } else if (tags.length > 0) {
    return {
      err: {
        code: 'InvalidXml',
        msg: 'Invalid ' + JSON.stringify(tags, null, 4).replace(/\r?\n/g, '') + ' found.'
      }
    };
  }

  return true;
};
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */


function readPI(xmlData, i) {
  var start = i;

  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      var tagname = xmlData.substr(start, i - start);

      if (i > 5 && tagname === 'xml') {
        return {
          err: {
            code: 'InvalidXml',
            msg: 'XML declaration allowed only at the start of the document.'
          }
        };
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }

  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (xmlData.length > i + 8 && xmlData[i + 1] === 'D' && xmlData[i + 2] === 'O' && xmlData[i + 3] === 'C' && xmlData[i + 4] === 'T' && xmlData[i + 5] === 'Y' && xmlData[i + 6] === 'P' && xmlData[i + 7] === 'E') {
    var angleBracketsCount = 1;

    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;

        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (xmlData.length > i + 9 && xmlData[i + 1] === '[' && xmlData[i + 2] === 'C' && xmlData[i + 3] === 'D' && xmlData[i + 4] === 'A' && xmlData[i + 5] === 'T' && xmlData[i + 6] === 'A' && xmlData[i + 7] === '[') {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

var doubleQuote = '"';
var singleQuote = "'";
/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */

function readAttributeStr(xmlData, i) {
  var attrStr = '';
  var startChar = '';
  var tagClosed = false;

  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
        continue;
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }

    attrStr += xmlData[i];
  }

  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}
/**
 * Select all the attributes whether valid or invalid.
 */


var validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g'); //attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options, regxAttrName) {
  //console.log("start:"+attrStr+":end");
  //if(attrStr.trim().length === 0) return true; //empty string
  var matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  var attrNames = {};

  for (var i = 0; i < matches.length; i++) {
    //console.log(matches[i]);
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return {
        err: {
          code: 'InvalidAttr',
          msg: 'attribute ' + matches[i][2] + ' has no space in starting.'
        }
      };
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return {
        err: {
          code: 'InvalidAttr',
          msg: 'boolean attribute ' + matches[i][2] + ' is not allowed.'
        }
      };
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */


    var attrName = matches[i][2];

    if (!validateAttrName(attrName, regxAttrName)) {
      return {
        err: {
          code: 'InvalidAttr',
          msg: 'attribute ' + attrName + ' is an invalid name.'
        }
      };
    }
    /*if (!attrNames.hasOwnProperty(attrName)) {*/


    if (!Object.prototype.hasOwnProperty.call(attrNames, attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return {
        err: {
          code: 'InvalidAttr',
          msg: 'attribute ' + attrName + ' is repeated.'
        }
      };
    }
  }

  return true;
} // const validAttrRegxp = /^[_a-zA-Z][\w\-.:]*$/;


function validateAttrName(attrName, regxAttrName) {
  // const validAttrRegxp = new RegExp(regxAttrName);
  return util.doesMatch(attrName, regxAttrName);
} //const startsWithXML = new RegExp("^[Xx][Mm][Ll]");
//  startsWith = /^([a-zA-Z]|_)[\w.\-_:]*/;


function validateTagName(tagname, regxTagName) {
  /*if(util.doesMatch(tagname,startsWithXML)) return false;
    else*/
  return !util.doesNotMatch(tagname, regxTagName);
}

var validator = {
  validate: validate
};

var x2xmlnode = xmlstr2xmlnode;
var buildOptions$1 = util.buildOptions;

function parse(xmlData, options, validationOption) {
  if (validationOption) {
    if (validationOption === true) validationOption = {};
    var result = validator.validate(xmlData, validationOption);

    if (result !== true) {
      throw Error(result.err.msg);
    }
  }

  options = buildOptions$1(options, x2xmlnode.defaultOptions, x2xmlnode.props);
  return node2json.convertToJson(xmlstr2xmlnode.getTraversalObj(xmlData, options), options);
}
var getTraversalObj$1 = xmlstr2xmlnode.getTraversalObj;
var parse_1 = parse;
var getTraversalObj_1$1 = getTraversalObj$1;
var parser = {
  parse: parse_1,
  getTraversalObj: getTraversalObj_1$1
};

var cssLayout = createCommonjsModule(function (module, exports) {
  // UMD (Universal Module Definition)
  // See https://github.com/umdjs/umd for reference
  //
  // This file uses the following specific UMD implementation:
  // https://github.com/umdjs/umd/blob/master/returnExports.js
  (function (root, factory) {
    {
      // Node. Does not work with strict CommonJS, but
      // only CommonJS-like environments that support module.exports,
      // like Node.
      module.exports = factory();
    }
  })(commonjsGlobal, function () {
    /**
    * Copyright (c) 2014, Facebook, Inc.
    * All rights reserved.
    *
    * This source code is licensed under the BSD-style license found in the
    * LICENSE file in the root directory of this source tree. An additional grant
    * of patent rights can be found in the PATENTS file in the same directory.
    */
    var computeLayout = function () {
      var CSS_UNDEFINED;
      var CSS_DIRECTION_INHERIT = 'inherit';
      var CSS_DIRECTION_LTR = 'ltr';
      var CSS_DIRECTION_RTL = 'rtl';
      var CSS_FLEX_DIRECTION_ROW = 'row';
      var CSS_FLEX_DIRECTION_ROW_REVERSE = 'row-reverse';
      var CSS_FLEX_DIRECTION_COLUMN = 'column';
      var CSS_FLEX_DIRECTION_COLUMN_REVERSE = 'column-reverse';
      var CSS_JUSTIFY_FLEX_START = 'flex-start';
      var CSS_JUSTIFY_CENTER = 'center';
      var CSS_JUSTIFY_FLEX_END = 'flex-end';
      var CSS_JUSTIFY_SPACE_BETWEEN = 'space-between';
      var CSS_JUSTIFY_SPACE_AROUND = 'space-around';
      var CSS_ALIGN_FLEX_START = 'flex-start';
      var CSS_ALIGN_CENTER = 'center';
      var CSS_ALIGN_FLEX_END = 'flex-end';
      var CSS_ALIGN_STRETCH = 'stretch';
      var CSS_POSITION_RELATIVE = 'relative';
      var CSS_POSITION_ABSOLUTE = 'absolute';
      var leading = {
        'row': 'left',
        'row-reverse': 'right',
        'column': 'top',
        'column-reverse': 'bottom'
      };
      var trailing = {
        'row': 'right',
        'row-reverse': 'left',
        'column': 'bottom',
        'column-reverse': 'top'
      };
      var pos = {
        'row': 'left',
        'row-reverse': 'right',
        'column': 'top',
        'column-reverse': 'bottom'
      };
      var dim = {
        'row': 'width',
        'row-reverse': 'width',
        'column': 'height',
        'column-reverse': 'height'
      }; // When transpiled to Java / C the node type has layout, children and style
      // properties. For the JavaScript version this function adds these properties
      // if they don't already exist.

      function fillNodes(node) {
        if (!node.layout || node.isDirty) {
          node.layout = {
            width: undefined,
            height: undefined,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          };
        }

        if (!node.style) {
          node.style = {};
        }

        if (!node.children) {
          node.children = [];
        }

        node.children.forEach(fillNodes);
        return node;
      }

      function isUndefined(value) {
        return value === undefined;
      }

      function isRowDirection(flexDirection) {
        return flexDirection === CSS_FLEX_DIRECTION_ROW || flexDirection === CSS_FLEX_DIRECTION_ROW_REVERSE;
      }

      function isColumnDirection(flexDirection) {
        return flexDirection === CSS_FLEX_DIRECTION_COLUMN || flexDirection === CSS_FLEX_DIRECTION_COLUMN_REVERSE;
      }

      function getLeadingMargin(node, axis) {
        if (node.style.marginStart !== undefined && isRowDirection(axis)) {
          return node.style.marginStart;
        }

        var value = null;

        switch (axis) {
          case 'row':
            value = node.style.marginLeft;
            break;

          case 'row-reverse':
            value = node.style.marginRight;
            break;

          case 'column':
            value = node.style.marginTop;
            break;

          case 'column-reverse':
            value = node.style.marginBottom;
            break;
        }

        if (value !== undefined) {
          return value;
        }

        if (node.style.margin !== undefined) {
          return node.style.margin;
        }

        return 0;
      }

      function getTrailingMargin(node, axis) {
        if (node.style.marginEnd !== undefined && isRowDirection(axis)) {
          return node.style.marginEnd;
        }

        var value = null;

        switch (axis) {
          case 'row':
            value = node.style.marginRight;
            break;

          case 'row-reverse':
            value = node.style.marginLeft;
            break;

          case 'column':
            value = node.style.marginBottom;
            break;

          case 'column-reverse':
            value = node.style.marginTop;
            break;
        }

        if (value != null) {
          return value;
        }

        if (node.style.margin !== undefined) {
          return node.style.margin;
        }

        return 0;
      }

      function getLeadingPadding(node, axis) {
        if (node.style.paddingStart !== undefined && node.style.paddingStart >= 0 && isRowDirection(axis)) {
          return node.style.paddingStart;
        }

        var value = null;

        switch (axis) {
          case 'row':
            value = node.style.paddingLeft;
            break;

          case 'row-reverse':
            value = node.style.paddingRight;
            break;

          case 'column':
            value = node.style.paddingTop;
            break;

          case 'column-reverse':
            value = node.style.paddingBottom;
            break;
        }

        if (value != null && value >= 0) {
          return value;
        }

        if (node.style.padding !== undefined && node.style.padding >= 0) {
          return node.style.padding;
        }

        return 0;
      }

      function getTrailingPadding(node, axis) {
        if (node.style.paddingEnd !== undefined && node.style.paddingEnd >= 0 && isRowDirection(axis)) {
          return node.style.paddingEnd;
        }

        var value = null;

        switch (axis) {
          case 'row':
            value = node.style.paddingRight;
            break;

          case 'row-reverse':
            value = node.style.paddingLeft;
            break;

          case 'column':
            value = node.style.paddingBottom;
            break;

          case 'column-reverse':
            value = node.style.paddingTop;
            break;
        }

        if (value != null && value >= 0) {
          return value;
        }

        if (node.style.padding !== undefined && node.style.padding >= 0) {
          return node.style.padding;
        }

        return 0;
      }

      function getLeadingBorder(node, axis) {
        if (node.style.borderStartWidth !== undefined && node.style.borderStartWidth >= 0 && isRowDirection(axis)) {
          return node.style.borderStartWidth;
        }

        var value = null;

        switch (axis) {
          case 'row':
            value = node.style.borderLeftWidth;
            break;

          case 'row-reverse':
            value = node.style.borderRightWidth;
            break;

          case 'column':
            value = node.style.borderTopWidth;
            break;

          case 'column-reverse':
            value = node.style.borderBottomWidth;
            break;
        }

        if (value != null && value >= 0) {
          return value;
        }

        if (node.style.borderWidth !== undefined && node.style.borderWidth >= 0) {
          return node.style.borderWidth;
        }

        return 0;
      }

      function getTrailingBorder(node, axis) {
        if (node.style.borderEndWidth !== undefined && node.style.borderEndWidth >= 0 && isRowDirection(axis)) {
          return node.style.borderEndWidth;
        }

        var value = null;

        switch (axis) {
          case 'row':
            value = node.style.borderRightWidth;
            break;

          case 'row-reverse':
            value = node.style.borderLeftWidth;
            break;

          case 'column':
            value = node.style.borderBottomWidth;
            break;

          case 'column-reverse':
            value = node.style.borderTopWidth;
            break;
        }

        if (value != null && value >= 0) {
          return value;
        }

        if (node.style.borderWidth !== undefined && node.style.borderWidth >= 0) {
          return node.style.borderWidth;
        }

        return 0;
      }

      function getLeadingPaddingAndBorder(node, axis) {
        return getLeadingPadding(node, axis) + getLeadingBorder(node, axis);
      }

      function getTrailingPaddingAndBorder(node, axis) {
        return getTrailingPadding(node, axis) + getTrailingBorder(node, axis);
      }

      function getBorderAxis(node, axis) {
        return getLeadingBorder(node, axis) + getTrailingBorder(node, axis);
      }

      function getMarginAxis(node, axis) {
        return getLeadingMargin(node, axis) + getTrailingMargin(node, axis);
      }

      function getPaddingAndBorderAxis(node, axis) {
        return getLeadingPaddingAndBorder(node, axis) + getTrailingPaddingAndBorder(node, axis);
      }

      function getJustifyContent(node) {
        if (node.style.justifyContent) {
          return node.style.justifyContent;
        }

        return 'flex-start';
      }

      function getAlignContent(node) {
        if (node.style.alignContent) {
          return node.style.alignContent;
        }

        return 'flex-start';
      }

      function getAlignItem(node, child) {
        if (child.style.alignSelf) {
          return child.style.alignSelf;
        }

        if (node.style.alignItems) {
          return node.style.alignItems;
        }

        return 'stretch';
      }

      function resolveAxis(axis, direction) {
        if (direction === CSS_DIRECTION_RTL) {
          if (axis === CSS_FLEX_DIRECTION_ROW) {
            return CSS_FLEX_DIRECTION_ROW_REVERSE;
          } else if (axis === CSS_FLEX_DIRECTION_ROW_REVERSE) {
            return CSS_FLEX_DIRECTION_ROW;
          }
        }

        return axis;
      }

      function resolveDirection(node, parentDirection) {
        var direction;

        if (node.style.direction) {
          direction = node.style.direction;
        } else {
          direction = CSS_DIRECTION_INHERIT;
        }

        if (direction === CSS_DIRECTION_INHERIT) {
          direction = parentDirection === undefined ? CSS_DIRECTION_LTR : parentDirection;
        }

        return direction;
      }

      function getFlexDirection(node) {
        if (node.style.flexDirection) {
          return node.style.flexDirection;
        }

        return CSS_FLEX_DIRECTION_COLUMN;
      }

      function getCrossFlexDirection(flexDirection, direction) {
        if (isColumnDirection(flexDirection)) {
          return resolveAxis(CSS_FLEX_DIRECTION_ROW, direction);
        } else {
          return CSS_FLEX_DIRECTION_COLUMN;
        }
      }

      function getPositionType(node) {
        if (node.style.position) {
          return node.style.position;
        }

        return 'relative';
      }

      function isFlex(node) {
        return getPositionType(node) === CSS_POSITION_RELATIVE && node.style.flex > 0;
      }

      function isFlexWrap(node) {
        return node.style.flexWrap === 'wrap';
      }

      function getDimWithMargin(node, axis) {
        return node.layout[dim[axis]] + getMarginAxis(node, axis);
      }

      function isDimDefined(node, axis) {
        return node.style[dim[axis]] !== undefined && node.style[dim[axis]] >= 0;
      }

      function isPosDefined(node, pos) {
        return node.style[pos] !== undefined;
      }

      function isMeasureDefined(node) {
        return node.style.measure !== undefined;
      }

      function getPosition(node, pos) {
        if (node.style[pos] !== undefined) {
          return node.style[pos];
        }

        return 0;
      }

      function boundAxis(node, axis, value) {
        var min = {
          'row': node.style.minWidth,
          'row-reverse': node.style.minWidth,
          'column': node.style.minHeight,
          'column-reverse': node.style.minHeight
        }[axis];
        var max = {
          'row': node.style.maxWidth,
          'row-reverse': node.style.maxWidth,
          'column': node.style.maxHeight,
          'column-reverse': node.style.maxHeight
        }[axis];
        var boundValue = value;

        if (max !== undefined && max >= 0 && boundValue > max) {
          boundValue = max;
        }

        if (min !== undefined && min >= 0 && boundValue < min) {
          boundValue = min;
        }

        return boundValue;
      }

      function fmaxf(a, b) {
        if (a > b) {
          return a;
        }

        return b;
      } // When the user specifically sets a value for width or height


      function setDimensionFromStyle(node, axis) {
        // The parent already computed us a width or height. We just skip it
        if (node.layout[dim[axis]] !== undefined) {
          return;
        } // We only run if there's a width or height defined


        if (!isDimDefined(node, axis)) {
          return;
        } // The dimensions can never be smaller than the padding and border


        node.layout[dim[axis]] = fmaxf(boundAxis(node, axis, node.style[dim[axis]]), getPaddingAndBorderAxis(node, axis));
      }

      function setTrailingPosition(node, child, axis) {
        child.layout[trailing[axis]] = node.layout[dim[axis]] - child.layout[dim[axis]] - child.layout[pos[axis]];
      } // If both left and right are defined, then use left. Otherwise return
      // +left or -right depending on which is defined.


      function getRelativePosition(node, axis) {
        if (node.style[leading[axis]] !== undefined) {
          return getPosition(node, leading[axis]);
        }

        return -getPosition(node, trailing[axis]);
      }

      function layoutNodeImpl(node, parentMaxWidth,
      /*css_direction_t*/
      parentDirection) {
        var
        /*css_direction_t*/
        direction = resolveDirection(node, parentDirection);
        var
        /*(c)!css_flex_direction_t*/

        /*(java)!int*/
        mainAxis = resolveAxis(getFlexDirection(node), direction);
        var
        /*(c)!css_flex_direction_t*/

        /*(java)!int*/
        crossAxis = getCrossFlexDirection(mainAxis, direction);
        var
        /*(c)!css_flex_direction_t*/

        /*(java)!int*/
        resolvedRowAxis = resolveAxis(CSS_FLEX_DIRECTION_ROW, direction); // Handle width and height style attributes

        setDimensionFromStyle(node, mainAxis);
        setDimensionFromStyle(node, crossAxis); // Set the resolved resolution in the node's layout

        node.layout.direction = direction; // The position is set by the parent, but we need to complete it with a
        // delta composed of the margin and left/top/right/bottom

        node.layout[leading[mainAxis]] += getLeadingMargin(node, mainAxis) + getRelativePosition(node, mainAxis);
        node.layout[trailing[mainAxis]] += getTrailingMargin(node, mainAxis) + getRelativePosition(node, mainAxis);
        node.layout[leading[crossAxis]] += getLeadingMargin(node, crossAxis) + getRelativePosition(node, crossAxis);
        node.layout[trailing[crossAxis]] += getTrailingMargin(node, crossAxis) + getRelativePosition(node, crossAxis); // Inline immutable values from the target node to avoid excessive method
        // invocations during the layout calculation.

        var
        /*int*/
        childCount = node.children.length;
        var
        /*float*/
        paddingAndBorderAxisResolvedRow = getPaddingAndBorderAxis(node, resolvedRowAxis);

        if (isMeasureDefined(node)) {
          var
          /*bool*/
          isResolvedRowDimDefined = !isUndefined(node.layout[dim[resolvedRowAxis]]);
          var
          /*float*/
          width = CSS_UNDEFINED;

          if (isDimDefined(node, resolvedRowAxis)) {
            width = node.style.width;
          } else if (isResolvedRowDimDefined) {
            width = node.layout[dim[resolvedRowAxis]];
          } else {
            width = parentMaxWidth - getMarginAxis(node, resolvedRowAxis);
          }

          width -= paddingAndBorderAxisResolvedRow; // We only need to give a dimension for the text if we haven't got any
          // for it computed yet. It can either be from the style attribute or because
          // the element is flexible.

          var
          /*bool*/
          isRowUndefined = !isDimDefined(node, resolvedRowAxis) && !isResolvedRowDimDefined;
          var
          /*bool*/
          isColumnUndefined = !isDimDefined(node, CSS_FLEX_DIRECTION_COLUMN) && isUndefined(node.layout[dim[CSS_FLEX_DIRECTION_COLUMN]]); // Let's not measure the text if we already know both dimensions

          if (isRowUndefined || isColumnUndefined) {
            var
            /*css_dim_t*/
            measureDim = node.style.measure(
            /*(c)!node->context,*/

            /*(java)!layoutContext.measureOutput,*/
            width);

            if (isRowUndefined) {
              node.layout.width = measureDim.width + paddingAndBorderAxisResolvedRow;
            }

            if (isColumnUndefined) {
              node.layout.height = measureDim.height + getPaddingAndBorderAxis(node, CSS_FLEX_DIRECTION_COLUMN);
            }
          }

          if (childCount === 0) {
            return;
          }
        }

        var
        /*bool*/
        isNodeFlexWrap = isFlexWrap(node);
        var
        /*css_justify_t*/
        justifyContent = getJustifyContent(node);
        var
        /*float*/
        leadingPaddingAndBorderMain = getLeadingPaddingAndBorder(node, mainAxis);
        var
        /*float*/
        leadingPaddingAndBorderCross = getLeadingPaddingAndBorder(node, crossAxis);
        var
        /*float*/
        paddingAndBorderAxisMain = getPaddingAndBorderAxis(node, mainAxis);
        var
        /*float*/
        paddingAndBorderAxisCross = getPaddingAndBorderAxis(node, crossAxis);
        var
        /*bool*/
        isMainDimDefined = !isUndefined(node.layout[dim[mainAxis]]);
        var
        /*bool*/
        isCrossDimDefined = !isUndefined(node.layout[dim[crossAxis]]);
        var
        /*bool*/
        isMainRowDirection = isRowDirection(mainAxis);
        var
        /*int*/
        i;
        var
        /*int*/
        ii;
        var
        /*css_node_t**/
        child;
        var
        /*(c)!css_flex_direction_t*/

        /*(java)!int*/
        axis;
        var
        /*css_node_t**/
        firstAbsoluteChild = null;
        var
        /*css_node_t**/
        currentAbsoluteChild = null;
        var
        /*float*/
        definedMainDim = CSS_UNDEFINED;

        if (isMainDimDefined) {
          definedMainDim = node.layout[dim[mainAxis]] - paddingAndBorderAxisMain;
        } // We want to execute the next two loops one per line with flex-wrap


        var
        /*int*/
        startLine = 0;
        var
        /*int*/
        endLine = 0; // var/*int*/ nextOffset = 0;

        var
        /*int*/
        alreadyComputedNextLayout = 0; // We aggregate the total dimensions of the container in those two variables

        var
        /*float*/
        linesCrossDim = 0;
        var
        /*float*/
        linesMainDim = 0;
        var
        /*int*/
        linesCount = 0;

        while (endLine < childCount) {
          // <Loop A> Layout non flexible children and count children by type
          // mainContentDim is accumulation of the dimensions and margin of all the
          // non flexible children. This will be used in order to either set the
          // dimensions of the node if none already exist, or to compute the
          // remaining space left for the flexible children.
          var
          /*float*/
          mainContentDim = 0; // There are three kind of children, non flexible, flexible and absolute.
          // We need to know how many there are in order to distribute the space.

          var
          /*int*/
          flexibleChildrenCount = 0;
          var
          /*float*/
          totalFlexible = 0;
          var
          /*int*/
          nonFlexibleChildrenCount = 0; // Use the line loop to position children in the main axis for as long
          // as they are using a simple stacking behaviour. Children that are
          // immediately stacked in the initial loop will not be touched again
          // in <Loop C>.

          var
          /*bool*/
          isSimpleStackMain = isMainDimDefined && justifyContent === CSS_JUSTIFY_FLEX_START || !isMainDimDefined && justifyContent !== CSS_JUSTIFY_CENTER;
          var
          /*int*/
          firstComplexMain = isSimpleStackMain ? childCount : startLine; // Use the initial line loop to position children in the cross axis for
          // as long as they are relatively positioned with alignment STRETCH or
          // FLEX_START. Children that are immediately stacked in the initial loop
          // will not be touched again in <Loop D>.

          var
          /*bool*/
          isSimpleStackCross = true;
          var
          /*int*/
          firstComplexCross = childCount;
          var
          /*css_node_t**/
          firstFlexChild = null;
          var
          /*css_node_t**/
          currentFlexChild = null;
          var
          /*float*/
          mainDim = leadingPaddingAndBorderMain;
          var
          /*float*/
          crossDim = 0;
          var
          /*float*/
          maxWidth;

          for (i = startLine; i < childCount; ++i) {
            child = node.children[i];
            child.lineIndex = linesCount;
            child.nextAbsoluteChild = null;
            child.nextFlexChild = null;
            var
            /*css_align_t*/
            alignItem = getAlignItem(node, child); // Pre-fill cross axis dimensions when the child is using stretch before
            // we call the recursive layout pass

            if (alignItem === CSS_ALIGN_STRETCH && getPositionType(child) === CSS_POSITION_RELATIVE && isCrossDimDefined && !isDimDefined(child, crossAxis)) {
              child.layout[dim[crossAxis]] = fmaxf(boundAxis(child, crossAxis, node.layout[dim[crossAxis]] - paddingAndBorderAxisCross - getMarginAxis(child, crossAxis)), // You never want to go smaller than padding
              getPaddingAndBorderAxis(child, crossAxis));
            } else if (getPositionType(child) === CSS_POSITION_ABSOLUTE) {
              // Store a private linked list of absolutely positioned children
              // so that we can efficiently traverse them later.
              if (firstAbsoluteChild === null) {
                firstAbsoluteChild = child;
              }

              if (currentAbsoluteChild !== null) {
                currentAbsoluteChild.nextAbsoluteChild = child;
              }

              currentAbsoluteChild = child; // Pre-fill dimensions when using absolute position and both offsets for the axis are defined (either both
              // left and right or top and bottom).

              for (ii = 0; ii < 2; ii++) {
                axis = ii !== 0 ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;

                if (!isUndefined(node.layout[dim[axis]]) && !isDimDefined(child, axis) && isPosDefined(child, leading[axis]) && isPosDefined(child, trailing[axis])) {
                  child.layout[dim[axis]] = fmaxf(boundAxis(child, axis, node.layout[dim[axis]] - getPaddingAndBorderAxis(node, axis) - getMarginAxis(child, axis) - getPosition(child, leading[axis]) - getPosition(child, trailing[axis])), // You never want to go smaller than padding
                  getPaddingAndBorderAxis(child, axis));
                }
              }
            }

            var
            /*float*/
            nextContentDim = 0; // It only makes sense to consider a child flexible if we have a computed
            // dimension for the node.

            if (isMainDimDefined && isFlex(child)) {
              flexibleChildrenCount++;
              totalFlexible += child.style.flex; // Store a private linked list of flexible children so that we can
              // efficiently traverse them later.

              if (firstFlexChild === null) {
                firstFlexChild = child;
              }

              if (currentFlexChild !== null) {
                currentFlexChild.nextFlexChild = child;
              }

              currentFlexChild = child; // Even if we don't know its exact size yet, we already know the padding,
              // border and margin. We'll use this partial information, which represents
              // the smallest possible size for the child, to compute the remaining
              // available space.

              nextContentDim = getPaddingAndBorderAxis(child, mainAxis) + getMarginAxis(child, mainAxis);
            } else {
              maxWidth = CSS_UNDEFINED;

              if (!isMainRowDirection) {
                if (isDimDefined(node, resolvedRowAxis)) {
                  maxWidth = node.layout[dim[resolvedRowAxis]] - paddingAndBorderAxisResolvedRow;
                } else {
                  maxWidth = parentMaxWidth - getMarginAxis(node, resolvedRowAxis) - paddingAndBorderAxisResolvedRow;
                }
              } // This is the main recursive call. We layout non flexible children.


              if (alreadyComputedNextLayout === 0) {
                layoutNode(
                /*(java)!layoutContext, */
                child, maxWidth, direction);
              } // Absolute positioned elements do not take part of the layout, so we
              // don't use them to compute mainContentDim


              if (getPositionType(child) === CSS_POSITION_RELATIVE) {
                nonFlexibleChildrenCount++; // At this point we know the final size and margin of the element.

                nextContentDim = getDimWithMargin(child, mainAxis);
              }
            } // The element we are about to add would make us go to the next line


            if (isNodeFlexWrap && isMainDimDefined && mainContentDim + nextContentDim > definedMainDim && // If there's only one element, then it's bigger than the content
            // and needs its own line
            i !== startLine) {
              nonFlexibleChildrenCount--;
              alreadyComputedNextLayout = 1;
              break;
            } // Disable simple stacking in the main axis for the current line as
            // we found a non-trivial child. The remaining children will be laid out
            // in <Loop C>.


            if (isSimpleStackMain && (getPositionType(child) !== CSS_POSITION_RELATIVE || isFlex(child))) {
              isSimpleStackMain = false;
              firstComplexMain = i;
            } // Disable simple stacking in the cross axis for the current line as
            // we found a non-trivial child. The remaining children will be laid out
            // in <Loop D>.


            if (isSimpleStackCross && (getPositionType(child) !== CSS_POSITION_RELATIVE || alignItem !== CSS_ALIGN_STRETCH && alignItem !== CSS_ALIGN_FLEX_START || isUndefined(child.layout[dim[crossAxis]]))) {
              isSimpleStackCross = false;
              firstComplexCross = i;
            }

            if (isSimpleStackMain) {
              child.layout[pos[mainAxis]] += mainDim;

              if (isMainDimDefined) {
                setTrailingPosition(node, child, mainAxis);
              }

              mainDim += getDimWithMargin(child, mainAxis);
              crossDim = fmaxf(crossDim, boundAxis(child, crossAxis, getDimWithMargin(child, crossAxis)));
            }

            if (isSimpleStackCross) {
              child.layout[pos[crossAxis]] += linesCrossDim + leadingPaddingAndBorderCross;

              if (isCrossDimDefined) {
                setTrailingPosition(node, child, crossAxis);
              }
            }

            alreadyComputedNextLayout = 0;
            mainContentDim += nextContentDim;
            endLine = i + 1;
          } // <Loop B> Layout flexible children and allocate empty space
          // In order to position the elements in the main axis, we have two
          // controls. The space between the beginning and the first element
          // and the space between each two elements.


          var
          /*float*/
          leadingMainDim = 0;
          var
          /*float*/
          betweenMainDim = 0; // The remaining available space that needs to be allocated

          var
          /*float*/
          remainingMainDim = 0;

          if (isMainDimDefined) {
            remainingMainDim = definedMainDim - mainContentDim;
          } else {
            remainingMainDim = fmaxf(mainContentDim, 0) - mainContentDim;
          } // If there are flexible children in the mix, they are going to fill the
          // remaining space


          if (flexibleChildrenCount !== 0) {
            var
            /*float*/
            flexibleMainDim = remainingMainDim / totalFlexible;
            var
            /*float*/
            baseMainDim;
            var
            /*float*/
            boundMainDim; // If the flex share of remaining space doesn't meet min/max bounds,
            // remove this child from flex calculations.

            currentFlexChild = firstFlexChild;

            while (currentFlexChild !== null) {
              baseMainDim = flexibleMainDim * currentFlexChild.style.flex + getPaddingAndBorderAxis(currentFlexChild, mainAxis);
              boundMainDim = boundAxis(currentFlexChild, mainAxis, baseMainDim);

              if (baseMainDim !== boundMainDim) {
                remainingMainDim -= boundMainDim;
                totalFlexible -= currentFlexChild.style.flex;
              }

              currentFlexChild = currentFlexChild.nextFlexChild;
            }

            flexibleMainDim = remainingMainDim / totalFlexible; // The non flexible children can overflow the container, in this case
            // we should just assume that there is no space available.

            if (flexibleMainDim < 0) {
              flexibleMainDim = 0;
            }

            currentFlexChild = firstFlexChild;

            while (currentFlexChild !== null) {
              // At this point we know the final size of the element in the main
              // dimension
              currentFlexChild.layout[dim[mainAxis]] = boundAxis(currentFlexChild, mainAxis, flexibleMainDim * currentFlexChild.style.flex + getPaddingAndBorderAxis(currentFlexChild, mainAxis));
              maxWidth = CSS_UNDEFINED;

              if (isDimDefined(node, resolvedRowAxis)) {
                maxWidth = node.layout[dim[resolvedRowAxis]] - paddingAndBorderAxisResolvedRow;
              } else if (!isMainRowDirection) {
                maxWidth = parentMaxWidth - getMarginAxis(node, resolvedRowAxis) - paddingAndBorderAxisResolvedRow;
              } // And we recursively call the layout algorithm for this child


              layoutNode(
              /*(java)!layoutContext, */
              currentFlexChild, maxWidth, direction);
              child = currentFlexChild;
              currentFlexChild = currentFlexChild.nextFlexChild;
              child.nextFlexChild = null;
            } // We use justifyContent to figure out how to allocate the remaining
            // space available

          } else if (justifyContent !== CSS_JUSTIFY_FLEX_START) {
            if (justifyContent === CSS_JUSTIFY_CENTER) {
              leadingMainDim = remainingMainDim / 2;
            } else if (justifyContent === CSS_JUSTIFY_FLEX_END) {
              leadingMainDim = remainingMainDim;
            } else if (justifyContent === CSS_JUSTIFY_SPACE_BETWEEN) {
              remainingMainDim = fmaxf(remainingMainDim, 0);

              if (flexibleChildrenCount + nonFlexibleChildrenCount - 1 !== 0) {
                betweenMainDim = remainingMainDim / (flexibleChildrenCount + nonFlexibleChildrenCount - 1);
              } else {
                betweenMainDim = 0;
              }
            } else if (justifyContent === CSS_JUSTIFY_SPACE_AROUND) {
              // Space on the edges is half of the space between elements
              betweenMainDim = remainingMainDim / (flexibleChildrenCount + nonFlexibleChildrenCount);
              leadingMainDim = betweenMainDim / 2;
            }
          } // <Loop C> Position elements in the main axis and compute dimensions
          // At this point, all the children have their dimensions set. We need to
          // find their position. In order to do that, we accumulate data in
          // variables that are also useful to compute the total dimensions of the
          // container!


          mainDim += leadingMainDim;

          for (i = firstComplexMain; i < endLine; ++i) {
            child = node.children[i];

            if (getPositionType(child) === CSS_POSITION_ABSOLUTE && isPosDefined(child, leading[mainAxis])) {
              // In case the child is position absolute and has left/top being
              // defined, we override the position to whatever the user said
              // (and margin/border).
              child.layout[pos[mainAxis]] = getPosition(child, leading[mainAxis]) + getLeadingBorder(node, mainAxis) + getLeadingMargin(child, mainAxis);
            } else {
              // If the child is position absolute (without top/left) or relative,
              // we put it at the current accumulated offset.
              child.layout[pos[mainAxis]] += mainDim; // Define the trailing position accordingly.

              if (isMainDimDefined) {
                setTrailingPosition(node, child, mainAxis);
              } // Now that we placed the element, we need to update the variables
              // We only need to do that for relative elements. Absolute elements
              // do not take part in that phase.


              if (getPositionType(child) === CSS_POSITION_RELATIVE) {
                // The main dimension is the sum of all the elements dimension plus
                // the spacing.
                mainDim += betweenMainDim + getDimWithMargin(child, mainAxis); // The cross dimension is the max of the elements dimension since there
                // can only be one element in that cross dimension.

                crossDim = fmaxf(crossDim, boundAxis(child, crossAxis, getDimWithMargin(child, crossAxis)));
              }
            }
          }

          var
          /*float*/
          containerCrossAxis = node.layout[dim[crossAxis]];

          if (!isCrossDimDefined) {
            containerCrossAxis = fmaxf( // For the cross dim, we add both sides at the end because the value
            // is aggregate via a max function. Intermediate negative values
            // can mess this computation otherwise
            boundAxis(node, crossAxis, crossDim + paddingAndBorderAxisCross), paddingAndBorderAxisCross);
          } // <Loop D> Position elements in the cross axis


          for (i = firstComplexCross; i < endLine; ++i) {
            child = node.children[i];

            if (getPositionType(child) === CSS_POSITION_ABSOLUTE && isPosDefined(child, leading[crossAxis])) {
              // In case the child is absolutely positionned and has a
              // top/left/bottom/right being set, we override all the previously
              // computed positions to set it correctly.
              child.layout[pos[crossAxis]] = getPosition(child, leading[crossAxis]) + getLeadingBorder(node, crossAxis) + getLeadingMargin(child, crossAxis);
            } else {
              var
              /*float*/
              leadingCrossDim = leadingPaddingAndBorderCross; // For a relative children, we're either using alignItems (parent) or
              // alignSelf (child) in order to determine the position in the cross axis

              if (getPositionType(child) === CSS_POSITION_RELATIVE) {
                /*eslint-disable */
                // This variable is intentionally re-defined as the code is transpiled to a block scope language
                var
                /*css_align_t*/
                alignItem = getAlignItem(node, child);
                /*eslint-enable */

                if (alignItem === CSS_ALIGN_STRETCH) {
                  // You can only stretch if the dimension has not already been set
                  // previously.
                  if (isUndefined(child.layout[dim[crossAxis]])) {
                    child.layout[dim[crossAxis]] = fmaxf(boundAxis(child, crossAxis, containerCrossAxis - paddingAndBorderAxisCross - getMarginAxis(child, crossAxis)), // You never want to go smaller than padding
                    getPaddingAndBorderAxis(child, crossAxis));
                  }
                } else if (alignItem !== CSS_ALIGN_FLEX_START) {
                  // The remaining space between the parent dimensions+padding and child
                  // dimensions+margin.
                  var
                  /*float*/
                  remainingCrossDim = containerCrossAxis - paddingAndBorderAxisCross - getDimWithMargin(child, crossAxis);

                  if (alignItem === CSS_ALIGN_CENTER) {
                    leadingCrossDim += remainingCrossDim / 2;
                  } else {
                    // CSS_ALIGN_FLEX_END
                    leadingCrossDim += remainingCrossDim;
                  }
                }
              } // And we apply the position


              child.layout[pos[crossAxis]] += linesCrossDim + leadingCrossDim; // Define the trailing position accordingly.

              if (isCrossDimDefined) {
                setTrailingPosition(node, child, crossAxis);
              }
            }
          }

          linesCrossDim += crossDim;
          linesMainDim = fmaxf(linesMainDim, mainDim);
          linesCount += 1;
          startLine = endLine;
        } // <Loop E>
        //
        // Note(prenaux): More than one line, we need to layout the crossAxis
        // according to alignContent.
        //
        // Note that we could probably remove <Loop D> and handle the one line case
        // here too, but for the moment this is safer since it won't interfere with
        // previously working code.
        //
        // See specs:
        // http://www.w3.org/TR/2012/CR-css3-flexbox-20120918/#layout-algorithm
        // section 9.4
        //


        if (linesCount > 1 && isCrossDimDefined) {
          var
          /*float*/
          nodeCrossAxisInnerSize = node.layout[dim[crossAxis]] - paddingAndBorderAxisCross;
          var
          /*float*/
          remainingAlignContentDim = nodeCrossAxisInnerSize - linesCrossDim;
          var
          /*float*/
          crossDimLead = 0;
          var
          /*float*/
          currentLead = leadingPaddingAndBorderCross;
          var
          /*css_align_t*/
          alignContent = getAlignContent(node);

          if (alignContent === CSS_ALIGN_FLEX_END) {
            currentLead += remainingAlignContentDim;
          } else if (alignContent === CSS_ALIGN_CENTER) {
            currentLead += remainingAlignContentDim / 2;
          } else if (alignContent === CSS_ALIGN_STRETCH) {
            if (nodeCrossAxisInnerSize > linesCrossDim) {
              crossDimLead = remainingAlignContentDim / linesCount;
            }
          }

          var
          /*int*/
          endIndex = 0;

          for (i = 0; i < linesCount; ++i) {
            var
            /*int*/
            startIndex = endIndex; // compute the line's height and find the endIndex

            var
            /*float*/
            lineHeight = 0;

            for (ii = startIndex; ii < childCount; ++ii) {
              child = node.children[ii];

              if (getPositionType(child) !== CSS_POSITION_RELATIVE) {
                continue;
              }

              if (child.lineIndex !== i) {
                break;
              }

              if (!isUndefined(child.layout[dim[crossAxis]])) {
                lineHeight = fmaxf(lineHeight, child.layout[dim[crossAxis]] + getMarginAxis(child, crossAxis));
              }
            }

            endIndex = ii;
            lineHeight += crossDimLead;

            for (ii = startIndex; ii < endIndex; ++ii) {
              child = node.children[ii];

              if (getPositionType(child) !== CSS_POSITION_RELATIVE) {
                continue;
              }

              var
              /*css_align_t*/
              alignContentAlignItem = getAlignItem(node, child);

              if (alignContentAlignItem === CSS_ALIGN_FLEX_START) {
                child.layout[pos[crossAxis]] = currentLead + getLeadingMargin(child, crossAxis);
              } else if (alignContentAlignItem === CSS_ALIGN_FLEX_END) {
                child.layout[pos[crossAxis]] = currentLead + lineHeight - getTrailingMargin(child, crossAxis) - child.layout[dim[crossAxis]];
              } else if (alignContentAlignItem === CSS_ALIGN_CENTER) {
                var
                /*float*/
                childHeight = child.layout[dim[crossAxis]];
                child.layout[pos[crossAxis]] = currentLead + (lineHeight - childHeight) / 2;
              } else if (alignContentAlignItem === CSS_ALIGN_STRETCH) {
                child.layout[pos[crossAxis]] = currentLead + getLeadingMargin(child, crossAxis); // TODO(prenaux): Correctly set the height of items with undefined
                //                (auto) crossAxis dimension.
              }
            }

            currentLead += lineHeight;
          }
        }

        var
        /*bool*/
        needsMainTrailingPos = false;
        var
        /*bool*/
        needsCrossTrailingPos = false; // If the user didn't specify a width or height, and it has not been set
        // by the container, then we set it via the children.

        if (!isMainDimDefined) {
          node.layout[dim[mainAxis]] = fmaxf( // We're missing the last padding at this point to get the final
          // dimension
          boundAxis(node, mainAxis, linesMainDim + getTrailingPaddingAndBorder(node, mainAxis)), // We can never assign a width smaller than the padding and borders
          paddingAndBorderAxisMain);

          if (mainAxis === CSS_FLEX_DIRECTION_ROW_REVERSE || mainAxis === CSS_FLEX_DIRECTION_COLUMN_REVERSE) {
            needsMainTrailingPos = true;
          }
        }

        if (!isCrossDimDefined) {
          node.layout[dim[crossAxis]] = fmaxf( // For the cross dim, we add both sides at the end because the value
          // is aggregate via a max function. Intermediate negative values
          // can mess this computation otherwise
          boundAxis(node, crossAxis, linesCrossDim + paddingAndBorderAxisCross), paddingAndBorderAxisCross);

          if (crossAxis === CSS_FLEX_DIRECTION_ROW_REVERSE || crossAxis === CSS_FLEX_DIRECTION_COLUMN_REVERSE) {
            needsCrossTrailingPos = true;
          }
        } // <Loop F> Set trailing position if necessary


        if (needsMainTrailingPos || needsCrossTrailingPos) {
          for (i = 0; i < childCount; ++i) {
            child = node.children[i];

            if (needsMainTrailingPos) {
              setTrailingPosition(node, child, mainAxis);
            }

            if (needsCrossTrailingPos) {
              setTrailingPosition(node, child, crossAxis);
            }
          }
        } // <Loop G> Calculate dimensions for absolutely positioned elements


        currentAbsoluteChild = firstAbsoluteChild;

        while (currentAbsoluteChild !== null) {
          // Pre-fill dimensions when using absolute position and both offsets for
          // the axis are defined (either both left and right or top and bottom).
          for (ii = 0; ii < 2; ii++) {
            axis = ii !== 0 ? CSS_FLEX_DIRECTION_ROW : CSS_FLEX_DIRECTION_COLUMN;

            if (!isUndefined(node.layout[dim[axis]]) && !isDimDefined(currentAbsoluteChild, axis) && isPosDefined(currentAbsoluteChild, leading[axis]) && isPosDefined(currentAbsoluteChild, trailing[axis])) {
              currentAbsoluteChild.layout[dim[axis]] = fmaxf(boundAxis(currentAbsoluteChild, axis, node.layout[dim[axis]] - getBorderAxis(node, axis) - getMarginAxis(currentAbsoluteChild, axis) - getPosition(currentAbsoluteChild, leading[axis]) - getPosition(currentAbsoluteChild, trailing[axis])), // You never want to go smaller than padding
              getPaddingAndBorderAxis(currentAbsoluteChild, axis));
            }

            if (isPosDefined(currentAbsoluteChild, trailing[axis]) && !isPosDefined(currentAbsoluteChild, leading[axis])) {
              currentAbsoluteChild.layout[leading[axis]] = node.layout[dim[axis]] - currentAbsoluteChild.layout[dim[axis]] - getPosition(currentAbsoluteChild, trailing[axis]);
            }
          }

          child = currentAbsoluteChild;
          currentAbsoluteChild = currentAbsoluteChild.nextAbsoluteChild;
          child.nextAbsoluteChild = null;
        }
      }

      function layoutNode(node, parentMaxWidth, parentDirection) {
        node.shouldUpdate = true;
        var direction = node.style.direction || CSS_DIRECTION_LTR;
        var skipLayout = !node.isDirty && node.lastLayout && node.lastLayout.requestedHeight === node.layout.height && node.lastLayout.requestedWidth === node.layout.width && node.lastLayout.parentMaxWidth === parentMaxWidth && node.lastLayout.direction === direction;

        if (skipLayout) {
          node.layout.width = node.lastLayout.width;
          node.layout.height = node.lastLayout.height;
          node.layout.top = node.lastLayout.top;
          node.layout.left = node.lastLayout.left;
        } else {
          if (!node.lastLayout) {
            node.lastLayout = {};
          }

          node.lastLayout.requestedWidth = node.layout.width;
          node.lastLayout.requestedHeight = node.layout.height;
          node.lastLayout.parentMaxWidth = parentMaxWidth;
          node.lastLayout.direction = direction; // Reset child layouts

          node.children.forEach(function (child) {
            child.layout.width = undefined;
            child.layout.height = undefined;
            child.layout.top = 0;
            child.layout.left = 0;
          });
          layoutNodeImpl(node, parentMaxWidth, parentDirection);
          node.lastLayout.width = node.layout.width;
          node.lastLayout.height = node.layout.height;
          node.lastLayout.top = node.layout.top;
          node.lastLayout.left = node.layout.left;
        }
      }

      return {
        layoutNodeImpl: layoutNodeImpl,
        computeLayout: layoutNode,
        fillNodes: fillNodes
      };
    }(); // This module export is only used for the purposes of unit testing this file. When
    // the library is packaged this file is included within css-layout.js which forms
    // the public API.


    {
      module.exports = computeLayout;
    }

    return function (node) {
      /*eslint-disable */
      // disabling ESLint because this code relies on the above include
      computeLayout.fillNodes(node);
      computeLayout.computeLayout(node);
      /*eslint-enable */
    };
  });
});

//   "UNINIT": "UNINIT",
//   "INITED": "INITED",
//   "RENDERED": "RENDERED",
//   "CLEAR": "CLEAR",
// }

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
  var NODE = this['$' + node.name];
  var element = new NODE(args);
  element.root = this;
  (node.children || []).forEach(function (childNode) {
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
      var xmlTree = jsonObj.children[0];
      this.__cost_time.xmlTree = new Date() - start; // XML树生成渲染树

      var renderTree = createRenderTree.call(this, xmlTree, style);
      this.__cost_time.renderTree = new Date() - start; // 计算布局树

      cssLayout(renderTree);
      this.__cost_time.layoutTree = new Date() - start; // 要处理文字换行，需要两棵renderTree

      var renderTree2 = createRenderTree.call(this, xmlTree, style);
      reCalculate([renderTree2], [renderTree]);
      cssLayout(renderTree2);
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
      this.renderContext = ctx;

      if (this.renderContext) {
        this.renderContext.clearRect(0, 0, this.renderport.width, this.renderport.height);
      } // TODO: 待优化


      var renderChildren = function renderChildren(children) {
        return children.reduce(function (promise, child) {
          return promise.then(function () {
            return Promise.resolve().then(function () {
              return child.render(ctx);
            }).then(function () {
              return renderChildren(child.children);
            });
          });
        }, Promise.resolve());
      };

      return renderChildren(this.children);
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
        var textWidth = getTextWidth({
          text: lineText + child.text[i],
          style: child.style
        });

        if (textWidth > contentWidth) {
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

var Renderer = /*#__PURE__*/function () {
  function Renderer(_ref) {
    var xml = _ref.xml,
        style = _ref.style;

    _classCallCheck(this, Renderer);

    this.xml = xml;
    this.style = style;
    this.layout = new Layout({
      style: {
        width: 0,
        height: 0
      },
      name: 'layout'
    });
    this.renderred = null;
  }

  _createClass(Renderer, [{
    key: "render",
    value: function render(canvasId, canvasComponentThis) {
      var _this = this;

      var processCanvas =  canvasInMP;
      return this.renderred = processCanvas(canvasId).then(function (_ref2) {
        var ctx = _ref2.ctx,
            canvasEle = _ref2.canvasEle,
            clientWidth = _ref2.clientWidth,
            clientHeight = _ref2.clientHeight;
        global$1.setCanvas(canvasEle);
        global$1.setCanvasId(canvasId);
        global$1.setCanvasComponentThis(canvasComponentThis);

        var style = _scaleStyles({
          style: _this.style,
          clientWidth: clientWidth
        });

        var r = _this.layout.init(_this.xml, style).render(ctx);

        {
          return r.then(function () {
            return drawGrid(ctx, clientWidth, clientHeight);
          });
        }
      });
    }
  }, {
    key: "toDataURL",
    value: function toDataURL() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'image/png';
      var encoderOptions = arguments.length > 1 ? arguments[1] : undefined;
      if (!this.renderred) throw new Error('render 未调用');
      return this.renderred.then(function () {
        // toDataURL 在小程序基础库 2.11.0 开始支持
        var url = global$1.getCanvas().toDataURL(type, encoderOptions);
        return url;
      });
    }
  }, {
    key: "saveImageToPhotosAlbum",
    value: function saveImageToPhotosAlbum(base64img) {
      var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'test.png';

      var filePath = "".concat(wx.env.USER_DATA_PATH, "/").concat(name);
      var fileManager = wx.getFileSystemManager();
      fileManager.writeFileSync(filePath, base64img.slice(22), 'base64');
      return new Promise(function (resolve, reject) {
        wx.saveImageToPhotosAlbum({
          filePath: filePath,
          success: resolve,
          fail: reject
        });
      });
    }
  }], [{
    key: "usePlugin",
    value: function usePlugin(name, ELEMENT) {
      Layout.prototype['$' + name] = ELEMENT;
    }
  }]);

  return Renderer;
}();

function canvasInMP(canvasId) {
  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),
      screenWidth = _wx$getSystemInfoSync.screenWidth,
      screenHeight = _wx$getSystemInfoSync.screenHeight,
      pixelRatio = _wx$getSystemInfoSync.pixelRatio;

  var dpr = pixelRatio;
  var canvasRef = wx.createSelectorQuery().select(canvasId);
  return new Promise(function (resolve) {
    canvasRef.node(function (res) {
      var canvasEle = res.node;
      var ctx = canvasEle.getContext('2d');
      canvasEle.width = canvasEle._width * dpr;
      canvasEle.height = canvasEle._height * dpr;
      ctx.scale(dpr, dpr);
      resolve({
        ctx: ctx,
        canvasEle: canvasEle,
        clientWidth: screenWidth,
        clientHeight: screenHeight
      });
    }).exec();
  });
}
var LAYOUT_BASE_WIDTH = 375;

function _scaleStyles(_ref3) {
  var clientWidth = _ref3.clientWidth,
      style = _ref3.style;
  var x = clientWidth / LAYOUT_BASE_WIDTH;
  return Object.keys(style).reduce(function (res, key) {
    var s = style[key];
    res[key] = Object.keys(s).reduce(function (acc, k) {
      var _String$replace$split = String(s[k]).replace(/(\d+)(\D+)/g, '$1-$2').split('-'),
          _String$replace$split2 = _slicedToArray(_String$replace$split, 2),
          n = _String$replace$split2[0],
          t = _String$replace$split2[1];

      if (isNaN(parseFloat(n))) {
        acc[k] = s[k];
        return acc;
      }

      acc[k] = n * x;
      if (t) acc[k] += t;
      return acc;
    }, {});
    return res;
  }, {});
}

function drawGrid(ctx, w, h) {
  ctx.save();
  var gap = 10;

  for (var i = 1; i < w / gap; ++i) {
    ctx.moveTo(i * gap, 0);
    ctx.lineTo(i * gap, h);
  }

  for (var _i = 1; _i < h / gap; ++_i) {
    ctx.moveTo(0, _i * gap);
    ctx.lineTo(w, _i * gap);
  }

  for (var _i2 = 0; _i2 < w; _i2 += 2) {
    ctx.fillText(_i2 * gap * 2, _i2 * gap * 2 - 6, 10);
  }

  for (var _i3 = 0; _i3 < h; _i3 += 2) {
    ctx.fillText(_i3 * gap * 2, 0, _i3 * gap * 2 + 4);
  }

  ctx.strokeStyle = 'rgba(0, 0, 0,.15)';
  ctx.stroke();
  ctx.restore();
}

var Image = /*#__PURE__*/function (_Element) {
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
    var img = createImage();

    img.src = _this.src; // 提前请求

    return _this;
  }

  _createClass(Image, [{
    key: "render",
    value: function render(ctx) {
      var _this2 = this;

      this.ctx = ctx;
      var img = createImage();

      img.src = this.src; // 这里不会重复请求

      return new Promise(function (resolve, reject) {
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

var defaultTextStyle = {
  fontSize: '12px',
  fontWeight: 'normal',
  fontFamily: "-apple-system, BlinkMacSystemFont, \"PingFang SC\", \"PingFangSC\",    \"Microsoft YaHei\", \"Microsoft JhengHei\", \"Source Han Sans SC\", \"WenQuanYi Micro Hei\", SimSun,sans-serif",
  text: '',
  textBaseline: 'top',
  color: '#000'
};

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
    style.lineHeight = getLineHeight({
      style: style
    });
    _this = _super.call(this, {
      style: style,
      idName: idName,
      className: className
    });
    style = _this.style;
    var text = _text_;

    if (style.width === undefined) {
      style.width = getTextWidth({
        text: text,
        style: style
      });
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
      ctx.font = "".concat(this.style.fontWeight, " ").concat(this.style.fontSize, " ").concat(this.style.fontFamily);
      ctx.fillStyle = this.style.color;
      ctx.textBaseline = this.style.textBaseline;
      var startX = this.layoutBox.x + this.style.borderLeftWidth + this.style.paddingLeft;
      var startY = this.layoutBox.y + this.style.borderTopWidth + this.style.paddingTop;

      this.__lines.forEach(function (line, index) {
        ctx.fillText(line.text, startX, startY + index * parseFloat(_this2.style.lineHeight));
      });

      ctx.restore();
    }
  }]);

  return Text;
}(Element);

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

Renderer.usePlugin('Image', Image);
Renderer.usePlugin('Text', Text);
Renderer.usePlugin('View', View);

export default Renderer;
export { Element };
