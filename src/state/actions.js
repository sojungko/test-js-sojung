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

  const combinedResults = [...movies[0], ...movies[1]] // Used spread operator to pull out movies from the two arrays
    .map(movie => Object.assign({}, movie, { releaseYear: movie.releaseDate.substr(0, 4) })) // Added the releaseYear property to each movie object
    .sort((a, b) => {
      if (a.releaseYear === b.releaseYear) { // If the release year is the same
        if (a.title > b.title) {             // Sort by title in ascending alphabetical order
          return 1;
        }
        return -1;
      }
      return a.releaseYear - b.releaseYear;  // If the release year is not the same, sort movies by year in ascending order
    })

  return {
    type: 'GET_MOVIES_SUCCESS',
    movies: combinedResults
  }
}


