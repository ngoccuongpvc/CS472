import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

export default function Dictionary(props) {
    const { word } = useParams();

    const [definitions, setDefinitions] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async (word) => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dictionary/words/${word}`);
            const data = await response.json();
            setDefinitions(data);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData(word);
    }, [word]);
    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
                <h1>Definition of "<b>{word}</b>"</h1>
            </div>
            <div className="container w-75">

                {
                    loading ? (
                        <div className="d-flex justify-content-center">
                            <ClipLoader color={"#09f"} loading={loading} size={50} />
                        </div>) :
                        definitions.map((definition, index) => {
                            return (
                                <div>
                                    <div>
                                        <span className="word">{definition.word?.toLowerCase()}</span>
                                        <span className="definition-order">{index + 1} of {definitions.length}</span>
                                        <span className="wordtype">{definition.wordtype}</span>
                                    </div>
                                    <div className="definition-section">
                                        <span>{definition.definition}</span>
                                    </div>
                                </div>
                            )
                        })}
            </div>
        </div>
    )
}