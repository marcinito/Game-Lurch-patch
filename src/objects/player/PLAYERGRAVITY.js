export const PLAYERGRAVITY=(player,WALL,can)=>{

//paW- particular array with wall

//STRENGHT GRAVITY
player.posY+=player.strenghtGravity
player.doFall=true


WALL.forEach((pAW,pAI,wallArray)=>{
    //pE-particular Element wall title
  pAW.forEach((title,pI,pArr)=>{
    player.detectBlokJump.canMonsterJump(title)
    //CONTACT PLAYER WITH TITLE FROM WALL
    if(player.posX+player.size<title.posX || player.posX>title.posX+title.size ||
         player.posY+player.size<title.posY || player.posY>title.posY+title.size){

         }
         else{
     
          //HORIZONTAL WALL CONTACT WITH PLAYER
          if(title.direction==="horizontal"){
            
      //When player touch horizontal element on top
   
            if(player.posY+player.size>title.posY-1 && title.posY>player.posY&&player.posY+player.size<title.posY+title.size/6){
              //Gravity dont work when player stand on block
   
            let deepCollision=player.posY+player.size-title.posY
            player.posY-=deepCollision
              player.down=false
             title.color="white"
             player.up=true
             player.counterJump=0
             player.doFall=false
            }
            //Move Left
            if(player.posX<title.posX+title.size&&player.posX>title.posX+title.size/2&&player.directionMove==="left"
            &&player.posY+player.size>title.posY){
              let deepCollision=title.posX+title.size-player.posX
              player.up=false
              player.posX+=deepCollision+3
              
             console.log("LEFT")
            }
            //move right
            if(player.posX+player.size>title.posX&&player.posX+player.size<title.posX+title.size/2&&player.directionMove==="right"&&
            player.posY+player.size>title.posY){
              let deepCollision=player.posX+player.size-title.posX
              player.posX-=deepCollision+3
              player.up=false
              console.log("RIGHT")
            }
          
      //Block jump when meet down horizontal wall
      //JUMP JUMP

 if(player.detectBlokJump.canJump===false){

 
  player.posY=title.posY+title.size+1
  player.stopJump=true
  // player.posY=title.posY+title.size 
 }

          }

          // //VERTICAL deprecated
          // if(title.direction==="vertical"){
          
          //   //STAND ON TOP
          //   if(player.posY+player.size>title.posY-1&&player.posY+player.size<title.posY+title.size/2){
          //     player.down=false
          //     player.up=true
          //     player.counterJump=0
          //     let deepCollision=player.posY+player.size-title.posY
          //     player.posY-=deepCollision
            

              
             
          //   }

          //   //BLOCK RIGHT
          //   if(player.posX+player.size>title.posX&&player.posX+player.size<title.posX+title.size && player.directionMove==="right"
          //   &&player.posY+player.size>title.posY){
          //     let deepCollision=player.posX+player.size-title.posX
          //     player.posX-=deepCollision+3

          //     player.up=false
          //     title.color="#696969"
              
             
          //   }
          //   //BLOCK LEFT
          //   if(player.posX<title.posX+title.size&&player.posX>title.posX+title.size/2&&player.directionMove==="left"&&player.posY+player.size>title.posY){
          
          //     let deepCollision=title.posX+title.size-player.posX
          //     player.posX+=deepCollision+3
          //     player.up=false
              
          //     title.color="darkblue"
          //     console.log("block left")
              

          //   }
          //   // BLOCK JUMP JUMP
          //   if(player.posY<title.posY+title.size&&player.posY>title.posY+title.size/2&&player.directionMove=="up"){
          //     player.posY=title.posY+title.size+2
          //     title.color="yellow"
              
          //     player.up=false
             
              
          //   }
      

          // }

           
            //END ELSE
         }


  })
})
//WHEN PLAYER TOUCH VERGE OF MAP
if(player.posX<0||player.posX==0){
  player.posX=0+1
  player.left=false
}
if(player.posX+player.size>can.C_W){
  player.posX=can.C_W-player.size-1
  player.right=false
}
let flag=false
if(player.posY>can.C_H&&flag===false){
  flag=true
  player.posY=0
  player.hp-=21343214324
  setTimeout(()=>{
    flag=false
  },5000)
  return
}
}