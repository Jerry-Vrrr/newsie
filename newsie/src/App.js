import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import { goFetch } from './apiCalls';
import './App.css';


function App() {

  const [science, setScience] = useState([])
  const [home, setHome] = useState([])
  const [us, setUs] = useState([])
  // const [art, setArt] = useState([])
  const [world, setWorld] = useState([])

  useEffect(() => {
    goFetch('science')
    .then(data => setScience(data.results))
    goFetch('home')
    .then(data => setHome(data.results))
    // goFetch('art')
    // .then(data => setArt(data.results))
    goFetch('us')
    .then(data => setUs(data.results))
    goFetch('world')
    .then(data => setWorld(data.results))
  }, [] )
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* {home && home[0]} */}
        </p>
        
      </header>
    </div>
  );
}

export default App;
