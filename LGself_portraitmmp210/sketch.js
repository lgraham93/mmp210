/*  
    self portrait
    v1
    mmp210 example week 2
*/

//ear variables
var earx='160';
var eary='175';
var earx2='560';
var eary2='175';
var earsize1='250';
var earsize2='250';

//head variables
var headwidth='350';
var headheight='350';

//eyes variables
var eyex='460';
var eyex2='280';
var eyey='280';
var eyey2='280';
var eyewidth1='110';
var eyeweidth2='110';

//pupil variables
var pupilx='260';
var pupilx2='475';
var pupily='275';
var pupily2='275';
var pupilsize='100';

//mouth variables
var cheekx='350';
var cheeky='510';
var cheekwidth='400';

//nose variables
var nosex='350';
var nosey='440';
var nosewidth='300'; //edit
var lipx='350';
var lipy='450';
var lipwidth='20';
var lipheight='200'



function setup() {
	createCanvas(700, 700);
}

function draw() {
    //default
    background(220);
    //ears
    fill("black");
    ellipse(earx,eary,250);
    ellipse(earx2,eary2,250);
    //head
        stroke("none")
        fill("purple");
        ellipse(headwidth,headheight,590);
    //eyes
        fill("white");
        ellipse(eyex,eyey,110,200);
        ellipse(eyex2,eyey2,110,200);
    //eyecolor
        fill("red");
        ellipse(pupilx,pupily,100);
        ellipse(pupilx2,pupily2,100);
    //mouth
    fill("white");
    ellipse(cheekx, cheeky, 400, 310);
    
    //nose 
    fill("black");
    ellipse(nosex, nosey, 300, 100);
    stroke("black");
    arc(350, 450, 20, 200, 0, PI);
    stroke("red");
    fill("pink");
    arc(345, 510, 200, 100, 0, PI);
    
}