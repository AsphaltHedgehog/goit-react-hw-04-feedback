import React, { Component } from "react";
// import { css } from './Feedback.module.css'
// ============================================================
import Statistics from './Statistics/Statistics.js';
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions.js";

import Section from './Section/Section.js';
import Notification from './Notification/Notification.js'

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  
  handleFeedback = FeedbackOption => {
    switch (FeedbackOption) {
      case 'good':
        this.setState(prevState => {
          return { good: prevState.good + 1 }
        });
        break;
      case 'neutral':
        this.setState(prevState => {
          return { neutral: prevState.neutral + 1 }
        });
        break;
      case 'bad':
        this.setState(prevState => {
          return { bad: prevState.bad + 1 }
        });
        break;
      
      default:
        console.log('Вот это ты хитрый, а я сразу и не понял');
        break;
    };
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      total
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (total === 0) {
      return (0 + '%')
    }
    const percentage = (100 * good) / total  ;
    return (percentage % 1 === 0 ?
      percentage + '%' : percentage.toFixed(2) + '%')
    // Math.round(percentage)
  }
    


  render() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return (
      <Section title='Please leave feedback'>
        <FeedbackOptions handleFeedback={this.handleFeedback} options={Object.keys(this.state)} />
        {total > 0 ? <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        /> : <Notification />}
        
      </Section>
    )
  };
};

export default Feedback;