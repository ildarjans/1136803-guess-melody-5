import React from "react";
import PropTypes from "prop-types";

import {GenreQuestionPropTypes} from "../components/genre-prop-types/genre-quenstion";

export const withGameGenreAnswers = (Component) => {
  class WithGameGenreAnswers extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false)
      };
      this._handleAnswerChange = this._handleAnswerChange.bind(this);
      this._handleAnswerSubmit = this._handleAnswerSubmit.bind(this);
    }

    _handleAnswerChange(userAnswer, id) {
      const {answers: [...userAnswers]} = this.state;
      userAnswers.splice(id, 1, userAnswer);
      this.setState({answers: userAnswers});
    }

    _handleAnswerSubmit(evt) {
      evt.preventDefault();
      const {onAnswer, question} = this.props;
      const {answers} = this.state;
      onAnswer(question, answers);
    }

    render() {
      const {answers} = this.state;
      return (
        <Component
          {...this.props}
          userAnswers={answers}
          onAnswer={this._handleAnswerSubmit}
          onChange={this._handleAnswerChange}
        />
      );
    }

  }

  WithGameGenreAnswers.propTypes = {
    onAnswer: PropTypes.func.isRequired,
    question: GenreQuestionPropTypes.isRequired,
  };

  return WithGameGenreAnswers;
};
