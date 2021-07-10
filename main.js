nose_x = 0;
nose_y = 0;

lip_x = 0;
lip_y = 0;

function preload(){
    mustache = loadImage('mustache2.png');
    lips_stick = loadImage('lip.png')
}

function setup() {
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , getPoses);
}

function draw(){
 image(video,0,0,400,400);
 image(mustache,nose_x,nose_y,70,30);
 image(lips_stick,lip_x,lip_y,70,25);
}

function modelLoaded() {
    console.log("Pose Net is intialized");
}

function getPoses(results) {
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-35;
        nose_y = results[0].pose.nose.y+5;
        lip_x = results[0].pose.nose.x-35;
        lip_y = results[0].pose.nose.y+32;
        
    }
    
}

function take_snapshot() {
    save('mustache.png');
}