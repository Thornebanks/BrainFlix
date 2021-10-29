
function OldComments(props){
        return (
            <div>
                <h3 className="oldComments__title">{props.name}</h3>
                <p className="oldComments__comments">{props.comment}</p>
            </div>
        )
}

export default OldComments;