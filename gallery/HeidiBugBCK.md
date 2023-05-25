# :::: panel
# --outlinebox p

**Tweaking the variables**

|||||
|---|---|---|---|
|F090W | [](:XuseFilter1) | [](:-color1/0/5/0.1) | [:gear:](:=filter0=filter0+1)|
|F187N | [](:XuseFilter2) | [](:-color2/0/5/0.1) | [:gear:](:=filter1=filter1+1)|


** Debugging the variables **

[useFilter1](:!useFilter1) [color1](:!color1) [filter0](:!filter0)

[useFilter2](:!useFilter2) [color2](:!color2) [filter1](:!filter1)

[close](:!close) [filter1](:!filter1)

# ::::


```javascript /autoplay/kiosk
let dataNames = ['f090w', 'f187n', 'f200w', 'f335m', 'f444w', 'f470n'];
let min = [0.1, 0.1, 0.1, 0.1, 0.1, 0.1];
let max = [8.0, 85.0, 60.0, 40.0, 15.0, 75.0];
let stretchFunction = ['x', 'x', 'x', 'x', 'x', 'x'];
let actualStretchFunction = [];

for (let i = 0; i < 6; i++){
  actualStretchFunction.push(new Function('x', 'return ' + stretchFunction[i] + ';'));
}

let activeFilter = 0;
let dataArrays = [];
// smartdown.showDisclosure('intro', '', 'transparent,topleft,closeable,draggable,shadow,outline');
smartdown.showDisclosure('panel', '', 'transparent,bottomright,draggable,shadow,outline');
smartdown.setVariable('useFilter1', true);
smartdown.setVariable('useFilter2', true);
smartdown.setVariable('color1', 1);
smartdown.setVariable('color2', 2);
smartdown.setVariable('filter0', 0);
smartdown.setVariable('filter1', 0);


this.div.style.width = '100%';
this.div.style.height = '100%';
this.div.style.margin = 'auto';
this.div.innerHTML = `<canvas id="appCanvas"></canvas>`;
let canvas = document.getElementById("appCanvas"); 
let context = canvas.getContext("2d");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;


function sizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
sizeCanvas();


this.dependOn.color1 = () =>  {
  console.log('color1 dependOn called');
} 

this.dependOn.color2 = () =>  {
  console.log('color2 dependOn called');
} 

this.dependOn.useFilter1 = () =>  {
  console.log('useFilter1 dependOn called');
} 

this.dependOn.useFilter2 = () =>  {
  console.log('useFilter2 dependOn called');
} 

this.dependOn.filter0 = () =>  {
  console.log('filter0 dependOn called');
  if (env.filter0 > 0) {
    smartdown.showDisclosure('filterSettings', '', 'center,closeable,lightbox');
  }
} 

this.dependOn.filter1 = () =>  {
  console.log('filter1 dependOn called');
  if (env.filter1 > 0) {
    smartdown.showDisclosure('filterSettings', '', 'center,closeable,lightbox');
  }
}

this.dependOn.close = () =>  {
  console.log('close dependOn called');
  smartdown.setVariable('close', false);
  smartdown.hideDisclosure('filterSettings', '',  '');
}

// const promise = new Promise(function(resolve, reject) {
//   // Setting 1000 ms time
//   setTimeout(resolve, 1000);
// }).then(function() {
//   console.log('Wrapped setTimeout after 2000ms');
// });
// console.log('#awaiting');
// await promise;
// console.log('#after await');

```

# :::: filterSettings
# --aliceblue
Fake Filter Settings Dialog, mostly to demonstrate :negative_squared_cross_mark: and showing that the `Save and Close` button works.

[Save and Close :negative_squared_cross_mark:](:=close=true)
# ::::
# --aliceblue


