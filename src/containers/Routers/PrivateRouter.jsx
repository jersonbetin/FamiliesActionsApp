import React from 'react';
import { Route, Redirect } from 'react-router-dom';

 
const RouterPrivate = ({ isLog, component: Component, ...rest }) => {
    return (
      <Route {...rest} render={(props) => (
        isLog
          ? <Component {...props} />
          : <Redirect to='/unauth' />
      )} />
    );
}
 
export default RouterPrivate;