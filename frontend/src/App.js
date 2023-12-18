import logo from "./logo.svg";
import "./App.css";

/* Nav Bar implementation */
import NavBar from './components/NavBarComponent';

function App() {
  return (
    <div className="App">

    {/* Nav Bar implementation */}
    <NavBar />
    
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          hello world
        </a>
      </header>
    </div>
  );
}

export default App;
