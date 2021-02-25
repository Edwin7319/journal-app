import {DATA_BASE} from '../firebase/firebase-config';
import {typesApp} from '../types/types';
import loadNotes from '../helpers/loadNotes';
import swal from 'sweetalert';
import fileUpload from '../helpers/fileUpload';
import {toast} from 'react-toastify';

function startNewNote(date) {
    return async (dispatch, getState) => {
        const {auth: {uid}} = getState();

        const newNote = {
            title: '',
            body: '',
            url: '',
            date,
        }

        const document = await DATA_BASE()
            .collection(
                `${uid}/journal/notes`
            )
            .add(
                newNote
            );
        console.log(document);
        dispatch(activeNote(document.id, newNote));
        dispatch(addNewNote(document.id, newNote));
    }
}

function activeNote(id, note) {
    return {
        type: typesApp.notesActive,
        payload: {
            id,
            ...note,
        }
    }
}

function setNotes(notes) {
    return {
        type: typesApp.notesLoad,
        payload: notes
    }
}

function startLoadingNotes(uid) {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

function startSaveNote(note) {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;

        if (!note.url) {
            delete note.url;
        }

        const newNote = {
            ...note,
        }
        delete newNote.id;

        try {
            await DATA_BASE()
                .doc(`${uid}/journal/notes/${note.id}`)
                .update(newNote);

            dispatch(refresehListNotes(note.id, newNote));

            await swal({
                title: 'NOTA ACTUALIZADA',
                text: 'LA NOTA HA SIDO ACTUALIZADA DE MANERA CORRECTA',
                icon: 'success',
                button: 'ACEPTAR',
            });

        } catch (e) {
            console.error({
                mensaje: 'Erro al guardar nueva nota',
                error: e,
            });
            await swal({
                title: 'ERROR',
                text: 'ERROR AL ACTUALIZAR LA NOTA',
                icon: 'error',
                button: 'ACEPTAR',
            });
        }
    }
}

function refresehListNotes(noteId, note) {
    return {
        type: typesApp.notesUpdated,
        payload: {
            id: noteId,
            note: {
                id: noteId,
                ...note,
            },
        }
    }
}

function startUploadPicture(file) {
    return async (dispatch, getState) => {
        toast.info('Cargando imagen.....', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const {activeNote} = getState().notes;
        const fileUrl = await fileUpload(file);
        const newActiveNote = {
            url: fileUrl,
            ...activeNote,
        }
        dispatch(startSaveNote(newActiveNote));
    }
}

function startDeleteNote(noteId) {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;
        try {
            await DATA_BASE()
                .doc(`${uid}/journal/notes/${noteId}`)
                .delete();

            dispatch(deleteNote(noteId));

            toast.success('Nota eliminada de manera correcta', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } catch (e) {
            console.error({
                mensaje: 'Error al eliminar nota',
                error: e,
            })
        }
    }
}

function deleteNote(noteId) {
    return {
        type: typesApp.notesDelete,
        payload: {
            id: noteId,
        },
    }
}

function addNewNote(idNote, note) {
    return {
        type: typesApp.notesAddNew,
        payload: {
            note: {
                id: idNote,
                ...note,
            }
        }
    }
}

export {
    startNewNote,
    setNotes,
    startLoadingNotes,
    activeNote,
    startSaveNote,
    startUploadPicture,
    startDeleteNote,
}