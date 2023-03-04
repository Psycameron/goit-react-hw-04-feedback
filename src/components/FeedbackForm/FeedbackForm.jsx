import React, { Component } from 'react';

import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

import style from './FeedbackForm.module.css';

class FeedbackForm extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const btnName = e.target.name;

    this.setState(preventState => {
      return {
        [btnName]: preventState[btnName] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbacksPercentage = () => {
    const { good, neutral, bad } = this.state;

    return (good * 100) / (good + neutral + bad);
  };

  render() {
    return (
      <div className={style.form}>
        <Section title="Please leave feedback">
          <ul className={style.form__list}>
            <FeedbackOptions
              options={['Good', 'Neutral', 'Bad']}
              onLeaveFeedback={this.handleIncrement}
            />
          </ul>
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbacksPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackForm;
