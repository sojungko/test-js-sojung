import moment from 'moment'
import movies from './movies'


export function getPopularMovies () {
  //
  // movies contains the results of two API requests
  //

  //
  // 1. combine the results of these requests
  // 2. sort the results FIRST by year THEN by title
  // 3. each movie object in the results needs a releaseYear attribute added
  //    this is used in src/components/movies-list.js line 25
  //
  const combinedResults = [...movies[0], ...movies[1]]
    .map(movie => Object.assign({}, movie, { releaseYear: movie.releaseDate.substr(0, 4) }))
    .sort((a, b) => {
      if (a.releaseYear === b.releaseYear) {
        console.log(a.title > b.title);
        if (a.title > b.title) {
          return 1;
        }
        return -1;
      }
      return a.releaseYear - b.releaseYear;
    })

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}


