import React from 'react';
import mod from './MyPosts.module.css';
import Post from './Post/Post';
import { updatePostActionCreator, addPostActionCreate } from '../../../Redux/state';



const MyPost = (props) => {

    let postArr = props.state.profilePage.postData.map((el) => <Post id={el.id} message={el.message} likeCount={el.likeCount} />)

    let addPosts = () => {
        props.dispatch(addPostActionCreate());
    }

    let updatePostArea = (e) => {
        let areaText = e.target.value; //e - событие , target.value - наша цель == значение 
        props.dispatch(updatePostActionCreator(areaText));
    }

    return (
        <div>
            <div className={mod.inputline}>
                <textarea
                    onChange={updatePostArea}
                    value={props.state.profilePage.postValue} 
                    placeholder = {'Write your post'}
                    />
                <button onClick={addPosts}>Add Post</button>
            </div>
            <div className={mod.my_posts}>
                Posts :
            </div>
            {postArr}
        </div>
    )
}

export default MyPost;