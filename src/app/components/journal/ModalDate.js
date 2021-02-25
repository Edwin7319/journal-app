import React, {useState} from 'react';
import * as Modal from 'react-modal';
import useForm from "../../hooks/useForm";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

function ModalDate({modalIsOpen, openModal, closeModal}) {

    const [{date}, formInputChange] = useForm({
        date: '',
    });

    const onsubmitForm = (event) => {
        event.preventDefault();
    }

    return (
        <div>
            <div className="journal__new-entry"
                 onClick={openModal}
            >
                <i className="far fa-calendar-plus fa-3x"/>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center"
                            style={{
                                marginBottom: -20,
                            }}
                        >
                            FECHA DE NOTA
                        </h4>
                        <hr/>
                    </div>
                    <div className="col-md-12">
                        <small>Seleccione una fecha:*</small>
                        <form onSubmit={onsubmitForm}>
                            <div className="row mt-2">
                                <div className="col-sm-12 form-group">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <input
                                                type="date"
                                                name="date"
                                                className="form-control"
                                                id="date"
                                                value={date}
                                                onChange={formInputChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <button
                                        className="btn btn-sm btn-secondary btn-block"
                                        onClick={() => {
                                            closeModal(false, '')
                                        }}
                                        type="button"
                                    >
                                        CANCELAR
                                    </button>
                                </div>
                                <div className="col-sm-3">
                                    <button
                                        className="btn btn-sm btn-success btn-block"
                                        onClick={() => {
                                            closeModal(true, date)
                                        }}
                                        type="button"
                                    >
                                        ACEPTAR
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalDate;