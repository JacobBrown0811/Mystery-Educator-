import ArtDisplay from "../components/ArtDisplayComponent"
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
    const [historyEvent, setHistoryEvent] = useState(null);
    const [artPiece, setArtPiece] = useState(null);
    const [year, setYear] = useState(new Date().getFullYear()-100);

    // Function to fetch new event and art piece
    const refreshContent = () => {

        // fetch artPiece
        axios.get(`met/random/${year}`)
            .then(response => setArtPiece(response.data))
            .catch(error => console.error("Error fetching art piece", error));

        //TODO fetch history Event

    };

    useEffect(() => {
        refreshContent(); // Initial fetch on component mount
    }, []);

    return (
        <section className="Home">
            <header>
                <h1>History and Art Explorer</h1>
                <p>Discover historical events and art from the same year.</p>
            </header>
            <div className="content">
                <HistoryEvent data={historyEvent} />
                <ArtDisplay data={artPiece} />
            </div>
            <div className="refresh-button">
                <button onClick={refreshContent}>Refresh</button>
            </div>
        </section>
    )
}

export default Home