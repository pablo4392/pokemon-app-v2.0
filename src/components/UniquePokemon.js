import "./UniquePokemon.css";

const UniquePokemon = ({cardColor, urlSprite, id, name, type}) => {
    return(
        <div className="poke-card">
            <div className="banner" style={{background: cardColor }}>
                <img className="sprite" src={urlSprite} alt={name} />
                <div className="info">
                    <div>
                        <h1 className="name">#{id} {name}</h1>
                        <h2 className="type">{type}</h2>
                    </div>
                    <div className="stats">
                        <h2 className="no-margin">Stats</h2>
                        <meter></meter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniquePokemon