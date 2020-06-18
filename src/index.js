import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import store from './Redux/redux-store'
import { Provider } from 'react-redux'


let rerenderTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderTree();

store.subscribe(rerenderTree);

serviceWorker.unregister();