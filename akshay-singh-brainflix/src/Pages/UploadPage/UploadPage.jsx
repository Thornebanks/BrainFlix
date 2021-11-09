import logo from "../../assests/Logo/BrainFlix-logo.svg";
import hero from "../../assests/Images/Mohan-muruge.jpg";
import thumbnail from "../../assests/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import "./UploadPage.scss";

function UploadPage() {
  return (
    <div>
      <header className="header">
        <Link to="/">
          <img className="header__img" src={logo} alt="BrainFlix logo" />
        </Link>
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
              <button className="header__btn header__btn--style">upload</button>
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
        <div className="upload__desktop">
            <img className="upload__img" src={thumbnail} alt="thumbnail" />
            <form className="upload__form">
              <div className="upload__container upload__container--top">
                <h3 className="upload__video">title your video</h3>
                <input
                  className="upload__form upload__form--title"
                  type="text"
                  name=""
                  id=""
                  placeholder="Add a title to your video"
                />
              </div>
              <div className="upload__container upload__container--bottom">
                <h3 className="upload__description">add a video description</h3>
                <textarea
                  className="upload__textarea"
                  cols="31"
                  rows="5"
                  placeholder="Add a description to your video"
                ></textarea>
              </div>
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
        </div>
      </main>
    </div>
  );
}

export default UploadPage;
