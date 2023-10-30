import React from "react";

import PropTypes from 'prop-types';

import css from './feedbackoptions.module.css'

const FeedbackOptions = ({ handleFeedback, options }) => {
  const btns = options.map((option, index)=> 
    <li key={index}>
      <button type='button' className={css.buttons}
        onClick={() => handleFeedback(option)}>
        {option}
      </button>
    </li>
  );
  return (
    <div className="">
      <ul className={css.list}>
        {btns}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};


export default FeedbackOptions;