import './NewsCardList.css';
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  return (
    <section className="cards">
      <div className="cards__wrapper">
        <ul className="cards__list">
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </ul>
        <button className="cards__button">Show more</button>
      </div>
    </section>
  )
}

export default NewsCardList;
