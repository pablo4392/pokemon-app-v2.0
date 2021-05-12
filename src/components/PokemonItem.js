import "./PokemonItem.css";

const PokemonItem = ({cardColor, urlSprite, name, type}) => {
    return(
        <div className="poke-card" style={{background: cardColor }}>
            <img className="picture" src={urlSprite} alt={name} />
            <div className="info">
                <h3 className="name">{name}</h3>
                <h5 className="type">{type}</h5>
            </div>
        </div>
    )
}

export default PokemonItem