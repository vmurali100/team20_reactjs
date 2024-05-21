import { useState } from "react"





function Gopi() {
    const [person] = useState({
        fname: "John",
        lname: "hjj",
        email: "john@gmail.com"
    });
    let [Students] = useState(["ram", "vijay", "guna", "kumar"])




    return <div>
        <h2>welcome to reactjs</h2>
        <img src="data:image/jpeg;base64,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" alt="" />
        <ul></ul>
        <li>{person.fname}</li>
        <li>{person.lname}</li>
        <li>{person.email}</li>
        <ul>
            <li>ram</li>
            <li>kiran</li>
            <li>suma</li>
            <li>rahul</li>
        </ul>
        <ul>
            <li>{person.fname}</li>
            <li>{person.lastname}</li>
        </ul>
        <ul>
            {Students.map(function (std) {
                return <li>{std}</li>
            })

            }
        </ul>
    </div>
}
export default Gopi