var p0, p1, p2, p3, p4, p5, p6, p7, p8;
var px = [];
var py = [];
var right = [];
var choose;
var start;
var end;
var score;

function preload() {
  p0 = loadImage("assets/p0.png");
  p1 = loadImage("assets/p1.png");
  p2 = loadImage("assets/p2.png");
  p3 = loadImage("assets/p3.png");
  p4 = loadImage("assets/p4.png");
  p5 = loadImage("assets/p5.png");
  p6 = loadImage("assets/p6.png");
  p7 = loadImage("assets/p7.png");
  p8 = loadImage("assets/p8.png");
}

function setup() {
  createCanvas(1200, 800);

  for (var i=0; i<9; i++) {
    px.push(random(50, 800));
    py.push(random(100, 600));
    right.push(0);
  }
  
  score = 0;
  choose = -1;
  start = millis();
}

function draw() {
  background(255);
  
  noFill();
  stroke(125);
  rect(100, 80, 1000, 660);
  line(433, 80, 433, 740);
  line(767, 80, 767, 740);
  line(100, 300, 1100, 300);
  line(100, 520, 1100, 520);

  fill(125);
  noStroke();
  textSize(24);
  text("Drag the pictures into the right place.", 100, 50);
  text("Time: ", 800, 50);
  if(score<9){
    text(int((millis()-start)/1000),920,50);
  }else{
    fill(0,255,0);
    text(int((end-start)/1000),920,50);
  }
  fill(125);
  text("sec",1000,50);

  image(p0, px[0], py[0], 333, 220);
  image(p1, px[1], py[1], 333, 220);
  image(p2, px[2], py[2], 333, 220);
  image(p3, px[3], py[3], 333, 220);
  image(p4, px[4], py[4], 333, 220);
  image(p5, px[5], py[5], 333, 220);
  image(p6, px[6], py[6], 333, 220);
  image(p7, px[7], py[7], 333, 220);
  image(p8, px[8], py[8], 333, 220);

  if (choose < 0 & mouseIsPressed) {
    for (var i=0; i<9; i++) {
      if (right[i]==0 & mouseX>px[i] & mouseX<px[i]+333 & mouseY>py[i] & mouseY< py[i]+220) {
        choose = i;
      }
    }
  } else if (choose >= 0 & !mouseIsPressed) {
    choose = -1;
  }

  if (choose >=0 & mouseIsPressed) {
    px[choose] = mouseX-170;
    py[choose] = mouseY-110;
  }
  
  for (var i=0; i<3; i++) {
    for (var j=0; j<3; j++) {
      if (right[j*3+i]==0 & abs(px[j*3+i]-100-333*i)<15 & abs(py[j*3+i]-80-220*j)<10) {
        right[j*3+i] = 1;
        px[j*3+i] = 100+333.3*i;
        py[j*3+i] = 80+220*j;
        score += right[j*3+i];
        if(score == 9)end = millis();
        choose = -1;
      }
    }
  }
  
}