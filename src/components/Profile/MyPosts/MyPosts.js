import React from 'react';
import mod from './MyPosts.module.css';
import Post from './Post/Post';


const MyPost = (props) => {


    let postArr = props.postData.map((el) => <Post id={el.id} message={el.message} likeCount={el.likeCount} />)

    let savePost = React.createRef();

    let addPosts = () =>{
        let text = savePost.current.value;
        props.addPost(text);
    }

    return (
        <div>
            <div className={mod.inputline}>
                <textarea ref={ savePost }></textarea>
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