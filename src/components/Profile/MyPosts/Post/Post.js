import React from 'react';
import mod from './Post.module.css';

const Post = (props) => {
    return (
        <div className={mod.post}>
            <span>
                {props.message}
            </span>
            <div className={mod.wrapp_like}>
                Like
                <span>{props.likeCount}</span>     
            </div>
        </div>
    );
}

export default Post;