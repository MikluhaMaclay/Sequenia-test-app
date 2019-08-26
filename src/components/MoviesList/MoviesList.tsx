import React, { useState } from 'react';
import styles from './MoviesList.module.scss';
import { Modal } from 'reactstrap';

import MovieItem from '../MovieItem/MovieItem';
import MoviePage from '../MoviePage/MoviePage';
import YearCard from '../YearCard/YearCard';

import { IMovie } from '../../types/movies';

interface IMovesListProps {
  movies: IMovie[],
  withYears: boolean
}


const MoviesList = ({ movies, withYears }: IMovesListProps) => {
    const [activeMovie, setActiveMovie] = useState<IMovie | null>(null);

    const openModal = (movie: IMovie) => () => setActiveMovie(movie);
    const closeModal = () => setActiveMovie(null);

    const renderMovies = (movies: any) => {
      let year: string | number | null = null;
      return movies.map((movie: IMovie) => {
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
      }) as [JSX.Element]
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

export default MoviesList;