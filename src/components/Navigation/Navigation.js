import './Navigation.css';
import { Link } from "react-router-dom";

function Navigation(props) {
  const {
    isLoggedIn,
    isNavOpen,
    setNavOpen,
    location,
    handleOpenForm,
    handleLogOut
  } = props;

  const isOnSavedNewsPage = (location.pathname === '/saved-news');

  return (
    <div className={`navigation ${isNavOpen && 'navigation_active'} ${isOnSavedNewsPage && 'navigation__type_saved'}`}>
      <Link
        to='/' className={`navigation__home link ${isOnSavedNewsPage && 'navigation__home_type_saved'}`}
        onClick={() => { setNavOpen(false) }}
      >Home
      </Link>

      <Link
        to='/saved-news' className={`navigation__saved link ${isOnSavedNewsPage && 'navigation__saved_type_saved'}`}
        onClick={() => { setNavOpen(false) }}
      >Saved articles
      </Link>

      <button
        className={`navigation__log-button ${isOnSavedNewsPage && 'navigation__log-button_type_saved'}`}
        onClick={isLoggedIn ? handleLogOut : handleOpenForm}
      >
        {isLoggedIn ?
          <>
            <span className={`navigation__log-title ${isOnSavedNewsPage && 'navigation__log-title_type_saved'}`}>Elis</span>
            <div className={`navigation__log-image ${isOnSavedNewsPage && 'navigation__log-image_type_saved'}`}></div>
          </> :
          <span className={`navigation__log-title ${isOnSavedNewsPage && 'navigation__log-title_type_saved'}`}>Sign in</span>
        }
      </button>
    </div>
  )
}

export default Navigation;
