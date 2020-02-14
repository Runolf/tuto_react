import React, {FunctionComponent} from 'react';
import PokemonList from './pages/pokemon-list';
import {BrowserRouter as Router, Switch,Route, Link} from 'react-router-dom';
import PokemonsDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';

const App: FunctionComponent = () => {
 return (
    <Router>
      <div>
        {/* la bare de navigation commune à toutes les pages*/ }
        <nav>
        <div className="nav-wrapper teal">
        <Link to="/" className="brand-logo center">Pokédex</Link>
          </div>
        </nav>
        {/*Le gestionnaire des routes de notre appli*/}
        <Switch>
          <Route exact path="/" component={PokemonList}/>
          <Route exact path="/pokemons" component={PokemonList}/>
          <Route path="/pokemons/:id" component={PokemonsDetail}/>
          <Route component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
    
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
