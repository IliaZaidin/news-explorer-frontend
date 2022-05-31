import './PopupWithForm.css';
import { useState, useEffect } from 'react';

function PopupWithForm(props) {
  const {
    isLoginFormOpen, closeAllPopups, handleLoginSubmit, handleSignupSubmit
  } = props;
  const [isLoggingIn, setLoggingIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isInputValid, setInputValid] = useState(true);

  useEffect(() => {
    setLoggingIn(true);
  }, [isLoginFormOpen])

  function handleClose() {
    closeAllPopups();
  }

  function handleSubmit(event) {
    isLoggingIn ? handleLoginSubmit(event, email, password) : handleSignupSubmit(event, email, password, username);
  }

  return (
    <div className={`popup ${isLoginFormOpen && 'popup_active'}`} onClick={(event) => { event.stopPropagation() }}>
      <h2 className="popup__title">
        {isLoggingIn ? 'Sign in' : 'Sign up'}
      </h2>
      <form
        className="popup__form"
        onSubmit={handleSubmit}
      >
        <label className='popup__input-label'>
          Email
          <input
            className="popup__input"
            placeholder="Enter email"
            type='email'
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <p className={`popup__error ${!isInputValid && 'popup__error_active'}`}></p>
        </label>

        <label className='popup__input-label'>
          Password
          <input
            className="popup__input"
            placeholder="Enter password"
            type='password'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p className={`popup__error ${!isInputValid && 'popup__error_active'}`}></p>
        </label>

        {
          !isLoggingIn &&
          <label className='popup__input-label'>
            Username
            <input
              className="popup__input"
              placeholder="Enter your username"
              type='text'
              minLength={2}
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <p className={`popup__error ${!isInputValid && 'popup__error_active'}`}></p>
          </label>
        }

        <button className={`popup__submit-button ${isInputValid && 'popup__submit-button_active'}`} type='submit'>
          {isLoggingIn ? 'Sign in' : 'Sign up'}
        </button>
      </form>

      <p className='popup__log-select' onClick={() => setLoggingIn(!isLoggingIn)}>
        {isLoggingIn ? ' or Sign Un' : 'or Sign in'}
      </p>

      <button className='popup__close' onClick={handleClose} >&#10005;</button >
    </div>
  )
}

export default PopupWithForm;
