canvas = "";

function preload() {
    peter_pan = loadSound("music2.mp3");
    default_song = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.center();
    video.hide();
}

function draw() {
    image(video, 0, 0, 500 ,500);

}

function play() {

}