import './videoDetails.scss';

function VideoDetails(props){
    return (
        <section className="video">
        <h1 className="video__title">{props.video.title}</h1>
        <div className="video__art">
          <p className="video__artist">{"By " + props.video.channel}</p>
          <p className="video__date">{props.video.timestamp}</p>
        </div>
        <article className="video__description">
          {props.video.description}
        </article>
      </section>
     
    );
}
export default VideoDetails;