import "./principal.css";

const Principal = () => {

    return (
        <div className="principal-page">
            <div className="overlay">
                <img src="https://ianars.github.io/Pok-dex/images/pokedeex.png" alt="pokemon background" />
                <h3 className="p-label">Write your name</h3>
                <div className="principal-inputs" >
                    <input type="text" className="p-input"  />
                    <button className="p-button" >
                        Let's Go
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Principal