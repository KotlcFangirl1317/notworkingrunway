class platform3{
    constructor(){
       this. platform=createSprite(2700,600,1000,50)
       this.i = loadImage("p2.jpg")
        
       this. platform.shapeColor="brown"
       this. platformd=createSprite(2700,600,1000,50)
       // this.platformd.visible=false
        this.platform.visible=false
    
       // this.tower=createSprite(500,200,200,50)
    }

    display(){
       imageMode(CENTER)
      //image (this.i,2700,500,1000,300)
    }
    
    }