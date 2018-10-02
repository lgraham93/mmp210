/*  
    self portrait
    v3-interact-ce
    mmp210 example week 4
    test
*/

var eyecolor = 275;
var facecolor = 350;
var bloodthickness = 20;
var eary1 = 175;
var earx1 = 160;
var earx2 = 560;
var earsize1 = 250;
var eyeball = 280;

//ear variables
var earx = 160;
var eary = 175;
var earx2 = 560;
var eary2 = 175;
var earsize1 = 250;
var earsize2 = 250;

//head variables
var headwidth = 350;
var headheight = 350;

//eyes variables
var eyex = 500;
var eyex2 = 250;
var eyey = 280;
var eyey2 = 280;
var eyewidth1 = 110;
var eyeweidth2 = 110;

//pupil variables
var pupilx = 400;
var pupilx2 = 475;
var pupily = 275;
var pupily2 = 275;
var pupilsize = 100;

//mouth variables
var cheekx = 350;
var cheeky = 510;
var cheekwidth = 400;

//nose variables
var nosex = 350;
var nosey = 440;
var nosewidth = 300; //edit
var lipx = 350;
var lipy = 450;
var lipwidth = 20;
var lipheight = 200


function setup() {
    createCanvas(700, 700);
}

function draw() {
    //default
    background(255);
    
    //ears
    fill("black");
    ellipse(earx1, eary1, 250);
    ellipse(earx2, eary1, 250);

    //head
    noStroke();
    fill("pink");
    ellipse(facecolor, facecolor, 590);

    //mouth
    fill("white");
    ellipse(350, 510, 400, 310);
    ellipse(earx, eary, 250);
    ellipse(earx2, eary2, 250);
    
    
    
    //head
    noStroke();
    var g=map(mouseX, 100, width, 50, 200);
    var r = map(mouseX, 0, width, 255, 200);
    fill(r, g, 100);
    ellipse(headwidth, headheight, 590);
   
    
    //eyes
    fill("white");
    ellipse(eyex, eyey, 110, 200);
    ellipse(eyex2, eyey2, 110, 200);
    
    //eyecolor
    r = map(mouseX, 20, height,100, 255);
    fill(r, 0, 100);
    pupilx = mouseX;
    pupilx2 = mouseX + 250;
    ellipse(pupilx, pupily, 100);
    ellipse(pupilx2, pupily2, 100);
    
    //cheeks
    fill("white");
    ellipse(cheekx, cheeky, 450, 310);
    //nose 
    fill("black");
    ellipse(nosex, nosey, nosewidth, 100);
    stroke("black");
    //mouth
    stroke("red");
    fill("red");
    arc(345, 510, 100, 200, 0, PI);

}
