import style from './Statistics.module.css';

import PropTypes from 'prop-types';

export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const totalFeedbacks = total;
  const posPercentage = positivePercentage.toFixed(0);

  return (
    <div>
      <p className={style.good}>
        Good:
        <span className={style.number}>{good}</span>
      </p>
      <p className={style.neutral}>
        Neutral:
        <span className={style.number}>{neutral}</span>
      </p>
      <p className={style.bad}>
        Bad:
        <span className={style.number}>{bad}</span>
      </p>
      <p>
        Total:
        <span className={style.number}>{totalFeedbacks}</span>
      </p>
      <p>
        Positive feedbacks:
        <span className={style.number}>{posPercentage}%</span>
      </p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
