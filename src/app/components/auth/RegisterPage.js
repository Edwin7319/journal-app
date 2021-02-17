import React from 'react';
import {Link} from "react-router-dom";

export default function RegisterPage() {
    return (
        <>
            <h3 className="auth__title">REGISTER</h3>
            <form>
                <input type="text"
                       placeholder="EJ: Edwin"
                       name="name"
                       className="auth__input"
                       autoComplete="off"
                />
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
                <input type="password"
                       placeholder="Confirm password"
                       name="confirm-password"
                       className="auth__input"
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