import ArtDisplay from "../components/ArtDisplayComponent"
import { useState, useEffect } from "react";

const Home = () => {
    const [historyEvent, setHistoryEvent] = useState(null);
    const [artPiece, setArtPiece] = useState(null);

    // Function to fetch new event and art piece
    const refreshContent = () => {
        // Fetch and update state for historyEvent and artPiece
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