
function OldComments(props){
        return (
            <div className="oldComments">
                <div className="oldComments__img"></div>
                <h3 className="oldComments__title">{props.name}</h3>
                <p className="oldComments__date">{props.timestamp}</p>
                <p className="oldComments__comments">{props.comment}</p>
            </div>
        )
}

export default OldComments;