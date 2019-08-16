import React, { FunctionComponent, useEffect, useState } from "react";
import camelcaseKeys from "camelcase-keys";
import "./styles/variables.scss";
import { sortBy } from './helpers';

import { Container } from "reactstrap";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import ListOptions from './components/ListOptions/ListOptions';

interface IMovie {
  id: number,
  localizedName: string,
  name?: string,
  year?: string | number,
  rating?: string | number,
  genres?: string[],
  imageUrl?: string 
}

const App:FunctionComponent = () => {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  const [sort, setSort] = useState({
    year: 'ASC',
    rating: false
  });

  useEffect(() => {
    // fetch list of movies
    fetch("https://s3-eu-west-1.amazonaws.com/sequeniatesttask/films.json")
      .then(res => res.json())
      .then(data => setMovies(camelcaseKeys(data.films)))
      .catch(e => {
        console.error(e);
      });
  }, []);
  console.log(movies)
  // const changeSort = (id) => () => {
  //   const newSort = {...sort};
  //   // * Set all sorts, except chosen to false
  //   Object.entries(sort).forEach((item) => {
  //     const [key, value] = item;
  //     if (key !== id) {
  //       newSort[key] = false
  //     } else {
  //       newSort[key] = value === 'DESC' ? 'ASC' : 'DESC';
  //     }
  //   })
  //   setSort(newSort);
  // }

  // const { year, rating } = sort;
  // const sortedMovies = sortBy(movies, year ? ['year', 'rating'] : 'rating', year || rating);

  return (
    <div className="App">
      <Header />
      <main className="content">
        {/* <Container>
          <ListOptions changeSort={changeSort} sort={sort} />
          <MoviesList movies={sortedMovies} withYears={!!sort.year} />
        </Container> */}
      </main>
    </div>
  );
}

export default App;
