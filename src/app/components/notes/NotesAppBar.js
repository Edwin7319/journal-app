import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {startSaveNote, startUploadPicture} from '../../actions/notes';
import * as moment from 'moment';

export default function NotesAppBar() {

    const fechaActual = moment()
        .format('LL');

    const dispatch = useDispatch();

    const {activeNote: noteActive} = useSelector(state => state.notes);

    const handleOnSaveNote = () => {
        dispatch(startSaveNote(noteActive));
    }

    const hangleUploadPicture = () => {
        document
            .querySelector('#file-selector')
            .click();
    }

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            dispatch(startUploadPicture(file));
        }
    }

    return (
        <div className="notes__appbar">
            <span>{fechaActual}</span>
            <input
                id="file-selector"
                type="file"
                name="file"
                onChange={handleFileChange}
                style={{
                    display: 'none',
                }}
                accept="image/jpg, image/png, image/jpeg"
            />
            <div>
                <button
                    className="btn btn-sm btn-info mr-2"
                    onClick={hangleUploadPicture}
                >
                    IMAGEN
                </button>
                <button
                    className="btn btn-sm btn-success"
                    onClick={handleOnSaveNote}
                >
                    GUARDAR
                </button>
            </div>
        </div>
    );
}