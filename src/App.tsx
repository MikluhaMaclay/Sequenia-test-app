import React, { FunctionComponent, useEffect, useState } from "react";
import camelcaseKeys from "camelcase-keys";
import "./styles/variables.scss";
import { sortBy } from './helpers';

import { Container } from "reactstrap";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import ListOptions from './components/ListOptions/ListOptions';

import { ISort } from './types/sort'; 

import { IRes, IMovieArray } from './types/movies';

const App:FunctionComponent = () => {
  const [movies, setMovies] = useState<IMovieArray>([]);
  const [sort, setSort] = useState<ISort>({
    year: 'ASC',
    rating: false
  });

  useEffect(() => {
    // fetch list of movies
    fetch("https://s3-eu-west-1.amazonaws.com/sequeniatesttask/films.json")
      .then(res => res.json())
      .then((data: IRes) => setMovies(camelcaseKeys(data.films) as IMovieArray))
      .catch(e => {
        console.error(e);
      });
  }, []);
  const changeSort = (id: string) => (): void => {
    const newSort = {...sort};
    // * Set all sorts, except chosen to false
    Object.entries(sort).forEach((item) => {
      const [key, value] = item;
      if (key !== id) {
        newSort[key] = false
      } else {
        newSort[key] = value === 'DESC' ? 'ASC' : 'DESC';
      }
    })
    setSort(newSort);
  }

  const { year, rating } = sort;
  const sortedMovies: IMovieArray = sortBy(movies, year ? ['year', 'rating'] : 'rating', year || rating);

  return (
    <div className="App">
      <Header />
      <main className="content">
        <Container>
          <ListOptions changeSort={changeSort} sort={sort} />
          <MoviesList movies={sortedMovies} withYears={!!sort.year} />
        </Container>
      </main>
    </div>
  );
}

export default App;
