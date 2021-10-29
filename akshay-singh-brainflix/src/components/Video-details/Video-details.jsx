

function VideoDetails(props){
    return (
        <section className="video">
        <h1 className="video__title">{props.video.title}</h1>
        <p className="video__artist">{props.video.channel}</p>
        <p className="video__date">{props.video.timestamp}</p>
        <article className="video__description">
          {props.video.description}
        </article>
      </section>
     
    );
}
export default VideoDetails;