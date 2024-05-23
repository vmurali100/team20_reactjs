import { useState } from "react";

export function GameCharacter(){
    const [GameCharacter] =useState({
        name:"Reddy",
        level:"10",
        healthpoints:"200",
        methodstoattack:function(){ },
        defend:function(){ },
        levelup:function(){ },
    })
    return (<div>
        <ul>
            {Object.keys(GameCharacter).map((key) => {
                return <li>{GameCharacter[key]}</li>
            })}
        </ul>
    </div>
    )
}