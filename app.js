//API 1: http://www.omdbapi.com/?apikey=37adbdf5&

async function main() {
  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=&[apikey]&s=${movie.Title}`,
  );
  const movieData = await movies.json();
  const movieListEl = document.querySelector(`.movie-list`);
  console.log(movieData);
  movieListEl.innerHTML = movieData
    .map(
      (movie) =>
        `<div class="movie-card">
      <figure class="movie-card__container">
      <img class="movie-poster" src="${movie.Poster} alt=""></figure>
      <div class="movie-title">${movie.Title}</div>
      <div class="movie-year">${movie.Year}</div>
      <div class="movie-id">${movie.imdbID}</div>
      </div>
      `,
    )
    .join("");
}

main();
