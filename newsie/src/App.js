import logo from './logo.svg';
import React, {useState, useEffect} from 'react'
import { goFetch } from './apiCalls';
import NewsReel from './NewsReel';
import './App.css';
import Header from './Header';
import Modal from './Modal';
import Filter from './Filter';


function App() {

  const [home, setHome] = useState([])
  const [highlighted, setHighlighted] = useState(null)
  const [modalOpen, setModalOpen] =useState(false)

  useEffect(() => {
    goFetch('home')
    .then(data => setHome(data.results))
  }, [] )

  const filterFetch = (type) => {
    goFetch(type)
    .then(data => setHome(data.results))
  }
 
  
  

  return (
    <div className="App">
      <Header />
      <Filter fetch={filterFetch} />
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
