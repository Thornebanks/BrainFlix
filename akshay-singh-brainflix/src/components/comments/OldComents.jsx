
function OldComments(props){
    const date = new Date(parseInt(props.timestamp)).toLocaleDateString
    console.log(date);
        return (
            <div className="oldComments">
                <div className="oldComments__img"></div>
                <h3 className="oldComments__title">{props.name}</h3>
                <p className="oldComments__date">{props.timestamp}</p>
                {/* I tried converting, but idk how to */}
                <p className="oldComments__comments">{props.comment}</p>
            </div>
        )
}

export default OldComments;