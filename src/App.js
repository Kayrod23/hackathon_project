import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.jsx";
import Search from "./Pages/Search";
import Navbar from "./components/Navbar";

function App() {
  const [pollLocations, setPollLocations] = useState(null)
useEffect (() => {
  fetch(
    `https://data.cityofnewyork.us/resource/utqd-4534.json`
  )
    .then((results) => results.json())
    .then((response) => {
      setPollLocations(response)
    }).catch((error) => {
      console.log(error);
    })      
}, [])

  return (
    <div className="Nav">
      <BrowserRouter>
      <Navbar />
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home pollLocations={pollLocations} />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}


export default App;