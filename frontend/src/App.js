import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBarComponent";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/new-meetups" element={<AboutUs />} /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
