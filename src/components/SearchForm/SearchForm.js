import './SearchForm.css';

function SearchForm() {
  return (
    <div className="search">
      <h1 className='search__title'>What's going on in the world?</h1>
      <h2 className='search__subtitle'>Find the latest news on any topic and save them in your personal account.</h2>
      <span className="search__input">
        <div className="search__input-field-wrapper">
          <input className="search__input-field" placeholder="Enter topic" />
        </div>
        <button className="search__button">Search</button>
      </span>
    </div>
  )
}

export default SearchForm;
