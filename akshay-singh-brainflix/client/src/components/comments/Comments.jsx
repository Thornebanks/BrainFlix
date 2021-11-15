import "./comments.scss";
import OldComments from "../OldComments/OldComents";

function Comments({ activeVideo }) {
  return (
    <ul className="comments">
      {activeVideo?.comments?.map((Comment) => {
        return (
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
