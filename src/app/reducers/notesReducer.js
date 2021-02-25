import React from 'react';
import {typesApp} from '../types/types';

const initialState = {
    notes: [],
    activeNote: null,
}

function notesReducer(state = initialState, action) {
    const {payload, type} = action;
    switch (type) {
        case typesApp.notesActive:
            return {
                ...state,
                activeNote: {
                    ...payload,
                }
            }
        case typesApp.notesLoad:
            return {
                ...state,
                notes: [...payload],
            }
        case typesApp.notesUpdated:
            return {
                ...state,
                notes: state
                    .notes
                    .map(
                        (note) => note.id === payload.id ?
                            action.payload.note :
                            note
                    )
            }
        case typesApp.notesDelete:
            return {
                ...state,
                activeNote: null,
                notes: state
                    .notes
                    .filter(
                        (note) => note.id !== payload.id
                    )
            }
        case typesApp.notesAddNew:
            return {
                ...state,
                notes: [payload.note, ...state.notes]
            }
        case typesApp.notesLogoutClean:
            return {
                ...state,
                notes: [],
                activeNote: null,
            };
        default:
            return state;
    }
}

export default notesReducer;