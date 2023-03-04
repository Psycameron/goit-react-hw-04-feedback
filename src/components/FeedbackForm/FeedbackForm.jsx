import React, { useState } from 'react';

import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';
import { Notification } from 'components/Notification';

import style from './FeedbackForm.module.css';

export const FeedbackForm = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = e => {
    const btnName = e.target.name;

    switch (btnName) {
      case 'good': {
        setGood(state => state + 1);
        break;
      }

      case 'neutral': {
        setNeutral(state => state + 1);
        break;
      }
      case 'bad': {
        setBad(state => state + 1);
        break;
      }
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbacksPercentage = () => {
    return (good * 100) / (good + neutral + bad);
  };

  return (
    <div className={style.form}>
      <Section title="Please leave feedback">
        <ul className={style.form__list}>
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={handleIncrement}
          />
        </ul>
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbacksPercentage()}
          />
        )}
      </Section>
    </div>
  );
};
