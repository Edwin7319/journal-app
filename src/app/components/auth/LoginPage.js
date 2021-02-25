import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import useForm from '../../hooks/useForm';
import {startLoginGoogle, startLoginWithEmailPassword} from '../../actions/auth';

export default function LoginPage() {

    const [formValues, formInputChange] = useForm({
        email: 'edwin@gmail.com',
        password: '12345678',
    });

    const dispatch = useDispatch();

    const {loading} = useSelector(
        (state) => state.form
    );

    const {email, password} = formValues;

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword(email, password));
    }

    const hangleGoogleLogin = () => {
        dispatch(startLoginGoogle());
    }

    return (
        <>
            <h3 className="auth__title">LOGIN</h3>
            <form onSubmit={handleLogin}>
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
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                    disabled={loading}
                >
                    LOGIN
                </button>

                <div className="auth_social-network">
                    <p>Login con otras redes</p>
                    <div
                        className="btn-google"
                        onClick={hangleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon"
                                 src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                 alt="google button"/>
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <Link to="/auth/register"
                          className="link"
                    >
                        Crear nueva cuenta
                    </Link>
                </div>
            </form>
        </>
    );
}