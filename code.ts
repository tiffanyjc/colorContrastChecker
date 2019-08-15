class CanvasUpdater {
  private id: number;

  public start(callback: Function) {
    this.id = setInterval(callback, 1000 / 15);
  }

  public stop() {
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
    
    var texts = selection.findAll(
      node => (node.type === 'TEXT') && completelyVisible(node) && hasSolidFill(node) && typeof node.fills !== 'symbol'
    ) as Array<TextNode>;

    var backgrounds = selection.findAll(
      node => 
      ((node.type === 'RECTANGLE') || (node.type === 'VECTOR') || (node.type === 'FRAME')) && completelyVisible(node) && hasSolidFill(node) 
    ); 

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
        var frameColor = (frameBackgrounds.length > 0) ? (<SolidPaint> selection.backgrounds[0]).color : null; 
        var topLayerColor = ((topBG != null) && (topBG.type != "FRAME")) ? topBG.fills[0].color : frameColor; 
        var noBG = (topBG == null) && (frameColor == null); 

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
            aaTexts.push({
              "nodeID": text.id,
              "textColor": textColor,
              "bgColor": topLayerColor,
              "contrastRatio": contrastRatio,
              "fontSize": fontSize
            }); 
          } else {
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
};

// higher index = closer to top 

var higherBG = (bg1, bg2) => {

  var parent = getCommonParent(bg1, bg2, []); 

  if (bg1 === parent) {
    return bg2; 
  } else if (bg2 === parent) {
    return bg1; 
  }

  var bg1Chain = bg1; 
  var bg2Chain = bg2; 

  while (bg1Chain.parent !== parent) {bg1Chain = bg1Chain.parent;}

  while (bg2Chain.parent !== parent) {bg2Chain = bg2Chain.parent;}

  return (parent.children.indexOf(bg1Chain) > parent.children.indexOf(bg2Chain)) ? bg1 : bg2; 
  // figma.currentPage.selection = [parent]; 

  // return isBG1Higher(parent, bg1, bg2) ? bg1 : bg2; 
}

function getCommonParent(bg1, bg2, seenParents) {
  if (bg1.parent == bg2.parent) {
    if (bg1 === curFrame) {
      return curFrame; 
    } else {
      return bg1.parent; 
    }
  } else if (seenParents.includes(bg1)) {
    return bg1; 
  } else if (seenParents.includes(bg2)) {
    return bg2; 
  } else if (bg1 === curFrame) {
    return getCommonParent(bg1, bg2.parent, seenParents.concat([bg2]));
  } else if (bg2 === curFrame) {
    return getCommonParent(bg1.parent, bg2, seenParents.concat([bg1]));
  } else {
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
  } else if (overlappingBGs.length == 1) {
    return overlappingBGs[0]; 
  } else {
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
	return (
		background.visible === true &&
		background.x <= text.x + text.width &&
		background.x + background.width >= text.x &&
		background.y <= text.y + text.height &&
		background.y + background.height >= text.y
	);
};

function completelyVisible(node) {
  if (node.parent.type == "PAGE") {
    return node.visible; 
  } else if ((!node.visible) || (node.opacity < 1) || (node.parent.getSharedPluginData("a11y", "type") == "annotation") ){
    return false; 
  } else {
    return completelyVisible(node.parent); 
  }
}

function hasSolidFill(node) {
  if (node.type == "FRAME") {
    return (node.backgrounds.length == 1); 
  } else {
    return (node.fills.length == 1) && (node.fills[0].opacity == 1); 
  }
}