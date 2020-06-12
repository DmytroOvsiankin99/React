import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import state, {addPost, updatePostArea, callbackFunction} from './Redux/state'

let rerenderTree = () => {
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
};
rerenderTree();

callbackFunction( rerenderTree );

serviceWorker.unregister();