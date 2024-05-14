
export const DisplayObejct=(props)=>{
    console.log("DisplayObejct ",props.info)
    return <ul>
        {Object.values(props.info).map((val)=>{
            return <li>{val}</li>
        })}
    </ul>
}
