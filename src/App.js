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
            .then(() => {
                return this.state.pokemons.map(pokemon => {
                    return fetch(pokemon.url)
                        .then(r => r.json())
                        .then(data => {
                            this.setState({
                                photoAndTypes: {...this.state.photoAndTypes, [data.name]: {
                                        photoSrc: data.sprites.front_default,
                                        types: [...data.types]
                                    }}
                            });
                        })
                })
            })
    };

    getPokemonDataByUrl = (url) => {
            fetch(url)
                .then(response => response.json())
                .then(data => this.setState({currentPokemon: data, isShown: true}))
    };

    loadMore = (next_url) => {
        fetch(next_url)
            .then(res => res.json())
            .then(res => this.setState({pokemons: [...this.state.pokemons, ...res.results]}))
            .then(() => {
                return this.state.pokemons.map(pokemon => {
                    return fetch(pokemon.url)
                        .then(r => r.json())
                        .then(data => {
                            this.setState({
                                photoAndTypes: {...this.state.photoAndTypes, [data.name]: {
                                        photoSrc: data.sprites.front_default,
                                        types: data.types
                                    }}
                            });
                        })
                })
            })
    };

    componentDidMount() {
        this.getPokemons();
    }

    render() {
        window.state = this.state
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
                                this.state.pokemons.length > 1 && this.state.photoAndTypes && this.state.pokemons
                                    .map(pokemon => {
                                        return (
                                            <div id={pokemon.name} className="flex-element"
                                                onClick={() => {
                                                    this.getPokemonDataByUrl(pokemon.url)}}
                                                 key={pokemon.name + Math.random().toString()}>
                                                <img className="img__poke"
                                                     src={this.state.photoAndTypes && this.state.photoAndTypes[`${pokemon.name}`]
                                                                                ? this.state.photoAndTypes[`${pokemon.name}`].photoSrc
                                                                                : ''} alt="pht"/>

                                                <div className="poke_title">
                                                    <h3>{pokemon.name}</h3>
                                                </div>

                                                <div className="types">
                                                    {/*{*/}
                                                    {/*    this.state.photoAndTypes && this.state.photoAndTypes[`${pokemon.name}`].types !== undefined && this.state.photoAndTypes[`${pokemon.name}`].types*/}
                                                    {/*        .map(elem => {*/}
                                                    {/*            return <p>{elem.type.name}</p>*/}
                                                    {/*        })*/}
                                                    {/*}*/}
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
