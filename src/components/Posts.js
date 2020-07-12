import React from "react";
import Post from "./Post";
import {connect} from "react-redux";

const Posts = ({posts}) => {
    if (!posts.length) {
        return <p className='text-center'> Постов пока нет</p>
    }
    return posts.map(post => <Post post={post} key={post}/>)
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
}


const mapDispatchToProps = dispath => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)

