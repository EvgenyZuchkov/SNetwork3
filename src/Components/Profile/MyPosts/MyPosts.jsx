import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPostAC, updateNewPostTextAC} from "../../../Redux/State";

const MyPosts = (props) => {

    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef()


    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        let text = newPostElement.current.value
        props.dispatch(updateNewPostTextAC(text))
    }

    return (
        <div>
            <div className={s.newPost}>
                <h3>My posts</h3>
                <div>
                    <textarea cols="40" rows="4"
                              onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;