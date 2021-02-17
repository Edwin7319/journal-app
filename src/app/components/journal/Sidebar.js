import React from 'react';
import JournalEntries from "./JournalEntries";

export default function Sidebar() {
    return (
        <aside className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="separation-top-5">
                    <i className="far fa-moon"></i>
                    <span> Edwin</span>
                </h3>

                <button className="btn">
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="far fa-calendar-plus fa-3x"></i>
                <p className="separation-top-3">New Entry</p>
            </div>

            <JournalEntries/>
        </aside>
    );
}