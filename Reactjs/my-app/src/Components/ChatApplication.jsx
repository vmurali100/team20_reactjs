
import { useState } from "react"

export function ChatApplication(){
    const [ChatApplication] = useState ({
        sender:"hima",
        receiver: "ramjuy",
        message:"hi gopi !!...hello ",

        sendmessages: function () { },
        deletemessages: function () { },
        searchformessages: function () { },
       
    })

    return <div>
        <ul>
            {Object.keys(ChatApplication).map((key) => {
                return <li>{ChatApplication[key]}</li>
            })}
        </ul>
    </div>
    }
