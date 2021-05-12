import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import Search from './components/Search';

function App() {
  const [type, setType] = useState(null);
  const [query, setQuery] = useState("");
  const [pokes, setPokes] = useState([]);

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
  }, [pokes]);

  const handleSelectPokemon = (value) => {
    setQuery(value)
  }

  const pokeArr = pokes.map((value) => (
    <Pokemon
      key={value.pokemon.name} 
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
