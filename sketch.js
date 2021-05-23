const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();
// connsole.log(responseJSON);
  var datetime = responseJSON.currentDateTime;
   var hour = datetime.slice(11, 13);
   if(hour <= 06 && hour >= 19)   {
       bg = ("sunrise1.png")
   }

}
