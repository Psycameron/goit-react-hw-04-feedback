import style from './FeedbackOptions.module.css';

import PropTypes from 'prop-types';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return options.map(el => {
    return (
      <li key={el}>
        <button
          name={el.toLowerCase()}
          type="button"
          className={style.form__button}
          onClick={onLeaveFeedback}
        >
          {el}
        </button>
      </li>
    );
  });
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
