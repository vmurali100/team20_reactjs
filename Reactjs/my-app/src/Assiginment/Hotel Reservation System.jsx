import { useState } from "react";

export function HotelReservationSystem(){
    const [HotelReservationSystem]=useState({
        roomnumber:"101",
        guestname:"aaa",
        checkindate:function (){ },
        checkoutdate:function (){ },
        addreservations:function(){ },
        cancelreservations:function (){ },
        checkavailability:function (){ }

    })
    return (<div>
        <ul>
            {Object.keys(HotelReservationSystem).map((key) => {
                return <li>{HotelReservationSystem[key]}</li>
            })}
        </ul>
    </div>
    )
}
