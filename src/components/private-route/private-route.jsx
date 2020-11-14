import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";

import {
  AuthorizationStatus,
  AppRoute
} from "../../const";


const PrivateRouteComponent = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(renderProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(renderProps)
            : <Redirect to={AppRoute.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRouteComponent.propTypes = {
  render: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

export const PrivateRoute = connect(mapStateToProps)(PrivateRouteComponent);


