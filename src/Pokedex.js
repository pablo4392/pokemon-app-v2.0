import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from './components/Pokemon';
import UniquePokemon from './components/UniquePokemon';
import Control from './inputs/Control';


const Pokedex = () => {
    const [queryType, setQueryType] = useState(null);
    const [queryName, setQueryName] = useState(null)
    const [amount, setAmount] = useState("");
    const [pokeColor, setPokeColor] = useState("");
    const [pokes, setPokes] = useState([]);
    const [pokeId, setPokeId] = useState("")
    const [pokeName, setPokeName] = useState("");
    const [type, setType] = useState(null);
    const [pokeSprite, setPokeSprite] = useState("");
    const [hp, setHp] = useState("");
    const [atk, setAtk] = useState("");
    const [def, setDef] = useState("");
    const [spAtk, setSpAtk] = useState("");
    const [spDef, setSpDef] = useState("");
    const [speed, setSpeed] = useState("");

   useEffect(() => {
       if(queryName) {
       const promise = axios(`https://pokeapi.co/api/v2/pokemon/${queryName}`)
       promise.then((response) => {
          console.log(response.data)
          setPokeId(response.data.id);
          setPokeName(response.data.name);
          setPokeSprite(response.data.sprites.other.["official-artwork"].front_default)
          setType(response.data.types[0].type.name)
          setHp(response.data.stats[0].base_stat)
          setAtk(response.data.stats[1].base_stat)
          setDef(response.data.stats[2].base_stat)
          setSpAtk(response.data.stats[3].base_stat)
          setSpDef(response.data.stats[4].base_stat)
          setSpeed(response.data.stats[5].base_stat)
       })
       }
   }, [queryName]);

  useEffect(() =>{
    if(queryType) {
      const promise = axios(`https://pokeapi.co/api/v2/type/${queryType}`);
      promise.then((response) => {
        setType(response.data.name);
        setPokes(response.data.pokemon.slice(0, amount));
      })
    }
  }, [queryType, amount]);

  useEffect(() => {
    switch(type) {
      case 'normal': setPokeColor('#e36bae')
      break;
      case 'fighting': setPokeColor('#e40017')
      break;
      case 'flying': setPokeColor('#51c4d3')
      break;
      case 'poison': setPokeColor('#52057b')
      break;
      case 'ground': setPokeColor('#966c3b')
      break;
      case 'rock': setPokeColor('#c8c6a7')
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
  }, [type, pokes]);

  const findPokemonType = (valueType, valueAmount) => {
    setQueryType(valueType)
    setAmount(valueAmount)
  }

  const findPokemonName = (valueName) => {
    setQueryName(valueName)
  }

  const handleReset = () => {
    setType(null);
    setQueryType(null)
    setQueryName(null)
    setPokes([])
    setAmount("")
  }

  const pokeArr = pokes.map((value) => (
    <Pokemon
      key={value.pokemon.name} 
      pokeColor={pokeColor}
      picUrl={value.pokemon.url} 
      pokeName={value.pokemon.name.toUpperCase()} 
      pokeType={type} />
  ))
  
  return (
    <div>
      <Control handleSearchType={findPokemonType} handleSearchName={findPokemonName} handleClear={handleReset} />
      {pokes.length > 0 && pokeArr}
      {queryName &&
        <UniquePokemon 
          id={pokeId} 
          name={pokeName.toUpperCase()}
          type={type}
          urlSprite={pokeSprite}
          cardColor={pokeColor}
          hp={hp}
          atk={atk}
          def={def}
          spAtk={spAtk}
          spDef={spDef}
          speed={speed}
        />
      }
    </div>
  );
}

export default Pokedex;