/* Meme version 0   
   Lizz
   mmp210 week 5
*/

//global
var carlton;
var will;
var crying;
var hqdefault;
var steveWidth = 578 / 4;
var steveHeight = 878 / 4;
var f; //framecount
var r = 0;
var c = 10;

function preload() {
    carlton = loadImage("carlton.jpg");
    will = loadImage("will.jpg");
    crying = loadImage("crying.png");
    guys = loadImage("guys.jpg");
    steve = loadImage("steve.png");
    hqdefault = loadImage("hqdefault.jpg");
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
        image(crying, 0, 0, width, height);


    } else if (mouseX < width / 2 && mouseY > height / 2) {
        // quad 3
        image(will, 0, 0, width, height);
    } else {
        //quad 4
        image(guys, 0, 0, width, height);

    }


    steveWidth += .5;
    steveHeight += .5;
    image(steve, width / 2 - steveWidth / 2, height / 2 - steveHeight / 2, steveWidth, steveHeight);


    //    fill(`rgba(${r}, 0,0, .25)`);
    // alex we're not learning string literals!!
    fill(r, 0, 0, 63);

    r += c;
    rect(width / 2 - steveWidth / 2, height / 2 - steveHeight / 2, steveWidth, steveHeight);
    if (r > 255 || r < 1) {
        c *= -1
    }

    fill('white');
    textSize(20);
    var paragraph = "When you laughed at all the professors corny jokes ";
    text(paragraph, 15, 50);
    textStyle(BOLD);
    textSize(30);
    text("And they still fail you", 80, 550);
    fill('white');
    stroke(20);
    textFont('Tahoma');

    translate(width / 2, height / 2);
    var f = frameCount / 300 * PI;
    shearX(f);

    image(hqdefault, 60, 60);

}
