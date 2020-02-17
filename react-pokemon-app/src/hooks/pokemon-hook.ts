import {useEffect, useState} from 'react';
import Pokemon from '../models/pokemon';
import PokemonServices from '../services/pokemon-services';
// import POKEMONS from '../models/mock-pokemon'; // plus besoin de ça car API

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
            // setPokemons(POKEMONS);} // appel à l api maintenant ;) 
        PokemonServices.getPokemons()
        .then(pokemons => setPokemons(pokemons));
        },[]);

 return pokemons;
}
