import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import { goFetch } from './apiCalls';
import NewsReel from './NewsReel';
import './App.css';
import Header from './Header';
import Modal from './Modal';


function App() {

  const [science, setScience] = useState([])
  const [home, setHome] = useState([])
  const [us, setUs] = useState([])
  const [world, setWorld] = useState([])
  const [highlighted, setHighlighted] = useState(null)
  const [modalOpen, setModalOpen] =useState(false)

  useEffect(() => {
    goFetch('science')
    .then(data => setScience(data.results))
    goFetch('home')
    .then(data => setHome(data.results))
    goFetch('us')
    .then(data => setUs(data.results))
    goFetch('world')
    .then(data => setWorld(data.results))
  }, [] )

 
  
  

  return (
    <div className="App">
      <Header />
      {modalOpen && <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} highlighted={highlighted} />}
      <NewsReel 
      home={home}
      setHighlighted={setHighlighted}
      setModalOpen={setModalOpen}
      />
      
    </div>
  );
}

export default App;
