import {useState} from "react";

export function PetAdoptionCenter(){
    const [PetAdoptionCenter]=useState({
        petname:"jockey",
        breed:"bun",
        age:"20",
        adoptionstatus:function(){ },
        addnewpets:function(){ },
        adoptpets:function(){ },
        availablepets:function(){ }
    })
    return (<div>
        <ul>
            {Object.keys(PetAdoptionCenter).map((key) => {
                return <li>{PetAdoptionCenter[key]}</li>
            })}
        </ul>
    </div>
    )
}
