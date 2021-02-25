import React from 'react';
import ReactDOM from 'react-dom';

import './app/styles/styles.scss';

import 'sweetalert/dist/sweetalert.min';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import JournalApp from './app/JournalApp';

ReactDOM.render(
    <JournalApp/>,
    document.getElementById('root')
);
