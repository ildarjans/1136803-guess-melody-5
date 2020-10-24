import React from "react";
import PropTypes from "prop-types";


export const Mistakes = ({count}) => {
  const mistakes = Array(count).fill(``);
  return (
    <div className="game__mistakes">
      {mistakes.map((it, i) => (
        <div key={`mistake-${i}`} className="wrong"/>
      ))}
    </div>
  );
};

Mistakes.propTypes = {
  count: PropTypes.number.isRequired
};
