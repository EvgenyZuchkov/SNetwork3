import React from "react";
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postsData={props.state.profilePage.postsData}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updatePostText={props.updatePostText}
            />
        </div>
    )
}

export default Profile;