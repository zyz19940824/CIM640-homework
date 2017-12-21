var interfaceItems = [];

var brushSize = 20;

var brushShape;

var brushColor;

function setup() {
    createCanvas(600, 500);
    brushShape = ellipse;
    brushColor = 0;
    interfaceItems.push(new interface(100, 450, 30, color(0, 0, 0)));
    interfaceItems.push(new interface(150, 460, 20, color(0, 0, 0)));
    interfaceItems.push(new interface(100, 250, 25, color(255, 0, 255)));
    interfaceItems.push(new interface(100, 300, 25, color(255, 0, 0)));
    interfaceItems.push(new interface(100, 350, 25, color(0, 255, 0)));
}


function draw() {
    fill(brushColor);
    brushShape(mouseX, mouseY, brushSize, brushSize);
    interfaceItems[0].check();
    interfaceItems[0].display();
    interfaceItems[1].check();
    interfaceItems[1].display();
    interfaceItems[2].check();
    interfaceItems[2].display();
    interfaceItems[3].check();
    interfaceItems[3].display();
    interfaceItems[4].check();
    interfaceItems[4].display();
    //console.log(interfaceItems[0].check());
}

function mousePressed() {
    if (interfaceItems[0].check() == true) {
        console.log("pressed large black button");
        brushSize++;
    }

    if (interfaceItems[1].check() == true) {
        brushSize--;
    }
    if (interfaceItems[2].check() == true) {
        brushShape = rect;
    }
    if (interfaceItems[3].check() == true) {
        brushColor = "Red";
    }
    if (interfaceItems[4].check() == true) {
        brushColor = "Green";
    }
}


function interface(tempX, tempY, tempBoxSize, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.setFill = tempColor;
    this.overlay = false;

    this.display = function () {
        fill(this.setFill);
        rect(this.x, this.y, this.boxSize, this.boxSize);

        if (this.overlay == true) {
            fill(130, 200);
            rect(this.x, this.y, this.boxSize, this.boxSize);
        }
    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)) {
            this.overlay = true;
            return true;
        } else {
            this.overlay = false;
            return false;
        }
    }

}
