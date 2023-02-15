function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(100,100,2);
  drawMetroid(100,0,1, "red");
  drawMetroid(-200,-50,1, "blue");
}

  
function drawMetroid(x,y,size,ifColor){
  push();
  translate(x,y);
  scale(size);
  
  colorMode(HSL)
  noStroke();
  
  fill(40,20,30);
  quad(150,180,130,230,150,250);//leftjaw
  quad(250,180,270,230,250,250);//rightjaw
  arc(200,225,50,50,310,340);//mouth
  fill(15,20,50,1);
  ellipse(170,150,30);//lefteye
  ellipse(230,150,30);//righteye
  ellipse(200,120,30);//mideye
  
  if(mouseX<100){
  fill(180,20,50,.6);
  } else if (mouseX>=100 && mouseX<=400)
    fill(15,20,50,.5);
   else {
  fill (120,20,50,.6);
  
}
  ellipse(200,150,200,150);//body
}
