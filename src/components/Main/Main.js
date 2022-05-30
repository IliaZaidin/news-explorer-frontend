import './Main.css';
import NewsCardList from '../NewsCardList/NewsCardList';
import About from '../About/About';

function Main(props) {
  const {
    isLoggedIn, location, handleSaveArticle, handleDeleteArticle, searchedArticles, savedArticles
  } = props;

  return (
    <main className='main'>
      <NewsCardList
        isLoggedIn={isLoggedIn}
        location={location}
        searchedArticles={searchedArticles}
        handleSaveArticle={handleSaveArticle}
        handleDeleteArticle={handleDeleteArticle}
        savedArticles={savedArticles}
      />
      <About />
    </main>
  )
}

export default Main;
