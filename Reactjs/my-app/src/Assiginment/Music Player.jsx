import { useState } from "react";

export function MusicPlayer() {
    const [MusicPlayer] = useState({
        currentsong: "hulahula song",
        playlist: "hala",
        play: "no",
        pause: "check",
        skip: function () { },
        shufflesong: function () { }
    })
    return (<div>
        <ul>
            {Object.keys(MusicPlayer).map((key) => {
                return <li>{MusicPlayer[key]}</li>
            })}
        </ul>
    </div>
    )
}
