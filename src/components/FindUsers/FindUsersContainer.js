import React from 'react'
import FindUsers from './FindUsers';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

let FindUsersContainer = connect(mapStateToProps, mapDispatchToProps)(FindUsers);

export default FindUsersContainer;