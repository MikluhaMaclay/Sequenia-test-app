import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.scss';
import { Modal } from 'reactstrap';

import MovieItem from '../MovieItem/MovieItem';
import MoviePage from '../MoviePage/MoviePage';
import YearCard from '../YearCard/YearCard';


const MoviesList = ({ movies, withYears }) => {
    const [activeMovie, setActiveMovie] = useState(null);

    const openModal = (movie) => () => setActiveMovie(movie);
    const closeModal = () => setActiveMovie(null);

    const renderMovies = (movies) => {
      let year = null;
      return movies.map((movie) => {
        if (withYears && movie.year && (movie.year !== year)) {
          year = movie.year;
          return (
            <React.Fragment key={movie.id}>
              <YearCard year={year}/>
              <MovieItem movie={movie} onClick={openModal(movie)} />
            </React.Fragment>
          )
        }
        return (
          <MovieItem key={movie.id} movie={movie} onClick={openModal(movie)} />
        )
      })
    }
    
    return (
      <div className={styles.list}>
        {renderMovies(movies)}
        {activeMovie && (
          <Modal
            wrapClassName="modal-fullscreen"
            isOpen={!!activeMovie}
            fade={false}
            backdrop="static"
          >
            <MoviePage movie={activeMovie} closeModal={closeModal} />
          </Modal>
        )}
      </div>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array,
  withYears: PropTypes.bool
}

export default MoviesList;