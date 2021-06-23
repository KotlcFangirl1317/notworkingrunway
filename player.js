class player{

constructor(){
   this. playerm = createSprite(150,300,30,70)
    this.playerm.addAnimation("running", p1)
    this.playerm.addAnimation("bending", p2)
    this.playerm.debug=true
}

move(){
    this.playerm.velocityX=10
  
  
    if(keyDown("LEFT_ARROW"))
    {
     this. playerm.velocityX=-4
    }
  
    
    if(keyDown("UP_ARROW"))
    {
      
      console.log("WORKING")
      this.playerm.velocityY=-20
    }
    
    if(keyWentDown("DOWN_ARROW"))
    {
        this.playerm.setCollider("circle",0,20,30)
      console.log("WORKING")
      this.playerm.changeAnimation("bending", p2)
      
      
    }
    if(keyWentUp("DOWN_ARROW")){
      this.playerm.changeAnimation("running",p1)
      this.playerm.setCollider("rectangle",0,20,50,150)
    }
    
}



characteristics(){
    
    this.playerm.collide(platformA.platformd)
    this.playerm.collide(platformB.platformd)
    this.playerm.collide(platformC.platformd)
    this.playerm.collide(platformA.tower)
    this.playerm.velocityY=this.playerm.velocityY+0.8


      
    if(this.playerm.isTouching(platformA.platform)||this.playerm.isTouching(platformB.platform)||this.playerm.isTouching(platformC.platform)){
       this.move()
      }

       
     camera .position.x=this.playerm.x
     camera .position.y=this.playerm.y
 
}



}