import {typesApp} from '../types/types';

function setFormError(mensajeError) {
    return {
        type: typesApp.formSetError,
        payload: mensajeError,
    }
}

function cleanFormError() {
    return {
        type: typesApp.formCleanError,
    }
}

function startLoading() {
    return {
        type: typesApp.startLoading,
    }
}

function finishLoading() {
    return {
        type: typesApp.finishLoading,
    }
}

export {
    setFormError,
    cleanFormError,
    startLoading,
    finishLoading,
}