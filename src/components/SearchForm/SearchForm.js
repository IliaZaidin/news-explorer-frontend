import './SearchForm.css';
import { useState } from 'react';

function SearchForm(props) {
  const { handleSearchSubmit } = props;
  const [keyWord, setKeyWord] = useState('');

  return (
    <div className="search" >
      <h1 className='search__title'>What's going on in the world?</h1>
      <h2 className='search__subtitle'>Find the latest news on any topic and save them in your personal account.</h2>
      <form
        className="search__input"
        onSubmit={(event) => {
          handleSearchSubmit(event, keyWord)
        }
        }
      >
        <div className="search__input-field-wrapper">
          <input
            id='search-input'
            name='search-input'
            className="search__input-field"
            type="text"
            minLength="2"
            required
            placeholder="Enter topic"
            value={keyWord}
            onChange={(event) => setKeyWord(event.target.value.toLowerCase())}
          />
        </div>
        <button className="search__button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default SearchForm; 
