import React, { FunctionComponent} from 'react';
import PokemonCard from '../components/pokemon-card';
import {usePokemons} from '../hooks/pokemon-hook';
import {Link} from 'react-router-dom';


const PokemonList: FunctionComponent = () =>{
 
  const pokemons = usePokemons();

  
  return (
    <div>
    <h1 className="center">Pokedex</h1>
    <div className="container">

      <div className="row">

        {pokemons.map( pok => (
           <PokemonCard key={pok.id} pokemon={pok} bordelColor="green"/>
        ) )}
      
      </div>
        <Link className="btn-floating btn-large waves-effect waves-light red z-depth-3"
        style={{position: 'fixed', bottom: '25px', right: '25px'}} to="/pokemon/add">
        <i className="material-icons">add</i>
        </Link>
    </div>
  </div>
  );
}
  
export default PokemonList;