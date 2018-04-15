var rors;

function setup() {
  createCanvas(1782, 1684);
  
  rors = loadImage('data/rorschach.png');
  
}

function draw() {
  background(255);
  rors.loadPixels();
  var index = round(constrain(mouseX / 8, 12, 32));
  for (var y=0; y<height; y+=index) {
    for (var x=0; x<width; x+=index) {
      var i = y * width + x;
      var saturation = (255 - rors.pixels[i*4]) / 255;
      var radius = index * saturation;
      ellipse(x, y, radius, radius);
    }
  }
}

