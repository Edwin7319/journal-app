import {typesApp} from '../types/types';
import {firebase, GOOGLE_AUTH_PROVIDER} from '../firebase/firebase-config';
import {finishLoading, startLoading} from './form';
import * as swal from 'sweetalert';

function startLoginWithEmailPassword(email, password) {
    return (dispatch) => {
        dispatch(startLoading());
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(
                ({user}) => {
                    const {uid, displayName} = user;
                    dispatch(login(uid, displayName));
                    dispatch(finishLoading());
                }
            )
            .catch(
                async (error) => {
                    dispatch(finishLoading());
                    console.error({
                        mensaje: 'Error al logear usuario',
                        error,
                    });
                    await swal({
                        title: 'ERROR AL LOGEAR',
                        text: 'El usuario no se encuentra registrado',
                        icon: 'error',
                        button: 'ACEPTAR',
                    });
                }
            )
        // dispatch(login(123, 'pepitppp'));
    }
}

function startRegisterWithEmailPassword(email, password, name) {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(
                async ({user}) => {
                    const userProfile = await user.updateProfile({
                        displayName: name,
                    });
                    const {uid, displayName} = user;
                    dispatch(
                        login(uid, displayName)
                    );
                }
            )
            .catch(
                (error) => {
                    console.error({
                        mensaje: 'Error registrando usuario',
                        error,
                    });
                }
            )
    }
}

function startLoginGoogle() {
    return async (dispatch) => {
        try {
            const userCredencial = await firebase
                .auth()
                .signInWithPopup(GOOGLE_AUTH_PROVIDER);
            const {user: {uid, displayName, email}} = userCredencial;
            dispatch(
                login(uid, displayName)
            );
        } catch (e) {
            console.error({
                mensaje: 'Error al recuperar user credencial',
                error: e,
            });
        }
    }
}

function login(uid, displayName) {
    return {
        type: typesApp.login,
        payload: {
            uid,
            name: displayName,
        },
    }
}

function logOutFirebase() {
    return async (dispatch) => {
        await firebase
            .auth()
            .signOut();

        dispatch(logout());
    }
}

function logout() {
    return {
        type: typesApp.logout,
    }
}


export {
    login,
    startLoginWithEmailPassword,
    startLoginGoogle,
    startRegisterWithEmailPassword,
    logOutFirebase,
}