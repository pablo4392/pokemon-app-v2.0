import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import Search from './components/Search';

function App() {
  const [type, setType] = useState(null);
  const [query, setQuery] = useState("");
  const [pokes, setPokes] = useState([]);
  const [pokeColor, setPokeColor] = useState("#eeebdd");

  useEffect(() =>{
    if(query) {
      const promise = axios(`https://pokeapi.co/api/v2/type/${query}`);
      promise.then((response) => {
        setType(response.data.name)
        setPokes(response.data.pokemon.slice(0, 10));
      })
    }
  }, [query]);

  useEffect(() => {
    switch(type) {
      case 'normal': setPokeColor('#e36bae')
      break;
      case 'fighting': setPokeColor('#e40017')
      break;
      case 'flying': setPokeColor('#51c4d3')
      break;
      case 'poison': setPokeColor('#440a67')
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
    }
  }, [pokes]);

  const handleSelectPokemon = (value) => {
    setQuery(value)
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
    <div className="App">
      <Search handleType={handleSelectPokemon} />
      {pokes.length > 0 && pokeArr}
    </div>
  );
}

export default App;
