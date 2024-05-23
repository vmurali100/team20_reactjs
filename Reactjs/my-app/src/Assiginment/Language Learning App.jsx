import { useState } from "react";

export function LanguageLearningApp() {
    const[LanguageLearningApp]=useState({
        vocabularywords:"ggjghfh",
        definitions:"gdggsgeydsugggdhyghjhbhj",
        examplesentences:"kjbhjvhjkhkj",
        removewords:function (){ },
        newwords:function (){ },
        testvocabularyknowledge:function (){ }

    })
    return (<div>
        <ul>
            {Object.keys(LanguageLearningApp).map((key) => {
                return <li>{LanguageLearningApp[key]}</li>
            })}
        </ul>
    </div>
    )
}
