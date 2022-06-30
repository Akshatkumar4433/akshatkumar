
class CommentDashboard extends React.Component {
    state = {
        commentsList : [
            {
                title: "Sweetest Person",
                comment: 'He was so nc to talk to.',
                id: uuid.v4(),
                name: 'Alex Smith',
             },
            {
                title: "Learned A lot",
                comment: 'It was fun Programming with you',
                id: uuid.v4(),
                name: 'John Meyer',

            },
            {
                title: "Quirky Turtle",
                comment: 'You are Quirky',
                id: uuid.v4(),
                name: 'Lisa Kelly',
            },
        ]
    }
    render() {
        return(
            <div>
            <CommentView commentsList = {this.state.commentsList}/>
            <CommentForm />
            </div>
        )
    }
}

class CommentView extends React.Component {
    render() {
        const commentsList = this.props.commentsList.map((comment) => (
            <Comment
               key = {comment.id}
               title = {comment.title}
               comment = {comment.comment}
               name = {comment.name}  
            />
        ));
        return(
                <div>
                {commentsList}
                </div>
        )
    }
}

class Comment extends React.Component {
    render() {
        return(
            <div>
                <h6>{this.props.title}</h6>
                <p>{this.props.comment}</p>
                <p>{this.props.name}</p>
            </div>

        )
    }
}


class CommentForm extends React.Component {
    render() {
        return(
            <p>HEre you will enter you comments</p>
        )
    }
}

ReactDOM.render(
    <CommentDashboard/>,
    document.getElementById('comment-box')
)
