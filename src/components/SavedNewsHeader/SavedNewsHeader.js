import './SavedNewsHeader.css';

function SavedNewsHeader() {
  return (
    <header className="header-saved">
      <h2 className='header-saved__title'>Saved articles</h2>
      <h3 className='header-saved__subtitle'><span className='header-saved__user'>Elise</span>, you have 5 saved articles</h3>
      <h4 className='header-saved__keywords'>By keywords: <span className='header-saved__keywords-list'>Nature, Yellowstone, and 2 other</span></h4>
    </header>
  )
}

export default SavedNewsHeader;