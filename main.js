noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PosNet is initialized!");
}

function draw(){
    background('#0000FF');
    document.getElementById("square_side").innerHTML = "Width and Heightof square will be "+difference+"px"
    fill("#90EE90");
    stroke("#90EE90");
    square(noseX, noseY, difference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x: " + noseX+" nose y: " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX-rightWristX);
        console.log("right wrist: " + rightWristX+" left wrist " + leftWristX+" difference: "+ difference);
    }
}