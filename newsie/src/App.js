import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import { goFetch } from './apiCalls';
import NewsReel from './NewsReel';
import './App.css';


function App() {

  const [science, setScience] = useState([])
  const [home, setHome] = useState([])
  const [us, setUs] = useState([])
  const [world, setWorld] = useState([])
  const [highlighted, setHighlighted] = useState(null)

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
      <NewsReel 
      home={home}
      setHighlighted={setHighlighted}
      />
    </div>
  );
}

export default App;
