import scss from './mainStyle.scss'


import { canvasSettingsGame } from './Functions/settingCanas'
//WALL IMPORT

import { Player } from './objects/player/player'
export const menu=new menuObject()
export let player=new Player()
import { mouseDetectorMonster, movementPlayer, point } from './objects/player/movementPlayer/movementPlayer'
import { FireAtakFromPlayer } from './objects/player/FireAtakFromPlayer'
import { menuObject } from './objects/menuObject'
import { PLAYERGRAVITY } from './objects/player/PLAYERGRAVITY'

import { ghostAttackPlayer } from './objects/MONSTER/ghost/GhostAttackPlayer'
import { whenFireBallFromDragonTouchWallOrPlayer } from './objects/MONSTER/dragon/whenFireBallFromDragonTouchWallOrPlayer'
import { whenDragonTouchPlayer } from './objects/MONSTER/dragon/whenDragonTouchPlayer'
import { ghostGravity } from './objects/MONSTER/ghost/ghostGravity'
import { dragonGravity } from './objects/MONSTER/dragon/dragonGravity'

import { glockAmmoVsWall } from './objects/GUN/glock/glockAmmoVsWall'
import { dynamiteAmmoVsWall } from './objects/GUN/dynamite/dynamiteAmmoVsWall'
import { dynamiteVsLivingCreature } from './objects/GUN/dynamite/dynamiteVsLivingCreature'
import { playerTakeItemFromMap } from './objects/player/playerTakeItemFromMap'
import { zombieGravity } from './objects/MONSTER/zombie/zombieGravity'
import { zombieAttackPlayer } from './objects/MONSTER/zombie/zombieAttackPlayer'

import { firstLevelArrangementWall } from './LEVEL/FIRST LEVEL/firstLevelArrangementWall'

import { monsterOnFirstLevel } from './LEVEL/FIRST LEVEL/monsterOnFirstLevel'

import { itemsOnFirstLevel } from './LEVEL/FIRST LEVEL/itemsOnFirstLevel'
import { axeAttackHitWall } from './objects/GUN/axe/axeAttackHitWall'
import { gravityItemsOnMap } from './objects/ITEMSonMAP/functionItemsOnMap/gravityItemsOnMap'
import { soldierAttackPlayer } from './objects/MONSTER/soldier/soldierAttackPlayer'
import { soldierGravity } from './objects/MONSTER/soldier/soldierGravity'
import { whenBulletFromSoldierTouchWallOrPlayer } from './objects/MONSTER/soldier/whenBulletFromSoldierTouchWallOrPlayer'
import { axeAttackMonster } from './objects/GUN/axe/axeAttackMonster'
import { breathingOfPlayer } from './objects/player/breathingOfPlayer'
import { handleButton } from './Functions/MENU/handlebutton'
import { greetings } from './Functions/MENU/greetings'

import { sheepGravity } from './objects/MONSTER/sheep/sheepGravity'
import { glockAmmoVsMonster } from './objects/GUN/glock/glockAmmoVsMonster'


import { secondLevelArrangementWall } from './LEVEL/secondLevel/secondLevelArrangementWall'
import { monsterInSecondLevel } from './LEVEL/secondLevel/monsterInSecondLevel'
import { itemsOnSecondLvl } from './LEVEL/secondLevel/itemsOnSecondlvl'

import { npcGravity } from './objects/NPC/npcGravity'

import { helperAttackWall } from './objects/NPC/helperPlayer/helperAttackWall'
import { helperAttackMonster } from './objects/NPC/helperPlayer/helperAttackMonster'
import { playerIsTreating } from './objects/NPC/helperPlayer/playerIsTreating'
import { zombieAttackNpc } from './objects/NPC/zombieAttackNpc'
import { soldierAttackNpc } from './objects/NPC/soldierAttackNpc'
import { whenDragonTouchNpc } from './objects/NPC/whenDragonTouchNpc'
import { cleanMap } from './LEVEL/CHANGE-LEVEl/cleanMap'
import imagess from './stylesImage/chmura.png'
import { monsterHitInWallToOften } from './objects/GUN/FUNCTION/monsterHitInWallToOften'
import { background } from './LEVEL/BACKGROUND/background'
import { thirdLevelArrangement } from './LEVEL/THIRD-LEVEL/thirdLevelArrangement'
import { fourLevelArrangementWall } from './LEVEL/FOUR-LEVEL/fourLevelArrangementWall'
import { monsterOnThirdLevel } from './LEVEL/THIRD-LEVEL/monsterOnThirdLevel'
import { itemsOnThirdLevel } from './LEVEL/THIRD-LEVEL/itemsOnThirdLevel'
import { dragonFireBallAttack } from './objects/MONSTER/dragon/dragonFireBallAttack'
import { changeWay } from './objects/MONSTER/FUNCTION/changeWay'
import { monsterOnFourLevel } from './LEVEL/FOUR-LEVEL/monsterOnFourLevel'
import { lastLevelArrangementWall } from './LEVEL/LASTLEVEL/lastLevelArrangementWall'
import { monsterOnLastLevel } from './LEVEL/LASTLEVEL/monsterOnLastLevel'
import { itemsOnLastLevel, itemsOnlastLevel } from './LEVEL/LASTLEVEL/itemsOnLastLevel'
import { effectWhenPlayerPassedLevel } from './LEVEL/CHANGE-LEVEl/effectWhenPlayerPassedLevel'
import { itemsOnFourLevel } from './LEVEL/FOUR-LEVEL/itemsOnFourLevel'
import { freeModeArrangementWall } from './LEVEL/FREEMODE/freeModeArrangementWall'
import { monsterOnFreeMode } from './LEVEL/FREEMODE/monsterOnFreeMode'
import { itemsInFreeMode } from './LEVEL/FREEMODE/itemsInFreeMode'






const letter=[...document.querySelectorAll(".letter")]
let text="PlaYaGaiN"
let gauge=0

handleButton(menu)

greetings()
export let can=canvasSettingsGame()
//GAME OVER EFFECT

const pause=document.querySelector(".pause")
const menuEq=document.querySelector(".menuEq")
const gameOvers=document.querySelector(".gameOver")




export let transitionArray=[]

export let changeLevel=()=>{
    //change level work in this way that when monster is killed function count all monster on map when
    //number is 0 its will change level
    let amountAddedLifeAfterLevelAdvance=30
    console.log(menu.level)
    if(menu.level===2){
     
                WALL=secondLevelArrangementWall(player,can)
                MONSTER=monsterInSecondLevel()
                itemsOnMap=itemsOnSecondLvl()
                cleanMap(player)
             
                player.hpTotal+=amountAddedLifeAfterLevelAdvance
                player.quantityLive+=1
            }
            if(menu.level===3){
              
             
                        WALL=thirdLevelArrangement(player,can)
                        MONSTER=monsterOnThirdLevel()
                        itemsOnMap=itemsOnThirdLevel()
                        cleanMap(player)
                        player.hpTotal+=amountAddedLifeAfterLevelAdvance
                        player.quantityLive+=1
                      
                    }
                    
                    if(menu.level===4){
                  
                        WALL=fourLevelArrangementWall(player,can)
                        MONSTER=monsterOnFourLevel()
                        itemsOnMap=itemsOnFourLevel()
                        
                        cleanMap(player)
                        player.hpTotal+=amountAddedLifeAfterLevelAdvance
                        player.quantityLive+=1
                      
                    }
                    if(menu.level===5){
                        WALL=lastLevelArrangementWall()
                        MONSTER=monsterOnLastLevel()
                        itemsOnMap=itemsOnLastLevel()
                        cleanMap(player)
                        player.hpTotal+=amountAddedLifeAfterLevelAdvance
                        player.quantityLive+=1
                    }
                    if(menu.level===6){
                        WALL=freeModeArrangementWall()
                        MONSTER=monsterOnFreeMode()
                        itemsOnMap=itemsInFreeMode()
                        cleanMap(player)
                        player.hpTotal+=amountAddedLifeAfterLevelAdvance
                        player.quantityLive+=1
                    }
}


export let NPC=[]
// export let WALL=firstLevelArrangementWall(player,can)
// export let MONSTER=monsterOnFirstLevel()
// export let itemsOnMap=itemsOnFirstLevel()
//
// export let WALL=secondLevelArrangementWall(player,can)
// export let MONSTER=monsterInSecondLevel()
// export let itemsOnMap=itemsOnSecondLvl()

// export let WALL=thirdLevelArrangement(player,can)
// export let MONSTER=monsterOnThirdLevel()
// export let itemsOnMap=itemsOnThirdLevel()

// export let WALL=fourLevelArrangementWall(player,can)
// export let MONSTER=monsterOnFourLevel()
// export let itemsOnMap=itemsOnFourLevel()



// export let WALL=lastLevelArrangementWall(player,can)
// export let MONSTER=monsterOnLastLevel()
// export let itemsOnMap=itemsOnLastLevel()

export let WALL=firstLevelArrangementWall(player,can)
export let MONSTER=monsterOnFirstLevel()
export let itemsOnMap=itemsOnFirstLevel()
movementPlayer(player,itemsOnMap)



const backgroundImg=new background()
 const runApp=()=>{ 

  

   if(menu.playGame==="game"){
   
    can.ctx.clearRect(0,0,can.C_W,can.C_H)
    backgroundImg.makebackground(can)
  

//player


breathingOfPlayer(player)
playerTakeItemFromMap(player,itemsOnMap)
// AmmoVsWall(player,WALL,can)
PLAYERGRAVITY(player,WALL,can)


//wall
//pArrWallArray-particular array with set o wall
WALL.forEach((pArrWallArray,wI,WALLarray)=>{

pArrWallArray.forEach((title,pItitle,pArrWall)=>{
        title.draw(can)
})   
})

//MONSTER

monsterHitInWallToOften()
MONSTER.forEach((pArrMonster,index,arrayMONSTER)=>{
    pArrMonster.forEach((monster,i,arr)=>{
        if(monster.name==="ghost"){
            
            monster.draw(can)
            ghostAttackPlayer(player,arr)
            ghostGravity(WALL,arr,can)
            monster.movement()
            monster.changeWay()
            glockAmmoVsMonster(player,arr)

        }
        if(monster.name==="dragon"){
        
            monster.movement(can)
            monster.draw(can)
            dragonFireBallAttack(monster)
            dragonGravity(WALL,arr,can)
            whenFireBallFromDragonTouchWallOrPlayer(monster,player,WALL,can,itemsOnMap)
            whenDragonTouchPlayer(player,arr)
            glockAmmoVsMonster(player,arr)
            whenDragonTouchNpc(NPC,arr)
        }
        if(monster.name==="zombie"){
            monster.movement()
            monster.draw(can)
            zombieGravity(WALL,arr,can)
            
           
            zombieAttackPlayer(player,arr)
            glockAmmoVsMonster(player,arr)
            zombieAttackNpc(NPC,arr)
          
            
           

        }
        if(monster.name==="soldier"){
            
            monster.movement()
            monster.draw(can)
            monster.shootFromGun(can)
            soldierGravity(WALL,arr,can)
            soldierAttackPlayer(player,arr)
            glockAmmoVsMonster(player,arr)
            soldierAttackNpc(NPC,arr)
      whenBulletFromSoldierTouchWallOrPlayer(monster,player,WALL,can,itemsOnMap)
           
        }
        if(monster.name==="sheep"){
       
            monster.movement()
            monster.draw(can)
          
            sheepGravity(WALL,arr,can)
            glockAmmoVsMonster(player,arr)
        }
 

    })
})
//NPC
NPC.forEach((npc,index,arrNpc)=>{
   
    
    npcGravity(npc,WALL,can)
    
    if(npc.name==="helperPlayer"){
        npc.movement()
        npc.draw(can)
        npc.magicUse()
        helperAttackWall(WALL,npc.arrayWithMagic)
        helperAttackMonster(MONSTER,NPC)
        playerIsTreating(NPC)
   
        if(npc.hp<0){
            arrNpc.splice(index,1)
        }
        
      
    
    }
})

FireAtakFromPlayer(player,can)
//GUN

axeAttackHitWall(player,WALL,can,itemsOnMap)
dynamiteAmmoVsWall(player,WALL,can,itemsOnMap)
dynamiteVsLivingCreature(MONSTER,player)
axeAttackMonster(MONSTER,player)
glockAmmoVsWall(player,WALL,can)
dynamiteAmmoVsWall(player,WALL,can)
//ITEMS ON MAP
// item.draw(can,moveCoin)
if(itemsOnMap.length>0){
    gravityItemsOnMap()
  
    itemsOnMap.forEach((item,i,arr)=>{
    item.draw(can)
    })
}

mouseDetectorMonster.draw(can)
player.draw(can)
//effect when player passed level
effectWhenPlayerPassedLevel(transitionArray,can)
   }

   if(menu.playGame==="game-over"){
    
    gauge++
    if(gauge>200){
        letter[0].textContent="p"
    }
    if(gauge>240){
        letter[1].textContent="L"
    }
    if(gauge>280){
        letter[2].textContent="a"
    }
    if(gauge>320){
        letter[3].textContent="Y"
    }
    if(gauge>360){
        letter[4].textContent="a"
    }
    if(gauge>400){
        letter[5].textContent="G"
    }
    if(gauge>440){
        letter[6].textContent="a"
    }
    if(gauge>480){
        letter[7].textContent="I"
    }
    if(gauge>520){
        letter[8].textContent="n"
    }
  
    pause.style.opacity=0
    menuEq.style.opacity=0
    gameOvers.style.display="block"

 
    setTimeout(()=>{
        window.location.reload()
    },9000)
    
   }

    requestAnimationFrame(runApp)
}




runApp()





