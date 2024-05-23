import { useState } from "react";

export function EmployeeTimeTracker(){
    const [EmployeeTimeTracker]=useState({
        employeename:"ghfy",
        date:"20/10/2024",
        starttime:function(){ },
        endtime:function(){ },
        clockin:function(){ },
        clockout:function(){ },
        calculatetotalhoursworked:function(){ }

    })
    return (<div>
        <ul>
            {Object.keys(EmployeeTimeTracker).map((key) => {
                return <li>{EmployeeTimeTracker[key]}</li>
            })}
        </ul>
    </div>
    )
}
