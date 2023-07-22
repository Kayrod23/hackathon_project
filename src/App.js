import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Search from "./Pages/Search";
import Navbar from "./components/Navbar";

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
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;