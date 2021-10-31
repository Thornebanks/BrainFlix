import './comments.scss';
import OldComments from './OldComents';

function Comments(props){
    return (
        <ul className="comments">
          {props.video.comments.map((Comment) => {
            return(
              <OldComments
                      key={Comment.id}
                      name={Comment.name}
                      timestamp={Comment.timestamp}
                      comment={Comment.comment}
                     
                      />
            );
          })}
        </ul>
    );        
}
export default Comments;