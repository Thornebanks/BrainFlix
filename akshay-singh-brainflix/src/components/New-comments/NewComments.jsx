import hero from '../../assests/Images/Mohan-muruge.jpg'

function NewComments() {
    return (
        <section className="new-comments">
          <p className="new-comments__total-comments">3 Comments</p>
          <h3 className="new-comments__title">join the conversation</h3>
          <div className="new-comments__section">
            <div className="new-comments__img"><img src={hero} alt="hero image" /></div>
            <form>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Add new comment"
                required
              ></textarea>
              <button className="new-comments__btn">comment</button>
            </form>
          </div>
        </section>
    );
}

export default NewComments;