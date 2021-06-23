
function preload(){
  p1=loadAnimation("stickman (1).png","stickman (2).png")
  p2 = loadAnimation("stickman (6).png")
  bg = loadImage("bg.jpg")
}




function setup(){
    var canvas = createCanvas(1200,600);



    player1 = new player()
     platformA= new platform1()
     platformB=new platform2()
     platformC =new platform3()
}

function draw(){
    background("black");
    image(bg,0,-100,1200,600)
    text (mouseX+"  "+mouseY,-400,50)
   
    player1.characteristics()
    platformA.display()
    platformB.display()
    platformC.display()
    drawSprites()
   
}

