import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './Redux/state'

let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addPost ={store.addPost.bind(store)}
                updatePostArea = {store.updatePostArea.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderTree();

store.callbackFunction( rerenderTree );

serviceWorker.unregister();