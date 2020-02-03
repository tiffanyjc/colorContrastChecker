/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/code.ts":
/*!*********************!*\
  !*** ./src/code.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

class CanvasUpdater {
    start(callback) {
        this.id = setInterval(callback, 1000 / 15);
    }
    stop() {
        clearInterval(this.id);
    }
}
let canvasUpdater = new CanvasUpdater();
var message = {};
var curFrame = null;
var textNodeToBgNode = {};
figma.showUI(__html__, { width: 375, height: 500 });
figma.ui.onmessage = msg => {
    if (msg.type === 'check-done') {
        curFrame = null;
    }
    else if (msg.type === 'window-blur') {
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
        var texts = selection.findAll(node => (node.type === 'TEXT') && completelyVisible(node) && hasSolidFill(node) && typeof node.fills !== 'symbol');
        var backgrounds = selection.findAll(node => ((node.type === 'RECTANGLE') || (node.type === 'VECTOR') || (node.type === 'FRAME')) && completelyVisible(node) && hasSolidFill(node));
        // add frame if solid color 
        if (hasSolidFill(selection)) {
            backgrounds.push(selection);
        }
        var inaccessibleTexts = [];
        var aaTexts = [];
        var aaaTexts = [];
        for (let text of texts) {
            var overlappingBGs = backgrounds.filter(background => isOverlapping(text, background));
            var topBG = getTopBG(overlappingBGs);
            // make sure text is on top and there are viable BGs to work with 
            if ((topBG != null) && (text === higherBG(text, topBG))) {
                textNodeToBgNode[text.id] = topBG.id;
                var textColor = text.fills[0].color;
                var frameBackgrounds = selection.backgrounds;
                var frameColor = (frameBackgrounds.length > 0) ? selection.backgrounds[0].color : null;
                var topLayerColor = ((topBG != null) && (topBG.type != "FRAME")) ? topBG.fills[0].color : frameColor;
                var noBG = (topBG == null) && (frameColor == null);
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
            // figma.currentPage.selection = [topBG]; 
        }
        if (inaccessibleTexts.length + aaTexts.length === 0) {
            message = {
                type: "check-pass",
                frameName: selection.name,
                inaccessibleTexts: inaccessibleTexts,
                aaTexts: aaTexts
            };
        }
        else {
            message = {
                type: "check-fail",
                frameName: selection.name,
                inaccessibleTexts: inaccessibleTexts,
                aaTexts: aaTexts,
            };
        }
        figma.ui.postMessage(message);
    }
};
// higher index = closer to top 
var higherBG = (bg1, bg2) => {
    var parent = getCommonParent(bg1, bg2, []);
    if (bg1 === parent) {
        return bg2;
    }
    else if (bg2 === parent) {
        return bg1;
    }
    var bg1Chain = bg1;
    var bg2Chain = bg2;
    while (bg1Chain.parent !== parent) {
        bg1Chain = bg1Chain.parent;
    }
    while (bg2Chain.parent !== parent) {
        bg2Chain = bg2Chain.parent;
    }
    return (parent.children.indexOf(bg1Chain) > parent.children.indexOf(bg2Chain)) ? bg1 : bg2;
    // figma.currentPage.selection = [parent]; 
    // return isBG1Higher(parent, bg1, bg2) ? bg1 : bg2; 
};
function getCommonParent(bg1, bg2, seenParents) {
    if (bg1.parent == bg2.parent) {
        if (bg1 === curFrame) {
            return curFrame;
        }
        else {
            return bg1.parent;
        }
    }
    else if (seenParents.includes(bg1)) {
        return bg1;
    }
    else if (seenParents.includes(bg2)) {
        return bg2;
    }
    else if (bg1 === curFrame) {
        return getCommonParent(bg1, bg2.parent, seenParents.concat([bg2]));
    }
    else if (bg2 === curFrame) {
        return getCommonParent(bg1.parent, bg2, seenParents.concat([bg1]));
    }
    else {
        return getCommonParent(bg1.parent, bg2.parent, seenParents.concat([bg1, bg2]));
    }
}
// function isHigher(bg1, bg2) {
//   if (bg1.type === 'FRAME') {
//     if (bg1.findAll(node => node === bg2).length > 0) {
//       return false; 
//     }
//   } else if (bg2.type === 'FRAME') {
//     if (bg2.findAll(node => node === bg1).length > 0) {
//       return true; 
//     }
//   }
//   if (bg1.parent === bg2.parent) {
//     return (bg1.parent.children.indexOf(bg1) > bg2.parent.children.indexOf(bg2)); 
//   } else if (bg1.parent === curFrame) {
//     return isHigher(bg1, bg2.parent); 
//   } else if (bg2.parent === curFrame) {
//     return isHigher(bg1.parent, bg2.parent); 
//   } else {
//     return isHigher(bg1.parent, bg2.parent); 
//   }
// }
// var higherBG = (bg1, bg2) => {
//   return (isHigher(bg1, bg2) ? bg1 : bg2); 
// }; 
function getTopBG(overlappingBGs) {
    if (overlappingBGs.length == 0) {
        return null;
    }
    else if (overlappingBGs.length == 1) {
        return overlappingBGs[0];
    }
    else {
        return overlappingBGs.reduce(higherBG);
    }
}
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
        type: "recheck-contrast",
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
    for (let bg of overlappingBGs) {
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
        bgLayers = bgLayers.filter(background => isOverlapping(text, background));
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
function completelyVisible(node) {
    if (node.parent.type == "PAGE") {
        return node.visible;
    }
    else if ((!node.visible) || (node.opacity < 1) || (node.parent.getSharedPluginData("a11y", "type") == "annotation")) {
        return false;
    }
    else {
        return completelyVisible(node.parent);
    }
}
function hasSolidFill(node) {
    if (node.type == "FRAME") {
        return (node.backgrounds.length == 1);
    }
    else {
        return (node.fills.length == 1) && (node.fills[0].opacity == 1);
    }
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QiwwQkFBMEI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QztBQUNBLHdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9GO0FBQ0EsTUFBTTtBQUNOLHdDO0FBQ0EsTUFBTTtBQUNOLCtDO0FBQ0EsTUFBTTtBQUNOLCtDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkM7QUFDQSxLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtCQUErQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsK0JBQStCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29kZS50c1wiKTtcbiIsImNsYXNzIENhbnZhc1VwZGF0ZXIge1xuICAgIHN0YXJ0KGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMuaWQgPSBzZXRJbnRlcnZhbChjYWxsYmFjaywgMTAwMCAvIDE1KTtcbiAgICB9XG4gICAgc3RvcCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmlkKTtcbiAgICB9XG59XG5sZXQgY2FudmFzVXBkYXRlciA9IG5ldyBDYW52YXNVcGRhdGVyKCk7XG52YXIgbWVzc2FnZSA9IHt9O1xudmFyIGN1ckZyYW1lID0gbnVsbDtcbnZhciB0ZXh0Tm9kZVRvQmdOb2RlID0ge307XG5maWdtYS5zaG93VUkoX19odG1sX18sIHsgd2lkdGg6IDM3NSwgaGVpZ2h0OiA1MDAgfSk7XG5maWdtYS51aS5vbm1lc3NhZ2UgPSBtc2cgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gJ2NoZWNrLWRvbmUnKSB7XG4gICAgICAgIGN1ckZyYW1lID0gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAobXNnLnR5cGUgPT09ICd3aW5kb3ctYmx1cicpIHtcbiAgICAgICAgb25DYW52YXNGb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3dpbmRvdy1mb2N1cycpIHtcbiAgICAgICAgb25XaW5kb3dGb2N1cygpO1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3NlbGVjdC1ub2RlJykge1xuICAgICAgICB2YXIgdGV4dE5vZGUgPSBmaWdtYS5nZXROb2RlQnlJZChtc2cuaWQpO1xuICAgICAgICBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbdGV4dE5vZGVdO1xuICAgICAgICBmaWdtYS52aWV3cG9ydC5jZW50ZXIgPSB7IHg6IHRleHROb2RlLmFic29sdXRlVHJhbnNmb3JtWzBdWzJdLCB5OiB0ZXh0Tm9kZS5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXSB9O1xuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ3VwZGF0ZS1jb2xvcnMnKSB7XG4gICAgICAgIHZhciB0ZXh0Tm9kZSA9IGZpZ21hLmdldE5vZGVCeUlkKG1zZy5pZCk7XG4gICAgICAgIHZhciBiZ05vZGUgPSBmaWdtYS5nZXROb2RlQnlJZCh0ZXh0Tm9kZVRvQmdOb2RlW21zZy5pZF0pO1xuICAgICAgICB2YXIgdGV4dENvbG9yID0gbXNnLnRleHRDb2xvcjtcbiAgICAgICAgdmFyIGJnQ29sb3IgPSBtc2cuYmFja2dyb3VuZENvbG9yO1xuICAgICAgICB0ZXh0Tm9kZS5zZXRSYW5nZUZpbGxzKDAsIHRleHROb2RlLmNoYXJhY3RlcnMubGVuZ3RoLCBbe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiU09MSURcIixcbiAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICByOiB0ZXh0Q29sb3JbMF0gLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgIGc6IHRleHRDb2xvclsxXSAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgYjogdGV4dENvbG9yWzJdIC8gMjU1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfV0pO1xuICAgICAgICBpZiAoYmdOb2RlLnR5cGUgPT0gXCJGUkFNRVwiKSB7XG4gICAgICAgICAgICBiZ05vZGUuYmFja2dyb3VuZHMgPSBbe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlNPTElEXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByOiBiZ0NvbG9yWzBdIC8gMjU1LFxuICAgICAgICAgICAgICAgICAgICAgICAgZzogYmdDb2xvclsxXSAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGI6IGJnQ29sb3JbMl0gLyAyNTVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmdOb2RlID0gYmdOb2RlO1xuICAgICAgICAgICAgYmdOb2RlLmZpbGxzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJTT0xJRFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgcjogYmdDb2xvclswXSAvIDI1NSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGc6IGJnQ29sb3JbMV0gLyAyNTUsXG4gICAgICAgICAgICAgICAgICAgICAgICBiOiBiZ0NvbG9yWzJdIC8gMjU1XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChtc2cudHlwZSA9PT0gJ2NoZWNrLWNvbnRyYXN0Jykge1xuICAgICAgICB2YXIgc2VsZWN0aW9uID0gKGN1ckZyYW1lID09IG51bGwpID8gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdIDogY3VyRnJhbWU7XG4gICAgICAgIGN1ckZyYW1lID0gKGN1ckZyYW1lID09IG51bGwpID8gZmlnbWEuY3VycmVudFBhZ2Uuc2VsZWN0aW9uWzBdIDogY3VyRnJhbWU7XG4gICAgICAgIHZhciB0ZXh0cyA9IHNlbGVjdGlvbi5maW5kQWxsKG5vZGUgPT4gKG5vZGUudHlwZSA9PT0gJ1RFWFQnKSAmJiBjb21wbGV0ZWx5VmlzaWJsZShub2RlKSAmJiBoYXNTb2xpZEZpbGwobm9kZSkgJiYgdHlwZW9mIG5vZGUuZmlsbHMgIT09ICdzeW1ib2wnKTtcbiAgICAgICAgdmFyIGJhY2tncm91bmRzID0gc2VsZWN0aW9uLmZpbmRBbGwobm9kZSA9PiAoKG5vZGUudHlwZSA9PT0gJ1JFQ1RBTkdMRScpIHx8IChub2RlLnR5cGUgPT09ICdWRUNUT1InKSB8fCAobm9kZS50eXBlID09PSAnRlJBTUUnKSkgJiYgY29tcGxldGVseVZpc2libGUobm9kZSkgJiYgaGFzU29saWRGaWxsKG5vZGUpKTtcbiAgICAgICAgLy8gYWRkIGZyYW1lIGlmIHNvbGlkIGNvbG9yIFxuICAgICAgICBpZiAoaGFzU29saWRGaWxsKHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmRzLnB1c2goc2VsZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5hY2Nlc3NpYmxlVGV4dHMgPSBbXTtcbiAgICAgICAgdmFyIGFhVGV4dHMgPSBbXTtcbiAgICAgICAgdmFyIGFhYVRleHRzID0gW107XG4gICAgICAgIGZvciAobGV0IHRleHQgb2YgdGV4dHMpIHtcbiAgICAgICAgICAgIHZhciBvdmVybGFwcGluZ0JHcyA9IGJhY2tncm91bmRzLmZpbHRlcihiYWNrZ3JvdW5kID0+IGlzT3ZlcmxhcHBpbmcodGV4dCwgYmFja2dyb3VuZCkpO1xuICAgICAgICAgICAgdmFyIHRvcEJHID0gZ2V0VG9wQkcob3ZlcmxhcHBpbmdCR3MpO1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHRleHQgaXMgb24gdG9wIGFuZCB0aGVyZSBhcmUgdmlhYmxlIEJHcyB0byB3b3JrIHdpdGggXG4gICAgICAgICAgICBpZiAoKHRvcEJHICE9IG51bGwpICYmICh0ZXh0ID09PSBoaWdoZXJCRyh0ZXh0LCB0b3BCRykpKSB7XG4gICAgICAgICAgICAgICAgdGV4dE5vZGVUb0JnTm9kZVt0ZXh0LmlkXSA9IHRvcEJHLmlkO1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0Q29sb3IgPSB0ZXh0LmZpbGxzWzBdLmNvbG9yO1xuICAgICAgICAgICAgICAgIHZhciBmcmFtZUJhY2tncm91bmRzID0gc2VsZWN0aW9uLmJhY2tncm91bmRzO1xuICAgICAgICAgICAgICAgIHZhciBmcmFtZUNvbG9yID0gKGZyYW1lQmFja2dyb3VuZHMubGVuZ3RoID4gMCkgPyBzZWxlY3Rpb24uYmFja2dyb3VuZHNbMF0uY29sb3IgOiBudWxsO1xuICAgICAgICAgICAgICAgIHZhciB0b3BMYXllckNvbG9yID0gKCh0b3BCRyAhPSBudWxsKSAmJiAodG9wQkcudHlwZSAhPSBcIkZSQU1FXCIpKSA/IHRvcEJHLmZpbGxzWzBdLmNvbG9yIDogZnJhbWVDb2xvcjtcbiAgICAgICAgICAgICAgICB2YXIgbm9CRyA9ICh0b3BCRyA9PSBudWxsKSAmJiAoZnJhbWVDb2xvciA9PSBudWxsKTtcbiAgICAgICAgICAgICAgICBpZiAodG9wTGF5ZXJDb2xvciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250cmFzdFJhdGlvID0gZ2V0Q29udHJhc3QodGV4dENvbG9yLCB0b3BMYXllckNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvbnRTaXplID0gdGV4dC5mb250U2l6ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoZm9udFNpemUgPj0gMTkpICYmIChjb250cmFzdFJhdGlvIDwgMykpIHx8ICgoZm9udFNpemUgPCAxOSkgJiYgKGNvbnRyYXN0UmF0aW8gPCA0LjUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5hY2Nlc3NpYmxlVGV4dHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub2RlSURcIjogdGV4dC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRDb2xvclwiOiB0ZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZ0NvbG9yXCI6IHRvcExheWVyQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250cmFzdFJhdGlvXCI6IGNvbnRyYXN0UmF0aW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiBmb250U2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoKChmb250U2l6ZSA+PSAxOSkgJiYgKGNvbnRyYXN0UmF0aW8gPCA0LjUpKSB8fCAoKGZvbnRTaXplIDwgMTkpICYmIChjb250cmFzdFJhdGlvIDwgNykpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhYVRleHRzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibm9kZUlEXCI6IHRleHQuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0Q29sb3JcIjogdGV4dENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmdDb2xvclwiOiB0b3BMYXllckNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY29udHJhc3RSYXRpb1wiOiBjb250cmFzdFJhdGlvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogZm9udFNpemVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWFhVGV4dHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJub2RlSURcIjogdGV4dC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRDb2xvclwiOiB0ZXh0Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZ0NvbG9yXCI6IHRvcExheWVyQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb250cmFzdFJhdGlvXCI6IGNvbnRyYXN0UmF0aW8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiBmb250U2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbdG9wQkddOyBcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5hY2Nlc3NpYmxlVGV4dHMubGVuZ3RoICsgYWFUZXh0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJjaGVjay1wYXNzXCIsXG4gICAgICAgICAgICAgICAgZnJhbWVOYW1lOiBzZWxlY3Rpb24ubmFtZSxcbiAgICAgICAgICAgICAgICBpbmFjY2Vzc2libGVUZXh0czogaW5hY2Nlc3NpYmxlVGV4dHMsXG4gICAgICAgICAgICAgICAgYWFUZXh0czogYWFUZXh0c1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJjaGVjay1mYWlsXCIsXG4gICAgICAgICAgICAgICAgZnJhbWVOYW1lOiBzZWxlY3Rpb24ubmFtZSxcbiAgICAgICAgICAgICAgICBpbmFjY2Vzc2libGVUZXh0czogaW5hY2Nlc3NpYmxlVGV4dHMsXG4gICAgICAgICAgICAgICAgYWFUZXh0czogYWFUZXh0cyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZmlnbWEudWkucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgfVxufTtcbi8vIGhpZ2hlciBpbmRleCA9IGNsb3NlciB0byB0b3AgXG52YXIgaGlnaGVyQkcgPSAoYmcxLCBiZzIpID0+IHtcbiAgICB2YXIgcGFyZW50ID0gZ2V0Q29tbW9uUGFyZW50KGJnMSwgYmcyLCBbXSk7XG4gICAgaWYgKGJnMSA9PT0gcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBiZzI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGJnMiA9PT0gcGFyZW50KSB7XG4gICAgICAgIHJldHVybiBiZzE7XG4gICAgfVxuICAgIHZhciBiZzFDaGFpbiA9IGJnMTtcbiAgICB2YXIgYmcyQ2hhaW4gPSBiZzI7XG4gICAgd2hpbGUgKGJnMUNoYWluLnBhcmVudCAhPT0gcGFyZW50KSB7XG4gICAgICAgIGJnMUNoYWluID0gYmcxQ2hhaW4ucGFyZW50O1xuICAgIH1cbiAgICB3aGlsZSAoYmcyQ2hhaW4ucGFyZW50ICE9PSBwYXJlbnQpIHtcbiAgICAgICAgYmcyQ2hhaW4gPSBiZzJDaGFpbi5wYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiAocGFyZW50LmNoaWxkcmVuLmluZGV4T2YoYmcxQ2hhaW4pID4gcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoYmcyQ2hhaW4pKSA/IGJnMSA6IGJnMjtcbiAgICAvLyBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb24gPSBbcGFyZW50XTsgXG4gICAgLy8gcmV0dXJuIGlzQkcxSGlnaGVyKHBhcmVudCwgYmcxLCBiZzIpID8gYmcxIDogYmcyOyBcbn07XG5mdW5jdGlvbiBnZXRDb21tb25QYXJlbnQoYmcxLCBiZzIsIHNlZW5QYXJlbnRzKSB7XG4gICAgaWYgKGJnMS5wYXJlbnQgPT0gYmcyLnBhcmVudCkge1xuICAgICAgICBpZiAoYmcxID09PSBjdXJGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1ckZyYW1lO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGJnMS5wYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoc2VlblBhcmVudHMuaW5jbHVkZXMoYmcxKSkge1xuICAgICAgICByZXR1cm4gYmcxO1xuICAgIH1cbiAgICBlbHNlIGlmIChzZWVuUGFyZW50cy5pbmNsdWRlcyhiZzIpKSB7XG4gICAgICAgIHJldHVybiBiZzI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGJnMSA9PT0gY3VyRnJhbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldENvbW1vblBhcmVudChiZzEsIGJnMi5wYXJlbnQsIHNlZW5QYXJlbnRzLmNvbmNhdChbYmcyXSkpO1xuICAgIH1cbiAgICBlbHNlIGlmIChiZzIgPT09IGN1ckZyYW1lKSB7XG4gICAgICAgIHJldHVybiBnZXRDb21tb25QYXJlbnQoYmcxLnBhcmVudCwgYmcyLCBzZWVuUGFyZW50cy5jb25jYXQoW2JnMV0pKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXRDb21tb25QYXJlbnQoYmcxLnBhcmVudCwgYmcyLnBhcmVudCwgc2VlblBhcmVudHMuY29uY2F0KFtiZzEsIGJnMl0pKTtcbiAgICB9XG59XG4vLyBmdW5jdGlvbiBpc0hpZ2hlcihiZzEsIGJnMikge1xuLy8gICBpZiAoYmcxLnR5cGUgPT09ICdGUkFNRScpIHtcbi8vICAgICBpZiAoYmcxLmZpbmRBbGwobm9kZSA9PiBub2RlID09PSBiZzIpLmxlbmd0aCA+IDApIHtcbi8vICAgICAgIHJldHVybiBmYWxzZTsgXG4vLyAgICAgfVxuLy8gICB9IGVsc2UgaWYgKGJnMi50eXBlID09PSAnRlJBTUUnKSB7XG4vLyAgICAgaWYgKGJnMi5maW5kQWxsKG5vZGUgPT4gbm9kZSA9PT0gYmcxKS5sZW5ndGggPiAwKSB7XG4vLyAgICAgICByZXR1cm4gdHJ1ZTsgXG4vLyAgICAgfVxuLy8gICB9XG4vLyAgIGlmIChiZzEucGFyZW50ID09PSBiZzIucGFyZW50KSB7XG4vLyAgICAgcmV0dXJuIChiZzEucGFyZW50LmNoaWxkcmVuLmluZGV4T2YoYmcxKSA+IGJnMi5wYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihiZzIpKTsgXG4vLyAgIH0gZWxzZSBpZiAoYmcxLnBhcmVudCA9PT0gY3VyRnJhbWUpIHtcbi8vICAgICByZXR1cm4gaXNIaWdoZXIoYmcxLCBiZzIucGFyZW50KTsgXG4vLyAgIH0gZWxzZSBpZiAoYmcyLnBhcmVudCA9PT0gY3VyRnJhbWUpIHtcbi8vICAgICByZXR1cm4gaXNIaWdoZXIoYmcxLnBhcmVudCwgYmcyLnBhcmVudCk7IFxuLy8gICB9IGVsc2Uge1xuLy8gICAgIHJldHVybiBpc0hpZ2hlcihiZzEucGFyZW50LCBiZzIucGFyZW50KTsgXG4vLyAgIH1cbi8vIH1cbi8vIHZhciBoaWdoZXJCRyA9IChiZzEsIGJnMikgPT4ge1xuLy8gICByZXR1cm4gKGlzSGlnaGVyKGJnMSwgYmcyKSA/IGJnMSA6IGJnMik7IFxuLy8gfTsgXG5mdW5jdGlvbiBnZXRUb3BCRyhvdmVybGFwcGluZ0JHcykge1xuICAgIGlmIChvdmVybGFwcGluZ0JHcy5sZW5ndGggPT0gMCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSBpZiAob3ZlcmxhcHBpbmdCR3MubGVuZ3RoID09IDEpIHtcbiAgICAgICAgcmV0dXJuIG92ZXJsYXBwaW5nQkdzWzBdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG92ZXJsYXBwaW5nQkdzLnJlZHVjZShoaWdoZXJCRyk7XG4gICAgfVxufVxuZnVuY3Rpb24gb25DYW52YXNGb2N1cygpIHtcbiAgICBjYW52YXNVcGRhdGVyLnN0YXJ0KGNoZWNrQnV0dG9ucyk7XG59XG5mdW5jdGlvbiBvbldpbmRvd0ZvY3VzKCkge1xuICAgIGNhbnZhc1VwZGF0ZXIuc3RvcCgpO1xufVxuZnVuY3Rpb24gY2hlY2tCdXR0b25zKCkge1xuICAgIG1lc3NhZ2UgPSB7XG4gICAgICAgIHR5cGU6IFwiZGlzYWJsZS1idXR0b25zXCIsXG4gICAgICAgIGlzRGlzYWJsZWQ6ICEoKGZpZ21hLmN1cnJlbnRQYWdlLnNlbGVjdGlvbi5sZW5ndGggPiAwKSAmJiBmaWdtYS5jdXJyZW50UGFnZS5zZWxlY3Rpb25bMF0udHlwZSA9PSBcIkZSQU1FXCIpXG4gICAgfTtcbiAgICBmaWdtYS51aS5wb3N0TWVzc2FnZShtZXNzYWdlKTtcbiAgICBtZXNzYWdlID0ge1xuICAgICAgICB0eXBlOiBcInJlY2hlY2stY29udHJhc3RcIixcbiAgICB9O1xuICAgIGZpZ21hLnVpLnBvc3RNZXNzYWdlKG1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gY29udmVydFJHQihjb2xvcikge1xuICAgIGlmIChjb2xvciA8PSAwLjA0MDQ1KVxuICAgICAgICByZXR1cm4gY29sb3IgLyAxMi45MjtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBNYXRoLnBvdygoY29sb3IgKyAwLjA1NSkgLyAxLjA1NSwgMi40KTtcbn1cbjtcbmZ1bmN0aW9uIGdldENvbnRyYXN0KHRleHRDb2xvciwgYmdDb2xvcikge1xuICAgIHZhciB0ZXh0THVtaW5hbmNlID0gY29udmVydFJHQih0ZXh0Q29sb3IucikgKiAwLjIxMjYgKyBjb252ZXJ0UkdCKHRleHRDb2xvci5nKSAqIDAuNzE1MiArIGNvbnZlcnRSR0IodGV4dENvbG9yLmIpICogMC4wNzIyO1xuICAgIHZhciBiZ0x1bWluYW5jZSA9IGNvbnZlcnRSR0IoYmdDb2xvci5yKSAqIDAuMjEyNiArIGNvbnZlcnRSR0IoYmdDb2xvci5nKSAqIDAuNzE1MiArIGNvbnZlcnRSR0IoYmdDb2xvci5iKSAqIDAuMDcyMjtcbiAgICB2YXIgY29udHJhc3RSYXRpbyA9IChNYXRoLm1heCh0ZXh0THVtaW5hbmNlLCBiZ0x1bWluYW5jZSkgKyAwLjA1KSAvIChNYXRoLm1pbih0ZXh0THVtaW5hbmNlLCBiZ0x1bWluYW5jZSkgKyAwLjA1KTtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChjb250cmFzdFJhdGlvLnRvRml4ZWQoMikpO1xufVxuO1xuZnVuY3Rpb24gaXNUZXh0T25Ub3AodGV4dCwgc2VsZWN0aW9uLCBvdmVybGFwcGluZ0JHcykge1xuICAgIGZvciAobGV0IGJnIG9mIG92ZXJsYXBwaW5nQkdzKSB7XG4gICAgICAgIGlmIChpc1RleHRIaWRkZW4oYmcsIHRleHQsIHNlbGVjdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuZnVuY3Rpb24gaXNUZXh0SGlkZGVuKGJnVHJlZSwgdGV4dFRyZWUsIGZyYW1lKSB7XG4gICAgdmFyIGJnVHJlZVBhcmVudCA9IGJnVHJlZS5wYXJlbnQ7XG4gICAgdmFyIHRleHRUcmVlUGFyZW50ID0gdGV4dFRyZWUucGFyZW50O1xuICAgIGlmICgoYmdUcmVlUGFyZW50LmlkID09IHRleHRUcmVlUGFyZW50LmlkKSkge1xuICAgICAgICByZXR1cm4gYmdUcmVlUGFyZW50LmNoaWxkcmVuLmluZGV4T2YoYmdUcmVlKSA+IHRleHRUcmVlUGFyZW50LmNoaWxkcmVuLmluZGV4T2YodGV4dFRyZWUpO1xuICAgIH1cbiAgICBlbHNlIGlmIChiZ1RyZWVQYXJlbnQgPT09IGZyYW1lKSB7XG4gICAgICAgIHJldHVybiBpc1RleHRIaWRkZW4oYmdUcmVlLCB0ZXh0VHJlZVBhcmVudCwgZnJhbWUpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0ZXh0VHJlZVBhcmVudCA9PT0gZnJhbWUpIHtcbiAgICAgICAgcmV0dXJuIGlzVGV4dEhpZGRlbihiZ1RyZWVQYXJlbnQsIHRleHRUcmVlLCBmcmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gaXNUZXh0SGlkZGVuKGJnVHJlZVBhcmVudCwgdGV4dFRyZWVQYXJlbnQsIGZyYW1lKTtcbiAgICB9XG59XG47XG5mdW5jdGlvbiBnZXRUb3BMYXllcihsYXllckEsIGxheWVyQiwgZnJhbWUpIHtcbiAgICB2YXIgbGF5ZXJBUGFyZW50ID0gbGF5ZXJBLnBhcmVudDtcbiAgICB2YXIgbGF5ZXJCUGFyZW50ID0gbGF5ZXJCLnBhcmVudDtcbiAgICBpZiAoKGxheWVyQVBhcmVudC5pZCA9PSBsYXllckJQYXJlbnQuaWQpKSB7XG4gICAgICAgIHJldHVybiAoKGxheWVyQVBhcmVudC5jaGlsZHJlbi5pbmRleE9mKGxheWVyQSkgPiBsYXllckJQYXJlbnQuY2hpbGRyZW4uaW5kZXhPZihsYXllckIpKSA/IGxheWVyQSA6IGxheWVyQik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxheWVyQVBhcmVudCA9PT0gZnJhbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldFRvcExheWVyKGxheWVyQSwgbGF5ZXJCUGFyZW50LCBmcmFtZSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxheWVyQlBhcmVudCA9PT0gZnJhbWUpIHtcbiAgICAgICAgcmV0dXJuIGdldFRvcExheWVyKGxheWVyQVBhcmVudCwgbGF5ZXJCLCBmcmFtZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0VG9wTGF5ZXIobGF5ZXJBUGFyZW50LCBsYXllckJQYXJlbnQsIGZyYW1lKTtcbiAgICB9XG59XG5mdW5jdGlvbiB0b3BNb3N0TGF5ZXIodGV4dCwgZnJhbWUsIG92ZXJsYXBwaW5nQkdzKSB7XG4gICAgaWYgKG92ZXJsYXBwaW5nQkdzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gICAgO1xuICAgIHZhciB0b3BNb3N0TGF5ZXIgPSBvdmVybGFwcGluZ0JHc1swXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG92ZXJsYXBwaW5nQkdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICB0b3BNb3N0TGF5ZXIgPSBnZXRUb3BMYXllcih0b3BNb3N0TGF5ZXIsIG92ZXJsYXBwaW5nQkdzW2kgKyAxXSwgZnJhbWUpO1xuICAgIH1cbiAgICB3aGlsZSAodG9wTW9zdExheWVyLnR5cGUgPT0gXCJHUk9VUFwiKSB7XG4gICAgICAgIHZhciBiZ0xheWVycyA9IHRvcE1vc3RMYXllci5jaGlsZHJlbjtcbiAgICAgICAgYmdMYXllcnMgPSBiZ0xheWVycy5maWx0ZXIoYmFja2dyb3VuZCA9PiBpc092ZXJsYXBwaW5nKHRleHQsIGJhY2tncm91bmQpKTtcbiAgICAgICAgdmFyIHRvcE1vc3RMYXllciA9IGJnTGF5ZXJzWzBdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG92ZXJsYXBwaW5nQkdzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgdG9wTW9zdExheWVyID0gZ2V0VG9wTGF5ZXIodG9wTW9zdExheWVyLCBvdmVybGFwcGluZ0JHc1tpICsgMV0sIGZyYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdG9wTW9zdExheWVyO1xufVxuZnVuY3Rpb24gaXNPdmVybGFwcGluZyh0ZXh0LCBiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZCA9IHtcbiAgICAgICAgeDogYmFja2dyb3VuZC5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXSxcbiAgICAgICAgeTogYmFja2dyb3VuZC5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXSxcbiAgICAgICAgd2lkdGg6IGJhY2tncm91bmQud2lkdGgsXG4gICAgICAgIGhlaWdodDogYmFja2dyb3VuZC5oZWlnaHQsXG4gICAgICAgIHZpc2libGU6IGJhY2tncm91bmQudmlzaWJsZVxuICAgIH07XG4gICAgdGV4dCA9IHtcbiAgICAgICAgeDogdGV4dC5hYnNvbHV0ZVRyYW5zZm9ybVswXVsyXSxcbiAgICAgICAgeTogdGV4dC5hYnNvbHV0ZVRyYW5zZm9ybVsxXVsyXSxcbiAgICAgICAgd2lkdGg6IHRleHQud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGV4dC5oZWlnaHRcbiAgICB9O1xuICAgIHJldHVybiAoYmFja2dyb3VuZC52aXNpYmxlID09PSB0cnVlICYmXG4gICAgICAgIGJhY2tncm91bmQueCA8PSB0ZXh0LnggKyB0ZXh0LndpZHRoICYmXG4gICAgICAgIGJhY2tncm91bmQueCArIGJhY2tncm91bmQud2lkdGggPj0gdGV4dC54ICYmXG4gICAgICAgIGJhY2tncm91bmQueSA8PSB0ZXh0LnkgKyB0ZXh0LmhlaWdodCAmJlxuICAgICAgICBiYWNrZ3JvdW5kLnkgKyBiYWNrZ3JvdW5kLmhlaWdodCA+PSB0ZXh0LnkpO1xufVxuO1xuZnVuY3Rpb24gY29tcGxldGVseVZpc2libGUobm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudC50eXBlID09IFwiUEFHRVwiKSB7XG4gICAgICAgIHJldHVybiBub2RlLnZpc2libGU7XG4gICAgfVxuICAgIGVsc2UgaWYgKCghbm9kZS52aXNpYmxlKSB8fCAobm9kZS5vcGFjaXR5IDwgMSkgfHwgKG5vZGUucGFyZW50LmdldFNoYXJlZFBsdWdpbkRhdGEoXCJhMTF5XCIsIFwidHlwZVwiKSA9PSBcImFubm90YXRpb25cIikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBsZXRlbHlWaXNpYmxlKG5vZGUucGFyZW50KTtcbiAgICB9XG59XG5mdW5jdGlvbiBoYXNTb2xpZEZpbGwobm9kZSkge1xuICAgIGlmIChub2RlLnR5cGUgPT0gXCJGUkFNRVwiKSB7XG4gICAgICAgIHJldHVybiAobm9kZS5iYWNrZ3JvdW5kcy5sZW5ndGggPT0gMSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gKG5vZGUuZmlsbHMubGVuZ3RoID09IDEpICYmIChub2RlLmZpbGxzWzBdLm9wYWNpdHkgPT0gMSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==