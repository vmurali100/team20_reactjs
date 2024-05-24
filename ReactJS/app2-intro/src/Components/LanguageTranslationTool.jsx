import { useState } from "react";

const LanguageTranslationTool = () => {
    const [languageTool,setLanguageTool] = useState({
        sourceLanguage:'telugu',
        targetlanguage:'English',
        
    })
    return <div>
        <ul>
            {/* {Object.values(languageTool).map((val)=>{
                return <li>{val}</li>
            })} */}

            {Object.values(languageTool).map((val)=> <li>{val}</li> )}
        </ul>
    </div>
};


export default LanguageTranslationTool