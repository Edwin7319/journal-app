import React from 'react';
import Sidebar from './Sidebar';
import NotePage from '../notes/NotePage';
import {useSelector} from 'react-redux';
import NothingSelected from "./NothingSelected";

export default function JournalPage() {

    const {activeNote} = useSelector(
        (store) => store.notes
    );

    return (
        <div className="journal__main-content">
            <Sidebar/>

            <main>
                {
                    activeNote ?
                        <NotePage/>
                        :
                        <NothingSelected/>
                }
            </main>
        </div>
    );
}