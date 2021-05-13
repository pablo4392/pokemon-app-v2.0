import { useState } from "react";
import "./InputStyles.css";

const Control = ({ handleSearch, handleClear }) => {
    const [handleType, setHandleType] = useState("")
    const [handleAmount, setHandleAmount] = useState("")

    return(
        <div className="control">
            <div className="select-twice">
                <select className="select select-type" onChange={(e) => setHandleType(e.target.value)}>
                    <option selected defaultValue >Type</option>
                    <option value='1'>Normal</option>
                    <option value='2'>Fighting</option>
                    <option value='3'>Flying</option>
                    <option value='4'>Poison</option>
                    <option value='5'>Ground</option>
                    <option value='6'>Rock</option>
                    <option value='7'>Bug</option>
                    <option value='8'>Ghost</option>
                    <option value='9'>Steel</option>
                    <option value='10'>Fire</option>
                    <option value='11'>Water</option>
                    <option value='12'>Grass</option>
                    <option value='13'>Electric</option>
                    <option value='14'>Psychic</option>
                    <option value='15'>Ice</option>
                    <option value='16'>Dragon</option>
                    <option value='17'>Dark</option>
                    <option value='18'>Fairy</option>
                </select>
                <select className="select select-number" onChange={(e) => setHandleAmount(e.target.value)}>
                    <option selected defaultValue >Amount</option>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='30'>30</option>
                    <option calue='40'>40</option>
                    <option calue='50'>50</option>
                </select>
            </div>
            <button className="btn button-search" onClick={() => handleSearch(handleType, handleAmount) }>
                Search
            </button>
            <button className="btn button-clear" onClick={() => handleClear()} >
                Clear
            </button>
        </div>
    )
}

export default Control