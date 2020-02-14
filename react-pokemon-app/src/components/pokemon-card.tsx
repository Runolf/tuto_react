import React,{FunctionComponent, useState} from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router-dom';

type Props = {
    pokemon: Pokemon,
    bordelColor?: string
};
                                                        // valeur par défaut 
const PokemonCard: FunctionComponent<Props> = ({pokemon, bordelColor = "#009668"}) => {

    const [color, setColor] = useState<string>();
    const history = useHistory();

    const showBorderColor = () => {
      setColor(bordelColor);
    };

    const HideBorderColor = () => {
      setColor("#f5f5f5");
    };

    const goToPokemon = (id:number) => {
      history.push(`/pokemons/${id}`);
    }

    return (
        <div className="col s6 m4" onClick={()=> goToPokemon(pokemon.id)} onMouseEnter={showBorderColor}  onMouseLeave={HideBorderColor}>
          <div className="card horizontal" style={{borderColor: color}}>

            <div className="card-image"> 
              <img src={pokemon.picture} alt={pokemon.name}/>
            </div>

            <div className="card-stacked">

              <div className="card-content">

                <p>{pokemon.name}</p>
                <p><small>{formatDate(pokemon.created)}</small></p>
                {pokemon.types.map(type => (
                  <span key={type} className={formatType(type)}>{type}</span>
                ))}
              </div>

            </div>

          </div> 
        </div>
      );
};

export default PokemonCard;