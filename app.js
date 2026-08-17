async function main() {
  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=37adbdf5&s=Batman`,
  );
  const movieData = await movies.json();
  const movieListEl = document.querySelector(`.movie-list`);
  console.log(movieData);
  movieListEl.innerHTML = movieData.Search.map(
    (movie) =>
      `<div class="movie-card">
      <figure class="movie-card--container">
      <img class="movie-poster" src="${movie.Poster} alt=""></figure>
      <div class="movie-title">${movie.Title}</div>
      <div class="movie-year">${movie.Year}</div>
      <div class="movie-id">${movie.imdbID}</div>
      </div>
      `,
  ).join("");
}

main();

function openMenu() {
  document.body.classList += " menu-open";
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}
