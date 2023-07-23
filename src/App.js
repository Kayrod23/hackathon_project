import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="Nav">
      <BrowserRouter>
      <Navbar />
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </BrowserRouter>
    </div>
  );
}


export default App;