import React from 'react';
import './App.css';
import Title from './components/title';
import Uploadimg from './components/uploadImg';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
import {useState} from 'react';

function App() {

  const [selectedImg , setSelectedImg] = useState(null);
  return (
    <div className="App">
     <Title></Title>
     <Uploadimg></Uploadimg>
     <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>
     {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}></Modal>}
    </div>
  );
}

export default App;
