import { handleHp } from "../../../Functions/shorthandFunction/handleHp"
import { random } from "../../../Functions/shorthandFunction/random"
import { NPC } from "../../../main"



export const whenDragonTouchPlayer=(player,dragonArray)=>{
  dragonArray.forEach((dragon,indexDragon,arr)=>{

    if(player.posX+player.size<dragon.posX || player.posX>dragon.posX+dragon.size ||
        player.posY+player.size<dragon.posY || player.posY>dragon.posY+dragon.size){
        
//No coliision

  }else{
if(dragon.directionMove!=="up"){
 

  player.hp-=dragon.attack.whenTouchPlayer
  player.percentageHp-=handleHp(dragon.attack.whenTouchPlayer,player)
}
  
  }


  }
)

}