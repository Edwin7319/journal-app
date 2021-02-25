import React, {useEffect, useRef} from 'react';
import NotesAppBar from './NotesAppBar';
import {useDispatch, useSelector} from 'react-redux';
import useForm from '../../hooks/useForm';
import {activeNote, startDeleteNote} from '../../actions/notes';

export default function NotePage() {

    const {activeNote: noteActive} = useSelector(state => state.notes);

    const dispatch = useDispatch()

    const [formValues, formInputChange, resetForm] = useForm(noteActive);

    const activeId = useRef(noteActive.id);

    useEffect(
        () => {
            if (activeId.current !== noteActive.id) {
                resetForm(noteActive);
                activeId.current = noteActive.id;
            }
        }, [resetForm, noteActive]
    );

    const {body, title, url, id} = formValues;

    useEffect(
        () => {
            dispatch(activeNote(formValues.id, {
                ...formValues
            }));
        }, [formValues, dispatch]
    );

    const handleDeleteNote = () => {
        dispatch(startDeleteNote(id));
    }


    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">

                <input
                    type="text"
                    placeholder="Algun dia seras pro !!!"
                    className="notes__title-input"
                    autoComplete="off"
                    value={title}
                    onChange={formInputChange}
                    name="title"
                />
                <textarea
                    placeholder="Que ha pasado??"
                    className="notes__textarea"
                    value={body}
                    onChange={formInputChange}
                    name="body"
                />
                {
                    formValues.url &&
                    (
                        <div className="notes__image">
                            <img
                                src={url}
                                alt="imagen_test"
                                height="150px"
                            />
                        </div>
                    )
                }
            </div>
            <button
                className="btn btn-sm btn-danger btn-block mb-3"
                onClick={handleDeleteNote}
            >
                ELIMINAR NOTA
            </button>
        </div>
    );
}