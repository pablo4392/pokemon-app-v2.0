import "./control.css";
import Services from '../service/services';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowCircleRight, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

const Control = ({handleSearchName}) => {
    const [handleType, setHandleType] = useState("");
    const [handleName, setHandleName] = useState("");
    const [types, setTypes] = useState([]);

    useEffect(() => {
        Services.pokemonTypes().then(resp => {
            setTypes(resp.data.results)
        })
    }, []);

    const typesArr = types.map(value => (
        <option key={value.name} value={value.name}>{value.name.toUpperCase()}</option>
    ));

    return(
        <div className="control">
            <div className="pokemon-finder">
                <input placeholder="Write a name" className="input-search" onChange={(e) => setHandleName(e.target.value.toLowerCase())} />
                <button className="finder-button" onClick={() => handleSearchName(handleName)} >
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="pagination-btn">
                <button className="btn-pag btn-left">
                    <FontAwesomeIcon icon={faArrowAltCircleLeft} />
                </button>
                <button className="btn-pag btn-right">
                    <FontAwesomeIcon icon={faArrowCircleRight} />
                </button>
            </div>
            <div className="types-control">
                <select className="select-type" onChange={(e) => setHandleType(e.target.value)}>
                    <option disabled selected> Choos a type </option>
                    {typesArr}
                </select>
            </div>
        </div>
    )
}

export default Control