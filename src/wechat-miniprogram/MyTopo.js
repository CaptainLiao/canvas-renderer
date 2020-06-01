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
            yOffset = y + height / 2;
            textBaseline = 'middle';
            break;
    }
    return {
        textX: x + (width - node.textWidth) / 2,
        textY: yOffset + textOffsetY,
        textBaseline: textBaseline
    };
}

var IMAGE_LIST = [];
var PAD = 4;
var wxPaint = {
    // canvas 无法准确的测量文本高度，所以需要指定行高 line-height
    // 对于单行文本来说，行高就是最小高度
    drawText: function (ctx, node) {
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
    },
    // 绘制矩形块，对应 css block 块
    drawRect: drawRect,
    drawImage: function (ctx, node) {
        var x = node.x, y = node.y, width = node.width, height = node.height;
        return new Promise(function (resolve, reject) {
            var img = IMAGE_LIST.find(function (item) { return item.src === node.image; });
            if (img) {
                ctx.drawImage(img, x, y, width, height);
                return resolve();
            }
            var bgImg = new Image();
            bgImg.src = node.image;
            bgImg.onload = function () {
                IMAGE_LIST.push(bgImg);
                ctx.drawImage(bgImg, x, y, width, height);
                resolve();
            };
            bgImg.onerror = reject;
        });
    },
    drawNodeActive: function (ctx, node) {
        if (!node.showSelected || !node.__isActive)
            { return; }
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#5cd';
        ctx.fillRect(node.x - PAD, node.y - PAD, node.width + 2 * PAD, node.height + 2 * PAD);
        ctx.restore();
    }
};
function drawRect(ctx, node) {
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
}

var CACHE_IMAGE_LIST = [];
var PAD$1 = 4;
var webPaint = {
    drawText: function (ctx, node) {
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
    },
    // 绘制矩形块，对应 css block 块
    drawRect: drawRect$1,
    drawImage: function (ctx, node) {
        var x = node.x, y = node.y, width = node.width, height = node.height;
        return new Promise(function (resolve, reject) {
            var img = CACHE_IMAGE_LIST.find(function (item) { return item.src === node.image; });
            if (img) {
                ctx.drawImage(img, x, y, width, height);
                return resolve();
            }
            var bgImg = new Image();
            bgImg.src = node.image;
            // bgImg.setAttribute("crossOrigin",'Anonymous')
            bgImg.onload = function () {
                CACHE_IMAGE_LIST.push(bgImg);
                ctx.drawImage(bgImg, x, y, width, height);
                resolve();
            };
            bgImg.onerror = reject;
        });
    },
    drawNodeActive: function (ctx, node) {
        if (!node.showSelected || !node.__isActive)
            { return; }
        ctx.save();
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = '#5cd';
        ctx.fillRect(node.x - PAD$1, node.y - PAD$1, node.width + 2 * PAD$1, node.height + 2 * PAD$1);
        ctx.restore();
    }
};
function drawRect$1(ctx, node) {
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
}

var isWxMiniprograme = false;
try {
    isWxMiniprograme = wx && wx.miniProgram;
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
        setTimeout(function () { return nodeList.reduce(function (p, node) { return p.then(function () { return node.paint(_this._ctx); }); }, Promise.resolve()); }, 0);
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

var __ctx;
var __offsetWidth$1;
var __offsetHeight$1;
var TopoTextNode = /** @class */ (function () {
    function TopoTextNode(text) {
        var _this = this;
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
        this.showSelected = true;
        this.__isActive = false;
        this.callback = {
            mousemove: function () { },
            mouseout: function () { }
        };
        this._mousemove = function (e, node) {
            var isInPath = isPointInPath$1(node, e);
            if (isInPath) {
                node.__isActive = isInPath;
                __ctx.clearRect(0, 0, __ctx.canvas.width, __ctx.canvas.height);
                _this.callback.mousemove();
                _this.paint(__ctx);
            }
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
        __ctx = ctx;
    };
    TopoTextNode.prototype.paint = function (ctx) {
        paint.drawText(ctx, this);
    };
    return TopoTextNode;
}());
function isPointInPath$1(node, e) {
    return (e.x >= node.x && e.x <= node.x + node.width) && (e.y >= node.y && e.y <= node.y + node.height);
}

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
