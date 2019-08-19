import React from 'react';
import styles from './MovieItem.module.scss';

import { IMovie } from '../../types/movies';

type MovieItemProps = {
  movie: IMovie,
  onClick: () => void
}

const MovieItem = ({ movie, onClick }: MovieItemProps) => {
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

export default MovieItem;
