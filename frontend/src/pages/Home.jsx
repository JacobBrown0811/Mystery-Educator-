import ArtDisplay from "../components/ArtDisplayComponent";
import { useState, useEffect } from "react";
import axios from "axios";
import HistoryEvent from "../components/HistoryDisplayComponent";

const Home = () => {
  const [historyEvent, setHistoryEvent] = useState(null);
  const [artPiece, setArtPiece] = useState(null);
  const [year, setYear] = useState(new Date().getFullYear() - 100);
  const [userInput, setUserInput] = useState("");

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

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleUserInput = () => {
    setYear(userInput);
    refreshContent();
  };

  return (
    <div className="main-box">
      <img src="/media/pictures/ChildrenIGuess.png" alt="Placeholder" />
      <div className="action-buttons">
        <button
          className="action-button"
          onClick={() => console.log("Button 1 clicked")}
          title="Placeholder text for box 1 that will be a description for the user to describe the action of the button"
        >
          <HistoryEvent data={historyEvent} />
        </button>
        <button
          className="action-button"
          onClick={() => console.log("Button 2 clicked")}
          title="Placeholder text for box 2 that will be a description for the user to describe the action of the button"
        >
          <ArtDisplay data={artPiece} />
        </button>
        <button
          className="action-button"
          onClick={refreshContent}
          title="Placeholder text for box 3 that will be a description for the user to describe the action of the button"
        >
          Refresh
        </button>
        <div>
          <input
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter a year..."
          />
          <button className="action-button" onClick={handleUserInput}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
