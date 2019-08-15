import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieItem.module.scss';

const MovieItem = ({ movie, onClick }) => {
  const { localizedName, rating, name } = movie;

  return (
    <div className={styles.movie} onClick={onClick}>
      <div className={styles.titleBlock}>
        <h4 className={styles.localizedTitle}>
          {localizedName}
        </h4>
        <h5 className={styles.title}>
          {name}
        </h5>
      </div>
      <span className={styles.rating}>{rating}</span>
    </div>
  )
}

MovieItem.propTypes = {
  onClick: PropTypes.func,
  movie: PropTypes.shape({
    name: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    imageUrl: PropTypes.string,
    localizedName: PropTypes.string,
    description: PropTypes.string
  }).isRequired,
}

export default MovieItem;
