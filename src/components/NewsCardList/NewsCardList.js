import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <div className="cards">
      <span className="cards__wrapper">
        <div className="cards__list">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
        <button className="cards__button">Show more</button>
      </span>
    </div>
  )
}

export default NewsCardList;
