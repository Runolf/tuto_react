import {useEffect, useState} from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';

export const usePokemons = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    useEffect(() => {
            setPokemons(POKEMONS);}, []);

        return pokemons;
}
