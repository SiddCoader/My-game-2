var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9;
var wall10, wall11,wall12, wall13, wall14, wall15, wall16, wall17, wall18;
var wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27;
var wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36;
var wall37, wall38, wall39;

var button1, button2, button3, button4, button5, button6, button7;
var button8, button9, button10, button11, button12, button13;

var score=0;
var PLAY=1;
var END=0;
var START=2;
var gameState=START;
var timer=120;
var doctor, doctor_img;
var vaccine, vacine_img, mask_imgL,mask_imgR,mask_imgC ;
var corona, corona_img;
var death, doctor;
var playimg, playbutton;
var win, winimg, edges, restart, restartimg, gameover, gameoverimg;

function preload(){
  doctor_img=loadImage("Images/soilder.jpeg");
  vaccine_img=loadImage("Images/hostage.png");
  corona_img=loadImage("Images/terrorist.jpeg");
  mask_imgL= loadImage("Images/money.png");
  mask_imgR= loadImage("Images/money.png");
  mask_imgC= loadImage("Images/money.png");
  restartimg=loadImage("Images/restart.png");
  gameoverimg=loadImage("Images/gameover.png");
  playimg=loadImage("Images/play button.png");
  winimg=loadImage("Images/w.jpg");
}

function setup() {
  createCanvas(600,600);
  deaths = 0;
  // Creating Doctor and displaying its image
  doctor=createSprite(45,50,15,15);
  doctor.addImage(doctor_img);
  doctor.scale=0.4;

  restart=createSprite(280,280,20,10);
  restart.addImage(restartimg);
  restart.scale=0.5;

  gameover=createSprite(300,200,20,10);
  gameover.addImage(gameoverimg);
  gameover.scale=2.0;

  playbutton=createSprite(540,550,20,10);
  playbutton.addImage(playimg);
  playbutton.scale=0.1;
  
  win=createSprite(300,250,20,20);
  win.addImage(winimg);
  win.scale=1.5;

  creation();
  
}

function draw() {
  background(104, 242, 113); 
  edges=createEdgeSprites();
  fill("black");
  textSize(14);
  text("1) Collect Money to unlock path and increase score.",10,520);
  text("2) Avoid obstacles, Terrorist and rescue the hostage.",10,550);
  text("3) Press Arrow keys to control the soilder, START button to continue.",10,580);
  fill("red");
  textSize(20);
  text("TIME IS LIMITED!!",340,540);

  // Initial conditions
  if(gameState===START){
  doctor.velocityX=0;
  doctor.velocityY=0;
  textSize(16);
  fill("#1f153f")
  text("TIME REMANING:"+Math.round(timer),400,30);
  text("SCORE: " + score,475,85);
  text("DEATHS:"+deaths,470,60);
  playbutton.visible=true;
  if(mousePressedOver(playbutton)){
    gameState=PLAY;
  }
}
  
  else if(gameState===PLAY){
    timer=timer-0.05;
    textSize(16);
    fill("#1f153f");
    text("TIME REMANING:"+Math.round(timer),400,30);
    text("SCORE: " + score,475,85);
    text("DEATHS:"+deaths,470,60);
    playbutton.visible=false;
    restart.visible=false;
    gameover.visible=false;
    doctor.velocityX=0;
    doctor.velocityY=0;
  
  //Moving the doctor sprite
  if(keyDown("up")){
    doctor.velocityX=0;
    doctor.velocityY=-5;
  }
  if(keyDown("down")){
    doctor.velocityX=0;
    doctor.velocityY=5;
  }
  if(keyDown("left")){
    doctor.velocityX=-5;
    doctor.velocityY=0;
  }
  if(keyDown("right")){
    doctor.velocityX=5;
    doctor.velocityY=0;
  }
// Movement and control of wall
if(doctor.isTouching(button1)){
  wall4.x=700;;  
  score=score+1;
  button1.x=900;
}
if(doctor.isTouching(button2)){
  wall5.x = 20;
  wall5.width=40;   
  score=score+1;
  button2.x=900;
}
if(doctor.isTouching(button3)){
 wall9.x=800;
 score=score+1;
 button3.x=900;
}
if (doctor.isTouching(button4)){
 wall15.x=900;
 score=score+1;
 button4.x=900;
}
if(doctor.isTouching(button5)){

 wall16.x = 176;
 wall16.y = 150;
 wall16.height=200;
 score=score+1;
 button5.x=900;
 corona1.velocityY=0;
}
if(doctor.isTouching(button6)){
  wall18.x=800;
  score=score+1;
  button6.x=900;
}
if(doctor.isTouching(button7)){
wall24.x=800;
score=score+1;
button7.x=900;
}
if(doctor.isTouching(button8)){
wall28.x = 350;
wall30.x = 350;
wall30.width=150
score=score+1;
button8.x=900;
}
if(doctor.isTouching(button9)){
wall30.x = 350;
wall30.width=150;
score=score+1;
button9.x=900;
}
if(doctor.isTouching(button10)){
wall39.x=800;
wall40.x=800;
score=score+1;
button10.x=900;
}
if(doctor.isTouching(button11)){
  wall31.x=800;
  wall33.x=800;
  wall35.x=800;
  corona3.velocityY=0;
  score=score+1;
  button11.x=900;
}
if(doctor.isTouching(button12)){
  wall36.x=800; 
  wall37.x=800;
  corona2.velocityX=0;
  score=score+1;
  button12.x=900;
}
if(doctor.isTouching(button13)){
  wall32.x=800;
  score=score+1;
  button13.x=900;
}

if(doctor.isTouching(wall11)||doctor.isTouching(wall12)||doctor.isTouching(wall13)||
doctor.isTouching(wall21)||doctor.isTouching(wall22)||doctor.isTouching(wall31) ||
doctor.isTouching(wall39) || doctor.isTouching(wall36)||doctor.isTouching(wall37)
||doctor.isTouching(corona1)||doctor.isTouching(corona2)||doctor.isTouching(corona3)){
   
  deaths = deaths + 1;
  doctor.x=25;
  doctor.y=15;
  reposition();
  corona2.x=440;
  corona2.y=450;
  
}

wall11.rotation = wall11.rotation + 2.5;
wall12.rotation = wall12.rotation + 2.5;
wall13.rotation = wall13.rotation + 2.5;
wall21.rotation = wall21.rotation + 0.5;
wall22.rotation = wall22.rotation + 0.5;
wall31.rotation = wall31.rotation - 2.5;

if(doctor.isTouching(vaccine)){

  win.visible=true;
  win.depth=10000;
  doctor.velocityX = 0;
  doctor.velocityY = 0;
  timer=0;
  restart.visible=false;
  gameover.visible=false;
  playbutton.visible=true;
}

//Game OVer Condition
if(deaths>=3 || timer<0){
  gameState=END;
  }
}

else if(gameState=== END){
  textSize(16);
  fill("#1f153f");
  text("TIME REMANING:"+Math.round(timer),400,30);
  text("SCORE: " + score,475,85);
  text("DEATHS:"+deaths,470,60);
  restart.visible=true;
  gameover.visible=true;
  playbutton.visible=true;
  restart.depth=1000;
  gameover.depth=1000;
  timer=0;
  doctor.x=25;
  doctor.y=25;

}

if(mousePressedOver(restart)){
reset();

corona2.bounceOff(edges);
corona2.bounceOff(wall20);
corona2.bounceOff(wall23);
corona2.bounceOff(wall24);
corona2.bounceOff(wall30);
corona2.bounceOff(wall38);

}

doctor.bounceOff(edges);

collision();

drawSprites();
 
}

function creation(){

  restart.visible=false;
  gameover.visible=false;
  win.visible=false;

//doctor.debug=true;
doctor.setCollider("rectangle",0,0,50,50);

//Vaccine and Virus
vaccine=createSprite(230,35,20,20);
vaccine.addImage(vaccine_img);
vaccine.scale=0.1;
//vaccine.debug=true;
vaccine.setCollider("circle",0,00,20);

// creating Corona virus
corona1=createSprite(130,340,30,30);
corona1.addImage(corona_img);
corona1.scale=0.2;
//corona1.debug=true;
//corona1.setCollider("circle",0,0,1);

corona2=createSprite(450,440,30,30);
corona2.addImage(corona_img);
corona2.scale=0.2;


corona3=createSprite(520,340,30,30);
corona3.addImage(corona_img);
corona3.scale=0.2;

//Create Maze

wall1 = createSprite(45,70,100,10);
wall2 = createSprite(175,60,10,120);

wall3 = createSprite(137.5,135,75,10); // button2
wall4 = createSprite(97.5,98,10,65);//button1

wall5 = createSprite(47.5,135,105,10); //orange button
wall6 = createSprite(250,100,150,10); // below vaccine
wall7 = createSprite(175,145,10,50); 

wall8 = createSprite(115,205,115,10);
wall9 = createSprite(25,205,75,10);
wall10 = createSprite(97,250,10,250);

wall11 = createSprite(50,250,50,10);
wall12 = createSprite(40,320,40,10);
wall13 = createSprite(50,370,30,10);

wall21 = createSprite(222,285,50,10);
wall22 = createSprite(222,285,10,50);

wall14 = createSprite(15,435,40,10);
wall15 = createSprite(97,430,10,120);

wall16 = createSprite(175,330,10,320);
wall17 = createSprite(137.5,320,107.5,10);

wall18 = createSprite(225,165,100,10);
wall19 = createSprite(362,150,100,10);
wall20 = createSprite(270,270,10,200);
wall19.rotation = 45;
wall17.rotation = 45;

wall23 = createSprite(270,380,10,60);
wall24 = createSprite(270,450,10,80);

wall25 = createSprite(312,395,85,10);
wall26 = createSprite(400,295,75,75);

wall27 = createSprite(470,295,65,10);

wall28 = createSprite(330,295,65,10);
wall29 = createSprite(400,232.5,10,50);

wall30 = createSprite(495,185,210,10);
wall31 = createSprite(430,125,10,55);

wall32 = createSprite(330,60,10,120);
wall33 = createSprite(350,35,40,10);
wall34 = createSprite(500,140,10,80);
wall35 = createSprite(350,85,40,10);

wall36 = createSprite(280,212.5,10,10);
wall37 = createSprite(340,250,10,10);
wall36.addImage(corona_img);
wall37.addImage(corona_img);
wall36.scale=0.04;
wall37.scale=0.04;

wall1.shapeColor = "grey";
wall2.shapeColor = "grey";
wall3.shapeColor = "grey";
wall4.shapeColor = "grey";
wall5.shapeColor = "grey";
wall6.shapeColor = "grey";
wall7.shapeColor = "grey";
wall8.shapeColor = "grey";
wall9.shapeColor = "grey";
wall10.shapeColor = "grey";

wall11.shapeColor = "red";
wall12.shapeColor = "red";
wall13.shapeColor = "red";
wall14.shapeColor = "grey";
wall15.shapeColor = "grey";
wall16.shapeColor = "grey";
wall17.shapeColor = "grey";

wall18.shapeColor = "grey";

wall19.shapeColor = "grey";
wall20.shapeColor = "grey";

wall21.shapeColor = "red";
wall22.shapeColor = "red";

wall23.shapeColor ="grey";
wall24.shapeColor = "grey";

wall25.shapeColor ="grey";
wall26.shapeColor = "grey";
wall27.shapeColor = "grey";
wall28.shapeColor = "grey";
wall29.shapeColor = "grey";
wall30.shapeColor = "grey";
wall31.shapeColor = "red";
wall32.shapeColor = "grey";

wall33.shapeColor = "grey";
wall34.shapeColor = "grey";
wall35.shapeColor = "grey";

wall38=createSprite(300,490,600,10);
wall38.shapeColor ="grey";

wall39=createSprite(410,125,10,10);
wall39.addImage(corona_img);
wall39.scale=0.06;


wall40 = createSprite(415,56,200,10);
wall40.rotation=32;
wall40.shapeColor="grey";

//Velocity to sprites
corona1.velocityY=-4;
corona2.velocityX=-7;
corona3.velocityY=-4;
wall36.velocityX = 2.5;
wall37.velocityX = -2.5;
wall39.velocityX=4;

button1 = createSprite(140,25,10,20);
button1.addImage(mask_imgL);
button1.scale=0.05;
button2 = createSprite(45,95,20,10);
button2.addImage(mask_imgC);
button2.scale=0.05;
button3 = createSprite(25,158,20,10);
button3.addImage(mask_imgC);
button3.scale=0.05;
button4 = createSprite(25,458,10,20);
button4.addImage(mask_imgR);
button4.scale=0.05;
button5 = createSprite(140,375,10,20);
button5.addImage(mask_imgL);
button5.scale=0.06;
button6 = createSprite(220,200,10,20);
button6.addImage(mask_imgR);
button6.scale=0.05;
button7 = createSprite(225,430,10,20);
button7.addImage(mask_imgL);
button7.scale=0.05;
button8 = createSprite(395,350,10,20);
button8.addImage(mask_imgC);
button8.scale=0.05;
button9 = createSprite(220,140,20,10);
button9.addImage(mask_imgC);
button9.scale=0.05;
button10 = createSprite(475,150,10,20);
button10.addImage(mask_imgL);
button10.scale=0.05;
button11 = createSprite(360,62,10,20);
button11.addImage(mask_imgC);
button11.scale=0.05
button12 = createSprite(300,170,10,20);
button12.addImage(mask_imgR);
button12.scale=0.05;
button13 = createSprite(370,110,10,20);
button13.addImage(mask_imgR);
button13.scale=0.05; 
}

function reset(){
  gameState=START;
  restart.visible=false;
  gameover.visible=false;
  timer=120;
  deaths=0;
  score=0;
  reposition();
}

function reposition(){
  wall4.x=97.5;
  wall5.x = 47.5;
  wall9.x=25;
  wall5.width=105;
  wall15.x=97;
  wall16.x = 175;
  wall16.y = 330;
  wall16.height=320;
  wall18.x=225;
  wall24.x=270;
  wall28.x = 330;
  wall30.x = 495;
  wall30.width=210;

wall39.x=410;
wall39.y=125;
wall40.x=415;
wall36.x=280; 
wall37.x=340;
wall32.x=330;
  
button1.x=160;
button2.x=45;
button3.x=25;
button4.x=5;
button5.x=160;
button6.x=188;
button7.x=255;
button8.x=395;
button9.x=220;
button10.x=485;
button11.x=350;
button12.x=285;
button13.x=350;

corona1.velocityY=-4;
corona2.velocityX=-7;
corona3.velocityY=-4;
wall36.velocityX = 2.5;
wall37.velocityX = -2.5;
wall39.velocityX=4;
  
}

function collision(){
  wall36.bounceOff(wall29);
  wall36.bounceOff(wall20);
  
  wall37.bounceOff(wall29);
  wall37.bounceOff(wall20);
  
  wall39.bounceOff(wall19);
  wall39.bounceOff(wall32);
  wall39.bounceOff(wall34);
  wall39.bounceOff(wall31);
  wall39.bounceOff(wall38);
  wall39.bounceOff(wall30);
  wall39.bounceOff(wall40);
  wall39.bounceOff(edges);
  
  corona1.bounceOff(edges);
  corona1.bounceOff(wall8);
  corona1.bounceOff(wall10);
  corona1.bounceOff(wall15);
  corona1.bounceOff(wall16);
  corona1.bounceOff(wall38);
  
  corona2.bounceOff(edges);
  corona2.bounceOff(wall20);
  corona2.bounceOff(wall23);
  corona2.bounceOff(wall24);
  corona2.bounceOff(wall30);
  corona2.bounceOff(wall38);
  
  corona3.bounceOff(edges);
  corona3.bounceOff(wall20);
  corona3.bounceOff(wall23);
  corona3.bounceOff(wall24);
  corona3.bounceOff(wall30);
  corona3.bounceOff(wall38);

  doctor.bounceOff(wall1);
  doctor.bounceOff(wall2);
  doctor.bounceOff(wall3);
  doctor.bounceOff(wall4);
  doctor.bounceOff(wall5);
  doctor.bounceOff(wall6);
  doctor.bounceOff(wall7);
  doctor.bounceOff(wall8);
  doctor.bounceOff(wall9);
  doctor.bounceOff(wall10);
  doctor.bounceOff(wall14);
  doctor.bounceOff(wall15);
  doctor.bounceOff(wall16);
  doctor.bounceOff(wall17);
  doctor.bounceOff(wall18);
  doctor.bounceOff(wall19);
  doctor.bounceOff(wall20);
  doctor.bounceOff(wall23);
  doctor.bounceOff(wall24);
  doctor.bounceOff(wall25);
  doctor.bounceOff(wall26);
  doctor.bounceOff(wall27);
  doctor.bounceOff(wall28);
  doctor.bounceOff(wall29);
  doctor.bounceOff(wall30);
  doctor.bounceOff(wall32);
  doctor.bounceOff(wall33);
  doctor.bounceOff(wall34);
  doctor.bounceOff(wall35);
  doctor.bounceOff(wall38);
  doctor.bounceOff(wall40);
}

