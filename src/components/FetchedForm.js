import React from "react";
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions/actions";

export default () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => {
        return state.posts.fetchedPosts
    })
    // const loading = useSelector(state => state.app.loading)

    // if (loading) {
    //     return (
    //
    //     )
    // }

    if (!posts.length) {
        return <button
            onClick={() => dispatch(fetchPosts())}
        >Download</button>
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
}
