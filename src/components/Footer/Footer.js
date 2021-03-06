import './Footer.css';
import { Link } from "react-router-dom";
import facebookLogo from '../../images/fb.svg';
import githubLogo from '../../images/github.svg'

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className='footer__wrapper'>
        <h2 className="footer__title">&copy; {year} Ilia Zaidin, Powered by News API</h2>
        <Link to='/' className="footer__home-link link">Home</Link>
        <a className="footer__practicum-link link" href="https://practicum.com/data-analyst/" target='_blank' rel="noreferrer">Practicum by Yandex</a>
        <a className="footer__github link" href="https://github.com/yandex-praktikum" target='_blank' rel="noreferrer">
          <img className="footer__image" src={githubLogo} alt="github logo"></img>
        </a>
        <a className="footer__facebook link" href="https://www.facebook.com/Practicum100IL" target='_blank' rel="noreferrer">
          <img className="footer__image" src={facebookLogo} alt="facebook logo"></img>
        </a>
      </div>
    </footer>
  )
}

export default Footer;
