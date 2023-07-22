// import logo from "./logo.svg";
import "./App.css";
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchUsers } from './redux/actions/usersActions';
// import React from "react";
// import { Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="Nav">

      {/* <Router> */}
      <Navbar />
        <main>
          {/* <Routes> */}
            <Home />
            {/* <Route path="/" element={<Home />} />
          </Routes> */}
        </main>
      {/* </Router> */}
    </div>
  );
}

export default App;
