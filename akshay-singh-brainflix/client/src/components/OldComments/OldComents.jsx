import React from "react";
import './OldComments.scss';

function OldComments(props) {
  const date = new Date(Number(props.timestamp)).toLocaleDateString();
  return (
    <div className="oldComments">
      <div className="oldComments__container">
        <div className="oldComments__img"></div>
        <h3 className="oldComments__title">{props.name}</h3>
        <p className="oldComments__date">{date}</p>
      </div>
      <p className="oldComments__comments">{props.comment}</p>
    </div>
  );
}


export default OldComments;
