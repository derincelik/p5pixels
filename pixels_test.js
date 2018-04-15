var rors;

function preload(){
rors = loadGif('data/rorschach.gif');
}


function setup() {
createCanvas(1800,1800);   
    
}

function draw() {
background(0);

  rors.loop();
  rors.hide();
  noStroke();
  fill(0);
}

function draw() {
  background(255);
  rors.loadPixels();
  var stepSize = round(constrain(mouseX / 8, 6, 32));
  for (var y=0; y<height; y+=stepSize) {
    for (var x=0; x<width; x+=stepSize) {
      var i = y * width + x;
      var darkness = (255 - rors.pixels[i*4]) / 255;
      var radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}

