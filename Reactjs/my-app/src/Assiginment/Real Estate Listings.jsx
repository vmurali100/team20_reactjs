import {useState} from "react";

export function RealEstateListing(){
    const [RealEstateListing]=useState({
        propertytype:"hvgfghg",
        price:"50000",
        location:"ap",
        addnewlistings:function(){ },
        removelistings:function(){ },
        listingsbycriteria:function(){ }
    })
    return (<div>
        <ul>
            {Object.keys(RealEstateListing).map((key) => {
                return <li>{RealEstateListing[key]}</li>
            })}
        </ul>
    </div>
    )
}
