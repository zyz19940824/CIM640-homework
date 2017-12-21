var centerX = 0;
var centerY = 0;
var bgColor;


var bgImage, bgImage2;

var bgChange, bgChange2;

var currentBgImage;

var hitZoneX = 200;
var hitZoneY = 200;

var hitZone1X = 400;
var hitZone1Y = 200;

var hitZone2X = 600;
var hitZone2Y = 300;

var hat;
var candy;
var bear;
var dinsour;
var christmas;
var jungle;




function preload() {
    bgImage = loadImage("assets/christmas.jpg");
    bgImage2 = loadImage("assets/jungle.jpg");
    hat = loadImage("assets/hat.png");
    candy = loadImage("assets/candy.jpg");
    bear = loadImage("assets/bear.jpg");
    dinsour = loadImage("assets/dinsour.png");
}

function setup() {
    createCanvas(800, 400);
    centerX = width / 2;
    centerY = height / 2;

    bgColor = color(255, 0, 0);


    bgChange = createButton("christmas");
    bgChange.position(600, 500);
    bgChange.mousePressed(changeBgFunction);

    bgChange2 = createButton("jungle");
    bgChange2.position(600, 500);
    bgChange2.mousePressed(changeBgFunction2);

    currentBgImage = bgImage;
}

function draw() {
    background(bgColor);

    image(currentBgImage, 0, 0, 800, 400);

    //console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
    centerX = mouseX;
    centerY = mouseY;
    fill(255)
    strokeWeight(1);

    function draw() {
        noStroke();
        fill("#723a2d");
        ellipse(centerX, centerY, 115, 97);

        //ear
        fill("#723a2d");
        arc(centerX - 32, centerY - 33, 35, 35, HALF_PI + QUARTER_PI, PI + 3 * QUARTER_PI);
        arc(centerX + 32, centerY - 32, 35, 35, PI + QUARTER_PI, TWO_PI + QUARTER_PI);

        //eye
        fill("black");
        ellipse(centerX + 7, centerY - 5, 10, 10);
        ellipse(centerX - 7, centerY - 5, 10, 10);


        //yuan
        noStroke();
        fill("white");
        ellipse(centerX, centerY + 10, 17, 22);

        //nose
        fill("black");
        ellipse(centerX, centerY + 3, 11, 7);

        //mouth
        stroke(0);
        line(centerX, centerY, posX, centerY + 10);
        line(centerX, centerY + 10, centerX - 5, centerY + 15);
        line(centerX, centerY + 10, centerX, centerY + 15);

    }


    //    if (mouseX == hitZoneX && mouseY == hitZoneY) {
    //        console.log("I am in the zone!!");
    //    }

    var hitZoneDist = dist(hitZoneX, hitZoneY, mouseX, mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    var hitZoneDist1 = dist(hitZone1X, hitZone1Y, mouseX, mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    var hitZoneDist2 = dist(hitZone2X, hitZone2Y, mouseX, mouseY);
    console.log("hitZoneDist: " + hitZoneDist);

    if (hitZoneDist <= 10 && currentBgImage == bgImage) {
        console.log("We are totally in the zone!");
        image(candy, 25, 125);
    }
    if (hitZoneDist <= 10 && currentBgImage == bgImage2) {
        console.log("We are totally in the zone!");
        image(hat, -50, -50);
    }

    stroke(0);
    strokeWeight(1);
    noFill();
    ellipse(hitZoneX, hitZoneY, 20, 20);


    stroke(0);
    strokeWeight(1);
    noFill();
    ellipse(hitZone2X, hitZone2Y, 20, 20);

}

function mousePressed() {
    bgColor = color(0, 255, 0);
}

function changeBgFunction() {
    currentBgImage = bgImage2;
    console.log("loading bgimage2");
}

function changeBgFunction2() {
    currentBgImage = bgImage;
}
