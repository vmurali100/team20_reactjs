import { useState } from "react"


export const nethaji =()=>{
    const [name]=useState("Nethaji")
    const [person]=useState({
        fname:"Nethaji",
        lname:"Vijay"
    })

    const [persons]=useState(["Sai","Dinesh","Reddy"])

    return <div>
        <h1>Hi Welcome to {name} component</h1>

        <ul>
            <li>{person.fname}</li>
            <li>{person.lname}</li>
        </ul>

        <ul>
          {persons.map(function(per){
            return <li>{per}</li>
          })}
        </ul>
    </div>
} 

export default nethaji