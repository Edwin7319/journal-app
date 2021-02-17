import React from 'react';
import NotesAppBar from "./NotesAppBar";

export default function NotePage() {
    return (
        <div className="notes__main-content">
            <NotesAppBar/>

            <div className="notes__content">
                <input type="text"
                       placeholder="Algun dia seras pro !!!"
                       className="notes__title-input"
                       autoComplete="off"
                />
                <textarea placeholder="Que ha pasado??"
                          className="notes__textarea"
                />
                <div className="notes__image">
                    <img
                        src="https://previews.123rf.com/images/naykirin/naykirin1809/naykirin180900013/107954608-desktop-source-code-and-technology-background-developer-or-programer-with-coding-and-programming-wal.jpg"
                        alt="imagen_test"
                        height="150px"
                    />
                </div>
            </div>
        </div>
    );
}