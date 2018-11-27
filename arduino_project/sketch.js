/*
arduino + p5 example
*/

var serial;
var portName = "COM7"
var sensorValue;

function setup() {
    createCanvas(640, 360);

    serial = new p5.SerialPort();
    serial.on('connected', serverConnected);
    serial.on('open', portOpen);
    serial.on('data', serialEvent);
    serial.on('error', serialError);
    serial.on('close', portClose);

    serial.open(portName);
}

function serverConnected() {
    console.log("connected");

}

function portOpen() {
    console.log("port open");
}

function portClose() {
    console.log("port closed");

}


function serialError() {
    console.log("error");
}

function serialEvent() {
    var currentString = serial.readLine();
    trim(currentString);
    if (!currentString) {
        return;
    }
    sensorValue = currentString;
}

function preload() {
    balloon = loadImage("balloon.png");
}

var balloon;

function draw() {
    var c = map(sensorValue, 0, 1023, 0, 255);
    //sky
    background(100,200,200);

    var y = map(sensorValue, 0, 900, height, 0);
    //hair
     fill('orange');
    ellipse(230,100,400)
    //head
     fill('blue');
    ellipse(230,200,300)
    //nose
     fill('red');
    ellipse(230,200,100)
    //mouth
     fill('purple');
    ellipse(230,300,20)
    //eye
    noStroke();
    fill('yellow');
    ellipse(310, 175, 20);
    ellipse(170, 175, 20);
    
    //balloon
     var s = map(sensorValue, 0, 900, 200, 600);
    image(balloon, 300, 50, s, s);

}
