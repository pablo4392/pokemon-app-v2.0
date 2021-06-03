import "./stylesSubComponents.css";
import Description from "./Description";

const Abilities = ({abilityArray, abilitiesColor}) => {
    
    const itemArray = abilityArray.map( val => (
        <div key={val.ability.name} className="ability-item" style={{background: abilitiesColor}}>
            <h4 className="ability-name" >{val.ability.name.toUpperCase()}</h4>
            <Description urlDescription={val.ability.url} />
        </div>
    ));

    return (
        <div className="ability-box">
            {itemArray}
        </div>
    )
}

export default Abilities;