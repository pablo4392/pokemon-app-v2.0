import axios from "axios";
import { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";

const Pokemon = ({pokeColor, picUrl, pokeName, pokeType}) => {
    const [pokemon, setPokemon] = useState(null);
    const [pokeId, setPokeId] = useState(null)
    useEffect(()=> {
        const promise = axios(picUrl)
        promise.then((response) => {
            console.log(response.data)
            setPokemon(response.data.sprites.front_default)
            setPokeId(response.data.id)
        })
    });
  

    return (
        <PokemonItem 
            cardColor={pokeColor} 
            urlSprite={pokemon} 
            id={pokeId} 
            name={pokeName} 
            type={pokeType}
        />
    )
}

export default Pokemon;