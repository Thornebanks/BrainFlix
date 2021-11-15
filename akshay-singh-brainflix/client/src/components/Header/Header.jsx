import logo from "../../assests/Logo/BrainFlix-logo.svg";
import hero from "../../assests/Images/Mohan-muruge.jpg";
import { Link } from 'react-router-dom';
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/"><img className="header__img" src={logo} alt="BrainFlix logo" /></Link>
      <div className="header__search">
        <form className="header__form">
          <input
            className="header__form header__form--search"
            type="text"
            name=""
            id=""
            placeholder="Search"
            required
          />
          <div className="header__btn">
            <Link to="/upload"
              className="header__btn header__btn--style"
              >
                upload
              
            </Link>
          </div>
        </form>
        <div className="header__hero">
          <img src={hero} alt="hero image" />
        </div>
      </div>
    </header>
  );
}

export default Header;
