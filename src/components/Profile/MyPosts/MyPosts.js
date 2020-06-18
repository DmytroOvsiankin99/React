import React from 'react';
import mod from './MyPosts.module.css';
import Post from './Post/Post';


const MyPost = (props) => {

    let postArr = props.profilePage.postData.map((el) => <Post id={el.id} message={el.message} likeCount={el.likeCount} />)

    let addPosts = () => {
        props.addPosts();
    }

    let updatePostArea = (e) => {
        let areaText = e.target.value; //e - событие , target.value - наша цель == значение 
        props.updatePostArea(areaText)
    }
    return (
        <div>
            <div className={mod.inputline}>
                <textarea
                    onChange={updatePostArea}
                    value={props.profilePage.postValue} 
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