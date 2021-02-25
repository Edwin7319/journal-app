import React from 'react';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import * as validator from 'validator';
import {cleanFormError, setFormError} from '../../actions/form';
import {startRegisterWithEmailPassword} from '../../actions/auth';

export default function RegisterPage() {

    const dispatch = useDispatch();

    // obtener objeto de redux
    const {messageError} = useSelector(
        (state) => state.form
    );

    const [formValues, formInputChange, resetForm] = useForm({
        name: 'edwin',
        email: 'edwin@gmail.com',
        password: '12345678',
        confirmPassword: '12345678',
    });

    const {name, email, password, confirmPassword} = formValues;

    const handleRegister = (event) => {
        event.preventDefault();
        const formValid = isFormValid();
        if (formValid) {
            dispatch(startRegisterWithEmailPassword(email, password, name));
        }
        resetForm();
    }

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setFormError('Nombre requerido'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setFormError('Email no valido'));
            return false;
        } else if (password !== confirmPassword || password.length < 5) {
            dispatch(setFormError('Password de al menos 5 caracteres'));
            return false;
        }
        dispatch(cleanFormError());
        return true;
    }

    return (
        <>
            <h3 className="auth__title">REGISTER</h3>
            <form onSubmit={handleRegister}>
                {
                    messageError &&
                    (
                        <div className="auth__alert-error">
                            {messageError}
                        </div>
                    )
                }


                <input type="text"
                       placeholder="EJ: Edwin"
                       name="name"
                       className="auth__input"
                       autoComplete="off"
                       value={name}
                       onChange={formInputChange}
                />
                <input type="text"
                       placeholder="EJ: edwin@gmail.com"
                       name="email"
                       className="auth__input"
                       autoComplete="off"
                       value={email}
                       onChange={formInputChange}
                />
                <input type="password"
                       placeholder="********"
                       name="password"
                       className="auth__input"
                       value={password}
                       onChange={formInputChange}
                />
                <input type="password"
                       placeholder="Confirm password"
                       name="confirmPassword"
                       className="auth__input"
                       value={confirmPassword}
                       onChange={formInputChange}
                />
                <button
                    className="btn btn-primary btn-block separation-bottom-4"
                    type="submit"
                >
                    REGISTER
                </button>

                <Link to="/auth/login"
                      className="link"
                >
                    Alredy register?
                </Link>
            </form>
        </>
    );
}