/**
 * A simple wrapper around the JS interval to 
 * watch the canvas for changes in a cleaner way.
 */
class CanvasWatcher {

  private id: number;
  private fps = 1000 / 15; // number of times you want to check and update objects per second
  private stopCallback: Function = null;

  public start(callback: Function, stopCallback?: Function) {
    this.id = setInterval(callback, this.fps);
    if (stopCallback) {
      this.stopCallback = stopCallback;
    }
  }

  public stop() {
    clearInterval(this.id);
    if (this.stopCallback) {
      this.stopCallback();
    }
    this.stopCallback = null;
  }
}

let canvasWatcher = new CanvasWatcher(); 
var message = {}; 
var curFrame = null; 
var textNodeToBgNode = {}; 

// This shows the HTML page in "ui.html". UI is completely optional. Feel free
// to delete this if you don't want your plugin to have any UI. In that case
// you can just call methods directly on the "figma" object in your plugin.
figma.showUI(__html__, { width: 300, height: 300 });

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
  if (msg.type ==='resize') {
    var width = (msg.size == "small") ?  300 : 400; 
    var height = (msg.size == "small") ?  300 : 600; 
    curFrame = (msg.size == "small") ? null : curFrame; 

    // stopped here, was trying to get figma to resize depending on state 
    figma.ui.resize(width, height);
  } else if (msg.type === 'window-blur') {
    onCanvasFocus();
  } else if (msg.type === 'window-focus') {
    onWindowFocus();
  } else if (msg.type === 'select-node') {
    var textNode = <TextNode> figma.getNodeById(msg.id)
    figma.currentPage.selection = [textNode]; 
    figma.viewport.center = {x: textNode.absoluteTransform[0][2], y: textNode.absoluteTransform[1][2]}

  } else if (msg.type === 'update-colors') {

    var textNode = <TextNode> figma.getNodeById(msg.id)
    var bgNode = figma.getNodeById(textNodeToBgNode[msg.id]); 
    var textColor = msg.textColor; 
    var bgColor = msg.backgroundColor; 

    textNode.setRangeFills(0, textNode.characters.length, [{
      type: "SOLID", 
      color: {
        r: textColor[0] / 255,
        g: textColor[1] / 255,
        b: textColor[2] / 255}}]); 

    if (bgNode.type == "FRAME" ) {
      bgNode.backgrounds = [{
        type: "SOLID", 
        color: {
          r: bgColor[0] / 255,
          g: bgColor[1] / 255,
          b: bgColor[2] / 255}}]; 
    } else {
      bgNode = <RectangleNode> bgNode; 
      bgNode.fills = [{
        type: "SOLID", 
        color: {
          r: bgColor[0] / 255,
          g: bgColor[1] / 255,
          b: bgColor[2] / 255}}]; 
    }
    
    
  } else if (msg.type === 'check-contrast') {
    var selection = (curFrame == null) ? <FrameNode> figma.currentPage.selection[0] : curFrame;
    curFrame = (curFrame == null) ? <FrameNode> figma.currentPage.selection[0] : curFrame; 
    
    // var clipsContent = selection.clipsContent;
    // if (!clipsContent) selection.clipsContent = true;
    var texts = selection.findAll(
      node => (node.type === 'TEXT') && completelyVisible(node) && typeof node.fills !== 'symbol'
    ) as Array<TextNode>;
    var backgrounds = selection.findAll(
      node =>
        (node.type === 'RECTANGLE' ||
        node.type === 'VECTOR' ||
        node.type === 'FRAME' ||
        node.type === 'COMPONENT' ||
        node.type === 'INSTANCE') && 
        (completelyVisible(node)) && 
        hasFill(node)
    );

    // trying to do it all in one loop here 
    var inaccessibleTexts = [];
    var aaTexts = []; 
    var aaaTexts = []; 
    var overlappingBGs = null;  

    for (let text of texts) {
      overlappingBGs = getOverlaps(text, backgrounds); 
      if (isTextOnTop(text, selection, overlappingBGs)) {
        
        var topLayer = topMostLayer(text, selection, overlappingBGs); 
        textNodeToBgNode[text.id] = topLayer.id; 

        var textColor = text.fills[0].color; 
        // var frameColor = (<SolidPaint> selection.backgrounds[0]).color; 
        
        var frameBackgrounds = selection.backgrounds; 
        var frameColor = (frameBackgrounds.length > 0) ? (<SolidPaint> selection.backgrounds[0]).color : null; 
        var topLayerColor = ((topLayer != null) && (topLayer.type != "FRAME")) ? topLayer.fills[0].color : frameColor; 
        var noBG = (topLayer == null) && (frameColor == null); 

        if (topLayerColor != null) {
          var contrastRatio = getContrast(textColor, topLayerColor); 
          var fontSize = <number> text.fontSize; 
        
          if (((fontSize >= 19) && (contrastRatio < 3))  || ((fontSize < 19) && (contrastRatio < 4.5))) {
  
            inaccessibleTexts.push({
              "nodeID": text.id,
              "textColor": textColor,
              "bgColor": topLayerColor,
              "contrastRatio": contrastRatio,
              "fontSize": fontSize
            }); 
          } else if (((fontSize >= 19) && (contrastRatio < 4.5))  || ((fontSize < 19) && (contrastRatio < 7))) { 
            // aaTexts.push(text); 
  
            aaTexts.push({
              "nodeID": text.id,
              "textColor": textColor,
              "bgColor": topLayerColor,
              "contrastRatio": contrastRatio,
              "fontSize": fontSize
            }); 
          } else {
            // aaaTexts.push(text); 
  
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
    } else {

    message = { 
      type: "check-fail",
      frameName: selection.name,
      inaccessibleTexts: inaccessibleTexts,
      aaTexts: aaTexts,
    }; 
  }

    figma.ui.postMessage(message); 
  } 

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  // figma.closePlugin();
};



// functions here

function onCanvasFocus() {
  canvasWatcher.start(updateCanvas, finishUpdating);
}

function onWindowFocus() {
  canvasWatcher.stop();
}

function updateCanvas() {
  // Check if the states of objects you are watching has changed
  // Update the properties of objects if necessary
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

function finishUpdating() {
  // Do something after user has finished updating objects
  // I use this method to recalculate the positions of objects with 
  // better accuracy since it doesn't need to happen in real time.
}

function convertRGB(color) {
	if (color <= 0.04045) return color / 12.92;
	else return Math.pow((color + 0.055) / 1.055, 2.4);
};

function getContrast(textColor, bgColor) {
	var textLuminance =
		convertRGB(textColor.r) * 0.2126 + convertRGB(textColor.g) * 0.7152 + convertRGB(textColor.b) * 0.0722;
	var bgLuminance = convertRGB(bgColor.r) * 0.2126 + convertRGB(bgColor.g) * 0.7152 + convertRGB(bgColor.b) * 0.0722;
	var contrastRatio = (Math.max(textLuminance, bgLuminance) + 0.05) / (Math.min(textLuminance, bgLuminance) + 0.05);
	return parseFloat(contrastRatio.toFixed(2));
};




function isTextOnTop(text, selection, overlappingBGs) {
  for (let bg of overlappingBGs) {
    if (isTextHidden(bg, text, selection)) {return false}; 
  }
  return true; 
}

function isTextHidden(bgTree, textTree, frame) {
	var bgTreeParent = <FrameNode> bgTree.parent; 
	var textTreeParent = <FrameNode> textTree.parent; 
	
	if ((bgTreeParent.id == textTreeParent.id)) {
		return bgTreeParent.children.indexOf(bgTree) > textTreeParent.children.indexOf(textTree); 
	} else if (bgTreeParent === frame) {
		return isTextHidden(bgTree, textTreeParent, frame); 
	} else if (textTreeParent === frame) {
		return isTextHidden(bgTreeParent, textTree, frame); 
	} else {
		return isTextHidden(bgTreeParent, textTreeParent, frame); 
	}
}; 

function getTopLayer(layerA, layerB, frame) {
  var layerAParent = layerA.parent; 
  var layerBParent = layerB.parent; 
	
	if ((layerAParent.id == layerBParent.id)) {
		return ((layerAParent.children.indexOf(layerA) > layerBParent.children.indexOf(layerB)) ? layerA : layerB); 
	} else if (layerAParent === frame) {
		return getTopLayer(layerA, layerBParent, frame); 
	} else if (layerBParent === frame) {
		return getTopLayer(layerAParent, layerB, frame); 
	} else {
		return getTopLayer(layerAParent, layerBParent, frame); 
	}
}

function topMostLayer(text, frame, overlappingBGs) {

  if (overlappingBGs.length == 0) { return frame }; 
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
	return (
		background.visible === true &&
		background.x <= text.x + text.width &&
		background.x + background.width >= text.x &&
		background.y <= text.y + text.height &&
		background.y + background.height >= text.y
	);
};

function getOverlaps(text, backgrounds) {
  const overlappingBGs = backgrounds.filter(background => isOverlapping(text, background));
	return overlappingBGs; 
}; 

function completelyVisible(node) {
  if (node.parent.type == "PAGE") {
    return node.visible; 
  } else if ((!node.visible) || (node.parent.getSharedPluginData("a11y", "type") == "annotation") ){
    return false; 
  } else {
    return completelyVisible(node.parent); 
  }
}

function hasFill(node) {
  if (node.type == "FRAME") {
    return (node.backgrounds.length >= 0); 
  } else {
    return (node.fills.length >= 0); 
  }
}