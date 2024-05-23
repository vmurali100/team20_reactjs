import { useState } from "react";
export function RecipeBook() {
    const [RecipeBook] = useState({
        recipename: "RecipeBook ",
        ingredients: "no",
        ingredient: "follow the rules",
        newrecipet: function () { },
        removereceipt: function () { }
    })
    return (<div>
        <ul>
            {Object.keys(RecipeBook).map((key) => {
                return <li>{RecipeBook[key]}</li>
            })}
        </ul>
    </div>
    )
}