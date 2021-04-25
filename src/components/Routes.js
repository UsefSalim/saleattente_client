/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Home from '../pages/public/Home';
import Login from '../pages/public/Login';
import UserProfile from '../pages/user/UserProfile';
import AdminProfile from '../pages/admin/AdminProfile';

const Routes = () => {
  const { role, isAuthenticated } = useSelector((state) => state.authentification);
  return (
    <Switch>
      <ProtectedAuthRoute exact path="/" auth={isAuthenticated} role={role} component={Home} />
      <ProtectedAuthRoute auth={isAuthenticated} role={role} path="/login" component={Login} />
      <ProtectedUserRoute auth={isAuthenticated} role={role} path="/dashboard/user" component={UserProfile} />
      <ProtectedAdminRoute auth={isAuthenticated} role={role} path="/dashboard/admin" component={AdminProfile} />
    </Switch>
  );
};
const ProtectedAuthRoute = ({ auth, role, component: Component, path, ...rest }) => (
  <Route
    {...rest}
    render={() => (!auth
      ? (
        <Component />
      ) : ((role === 'User')
        ? (
          <Redirect to="/dashboard/user" />
        ) : (
          <Redirect to="/dashboard/admin" />
        )
      ))}
  />
);
const ProtectedUserRoute = ({ auth, role, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() => ((auth && role === 'User')
      ? (
        <Component />
      )
      : (
        <Redirect to="/login" />
      ))}
  />
);
const ProtectedAdminRoute = ({ auth, role, component: Component, path, ...rest }) => (
  <Route
    {...rest}
    render={() => ((auth && role === 'Admin')
      ? (
        <Component />
      )
      : (
        <Redirect to="/login" />
      ))}
  />
);

export default Routes;
