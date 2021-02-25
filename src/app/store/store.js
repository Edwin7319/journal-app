import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import authReducer from '../reducers/authReducer';
import thunk from 'redux-thunk';
import formReducer from '../reducers/formReducer';
import notesReducer from '../reducers/notesReducer';

const reducers = combineReducers({
    auth: authReducer,
    form: formReducer,
    notes: notesReducer,

});

// Para aplicar middleware
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);