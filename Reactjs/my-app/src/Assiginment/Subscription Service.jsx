import {useState} from "react";

export function SubscriptionService(){
    const [SubscriptionService]=useState({
        subscriptionname:"dddd",
        price:"1000000",
        renewaldate:function(){ },
        tosubscribe:function(){ },
        unsubscribe:function(){ },
        subscriptiondetails:function(){ },

    })
    return (<div>
        <ul>
            {Object.keys(SubscriptionService).map((key) => {
                return <li>{SubscriptionService[key]}</li>
            })}
        </ul>
    </div>
    )
}
