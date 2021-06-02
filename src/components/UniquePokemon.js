import "./UniquePokemon.css";

const UniquePokemon = ({
    cardColor, 
    urlSprite, 
    id, 
    name, 
    type,
    hp,
    atk,
    def,
    spAtk,
    spDef,
    speed
}) => {

    const typesArr = type.map(value => (
        <h5 key={value.type.name} className="unique-type" >{value.type.name}</h5>
      ))

    return(
        <div className="unique-pokemon">
            <div className="banner" style={{background: cardColor }}>
                <img className="sprite" src={urlSprite} alt={name} />
                <div className="info">
                    <div>
                        <h1 className="unique-name">#{id} {name}</h1>
                        <div className="unique-types">
                            {typesArr}
                        </div>
                    </div>
                    <div className="stats">
                        <h2 className="stats-title">Stats</h2>
                        <table style={{width: "100%"}}>
                            <tbody>
                                <tr>
                                    <td className="stat-label">HP</td>
                                    <td><meter className="meter-stat" min="0" max="120" value={hp} /></td>
                                    <td className="stat-value">{hp}</td>
                                </tr>
                                <tr>
                                    <td className="stat-label">ATK</td>
                                    <td><meter className="meter-stat" min="0" max="120" value={atk} /></td>                    
                                    <td className="stat-value">{atk}</td>
                                </tr>
                                <tr>
                                    <td className="stat-label">DEF</td>
                                    <td><meter className="meter-stat" min="0" max="120" value={def} /></td>
                                    <td className="stat-value">{def}</td>
                                </tr>
                                <tr>
                                    <td className="stat-label">SP. ATK</td>
                                    <td><meter className="meter-stat" min="0" max="120" value={spAtk} /></td>
                                    <td className="stat-value">{spAtk}</td>
                                </tr>
                                <tr>
                                    <td className="stat-label">SP. DEF</td>
                                    <td><meter className="meter-stat" min="0" max="120" value={spDef} /></td>                                
                                    <td className="stat-value">{spDef}</td>
                                </tr>
                                <tr>
                                    <td className="stat-label">SPEED</td>
                                    <td><meter className="meter-stat" min="0" max="120" value={speed} /></td>                                
                                    <td className="stat-value">{speed}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UniquePokemon