import axios from "axios";
import { useEffect, useState } from "react";
import PokemonItem from "./PokemonItem";

const Pokemon = ({picUrl, pokeName, pokeType}) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(()=> {
        const promise = axios(picUrl)
        promise.then((response) => {
            setPokemon(response.data.sprites.front_default)
        })
    });
  

    return (
        <PokemonItem urlSprite={pokemon} name={pokeName} type={pokeType}/>
    )
}

export default Pokemon;