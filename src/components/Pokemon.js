import axios from "axios";
import { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";

const Pokemon = ({pokeColor, picUrl, pokeName, pokeType}) => {
    const [pokemonFront, setPokemonFront] = useState(null);
    const [pokemonBack, setPokemonBack] = useState(null);
    const [shinyFront, setShinyFront] = useState(null);
    const [shinyBack, setShinyBack] = useState(null);
    const [pokeId, setPokeId] = useState(null)
    useEffect(()=> {
        const promise = axios(picUrl)
        promise.then((response) => {
            console.log(response.data)
            setPokemonFront(response.data.sprites.front_default)
            setPokemonBack(response.data.sprites.back_default)
            setShinyFront(response.data.sprites.front_shiny)
            setShinyBack(response.data.sprites.back_shiny)
            setPokeId(response.data.id)
        })
    });
  

    return (
        <PokemonItem 
            key={pokeId}
            cardColor={pokeColor} 
            pokeFront={pokemonFront} 
            pokeBack={pokemonBack}
            shinyFront={shinyFront}
            shinyBack={shinyBack}
            id={pokeId} 
            name={pokeName} 
            type={pokeType}
        />
    )
}

export default Pokemon;