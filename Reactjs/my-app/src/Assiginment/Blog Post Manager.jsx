import {useState} from "react";

export function BlogPostManager(){
    const [BlogPostManager]=useState({
         title:"aaaaaaa",
         author:"hhbhbh",
         content:"no",
         tags:"1010",
         newposts:function(){ },
         editposts:function() { },
         deleteposts:function(){ }

    })
    return (<div>
        <ul>
            {Object.keys(BlogPostManager).map((key) => {
                return <li>{BlogPostManager[key]}</li>
            })}
        </ul>
    </div>
    )
}
