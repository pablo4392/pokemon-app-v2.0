// import 'bootstrap/dist/css/bootstrap.min.css';
import "./UniquePokemon.css";
import {Link, Route, Switch} from "react-router-dom"
import Abilities from "./subComponents/Abilities";
import Moves from "./subComponents/Moves";
import Location from "./subComponents/Location";

const UniquePokemon = ({
    cardColor, 
    urlSprite, 
    id, 
    name, 
    type,
    height,
    weight,
    hp,
    atk,
    def,
    spAtk,
    spDef,
    speed,
    abilities, 
    moves,
    locations
}) => {

    const typesArr = type.map(value => (
        <h5 key={value.type.name} className="unique-type" >{value.type.name}</h5>
      ))

    return(
        <div className="unique-pokemon">
            <div className="container">
                <div className="banner" style={{background: cardColor }}>
                    <img className="sprite" src={urlSprite} alt={name} />
                    <div className="info">
                        <div>
                            <h1 className="unique-name">#{id} {name}</h1>
                            <div className="unique-types">
                                {typesArr}
                            </div>
                        </div>
                        <div className="unique-dimensions">
                            <h4 className="unique-label">Height: {height} mts.</h4>
                            <h4 className="unique-label">Weight: {weight} kg.</h4>
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
            <div className="unique-complements">
                <ul className="unique-nav" >
                    <li>
                        <Link to="/abilities" children="Abilities" />
                    </li>
                    <li>
                        <Link to="/moves" children="Moves" />
                    </li>
                    <li>
                        <Link to="/location" children="Location" />
                    </li>
                </ul>
                <Switch>
                    <Route path="/abilities">
                        <Abilities abilityArray={abilities} abilitiesColor={cardColor} />
                    </Route>
                    <Route path="/moves">
                        <Moves movesArray={moves} tagsColor={cardColor} />
                    </Route>
                    <Route path="/location">
                        <Location urlLocations={locations} locationColor={cardColor} />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default UniquePokemon