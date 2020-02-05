//import React from 'react';
import React, {FunctionComponent, useState, useEffect} from 'react';
import POKEMONS from './models/mock-pokemon';
import Pokemon from './models/pokemon';

const App: /*React.FC */ FunctionComponent = () => {
    /* le hook permettant de rajouter le state à un composant de fonction
    (stateless component) est useState */
 //const name: String = 'React';
 //const [name, setName] = useState<String>('React'); // les <> servent à typer le retour afin de s'assurer qu'on reçoit la bonne donnée
   const [pokemons, setPokemons] = useState<Pokemon[]>([]);  
   useEffect(() => {
     setPokemons(POKEMONS);
    }, []);


 return (
  <h1>il y a  {pokemons.length} de pokemon !</h1>
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
