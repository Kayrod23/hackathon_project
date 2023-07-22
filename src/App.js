import './App.css';
import { useEffect, useState } from 'react';
import Home from './componets/Home';

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
    <div><Home pollLocations={pollLocations}/></div>
  );
}

export default App;
