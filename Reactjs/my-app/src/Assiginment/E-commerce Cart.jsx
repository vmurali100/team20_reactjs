import { useState } from "react";

export function EcommerceCart(){
    const[EcommerceCart]=useState({
        items:"4",
        quantity:"super",
        price:"20,000",
        additems:function(){ },
        removeitems:function(){ },
        updatequantities:function(){ },
        calculatetotalprice:function(){ },



    })
    
    return (<div>
        <ul>
            {Object.keys(EcommerceCart).map((key) => {
                return <li>{EcommerceCart[key]}</li>
            })}
        </ul>
    </div>
    )
}
