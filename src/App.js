
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import Searchbar from './components/Searchbar.js';
import Modal from './components/Modal.js';
import FetchApi from './components/FetchApi.js';

function App() {
  const [showModal, setShowModal] = useState(false)
  const [SearchImage, setSearchImage] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleFormSubmit = SearchImage => {
    setSearchImage(SearchImage);
  }

  const toggleModal = imageUrl => {
    setShowModal(!showModal)
    setImageUrl(imageUrl)
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleFormSubmit(SearchImage);
    }
  };

  return (
    <div className="App">
      <Searchbar
        handleFormSubmit={handleFormSubmit}
        handleKeyPress={handleKeyPress} />
      
      <ToastContainer autoClose={3000} />

      <FetchApi
        SearchImage={SearchImage}
        onClick={toggleModal} />
        
      {showModal && (
        <Modal onClose={toggleModal}>
          
          <div>
            <button type='button'
              onClick={toggleModal}>X</button>
          </div>
      
          <img src={imageUrl} alt="Selected" />
          
        </Modal>
      )}
    </div>
  );
};

export default App;