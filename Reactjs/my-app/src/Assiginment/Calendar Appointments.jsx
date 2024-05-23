import { useState } from "react";

export function CalendarAppointments(){
    const [CalendarAppointments]=useState({
        eventname:"hima",
        date:"23/05/2023",
        time:"12:10",
        location:"chittoor",
        addnewappointments:function(){ },
        updateappointments:function(){ },
        deleteappointments:function(){ }

        

    })
    return (<div>
        <ul>
            {Object.keys(CalendarAppointments).map((key) => {
                return <li>{CalendarAppointments[key]}</li>
            })}
        </ul>
    </div>
    )
}
