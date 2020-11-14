import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {fetchAuth} from "../../store/api-actons";
import {withLoginFormRefs} from "../../hocs/with-login-form-refs";

const LoginComponent = React.forwardRef((props, ref) => {
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
        onSubmit={props.onSubmit}
      >
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input
            ref={ref.loginRef}
            className="login__input"
            type="text"
            name="name"
            id="name"
          />
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input
            ref={ref.passwordRef}
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
        onClick={props.onReplayButtonClick}
      >
          Сыграть ещё раз</button>
    </section>
  );
});

LoginComponent.displayName = `LoginComponent`;

LoginComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onReplayButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(fetchAuth(authData));
  }
});
const LoginWithAuthFormRefs = withLoginFormRefs(LoginComponent);
export const Login = connect(null, mapDispatchToProps)(LoginWithAuthFormRefs);


