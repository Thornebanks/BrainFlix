import hero from "../../assests/Images/Mohan-muruge.jpg";
import "./newComments.scss";

function NewComments() {
  return (
    <section className="new-comments">
      <p className="new-comments__total">3 Comments</p>
      <h3 className="new-comments__title">join the conversation</h3>
      <div className="new-comments__section">
        <div>
          <img className="new-comments__img" src={hero} alt="hero image" />
        </div>
        <form className="new-comments__form">
          <textarea
            className="new-comments__textarea"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Add a new comment"
            required
          ></textarea>
          <div className="new-comments__btn">
            <button
              className="new-comments__btn new-comments__btn--style"
              onClick={(event) => event.preventDefault()}
            >
              comment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default NewComments;
