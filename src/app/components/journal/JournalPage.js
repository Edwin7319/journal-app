import React from 'react';
import Sidebar from './Sidebar';
import NothingSelected from "./NothingSelected";
import NotePage from "../notes/NotePage";

export default function JournalPage() {
    return (
        <div className="journal__main-content">
            <Sidebar/>

            <main>
                {/*<NothingSelected/>*/}
                <NotePage/>
            </main>
        </div>
    );
}