import './NewsCardList.css';
import { useState, useEffect } from 'react';
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList(props) {
  const {
    isLoggedIn, location, searchedArticles, savedArticles,
    handleSaveArticle, handleDeleteArticle
  } = props;
  const isOnSavedNewsPage = (location.pathname === '/saved-news');
  const [sliceOfArticles, setSliceOfArticles] = useState(3);

  useEffect(()=> {
    setSliceOfArticles(parseInt(localStorage.getItem('counter')));
  }, [searchedArticles])

  function showMore() {
    if (sliceOfArticles < searchedArticles.length) {
      localStorage.setItem('counter', (sliceOfArticles + 3).toString());
      setSliceOfArticles(localStorage.getItem('counter'));
    }
  }

  return (
    <>
      {
        isOnSavedNewsPage ?
          <section className={`cards ${(savedArticles.length !== 0) && 'cards__active'}`}>
            <div className="cards__wrapper">
              <ul className="cards__list">
                { //saved
                  savedArticles.map((article, index) => (
                    <NewsCard
                      isLoggedIn={isLoggedIn}
                      location={location}
                      key={index}
                      article={article}
                      handleDeleteArticle={handleDeleteArticle}
                    />
                  ))
                }
              </ul>
            </div >
          </section >
          :
          <section className={`cards ${(searchedArticles.length !== 0) && 'cards__active'}`}>
            <div className="cards__wrapper">
              <ul className="cards__list">
                { //searched
                  searchedArticles.slice(0, sliceOfArticles).map((article, index) => (
                    <NewsCard
                      isLoggedIn={isLoggedIn}
                      location={location}
                      key={index}
                      article={
                        {
                          title: article.title,
                          text: article.content,
                          date: article.publishedAt,
                          source: article.source.name,
                          link: article.url,
                          image: article.urlToImage
                        }
                      }
                      handleSaveArticle={handleSaveArticle}
                      handleDeleteArticle={handleDeleteArticle}
                      savedArticles={savedArticles}
                      searchedArticles={searchedArticles}
                    />
                  ))
                }
              </ul>
              <button
                className={`cards__more ${(sliceOfArticles < searchedArticles.length) && 'cards__more_active'}`}
                onClick={showMore}>Show more
              </button>
            </div>
          </section>
      }
    </>
  )
}

export default NewsCardList;
