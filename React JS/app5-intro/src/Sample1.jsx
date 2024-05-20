import { useState } from "react"


export var Component = () => {

    var [name] = useState("js")

    var [reacttopics, setreacttopic] = useState(["intro react", "components", "hooks", "state management", "routing", "forms",])

    var clicked = () => {
        setreacttopic(["Intro React", "Components", "Hooks", "State Management", "Routing", "Forms",])
    }



    var [topics,settopics] = useState(["styling", "side effect", "performance optimization", "testing", "advanced topic", "build tools and environment", "deployment", "ecosystem and libraries"])

    var kick=()=>{
        settopics(  ["Styling", "Side Effect", "Performance Optimization", "Testing", "Advanced Topic", "Build Tools and Environment", "Eployment", "Ecosystem and Libraries"])
    }


    return <div>
        <h1>welcome to react {name}</h1>

        <button onClick={clicked}>click</button>
        <ul>
            {reacttopics.map(function (val) {
                return <li>{val}</li>
            })}
        </ul>

        <button onClick={ kick}>clicked</button>

        <ul>
            {topics.map(function (src) {
                return <li>{src}</li>
            })}
        </ul>
    </div>
}

export default Component