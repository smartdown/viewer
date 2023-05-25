---
title: 'Testing Telescope Image Manipulation'
smartdown: true
header: 'none'
---
3. divide by active filters

# :::: intro
# --outlinebox int
### Telescope Intro
Use this disclosable to put introductory information about the app.  
[Notes](/pages/telescopeProjectNotes) if you want to learn more about how I did this.
# --outlinebox
# ::::


# :::: loading
This page is reading telescope files.  Please be patient.
# ::::

# :::: F770
# --aliceblue
This is an explanation of what this filter does.
# --aliceblue
# ::::


# :::: panel
# --outlinebox p
This disclosable if for app controls
[F770W](::F770/tooltip) [](:XuseF770W) [](:-color1/0/5.9/0.1)[show settings](:=filter0=true)
F1000W [](:XuseF1000W) [](:-color2/0/5.9/0.1)[show settings](:=filter1=true)
F1130W [](:XuseF1130W) [](:-color3/0/5.9/0.1)[show settings](:=filter2=true)
F2100W [](:XuseF2100W) [](:-color4/0/5.9/0.1)[show settings](:=filter3=true)
[Redraw](:=redraw=true)
# --outlinebox
# ::::


```javascript /autoplay/kiosk
let dataNames = ['f770w', 'f1000w', 'f1130w', 'f2100w'];
let min = [10.0, 28.0, 40.0, 242.0];
let max = [25.0, 36.0, 60.0, 255.0];
let stretchFunction = ['x', 'x', 'x', 'x'];
let actualStretchFunction = [];
for (let i = 0; i < 4; i++){
  actualStretchFunction.push(new Function('x', 'return ' + stretchFunction[i] + ';'));
}
let activeFilter = 0;
let dataArrays = [];
smartdown.showDisclosure('panel','','transparent,bottomright,draggable,shadow,outline');
smartdown.showDisclosure('intro','','transparent,bottomleft,closeable,draggable,shadow,outline');
smartdown.setVariable('useF770W', false);
smartdown.setVariable('useF1000W', false);
smartdown.setVariable('useF1130W', false);
smartdown.setVariable('useF2100W', false);
smartdown.setVariable('redraw',false);
smartdown.setVariable('color1', 0);
smartdown.setVariable('color2', 0);
smartdown.setVariable('color3', 0);
smartdown.setVariable('color4', 0);
smartdown.setVariable('setFilter', dataNames[activeFilter]);
smartdown.setVariable('curveFunction', stretchFunction[activeFilter]);
smartdown.setVariable('min', min[activeFilter]);
smartdown.setVariable('max', max[activeFilter]);
smartdown.setVariable('saveSettings', false);
smartdown.setVariable('drawHistogram', false);
smartdown.setVariable('filter0', 'false');
smartdown.setVariable('filter1', 'false');
smartdown.setVariable('filter2', 'false');
smartdown.setVariable('filter3', 'false');


async function getImageData(filename) {
  const res = await fetch(filename);
  const array = await res.json();
  return array;
}


smartdown.showDisclosure('loading','','center,lightbox');
dataArrays.push(await getImageData('../../assets/data/f770.json'));
dataArrays.push(await getImageData('../../assets/data/f1000.json'));
dataArrays.push(await getImageData('../../assets/data/f1130.json'));
dataArrays.push(await getImageData('../../assets/data/f2100.json'));
smartdown.hideDisclosure('loading','','');


let nrows = dataArrays[0].length;
let ncols = 0;
if (nrows > 0) { ncols = dataArrays[0][0].length; }
     

this.div.style.width = '100%';
this.div.style.height = '100%';
this.div.style.margin = 'auto';
this.div.innerHTML = `<canvas id="appCanvas"></canvas>`
let canvas = document.getElementById("appCanvas"); 
let context = canvas.getContext("2d");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;


function sizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
sizeCanvas();


function drawHistogram() {
  let div = document.getElementById('div_playable_2')
  let data2d = dataArrays[activeFilter];
  let histData = [];
  let f = new Function('x', 'return ' + env.curveFunction + ';');
  let min = env.min;
  let max = env.max;
  for (let r=0; r < data2d.length; r++) {
    for (let c=0; c < data2d[0].length; c++) {
      let value = f(data2d[r][c]);
      if (value >= min && value <= max) { 
        histData.push(value);
      }
    }
  }
  let trace = {
    x: histData,
    type: 'histogram',
    name: 'Telescope Data'
  };
  let data = [trace];
  Plotly.newPlot(div, data);
}


function updateFilterVariables() {
  smartdown.setVariable('setFilter', dataNames[activeFilter]);
  smartdown.setVariable('curveFunction', stretchFunction[activeFilter]);
  smartdown.setVariable('min', min[activeFilter]);
  smartdown.setVariable('max', max[activeFilter]);
}


function saveFilterVariables() {
  stretchFunction[activeFilter] = env.curveFunction;
  actualStretchFunction[activeFilter] = new Function('x', 'return ' + stretchFunction[activeFilter] + ';');
  min[activeFilter] = env.min;
  max[activeFilter] = env.max;
}


function spectrumProcess(number){
  let answer = [0,0,0]
  if (number <= 1 && number >= 0){
    answer[1] = number
    answer[0] = 1
  }
  if (number <= 2 && number > 1){
    answer[0] = 1 - (number-1)
    answer[1] = 1
  }
  if (number <= 3 && number > 2){
    answer[2] = (number-2)
    answer[1] = 1
  }
  if (number <= 4 && number > 3){
    answer[1] = 1 - (number-3)
    answer[2] = 1
  }
  if (number <= 5 && number > 4){
    answer[0] = (number-4)
    answer[2] = 1
  }
  if (number <= 6 && number > 5){
    answer[2] = 1 - (number-5)
    answer[0] = 1
  }
  return answer
}


function getValue(value, i) {
    let c = 0;
  let newvalue = actualStretchFunction[i](value);
  let newmax = max[i];
  let newmin = min[i];
    if (newvalue > newmax) c = 255;
    else {
        if (newvalue > newmin) {
            c = (Math.round((newvalue - newmin) / (newmax - newmin) * 255))/activeFunctions();
        }
    }
    return c;
}


function activeFunctions() {
  let f = 0;
  if (env.useF770W) {f++; }
  if (env.useF1000W) {f++;}
  if (env.useF1130W) {f++;}
  if (env.useF2100W) {f++;}
  return f;
}


let xshift = 600;
let yshift = 200;


function draw() {
  let f1color = spectrumProcess(env.color1)
  let f2color = spectrumProcess(env.color2)
  let f3color = spectrumProcess(env.color3)
  let f4color = spectrumProcess(env.color4)
  let imagedata = context.createImageData(canvas.width, canvas.height);
  for (let y=0; y<canvas.height; y++) {
      for (let x=0; x<canvas.width; x++) {
        let ny = y + yshift;
        let nx = x + xshift;
        let pixelindex = (y * canvas.width + x) * 4;
        imagedata.data[pixelindex+0] = 0;
        imagedata.data[pixelindex+1] = 0;
        imagedata.data[pixelindex+2] = 0;
        imagedata.data[pixelindex+3] = 255;
        if (ny < nrows && nx < ncols) {
          if (env.useF770W){
            imagedata.data[pixelindex+0] += (getValue(dataArrays[0][ny][nx],0)*f1color[0]);
            imagedata.data[pixelindex+1] += (getValue(dataArrays[0][ny][nx],0)*f1color[1]);
            imagedata.data[pixelindex+2] += (getValue(dataArrays[0][ny][nx],0)*f1color[2]);
          }
          if (env.useF1000W){
            imagedata.data[pixelindex+0] += (getValue(dataArrays[1][ny][nx],1)*f2color[0]);
            imagedata.data[pixelindex+1] += (getValue(dataArrays[1][ny][nx],1)*f2color[1]);
            imagedata.data[pixelindex+2] += (getValue(dataArrays[1][ny][nx],1)*f2color[2]);
          }
          if (env.useF1130W){
            imagedata.data[pixelindex+0] += (getValue(dataArrays[2][ny][nx],2)*f3color[0]);
            imagedata.data[pixelindex+1] += (getValue(dataArrays[2][ny][nx],2)*f3color[1]);
            imagedata.data[pixelindex+2] += (getValue(dataArrays[2][ny][nx],2)*f3color[2]);
          }
          if (env.useF2100W){
            imagedata.data[pixelindex+0] += (getValue(dataArrays[3][ny][nx],3)*f4color[0]);
            imagedata.data[pixelindex+1] += (getValue(dataArrays[3][ny][nx],3)*f4color[1]);
            imagedata.data[pixelindex+2] += (getValue(dataArrays[3][ny][nx],3)*f4color[2]);
        }
      }
    }
  }
  context.putImageData(imagedata,0,0);
}


window.addEventListener('resize', function(event){
  sizeCanvas();
  draw();
});

this.dependOn = ['filter0','filter1', 'filter2', 'filter3', 'saveSettings','drawHistogram','redraw'];
this.depend = function() {

  // here's the repeated code that should be fixed
  if (env.filter0 == true) {
    smartdown.setVariable('filter0', false);
    activeFilter = 0;
    updateFilterVariables();
    drawHistogram();
    smartdown.showDisclosure('filterSettings','','center,closeable,lightbox');
  }

  if (env.filter1 == true) {
    smartdown.setVariable('filter1', false);
    activeFilter = 1;
    updateFilterVariables();
    drawHistogram();
    smartdown.showDisclosure('filterSettings','','center,closeable,lightbox');
  }

  if (env.filter2 == true) {
    smartdown.setVariable('filter2', false);
    activeFilter = 2;
    updateFilterVariables();
    drawHistogram();
    smartdown.showDisclosure('filterSettings','','center,closeable,lightbox');
  }

  if (env.filter3 == true) {
    smartdown.setVariable('filter3', false);
    activeFilter = 3;
    updateFilterVariables();
    drawHistogram();
    smartdown.showDisclosure('filterSettings','','center,closeable,lightbox');
  }

  // these events are triggered by the histogram popup
  if (env.saveSettings == true) {
    smartdown.setVariable('saveSettings', false);
    saveFilterVariables();  
  }

  if (env.drawHistogram == true) {
    smartdown.setVariable('drawHistogram', false);
    drawHistogram();  
  }
  if (env.redraw == true){
    smartdown.setVariable('redraw',false);
    draw();
  }
}


draw()



```
# :::: filterSettings
# --aliceblue
active filter: [](:!setFilter) [redraw histogram](:=redrawHistogram=true) [Save and Close](:=close=true)
min [](:?min|number) max [](:?max|number)
stretch function: [](:?curveFunction) [formatting tips](::formatting)
# :::: formatting
Enter a single variable function using variable `x`.  Functions need to be written in javascript.  
| Expression  | Javascript |
| ----------- | ----------- |
| $\ln(x)$          | `Math.log(x)`       |
| $x^5$                | `Math.exp(x,5)`      |
| $\text{asinh}(x)$  | `Math.asinh(x)`    |
You can find a list of javascript **Math** functions [here](https://www.w3schools.com/jsref/jsref_obj_math.asp).
# ::::
# --aliceblue

```javascript /plotly/autoplay

this.div.style.width = '100%';
this.div.style.height = '100%';
this.div.style.margin = 'auto';


smartdown.setVariable('redrawHistogram', false);
smartdown.setVariable('close', false);


this.dependOn = ['redrawHistogram','close'];
this.depend = function() {
  if (env.redrawHistogram == true) {
    smartdown.setVariable('redrawHistogram', false);
    smartdown.setVariable('saveSettings', true);
    smartdown.setVariable('drawHistogram', true);
  }
  if (env.close == true) {
    smartdown.setVariable('close', false);
    smartdown.setVariable('saveSettings', true);
    smartdown.hideDisclosure('filterSettings','','');
  }
}

```
# ::::
