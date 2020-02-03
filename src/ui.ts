import './ui.css'

// initialization of pages 
document.getElementById('page-check-pass').style.visibility = "hidden";
document.getElementById('page-check-fail').style.visibility = "hidden"; 
document.getElementById("about").hidden = true; 
document.getElementById('link-instructions').style.color = "black"; 

document.getElementById("link-instructions").onclick = () => {
  document.getElementById("link-instructions").style.color = "black";
  document.getElementById("link-about").style.color = "#929292";
  document.getElementById("page-intro").style.visibility = "visible"; 
  document.getElementById("about").hidden = true;  
}

document.getElementById("link-about").onclick = () => {
  document.getElementById("link-about").style.color = "black";
  document.getElementById("link-instructions").style.color = "#929292";
  document.getElementById("page-intro").style.visibility = "hidden"; 
  document.getElementById("about").hidden = false; 
}

if (!document.hasFocus()) { 
    parent.postMessage({ pluginMessage: { type: 'window-blur' } }, '*');
  }
  window.addEventListener('blur', () => {
    parent.postMessage({ pluginMessage: { type: 'window-blur' } }, '*');
  });
  window.addEventListener('focus', () => {
    parent.postMessage({ pluginMessage: { type: 'window-focus' } }, '*');
  });


  // adding button functionality 
document.getElementById('button-exit').onclick = () => {

    var x = document.getElementsByClassName('contrast-object'); 
    for(var i = x.length - 1; i >= 0; i--) {
        x[i].parentNode.removeChild(x[i]);
    }
  
  
    document.getElementById('page-check-fail').style.visibility = "hidden"; 
    document.getElementById('page-check-pass').style.visibility = "hidden"; 
    document.getElementById('page-intro').style.visibility = "visible"; 
    document.getElementById('zero-state-nav').style.visibility = "visible"; 
    parent.postMessage({ pluginMessage: { type: 'check-done' } }, '*');
  };
  
  document.getElementById('button-done').onclick = () => {
    document.getElementById('page-check-fail').style.visibility = "hidden"; 
    document.getElementById('page-check-pass').style.visibility = "hidden"; 
    document.getElementById('page-intro').style.visibility = "visible"; 
    document.getElementById('zero-state-nav').style.visibility = "visible"; 
  }; 
  
  document.getElementById('button-check').onclick = () => {
    // disable this button if nothing is selected 
    // todo send message to parent to check for inaccessible text 
    parent.postMessage({ pluginMessage: { type: 'check-contrast' } }, '*'); 
  }
  
//   document.getElementById('button-recheck').onclick = () => {
  
    
//     var x = document.getElementsByClassName('contrast-object'); 
//     for(var i = x.length - 1; i >= 0; i--) {
//         x[i].parentNode.removeChild(x[i]);
//     }
  
//     parent.postMessage({ pluginMessage: { type: 'check-contrast' } }, '*'); 
//     // 
// }

  // receiving messages from parent 
onmessage = (event) => {
    var message = event.data.pluginMessage; 
    if (message.type === 'disable-buttons') {
      (<HTMLInputElement> document.getElementById('button-check')).disabled = message.isDisabled; 
    } else if (message.type === 'check-pass') {
      document.getElementById('page-intro').style.visibility = "hidden"; 
      document.getElementById('page-check-fail').style.visibility = "hidden"; 
      document.getElementById('page-check-pass').style.visibility = "visible";
      document.getElementById('zero-state-nav').style.visibility = "hidden";  
    } else if (message.type === 'check-fail') { 
      document.getElementById('page-intro').style.visibility = "hidden"; 
      document.getElementById('page-check-fail').style.visibility = "visible"; 
      document.getElementById('page-check-pass').style.visibility = "hidden"; 
      document.getElementById('zero-state-nav').style.visibility = "hidden"; 
  
      var inaccessibleTexts = message.inaccessibleTexts; 
      var aaTexts = message.aaTexts; 
      document.getElementById("header-fail").innerHTML = inaccessibleTexts.length + aaTexts.length; 
      document.getElementById("frame-name").innerHTML = message.frameName; 
  
      for (let t of inaccessibleTexts) {
        createFocusObject(t, true); 
      }
      for (let t of aaTexts) {
        createFocusObject(t, false); 
      }
    }
}

function createFocusObject(text, failedAll) {
var contrastObject = document.createElement("div"); 
contrastObject.className = "contrast-object"; 
contrastObject.id = text["nodeID"]; 

var previewColumn = document.createElement('div'); 
previewColumn.className = "preview-column"; 

    var preview = document.createElement("div"); 
    preview.className = "preview"; 
    preview.innerHTML = "A";
    preview.style.fontSize = (text.fontSize >= 19) ? "30px" : "15px";  
    preview.style.color = getRGB(text["textColor"]); 
    preview.style.backgroundColor = getRGB(text["bgColor"]); 
    preview.id = getRGB(text["textColor"]) + ":" + getRGB(text["bgColor"]); 
    preview.onclick = () => {
        parent.postMessage({ pluginMessage: { type: 'select-node', id: contrastObject.id } }, '*'); 
    }; 

    var buttonReset = document.createElement("input"); 
    buttonReset.type = "button"; 
    buttonReset.className = "button-reset"; 
    buttonReset.value = "Reset"; 
    buttonReset.onclick = () => {
        // need to check this 
        (<HTMLInputElement> document.getElementById(text["nodeID"]).getElementsByClassName("sliderText")[0]).value = "0"; 
        (<HTMLInputElement> document.getElementById(text["nodeID"]).getElementsByClassName("sliderBG")[0]).value = "0"; 
        updateRGB(text["nodeID"], true, text.fontSize); 
        updateRGB(text["nodeID"], false, text.fontSize); 


        let aaChecks = failedAll ? 
        "<span id='aa-fail'>&#10060; AA</span><span id='aaa-fail'>&#10060; AAA </span>" : 
        "<span id='aa-pass'>&#9989; AA</span><span id='aaa-fail'>&#10060; AAA </span>" ; 
        contrastColumn.innerHTML = "<h3>Contrast Ratio</h3>" + text["contrastRatio"] + "<br />&nbsp; <br />&nbsp;" + aaChecks; 
        

    }

    previewColumn.appendChild(preview); 
    previewColumn.appendChild(buttonReset); 

    var recsColumn = document.createElement("div"); 
    recsColumn.className = "recs-column"; 

    var row1 = document.createElement("div"); 
    row1.className = "row";
    var h3 = document.createElement("h3"); 
    h3.innerHTML = "Text lightness";   
    var input1 = document.createElement("input");
    input1.setAttribute("type", "range");
    input1.setAttribute("min", "-200"); 
    input1.setAttribute("max", "200"); 
    input1.setAttribute("value", "0"); 
    input1.className = "sliderText";  
    input1.addEventListener("input", () => 
        updateRGB(text["nodeID"], true, text.fontSize)
        );       
    row1.appendChild(h3); 
    row1.appendChild(input1); 

    var row2 = document.createElement("div"); 
    row2.className = "row";
    var h32 = document.createElement("h3"); 
    h32.innerHTML = "Background lightness";   
    var input2 = document.createElement("input");
    input2.setAttribute("type", "range");
    input2.setAttribute("min", "-200"); 
    input2.setAttribute("max", "200"); 
    input2.setAttribute("value", "0"); 
    input2.className = "sliderBG"; 
    input2.addEventListener("input", () => 
        updateRGB(text["nodeID"], false, text.fontSize)

        
        );   
    row2.appendChild(h32); 
    row2.appendChild(input2); 

    recsColumn.appendChild(row1); 
    recsColumn.appendChild(row2); 


    var contrastColumn = document.createElement("div"); 
    contrastColumn.className = "contrast-column"; 
    var aaChecks = failedAll ? 
        "<span id='aa-fail'>&#10060; AA</span><span id='aaa-fail'>&#10060; AAA </span>" : 
        "<span id='aa-pass'>&#9989; AA</span><span id='aaa-fail'>&#10060; AAA </span>" ; 
    contrastColumn.innerHTML = "<h3>Contrast Ratio</h3>" + text["contrastRatio"] + "<br />&nbsp; <br />&nbsp;" + aaChecks; 


    contrastObject.appendChild(previewColumn); 
    contrastObject.appendChild(recsColumn); 
    contrastObject.appendChild(contrastColumn); 


    document.getElementById("page-check-fail").appendChild(contrastObject); 
}

function getRGB(colorObject) : string {
    var finalColor = "rgb("; 
    finalColor += Math.round(colorObject["r"] * 255) + ","; 
    finalColor += Math.round(colorObject["g"] * 255) + ","; 
    finalColor += Math.round(colorObject["b"] * 255) + ")"; 
    return finalColor;  
}

// rgb, hex conversions 
function rgbToHex(r:number, g:number, b:number) : string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

function updateRGB(id:string, updateText:boolean, fontSize:number) : void {
  
    // this gets hte amount to mod by 
    var inputRangeValue = (updateText) ? 
        (<HTMLInputElement> document.getElementById(id).getElementsByClassName("sliderText")[0]).value : 
        (<HTMLInputElement> document.getElementById(id).getElementsByClassName("sliderBG")[0]).value; 
    
    // this gets the initial values 
    var elementToUpdate: HTMLInputElement = <HTMLInputElement> document.getElementById(id).getElementsByClassName("preview")[0]; 
    var textColorInit = elementToUpdate.id.split(":")[0]; 
    var bgColor = elementToUpdate.id.split(":")[1]; 
    var initColorRGB = ((updateText) ? textColorInit : bgColor).split("rgb(")[1].split(")")[0].split(","); 
    var initColorHex = rgbToHex(parseInt(initColorRGB[0]), parseInt(initColorRGB[1]), parseInt(initColorRGB[2])); 
    var colorNew = getTintedColor(initColorHex, parseInt(inputRangeValue)); 
    var contrastRatio: number = 0; 
  
    // set text or background 
    if (updateText) {
      elementToUpdate.style.color = colorNew; 
    } else {
      elementToUpdate.style.backgroundColor = colorNew; 
    }

    var backgroundColor = (window.getComputedStyle(
        elementToUpdate).getPropertyValue(
            "background-color")).split("rgb(")[1].split(")")[0].split(","); 
    var textColor = (window.getComputedStyle(elementToUpdate).getPropertyValue("color")).split("rgb(")[1].split(")")[0].split(","); 
    contrastRatio = getContrast(
      Number(textColor[0]) / 255, Number(textColor[1]) / 255, Number(textColor[2]) / 255, 
      Number(backgroundColor[0]) / 255, Number(backgroundColor[1]) / 255, Number(backgroundColor[2]) / 255); 
  
  // send changes to parent 
    parent.postMessage({ pluginMessage: { type: 'update-colors', id: id, textColor:  textColor, backgroundColor: backgroundColor} }, '*');
  
    var aaChecks = ""; 
  
    if (((fontSize >= 19) && (contrastRatio < 3))  || ((fontSize < 19) && (contrastRatio < 4.5))) { 
      aaChecks = "<span id='aa-fail'>&#10060; AA</span><span id='aaa-fail'>&#10060; AAA </span>" ; 
    } else if (((fontSize >= 19) && (contrastRatio < 4.5))  || ((fontSize < 19) && (contrastRatio < 7))) { 
      aaChecks = "<span id='aa-pass'>&#9989; AA</span><span id='aaa-fail'>&#10060; AAA </span>" ; 
    } else {
      aaChecks = "<span id='aa-pass'>&#9989; AA</span><span id='aaa-pass'>&#9989; AAA </span>" ; 
    }
    // var contrastColumn = document.createElement("div"); 
    // contrastColumn.className = "contrast-column"; 
    document.getElementById(id).getElementsByClassName("contrast-column")[0].innerHTML = "<h3>Contrast Ratio</h3>" + contrastRatio + "<br />&nbsp; <br />&nbsp;" + aaChecks; 
    
  }

  function getTintedColor(color, v) {
    if (color.length >6) { color= color.substring(1,color.length)}
    var rgb = parseInt(color, 16); 
    var r = Math.abs(((rgb >> 16) & 0xFF)+v); if (r>255) r=r-(r-255);
    var g = Math.abs(((rgb >> 8) & 0xFF)+v); if (g>255) g=g-(g-255);
    var b = Math.abs((rgb & 0xFF)+v); if (b>255) b=b-(b-255);
    var rf = <String> (Number(r < 0 || isNaN(r)) ? 0 : ((r > 255) ? 255 : r).toString(16)); 
    if (rf.length == 1) rf = '0' + rf;
    var gf = <String> (Number(g < 0 || isNaN(g)) ? 0 : ((g > 255) ? 255 : g).toString(16)); 
    if (gf.length == 1) gf = '0' + gf;
    var bf = <String> (Number(b < 0 || isNaN(b)) ? 0 : ((b > 255) ? 255 : b).toString(16)); 
    if (bf.length == 1) bf = '0' + bf;
    return "#" + rf + gf + bf;
} 

function convertRGB(color) {
	if (color <= 0.04045) return color / 12.92;
	else return Math.pow((color + 0.055) / 1.055, 2.4);
};

function getContrast(tr, tg, tb, br, bg, bb) {
	var textLuminance =
		convertRGB(tr) * 0.2126 + convertRGB(tg) * 0.7152 + convertRGB(tb) * 0.0722;
	var bgLuminance = convertRGB(br) * 0.2126 + convertRGB(bg) * 0.7152 + convertRGB(bb) * 0.0722;
	var contrastRatio = (Math.max(textLuminance, bgLuminance) + 0.05) / (Math.min(textLuminance, bgLuminance) + 0.05);
    return parseFloat(contrastRatio.toFixed(2));
    
};
