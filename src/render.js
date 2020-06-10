import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './Redux/state'

export let rerenderTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                dialogsData={state.dialogsPage.dialogsData}
                messagesData={state.dialogsPage.messagesData}
                postData={state.profilePage.postData}
                addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}