import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './Redux/redux-store'

let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                store={store}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderTree();

store.subscribe( rerenderTree );

serviceWorker.unregister();