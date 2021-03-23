
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine;
var world;
var Bg;
var ground;
var SMN;
var b1;
var b2;
var b3;
var b4;
var b5;
var b6;
function preload() {
//preload the images here
Bg = loadImage("bg.jpg");
}

function setup() {
  createCanvas(3000, 800);
  // create sprites here


  engine = Engine.create();
  world = engine.world;

  ground = new Ground (200,700,2000,30);
  SMN = new superman(400,400);
  b1 = new B (400,600,100,100);
}

function draw() {
  background(Bg);

ground.display();
SMN.display();
b1.display();

 // drawSprites();
 
}

