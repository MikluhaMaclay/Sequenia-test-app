import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListOptions.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faSortDown from '@fortawesome/free-solid-svg-icons/faSortDown';
import faSortUp from '@fortawesome/free-solid-svg-icons/faSortUp';

const ListOptions = ({ changeSort, sort }) => {
  const { rating, year } = sort;

  return (
    <div className={styles.main}>
      <button className={`${styles.sortBlock} ${year ? styles.active : ''}`} onClick={changeSort('year')} >
        <span>
          По дате выхода
        </span>
        <FontAwesomeIcon icon={year === 'ASC' ? faSortUp : faSortDown}  className={styles.upIcon} />
      </button>
      <button className={`${styles.sortBlock} ${rating ? styles.active : ''}`} onClick={changeSort('rating')} >
        <span>
          По рейтингу
        </span>
        <FontAwesomeIcon icon={rating === 'ASC' ? faSortUp : faSortDown} className={styles.downIcon} />
      </button>
    </div>
  )
}

ListOptions.propTypes = {
  changeSort: PropTypes.func.isRequired,
  sort: PropTypes.shape({
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  })
}

export default ListOptions;