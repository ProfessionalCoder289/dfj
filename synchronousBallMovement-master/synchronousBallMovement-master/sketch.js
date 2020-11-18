var canvas,backgroundImage,database;
var playerCount,gameState=0;
var f,g,p;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
g=new Game()
g.getState()
g.start()

}

function draw(){

}