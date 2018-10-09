/* Meme version 0   
   Lizz
   mmp210 week 5
*/

var bman;//global

function preload() {
	carlton= loadImage("carlton.jpg");
}

function setup (){
    createCanvas (600,500);
    
}

function draw(){
    
    	image(carlton, 0, 0, width,height);
    
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
