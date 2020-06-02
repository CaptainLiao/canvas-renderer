/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) { if (b.hasOwnProperty(p)) { d[p] = b[p]; } } };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) { throw t[1]; } return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) { throw new TypeError("Generator is already executing."); }
        while (_) { try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) { return t; }
            if (y = 0, t) { op = [op[0] & 2, t.value]; }
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) { _.ops.pop(); }
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; } }
        if (op[0] & 5) { throw op[1]; } return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function getTextPosition(node) {
    var x = node.x, y = node.y, width = node.width, height = node.height, textOffsetY = node.textOffsetY, textPosition = node.textPosition;
    var yOffset = y;
    var textBaseline = '';
    switch (textPosition) {
        case "BottomCenter" /* BottomCenter */:
            yOffset = y + height + 2;
            textBaseline = 'top';
            break;
        case "TopCenter" /* TopCenter */:
            yOffset = y;
            textBaseline = 'bottom';
            break;
        default:
            yOffset = y + height / 2 + 2;
            textBaseline = 'middle';
            break;
    }
    return {
        textX: x + (width - node.textWidth) / 2,
        textY: yOffset + textOffsetY,
        textBaseline: textBaseline
    };
}
function drawImage(ctx, node, img) {
    var x = node.x, y = node.y, width = node.width, height = node.height, pixelRatio = node.pixelRatio;
    ctx.save();
    ctx.scale(1 / pixelRatio, 1 / pixelRatio);
    ctx.drawImage(img, x, y, width, height);
    ctx.restore();
}

var PAD = 4;
var Painter = /** @class */ (function () {
    function Painter() {
        this.drawText = function (ctx, node) {
            var text = node.text, font = node.font, width = node.width, fontColor = node.fontColor, textBaseline = node.textBaseline;
            if (!text)
                { return; }
            var _a = getTextPosition(node), textX = _a.textX, textY = _a.textY;
            node.textX = textX;
            node.textY = textY;
            ctx.font = font;
            ctx.textBaseline = textBaseline;
            ctx.fillStyle = fontColor;
            ctx.fillText(text, textX, textY, width);
        };
        this.drawRect = function drawRect(ctx, node) {
            var x = node.x, y = node.y, width = node.width, height = node.height, _a = node.borderRadius, borderRadius = _a === void 0 ? 0 : _a, borderStyle = node.borderStyle, _b = node.borderWidth, borderWidth = _b === void 0 ? 1 : _b, _c = node.borderColor, borderColor = _c === void 0 ? '#000000' : _c, _d = node.backgroundColor, backgroundColor = _d === void 0 ? '#ffffff' : _d;
            var r = borderRadius;
            var w = width;
            var h = height;
            if (w < 2 * r)
                { r = w / 2; }
            if (h < 2 * r)
                { r = h / 2; }
            ctx.save();
            if (borderStyle === 'dashed') {
                ctx.setLineDash([5, 5]);
            }
            // 圆角矩形
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.arcTo(x + w, y, x + w, y + h, r);
            ctx.arcTo(x + w, y + h, x, y + h, r);
            ctx.arcTo(x, y + h, x, y, r);
            ctx.arcTo(x, y, x + w, y, r);
            ctx.closePath();
            if (borderWidth) {
                ctx.lineWidth = borderWidth;
                ctx.strokeStyle = borderColor;
                ctx.stroke();
            }
            // 填充背景色
            ctx.fillStyle = backgroundColor;
            ctx.fill();
            ctx.restore();
        };
        this.drawNodeActive = function (ctx, node) {
            if (!node.showSelected || !node.__isActive)
                { return; }
            ctx.save();
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = '#5cd';
            ctx.fillRect(node.x - PAD, node.y - PAD, node.width + 2 * PAD, node.height + 2 * PAD);
            ctx.restore();
        };
    }
    return Painter;
}());

var IMAGE_LIST = [];
var WxPaint = /** @class */ (function (_super) {
    __extends(WxPaint, _super);
    function WxPaint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawImage = function (ctx, node) {
            return new Promise(function (resolve, reject) {
                var img = IMAGE_LIST.find(function (item) { return item.src === node.image; });
                if (img) {
                    drawImage(ctx, node, img);
                    return resolve();
                }
                var bgImg = ctx.$rowCanvasElement.createImage();
                bgImg.src = node.image;
                bgImg.onload = function () {
                    IMAGE_LIST.push(bgImg);
                    drawImage(ctx, node, bgImg);
                    return resolve();
                };
                bgImg.onerror = function (e) { return reject(e); };
            });
        };
        return _this;
    }
    return WxPaint;
}(Painter));
var wxPaint = new WxPaint();

var CACHE_IMAGE_LIST = [];
var WebPaint = /** @class */ (function (_super) {
    __extends(WebPaint, _super);
    function WebPaint() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.drawImage = function (ctx, node) {
            return new Promise(function (resolve, reject) {
                var img = CACHE_IMAGE_LIST.find(function (item) { return item.src === node.image; });
                if (img) {
                    drawImage(ctx, node, img);
                    return resolve();
                }
                var bgImg = new Image();
                bgImg.src = node.image;
                // bgImg.setAttribute("crossOrigin",'Anonymous')
                bgImg.onload = function () {
                    CACHE_IMAGE_LIST.push(bgImg);
                    drawImage(ctx, node, bgImg);
                    resolve();
                };
                bgImg.onerror = reject;
            });
        };
        return _this;
    }
    return WebPaint;
}(Painter));
var webPaint = new WebPaint();

var isWxMiniprograme = false;
try {
    isWxMiniprograme = !!(wx && wx.scanCode);
}
catch (e) {
    // ignore
}
var paint = isWxMiniprograme ? wxPaint : webPaint;
function measureTextWidth(ctx, node) {
    ctx.font = node.font;
    return ctx.measureText(node.text).width;
}
function getPoint(point, canvasRect) {
    return {
        x: point.x - canvasRect.left,
        y: point.y - canvasRect.top
    };
}

var nodeList = [];
var __offsetWidth = 0;
var __offsetHeight = 0;
var dragging = null;
var __canvasEle;
var __canvasRect;
var Scene = /** @class */ (function () {
    function Scene(stage) {
        var _this = this;
        this._ctx = stage.canvas.getContext('2d');
        this._ctx.$rowCanvasElement = stage.canvas;
        __canvasEle = this._ctx.canvas;
        __canvasRect = __canvasEle.getBoundingClientRect();
        __canvasEle.addEventListener('mousemove', function (e) {
            e.preventDefault(); // prevent selections
            var point = getPoint({ x: e.clientX, y: e.clientY }, __canvasRect);
            var hasMove = nodeList.some(function (node) { return isPointInPath(node, e); });
            if (!hasMove)
                { return; }
            var __ctx = _this._ctx;
            __ctx.clearRect(0, 0, __ctx.canvas.width, __ctx.canvas.height);
            if (dragging && dragging.dragable) {
                dragging.x = point.x - __offsetWidth;
                dragging.y = point.y - __offsetHeight;
            }
            // 按节点 add 的顺序进行绘制
            nodeList.reduce(function (p, node) {
                var isInPath = isPointInPath(node, e);
                node.__isActive = isInPath;
                return p.then(function () { return node.paint(__ctx); });
            }, Promise.resolve());
        });
        __canvasEle.addEventListener('mousedown', function (e) {
            e.preventDefault(); // prevent selections
            var point = getPoint({ x: e.clientX, y: e.clientY }, __canvasRect);
            nodeList.forEach(function (node) {
                var isInPath = isPointInPath(node, e);
                if (isInPath) {
                    __offsetWidth = point.x - node.x;
                    __offsetHeight = point.y - node.y;
                    dragging = node;
                }
            });
        });
        __canvasEle.addEventListener('mouseup', function (e) {
            e.preventDefault();
            dragging = null;
        });
        __canvasEle.addEventListener('mouseout', function (e) {
            e.preventDefault();
            dragging = null;
        });
    }
    Scene.install = function (ctor) {
        ctor.Scene = Scene;
    };
    Scene.prototype.add = function (node) {
        mergeNode(this._ctx, node);
        nodeList.push(node);
        node._setContext(this._ctx);
        this.__orderPaint();
    };
    Scene.prototype.__orderPaint = function () {
        var _this = this;
        // 保证后面增加的节点不被覆盖
        //setTimeout(() => nodeList.reduce((p, node) => p.then(() => node.paint(this._ctx)), Promise.resolve()), 0)
        setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
            var _i, nodeList_1, node;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _i = 0, nodeList_1 = nodeList;
                        _a.label = 1;
                    case 1:
                        if (!(_i < nodeList_1.length)) { return [3 /*break*/, 4]; }
                        node = nodeList_1[_i];
                        return [4 /*yield*/, node.paint(this._ctx)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        }); }, 0);
    };
    return Scene;
}());
function mergeNode(ctx, node) {
    var textWidth = measureTextWidth(ctx, node);
    node.width = Math.max(node.width, textWidth);
    node.height = node.height || node.lineHeight;
    node.textWidth = textWidth;
    Object.assign(node, getTextPosition(node));
}
function isPointInPath(node, e) {
    var point = getPoint({ x: e.clientX, y: e.clientY }, __canvasRect);
    return (point.x >= node.x && point.x <= node.x + node.width) && (point.y >= node.y && point.y <= node.y + node.height);
}

var Stage = /** @class */ (function () {
    function Stage(canvasEle) {
        this.canvas = canvasEle;
    }
    Stage.install = function (ctor) {
        ctor.Stage = Stage;
    };
    return Stage;
}());

var __offsetWidth$1;
var __offsetHeight$1;
var TopoTextNode = /** @class */ (function () {
    function TopoTextNode(text) {
        this.x = 0;
        this.y = 0;
        this.text = '';
        this.textX = '';
        this.textY = '';
        this.textWidth = '';
        this.textHeight = '';
        this.textPosition = "MiddleCenter" /* MiddleCenter */;
        this.textOffsetY = 0;
        this.lineHeight = 22;
        this.visible = true;
        this.dragable = true;
        this.font = '12px Microsoft YaHei';
        this.fontColor = '#000';
        this.pixelRatio = 1;
        this.showSelected = true;
        this.__isActive = false;
        this.callback = {
            mousemove: function () { },
            mouseout: function () { }
        };
        this._mousemove = function (e, node) {
        };
        this.text = text;
    }
    TopoTextNode.install = function (ctor) {
        ctor.TextNode = TopoTextNode;
    };
    TopoTextNode.prototype.setLocation = function (x, y) {
        this.x = x;
        this.y = y;
    };
    TopoTextNode.prototype._mouseDown = function (e) {
        __offsetWidth$1 = e.x - this.x;
        __offsetHeight$1 = e.y - this.y;
    };
    TopoTextNode.prototype.mousemove = function (fn) {
        this.callback.mousemove = fn;
    };
    TopoTextNode.prototype.mouseout = function (fn) {
        this.callback.mouseout = fn;
    };
    TopoTextNode.prototype._setContext = function (ctx) {
    };
    TopoTextNode.prototype.paint = function (ctx) {
        paint.drawText(ctx, this);
    };
    return TopoTextNode;
}());

var TopoNode = /** @class */ (function (_super) {
    __extends(TopoNode, _super);
    function TopoNode(text) {
        var _this = _super.call(this, text) || this;
        _this.width = 0;
        _this.height = 0;
        _this.lineHeight = 22;
        _this.text = text;
        return _this;
    }
    TopoNode.install = function (ctor) {
        ctor.Node = TopoNode;
    };
    TopoNode.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
    };
    TopoNode.prototype.setImage = function (image) {
        this.image = image;
    };
    TopoNode.prototype.paint = function (ctx) {
        paint.drawNodeActive(ctx, this);
        if (this.image) {
            paint.drawText(ctx, this);
            return paint.drawImage(ctx, this);
        }
        paint.drawRect(ctx, this);
        paint.drawText(ctx, this);
    };
    return TopoNode;
}(TopoTextNode));

var MyTopo = /** @class */ (function () {
    function MyTopo() {
    }
    return MyTopo;
}());
Stage.install(MyTopo);
Scene.install(MyTopo);
TopoNode.install(MyTopo);

export { MyTopo };
