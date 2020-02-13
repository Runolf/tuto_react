import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
  
const PokemonList: FunctionComponent = () => {
    
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    setPokemons(POKEMONS); // set la liste de Pok dans le hook pokemons avec le mock POKEMONS
  }, []);
  
  return (
    <div>
    <h1 className="center">Pokedex</h1>

    <div className="container">

      <div className="row">

        {pokemons.map((pok) => (
           <PokemonCard key={pok.id} pokemon={pok} bordelColor="green"/>
        ))}
      
      </div>

    </div>
  </div>
  );
}
  
export default PokemonList;