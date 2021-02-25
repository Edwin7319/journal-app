import React from 'react';
import * as PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';

function PublicRouter(
    {
        isLogged,
        component: Component,
        ...rest
    }
) {
    return (
        <Route
            {...rest}
            component={
                (props) => !isLogged ?
                    <Component {...props}/>
                    :
                    <Redirect to="/"/>
            }
        />
    );
}

PublicRouter.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
}


export default PublicRouter;