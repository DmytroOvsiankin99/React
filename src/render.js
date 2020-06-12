import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updatePostArea} from './Redux/state'

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state = {state}
                updatePostArea={updatePostArea}
                addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}