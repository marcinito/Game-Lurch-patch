import { handleHp } from "../../../Functions/helpFunction/handleHp"
export const dynamiteVsLivingCreature=(MONSTER,player)=>{
//DYNAMITE HIT MONSTER
MONSTER.forEach((particularArray,index,arr)=>{
    particularArray.forEach((monster,indexMonster,arrMonster)=>{


player.dynamitsArray.forEach((dynamite,indexDynamit,arrayDynamit)=>{


    if(dynamite.posX+dynamite.size<monster.posX || dynamite.posX>monster.posX+monster.size||
        dynamite.posY>monster.posY+monster.size || dynamite.posY+dynamite.size<monster.posY){
            //NO COLLISION
        }
        else{
           
            monster.hp-=dynamite.strenghtAttack
                 
                    monster.percentageHp-=handleHp(dynamite.strenghtAttack,monster)
                    
                    if(monster.hp<0){
                        arrMonster.splice(indexMonster,1)
                    }
        }
})
    })

})
}