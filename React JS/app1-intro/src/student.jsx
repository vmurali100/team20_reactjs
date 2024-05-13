import { useState } from "react"

export const student=()=>{
    const [myName]=useState("nethaji");
    return <div>
        <h2>welcome to {myName} component</h2>
    </div>

}