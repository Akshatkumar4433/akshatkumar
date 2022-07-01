
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

    onSubmitClick = (attrs) => {
        let title = attrs.title;
        let comment = attrs.comment;
        let name = attrs.name; 
        let id = attrs.id;
        this.setState({
            commentsList : this.state.commentsList.concat(
                {
                    title,comment,name,id
                }
            )
        })
    }
    render() {
        return(
            <div className = "container-md">
            <CommentView commentsList = {this.state.commentsList}/>
            <CommentForm onSubmitClick = {this.onSubmitClick}/>
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
            <div className = 'card'>
                <div className = 'card-header'>
                <p>{this.props.title}</p>
                </div>
                <div className = 'card-body'>
                <p>{this.props.comment}</p>
                <h6>{this.props.name}</h6>
                </div>
            </div>

        )
    }
}


class CommentForm extends React.Component {
    state = {
        title: '',
        comment: '',
        name: '',
    };

    handleTitleChange = (e) => {
       this.setState({title: e.target.value})
    }
    handleCommentChange = (e) => {
        this.setState({comment: e.target.value})
    }
    
    handleNameChange = (e) => {
        this.setState({name: e.target.value})
    }
    handleSubmit = () => {
        if (this.state.title.length != 0
             && this.state.comment.length != 0 
             && this.state.name.length != 0) {
        this.props.onSubmitClick({
            title: this.state.title,
            comment: this.state.comment,
            name: this.state.name,
            id : uuid.v4()
        })
    }
    }
    render() {
        return(
               <div>
                <div className = 'mb-3'>
                <label className = 'form-label' >Title:</label>
                <input 
                    className = 'form-control'
                    type = 'text'
                    value = {this.state.title}
                    onChange = {this.handleTitleChange}
                    required
                />
                </div>
                <div className = 'mb-3'>
                <label className = 'form-label' >Comment:</label>
                <input 
                    className = 'form-control'
                    type = 'text'
                    value = {this.state.comment}
                    onChange = {this.handleCommentChange}
                    required
                    />
                </div>
                <div className = 'mb-3'>
                <label className = 'form-label' >Name:</label>    
                <input
                    className = 'form-control'
                    type = 'text'
                    value = {this.state.name}
                    onChange = {this.handleNameChange}
                    required        
                />
                </div>
                <button
                 className = 'btn btn-primary'
                 onClick = {this.handleSubmit}
                >Submit</button>
                </div>
        )
    }
}

ReactDOM.render(
    <CommentDashboard/>,
    document.getElementById('comment-box')
)
