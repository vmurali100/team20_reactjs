import {useState} from "react";

export function LanguageTranslationTool(){
    const [LanguageTranslationTool]=useState({
        sourcelanguage:"english",
        targetlanguage:"eng,tel",
        texttotranslate:function(){ },
        translatetext:function(){ }
       

    })
    return (<div>
        <ul>
            {Object.keys(LanguageTranslationTool).map((key) => {
                return <li>{LanguageTranslationTool[key]}</li>
            })}
        </ul>
    </div>
    )
}
