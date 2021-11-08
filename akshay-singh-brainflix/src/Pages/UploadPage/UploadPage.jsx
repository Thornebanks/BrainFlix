import logo from "../../assests/Logo/BrainFlix-logo.svg";
import hero from "../../assests/Images/Mohan-muruge.jpg";
import thumbnail from "../../assests/Images/Upload-video-preview.jpg";
import Home from "../Home/Home";
import "./UploadPage.scss";

function UploadPage() {
  return (
    <div>
      <header className="header">
        <a href={Home}>
          <img className="header__img" src={logo} alt="BrainFlix logo" />
        </a>
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
      <main className="upload">
        <h1 className="upload__title">Upload Video</h1>
        <h3 className="upload__thumbnail">video thumbnail</h3>
        <img className="upload__img" src={thumbnail} alt="thumbnail" />
        <form className="upload__form">
          <input
            className="upload__form upload__form--search"
            type="text"
            name=""
            id=""
            placeholder="Add a title to your video"
          />
          <textarea
            className="upload__textarea"
            cols="30"
            rows="10"
            placeholder="Add a description to your video"
          ></textarea>
          <div className="upload__btn">
            <button
              className="upload__btn upload__btn--style"
              onClick={(event) => event.preventDefault()}
            >
              publish
            </button>
          </div>
          <div className="upload__cancelBtn">
            <button
              className="upload__cancelBtn upload__cancelBtn--style"
              onClick={(event) => event.preventDefault()}
            >
              cancel
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default UploadPage;
