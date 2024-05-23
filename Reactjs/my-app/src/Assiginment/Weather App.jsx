import { useState } from "react";

export function WeatherApp(){
    const [WeatherApp]=useState({
        temperature:"36 c" ,
        humidity:"255",
        windspeed:function (){ },
        updateweatherdata:function (){ }
    })
    return (<div>
        <ul>
            {Object.keys(WeatherApp).map((key) => {
                return <li>{WeatherApp[key]}</li>
            })}
        </ul>
    </div>
    )
}
