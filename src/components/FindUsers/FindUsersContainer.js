import React from 'react'
import FindUsers from './FindUsers';
import { connect } from 'react-redux';
import { usersUnollowAC, usersFollowAC, setUsersData, editCurrentPageAC , setTotalUsersAC} from '../../Redux/FindUserReducer';


let mapStateToProps = (state) => {
    return {
        usersData : state.findUsersPage.usersData,
        pageSize: state.findUsersPage.pageSize,
        totalCountUsers: state.findUsersPage.totalCountUsers,
        currentPage: state.findUsersPage.currentPage
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
        },
        editCurrentPage: (currentPage) =>{
            dispatch(editCurrentPageAC(currentPage));
        },
        setTotalUsers:  (TotalUsers) =>{
            dispatch(setTotalUsersAC(TotalUsers));
        },
    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;