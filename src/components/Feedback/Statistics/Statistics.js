import React from "react";

import PropTypes from 'prop-types';


import  css  from './statistic.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <div className="">
      <p className={css.title}>
        Statistics
      </p>
      <ul className={css.list}>
        <li className="">Good: {good}</li>
        <li className="">Neutral: {neutral}</li>
        <li className="">Bad: {bad}</li>
        <li className="">Total: {total}</li>
        <li className="">Positive feedback: {
          positivePercentage
        }</li>
      </ul>
    </div>
  )
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
}


export default Statistics;