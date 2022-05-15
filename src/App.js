import './App.css';
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import ModalWindow from './components/ModalWindow/ModalWindow';
import SavedNews from './components/SavedNews/SavedNews';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isFormOpen, setFormOpen] = useState(false);
  const [isPreloaderOpen, setPreloaderOpen] = useState(false);
  const [isSuccessOpen, setSuccessOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isSignIn, setSignIn] = useState(true);
  const [isNavOpen, setNavOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [])

  function handleOpenForm() {
      setModalOpen(true);
      setFormOpen(true);
  }

  function handleCloseModal() {
    setModalOpen(false);
    setFormOpen(false);
    setSignIn(true);
  }

  function handleLogOut() {
    setLoggedIn(false);
    navigate('/');
  }

  function redirectToLogin() {
    setSuccessOpen(false);
    setFormOpen(true);
  }

  return (
    <div className="App">
      <Header
        isLoggedIn={isLoggedIn}
        isNavOpen={isNavOpen}
        setNavOpen={setNavOpen}
        location={location}
        handleOpenForm={handleOpenForm}
        handleLogOut={handleLogOut}
      />
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/saved-news'
          element={<SavedNews />}
        />
      </Routes>
      <Footer />
      <ModalWindow
        isModalOpen={isModalOpen}
        isFormOpen={isFormOpen}
        isPreloaderOpen={isPreloaderOpen}
        isSuccessOpen={isSuccessOpen}
        isSignIn={isSignIn}
        handleCloseModal={handleCloseModal}
        toggleLog={()=>{setSignIn(!isSignIn)}}
        redirectToLogin={redirectToLogin}
      />
    </div>
  );
}

export default App;
