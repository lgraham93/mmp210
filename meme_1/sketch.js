/* Meme version 0   
   Lizz
   mmp210 week 5
*/

var bman;//global
var carlton;

function preload() {
	carlton = loadImage("carlton.jpg");
}

function setup (){
    createCanvas (400,400);
    
}

function draw(){
    background('none');
        // quad 1
    if (mouseX < width/2 && mouseY < height/2) {
        fill("blue");
        rect(0, 0, width/2, height/2); 
    
    } else if (mouseX > width/2 && mouseY < height/2) {
        //quad 2
        fill("green");
        rect( width/2, 0, width/2, height/2)
    } else if ( mouseX < width/2 && mouseY > height/2) {
        // quad 3
        fill("orange");
        rect( 0, width/2, width/2, height/2);
    } else {
        //quad 4
        fill("purple")
        rect(width/2, height/2, width/2,height/2);  
    }      

     var paragraph= "When your professor tells a corny joke";
    text(paragraph, 40, 20, 300, 100);
    fill('white');
	textStyle(ITALIC);
	text("But you need those 3 credits", 60, 475);
    fill('white');
    stroke(20);
    textSize(30);
	textFont('Helvetica');
  

}
