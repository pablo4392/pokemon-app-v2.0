import axios from "axios";
import { useState, useEffect } from "react";
import "./PokeCard.css";

const PokeCard = ({pokeUrl}) => {
    const [pokeColor, setPokeColor] = useState("");
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [colorType, setColorType] = useState("");
    const [types, setTypes] = useState([]);
    const [pokeFront, setPokeFront] = useState("");
    const [pokeBack, setPokeBack] = useState("");
    const [shinyFront, setShinyFront] = useState("");
    const [shinyBack, setShinyBack] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [changeShiny, setChangeShiny] = useState(true);
    const [isFront, setIsFront] = useState(true);

    useEffect(() => {
        if(pokeUrl) {
            axios(pokeUrl).then(res => {
                console.log(res)
                setId(res.data.id);
                setName(res.data.name);
                setTypes(res.data.types);
                setColorType(res.data.types[0].type.name);
                setPokeFront(res.data.sprites.front_default);
                setPokeBack(res.data.sprites.back_default);
                setShinyFront(res.data.sprites.front_shiny);
                setShinyBack(res.data.sprites.back_shiny);
                setHeight(res.data.height);
                setWeight(res.data.weight);
            })
        }
    }, [pokeUrl])

    useEffect(() => {
        switch(colorType) {
          case 'normal': setPokeColor('#d99879')
          break;
          case 'fighting': setPokeColor('#e40017')
          break;
          case 'flying': setPokeColor('#51c4d3')
          break;
          case 'poison': setPokeColor('#52057b')
          break;
          case 'ground': setPokeColor('#966c3b')
          break;
          case 'rock': setPokeColor('#999b84')
          break;
          case 'bug': setPokeColor('#1e6f5c')
          break;
          case 'ghost': setPokeColor('#301b3f')
          break;
          case 'steel': setPokeColor('#5b5b5b')
          break; 
          case 'fire': setPokeColor('#f48b29')
          break;
          case 'water': setPokeColor('#23689b')
          break;
          case 'grass': setPokeColor('#54e346')
          break;
          case 'electric': setPokeColor('#fdca40')
          break;
          case 'psychic': setPokeColor('#ce1f6a')
          break;
          case 'ice': setPokeColor('#8ab6d6')
          break;
          case 'dragon': setPokeColor('#5c6e91')
          break;
          case 'dark': setPokeColor('#222831')
          break;
          case 'fairy': setPokeColor('#f14668')
          break;
          default: setPokeColor('')
        }
    }, [colorType]);

    const typesArray = types.map(val => (
        <h4 key={val.type.name} className="card-item" style={{background: "#dddddd", color: "#222831"}}>{val.type.name}</h4>
    ));

    return(
        <div className="poke-card" style={{background: pokeColor }} >
            <div className="header-card">
                {changeShiny ? (
                <>
                    {isFront ? (
                        <img className="picture-card" src={pokeFront} alt={name} />
                    ):(
                        <img className="picture-card" src={pokeBack} alt={name} />
                    )}
                </>
                ):(
                <>
                    {isFront ? (
                        <img className="picture-card" src={shinyFront} alt={name} />
                    ):(
                        <img className="picture-card" src={shinyBack} alt={name} />
                    )}
                </>
                )}
                <div className="header-card-left">
                    <h3 className="card-name">#{id} {name.toUpperCase()}</h3>
                    <div className="card-array-items">{typesArray}</div>
                    <div className="panel-card-buttons">
                        <button className="card-button-shiny" onClick={() => setChangeShiny(!changeShiny)}>{changeShiny? "Shiny" : "Normal"}</button>
                        <button className="card-button-position" onClick={() => {setIsFront(!isFront)}}>{isFront? "Back" : "Front"}</button>
                    </div>
                </div>
            </div>
            <div className="card-dimensions">
                <h4 className="card-label">Height: {height/10} Mts.</h4>
                <h4 className="card-label">Weight: {weight/10} Kg.</h4>
            </div>
        </div>
    )
}

export default PokeCard