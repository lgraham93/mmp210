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
    background(220);
    //ears
    fill("black");
    ellipse(160,175,250);
    ellipse(560,175,250);
    //head
        stroke("none")
        fill("purple");
        ellipse(350,350,590);
    //eyes
        fill("white");
        stroke("none");
        ellipse(460,280,110,200);
        ellipse(250,280,110,200);
        fill("red");
        ellipse(260,275,100);
        ellipse(475,275,100);
    //mouth
    fill("white");
    ellipse(350, 510, 400, 310);
    fill("black");
    ellipse(350, 440, 300, 100);
    stroke("black");
    arc(350, 450, 20, 200, 0, PI);
    stroke("red");
    fill("pink");
    arc(345, 510, 200, 100, 0, PI);
    
    //blood
    fill("red");
    arc(300, 550, 20,200, 0, PI);
    arc(270, 540, 20,80, 0, PI);
    
}