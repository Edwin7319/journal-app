import React from 'react';
import JournalEntry from './JournalEntry';
import {useSelector} from 'react-redux';

export default function JournalEntries() {

    const {notes}  = useSelector(
        (selec) => selec.notes
    );

    return (
        <div className="journal__entries">
            {
                notes
                    .map(
                        (value) => (
                            <JournalEntry
                                key={value.id}
                                {...value}
                            />
                        )
                    )
            }
        </div>
    );
}