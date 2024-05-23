import { useState } from "react";


export function Moviedatabase() {
    const [Moviedatabase] = useState({
        Movietitle: "check",
        director: "no",
        releaseyear:function(){ },
        newmovies:function(){ },
        removemovies:function(){ }
    })
    return (<div>
        <ul>
            {Object.keys(Moviedatabase).map((key) => {
                return <li>{Moviedatabase[key]}</li>
            })}
        </ul>
    </div>
    )
}