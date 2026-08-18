let movie;

const Title = localStorage.getItem("Title");

async function onSearchChange(event) {
  const Title = event.target.value;
  renderMovies(Title);
}

async function renderMovies(Title) {
  const movieListEl = document.querySelector(`.movie-list`);

  movieListEl.classList += ` loading-state`;

  if (!movie) {
    movie = await movieHTML(movie);
  }

  movieListEl.classList.remove(`loading-state`);

  const movies = await fetch(
    `http://www.omdbapi.com/?apikey=[apikey]&s=${Title}`,
  );
  const movieData = await movies.json();
  movieListEl.innerHTML = movieData.Search.map((movie) =>
    movieHTML(movie),
  ).join("");
}

function movieHTML(movie) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        `<div class="movie-card">
      <figure class="movie-card--container">
      <img class="movie-poster" src="${movie.Poster} alt=""></figure>
      <div class="movie-title">${movie.Title}</div>
      <div class="movie-year">${movie.Year}</div>
      <div class="movie-id">${movie.imdbID}</div>
      </div>
      `,
      ]);
    }, 1000);
  });
}

renderMovies(Title);

function openMenu() {
  document.body.classList += " menu-open";
}

function closeMenu() {
  document.body.classList.remove("menu-open");
}
