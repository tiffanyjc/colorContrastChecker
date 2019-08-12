var CanvasUpdater = /** @class */ (function () {
    function CanvasUpdater() {
    }
    CanvasUpdater.prototype.start = function (callback) {
        this.id = setInterval(callback, 1000 / 15);
    };
    CanvasUpdater.prototype.stop = function () {
        clearInterval(this.id);
    };
    return CanvasUpdater;
}());
var canvasUpdater = new CanvasUpdater();
var message = {};
var curFrame = null;
var textNodeToBgNode = {};
figma.showUI(__html__, { width: 375, height: 500 });
figma.ui.onmessage = function (msg) {
    if (msg.type === 'window-blur') {
        onCanvasFocus();
    }
    else if (msg.type === 'window-focus') {
        onWindowFocus();
    }
    else if (msg.type === 'select-node') {
        var textNode = figma.getNodeById(msg.id);
        figma.currentPage.selection = [textNode];
        figma.viewport.center = { x: textNode.absoluteTransform[0][2], y: textNode.absoluteTransform[1][2] };
    }
    else if (msg.type === 'update-colors') {
        var textNode = figma.getNodeById(msg.id);
        var bgNode = figma.getNodeById(textNodeToBgNode[msg.id]);
        var textColor = msg.textColor;
        var bgColor = msg.backgroundColor;
        textNode.setRangeFills(0, textNode.characters.length, [{
                type: "SOLID",
                color: {
                    r: textColor[0] / 255,
                    g: textColor[1] / 255,
                    b: textColor[2] / 255
                }
            }]);
        if (bgNode.type == "FRAME") {
            bgNode.backgrounds = [{
                    type: "SOLID",
                    color: {
                        r: bgColor[0] / 255,
                        g: bgColor[1] / 255,
                        b: bgColor[2] / 255
                    }
                }];
        }
        else {
            bgNode = bgNode;
            bgNode.fills = [{
                    type: "SOLID",
                    color: {
                        r: bgColor[0] / 255,
                        g: bgColor[1] / 255,
                        b: bgColor[2] / 255
                    }
                }];
        }
    }
    else if (msg.type === 'check-contrast') {
        var selection = (curFrame == null) ? figma.currentPage.selection[0] : curFrame;
        curFrame = (curFrame == null) ? figma.currentPage.selection[0] : curFrame;
        var texts = selection.findAll(function (node) { return (node.type === 'TEXT') && completelyVisible(node) && typeof node.fills !== 'symbol'; });
        var backgrounds = selection.findAll(function (node) {
            return (node.type === 'RECTANGLE' ||
                node.type === 'VECTOR' ||
                node.type === 'FRAME' ||
                node.type === 'COMPONENT' ||
                node.type === 'INSTANCE') &&
                (completelyVisible(node)) &&
                hasFill(node);
        });
        var inaccessibleTexts = [];
        var aaTexts = [];
        var aaaTexts = [];
        var overlappingBGs = null;
        for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
            var text = texts_1[_i];
            overlappingBGs = getOverlaps(text, backgrounds);
            if (isTextOnTop(text, selection, overlappingBGs)) {
                var topLayer = topMostLayer(text, selection, overlappingBGs);
                textNodeToBgNode[text.id] = topLayer.id;
                var textColor = text.fills[0].color;
                var frameBackgrounds = selection.backgrounds;
                var frameColor = (frameBackgrounds.length > 0) ? selection.backgrounds[0].color : null;
                var topLayerColor = ((topLayer != null) && (topLayer.type != "FRAME")) ? topLayer.fills[0].color : frameColor;
                var noBG = (topLayer == null) && (frameColor == null);
                if (topLayerColor != null) {
                    var contrastRatio = getContrast(textColor, topLayerColor);
                    var fontSize = text.fontSize;
                    if (((fontSize >= 19) && (contrastRatio < 3)) || ((fontSize < 19) && (contrastRatio < 4.5))) {
                        inaccessibleTexts.push({
                            "nodeID": text.id,
                            "textColor": textColor,
                            "bgColor": topLayerColor,
                            "contrastRatio": contrastRatio,
                            "fontSize": fontSize
                        });
                    }
                    else if (((fontSize >= 19) && (contrastRatio < 4.5)) || ((fontSize < 19) && (contrastRatio < 7))) {
                        aaTexts.push({
                            "nodeID": text.id,
                            "textColor": textColor,
                            "bgColor": topLayerColor,
                            "contrastRatio": contrastRatio,
                            "fontSize": fontSize
                        });
                    }
                    else {
                        aaaTexts.push({
                            "nodeID": text.id,
                            "textColor": textColor,
                            "bgColor": topLayerColor,
                            "contrastRatio": contrastRatio,
                            "fontSize": fontSize
                        });
                    }
                }
            }
        }
        if (inaccessibleTexts.length + aaTexts.length === 0) {
            message = {
                type: "check-pass"
            };
        }
        else {
            message = {
                type: "check-fail",
                frameName: selection.name,
                inaccessibleTexts: inaccessibleTexts,
                aaTexts: aaTexts
            };
        }
        figma.ui.postMessage(message);
    }
};
function onCanvasFocus() {
    canvasUpdater.start(checkButtons);
}
function onWindowFocus() {
    canvasUpdater.stop();
}
function checkButtons() {
    message = {
        type: "disable-buttons",
        isDisabled: !((figma.currentPage.selection.length > 0) && figma.currentPage.selection[0].type == "FRAME")
    };
    figma.ui.postMessage(message);
    message = {
        type: "recheck-contrast"
    };
    figma.ui.postMessage(message);
}
function convertRGB(color) {
    if (color <= 0.04045)
        return color / 12.92;
    else
        return Math.pow((color + 0.055) / 1.055, 2.4);
}
;
function getContrast(textColor, bgColor) {
    var textLuminance = convertRGB(textColor.r) * 0.2126 + convertRGB(textColor.g) * 0.7152 + convertRGB(textColor.b) * 0.0722;
    var bgLuminance = convertRGB(bgColor.r) * 0.2126 + convertRGB(bgColor.g) * 0.7152 + convertRGB(bgColor.b) * 0.0722;
    var contrastRatio = (Math.max(textLuminance, bgLuminance) + 0.05) / (Math.min(textLuminance, bgLuminance) + 0.05);
    return parseFloat(contrastRatio.toFixed(2));
}
;
function isTextOnTop(text, selection, overlappingBGs) {
    for (var _i = 0, overlappingBGs_1 = overlappingBGs; _i < overlappingBGs_1.length; _i++) {
        var bg = overlappingBGs_1[_i];
        if (isTextHidden(bg, text, selection)) {
            return false;
        }
        ;
    }
    return true;
}
function isTextHidden(bgTree, textTree, frame) {
    var bgTreeParent = bgTree.parent;
    var textTreeParent = textTree.parent;
    if ((bgTreeParent.id == textTreeParent.id)) {
        return bgTreeParent.children.indexOf(bgTree) > textTreeParent.children.indexOf(textTree);
    }
    else if (bgTreeParent === frame) {
        return isTextHidden(bgTree, textTreeParent, frame);
    }
    else if (textTreeParent === frame) {
        return isTextHidden(bgTreeParent, textTree, frame);
    }
    else {
        return isTextHidden(bgTreeParent, textTreeParent, frame);
    }
}
;
function getTopLayer(layerA, layerB, frame) {
    var layerAParent = layerA.parent;
    var layerBParent = layerB.parent;
    if ((layerAParent.id == layerBParent.id)) {
        return ((layerAParent.children.indexOf(layerA) > layerBParent.children.indexOf(layerB)) ? layerA : layerB);
    }
    else if (layerAParent === frame) {
        return getTopLayer(layerA, layerBParent, frame);
    }
    else if (layerBParent === frame) {
        return getTopLayer(layerAParent, layerB, frame);
    }
    else {
        return getTopLayer(layerAParent, layerBParent, frame);
    }
}
function topMostLayer(text, frame, overlappingBGs) {
    if (overlappingBGs.length == 0) {
        return frame;
    }
    ;
    var topMostLayer = overlappingBGs[0];
    for (var i = 0; i < overlappingBGs.length - 1; i++) {
        topMostLayer = getTopLayer(topMostLayer, overlappingBGs[i + 1], frame);
    }
    while (topMostLayer.type == "GROUP") {
        var bgLayers = topMostLayer.children;
        bgLayers = getOverlaps(text, bgLayers);
        var topMostLayer = bgLayers[0];
        for (var i = 0; i < overlappingBGs.length - 1; i++) {
            topMostLayer = getTopLayer(topMostLayer, overlappingBGs[i + 1], frame);
        }
    }
    return topMostLayer;
}
function isOverlapping(text, background) {
    background = {
        x: background.absoluteTransform[0][2],
        y: background.absoluteTransform[1][2],
        width: background.width,
        height: background.height,
        visible: background.visible
    };
    text = {
        x: text.absoluteTransform[0][2],
        y: text.absoluteTransform[1][2],
        width: text.width,
        height: text.height
    };
    return (background.visible === true &&
        background.x <= text.x + text.width &&
        background.x + background.width >= text.x &&
        background.y <= text.y + text.height &&
        background.y + background.height >= text.y);
}
;
function getOverlaps(text, backgrounds) {
    var overlappingBGs = backgrounds.filter(function (background) { return isOverlapping(text, background); });
    return overlappingBGs;
}
;
function completelyVisible(node) {
    if (node.parent.type == "PAGE") {
        return node.visible;
    }
    else if ((!node.visible) || (node.parent.getSharedPluginData("a11y", "type") == "annotation")) {
        return false;
    }
    else {
        return completelyVisible(node.parent);
    }
}
function hasFill(node) {
    if (node.type == "FRAME") {
        return (node.backgrounds.length >= 0);
    }
    else {
        return (node.fills.length >= 0);
    }
}
