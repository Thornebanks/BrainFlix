

function Video(props){
    return (
        <div>
        <video poster={props.video.image} controls></video>
      </div>
    );
}

export default Video;