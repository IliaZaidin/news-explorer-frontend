import './ModalWindow.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Preloader from '../Preloader/Preloader';
import Info from '../Info/Info';

function ModalWindow(props) {
  const {
    isModalOpen, isLoginFormOpen, isPreloaderOpen, isInfoOpen,
    closeAllPopups, redirectToLogin, handleLoginSubmit, handleSignupSubmit
  } = props;

  return (
    <div className={`modal ${isModalOpen && 'modal_active'}`} onClick={closeAllPopups}>
      <PopupWithForm
        isLoginFormOpen={isLoginFormOpen}
        closeAllPopups={closeAllPopups}
        handleLoginSubmit={handleLoginSubmit}
        handleSignupSubmit={handleSignupSubmit}
      />
      <Preloader
        isPreloaderOpen={isPreloaderOpen}
      />
      <Info
        isInfoOpen={isInfoOpen}
        redirectToLogin={redirectToLogin}
        closeAllPopups={closeAllPopups}
      />
    </div>
  )
}

export default ModalWindow;
