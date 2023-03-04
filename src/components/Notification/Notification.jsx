import style from './Notification.module.css';

import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <p className={style.notification}>{message}</p>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
