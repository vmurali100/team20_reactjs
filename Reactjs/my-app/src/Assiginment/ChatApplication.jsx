import { useState } from "react";

export function ChatApplication(){
    const[ChatApplication]=useState({
        sender:"check",
        receivermessage:function(){ },
        sendmessages:function(){ },
        deletemessages:function(){ }

    })
    return(<div>
        <ul>
            {Object.keys(ChatApplication).map((key) => {
                return <li>{ChatApplication[key]}</li>
            })}
        </ul>
    </div>)
}