import { useState } from "react"



export function EcommerceCart(){
    const [EcommerceCart] = useState ({
        items: "car",
        quantity:"60%",
        price:"600000",


        additems: function () { },
        emoveitems: function () { },
        updatequantities: function () { },
        calculatetotalprice: function(){},
       
    })

    return <div>
        <ul>
            {Object.keys(EcommerceCart).map((key) => {
                return <li>{EcommerceCart[key]}</li>
            })}
        </ul>
    </div>
    }