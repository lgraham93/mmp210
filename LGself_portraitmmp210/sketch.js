/*  
    self portrait
    v1
    mmp210 example week 2
*/
var eyecolor='275'; 
var facecolor= '350';
var bloodthickness='20';
var eary1='175';
var earx1='160';
var earx2='560';
var earsize1='250';
var eyeball='280';

function setup() {
	createCanvas(700, 700);
}

function draw() {
    //default
    background(220);
    //ears
    fill("black");
    ellipse(earx1,eary1,250);
    ellipse(earx2,eary1,250);
    
    //head
        stroke("none")
        fill("purple");
        ellipse(facecolor,facecolor,590);
    
    //eyes
        fill("white");
        ellipse(460,eyeball,110,200);
        ellipse(250,eyeball,110,200);
    
    //eyecolor
        fill("red");
        ellipse(260,eyecolor,100);
        ellipse(475,eyecolor,100);
    
    //mouth
    fill("white");
    ellipse(350, 510, 400, 310);
    
    //nose 
    fill("black");
    ellipse(350, 440, 300, 100);
    stroke("black");
    arc(350, 450, 20, 200, 0, PI);
    stroke("red");
    fill("pink");
    arc(345, 510, 200, 100, 0, PI);
    
    //blood
    fill("red");
    arc(300, 550, bloodthickness,200, 0, PI);
    arc(270, 540, bloodthickness,80, 0, PI);
    
}