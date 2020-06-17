import React from 'react';
import mod from './profilecontent.module.css';
import MyPostContainer from './MyPosts/MyPostsContainer';
const ProfileContent = (props) => {



    return (
        <main className={mod.main_content}>
            <div>Main Content</div>
            <MyPostContainer
                store={props.store}
            />
        </main>
    )
}
export default ProfileContent;