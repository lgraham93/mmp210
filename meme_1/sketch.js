/* Meme version 0   
   Lizz
   mmp210 week 5
*/

//global
var carlton;
var simonc;
var raw;
var crying;

function preload() {
    carlton = loadImage("carlton.jpg");
    raw = loadImage("raw.png");
    crying=loadImage("crying.png");
    guys=loadImage("guys.jpg");
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

    var paragraph = "When your professor tells a corny joke ";
    text(paragraph, 15, 50);
    fill('white');
    textStyle(BOLD);
    text("But you need those 3 credits", 80, 550);
    fill('white');
    stroke(20);
    textSize(30);
    textFont('Tahoma');


}
