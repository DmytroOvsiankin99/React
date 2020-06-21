import React from 'react'
import FindUsers from './FindUsers';
import { connect } from 'react-redux';
import { usersUnollowAC, usersFollowAC, setUsersData } from '../../Redux/FindUserReducer';


let mapStateToProps = (state) => {
    return {
        usersData : state.findUsersPage.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID)=>{
            dispatch(usersFollowAC(userID));
        },
        unfollow: (userID)=>{
            dispatch(usersUnollowAC(userID));
        },
        setUsersData: (users)=>{
            dispatch(setUsersData(users));
        }
    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;