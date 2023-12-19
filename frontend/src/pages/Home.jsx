import ArtDisplay from "../components/ArtDisplayComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import HistoryEvent from "../components/HistoryDisplayComponent";

const Home = () => {
  const [historyEvent, setHistoryEvent] = useState(null);
  const [artPiece, setArtPiece] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear() - 100);

  // Function to fetch new event and art piece
  const refreshContent = () => {
    // fetch artPiece
    axios
      .get(`met/random/${year}`)
      .then((response) => setArtPiece(response.data))
      .catch((error) => console.error("Error fetching art piece", error));

    // fetch history Event
    axios
      .get(`history/random/${year}`)
      .then((response) => setHistoryEvent(response.data))
      .catch((error) => console.error("Error fetching fact", error));
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
  );
};

const Home = () => {
  return (
    <div className="main-box">
      <img src="/media/pictures/ChildrenIGuess.jpg" alt="Placeholder" />
      <div className="action-buttons">
        <button
          className="action-button"
          onClick={() => console.log("Button 1 clicked")}
          title="Placeholder text for box 1 that will be a description for the user to describe the action of the button"
        >
          <img
            src="/media/pictures/yellowChildren.jpg"
            alt="Art Facts"
            className="button-image"
          />
          Button 1
        </button>
        <button
          className="action-button"
          onClick={() => console.log("Button 2 clicked")}
          title="Placeholder text for box 2 that will be a description for the user to describe the action of the button"
        >
        <img
            src="/media/pictures/redChildren.jpg"
            alt="History Facts"
            className="button-image"
          />
          Button 2
        </button>
        <button
          className="action-button"
          onClick={() => console.log("Button 3 clicked")}
          title="Placeholder text for box 3 that will be a description for the user to describe the action of the button"
        >
        <img
            src="/media/pictures/blueChildren.jpg"
            alt="Random Facts"
            className="button-image"
          />
          Button 3
        </button>
      </div>
    </div>
  );
};

export default Home;
