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
        {/* <li><button type='button' className={css.buttons} onClick={
          click => handleFeedback(click.target.textContent)}>Good</button>
        </li>
        <li><button type='button' className={css.buttons} onClick={
          click => handleFeedback(click.target.textContent)}>Neutral</button>
        </li>
        <li><button type='button' className={css.buttons} onClick={
          click => handleFeedback(click.target.textContent)}>Bad</button>
        </li> */}
      </ul>
    </div>
  );
};

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};


export default FeedbackOptions;