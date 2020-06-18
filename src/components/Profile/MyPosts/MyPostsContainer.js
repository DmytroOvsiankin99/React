import React from 'react';
import { addPostActionCreate, updatePostActionCreator } from '../../../Redux/profileReducer';
import MyPost from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPosts: () => { dispatch(addPostActionCreate()); },
        updatePostArea: (text) => { dispatch(updatePostActionCreator(text)); }
    }
}

let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;