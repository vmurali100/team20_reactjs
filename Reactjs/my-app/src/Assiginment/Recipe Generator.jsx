import { useState } from "react";

export function RecipeGenerator(){
    const [RecipeGenerator]=useState({
        ingredients:"baaaaa",
        instructions:"11",
        newrecipes:function(){}

    })
    return (<div>
        <ul>
            {Object.keys(RecipeGenerator).map((key) => {
                return <li>{RecipeGenerator[key]}</li>
            })}
        </ul>
    </div>
    )
}
