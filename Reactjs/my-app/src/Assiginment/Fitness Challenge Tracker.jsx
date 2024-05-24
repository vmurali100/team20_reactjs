import {useState} from "react";

export function FitnessChallengeTracker(){
    const [FitnessChallengeTracker]=useState({
        challengename:"hima",
        participants:"no",
        startdate:function(){ },
        enddate:function(){ },
        joinchallenges:function(){ },
         trackprogress:function(){ },
         declarewinners:function(){ }

    })
    return (<div>
        <ul>
            {Object.keys(FitnessChallengeTracker).map((key) => {
                return <li>{FitnessChallengeTracker[key]}</li>
            })}
        </ul>
    </div>
    )
}
