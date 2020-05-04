import React from 'react';
import './App.css';
import {Pokemon} from './components/Pockemon/Pokemon'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            next: null,
            currentPokemon: null,
            isShown: false,
            photoAndTypes: {},
        }
    }

    getPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
            .then(res => res.json())
            .then(res => this.setState({pokemons: res.results, next: res.next}))
    };

    getPocemonData = (url, name) => {
        // console.log(document.getElementById(`id`).classList);
        // document.getElementById(`id`).classList.remove('no_render');
       return fetch(`${url}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data.sprites.front_default);
                return data.sprites.front_default
            })

    };

    getPokemonPhotoAndTypesUrl = (url) => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    photoAndTypes: {...this.state.photoAndTypes, [data.name]: {
                            photo: data.sprites.front_default,
                            types: [...data.types]
                        }}
                });
            })
            .then(() => console.log(this.state))
    };

    getPokemonDataByUrl = (url) => {
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({currentPokemon: data, isShown: true}))
                .then(() => console.log(this.state))
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

                <div className="parent">

                    <div>
                        <div className="flex-container">
                            {
                                this.state.pokemons.length > 1 && this.state.pokemons
                                    .map(pokemon => {
                                        return (
                                            <div id={pokemon.name} className="flex-element"
                                                onClick={() => {
                                                    this.getPokemonDataByUrl(pokemon.url)}}
                                                 key={pokemon.name + Math.random().toString()}>
                                                <img className="img__poke" src={''} alt="pht"/>

                                                <div className="poke_title">
                                                    <h3
                                                        // onClick={() => this.getPocemonData(pokemon.url)}
                                                    >{pokemon.name}</h3>
                                                </div>

                                                <div className="types">
                                                    {

                                                    }
                                                    <button className="inline">Grass</button>
                                                    <button className="inline">Fire</button>
                                                </div>
                                            </div>
                                        );
                                    })
                            }
                        </div>
                    </div>
                    <div>
                        <Pokemon data={this.state.currentPokemon} isShown={this.state.isShown}/>
                    </div>
                </div>

                <footer>
                        <button className="button" onClick={() => this.loadMore(this.state.next)}>
                            <p>Load More</p>
                        </button>
                </footer>
            </React.Fragment>
        );
    }
}

export default App;
