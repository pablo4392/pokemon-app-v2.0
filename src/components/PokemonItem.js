import { useState } from "react";
import "./PokemonItem.css";

const PokemonItem = ({cardColor, pokeFront, pokeBack, shinyFront, shinyBack, id, name, type}) => {
    const [changeShiny, setChangeShiny] =useState(true)
    const [isFront, setIsFront] = useState(true)

    return(
        <div className="arr-poke-card" style={{background: cardColor }} >
            {changeShiny ? (
            <>
                {isFront ? (
                    <img className="arr-picture" src={pokeFront} alt={name} />
                ):(
                    <img className="arr-picture" src={pokeBack} alt={name} />
                )}
            </>
            ):(
            <>
                {isFront ? (
                    <img className="arr-picture" src={shinyFront} alt={name} />
                ):(
                    <img className="arr-picture" src={shinyBack} alt={name} />
                )}
            </>
            )}
            <div className="arr-info">
                <div>
                    <h3 className="arr-name">#{id} {name}</h3>
                    <h5 className="arr-type">{type}</h5>
                </div>
                <div className="panel-arr-buttons">
                    <button className="arr-shiny" onClick={() => setChangeShiny(!changeShiny)}>{changeShiny? "Shiny" : "Normal"}</button>
                    <button className="arr-position" onClick={() => {setIsFront(!isFront)}}>{isFront? "Back" : "Front"}</button>
                </div>
            </div>
        </div>
    )
}

export default PokemonItem