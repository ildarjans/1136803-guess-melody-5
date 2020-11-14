import React from "react";
import PropTypes from "prop-types";

export const withLoginFormRefs = (Component) => {
  class AuthFormRefs extends React.PureComponent {
    constructor(props) {
      super(props);
      this.loginRef = React.createRef();
      this.passwordRef = React.createRef();

      this._handleSubmitForm = this._handleSubmitForm.bind(this);
    }

    _handleSubmitForm(evt) {
      evt.preventDefault();
      this.props.onSubmit({
        login: this.loginRef.current.value,
        password: this.passwordRef.current.value
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          ref={{
            loginRef: this.loginRef,
            passwordRef: this.passwordRef
          }}
          onSubmit={this._handleSubmitForm}
        />
      );
    }
  }
  AuthFormRefs.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };


  return AuthFormRefs;
};


