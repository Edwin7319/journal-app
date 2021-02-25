import React, {useEffect, useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import AuthRouter from './AuthRouter';
import JournalPage from '../components/journal/JournalPage';
import {firebase} from '../firebase/firebase-config';
import {useDispatch} from 'react-redux';
import {login} from '../actions/auth';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';
import {startLoadingNotes} from '../actions/notes';

export default function AppRouter() {

    const dispatch = useDispatch();

    const [autenticate, setAutenticate] = useState(true);
    const [isLogged, setLogged] = useState(false);

    useEffect(
        () => {
            firebase
                .auth()
                .onAuthStateChanged(
                    async (user) => {
                        if (user?.uid) {
                            dispatch(login(user.uid, user.displayName));
                            setLogged(true);
                          dispatch(startLoadingNotes(user.uid));
                        } else {
                            setLogged(false);
                        }
                        setAutenticate(false);
                    }
                )
        }, [dispatch]
    );

    if (autenticate) {
        return <h3>Autenticando.....</h3>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRouter
                        path="/auth"
                        isLogged={isLogged}
                        component={AuthRouter}
                    />
                    <PrivateRouter
                        exact
                        path="/"
                        isLogged={isLogged}
                        component={JournalPage}
                    />

                    {/*<Redirect*/}
                    {/*    to="/auth"*/}
                    {/*/>*/}
                </Switch>
            </div>
        </Router>
    );
}