import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/Footer";
import ElectionInfo from "./Pages/ElectionInfo";
import VoterInfo from "./Pages/VoterInfo";
import FAQ from "./Pages/FAQ";


function App() {
  return (
    <div className="Nav">
      <BrowserRouter>
      <Navbar />
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/ElectionInfo" element={<ElectionInfo />} />
            <Route path="/VoterInfo" element={<VoterInfo />} />
            <Route path="/FAQ" element={<FAQ />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;