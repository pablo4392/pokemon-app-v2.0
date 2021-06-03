import "./stylesSubComponents.css";

const Moves = ({movesArray, tagsColor}) => {

    return(
        <div className="moves-box">
            {movesArray.map(values => (
                <h5 key={values.move.name} className="move-item" style={{background: tagsColor}} >{values.move.name}</h5>
            ))}
        </div>
    )
}

export default Moves