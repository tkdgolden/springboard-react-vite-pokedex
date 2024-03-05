import '../css/Pokecard.css'

const Pokecard = (props) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.pokemon.id}.png`;
    return (<div className="Pokecard">
        <h3>{props.pokemon.name}</h3>
        <img src={imgUrl} alt={props.pokemon.name} />
        <p>Type: {props.pokemon.type}</p>
        <p>EXP: {props.pokemon.base_experience}</p>
    </div>);
};

export default Pokecard;