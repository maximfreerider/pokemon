import React from 'react';
import './App.css';
import {Pokemon} from './components/Pockemon/Pokemon'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            next: null,
        }
    }

    getPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
            .then(res => res.json())
            .then(res => this.setState({pokemons: res.results, next: res.next}))
    };

    getPocemonData = (url) => {
       fetch(`${url}`)
            .then(res => res.json())
            .then(data => console.log(data))
    };

    loadMore = (next_url) => {
        // console.log("next data - ", next_url);
        fetch(next_url)
            .then(res => res.json())
            .then(res => this.setState({pokemons: [...this.state.pokemons, ...res.results]}))
    };

    componentDidMount() {
        this.getPokemons();
    }

    render() {
        return (
            <React.Fragment>

                <header className="header">
                    <div>
                        <h1>Pokedex</h1>
                    </div>
                </header>

                <div className="flex-container">
                {
                    this.state.pokemons.length > 1 && this.state.pokemons
                        .map(pokemon => {
                            return (
                                <div className="flex-element" onClick={() => this.getPocemonData(pokemon.url)} key={pokemon.name + Math.random().toString()}>
                                    <img className="img__poke" src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'} alt="pht"/>
                                    <div className="poke_title">
                                        <h3 onClick={() => this.getPocemonData(pokemon.url)}>{pokemon.name}</h3>
                                    </div>
                                    <div className="types">
                                        <button className="inline">Grass</button>
                                        <button className="inline">Fire</button>
                                    </div>
                                </div>
                            );
                        })
                }
                </div>

                <footer>
                        <button className="button" onClick={() => this.loadMore(this.state.next)}>
                            <p>Load More</p>
                        </button>
                </footer>

                <Pokemon type='Fire'/>
            </React.Fragment>
        );
    }
}

export default App;
