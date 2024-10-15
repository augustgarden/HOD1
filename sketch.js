let B, L, R, La, Lb, Lc, Ld, Le, Lf, M, Gf, Ga, Gb, Gc, Gd, Ge;
let mic;
let mode = 0;
let micLevel =0;
let audioContext;
let micStarted = false;
let curState = 1;

function preload() {
  B = loadImage('img/mount-B.png');
  L = loadImage('img/mount-L.png');
  R = loadImage('img/mount-R.png');
  La = loadImage('img/lar-1.png');
  Lb = loadImage('img/lar-2.png');
  Lc = loadImage('img/lar-3.png');
  Ld = loadImage('img/lar-4.png');
  Le = loadImage('img/lar-5.png');
  Lf = loadImage('img/lar-6.png');
  M = loadImage('img/moon.png');
  Ga = loadImage('img/grass-a.png');
  Gb = loadImage('img/grass-b.png');
  Gc = loadImage('img/grass-c.png');
  Gd = loadImage('img/grass-d.png');
  Ge = loadImage('img/grass-e.png');
  Gf = loadImage('img/grass-f.png');
}


function startMic() {
  if (!micStarted) {
    getAudioContext().resume();
    mic.start();
  } else {
    mic.stop();
  }

  micStarted = !micStarted;
}


function setup() {
  createCanvas(375, 812);
  mic = new p5.AudioIn();
  mic.start();
  getAudioContext().resume();

  angleMode(DEGREES);
  imageMode(CENTER);
  startMicButton = createButton("Start Mic").position(20, 10).mousePressed(startMic);

  audioContext = getAudioContext();
}


function draw(){

 
  if(curState ==1) stage1();
  if(curState ==2) stage2();
  
  
}



function stage1(){
  background(200);
  image(M,150,200);

}


function stage2(){
  micLevel = mic.getLevel();

  mountain();

//     if (frameCount % 180 == 0){
//       mode++;
//   }
//   if (mode == 0){
//       mountain();
//   }
//   else if (mode == 1){
//       larva();
//   }
//   else if (mode == 2){
//     grass();
// }
//   else {
//       moon();
//   if(frameCount % 720 == 0) 
//       mode=0;
//   }

  text(mouseX +' ' + mouseY, mouseX, mouseY);

  console.log(micLevel);
  startMicButton.hide();
}


function mousePressed() {
  if (
    mouseX > 0 &&
    mouseX < windowWidth &&
    mouseY > 0 &&
    mouseY < windowHeight
  ) {
    
    curState = 2;
    let fs = fullscreen();
    fullscreen(!fs);
  }
  
}

function mountain(){
  background('#C9E5FF');

  let value = map(micLevel, 0,1,0,100);
  text(value,50,100);
  
  push();
    imageMode(CORNER);
    translate(20,410);
    rotate(value*2);
    image(L, 0, 0-value*4);
  pop();

  push();
    rotate(0);
    image(R, 270, 570+value-80);
  pop();

  push();
    image(B, 190, 400-value*6-100);
  pop();
}




function larva(){
  background('#76D4E0');
 
  let value = micLevel*30;
  text(value,50,100);
  
  push();
    image(La, 190+value*20, 170);
    image(Lb, 190-value*20, 300);
    image(Lc, 190+value*20, 410);
    image(Ld, 190-value*20, 500);
    image(Le, 190+value*20, 595);
    image(Lf, 190-value*20, 680);
  pop();
}




function moon(){
  background('#373640');
  let value = micLevel*30;
  text(value,50,100);
  
  push();
    let angle = frameCount * 0.1;
    rotate(angle);
    tint(255, 100+value*50);
    image(M, 190, 400);
  pop();
  push();
    let angle2 = frameCount* 0.1;
    rotate(angle2);
    tint(255, 100+value*50);
    image(M, 500, 50);
  pop();
}



function grass(){
  background('#D1C52C');
  let value = micLevel*50;
  text(value, 50, 100);

  push();
    translate(-20,700);
    rotate(value*2);
    image(Ga, 0, 0);
  pop();
  push();
    translate(110,630);
    rotate(-value);
    image(Gb, 0, 0);
  pop();
  push();
    translate(200,570);
    rotate(value);
    image(Gc, 0, 0);
  pop();
  push();
    translate(280,570);
    rotate(-value);
    image(Gd, 0, 0);
  pop();
  push();
    translate(340,680);
    rotate(value);
    image(Ge, 0, 0);
  pop();
  push();
    translate(190, 750);
    rotate(-value);
    image(Gf, 0, 0);
  pop();


  push();
    translate(-20,220);
    rotate(-value*2);
    image(Ga, 0, 0);
  pop();
  push();
    translate(110,170);
    rotate(value);
    image(Gb, 0, 0);
  pop();
  push();
    translate(200,110);
    rotate(-value);
    image(Gc, 0, 0);
  pop();
  push();
    translate(280,110);
    rotate(value);
    image(Gd, 0, 0);
  pop();
  push();
    translate(340,210);
    rotate(value);
    image(Ge, 0, 0);
  pop();
  push();
    translate(190, 290);
    rotate(value);
    image(Gf, 0, 0);
  pop();
}
