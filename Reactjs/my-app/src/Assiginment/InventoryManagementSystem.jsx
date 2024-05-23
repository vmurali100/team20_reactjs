import { useState } from "react";
export function InventaryManagementSystem(){
    const[InventaryManagementSystem]=useState({
        productname:"aaa",
        quantityavailable:"no",
        price:"10,000",
        addnewproducts:function(){ },
        updatequantities:function(){ },
        removeproducts:function(){ }


    })
    return (<div>
        <ul>
            {Object.keys(InventaryManagementSystem).map((key) => {
                return <li>{InventaryManagementSystem[key]}</li>
            })}
        </ul>
    </div>
    )
}
