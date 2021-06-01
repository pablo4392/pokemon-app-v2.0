import axios from "axios";
import { useEffect, useState } from "react";
import "./InputStyles.css";

const Control = ({ handleSearchType, handleSearchName, handleClear }) => {
    const [handleType, setHandleType] = useState("");
    const [handleAmount, setHandleAmount] = useState("");
    const [handleName, setHandleName] = useState("");
    const [isType, setIsType] = useState(false);
    const [types, setTypes] = useState([]);

    useEffect(() => {
        const promise = axios("https://pokeapi.co/api/v2/type")
        if(types) {
            promise.then(resp => {
                setTypes(resp.data.results)
            })
        }
    }, [types])

    const typesArr = types.map(value => (
        <option key={value.name} value={value.name}>{value.name.toUpperCase()}</option>
    ))

    return(
        <div className="control">
            {isType ? (
                <>
                    <div className="select-twice">
                        <select className="select select-type" onChange={(e) => setHandleType(e.target.value)}>
                            <option selected >Type</option>
                            {typesArr}
                        </select>
                        <input type="number" className="select select-number" onChange={(e) => setHandleAmount(e.target.value)} />
                    </div>
                    <button className="btn" onClick={() => handleSearchType(handleType, handleAmount) }>
                        Search
                    </button>
                </>
            ) : (
                <>
                    <input className="input-search" onChange={(e) => setHandleName(e.target.value.toLowerCase())} />
                    <button className="btn" onClick={() => handleSearchName(handleName)} >
                            Search
                    </button>
                </>
            )}
            <button className="btn" onClick={() => setIsType(!isType)} >
                {isType ? "Find by name" : "Find by type"}
            </button>
            <button className="btn button-clear" onClick={() => handleClear()} >
                Clear
            </button>
        </div>
    )
}

export default Control