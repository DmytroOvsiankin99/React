import React from 'react';
import { addPostActionCreate, updatePostActionCreator } from '../../../Redux/profileReducer';
import MyPost from './MyPosts';



const MyPostContainer = (props) => {

    let state = props.store.getState();

    let addPosts = () => {
        props.store.dispatch(addPostActionCreate());
    }

    let updatePostArea = (text) => {
        props.store.dispatch(updatePostActionCreator(text));
    }

    return (
        <MyPost updatePostArea={updatePostArea} addPosts={addPosts}  postData={state.profilePage.postData} value={state.profilePage.postValue}/>
    )
}

export default MyPostContainer;