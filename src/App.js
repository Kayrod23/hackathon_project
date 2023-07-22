import logo from './logo.svg';
import './App.css';

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
    <div className="App">
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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;