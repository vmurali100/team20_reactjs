import {useState} from "react";

export function ProjectManagementTool(){
    const [ProjectManagementTool]=useState({
        projectname:"ccccc",
        description:"66",
        teammembers:"20",
        deadlines:function(){ },
        createprojects:function(){ },
        assigntasks:function(){ },
        trackprogress:function(){ }

    })
    return (<div>
        <ul>
            {Object.keys(ProjectManagementTool).map((key) => {
                return <li>{ProjectManagementTool[key]}</li>
            })}
        </ul>
    </div>
    )
}
