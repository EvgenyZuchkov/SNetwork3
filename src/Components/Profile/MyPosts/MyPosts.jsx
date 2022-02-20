import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElement = props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div>

            <div className={s.newPost}>
                <b>My posts</b>
                <div>
                    <textarea cols="40" rows="4"/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;