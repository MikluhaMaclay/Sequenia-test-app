import React from 'react';
import styles from './MoviePage.module.scss';
import { Container } from 'reactstrap';

import MovieHeader from './MovieHeader/MovieHeader';
import MovieImage from '../MovieImage';

import { IMovie } from '../../types/movies';

type MoviePageProps = {
  movie: IMovie,
  closeModal: () => void
}

const MoviePage = ({movie, closeModal}: MoviePageProps) => {
  const {
    localizedName, name, rating, year, imageUrl, description
  } = movie;

  return (
    <Container className={styles.container}>
      <MovieHeader closeModal={closeModal} title={localizedName}/>
      <div className={styles.topBlock}>
        <div className={styles.leftBlock}>
          <MovieImage src={imageUrl} fallbackSrc="https://dummyimage.com/320x480/8e8e8e/fff.png&text=Unable+to+load" alt="poster" />
        </div>
        <div className={styles.rightBlock}>
          <span className={styles.name}>{name}</span>
          <span className={styles.year}>{ year && `Год выпуска: ${year}` }</span>
          <span className={styles.rating}>{ rating && <React.Fragment>Рейтинг: <span>{rating}</span></React.Fragment> }</span>
        </div>
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </Container>
  )
}

export default MoviePage;