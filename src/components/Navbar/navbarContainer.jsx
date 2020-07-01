import React from 'react';
import Navbar from './navbar';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { setAuthUserData } from '../../Redux/authReducer'
class NavbarContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withcredentials: true,
            headers: {
                "API-KEY": 'a2eaa5ee-ea65-4b0b-8c62-e683eb4c4d17'
            }
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
                    this.props.setAuthUserData(id, email, login)
                }
            });
    }

    render() {
        return <Navbar {...this.state} isAuth={this.props.isAuth} login={this.props.login} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, { setAuthUserData })(NavbarContainer);