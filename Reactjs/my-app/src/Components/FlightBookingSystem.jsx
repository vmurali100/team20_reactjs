
import { useState } from "react"



export function FlightBookingSystem(){
    const [FlightBookingSystem] = useState ({
        flightnumber: "44182",
        departurecity:"hima",
        arrivalcity:"tjhh",
        departuretime:"hkhjkm",

        bookflights: function () { }, 
        cancelflights: function () { }, 
        checkavailability: function () { }, 

             
    })

    return <div>
        <ul>
            {Object.keys(FlightBookingSystem).map((key) => {
                return <li>{FlightBookingSystem[key]}</li>
            })}
        </ul>
    </div>
    }
