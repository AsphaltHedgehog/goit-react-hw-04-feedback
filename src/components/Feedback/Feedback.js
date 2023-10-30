import { useState, useEffect } from "react";
// import { css } from './Feedback.module.css'
// ============================================================
import Statistics from './Statistics/Statistics.js';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.js";

import Section from './Section/Section.js';
import Notification from './Notification/Notification.js'

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [percentage, setPercentage] = useState(0 + '%')
  
  const handleFeedback = FeedbackOption => {
    switch (FeedbackOption) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      
      default:
        console.log('Вот это ты хитрый, а я сразу и не понял');
        break;
    };
  };

  useEffect(() => {
    setTotal(good + neutral + bad);
  }, [good, neutral, bad]);

  useEffect(() => {
    const newPercentage = (100 * good) / total;
    setPercentage(
      newPercentage % 1 === 0 ? newPercentage + '%' : newPercentage.toFixed(2) + '%'
    );
  }, [total,good,neutral,bad]);

  return (
    <Section title='Please leave feedback'>
      <FeedbackOptions handleFeedback={handleFeedback} options={['good', 'neutral', 'bad']} />
      {total > 0 ? <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={percentage}
      /> : <Notification />}
    </Section>
  );
};

export default Feedback;