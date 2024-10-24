import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchBox(props) {
    const navigate = useNavigate();
    const {word} = useParams();
    const [input, setInput] = useState(word);
    const onHandleSearch = () => {
        navigate(`/words/${input.toLocaleLowerCase()}`);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onHandleSearch();
        }
    };
    return (
        <div className="d-flex input-group">
            <input className="form-control" placeholder="Search" value={input} onChange={(event) => {
                event.preventDefault();
                setInput(event.target.value);
            }} onKeyDown={handleKeyDown}/>
            <button className="btn btn-outline-secondary" type="submit" onClick={onHandleSearch}>
                Search
            </button>
            
        </div>
    )
}