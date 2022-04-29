import './App.css';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Footer from './components/Footer';
import ModalWindow from './components/ModalWindow';
import PopupWithForm from './components/PopupWithForm';
import Preloader from './components/Preloader';
import NewsCardList from './components/NewsCardList';
import SavedNews from './components/SavedNews';
import SavedNewsHeader from './components/SavedNewsHeader';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Header />
          <Main />
          <NewsCardList />
          <About />
        </Route>
        <Route path='/saved-news'>
          <SavedNewsHeader />
          <SavedNews />
        </Route>
      </Routes>
      <Footer />
      <ModalWindow />
      <PopupWithForm />
      <Preloader />
      <SearchForm />
    </div>
  );
}

export default App;
