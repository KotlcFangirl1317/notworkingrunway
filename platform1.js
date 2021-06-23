class platform1{
constructor(){
   this. platform=createSprite(500,450,1000,300)
   this. platform.shapeColor="brown"
   this. platformd=createSprite(500,451,1000,300)
    this.platformd.visible=false

    this.tower=createSprite(500,150,200,210)
    this.ti = loadImage("antenna tower.png")
    this.tower.visible=false

    
}

display(){
    imageMode(CENTER)
    image (this.ti,500,105,300,400)
 }
 

}