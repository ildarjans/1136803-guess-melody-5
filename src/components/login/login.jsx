import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {fetchAuth} from "../../store/api-actons";

export class LoginComponent extends React.PureComponent {
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
      <section className="login">
        <div className="login__logo">
          <img src="/img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/>
        </div>
        <h2 className="login__title">Вы настоящий меломан!</h2>
        <p className="login__text">Хотите узнать свой результат? Представтесь!</p>
        <form
          className="login__form"
          action=""
          onSubmit={this._handleSubmitForm}
        >
          <p className="login__field">
            <label className="login__label" htmlFor="name">Логин</label>
            <input
              ref={this.loginRef}
              className="login__input"
              type="text"
              name="name"
              id="name"
            />
          </p>
          <p className="login__field">
            <label className="login__label" htmlFor="password">Пароль</label>
            <input
              ref={this.passwordRef}
              className="login__input"
              type="text"
              name="password"
              id="password"
            />
            <span className="login__error">Неверный пароль</span>
          </p>
          <button className="login__button button" type="submit">Войти</button>
        </form>
        <button
          className="replay"
          type="button"
          onClick={this.props.onReplayButtonClick}
        >
          Сыграть ещё раз</button>
      </section>
    );
  }
}

LoginComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(fetchAuth(authData));
  }
});

export const Login = connect(null, mapDispatchToProps)(LoginComponent);


