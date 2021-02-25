import React from 'react';
import PropTypes from 'prop-types';
import * as moment from 'moment';
import {useDispatch} from 'react-redux';
import {activeNote} from "../../actions/notes";


function JournalEntry({body, date, id, title, url}) {

    const dateCast = moment(date, 'YYYY-MM-DD')
        .locale('es')
        .format('ll');

    const dispatch = useDispatch();

    const handleNoteClic = () => {
        const note = {
            title,
            date,
            body,
            url,
        }
        dispatch(activeNote(id, note));
    }

    return (
        <div className="journal__entry pointer"
             onClick={handleNoteClic}
        >
            {
                url &&
                <div className="journal__entry-picture"
                     style={
                         {
                             backgroundSize: 'cover',
                             backgroundImage: `url(${url})`
                         }
                     }
                >
                </div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title}
                </p>
                <p className="journal__entry-content">
                    {body}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>{dateCast}</span>
                {/*<h4>27</h4>*/}
            </div>
        </div>
    );
}

JournalEntry.propTypes = {
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default JournalEntry;

