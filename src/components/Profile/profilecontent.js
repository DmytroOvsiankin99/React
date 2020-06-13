import React from 'react';
import mod from './profilecontent.module.css';
import MyPost from './MyPosts/MyPosts'
const ProfileContent = (props) => {



    return (
        <main className={mod.main_content}>
            <div>Main Content</div>
            <MyPost
                state={props.state}
                addPost={props.addPost}
                updatePostArea={props.updatePostArea}
            />
        </main>
    )
}
export default ProfileContent;