noseX = 0
noseY = 0
leftwristX = 0
rightwristX = 0
difference = 0

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(550,150);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#e6c847');
    fill('#ffbf8f');
    stroke('#ff9d52');
    square(noseX, noseY, difference);
}

function modelloaded(){
    console.log("model loaded");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("Nose X: " + noseX + "  Nose Y: " + noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("Left Wrist X: " + leftwristX + " Right Wrist X: " + rightwristX + " Difference: " + difference);
    }
}