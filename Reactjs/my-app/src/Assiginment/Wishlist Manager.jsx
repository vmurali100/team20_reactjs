import {useState} from "react";

export function WishlistManager(){
    const [WishlistManager]=useState({
        itemname:"aaaddd",
        prioritylevel:"9",
        price:"700000",
        additems:function(){ },
        removeitems:function(){ },
        updatepriorities:function(){ }
       
       

    })
    return (<div>
        <ul>
            {Object.keys(WishlistManager).map((key) => {
                return <li>{WishlistManager[key]}</li>
            })}
        </ul>
    </div>
    )
}
