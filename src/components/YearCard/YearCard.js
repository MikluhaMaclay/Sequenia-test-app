import React from 'react';
import PropTypes from 'prop-types';
import styles from './YearCard.module.scss';

const YearCard = ({year}) => (
    <div className={styles.main}>
      <span>{year}</span>
    </div>
  );


YearCard.propTypes = {
  year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
}

export default YearCard

