var posX = 0;
var posY = 0;

function setup() {
    createCanvas(1000, 500);
    background(125);
    background("#3dca97");


    posX = 200;
    posY = 150;
}

function draw() {
    noStroke();
    fill("#723a2d");
    ellipse(posX, posY, 115, 97);

    //ear
    fill("#723a2d");
    arc(posX - 32, posY - 33, 35, 35, HALF_PI + QUARTER_PI, PI + 3 * QUARTER_PI);
    arc(posX + 32, posY - 32, 35, 35, PI + QUARTER_PI, TWO_PI + QUARTER_PI);

    //eye
    fill("black");
    ellipse(posX+7, posY - 5, 10, 10);
    ellipse(posX-7, posY - 5, 10, 10);
    
   
    //yuan
    noStroke();
    fill("white");
    ellipse(posX, posY+10, 17,22);
    
    //nose
    fill("black");
    ellipse(posX, posY+3, 11,7);
    
    //mouth
    stroke(0);
    line(posX,posY,posX,posY+10);
    line(posX,posY+10,posX-5,posY+15);
    line(posX,posY+10,posX+5,posY+15);
    
}
