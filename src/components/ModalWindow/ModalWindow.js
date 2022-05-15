import './ModalWindow.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Preloader from '../Preloader/Preloader';
import Success from '../Success/Success';

function ModalWindow(props) {
  const {
    isModalOpen,
    isFormOpen,
    isPreloaderOpen,
    isSuccessOpen,
    isSignIn,
    handleCloseModal,
    toggleLog,
    redirectToLogin
  } = props;

  return (
    <div className={`modal ${isModalOpen && 'modal_active'}`} onClick={handleCloseModal}>
      <PopupWithForm
        isFormOpen={isFormOpen}
        isSignIn={isSignIn}
        handleCloseModal={handleCloseModal}
        toggleLog={toggleLog}
      />
      <Preloader
        isPreloaderOpen={isPreloaderOpen}
      />
      <Success 
        isSuccessOpen={isSuccessOpen}
        redirectToLogin={redirectToLogin}
        handleCloseModal={handleCloseModal}
      />
    </div>
  )
}

export default ModalWindow;
