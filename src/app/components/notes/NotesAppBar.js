import React from 'react';

export default function NotesAppBar() {
    return (
        <div className="notes__appbar">
            <span>27 Agosto 2021</span>

            <div>
                <button
                    className="btn"
                >
                    PICTURE
                </button>
                <button
                    className="btn"
                >
                    SAVE
                </button>
            </div>
        </div>
    );
}