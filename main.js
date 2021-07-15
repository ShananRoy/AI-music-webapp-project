song1=""
song2=""
song1_status=""
song2_status=""
rightWristX=0
rightWristY=0
leftWristX=0
leftWristY=0
scoreRightWrist=0
scoreLeftWrist=0

function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on('pose',gotPoses);
}

