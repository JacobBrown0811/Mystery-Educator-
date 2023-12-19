import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import './App.css';
import NavBar from "./components/NavBarComponent";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-meetups" element={<AboutUs />} />
        </Routes>
      </main>
    </Layout>
  );
}

export default App;
