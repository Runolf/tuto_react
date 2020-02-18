import React, { FunctionComponent, useState } from 'react';
import PokemonForm from '../components/pokemon-form';
import Pokemon from '../models/pokemon';


type Params = { id: string };

  
const PokemonAdd: FunctionComponent = () => {
    
    const [id] = useState<number>(new Date().getTime());
    const [poke] = useState<Pokemon>(new Pokemon(id));
  
    return (
        <div className="row">
            <h2 className="header center">Ajouter un pokemon </h2>
                <PokemonForm pokemon={poke} isEditForm={false}></PokemonForm>
        </div>
    );

}
  
export default PokemonAdd;