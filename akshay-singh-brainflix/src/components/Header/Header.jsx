import logo from "../../assests/Logo/BrainFlix-logo.svg";
import hero from "../../assests/Images/Mohan-muruge.jpg";
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
            <button
              className="header__btn header__btn--style"
              onClick={(event) => event.preventDefault()}
            >
              upload
            </button>
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
