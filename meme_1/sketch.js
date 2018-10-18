/* Meme version 0   
   Lizz
   mmp210 week 5
*/

//global
var carlton;
var simonc;
var raw;
var crying;
var steveWidth=578/4;
var steveHeight=878/4;
var r = 0;
var c = 10;

function preload() {
    carlton = loadImage("carlton.jpg");
    raw = loadImage("raw.png");
    crying=loadImage("crying.png");
    guys=loadImage("guys.jpg");
    steve=loadImage("steve.png");
}

function setup() {
    createCanvas(600, 600);


}


function draw() {

    background('none');
    // quad 1

    if (mouseX < width / 2 && mouseY < height / 2) {
        image(carlton, 0, 0, width, height);

    } else if (mouseX > width / 2 && mouseY < height / 2) {
        //quad 2
        image(crying, 0, 0,width, height);
    
        
    } else if (mouseX < width / 2 && mouseY > height / 2) {
        // quad 3
        image(raw, 0, 0,width, height);
    } else {
        //quad 4
        image(guys,  0, 0,width, height);

    }


    steveWidth += .5;
    steveHeight +=.5;
     image(steve, width/2 - steveWidth/2, height/2 - steveHeight / 2, steveWidth, steveHeight);


    fill(`rgba(${r}, 0,0, .25)`);

    r += c;
    rect(width/2 - steveWidth/2,height/2 - steveHeight / 2,steveWidth,steveHeight);
    if (r > 255 || r < 1) {
        c *= -1
    }

    fill('white');
    var paragraph = "When your professor tells a corny joke ";
    text(paragraph, 15, 50);
    textStyle(BOLD);
    text("But you need those 3 credits", 80, 550);
    fill('white');
    stroke(20);
    textSize(30);
    textFont('Tahoma');
}
