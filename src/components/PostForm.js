import React from "react";
import {connect} from "react-redux";
import {createPost} from "../redux/actions/actions";


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()
        const {title} = this.state
        const newPost = {
            title, id: Date.now().toString()
        }

        this.props.createPost(newPost)

        this.setState( {title: ''})

        console.log(newPost)
    }
    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <h1>Post Form</h1>
                <div>
                    <label htmlFor="title">Заголовок поста</label>
                    <input type="text"
                           value={this.state.title}
                           onChange={this.changeInputHandler}
                           name="title"
                    />
                </div>
                <button type="submit">Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
}

export default connect(null, mapDispatchToProps)(PostForm)