import React, {useState} from 'react';
import JournalEntries from './JournalEntries';
import {useDispatch, useSelector} from 'react-redux';
import {logOutFirebase} from '../../actions/auth';
import ModalDate from './ModalDate';
import {startNewNote} from '../../actions/notes';

export default function Sidebar() {

    const [modalIsOpen, setIsOpen] = useState(false);


    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOutFirebase());
    }

    const {name} = useSelector(
        (state) => state.auth
    );

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = (isAccept, date) => {
        if (isAccept) {
            dispatch(startNewNote(date));
        }
        setIsOpen(false);
    }

    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="separation-top-5">
                    <i className="far fa-moon"/>
                    <span> {`${name}`.toUpperCase()}</span>
                </h3>

                <button
                    className="btn"
                    onClick={handleLogOut}
                >
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <ModalDate
                    openModal={openModal}
                    closeModal={closeModal}
                    modalIsOpen={modalIsOpen}
                />
            </div>

            <JournalEntries/>
        </aside>
    );
}