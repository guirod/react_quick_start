import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App, List, Profile} from './App';
import reportWebVitals from './reportWebVitals';
import MyNestedComp from "./NestedComp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Profile />
        <App/>
        <List/>
        <MyNestedComp/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);