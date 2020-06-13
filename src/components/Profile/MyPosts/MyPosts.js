import React from 'react';
import mod from './MyPosts.module.css';
import Post from './Post/Post';


const MyPost = (props) => {


    let postArr = props.state.profilePage.postData.map((el) => <Post id={el.id} message={el.message} likeCount={el.likeCount} />)

    let savePost = React.createRef();

    let addPosts = () =>{
        props.addPost();
    }

    let updatePostArea = () =>{
        let text =  savePost.current.value;
        props.updatePostArea(text);
    }

    return (
        <div>
            <div className={mod.inputline}>
                <textarea ref={ savePost }  onChange={updatePostArea} value={props.state.profilePage.postValue}/>
                <button onClick={ addPosts }>Add Post</button>
            </div>
            <div className={mod.my_posts}>
                Posts :
            </div>
            {postArr}
        </div>
    )
}

export default MyPost;