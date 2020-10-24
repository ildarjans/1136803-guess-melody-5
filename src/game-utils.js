export function isArtistAnswerCorrect(question, userAnswer) {
  return question.song.artist === userAnswer.artist;
}

export function isGenreAnswerCorrect(question, userAnswers) {
  return userAnswers
    .every((answer, i) => (
      answer === (question.answers[i].genre === question.genre)
    ));
}
