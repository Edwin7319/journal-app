import {typesApp} from "../types/types";

export default function authReducer(state = {}, action) {
    const {type, payload} = action;
    switch (type) {
        case typesApp.login:
            return {
                uid: payload.uid,
                name: payload.name,
            }
        case typesApp.logout: {
            return {}
        }
        default:
            return state;

    }
}