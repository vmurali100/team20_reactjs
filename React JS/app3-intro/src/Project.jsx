import { useState } from "react"


export const nethaji = () => {
    const [name, setname] = useState("Nethaji")

    const [persons,setpersons] = 
    useState(["sai", "reddy"])

    const [details, setdetails] =
    useState({
        fname: "vijay",
        lname: "dinesh"
    })

    

    function changename() {
        setname("NETHAJI   !!!")
    }

    var changeobjdetails = () => {
        setdetails({
            fname: "vijay-hari",
            lname: "dinesh-std"
        })
    }

    var changearrayname=()=>{
        setpersons(["sai-leela", "reddy-kmp"])
    }


    return (
        <div>
            {/* <button onClick={()=>{setname("NETHAJI")}}>change name</button> */}
            <button onClick={changename}>name change</button>

            <h1>HI WELCONE TO {name} COMPONENT</h1>

            <button onClick={changeobjdetails}>change obj details</button>

            <ul>
                {/* <li>{details.fname}</li>
                <li>{details.lname}</li> */}

                {Object.values(details).map((val)=>{
                    return <li>{val}</li>
                })}
            </ul>

            <button onClick={changearrayname}>change array </button>

            <ul>
                {persons.map(function (src) {
                    return <li>{src}</li>
                })}
            </ul>
        </div>
    )
}

export default nethaji