import logo from "../../assests/Logo/BrainFlix-logo.svg";
import hero from "../../assests/Images/Mohan-muruge.jpg";
import UploadPage from "../../Pages/UploadPage/UploadPage";
import { Link } from 'react-router-dom';
import "./header.scss";

function Header() {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="BrainFlix logo" />
      <div className="header__search">
        <form className="header__form">
          <input
            className="header__form header__form--search"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <div className="header__btn">
            <a href={UploadPage}>
              <button
                className="header__btn header__btn--style"
                onClick={(event) => event.preventDefault()}
              >
                upload
              </button>
            </a>
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
