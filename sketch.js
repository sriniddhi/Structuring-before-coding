var database;
var gameState=0;
var playerCount=0;


function setup(){
  database = firebase.database();
  createCanvas(500,500);
  game=new Game()
  game.getState()
  game.start()
 
}

function draw(){
  background("white");
  
   
}

