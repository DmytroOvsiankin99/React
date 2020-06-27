import React from 'react'
import * as axios from 'axios'
import Users from './Users';
import { connect } from 'react-redux';
import userPhoto from '../../assest/images/user-def.png'
import { usersUnollowAC, usersFollowAC, setUsersData, editCurrentPageAC, setTotalUsersAC, setIsFetchingAC } from '../../Redux/FindUserReducer'
import Preloader from '../common/preloader/preolader';


class FindUsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsersData(response.data.items);
                this.props.setTotalUsers(response.data.totalCount)
            });
    }

    clickFoo(pageNum) {
        debugger;
        this.props.toggleFetching(true);
        this.props.editCurrentPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false);
                this.props.setUsersData(response.data.items);
            });
        debugger;
    }

    render() {
        return <>
            {this.props.isFatching ? <Preloader/> : null}
            <Users
                totalCountUsers={this.props.totalCountUsers}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                userPhoto={this.userPhoto}
                usersData={this.props.usersData}
                clickFoo={this.clickFoo}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        usersData: state.findUsersPage.usersData,
        pageSize: state.findUsersPage.pageSize,
        currentPage: state.findUsersPage.currentPage,
        totalCountUsers: state.findUsersPage.totalCountUsers,
        isFatching: state.findUsersPage.isFatching,
    }
}


let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => {
            dispatch(usersFollowAC(userID));
        },
        unfollow: (userID) => {
            dispatch(usersUnollowAC(userID));
        },
        setUsersData: (users) => {
            dispatch(setUsersData(users));
        },
        editCurrentPage: (currentPage) => {
            dispatch(editCurrentPageAC(currentPage));
        },
        setTotalUsers: (TotalUsers) => {
            dispatch(setTotalUsersAC(TotalUsers));
        },
        toggleFetching: (isFetching) => {
            dispatch(setIsFetchingAC(isFetching));
        }
    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsersAPIComponent);

export default FindUsersContainer;