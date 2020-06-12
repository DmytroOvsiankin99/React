import React from 'react';
import mod from './profilecontent.module.css';
import MyPost from './MyPosts/MyPosts'
const ProfileContent = (props) => {
    
    

    return (
        <main className={mod.main_content}>
            <div>Main Content</div>
            <MyPost postData={props.postData} addPost={props.addPost} postValue={props.postValue} updatePostArea={props.updatePostArea}/>
        </main>
    )
}
export default ProfileContent;