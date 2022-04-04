function setup() {
  createCanvas(450, 400);

  //create sprite for flag stripes using function by passing parameters of x position and color
  createStripes(x,blockColor){
  var Stripes=createSprite(x,200,75,150,blockColor);
  Stripes.shapecolor=blockColor;
}
  //Stripe 1 : x-position : 140, color : "blue"
  createStripes(140,"blue");
  createStripes(215,"white");
  createStripes(290,"red");
  //Stripe 1 : x-position : 215, color : "white"

  //Stripe 1 : x-position : 290, color : "red"
}

function draw() {
  background("honeydew");
 
  drawSprites();
}
