import React from 'react';
import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            photoUrl: '',
        }
    }

    getPokemons = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=12')
            .then(res => res.json())
            .then(res => this.setState({pokemons: res.results}))
    };

    getPocemonData = (url) => {
       fetch(`${url}`)
            .then(res => res.json())
            .then(data => console.log(data))
    };

    componentDidMount() {
        this.getPokemons();
    }

    render() {
        return (
            <React.Fragment>

                <header className="header">
                    <h1>Pokedex</h1>
                </header>

                <div className="flex-container">
                {
                    this.state.pokemons.length > 1 && this.state.pokemons
                        .map(pokemon => {
                            return (
                                <div className="flex-element">
                                    <img src={''} alt="pht"/>
                                    <p onClick={() => this.getPocemonData(pokemon.url)}>{pokemon.name}</p>
                                </div>
                            );
                        })
                }
                </div>

                <footer>
                        <button className="button">
                            <p>Load More</p>
                        </button>
                </footer>

            </React.Fragment>
        );
    }
}

export default App;
