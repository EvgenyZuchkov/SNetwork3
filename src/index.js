import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/State";


let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     updatePostText={store.updatePostText.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     updateMessageText={store.updateMessageText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireThree(store.getState())

store.subscriber(rerenderEntireThree)




reportWebVitals();