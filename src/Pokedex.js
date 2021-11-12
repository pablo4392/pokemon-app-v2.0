import './Pokedex.css';
import { useEffect, useState } from 'react';
import Services from './service/services';
import UniquePokemon from './components/UniquePokemon';
import Control from './inputs/Control';
import PokeCard from './components/PokeCard';


const Pokedex = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [queryType, setQueryType] = useState(null);
  const [queryName, setQueryName] = useState(null);
  const [amount, setAmount] = useState("");
  const [pokeColor, setPokeColor] = useState("");
  const [pokes, setPokes] = useState([]);
  const [pokeId, setPokeId] = useState("");
  const [pokeName, setPokeName] = useState("");
  const [colorType, setColorType] = useState("");
  const [type, setType] = useState([]);
  const [pokeSprite, setPokeSprite] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [hp, setHp] = useState("");
  const [atk, setAtk] = useState("");
  const [def, setDef] = useState("");
  const [spAtk, setSpAtk] = useState("");
  const [spDef, setSpDef] = useState("");
  const [speed, setSpeed] = useState("");
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([])
  const [locations, setLocations] = useState("")

  useEffect( () => {
    if(allPokemon){
      Services.allPokes(12,0).then(response => {
        setAllPokemon(response.data.results)
      })
    }
  }, [allPokemon]);

  useEffect(() => {
    if(queryName){
      Services.uniquePoke(queryName).then(response => {
        setPokeId(response.data.id);
        setPokeName(response.data.name);
        setPokeSprite(response.data.sprites.other["official-artwork"].front_default);
        setColorType(response.data.types[0].type.name);
        setType(response.data.types);
        setHeight(response.data.height);
        setWeight(response.data.weight)
        setHp(response.data.stats[0].base_stat);
        setAtk(response.data.stats[1].base_stat);
        setDef(response.data.stats[2].base_stat);
        setSpAtk(response.data.stats[3].base_stat);
        setSpDef(response.data.stats[4].base_stat);
        setSpeed(response.data.stats[5].base_stat);
        setAbilities(response.data.abilities)
        setMoves(response.data.moves)
        setLocations(response.data.location_area_encounters)
      })
    }  
  }, [queryName]);

  useEffect(() =>{
    if(queryType) {
      Services.typePokes(queryType).then(response => {
        setType(response.data.name);
        setPokes(response.data.pokemon.slice(0, amount));
      })
    }
  }, [queryType, amount]);

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

  const findPokemonType = (valueType, valueAmount) => {
    setQueryType(valueType)
    setAmount(valueAmount)
  }

  const findPokemonName = (valueName) => {
    setQueryName(valueName)
  }

  const allPokes = allPokemon.map(value => (
    <PokeCard
      key={value.name}
      pokeUrl={value.url}
    />
  ));

  const pokeArr = pokes.map((value) => (
    <PokeCard 
      key={value.pokemon.name} 
      pokeUrl={value.pokemon.url} 
    />
  ));
  
  return (
    <div>
      <div className="pokedex-banner">
        <img className="poke-logo" src="https://logos-world.net/wp-content/uploads/2020/05/Pokemon-Logo.png" alt="pokemon logo" />
      </div>
      <Control
        handleSearchType={findPokemonType} 
        handleSearchName={findPokemonName}
      />
      {queryName ? (
        <div className="pokedex-container">
          <UniquePokemon 
            id={pokeId} 
            name={pokeName.toUpperCase()}
            type={type}
            urlSprite={pokeSprite}
            cardColor={pokeColor}
            height={height/10}
            weight={weight/10}
            hp={hp}
            atk={atk}
            def={def}
            spAtk={spAtk}
            spDef={spDef}
            speed={speed}
            abilities={abilities}
            moves={moves}
            locations={locations}
          />
        </div>
      ):(
        <div className="grid-pokes">
          {allPokes}
          {pokes.length > 0 && pokeArr}
        </div>
      )
      }
    </div>
  );
}

export default Pokedex;