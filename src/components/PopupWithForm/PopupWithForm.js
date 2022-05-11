import './PopupWithForm.css';

function PopupWithForm(props) {
  const {
    isFormOpen,
    isSignIn,
    handleCloseModal,
    toggleLog
  } = props;

  return (
    <div className={`popup ${isFormOpen && 'popup_active'}`} onClick={(event)=>{event.stopPropagation()}}>
      <h2 className="popup__title">
        {isSignIn ? 'Sign in' : 'Sign up'}
      </h2>
      <form className="popup__form">
        <label className='popup__input-label'>
          Email
          <input className="popup__input" placeholder="Enter email" type='email' />
          <span className='popup__error'>error</span>
        </label>
        <label className='popup__input-label'>
          Password
          <input className="popup__input" placeholder="Enter password" type='password' />
          <span className='popup__error'>error</span>
        </label>
        <label className={`popup__input-label ${isSignIn && 'popup__input-label_inactive'}`}>
          Username
          <input className="popup__input" placeholder="Enter your username" type='text' />
          <span className='popup__error'>error</span>
        </label>
        <button className="popup__button">
          {isSignIn ? 'Sign in' : 'Sign up'}
        </button>
      </form>
      <span className='popup__log-select' onClick={toggleLog}>
        {isSignIn ? ' or Sign Un' : 'or Sign in'}
      </span>
      <button className='popup__close' onClick={handleCloseModal} >&#10005;</button >
    </div>
  )
}

export default PopupWithForm;
