import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ElectionInfo from "./Pages/ElectionInfo";
import VoterInfo from "./Pages/VoterInfo";
import FAQ from "./Pages/FAQ";
import "./App.css";
function App() {
  return (
    <div className="Nav">
      <Router>
        <Navbar />
        <main>
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/electioninfo" element={<ElectionInfo />} />
            <Route path="/voterinfo" element={<VoterInfo />} />
            <Route path="/faq" element={<FAQ />} />
            </Routes> 
        </main>
      </Router>
    </div>
  );
}

export default App;