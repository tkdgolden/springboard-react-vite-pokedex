import defaultPokedex from './defaultPokedex'
import Pokecard from './Pokecard'
import '../css/Pokedex.css'

const Pokedex = ({ pokemons = defaultPokedex }) => (
    <div className="Pokedex">
        {pokemons.map(pokemon => <Pokecard pokemon={pokemon} />)}
    </div>
);

export default Pokedex;