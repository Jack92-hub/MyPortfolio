import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


import './index.css';
import App from './App';

const app = (
        <BrowserRouter>
            <App />
        </BrowserRouter>
);

ReactDOM.render( app, document.getElementById( 'root' ) );
