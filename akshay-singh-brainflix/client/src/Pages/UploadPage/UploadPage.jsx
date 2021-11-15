import logo from "../../assests/Logo/BrainFlix-logo.svg";
import hero from "../../assests/Images/Mohan-muruge.jpg";
import thumbnail from "../../assests/Images/Upload-video-preview.jpg";
import { Link } from "react-router-dom";
import "./UploadPage.scss";
import axios from "axios";

function UploadPage() {
  function uploadVideo(event) {
    console.log(event.target);
    event.preventDefault();
    axios
      .post("http://localhost:8081/videos", {
        title: event.target.Title.value,
        description: event.target.Description.value,
      })

      .then((response) => {
        console.log(response);
      });
  }

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
              required
            />
            <div className="header__btn">
              <button className="header__btn header__btn--style" type="submit">
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
        <div className="upload__desktop">
          <img className="upload__img" src={thumbnail} alt="thumbnail" />
          <form className="upload__form" onSubmit={uploadVideo}>
            <div className="upload__container upload__container--top">
              <h3 className="upload__video">title your video</h3>
              <input
                className="upload__form upload__form--title"
                type="text"
                name="Title"
                placeholder="Add a title to your video"
                required
              />
            </div>
            <div className="upload__container upload__container--bottom">
              <h3 className="upload__description">add a video description</h3>
              <textarea
                className="upload__textarea"
                cols="31"
                rows="5"
                name="Description"
                placeholder="Add a description to your video"
                required
              ></textarea>
            </div>
            <div className="upload__btn-container">
              <div className="upload__btn">
                <button
                  className="upload__btn upload__btn--style"
                  type="submit"
                >
                  publish
                </button>
              </div>
              <div className="upload__cancelBtn">
                <Link
                  to="/"
                  className="upload__cancelBtn upload__cancelBtn--style"
                >
                  cancel
                </Link>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

export default UploadPage;
