import React, {FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';

const App: FunctionComponent = () => {
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
