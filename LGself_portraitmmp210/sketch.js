/*  
    self portrait
    v1
    mmp210 example week 2
*/

function setup() {
	createCanvas(700, 700);
}

function draw() {
    //default
    stroke("white")
    fill("red")
    background(220);
    //head
        fill("black")
        ellipse(350,350,600);
    //eyes
        
        fill("white")
        ellipse(460,280,110,200);
        ellipse(250,280,110,200);
        ellipse(250,280,100)
    //mouth
    ellipse(350, 510, 400, 310);
    fill("black")
    ellipse(350, 440, 300, 100);
    line()
}