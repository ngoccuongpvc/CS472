import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom";
import { ClipLoader } from 'react-spinners';

export default function Leaderboard(props) {
    const { countdownInterval } = props;

    const [countdown, setCountdown] = useState(countdownInterval);
    const [topWords, setTopWords] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchTopWords = async () => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/dictionary/leaderboard`);
            const data = await response.json();
            setTopWords(data);
        } catch (error) {
            alert(error.message);
        } finally {
            setLoading(false);
            setCountdown(countdownInterval, 0);
        }
    }

    useEffect(() => {
        fetchTopWords()
    }, []);

    useEffect(() => {
        if (countdown === 0) {
            fetchTopWords();
        } else {
            setTimeout(() => setCountdown(countdown => countdown - 1), 1000);
        }
    }, [countdown]);

    return (
        <div className="d-flex flex-column">
            <div className="d-flex justify-content-center">
                <h1>Top Searched Words</h1>
            </div>
            <div class="container text-center w-50">

                {
                    loading ? <ClipLoader color={"#09f"} loading={loading} size={50} /> :
                        topWords.map(
                            (topWord, rank) => (
                                <div class="row my-4">
                                    <div class="col">
                                        <span className={`top-item top-${rank + 1}`}>
                                            {rank + 1}
                                        </span>
                                    </div>
                                    <div class="col">
                                        <NavLink className="link-to-word-search" to={`/words/${topWord.word}`}>{topWord.word}</NavLink>
                                    </div>
                                    <div class="col">
                                        {topWord.counter}
                                    </div>
                                </div>
                            )
                        )
                }

                <div className="row">
                    <span>* The leaderboard will refresh after {countdown} seconds</span>
                </div>
            </div>

        </div>
    )
}