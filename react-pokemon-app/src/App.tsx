//import React from 'react';
import React, {FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';

const App: /*React.FC */ FunctionComponent = () => {
    /* le hook permettant de rajouter le state à un composant de fonction
    (stateless component) est useState */
 
    //const name: String = 'React';
    //const [name, setName] = useState<String>('React'); // les <> servent à typer le retour afin de s'assurer qu'on reçoit la bonne donnée
  
    /*
    // plus besoin du state et des effets car on passe par la prop pokemon-list
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);  
   useEffect(() => {
     setPokemons(POKEMONS);
    }, []);
  */

 return (
    <PokemonList/>
 )
}

export default App; 

/*
  export default class App extends React.Component{
    const name: String = 'React';
    
    render(){
    return <h1>Hello, {name} !</h1>;
    }
  }
  */
