import './App.css';
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import ModalWindow from '../ModalWindow/ModalWindow';
import SavedNews from '../SavedNews/SavedNews';
import { getArticlesFromApi } from '../../utils/NewsApi';
import { register, login, getUserData, saveArticle, deleteArticle, getArticlesFromDb } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isPreloaderOpen, setPreloaderOpen] = useState(false);
  const [isInfoOpen, setInfoOpen] = useState(false);
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  const location = useLocation();
  const navigate = useNavigate();

  // localStorage.clear()

  useEffect(() => {
    (async () => {
      try {
        const user = await getUserData(localStorage.getItem('jwt').jwt);
        setCurrentUser(user);
        setLoggedIn(true);
      } catch (error) {
        return;
      }

      try {
        const articlesFromDb = await getArticlesFromDb();
        setSavedArticles(articlesFromDb);
      } catch (error) {
        setSavedArticles([]);
      }
      setSearchedArticles(JSON.parse(localStorage.getItem('lastSearch')) || []);
    })();
  }, [isLoggedIn]);

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    };
    document.addEventListener('keydown', closeByEscape);
    return () => document.removeEventListener('keydown', closeByEscape);
  }, [])

  function closeAllPopups() {
    setInfoOpen(false);
    setLoginFormOpen(false);
    setPreloaderOpen(false);
    setModalOpen(false);
  }

  function redirectToLogin() {
    setLoginFormOpen(true);
    setInfoOpen(false);
  }

  function handleLogOut() {
    navigate('/');
    localStorage.removeItem('jwt');
    localStorage.removeItem('lastSearch');
    setLoggedIn(false);
  }

  function handleLogIn() {
    setModalOpen(true);
    setLoginFormOpen(true);
  }

  async function handleLoginSubmit(event, email, password) {
    try {
      event.preventDefault();
      setModalOpen(true);
      setPreloaderOpen(true);

      const data = await login(email, password);
      if (data) {
        localStorage.setItem('jwt', data.token);
        
        const user = await getUserData(localStorage.getItem('jwt').jwt);
        if (user) {
          setCurrentUser(user || {});
          setLoggedIn(true);

          const articlesFromDb = await getArticlesFromDb();
          if (articlesFromDb) {
            setSavedArticles(articlesFromDb || []);
          }
        }
      }
      setModalOpen(false);
      setPreloaderOpen(false);
      setLoginFormOpen(false);
    }
    catch (error) {
      closeAllPopups();
      alert('Failed to log in.');
    }
  }

  async function handleSignupSubmit(event, email, password, username) {
    try {
      event.preventDefault();
      setLoginFormOpen(false);
      await register(email, password, username);
      setInfoOpen(true);
    } catch (error) {
      closeAllPopups();
      alert('Failed to sign up.')
    }
  };

  async function handleSearchSubmit(event, keyWord) {
    try {
      event.preventDefault();
      setModalOpen(true);
      setPreloaderOpen(true);
      let searchResult = await getArticlesFromApi(keyWord); 
      localStorage.setItem('lastSearch', JSON.stringify(searchResult.articles));
      localStorage.setItem('keyWord', keyWord);
      setSearchedArticles(JSON.parse(localStorage.getItem('lastSearch')))
      localStorage.setItem('counter', 3)
      setModalOpen(false);
      setPreloaderOpen(false);
    } catch (error) {
      closeAllPopups();
      alert('The search failed.');
    }
  }

  async function handleDeleteArticle(article) {
    try {
      await deleteArticle(article);
      const articlesFromDb = await getArticlesFromDb();
      setSavedArticles(articlesFromDb);
    } catch (error) {
      setSavedArticles([]);
    }
  }

  async function handleSaveArticle(article) {
    try {
      await saveArticle(article);
      const articlesFromDb = await getArticlesFromDb();
      setSavedArticles(articlesFromDb);
    } catch (error) {
      if (isLoggedIn)
        alert('Failed to save article.');
    }
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header
          isLoggedIn={isLoggedIn}
          location={location}
          handleLogOut={handleLogOut}
          handleLogIn={handleLogIn}
          handleSearchSubmit={handleSearchSubmit}
          savedArticles={savedArticles}
        />
        <Routes>
          <Route
            path='/'
            element={<Main
              isLoggedIn={isLoggedIn}
              location={location}
              handleSaveArticle={handleSaveArticle}
              handleDeleteArticle={handleDeleteArticle}
              searchedArticles={searchedArticles}
              savedArticles={savedArticles}
            />}
          />
          <Route
            path='/saved-news'
            element={
              isLoggedIn ?
                < SavedNews
                  isLoggedIn={isLoggedIn}
                  location={location}
                  handleDeleteArticle={handleDeleteArticle}
                  savedArticles={savedArticles}
                />
                :
                <Navigate to="/" />
            }
          />
        </Routes>
        <Footer />
        <ModalWindow
          isModalOpen={isModalOpen}
          isLoginFormOpen={isLoginFormOpen}
          isPreloaderOpen={isPreloaderOpen}
          isInfoOpen={isInfoOpen}
          closeAllPopups={closeAllPopups}
          redirectToLogin={redirectToLogin}
          handleLoginSubmit={handleLoginSubmit}
          handleSignupSubmit={handleSignupSubmit}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
