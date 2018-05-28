var sky;
var birdImg;
var bird;
var pipe;
var pipes=[];
function preload(){
    sky= loadImage("assets/bg.jpg");
    birdImg= loadImage("assets/bird.gif");
}
function setup(){
    createCanvas(852,480);
    bird= new Bird(birdImg);
    pipe= new Pipe();
    pipes.push(pipe);
}
function draw(){
    background(sky);
    bird.fall();
    bird.printBird();
    printPipes();
    addNewPipe();
    //pipe.printPipe();
}
function keyPressed(){
    const SPACE= 32;
    //console.log("Space is keyCode");
    if(keyCode=== SPACE){
        bird.up();
    }
}
function addNewPipe(){
    if(frameCount%125==0){
        pipes.push(new Pipe());
    }
}
function printPipes(){
    for( var i=0;i<pipes.length;i++){
        if(pipes[i].outOfScreen()){
            pipes.splice(i,1);
        }
        pipes[i].printPipe();
        if(bird.hit(pipes[i])){
            
            gameOver();
            
        }
    }
}
function gameOver(){
    fill("red");
    textSize(32);
    text("Game Over...",300,200);
    bird.fall();
            noLoop();
}