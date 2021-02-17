import React from 'react';

export default function JournalEntry() {
    return (
        <div className="journal__entry pointer">
            <div className="journal__entry-picture"
                 style={
                     {
                         backgroundSize: 'cover',
                         backgroundImage: 'url(https://www.freecodecamp.org/news/content/images/2020/02/Ekran-Resmi-2019-11-18-18.08.13.png)'
                     }
                 }
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Aprendiendo
                </p>
                <p className="journal__entry-content">
                    Talleres que se estan aprendiendo en feraido
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>27</h4>
            </div>
        </div>
    );
}