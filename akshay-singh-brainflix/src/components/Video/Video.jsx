import './video.scss';

function Video(props){
    return (
        <div className="current-video">
        <video className="current-video__main" poster={props.video.image} controls></video>
      </div>
    );
}

export default Video;