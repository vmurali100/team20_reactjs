import {useState} from "react";

export function MusicBandManager(){
    const [MusicBandManager]=useState({
        bandmembers:"ram",
        upcominggigs:"check",
        setlist:"no",
        addmembers:function(){ },
        schedulegigs:function(){ },
        updatethesetlist:function(){ }
    })
    return (<div>
        <ul>
            {Object.keys(MusicBandManager).map((key) => {
                return <li>{MusicBandManager[key]}</li>
            })}
        </ul>
    </div>
    )
}
