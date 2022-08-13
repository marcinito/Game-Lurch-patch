import { createMonster } from "../../Functions/createMonster"
import { Ghost } from "../../objects/ghost/ghost"
import { Zombie } from "../../objects/zombie/zombie"

export const monsterInSecondLevel=()=>{
    let array=[createMonster(Ghost,0),
    createMonster(Zombie,0)]
    return array
}