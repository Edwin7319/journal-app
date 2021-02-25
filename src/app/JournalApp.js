import React from 'react';
import {Provider} from 'react-redux';

import AppRouter from './routes/AppRouter';
import {store} from './store/store';
import {ToastContainer} from 'react-toastify';

export default function JournalApp() {

    return (
        <Provider store={store}>
            <AppRouter/>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Provider>
    );
}