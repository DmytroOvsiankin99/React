import React from 'react'
import * as axios from 'axios'
import Users from './Users';
import { connect } from 'react-redux';
import userPhoto from '../../assest/images/user-def.png'
import { follow, unfollow, setUsersData, editCurrentPage, setTotalUsers, setIsFetching , toggleIsFollowing} from '../../Redux/FindUserReducer'
import Preloader from '../common/preloader/preolader';
import { getUsers } from '../../API/api';


class FindUsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.setIsFetching(true);
            getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsersData(data.items);
                this.props.setTotalUsers(data.totalCount)
            });
    }

    clickFoo(pageNum) {
        this.props.setIsFetching(true);
        this.props.editCurrentPage(pageNum);
        getUsers(pageNum, this.props.pageSize).then(data => {
                this.props.setIsFetching(false);
                this.props.setUsersData(data.items);
            });
    }

    render() {
        return <>
            {this.props.isFatching ? <Preloader /> : null}
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
        followingInProgres: state.findUsersPage.followingInProgres
    }
}

let FindUsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsersData,
    editCurrentPage,
    setTotalUsers,
    setIsFetching,
    toggleIsFollowing
})(FindUsersAPIComponent);

export default FindUsersContainer;