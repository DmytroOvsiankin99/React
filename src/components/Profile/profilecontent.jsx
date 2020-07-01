import React from 'react';
import mod from './profilecontent.module.css';
import MyPostContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const ProfileContent = (props) => {
    return (
        <main className={mod.main_content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostContainer/>
        </main>
    )
}
export default ProfileContent;