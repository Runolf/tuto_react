import React, { FunctionComponent} from 'react';
import PokemonCard from '../components/pokemon-card';
import {usePokemons} from '../hooks/pokemon-hook';

const PokemonList: FunctionComponent = () =>{
 
  const pokemons = usePokemons();

  
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