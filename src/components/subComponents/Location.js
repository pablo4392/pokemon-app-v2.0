import axios from "axios";
import { useEffect, useState } from "react";
import "./stylesSubComponents.css";

const Location = ({urlLocations, locationColor}) => {
    const [location, setLocation] = useState([]);
    
    useEffect(() => {
        if(urlLocations) {
            axios(urlLocations).then(res => {
                setLocation(res.data)
            })
        }
    }, [urlLocations])

    const locationArray = location.map(val => (
        <h5 key={val.location_area.name} className="location-item" style={{background: locationColor}} >{val.location_area.name}</h5>
    ))

    return(
        <div className="location-box">
            {locationArray}
        </div>
    )
}

export default Location;