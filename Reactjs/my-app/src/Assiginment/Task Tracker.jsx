import { useState } from "react";

export function TaskTracker() {
    const [TaskTracker] = useState({
        taskname: "gopi",
        duedate: "10/12/2024",
        priority: "10",
        addtasks: function () { },
        marktasks: function () { },
        complete: function () { },
        filtertasksbypriority: function () { }
    })
    return (<div>
        <ul>
            {Object.keys(TaskTracker).map((key) => {
                return <li>{TaskTracker[key]}</li>
            })}
        </ul>
    </div>
    )
}
