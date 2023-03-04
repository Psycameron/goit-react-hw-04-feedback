import style from './Section.module.css';

import PropTypes from 'prop-types';

export function Section({ title, children }) {
  return (
    <>
      <h1 className={style.title}>{title}</h1>
      {children}
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
