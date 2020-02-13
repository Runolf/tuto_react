import React,{FunctionComponent, useState} from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';

type Props = {
    pokemon: Pokemon,
    bordelColor?: string
};
                                                        // valeur par défaut 
const PokemonCard: FunctionComponent<Props> = ({pokemon, bordelColor = "#009668"}) => {

    const [color, setColor] = useState<string>();
    const showBorderColor = () => {
      setColor(bordelColor);
    };

    const HideBorderColor = () => {
      setColor("#f5f5f5");
    };

    const formatDate = (date:Date): string => {
        return `${date.getDate()}/${date.getMonth()+1}/${date.getUTCFullYear()}`;
    }

    return (
        <div className="col s6 m4" onMouseEnter={showBorderColor}  onMouseLeave={HideBorderColor}>
          <div className="card horizontal" style={{borderColor: color}}>

            <div className="card-image"> 
              <img src={pokemon.picture} alt={pokemon.name}/>
            </div>

            <div className="card-stacked">

              <div className="card-content">

                <p>{pokemon.name}</p>
                <p><small>{formatDate(pokemon.created)}</small></p>
                
              </div>

            </div>

          </div> 
        </div>
      );
};

export default PokemonCard;