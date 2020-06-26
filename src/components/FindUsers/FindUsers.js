import React from 'react'
import mod from './FindUsers.module.css'
import * as axios from 'axios'
import userPhoto from '../../assest/images/user-def.png'

class FindUsers extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersData(response.data.items);
                this.props.setTotalUsers(response.data.totalCount)
            });
    }

    clickFoo(pageNum) {
        this.props.editCurrentPage(pageNum)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsersData(response.data.items);
            });
    }

    render() {

        let sizePaggination = Math.ceil(this.props.totalCountUsers / this.props.pageSize);
        let pages = [];

        for (let i = 1; i <= sizePaggination; i++) {
            pages.push(i);
        }

        return <div>
            <div className={mod.paggination}>
                {pages.map((el) => <span
                    className={this.props.currentPage === (el) && mod.selectedPaggination}
                    onClick={ (e) => {this.clickFoo(el)} }>
                    {el}
                </span>)}
            </div>
            {this.props.usersData.map((el) =>
                <div key={el.id}  >
                    <div>
                        <img src={el.photos.small != null ? el.photos.small : userPhoto} className={mod.usersImg} />
                        {el.followed ?
                            <button onClick={() => { this.props.unfollow(el.id) }}>Unfollow</button>
                            :
                            <button onClick={() => { this.props.follow(el.id) }}>follow</button>}
                    </div>
                    <div className={mod.info_wrap}>
                        <div>{el.name}</div>
                        <div>{"Kharkiv"}</div>
                        <div>{el.status}</div>
                        <div>{"Ukraine"}</div>
                    </div>
                </div>)}
        </div>
    }
}


export default FindUsers;