import "./stylesSubComponents.css";
import axios from "axios"
import { useEffect, useState } from "react"

const Description = ({urlDescription}) => {
    const [description, setDescription] = useState("")

    useEffect(() => {
        if(urlDescription) {
            axios(urlDescription).then( res => {
                setDescription(res.data.effect_entries[1].short_effect)
            })
        }
    }, [urlDescription])

    return(
        <div>
            <p className="ability-description">{description}</p>
        </div>
    )
}

export default Description