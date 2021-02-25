import React from 'react';

export default function NothingSelected() {
    return (
        <div className="nothing__main-content">
            <p>
                Seleccione una nota o
                <br/>
                Por favor cree una nueva nota
            </p>
            <i className="far fa-star fa-4x separation-top-5"/>
        </div>
    );
}