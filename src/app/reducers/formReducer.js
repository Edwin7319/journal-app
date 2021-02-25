import {typesApp} from '../types/types';

const inititalState = {
    loading: 0,
    messageError: null,
}

function formReducer(state = inititalState, action) {

    const {type, payload} = action;

    switch (type) {
        case typesApp.formSetError:
            return {
                ...state,
                messageError: payload,
            }
        case typesApp.formCleanError:
            return {
                ...state,
                messageError: null,
            }
        case typesApp.startLoading:
            return {
                ...state,
                loading: 1,
            }
        case typesApp.finishLoading:
            return {
                ...state,
                loading: 0,
            }
        default:
            return state;
    }
}

export default formReducer;