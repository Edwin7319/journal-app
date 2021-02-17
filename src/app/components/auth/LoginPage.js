import React from 'react';
import {Link} from 'react-router-dom';

export default function LoginPage() {
    return (
        <>
            <h3 className="auth__title">LOGIN</h3>
            <form>
                <input type="text"
                       placeholder="EJ: edwin@gmail.com"
                       name="email"
                       className="auth__input"
                       autoComplete="off"
                />
                <input type="password"
                       placeholder="********"
                       name="password"
                       className="auth__input"
                />
                <button
                    className="btn btn-primary btn-block"
                    type="submit"
                >
                    LOGIN
                </button>

                <div className="auth_social-network">
                    <p>Login con otras redes</p>
                    <div
                        className="btn-google"
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